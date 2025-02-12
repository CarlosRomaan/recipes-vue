<template>
  <header class="py-4 border-b">
    <nav class="flex container items-center">
      <NuxtLink to="/" class="flex gap-1 items-center">
        <NuxtImg src="/logo.png" alt="icon" width="125px" densities="x1" format="webp" />
        <span class="text-3xl font-bold">Cocina Creativa</span>
      </NuxtLink>
      <ul class="flex gap-6 ml-auto text-xl font-bold capitalize">
        <li>
          <NuxtLink to="/">Inicio</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/about">Acerca de Nosotros</NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup lang="ts"></script>