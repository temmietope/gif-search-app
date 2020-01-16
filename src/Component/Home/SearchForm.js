import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getGifs } from "../../actions/searchActions";

class SearchForm extends Component {
  state = {
    searchItem: ""
  };
  render() {
    const onChange = e => {
      console.log(e.target.value);
      this.setState({ searchItem: e.target.value });
    };
    const onSubmit = e => {
      e.preventDefault();
      this.props.getGifs(this.state.searchItem);
      console.log(this.state.searchItem);
    };
    return (
      <div className="search-form">
        <h4>Search Gif</h4>
        <form
          onSubmit={e => {
            onSubmit(e);
          }}
        >
          <input
            type="text"
            name="searchItem"
            required
            placeholder="Search for gif"
            onChange={e => {
              onChange(e);
            }}
          />
          <button type="submit">Search</button>
        </form>
      </div>
    );
  }
}

SearchForm.propTypes = {
  getGifs: PropTypes.func.isRequired
};

export default connect(null, { getGifs })(SearchForm);
