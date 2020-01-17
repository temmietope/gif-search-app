import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getGifs } from "../../actions/searchActions";

class SearchForm extends Component {
  state = {
    search: "",
    loading: false
  };

  renderLoading() {
    return <h3>Loading...</h3>;
  }

  render() {
    const { loading, search } = this.state;
    const onChange = e => {
      this.setState({ search: e.target.value });
    };

    const onSubmit = async e => {
      e.preventDefault();
      this.setState({ loading: true });
      await this.props.getGifs({ search, reset: true, offset: 0 });
      this.setState({ loading: false });
    };

    return (
      <div className="search-form">
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
        {loading && this.renderLoading()}
      </div>
    );
  }
}

SearchForm.propTypes = {
  getGifs: PropTypes.func.isRequired
};
const mapStateToProps = state => ({
  offset: state.search.offset
});

export default connect(mapStateToProps, { getGifs })(SearchForm);
