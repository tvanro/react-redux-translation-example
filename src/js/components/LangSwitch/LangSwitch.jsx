import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { LANG_NAMES } from 'constants/translations';

export default class LangSwitch extends Component {

  render() {
    return (
      <div className="lang" style={{ padding: 20, textAlign: 'center' }}>
        {LANG_NAMES.map((language, i) =>
          <button
            key={i}
            style={{ fontWeight: this.props.locale === language.locale ? 'bold' : '' }}
            onClick={() => this.props.setLanguage(language.locale)}
          >
            <span>{language.name}</span>
          </button>
        )}
      </div>
    );
  }
}

LangSwitch.propTypes = {
  locale: PropTypes.string.isRequired,
  setLanguage: React.PropTypes.func,
};
