import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,

} from "../actions";

const sidebar_reducer = (state, action) => {
  if (action.type === SIDEBAR_OPEN) {
    // console.log(action);
    return { ...state, isSidebarOpen: true };
  }

  if (action.type === SIDEBAR_CLOSE) {
    // console.log(action);
    return { ...state, isSidebarOpen: false };
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default sidebar_reducer;
