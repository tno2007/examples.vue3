<script setup lang="ts">
import { ref } from "vue";
import { useAuthStore } from "@/stores/useAuthStore";

const authStore = useAuthStore();
// This is just a mock of an actual axios instance.
const axios = {
  post: () => new Promise((r) => setTimeout(r, 2000)),
};

async function submit(data: any) {
  // const res = await axios.post(data);

  return await authStore
    .login(data.username, data.password)
    .catch((error) => console.error(error));

  // do some login things now
  // alert("Logged in!");
}

const model = ref({ username: "u", password: "p" });
</script>

<template>
  <h3 class="text-2xl pb-5">Home</h3>

  <FormKit
    type="form"
    submit-label="Login"
    @submit="submit"
    v-model="model"
    #default="{ value }"
  >
    <FormKit
      type="text"
      label="Username"
      name="username"
      validation="required|matches:u"
    />
    <FormKit
      type="text"
      label="Password"
      name="password"
      validation="required|matches:p"
    />
    <p>{{ value }}</p>
  </FormKit>
</template>
