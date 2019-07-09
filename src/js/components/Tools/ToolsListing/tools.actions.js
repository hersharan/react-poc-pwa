import axios from 'axios';
import { getAuthorization } from '../../../helpers/authorization';

const config = getAuthorization();

function getToolsListing(limit, offset, brandId) {
  return ((dispatch) => {
    dispatch({ type: 'FETCH_TOOLS_LISTING' });

    axios.get(`/api/v1/tools?_format=json&limit=${limit}&offset=${offset}&brand=${brandId}`, config)
      .then((response) => {
        dispatch({type: 'FETCH_TOOLS_LISTING_SUCCESS', payload: response });
      })
      .catch((error) => {
        dispatch({ type: 'FETCH_TOOLS_LISTING_FAILURE', payload: error.response });
        dispatch({ type: "ADD_ERROR", payload: error });
      });
  });
}

const getToolsListingActions = {
  getToolsListing,
};

export default getToolsListingActions;
