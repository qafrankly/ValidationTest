import React, { Component, PropTypes } from 'react';

class ChevronRight extends Component {
  static propTypes = {
    color: PropTypes.string
  }

  static defaultProps = {
    color: '#000'
  }

  render() {
    const { color: fill } = this.props;

    return (
      <svg className="ChevronRight" style={{fill}} x="0px" y="0px" width="22px" height="25px" viewBox="0 -5 7.2 18" xmlSpace="preserve">
        <polygon points="1.2,0 0,1.2 4.8,6 0,10.8 1.2,12 7.2,6 " />
      </svg>
    );
  }
}

export default ChevronRight;
