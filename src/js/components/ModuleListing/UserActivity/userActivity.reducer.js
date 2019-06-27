import {
  FETCH_NODE_USER_ACTIVITIES,
  FETCH_NODE_USER_ACTIVITIES_SUCCESS,
  FETCH_NODE_USER_ACTIVITIES_FAILURE,
} from '../../helpers/actionConstants';

export default function getNodeUserActivities(state = {
  fetchingNodeUserActivities: false,
  fetchedNodeUserActivities: false,
  nodeUserActivities: [],
  nodeUserActivitiesError: null
}, action) {
  switch(action.type) {
    case FETCH_NODE_USER_ACTIVITIES: {
      return {
        ...state,
        fetchingNodeUserActivities: true,
        fetchedNodeUserActivities: false,
        nodeUserActivities: []
      };
    }
    case FETCH_NODE_USER_ACTIVITIES_SUCCESS: {
      return {
        ...state,
        fetchingNodeUserActivities: false,
        fetchedNodeUserActivities: true,
        nodeUserActivities: action.payload
      };
    }
    case FETCH_NODE_USER_ACTIVITIES_FAILURE: {
      return {
        ...state,
        fetchingNodeUserActivities: false,
        fetchedNodeUserActivities: false,
        nodeUserActivitiesError: action.payload
      };
    }

    default:
      return state;
  }
}
