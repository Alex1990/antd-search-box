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
          small: <SearchBox size="small" />
        </div>
        <div>
          default: <SearchBox />
        </div>
        <div>
          large: <SearchBox size="large" />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('__react-content'));
