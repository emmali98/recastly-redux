import Redux from 'redux';

var videoListReducer = (state = sampleData, action) => {
  switch (action.type) {
  case 'VIDEO_LIST_CHANGED':
    return action.videoList;

  default:
    return state;
  }
};

export default videoListReducer;
