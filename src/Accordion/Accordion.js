import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.section``;

/**
 * How is an accordion supposed to behave ?
 * -> only one panel must be open at a time.
 * -> if clicked on a panel it should be open / closed.
 * -> if expanded prop passed down to a child, changes must be reflected.
 * -> latest action will be given priority.
 */
class Accordion extends React.Component {
  state = {
    isOpened: [], // source of truth to find which panel is open.
    isCompact: this.props.appearance === 'compact',
    isSlim: this.props.appearance === 'slim',
  };

  onAccPanelChange(key, onPanelClick, onPanelChange, ...args) {
    if (!this.props.controlled) {
      let expandedPanels = [...this.state.isOpened];
      expandedPanels = expandedPanels.indexOf(key) >= 0 ? [] : [key];
      this.setState(() => ({
        isOpened: expandedPanels,
      }));
      typeof onPanelChange === 'function' && onPanelChange(...args);
    } else {
      /**
       * on change for the panels is supposed to be triggered automatically
       * for controlled components as they control the expanded state.
       */
      typeof onPanelClick === 'function' && onPanelClick(...args);
    }
  }

  setOpenState = (openState) => {
    this.setState({
      isOpened: openState,
    });
  };

  /**
   * removes an element at index `idx` from an array `list`.
   */
  removeElement = (list, idx) => {
    if (idx < 0 || idx >= list.length) return list;
    const firstHalf = list.slice(0, idx);
    const secondHalf = list.slice(idx + 1);
    return firstHalf.concat(secondHalf);
  };

  /**
   *  -> in case expanded is set from outside for a panel
   *  this helper will be called that will set the
   *  isOpenedState with the currently opened element.
   * -> in case expanded is unset from outside for a panel
   *  this helper will remove the key of the panel from
   *  isOpened state.
   * -> onPanelChange hook for the panels will be called.
   */
  onExpandedSetForPanel =
    (key, onPanelChange) =>
    ({ open }) => {
      const expandedPanels = [...this.state.isOpened];

      if (!open && expandedPanels.indexOf(key) >= 0) {
        this.setState((state) => ({
          isOpened: this.removeElement(
            state.isOpened,
            state.isOpened.indexOf(key),
          ),
        }));
      } else if (open && expandedPanels.indexOf(key) === -1) {
        this.setOpenState([key]);
      }

      if (typeof onPanelChange === 'function') {
        onPanelChange({ open: open });
      }
    };

  getPanels() {
    const { children, sidePadding } = this.props;
    const { isCompact, isOpened = [], isSlim } = this.state;

    return React.Children.map(children, (child, index) => {
      const key = child.key || index;
      const expanded = isOpened.indexOf(key) >= 0;

      return (
        child &&
        React.cloneElement(child, {
          key,
          isCurrentlyOpen: expanded,
          expanded: child.props.expanded,
          isCompact,
          isSlim,
          sidePadding,
          onPanelChange: (...args) =>
            this.onAccPanelChange(
              key,
              child.props.onPanelClick,
              child.props.onPanelChange,
              ...args,
            ),
          onExpandedSetForPanel: this.onExpandedSetForPanel(
            key,
            child.props.onPanelChange,
          ),
        })
      );
    });
  }

  render() {
    // console.log(this.state.isOpened);
    const { children } = this.props;
    const { isCompact } = this.state;

    return children !== null ? (
      <Wrapper isCompact={isCompact}>{this.getPanels()}</Wrapper>
    ) : (
      <Wrapper isCompact={isCompact} />
    );
  }
}

Accordion.propTypes = {
  appearance: PropTypes.oneOf(['normal', 'compact', 'slim']),
  sidePadding: PropTypes.string,
  controlled: PropTypes.bool,
  children: PropTypes.node,
};

Accordion.defaultProps = {
  appearance: 'normal',
  sidePadding: '2.4rem',
  controlled: false,
};

export default Accordion;
