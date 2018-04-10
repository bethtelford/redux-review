let initialState = {
  haircolor: 'blue',
  eyecolor: 'blue',
  username: 'orangeluver'
}

const NEW_USERNAME = 'NEW_USERNAME';

export default function reducer(state = initialState, action) {
  console.log('reducer', action)
  switch (action.type) {
    case NEW_USERNAME:
      console.log('new username case', action)
      return {...state, username: action.payload};
    default: 
      return state; 
  }
}

export function updateUsername(newValue, something) {
  console.log("action", newValue)
  return {
    type: NEW_USERNAME,
    payload: newValue
  }
}
updateUsername(null, true)
