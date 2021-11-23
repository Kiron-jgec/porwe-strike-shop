<template>
  <div class="">
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>
      <div class="navlinks hidden-sm-and-down">
        <v-btn depressed class="mx-1 text-capitalize py-5" to="/" dark text>
          <span class="mx-1">Home</span>
        </v-btn>
        <v-btn
          depressed
          class="mx-1 text-capitalize py-5"
          dark
          text
          to="/gallary"
        >
          <span class="mx-1">Gallery</span>
        </v-btn>
        <v-btn
          depressed
          class="mx-1 text-capitalize py-5"
          dark
          text
          to="/#contact"
        >
          <span class="mx-1">Contact</span>
        </v-btn>
        <v-btn
          depressed
          class="mx-1 text-capitalize py-5"
          to="/about"
          dark
          text
        >
          <span class="mx-1">About Us</span>
        </v-btn>
      </div>
      <v-btn to="/order-now" color="warning" class="text-capitalize">
        <v-icon>mdi-cart</v-icon> Order Now
      </v-btn>

      <v-app-bar-nav-icon
        @click.stop="drawer = !drawer"
        class="hidden-sm-and-up"
      ></v-app-bar-nav-icon>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" fixed temporary class="py-5">
      <v-img
        src="../assets/logo.svg"
        width="100"
        style="width: 80px"
        class="mx-auto my-2"
      >
      </v-img>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          :to="item.link"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>
<script>
export default {
  data() {
    return {
      drawer: null,
      items: [
        { title: "Home", icon: "mdi-home", link: "/" },
        {
          title: "Gallery",
          icon: "mdi-image-multiple",
          link: "/gallary",
        },
        { title: "Contact", icon: "mdi-email-outline", link: "/#contact" },
        { title: "About Us", icon: "mdi-information ", link: "/about" },
      ],
    };
  },
};
</script>