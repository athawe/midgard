<template>
  <v-container fluid fill-height class="landing-page">
    <v-layout justify-center align-center column pa-5>
      <v-flex class="text-h1 font-weight-bold white--text text-center headFont">
        Alura: Midgard
      </v-flex>
      <v-flex class="text-h4 white--text text-center">
        Find your place... in a new world!
      </v-flex>
      <v-flex>
        <v-btn color="accent">
          Sign up!
        </v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "HomeHero",
};
</script>

<style scoped>
.landing-page {
  background-image: linear-gradient(
      rgba(38, 50, 56, 0.7),
      rgba(38, 50, 56, 0.7)
    ),
    url("../assets/midgard-logo.png");
  background-size: contain;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  max-height: 100vh;
}
.headFont {
  font-family: "Lato" !important;
}
</style>
