import 'antd/dist/antd.css';
import 'antd-search-box/assets/index.less';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBox from 'antd-search-box';

class App extends Component {

  render() {
    return (
      <div style={{ margin: 32, width: 300 }}>
        <div>
          <SearchBox autoFocus />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('__react-content'));
