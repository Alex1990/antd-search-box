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
