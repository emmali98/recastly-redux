import { connect } from 'react-redux';
import Search from './../components/Search.js';
import handleSearchChange from '../actions/search.js';

const mapDispatchToProps = (dispatch) => ({
  handleSearchInputChange: (q) => {
    dispatch(handleSearchChange(q));
  }
});

const SearchContainer = connect(null, mapDispatchToProps)(Search);

export default SearchContainer;
