// initial state
const state = {
  isLoading: true
}
// getters
const getters = {
  isLoading: state => state.isLoading
}

// actions
const actions = {
  isLoading ({ commit, state }, isLoading) {
    state.isLoading = isLoading
  }
}
//
const SWITCH_IS_LOADING = 'SWITCH_IS_LOADING'
// mutations
const mutations = {
  [SWITCH_IS_LOADING] (state, isLoading) {
    state.isLoading = isLoading
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
