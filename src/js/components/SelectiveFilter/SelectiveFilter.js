import React from "react";
import PropTypes from 'prop-types';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

import './select.scss';

class SelectiveFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownOpen: false,
      currentOption: 0,
      allLabel: this.props.allLabel,
      data: {0: this.props.allLabel}
    };

    this.toggle = this.toggle.bind(this);
    this.handleOption = this.handleOption.bind(this);
  }

  componentDidMount() {
    this.props.staticData[0] = this.state.allLabel;
    this.setState({data: this.props.staticData});

    if (this.props.selected) {
      this.setState({currentOption: this.props.selected})
    }
  }

  componentWillReceiveProps(nextProps) {
    nextProps.staticData[0] = nextProps.allLabel;
    this.setState({data: nextProps.staticData});

    if (this.props.selected) {
      this.setState({currentOption: this.props.selected})
    }
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  handleOption = (event) => {
    let id = event.target.dataset.id;
    this.setState({currentOption: id});

    this.props.handleSelect(id);
  }

  render() {
    const currentOption = this.state.data[this.state.currentOption] ? this.state.data[this.state.currentOption] : this.state.data[0];

    return (
      <div className="select-filter">
        <Dropdown
          isOpen={this.state.dropdownOpen}
          toggle={this.toggle}
          defaultValue={this.props.selected}>
          <DropdownToggle>
            {currentOption}
          </DropdownToggle>
          <DropdownMenu>
            {
              Object.keys(this.state.data).map((item) => {
                if (item.indexOf('header') !== -1) {
                  return (
                    <DropdownItem header
                      key={item}
                      id={`${Math.random().toFixed(2)}-option-${item}`}
                      value={item}
                      data-id={item}
                    >{this.state.data[item]}
                  </DropdownItem>
                  )
                }
                return (
                  <DropdownItem
                    key={item}
                    id={`${Math.random().toFixed(2)}-option-${item}`}
                    value={item}
                    onClick={this.handleOption}
                    data-id={item}
                  >{this.state.data[item]}
                  </DropdownItem>
                )
              })
            }
          </DropdownMenu>
        </Dropdown>
      </div>
    );
  }
}

SelectiveFilter.propTypes = {
  handleSelect: PropTypes.func.isRequired,
  allLabel: PropTypes.string
}

SelectiveFilter.defaultProps = {
  allLabel: 'All'
}

export default SelectiveFilter;