# antd-search-box
An ant design based search box

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
          <td>activeKey</td>
          <td>String</td>
          <th></th>
          <td>current active tabPanel's key</td>
      </tr>
      <tr>
          <td>tabBarPosition</td>
          <td>String</td>
          <th></th>
          <td>tab nav 's position. one of ['left','right','top','bottom']</td>
      </tr>
      <tr>
          <td>defaultActiveKey</td>
          <td>String</td>
          <th>first active tabPanel's key</th>
          <td>initial active tabPanel's key if activeKey is absent</td>
      </tr>
      <tr>
         <td>renderTabBar</td>
         <td>():React.Node</td>
         <th></th>
         <td>How to render tab bar</td>
      </tr>
      <tr>
        <td>renderTabContent</td>
        <td>():React.Node</td>
        <th></th>
        <td>How to render tab content</td>
      </tr>
      <tr>
          <td>onChange</td>
          <td>(key: string): void</td>
          <th></th>
          <td>called when tabPanel is changed</td>
      </tr>
      <tr>
          <td>destroyInactiveTabPane</td>
          <td>Boolean</td>
          <th>false</th>
          <td>whether destroy inactive tabpane when change tab</td>
      </tr>
      <tr>
          <td>prefixCls</td>
          <td>String</td>
          <th>rc-tabs</th>
          <td>prefix class name, use to custom style</td>
      </tr>
    </tbody>
</table>

### TabPane

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
