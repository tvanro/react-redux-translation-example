import React, { Component } from 'react';
import TranslationContainer from 'components/Translation/TranslationContainer';

export default class HomePage extends Component {

  render() {
    return (
      <div className="row">
        <div className="col-md-6">
          <h1><TranslationContainer translationKey="title"/></h1>
          <p>This is a simple example project to demonstrate how to build a translation component with React and Redux.</p>
          <p>Source code is available here: <a href="https://github.com/tvanro/react-redux-translation-example" target="_blank">https://github.com/tvanro/react-redux-translation-example</a></p>
          <p>Read the <a href="http://www.tvanro.be/tech/building-a-translation-component-with-react-and-redux/" target="_blank">blog post</a> for more details!</p>
        </div>
        <div className="col-md-6">
          <table>
            <caption><TranslationContainer translationKey="table_caption"/></caption>
            <thead>
              <tr>
                <th><TranslationContainer translationKey="table_th_name"/></th>
                <th><TranslationContainer translationKey="table_th_surname"/></th>
                <th><TranslationContainer translationKey="table_th_alias"/></th>
                <th><TranslationContainer translationKey="table_th_profession"/></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Chad</td>
                <td>Wilberts</td>
                <td>MrOne</td>
                <td><TranslationContainer translationKey="developer"/></td>
              </tr>
              <tr>
                <td>Adam</td>
                <td>Smith</td>
                <td>TheSmith</td>
                <td><TranslationContainer translationKey="developer"/></td>
              </tr>
              <tr>
                <td>Sophia</td>
                <td>Canderson</td>
                <td>Candee</td>
                <td><TranslationContainer translationKey="developer"/></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
