/* eslint-disable no-undef */
const path = require('path');
const fs = require('fs');
const glob = require('glob');
const parse5 = require('parse5');

const stripHtmlComments = require('strip-html-comments');

// eslint-disable-next-line no-undef
const SRC_DIR = path.resolve(__dirname, '../src/Icons/svgs/src');
const TARGET_DIR = path.resolve(__dirname, '../src/Icons/all');
const ICON_DIR = path.resolve(__dirname, '../src/Icons/');

//
const iconsAdded = [];

// icons which can be partially filled
const PARTIAL_ICONS = ['star-partial', 'star-box-partial'];

const camelize = (name = '', firstSmall = false) => {
  return name
    .replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
      return firstSmall && index === 0
        ? word.toLowerCase()
        : word.toUpperCase();
    })
    .replace(/\s|[-.]+/g, '');
};

const getFileContent = (file) => {
  return fs.readFileSync(path.resolve(__dirname, SRC_DIR, file), 'utf8');
};

const getPathNode = (parent = []) => {
  const filteredPathNode = parent.filter(({ tagName }) => tagName === 'path');

  if (filteredPathNode.length === 1) {
    return filteredPathNode[0];
  }
};

const excludeFill = (node, isPartialIcon = false) => {
  node.childNodes = node.childNodes.reduce((acc, child) => {
    if (child.attrs) {
      // exclude fill attr
      child.attrs = child.attrs.filter((a) => a.name !== 'fill');
      // camelize attr names
      if (!!isPartialIcon) {
        const pathNode = getPathNode(node.childNodes);
        !!pathNode && pathNode.attrs.push({ name: 'fill', value: '' });
      }
      child.attrs = child.attrs.map((a) => {
        a.name = camelize(a.name, true);
        return a;
      });
    } else if (child.value && child.value == '\n') {
      return acc;
    }
    if (child.childNodes && child.childNodes.length) {
      excludeFill(child, isPartialIcon);
    }

    return [...acc, child];
  }, []);

  return node;
};

const getSvgNodes = (doc, isPartialIcon) => {
  const node = doc.childNodes[0].childNodes[1].childNodes[0]; // html > body > svg TODO::remove hardcoding
  return excludeFill(node, isPartialIcon);
};

const getJsTemplate = (icon, svg) => {
  return (
    `import React from "react";\n` +
    `import Icon from "../Icon";\n` +
    `import cuid from "cuid";\n\n` +
    `const ${icon} = props => {\n  ` +
    `const uniqueId = cuid();\n  ` +
    `return (\n    ` +
    `<Icon  uniqueId={uniqueId}  {...props} >\n      ` +
    `${svg}\n` +
    `    </Icon>\n` +
    `  );\n` +
    `};\n\n` +
    `export default ${icon};\n`
  );
};

const getIconImports = (icons) => {
  return icons
    .map(
      (icon) =>
        `export { default as ${path
          .parse(icon)
          .name.trim()} } from "./all/${path.parse(icon).name.trim()}";`,
    )
    .join('\n');
};

const getIndextemplate = (imports) => {
  return `${imports}\n`;
};

const createIndex = () => {
  // eslint-disable-next-line no-undef
  const indexFile = path.resolve(__dirname, ICON_DIR, 'index.js');
  const icons = glob.sync('*.js', { cwd: TARGET_DIR });
  const imports = getIconImports(icons);
  const indexTemplate = getIndextemplate(imports);
  fs.writeFileSync(indexFile, indexTemplate, 'utf-8');
};

const getFillAttrParsed = (str) => {
  const fillStr = 'fill=""';
  if (str.indexOf(fillStr) < 0) {
    return str;
  }

  return str.replace(fillStr, 'fill={`url(#${uniqueId})`}');
};

const processSingleFile = (file) => {
  const fileName = path.parse(file).name.trim();
  const icon = camelize(fileName);
  const isPartialIcon = PARTIAL_ICONS.includes(fileName);

  if (iconsAdded.indexOf(icon) === -1) {
    iconsAdded.push(icon);
    const newFile = icon + '.js';
    const fileContent = getFileContent(file);
    const parsedSVG = parse5.parse(stripHtmlComments(fileContent));
    const filteredSVG = parse5.serialize(getSvgNodes(parsedSVG, isPartialIcon));
    const jsTemplate = getJsTemplate(
      icon,
      isPartialIcon ? getFillAttrParsed(filteredSVG) : filteredSVG,
    );
    fs.writeFileSync(path.resolve(TARGET_DIR, newFile), jsTemplate, 'utf-8');
  }
};

const generateIconList = () => {
  // eslint-disable-next-line no-undef
  const iconListFile = path.resolve(__dirname, ICON_DIR, 'iconList.js');
  const icons = glob.sync('*.svg', { cwd: SRC_DIR });
  const iconImports = icons
    .map(
      (icon) =>
        `import ${camelize(
          path.parse(icon).name.trim(),
        )} from "./all/${camelize(path.parse(icon).name.trim())}";`,
    )
    .join('\n');
  const iconList = icons
    .map((file) => {
      const name = camelize(path.parse(file).name.trim());
      return '{ name: "' + name + '", component: <' + name + ' /> }';
    })
    .join(',\n  ');

  fs.writeFileSync(
    iconListFile,
    `import React from "react";\n${iconImports}\n\nconst iconList = [\n  ${iconList}\n];\n\nexport default iconList;\n`,
    'utf-8',
  );
};

const process = function () {
  if (!fs.existsSync(TARGET_DIR)) {
    fs.mkdirSync(TARGET_DIR);
  }

  const files = glob.sync('*.svg', { cwd: SRC_DIR });
  files.map((file) => processSingleFile(file));
  createIndex();
  generateIconList();
};

process();
