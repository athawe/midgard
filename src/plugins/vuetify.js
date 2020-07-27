import Vue from "vue";
import Vuetify from "vuetify/lib";
import VueRouter from "vue-router";
// import colors from "vuetify/lib/util/colors";

Vue.use(Vuetify);
Vue.use(VueRouter);

export default new Vuetify({
  icons: {
    iconfont: "mdi",
  },
  theme: {
    dark: true,
    default: "dark",
    themes: {
      dark: {
        primary: "#303F9F",
        default: "#3F51B5",
        secondary: "#424242",
        accent: "#607D8B",
        error: "#FF5252",
        info: "#2196F3",
        success: "#4CAF50",
        warning: "#FB8C00",
        background: "#263238",
        text: "#FFFFFF",
        textPrimary: "#212121",
        textSecondary: "#757575",
        divider: "#BDBDBD",
      },
    },
    options: {
      customProperties: true,
    },
  },
});
