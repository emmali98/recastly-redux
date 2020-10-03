import Redux from 'redux';

var currentVideoReducer = (state, action) => {
  switch (action.type) {
  case 'CURRENT_VIDEO_CHANGED':
    return action.currentVideo;
  default:
    return state;
  }
};

export default currentVideoReducer;
