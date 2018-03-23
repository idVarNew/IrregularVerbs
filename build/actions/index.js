
export const filtrByColor = (filterType) => {
  return {
    type: "BY_COLOR",
    filter: filterType
  }
}


export const filtrByFeatured = (filter) => {
  return {
    type: "BY_FEATURED",
    filter: filter
  }
}

export const searchFor = (value, filter) => {
  return {
    type: "SEARCH",
    value: value,
    filter: filter
  }
}

export const showRandomVerb = ( filter) => {
  return {
    type: "RANDOM_VERB",
    filter: filter
  }
}

export const changeColor = (color, index) => {
  return {
    type: "SET_NEW_COLOR",
    color,
    index
  }
}

export const setFeaturedVerb = id => {
  return {
    type: "SET_FEATURED_VERB",
    id
  }
}

export const updateAnswerExam = (answer, index) => {
  return {
    type: "UPDATE_ANSWER",
    answer,
    index
  }
}


export const updateAnswerLearn = (answer, index) => {
  return {
    type: "UPDATE_ANSWER_LEARN",
    answer,
    index
  }
}


export const resetAnswers = () => {
  return {
    type: "RESET_ANSWER",
  }
}


