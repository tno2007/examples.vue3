<script setup lang="ts">
import { ref } from "vue";
const { signIn } = useAuth();

async function submit(data: any) {
  //await new Promise((r) => setTimeout(r, 1000));

  try {
    let res = await signIn(
      { ...data },
      { callbackUrl: "/dashboard/bi" } // Where the user will be redirected after a successiful login
    );

    console.log("res", res);
  } catch (error) {
    console.log("error", error);
  }
}

const model = ref({ username: "u", password: "p" });

definePageMeta({
  auth: {
    unauthenticatedOnly: true,
    navigateAuthenticatedTo: "/",
  },
});
</script>

<template>
  <h3 class="text-2xl pb-5">Login</h3>

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
