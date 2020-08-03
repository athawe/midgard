<template>
  <v-container fluid pt-5 class="details">
    <v-row class="justify-center" row px-5>
      <v-col cols="12" md="4" px-2 pt-2>
        <v-card>
          <v-card-title>What is Midgard?</v-card-title>
          <v-card-text
            >image at top, title on top of it. Something about premium
            experience and all ages fun. Button takes you to ?</v-card-text
          >
          <v-card-actions><v-btn text>Explore</v-btn></v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="12" md="4" px-2 pb-2>
        <v-card>
          <v-card-title>Alura Larp</v-card-title>
          <v-card-text>Background of Alura Larp. Image here.</v-card-text>
          <v-card-actions><v-btn text>Home Base</v-btn></v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="12" md="4" px-2 pt-2>
        <v-card>
          <v-card-title>A</v-card-title>
          <v-card-text>Full card picture</v-card-text>
          <v-card-actions><v-btn text>C</v-btn></v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "HomeDetails",
  components: {},
};
</script>

<style scoped>
.details {
  background-color: var(--v-background-base);
}
</style>
