export const getAuthFromStorage = () => {
  const auth = localStorage.getItem('auth')
  return auth ? JSON.parse(auth) : { user: null, token: null }
}

export const getAccessToken = () => {
  return getAuthFromStorage().token
}

export const getUserFromStorage = () => {
  return getAuthFromStorage().user
}
