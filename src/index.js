import React, { Component, PropTypes } from 'react';
import { Input, Icon } from 'antd';
import classNames from 'classnames';
import omit from 'omit.js';

class SearchBox extends Component {

  static propTypes = {
    prefixCls: PropTypes.string,
    className: PropTypes.string,
    id: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]),
    name: PropTypes.string,
    style: PropTypes.object,
    defaultValue: PropTypes.string,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    size: PropTypes.oneOf(['small', 'default', 'large']),
    disabled: PropTypes.bool,
    readOnly: PropTypes.bool,
    autoFocus: PropTypes.bool,
    autoComplete: PropTypes.oneOf(['on', 'off']),
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onSearch: PropTypes.func,
  };

  static defaultProps = {
    prefixCls: 'antd-search-box',
    style: {},
    size: 'default',
  };

  constructor(props) {
    super(props);
    const { defaultValue, value } = props;
    let currentValue = '';

    if (value !== undefined) {
      currentValue = value;
    } else if (defaultValue !== undefined) {
      currentValue = defaultValue;
    }

    this.state = {
      value: currentValue,
      isFocus: false,
    };

    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.handlePressEnter = this.handlePressEnter.bind(this);
  }

  handleFocus(e) {
    this.setState({ isFocus: true });
    const onFocus = this.props.onFocus;
    if (onFocus) onFocus(e);
  }

  handleBlur(e) {
    this.setState({ isFocus: false });
    const onBlur = this.props.onBlur;
    if (onBlur) onBlur(e);
  }

  handleInputChange(e) {
    const value = e.target.value;
    const onChange = this.props.onChange;

    this.setState({ value });
    if (onChange) onChange(value);
  }

  handleClear() {
    const onChange = this.props.onChange;

    this.setState({ value: '' });
    if (onChange) onChange('');
  }

  handlePressEnter() {
    const onSearch = this.props.onSearch;
    if (onSearch) onSearch(this.state.value);
  }

  render() {
    const { value, isFocus } = this.state;
    const {
      prefixCls,
      className,
      style,
      size,
    } = this.props;

    const cls = classNames({
      [prefixCls]: 1,
      [`${prefixCls}-sm`]: size === 'small',
      [`${prefixCls}-lg`]: size === 'large',
      [className]: !!className,
    });

    let clearButton;

    if (value && isFocus) {
      clearButton = (
        <span
          ref={el => this.clearButton = el}
          onMouseDown={this.handleClear}
        >
          <Icon type="close-circle" />
        </span>
      );
    } else {
      this.clearButton = null;
    }

    const inputProps = omit({
      ...this.props,
      value,
      ref: el => this.antdInput = el,
      prefix: <Icon type="search" />,
      suffix: clearButton,
      onFocus: this.handleFocus,
      onBlur: this.handleBlur,
      onChange: this.handleInputChange,
      onPressEnter: this.handlePressEnter,
    }, [
      'prefixCls',
      'className',
      'style',
      'onSearch',
    ]);

    return (
      <span className={cls} style={style}>
        <Input {...inputProps} />
      </span>
    );
  }
}

export default SearchBox;
