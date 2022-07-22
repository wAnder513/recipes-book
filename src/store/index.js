import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    recipes: [],
    hasRequestErrors: false,
    currentRecipe: {},
  },
  getters: {
    getRecipes(state) {
      return state.recipes
    },
    getCurrentRecipe(state) {
      return state.currentRecipe
    },
  },
  mutations: {
    SET_RECIPES(state, recipes) {
      state.recipes = recipes
    },
    SET_REQUEST_ERRORS(state) {
      state.hasRequestErrors = true
    },
    SET_CURRENT_RECIPES(state, recipe) {
      state.currentRecipe = recipe
    },
  },
  actions: {
    getRecipes({ commit }) {
      axios
        .get(' http://localhost:3000/recipes')
        .catch(() => commit('SET_REQUEST_ERRORS'))
        .then((res) => commit('SET_RECIPES', res.data))
    },
    getCurrentRecipes({ commit }, recipe) {
      commit('SET_CURRENT_RECIPES', recipe)
    },
  },
  modules: {},
})
