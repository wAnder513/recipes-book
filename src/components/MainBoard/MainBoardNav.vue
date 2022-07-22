<template>
  <aside class="w-1/4 p-2 bg-amber-700 min-h-screen">
    <h1 class="text-xl font-bold">All recipes</h1>
    <nav class="flex flex-col">
      <template v-if="hasRecipes">
        <main-board-nav-item
          v-for="recipe in recipes"
          :recipe="recipe"
          :key="recipe.id"
        ></main-board-nav-item>
      </template>
    </nav>
  </aside>
</template>

<script>
import { mapGetters } from 'vuex'
import MainBoardNavItem from './MainBoardNavItem.vue'

export default {
  components: { MainBoardNavItem },
  computed: {
    ...mapGetters({ recipes: 'getRecipes' }),
    hasRecipes () {
      return this.recipes && this.recipes.length > 0
    }
  },
  methods: {}
}
</script>

<style></style>
