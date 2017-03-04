/* eslint-disable react/no-multi-comp */

// Skip the issue https://github.com/ariya/phantomjs/issues/14211
require('babel-polyfill');
require('../assets/index.less');
const keyCode = require('rc-util/lib/keyCode');
const expect = require('expect.js');
const SearchBox = require('../index');
const React = require('react');
const ReactDOM = require('react-dom');
const TestUtils = require('react-addons-test-utils');
const Simulate = TestUtils.Simulate;

describe('SearchBox', () => {
  const container = document.createElement('div');
  document.body.appendChild(container);

  let onChangeFirstArgument;
  let onChangeCallCount = 0;
  let onSearchFirstArgument;
  let onSearchCallCount = 0;
  let onFocusCallCount = 0;
  let onBlurCallCount = 0;

  class Component extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        value: undefined,
        size: 'default',
        disabled: false,
        readOnly: false,
        autoFocus: false,
      };
    }

    onChange(value) {
      onChangeFirstArgument = value;
      onChangeCallCount += 1;
      this.setState({ value });
    }

    onSearch(value) {
      onSearchFirstArgument = value;
      onSearchCallCount += 1;
      this.setState({ searchValue: value });
    }

    onFocus() {
      onFocusCallCount += 1;
    }

    onBlur() {
      onBlurCallCount += 1;
    }

    setProp(propName, propValue) {
      this.setState({
        [propName]: propValue,
      });
    }

    render() {
      const { value, size, disabled, readOnly, autoFocus } = this.state;
      return (
        <div>
          <SearchBox
            ref={el => this.searchBox = el}
            value={value}
            size={size}
            disabled={disabled}
            readOnly={readOnly}
            autoFocus={autoFocus}
            onFocus={this.onFocus.bind(this)}
            onBlur={this.onBlur.bind(this)}
            onChange={this.onChange.bind(this)}
            onSearch={this.onSearch.bind(this)}
          />
        </div>
      );
    }
  }

  let example;
  let searchBox;
  let inputElement;

  beforeEach(() => {
    example = ReactDOM.render(<Component />, container);
    searchBox = example.searchBox;
    inputElement = searchBox.antdInput.refs.input;
  });

  afterEach(() => {
    ReactDOM.unmountComponentAtNode(container);
    onChangeFirstArgument = undefined;
    onChangeCallCount = 0;
    onSearchFirstArgument = undefined;
    onSearchCallCount = 0;
    onFocusCallCount = 0;
    onBlurCallCount = 0;
  });

  describe('check props works', () => {
    it('size', () => {
      example.setProp('size', 'small');
      expect(searchBox.props.size).to.be('small');
      example.setProp('size', 'large');
      expect(searchBox.props.size).to.be('large');
    });

    it('disabled', () => {
      example.setProp('disabled', true);
      expect(searchBox.props.disabled).to.be(true);
    });

    it('readOnly', () => {
      example.setProp('readOnly', true);
      expect(searchBox.props.readOnly).to.be(true);
    });

    it('autoFocus', () => {
      example.setProp('autoFocus', true);
      expect(searchBox.props.autoFocus).to.be(true);
    });
  });

  describe('default value', () => {
    it('default value should be empty string', () => {
      class Demo extends React.Component {
        render() {
          return <SearchBox ref={el => this.searchBox = el} />;
        }
      }
      example = ReactDOM.render(<Demo />, container);
      searchBox = example.searchBox;
      inputElement = searchBox.antdInput.refs.input;
      expect(searchBox.state.value).to.be('');
      expect(inputElement.value).to.be('');
    });

    it('default value should be "a"', () => {
      class Demo extends React.Component {
        render() {
          return <SearchBox ref={el => this.searchBox = el} defaultValue="a" />;
        }
      }
      example = ReactDOM.render(<Demo />, container);
      searchBox = example.searchBox;
      inputElement = searchBox.antdInput.refs.input;
      expect(searchBox.state.value).to.be('a');
      expect(inputElement.value).to.be('a');
    });
  });

  describe('input directly', () => {
    it('input one character', () => {
      Simulate.focus(inputElement);
      Simulate.change(inputElement, { target: { value: 'a' } });
      expect(inputElement.value).to.be('a');
      expect(onChangeFirstArgument).to.be('a');
      Simulate.blur(inputElement);
      expect(inputElement.value).to.be('a');
      expect(onChangeFirstArgument).to.be('a');
    });
  });

  describe('clear button', () => {
    it('hide clear button', () => {
      expect(searchBox.clearButton).to.be(null);
      Simulate.focus(inputElement);
      expect(searchBox.clearButton).to.be(null);
    });

    it('show clear button', () => {
      Simulate.focus(inputElement);
      Simulate.change(inputElement, { target: { value: 'a' } });
      expect(TestUtils.isDOMComponent(searchBox.clearButton)).to.be(true);
    });

    it('hide clear button when input value is empty', () => {
      Simulate.focus(inputElement);
      Simulate.change(inputElement, { target: { value: 'a' } });
      Simulate.change(inputElement, { target: { value: '' } });
      expect(searchBox.clearButton).to.be(null);
    });

    it('hide clear button when blur', () => {
      Simulate.focus(inputElement);
      Simulate.change(inputElement, { target: { value: 'a' } });
      Simulate.blur(inputElement);
      expect(searchBox.clearButton).to.be(null);
    });

    it('input value is empty when click the clear button', () => {
      Simulate.focus(inputElement);
      Simulate.change(inputElement, { target: { value: 'a' } });
      Simulate.click(searchBox.clearButton);
      expect(inputElement.value).to.be('');
      expect(searchBox.clearButton).to.be(null);
    });

    it('The onFocus and onBlur should not be called when click the clear button', () => {
      Simulate.focus(inputElement);
      Simulate.change(inputElement, { target: { value: 'a' } });
      const focusCount = onFocusCallCount;
      const blurCount = onBlurCallCount;
      Simulate.click(searchBox.clearButton);
      expect(onFocusCallCount).to.be(focusCount);
      expect(onBlurCallCount).to.be(blurCount);
    });
  });

  describe('onSearch', () => {
    it('press the `Enter`/`Return` key', () => {
      Simulate.focus(inputElement);
      Simulate.change(inputElement, { target: { value: 'a' } });
      Simulate.keyDown(inputElement, { keyCode: keyCode.ENTER });
      expect(onSearchFirstArgument).to.be('a');
      expect(onSearchCallCount).to.be(1);
    });

    it('onSearch should not be called when input only', () => {
      Simulate.focus(inputElement);
      Simulate.change(inputElement, { target: { value: 'a' } });
      expect(onSearchCallCount).to.be(0);
    });
  });
});
