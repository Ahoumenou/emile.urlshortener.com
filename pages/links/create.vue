<template >
  <div class="flex justify-center items-center">
    <div class="prose">
      <h1>Créer un nouveau lien</h1>
      <GoBack>Revenir en arrière</GoBack>
      <form>
        <label for="link">Lien complet</label>
        <input id="link" type="text" name="full_link" placeholder="Entrez le lien complet..." autofocus />
        <button class="btn bg-gray-500">Créer le lien</button>
      </form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import centeredVue from "~/layouts/centered.vue";


definePageMeta({
    layout: "default",
    middleware: ["auth"],
})

</script>

<style>
</style>