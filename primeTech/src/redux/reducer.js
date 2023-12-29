import {
  DATA_SUCCESS,
  DATA_ERROR,
  DATA_LOADING,
  DATA_SUCCESS_ID,
} from "./action.Type";

const initialState = {
  loading: false,
  data: [],
  error: false,
  dataId: {},
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case DATA_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    case DATA_SUCCESS: {
      return {
        ...state,
        loading: false,
        data: payload,
      };
    }
    case DATA_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    case DATA_SUCCESS_ID: {
      return {
        ...state,
        dataId: payload,
      };
    }
  }
};
