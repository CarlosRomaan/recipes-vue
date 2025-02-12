<template>
  <main>
    <section class="container py-20">
      <h1 class="text-6xl font-extrabold mb-6 text-balance">Acerca de Cocina Creativa</h1>
      <div class="text-xl font-bold mb-6 text-balance max-w-screen-lg flex flex-col">
        <p>Somos un grupo de gente apacionada por la cocina y compartimos nuestros conocimientos 
        con las demás personas interesadas en adentrarce a este mundo.</p>
        <br class="my-4" />
        <p>En <span class="text-roll-gold font-extrabold">Cocina Creativa</span> nos dedicamos a facilitar la experiencia culinaria a todos los usuarios, independientemente de su nivel de habilidad en la cocina. Nuestra misión es ofrecer una plataforma integral con recetas detalladas, consejos útiles y herramientas para que cocinar sea una experiencia práctica, educativa y placentera.</p>
        <br class="my-4" />
        <p>Con la ayuda de chefs, nutricionistas y diseñadores expertos, hemos creado una aplicación que no solo te proporciona recetas fáciles de seguir, sino que también optimiza tu tiempo en la cocina, permitiéndote hacer elecciones alimenticias informadas y saludables.</p>
        <br class="my-4" />
        <p>Nos enorgullece ser un aliado en tu jornada culinaria y estamos comprometidos a seguir evolucionando para brindarte lo mejor en el arte de cocinar.</p>
      </div>
    </section>
  </main>
  <footer class="w-full flex justify-center mb-3">
    <p class="font-extrabold text-xl">&copy; {{ year }} - Juan Carlos Román</p>
  </footer>
</template>

<script setup lang="ts">
let date = new Date();
let year = date.getFullYear();

</script>