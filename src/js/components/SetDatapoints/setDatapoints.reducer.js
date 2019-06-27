import {
  SET_DATAPOINTS,
  SET_DATAPOINTS_SUCCESS,
  SET_DATAPOINTS_FAILURE,
} from '../../helpers/actionConstants';

export default function setDatapoints(state = {
  settingDatapoints: false,
  setDatapoints: false,
  datapoints: [],
  setDatapointsError: null,
}, action) {
  switch(action.type) {
    case SET_DATAPOINTS: {
      return {
        ...state,
        settingDatapoints: true,
        setDatapoints: false,
        datapoints: []
      };
    }
    case SET_DATAPOINTS_SUCCESS: {
      return {
        ...state,
        settingDatapoints: false,
        setDatapoints: true,
        datapoints: action.payload
      };
    }
    case SET_DATAPOINTS_FAILURE: {
      return {
        ...state,
        setDatapoints: false,
        settingDatapoints: false,
        setDatapointsError: action.payload
      };
    }

    default:
      return state;
  }
}
