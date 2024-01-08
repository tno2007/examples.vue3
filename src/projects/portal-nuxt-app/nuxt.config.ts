// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@formkit/nuxt", "@sidebase/nuxt-auth"],
  // @formkit/nuxt
  formkit: {
    autoImport: true,
  },
  // @sidebase/nuxt-auth
  /*
  auth: {
    globalAppMiddleware: true,
    //baseURL: process.env.NUXT_PUBLIC_API_URL,
    provider: {
      type: "local",
      endpoints: {
        //signIn: { path: "/api/auth/login", method: "post" },
        signOut: { path: "/identity/accounts/logout", method: "get" },
        signUp: { path: "/identity/accounts/register", method: "post" },
        // getSession: { path: "/identity/me", method: "get" },
        getSession: { path: "/user" },
      },
      pages: {
        login: "/login",
      },
      token: {
        signInResponseTokenPointer: "/token/accessToken",
      },
      sessionDataType: {},
    },
    session: {
      // Whether to refresh the session every time the browser window is refocused.
      enableRefreshOnWindowFocus: true,

      // Whether to refresh the session every `X` milliseconds. Set this to `false` to turn it off. The session will only be refreshed if a session already exists.
      enableRefreshPeriodically: 5000,
    },
    globalMiddlewareOptions: {
      allow404WithoutAuth: true, // Defines if the 404 page will be accessible while unauthenticated
      addDefaultCallbackUrl: "/", // Where authenticated user will be redirected to by default
    },
  },*/
  auth: {
    provider: {
      type: "refresh",
      endpoints: {
        getSession: { path: "/user" },
        refresh: { path: "refresh", method: "post" },
      },
      pages: {
        login: "/login",
        
      },
      token: {
        signInResponseTokenPointer: "/token/accessToken",
        maxAgeInSeconds: 60 * 5, // 5 min
        sameSiteAttribute: "lax",
      },
      refreshToken: {
        signInResponseRefreshTokenPointer: "/token/refreshToken",
      },
    },
    globalAppMiddleware: {
      isEnabled: true,
    },
  },
});
