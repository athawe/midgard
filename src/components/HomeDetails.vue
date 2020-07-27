<template>
  <v-container fluid pt-5 class="details">
    <v-row class="justify-center" row px-5>
      <v-col cols="12" md="4" px-2 pb-2>
        <v-card>
          <v-card-title>Alura Larp</v-card-title>
          <v-card-text
            >History Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Saepe reiciendis molestiae error ut consequuntur maxime eveniet at
            perferendis iste quae rerum atque similique maiores illum
            consectetur explicabo facere suscipit cumque, quia vitae,
            perspiciatis, fugiat dicta quas. Dolores, velit perferendis
            similique cum necessitatibus ducimus? Officiis magnam, delectus sit
            esse distinctio minima.</v-card-text
          >
          <v-card-actions><v-btn text>Main Site</v-btn></v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="12" md="4" pa-2>
        <v-card>
          <v-card-title>A</v-card-title>
          <v-card-text>Midgard logo</v-card-text>
          <v-card-actions><v-btn text>Learn More</v-btn></v-card-actions>
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
