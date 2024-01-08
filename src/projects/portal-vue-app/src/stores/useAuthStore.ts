import { defineStore } from "pinia";
import { useRouter } from "vue-router";
import wretch from "wretch";

interface ILogin {
  accessToken: string;
}

const apiUrl = `${import.meta.env.VITE_API_URL}`;

export const useAuthStore = defineStore({
  id: "auth",
  state: () => {
    return {
      //user: localStorage.getItem("user"),
      token: localStorage.getItem("token"),
      returnUrl: null as string | null,
    };
  },
  actions: {
    async login(username: string, password: string) {
      await new Promise((r) => setTimeout(r, 1000));

      const d: ILogin = await wretch(`${apiUrl}/api/auth/login`)
        .post({
          username,
          password,
        })
        .json();

      this.token = d.accessToken;

      // store user details and jwt in local storage to keep user logged in between page refreshes
      localStorage.setItem("token", d.accessToken);

      // redirect to previous url or default to home page
      this.router.push("/switchboard");

      // await new Promise((r) => setTimeout(r, 1000)), console.log(username);

      // const user = username;

      // // update pinia state
      // this.user = user as string;

      // // store user details and jwt in local storage to keep user logged in between page refreshes
      // localStorage.setItem("token", JSON.stringify(user));

      // // redirect to previous url or default to home page
      // this.router.push(this.returnUrl || "/dashboard");
    },
    logout() {
      this.token = null;
      localStorage.removeItem("token");
      this.router.push("/");
    },
  },
});
