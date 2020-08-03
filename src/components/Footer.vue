<template>
  <v-container class="footerStyle" fluid>
    <v-row justify="center" no-gutters>
      <!-- <v-col cols="12" v-if="$vuetify.breakpoint.mobile">
        <v-bottom-navigation
          class="flex"
          value="value"
          active.sync="value"
          color="primary"
          dark
          grow
        >
          <v-btn dark>
            <span>Sign Up</span>
            <v-icon>icon</v-icon>
          </v-btn>
          <v-btn dark>
            <span>Login</span>
            <v-icon>icon</v-icon>
          </v-btn>
        </v-bottom-navigation>
      </v-col> -->
      <v-col cols="0" md="1" />
      <v-col cols="6" md="2">
        <v-container>
          <v-row class="headline text-right">
            <v-col cols="12" class="pb-0">
              Social Media &amp;
            </v-col>
            <v-col cols="12" class="pt-0">
              Contact Information:
            </v-col>
          </v-row>
        </v-container>
      </v-col>
      <v-col cols="6" md="2">
        <v-container>
          <v-row class="white--text">
            <v-col class="white--text font-italic pb-0 ml-1" cols="12">
              Alura LARP
            </v-col>
            <v-col cols="12">
              <v-divider></v-divider>
            </v-col>
            <v-col
              cols="12"
              class="pa-0 ml-3"
              @click="
                {
                  {
                    leaveSite(aluraLinks.facebook);
                  }
                }
              "
            >
              <v-btn text>
                <v-btn icon color="#3b5998">
                  <v-icon>mdi-facebook</v-icon>
                </v-btn>
                Facebook
              </v-btn>
            </v-col>
            <v-col cols="12" class="pa-0 ml-3">
              <v-btn text>
                <v-btn icon color="red lighten-3">
                  <v-icon>mdi-instagram</v-icon>
                </v-btn>
                Instagram
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
      <v-col cols="6" md="2">
        <v-container>
          <v-row class="white--text">
            <v-col class="white--text font-italic pb-0 ml-1" cols="12">
              Midgard
            </v-col>
            <v-col cols="12">
              <v-divider></v-divider>
            </v-col>
            <v-col cols="12" class="pa-0 ml-3">
              <v-btn text link to="/aluraFacebook">
                <v-btn icon color="#3b5998">
                  <v-icon>mdi-facebook</v-icon>
                </v-btn>
                Facebook
              </v-btn>
            </v-col>
            <v-col cols="12" class="pa-0 ml-3">
              <v-btn text>
                <v-btn icon color="red lighten-3">
                  <v-icon>mdi-instagram</v-icon>
                </v-btn>
                Instagram
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
      <v-col cols="6" md="2">
        <v-container>
          <v-row class="white--text">
            <v-col class="white--text font-italic pb-0 ml-1" cols="12">
              Contact
            </v-col>
            <v-col cols="12">
              <v-divider></v-divider>
            </v-col>
            <v-col class="pa-0 ml-3" cols="12">
              <v-btn text>
                <v-btn icon :href="`mailto:${midgardEmail}`">
                  <v-icon>mdi-email</v-icon>
                </v-btn>
                Email
              </v-btn>
            </v-col>
            <v-col class="pa-0 ml-3" cols="12">
              <v-btn text>
                <v-btn icon>
                  <v-icon>mdi-phone</v-icon>
                </v-btn>
                Phone
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
      <v-col cols="12" md="2">
        <v-row class="white--text text-center fill-height" align-content="end">
          <v-col class="text-right">
            <a
              :href="`${githubLink}`"
              style="text-decoration:none"
              class="white--text overline"
            >
              &copy; A.T. - {{ new Date().getFullYear() }}
            </a>
          </v-col>
        </v-row>
      </v-col>
      <v-col md="1" cols="0" />
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Footer",
  data: () => ({
    midgardEmail: "sample@midgard.ca",
    githubLink: "https://github.com/athawe",
    aluraLinks: {
      website: "https://www.aluralarp.ca",
      facebook: "https://www.facebook.com/AluraLarp/",
      instagram: "https://www.instagram.com/aluralarp/",
    },
    midgardLinks: {
      facebook: "https://www.facebook.com/groups/2550302638413211/",
      instagram: "https://www.instagram.com/aluramidgard/",
    },
    contactInfo: {
      email: "",
      phone: "",
    },
  }),
  methods: {
    leaveSite(outgoingLink) {
      window.location.replace(outgoingLink);
    },
  },
};
</script>

<style scoped>
.footerStyle {
  background-color: #272727;
}
</style>
