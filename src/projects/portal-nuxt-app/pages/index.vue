<script setup lang="ts">
import { ref } from "vue";

async function submit(data: any) {
  // const res = await axios.post(data);
  /*return await authStore
    .login(data.username, data.password)
    .catch((error) => console.error(error));*/
  // do some login things now

  await new Promise((r) => setTimeout(r, 1000)), alert("Logged in!");

  return navigateTo({
    path: "/dashboard",
  });
}

const model = ref({ username: "u", password: "p" });
</script>

<template>
  <h3 class="text-2xl pb-5">Home</h3>
</template>
