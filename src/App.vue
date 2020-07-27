<template>
  <v-app dark>
    <AppNavigation />

    <v-main absolute>
      <router-view />
    </v-main>

    <!-- <Footer /> -->
  </v-app>
</template>

<script>
import AppNavigation from "./components/AppNavigation";
// import Footer from "./components/Footer";

export default {
  name: "App",
  components: {
    AppNavigation,
  },
  data: () => ({
    drawer: true,
  }),
  created() {
    this.$vuetify.theme.dark = true;
  },
};
</script>
