import axios from 'axios';
import { getAuthorization } from '../../helpers/authorization';

const config = getAuthorization();

function getNodeUserActivities(nids) {
  const nodeStringFormat = nids !== undefined ? nids.map(nodeId => 'id[]=' + nodeId).join('&') : '';
  return ((dispatch) => {
    dispatch({ type: 'FETCH_NODE_USER_ACTIVITIES' });
    axios.get(`/lm/api/v1/userActivities?_format=json&${nodeStringFormat}`, config)
    .then((response) => {
      dispatch({ type: 'FETCH_NODE_USER_ACTIVITIES_SUCCESS', payload: response.data });
    })
    .catch((error) => {
      dispatch({ type: 'FETCH_NODE_USER_ACTIVITIES_FAILURE', payload: error.response });
      dispatch({ type: "ADD_ERROR", payload: error })
    });
  });
}

const getUserActivitiesAction = {
  getNodeUserActivities,
};

export default getUserActivitiesAction;
