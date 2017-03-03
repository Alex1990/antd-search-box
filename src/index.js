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
    disabled: PropTypes.bool,
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

    this.state = {
      value: value !== undefined ? value : defaultValue,
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

    this.setState({ value: undefined });
    if (onChange) onChange(undefined);
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
    } = this.props;

    const cls = classnames({
      [prefixCls]: 1,
      [`${prefixCls}-${size}`]: 1,
      [`${prefixCls}-disabled`]: !!disabled,
      [className]: !!className,
    });

    const inputProps = {
      prefix: <Icon type="search" />,
      suffix: value ? <Icon type="close-circle" onClick={this.handleClear}/> : undefined,
      defaultValue,
      value,
      placeholder,
      size,
      disabled,
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
