import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

export default class Translation extends Component {

  render() {
    return (<span>{this.props.translation}</span>);
  }
}

Translation.propTypes = {
  translation: PropTypes.string.isRequired,
};
