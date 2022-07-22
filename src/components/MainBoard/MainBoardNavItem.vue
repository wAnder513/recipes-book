<template>
  <div @click="setCurrentRecipe">{{ recipe.name }}</div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: {
    recipe: { type: Object, require: true }
  },
  methods: {
    ...mapActions(['getCurrentRecipes']),
    setCurrentRecipe () {
      this.getCurrentRecipes(this.recipe)

      this.cahngeUrl()
    },
    cahngeUrl () {
      this.$router.push({ name: 'recipe', params: { id: this.recipe.id } })
    }
  }
}
</script>

<style></style>
