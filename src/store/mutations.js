export default {
  setUserData: function (state) {
    localStorage.setItem('userData', JSON.stringify(state.userData))
    console.log(localStorage.getItem('userData'))
  }
}
