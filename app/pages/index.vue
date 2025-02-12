<template>
  <main>
    <section class="bg-[#f1f1f1]">
      <div class="container flex flex-col lg:flex-row items-center py-20 gap-10">
        <div class="flex-1 order-2 lg:order-1 text-center lg:text-left">
          <h1 class="text-4xl lg:text-6xl font-extrabold mb-6 text-balance">
            ¡Libera al Chef que hay dentro de ti!
          </h1>
          <p class="text-xl lg:text-2xl mb-8 text-balance">
            Descubre nuevas recetas y aprende la mejor manera de prepararlas.
          </p>
          <button class="px-4 py-2 text-white self-start bg-roll-gold rounded-md text-lg cursor-pointer">
            <a href="#recipes">Ver recetas</a>
          </button>
        </div>
        <div class="flex-1 order-1 lg:order-2">
          <NuxtImg 
            src="/hero.jpg" 
            alt="food" 
            format="webp" 
            density="x1" 
            sizes="xs:100vw sm:667px" 
          />
        </div>
      </div>
    </section>
    <section class="py-20 container" id="recipes">
      <h2 class="text-3xl lg:text-5xl mb-2">Descubre, crea, comparte</h2>
      <p class="text-lg lg:text-xl mb-8">¡Echa un vistazo a nuestrar recetas más populares!</p>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8">
        <div v-for="recipe in data?.recipes" class="flex flex-col shadow rounded-md">
          <NuxtImg 
            :src="recipe.image" 
            :alt="recipe.name"
            sizes="xs:100vw sm:50vw lg:400px"
            format="webp"
            densities="x1"
            class="rounded-t-md"
          />

          <div class="flex flex-col py-6 px-4 flex-1">
            <p class="text-xl lg:text-2xl font-semibold mb-2">{{ recipe.name }}</p>
            <div class="font-normal w-full bg-white/80 flex gap-8 text-lg lg:text-xl mb-4 mt-auto">
              <div class="flex items-center gap-1">
                <Icon name="mdi:clock-time-eight-outline" style="color: #f79f1a" />
                <span>{{ recipe.cookTimeMinutes }}</span>
              </div>
              <div class="flex items-center gap-1">
                <Icon name="mdi:fire" style="color: #f79f1a" />
                <span>{{ recipe.caloriesPerServing }}</span>
              </div>
              <div class="flex items-center gap-1">
                <Icon name="mdi:star" style="color: #f79f1a" />
                <span>{{ recipe.rating }} {{ recipe.reviewCount }}</span>
              </div>
            </div>
            <NuxtLink 
              :to="`/recipes/${recipe.id}`"
              class="px-4 py-2 text-white self-start bg-roll-gold rounded-md text-base lg:text-lg cursor-pointer"
            >
              Más info
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </main>
  <footer class="w-full flex justify-center mb-3">
    <p class="font-extrabold text-xl">&copy; {{ year }} - Juan Carlos Román</p>
  </footer>
</template>

<script setup lang="ts">
import { RecipeResponse } from "~/types/index";
const API_URL = "https://dummyjson.com/recipes?limit=24";

const { data, error } = await useFetch<RecipeResponse>(API_URL);

let date = new Date();
let year = date.getFullYear();
</script>