<script setup lang="ts">
import { useAuthStore } from "@/stores/useAuthStore";
const authStore = useAuthStore();
</script>

<template>
  <div>Switchboard</div>

  <ul>
    <li>
      <a :href="`http://localhost:3000/token/${authStore.token}`"
        >Login to exterbal site</a
      >
    </li>
  </ul>

  <button
    @click="authStore.logout"
    type="button"
    class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
  >
    Log out
  </button>
</template>
