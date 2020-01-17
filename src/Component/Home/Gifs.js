import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { loadMore, getGifs } from "../../actions/searchActions";
import InfiniteScroll from "react-infinite-scroller";

const LIMIT = 25;
class GifsBase extends Component {
  render() {
    const { searchResults, search, hasMore } = this.props;
    const renderLoading = () => {
      return <h5>Loading more...</h5>;
    };
    const renderGifs = () => {
      return (
        <div className="search-results-div">
          <h3>
            Search Results for{" "}
            <span>
              {search} - {searchResults.length}
            </span>
          </h3>
          <InfiniteScroll
            pageStart={0}
            loadMore={this.props.getGifs.bind(this, {
              search,
              offset: LIMIT + searchResults.length,
              reset: false
            })}
            hasMore={hasMore}
            loader={renderLoading()}
          >
            <div className="search-results">
              {searchResults.map(item => {
                return (
                  <>
                    <img
                      key={item.id}
                      src={item.images.fixed_height_small.url}
                      alt={item.images.title}
                      onClick={() => {
                        this.props.history.push({
                          pathname: `/gifs/${item.id}`,
                          state: item
                        });
                      }}
                      loading="lazy"
                    />
                  </>
                );
              })}
            </div>
          </InfiniteScroll>
        </div>
      );
    };

   

    return <div className="show-gifs">{search && renderGifs()}</div>;
  }
}

GifsBase.propTypes = {
  searchResults: PropTypes.array.isRequired,
  loadMore: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  searchResults: state.search.gifs,
  loading: state.search.loading,
  search: state.search.search,
  offset: state.search.offset,
  hasMore: state.search.hasMore
});

const Gifs = withRouter(GifsBase);
export default connect(mapStateToProps, { loadMore, getGifs })(Gifs);
