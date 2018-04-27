import { test, jsontest } from '../requests';

const actions = {
    create: "results/create",
    update: "results/update",
    clear: "results/clear"
  };

export const create = payload => {
  return {
    type: actions.create,
    payload
  };
};  

export const update = payload => {
  return {
    type: actions.update,
    payload
  };
};

export const clear = () => {
  return {
    type: actions.clear
  };
};

export const submit = (query) => {
  return dispatch => {
    test(query).then(
      response => {
        dispatch(
          update({
            content: response.data
          })
        );
      },
      error => {
        console.log("error in request");
      }
    );
  }
};

export const submitjson = (query) => {
  console.log(query);
  return dispatch => {
    jsontest(query).then(
      response => {
        console.log(response);
        dispatch(
          update({
            content: response.data
          })
        );
      },
      error => {
        console.log("error in request");
      }
    );
  }
};

/*export const loadCourses = () => {
  return dispatch => {
    getCourses().then(
      response => {
        response.data.length && dispatch(create(response.data));
      },
      error => {
        console.log("error");
      }
    );
  };
};*/

const initialState = {
    query: '',
    content: '<div class="ext">Hello!</div>',
    showExternalHTML: null,
    loading: false,
};

export const resultsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.create:
      return action.payload;
    case actions.update:
      return {
        ...state,
        ...action.payload
      };
    case actions.clear:
      return initialState;
    case actions.submit:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
