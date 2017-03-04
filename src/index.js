import React, { Component, PropTypes } from 'react';
import { Input, Icon } from 'antd';
import classnames from 'classnames';

class SearchBox extends Component {

  static propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    prefixCls: PropTypes.string,
    defaultValue: PropTypes.string,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    size: PropTypes.oneOf(['small', 'default', 'large']),
    autoFocus: PropTypes.bool,
    disabled: PropTypes.bool,
    readOnly: PropTypes.bool,
    onChange: PropTypes.func,
    onSearch: PropTypes.func,
  };

  static defaultProps = {
    style: {},
    prefixCls: 'antd-search-box',
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
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.handlePressEnter = this.handlePressEnter.bind(this);
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
    const { value } = this.state;
    const {
      className,
      style,
      prefixCls,
      defaultValue,
      placeholder,
      size,
      disabled,
      readOnly,
      autoFocus,
    } = this.props;

    const cls = classnames({
      [prefixCls]: 1,
      [`${prefixCls}-sm`]: size === 'small',
      [`${prefixCls}-lg`]: size === 'large',
      [`${prefixCls}-disabled`]: !!disabled,
      [className]: !!className,
    });

    let clearButton;

    if (value) {
      clearButton = (
        <Icon
          ref={el => this.clearButton = el }
          type="close-circle"
          onClick={this.handleClear}
        />
      );
    }

    const inputProps = {
      ref: el => this.antdInput = el,
      prefix: <Icon type="search" />,
      suffix: clearButton,
      defaultValue,
      value,
      placeholder,
      size,
      disabled,
      readOnly,
      autoFocus,
      onChange: this.handleInputChange,
      onPressEnter: this.handlePressEnter,
    };

    return (
      <span className={cls} style={style}>
        <span className={`${prefixCls}-input`}>
          <Input {...inputProps} />
        </span>
      </span>
    );
  }
}

export default SearchBox;
