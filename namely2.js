const averagePlanets = (state, key) => {
  let sum = 0;
  let result = [];
  for (let i = 0; i < state.planets.length; i++) {
    let number = parseInt(state.planets[i].diameter);
    if (number > 0){
      sum += number;
    }
  }
  const average = sum / state.planets.length;
  for (let i = 0; i < state.planets.length; i++) {
    if (state.planets[i].diameter > average) {
      result.push(state.planets[i][key])
    };
  };
  return result;
}

// Returns the names of planets whose diameter is larger than the average
export const selectLargePlanets = state => {
  // TODO
  // get average diameter of all elements in state and initialize to a variable
  let result = [];
  let average = averagePlanets(state, 'name');
  // iterate through state, if diameter is greater than average, return name
  console.log(average)
  return average;
};

// Returns the names of people whose home world is larger than average
export const selectPeopleFromLargePlanets = state => {
  // TODO
  // create a function similar to selectLargePlanets that would push into an array, the URLs of a planet that is larger than average
  // let lgPlanets = [];
  let result = [];
  let lgPlanets = averagePlanets(state, 'url');
  // for (let i = 0; i < state.planets.length; i++) {
  //   if (state.planets[i].diameter > average) {
  //     lgPlanets.push(state.planets[i].url)
  //   };
  // };
  // iterate through state.people and check if the url is included within said array, push into results array the name of person if so
  for (let i = 0; i < state.people.length; i++) {
    if (lgPlanets.includes(state.people[i].homeworld)) {
      result.push(state.people[i].name)
    }
  }
  return result;
};
