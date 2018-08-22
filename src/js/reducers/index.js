import {ADD_ARTICLE, DELETE_ARTICLE} from "../constatns/action-types";

const initialState = {
  articles: []
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ARTICLE:
      console.log(action)
      console.log(state);
      return {...state, articles: [...state.articles, action.payload]}; // spread operator 新しい配列を作ってマージ
      // state.articles.push(action.payload);// don't this is mutable
      // return state;
    case DELETE_ARTICLE:
      console.log(state);
      return {...state, articles : state.articles.filter(article => article.id !== action.payload)}
    default:
      return state;
  }
};

export default rootReducer;
