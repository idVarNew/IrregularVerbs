import initalState from "../data/verbsList";

const verbs = (state = initalState, action) => {

  switch (action.type) {
    case "SET_FEATURED_VERB":
      const featuredVerb = state.map(item =>
        (item.id === action.id) ?
          {
            ...item,
            featured: !item.featured
          } :
          item
      )
      return featuredVerb;
    case "SET_NEW_COLOR":
      let i = action.index
      const newColor = [
        ...state.slice(0, i),
        { ...state[i], color: action.color },
        ...state.slice(i + 1)
      ]
      return newColor;

    case "UPDATE_ANSWER":
      let index = action.index
      const passed = [
        ...state.slice(0, index),
        { ...state[index], passed: action.answer },
        ...state.slice(index + 1)
      ]
      return passed;

      case "UPDATE_ANSWER_LEARN":
      let index1 = action.index
      const learned = [
        ...state.slice(0, index1),
        { ...state[index1], learned: action.answer },
        ...state.slice(index1 + 1)
      ]
      return learned;

      case "RESET_ANSWER":
      const reset = state.map(item =>{
        return(
          {
            ...item,
            learned: null
          } 
        )
      }     
      )
      return reset;

    default:
      return state;
  }
};

export default verbs;
