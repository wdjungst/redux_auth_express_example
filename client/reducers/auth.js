const auth = (state = { isAuthenticated: false }, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        isAuthenticated: true,
        id: action.id,
        token: action.token
      }
    case 'LOGOUT':
      return {}
    default:
      return state;
  }
}

export default auth;
