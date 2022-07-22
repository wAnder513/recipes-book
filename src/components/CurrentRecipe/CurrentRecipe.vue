<template>
  <div class="p-3 bg-orange-300">
    <h2 class="text-xl">
      {{ recipe.name }}
    </h2>

    <h2 class="text-xl">
      Energy values
    </h2>

    <div class="flex justify-between max-w-sm  mx-auto mb-3">
      <div
        class="flex flex-col"
        v-for="(energyItem, index) in energyValues"
        :key="{ index }"
      >
        <span>{{ energyItem.nameCategory }}</span>
        <span>{{ energyItem.value }}</span>
      </div>
    </div>

    <h2 class="text-xl">Ingredients</h2>

    <div class="mx-auto max-w-sm">
      <div
        class="text-left"
        v-for="(item, value, index) in recipe.ingredients"
        :key="index"
      >
        {{ index + 1 }}: {{ value }} - {{ item }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({ recipe: 'getCurrentRecipe' }),
    energyValues () {
      return [
        { nameCategory: 'calories', value: this.recipe.energyValues.calories },
        { nameCategory: 'protein', value: this.recipe.energyValues.protein },
        { nameCategory: 'fats', value: this.recipe.energyValues.fats },
        {
          nameCategory: 'carbohydrates',
          value: this.recipe.energyValues.carbohydrates
        }
      ]
    }
  }
}
</script>

<style></style>
