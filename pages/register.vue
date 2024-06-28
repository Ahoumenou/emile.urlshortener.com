<template>
  <div class="prose">
    <h1>Inscription</h1>
    <form @submit.prevent="register(form)">
      <label for="">
        <input type="text" v-model="form.name" placeholder="Nom et prénom">
      </label>
      <label for="">
        
        <input type="email" v-model="form.email" placeholder="Email">
      </label>
      <label for="">
        <input type="password" v-model="form.password" placeholder="Mot de passe">
      </label>
      <label for="">
        <input type="password" v-model="form.password_confirmation" placeholder="Confirmer Mot de passe">
      </label>

      <button type="submit" class="btn bg-gray-500">S'inscrire</button>
    </form>

    <p>Avez-vous déjà un compte ?
      <NuxtLink to="/login" class="underline text-lime-600">Connectez-vous !</NuxtLink>
    </p>
  </div>
</template>

<script lang="ts" setup>
import axios from "axios";

definePageMeta({
  layout: "centered",
  middleware: ["guest"],
});

interface RegisterPayload {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
}

const form = ref<RegisterPayload>({
  name: "",
  email: "",
  password: "",
  password_confirmation: "",
});

async function register(payload: RegisterPayload) {
  const res = await axios.post('/register', payload)
  console.log(form)

}

</script>

<style></style>