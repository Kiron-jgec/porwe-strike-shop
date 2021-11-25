<template>
  <v-container class="px-md-15 primary" fluid>
    <v-layout row wrap justify-center class="pt-5 pb-2 px-4">
      <v-flex xs12 sm6 md4 lg4 xl4 column align-self-center class="text-center">
        <v-img width="80%" src="../assets/logo/logo.png"></v-img>
      </v-flex>
      <v-flex xs12 sm6 md4 lg4 xl4 column align-self-center class="text-center">
        <p class="white--text">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor
          incidunt.
        </p>
      </v-flex>

      <v-flex xs12 sm6 md4 lg4 xl4 column align-self-center class="text-right">
        <v-btn
          v-for="(item, idx) in socials"
          :key="idx"
          :href="item.link"
          class="mx-2"
          icon
        >
          <v-icon size="26px" color="white">
            {{ item.icon }}
          </v-icon>
        </v-btn>
        <div>
          &#169; {{ new Date().getFullYear() }} —
          <strong>Power Stricke</strong>
          <router-link
            to="/privacy-policy"
            class="white--text text-decoration-none"
          >
            - Privacy Policy
          </router-link>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  data: () => ({
    icons: ["mdi-home", "mdi-email", "mdi-calendar", "mdi-delete"],
    socials: [
      {
        icon: "mdi-facebook",
        link: "https://www.facebook.com/",
      },
      {
        icon: "mdi-twitter",
        link: "https://www.twitter.com/",
      },
      {
        icon: "mdi-instagram",
        link: "https://www.instagram.com/",
      },
      {
        icon: "mdi-linkedin",
        link: "https://www.linkedin.com/",
      },
      {
        icon: "mdi-youtube",
        link: "https://www.youtube.com/",
      },
    ],
    items: ["default", "absolute", "fixed"],
    padless: true,
    variant: "default",
  }),
  computed: {
    localAttrs() {
      const attrs = {};

      if (this.variant === "default") {
        attrs.absolute = false;
        attrs.fixed = false;
      } else {
        attrs[this.variant] = true;
      }
      return attrs;
    },
  },
};
</script>