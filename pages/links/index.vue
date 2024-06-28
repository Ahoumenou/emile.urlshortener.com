<template>
  <div class="prose max-w-7xl mx-auto">
    <nav class="flex justify-between items-center mb-4 min-w-full">
      <h1 class="mb-0">Mes liens</h1>
      <div class="flex items-center gap-4 justify-center items-center">
        <SearchInput :model-value="search" class="mt-5"/>
        <NuxtLink to="/links/create"
          class="no-underline px-3 py-2 text-white bg-gray-600 hover:bg-gray-800 rounded-md transition-all">Créer
          un Lien</NuxtLink>
      </div>
    </nav>

    <div v-if="true">
      <table class="max-w-7xl mx-auto border text-sm text-left text-gray-500">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th class="w-1/5 px-6 py-3">Lien complet</th>
            <th class="w-1/5 px-6 py-3">Lien court</th>
            <th class="w-1/5 px-6 py-3">Nbr. Vues</th>
            <th class="w-1/5 px-6 py-3">Editer</th>
            <th class="w-1/5 px-6 py-3">Supprimer</th>
            <th class="w-1/5 px-6 py-3" aria-label="Rafraîchir">Rafraichir </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="link in links" :key="link.id" class="bg-white border-b">
            <td class="px-6 py-4">
              <a :href="link.full_links" target="_blank"> {{ link.full_links }}</a>
            </td>
            <td class="px-6 py-4">
              <a :href="`${useRuntimeConfig().public.appUrl}/${link.short_links}`">
                {{ `${useRuntimeConfig().public.appUrl.replace(/^http(s?):\/\//, "")}/${link.short_links}` }}
              </a>
            </td>
            <td class="px-6 py-4"> {{ link.views }}</td>
            <td class="px-6 py-4">
                <NuxtLink :to="`/links/${link.id}`">✏🖍</NuxtLink>
              <!-- <button class="text-gray-500"></button> -->
            </td>
            <td class="px-6 py-4">
              <NuxtLink>🎁</NuxtLink>
            </td>
            <td class="px-6 py-4"></td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-else>
      <p>
        <span v-if="true">Aucun lien ne correspond à votre recherche !</span>
        <span v-if="false">
          Aucun lien créé pour le moment !
          <NuxtLink to="" class="text-green-600 underline">
            Créez votre premier lien.
          </NuxtLink>
        </span>
      </p>
    </div>
  </div>
</template>


<script lang="ts" setup>
const links = [
    {
        short_links: "dfsqsd",
        full_links: "https://emileportofolio-ahoumenous-projects.vercel.app/",
        views: 5,
        id: 2,
    },
        {
            short_links: "dkjksm",
            full_links: "https://catarina.vippinterstis.com/",
            views: 3,
            id: 1,
        },
    {
        short_links: "dsqsdfq",
        full_links: "http://devdocs.io",
        views: 0,
        id: 3,
    }
];

const search = ref("");
definePageMeta({
  middleware: ['auth']
})
</script>
<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
</style>

