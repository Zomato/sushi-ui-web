# sushi-ui-web

### Getting started

- This project uses github package registry to publish package. Installing package from github package registry requires authentication. More information [here](https://docs.github.com/en/enterprise-server@3.3/packages/working-with-a-github-packages-registry/working-with-the-npm-registry)
- Create `.npmrc` file parallel to your `package.json` file
- Add the following content to the `.npmrc` file

```
@zomato:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=github personal access token with read:packages permission
```

- Replace the value of `_authToken` with the github personal access token having `read:packages` permission enabled
- npm install --save @zomato/sushi-ui-web

### How to check components documentation?

- Clone the repository
- Run `npm install`
- Run `npm run storybook`

A browser window will open that contains documentaion of every sushi web component
