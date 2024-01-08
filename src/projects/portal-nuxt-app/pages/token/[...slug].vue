<script setup lang="ts">
import { ref } from "vue";
const route = useRoute();
const { signIn } = useAuth();

definePageMeta({
  auth: false,
});

//const token = route.params.slug[0];

const token = route.query.id;

await useFetch(`http://localhost:44342/api/token/${token}`)
  .then(() => {
    let res = signIn(
      { username: "user1" },
      { callbackUrl: "/dashboard/bi" } // Where the user will be redirected after a successiful login
    );
  })
  .catch(() => {});
</script>

<template>
  <h3 class="text-2xl pb-5">Token</h3>

  <pre>{{ token }}</pre>

  <pre>{{ route.params.slug[0] }}</pre>
</template>
