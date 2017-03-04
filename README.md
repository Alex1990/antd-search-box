# antd-search-box

An ant design based search box.

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![gemnasium deps][gemnasium-image]][gemnasium-url]
[![node version][node-image]][node-url]
[![npm download][download-image]][download-url]

[npm-image]: http://img.shields.io/npm/v/antd-search-box.svg?style=flat-square
[npm-url]: http://npmjs.org/package/antd-search-box
[travis-image]: https://img.shields.io/travis/Alex1990/antd-search-box.svg?style=flat-square
[travis-url]: https://travis-ci.org/Alex1990/antd-search-box
[coveralls-image]: https://img.shields.io/coveralls/Alex1990/antd-search-box.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/Alex1990/antd-search-box?branch=master

## Examples

http://localhost:8002/examples

Online examples: http://Alex1990.github.io/antd-search-box/

## Install

```sh
npm install antd-search-box
```

## Usage

```js
import 'antd/dist/antd.css';
import 'antd-search-box/assets/index.less';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBox from 'antd-search-box';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: undefined,
      keyword: undefined,
    };
  }

  handleChange(value) {
    this.setState({ value });
  }

  handleSearch(value) {
    this.setState({ keyword: value });
  }

  render() {
    const { value, keyword } = this.state;
    return (
      <div style={{ margin: 32, width: 300 }}>
        <div>Current value: {value}</div>
        <div>Press `Enter/Return` to search: {keyword}</div>
        <div>
          <SearchBox
            value={value}
            placeholder="Type the keyword"
            onChange={this.handleChange.bind(this)}
            onSearch={this.handleSearch.bind(this)}
          />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('__react-content'));
```

## API

### SearchBox

#### props:

<table class="table table-bordered table-striped">
    <thead>
      <tr>
          <th style="width: 100px;">name</th>
          <th style="width: 50px;">type</th>
          <th>default</th>
          <th>description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
          <td>className</td>
          <td>String</td>
          <th><code>""</code></th>
          <td>Set the `SearchBox` className.</td>
      </tr>
      <tr>
          <td>style</td>
          <td>Object</td>
          <th><code>{}</code></th>
          <td>Set the `SearchBox` style prop.</td>
      </tr>
      <tr>
          <td>defaultValue</td>
          <td>String</td>
          <th></th>
          <td></td>
      </tr>
      <tr>
          <td>value</td>
          <td>String</td>
          <th></th>
          <td></td>
      </tr>
      <tr>
          <td>size</td>
          <td>String</td>
          <th><code>"default"</code></th>
          <td>There are three valid values: <code>"small"</code>, <code>"default"</code> and <code>"large"</code>.</td>
      </tr>
      <tr>
          <td>disabled</td>
          <td>Boolean</td>
          <th>false</th>
          <td></td>
      </tr>
      <tr>
          <td>placeholder</td>
          <td>String</td>
          <th></th>
          <td></td>
      </tr>
      <tr>
          <td>onChange</td>
          <td>Function</td>
          <th></th>
          <td>When the value of the search input is modified, this function will be called.</td>
      </tr>
      <tr>
          <td>onSearch</td>
          <td>Function</td>
          <th></th>
          <td>When press the <code>Enter</code> key, this function will be called.</td>
      </tr>
    </tbody>
</table>

The other props will be as the Ant Design `Input`'s props.

## Development

```
npm install
npm start
```

## Test Case

```
npm test
npm run chrome-test
```

## Coverage

```
npm run coverage
```

open coverage/ dir

## License

antd-search-box is released under the MIT license.
