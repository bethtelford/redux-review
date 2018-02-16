let initialState = {
  username: '',
  hairColor: ''
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'USERNAME_INPUT':
      return Object.assign({}, state, {username: action.payload})
    default: 
      return state; 
  }
}


export function updateUsername(pkg) {
  return {
    type: 'USERNAME_INPUT',
    payload: pkg
  }
}