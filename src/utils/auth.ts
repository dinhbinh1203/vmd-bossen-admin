export const getAccessToken = () => {
  return localStorage.getItem('token')
}

export const getUserFromStorage = () => {
  const user = localStorage.getItem('user')
  return user ? JSON.parse(user) : null
}
