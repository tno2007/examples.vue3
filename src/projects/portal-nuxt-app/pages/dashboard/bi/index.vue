<script setup lang="ts">
import { useIdle } from "@vueuse/core";

const { idle, lastActive } = useIdle(5 * 1000); // 5s
const { token, lastRefreshedAt, getSession, data, status, signOut } = useAuth();

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

const refresh = async () => {
  //await getSession({ force: true });
  // console.log(status.value);
  await useFetch("/api/auth/token");
};

watch(idle, (idleValue) => {
  if (idleValue) {
    // inc()
    //console.log(`Triggered ${count.value} times`)
    //reset() // restarts the idle timer. Does not change lastActive value
    signOut({ callbackUrl: "/" });
  }
});
</script>

<template>
  <h3 class="text-2xl pb-5">BI - Welcome</h3>

  <textarea v-model="token" cols="30" rows="10"></textarea>

  <br /><br />
  idle: {{ idle }}

  <br /><br />
  <pre>lastRefresh: {{ lastRefreshedAt }}</pre>

  <br />

  <button @click="refresh">refresh</button>
</template>
