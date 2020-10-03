import { connect } from 'react-redux';
import Search from './../components/Search.js';
import handleSearchChange from '../actions/search.js';

const mapDispatchToProps = (dispatch) => ({
  getYouTubeVideos: (q) => dispatch(handleSearchChange(q))
});

export default connect(null, mapDispatchToProps)(Search);
