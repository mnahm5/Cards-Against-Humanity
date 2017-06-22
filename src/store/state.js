export default {
  userData: JSON.parse(localStorage.getItem('userData')) || {
    username: null,
    gameId: null
  }
}
