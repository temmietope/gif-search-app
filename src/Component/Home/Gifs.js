import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { loadMore, getGifs } from "../../actions/searchActions";
import InfiniteScroll from "react-infinite-scroller";

class GifsBase extends Component {
  componentDidMount() {
    console.log("from here");
    console.log(this.props.searchResults);
    console.log(this.props.loading);
  }
  componentDidUpdate() {
    console.log(this.props.searchResults);
    console.log(this.props.loading);
  }
  render() {
    const { searchResults, searchKeyWord, loading } = this.props;

    const renderGifs = () => {
      return (
        <div className="search-results-div">
          <h3>
            Search Results for <span>{searchKeyWord}</span>
          </h3>
          <InfiniteScroll
            pageStart={0}
            loadMore={this.props.getGifs(searchKeyWord, this.props.offSet)}
            hasMore={true || false}
            loader={
              <div className="loader" key={0}>
                Loading ...
              </div>
            }
          >
            <div className="search-results">
              {searchResults.map(item => {
                return (
                  <img
                    key={item.id}
                    src={item.images.original.url}
                    alt={item.images.title}
                    onClick={() => {
                      this.props.history.push({
                        pathname: `/gifs/${item.id}`,
                        state: item
                      });
                    }}
                  />
                );
              })}
            </div>
          </InfiniteScroll>
        </div>
      );
    };
    const renderLoading = () => {
      return <div>Loading...</div>;
    };
    return (
      <div className="show-gifs">
        <h4>GIF SEARCH</h4>
        {loading ? renderLoading() : searchKeyWord && renderGifs()}
      </div>
    );
  }
}

GifsBase.propTypes = {
  searchResults: PropTypes.array.isRequired,
  loadMore: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  searchResults: state.search.gifs,
  loading: state.search.loading,
  searchKeyWord: state.search.searchKeyWord,
  offSet: state.search.offSet
});

const Gifs = withRouter(GifsBase);
export default connect(mapStateToProps, { loadMore, getGifs })(Gifs);
