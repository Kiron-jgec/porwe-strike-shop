<template>
  <div class="">
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <router-link to="/">
          <v-img
            alt="Vuetify Logo"
            class="shrink mr-2 hidden-sm-and-down"
            contain
            src="../assets/logo/logo.png"
            transition="scale-transition"
            width="300"
          />
        </router-link>
        <router-link to="/">
          <v-img
            alt="Power Strike"
            class="shrink mt-1 hidden-sm-and-up"
            contain
            src="../assets/logo/logo.png"
            transition="scale-transition"
            width="140"
          />
        </router-link>
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
          href="https://www.facebook.com/powerstrikeelectricianservce/photos/?ref=page_internal"
          link
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
        src="../assets/logo/icon.png"
        style="width: 50px"
        class="mx-auto my-2"
      >
      </v-img>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item link to="/">
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item
          link
          href="https://www.facebook.com/powerstrikeelectricianservce/photos/?ref=page_internal"
        >
          <v-list-item-icon>
            <v-icon>mdi-image-multiple</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Gallery</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="/#contact">
          <v-list-item-icon>
            <v-icon>mdi-email-outline</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Contact</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="/about">
          <v-list-item-icon>
            <v-icon>mdi-information</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>About Us</v-list-item-title>
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
          link: "https://www.facebook.com/powerstrikeelectricianservce/photos/?ref=page_internal",
        },
        { title: "Contact", icon: "mdi-email-outline", link: "/#contact" },
        { title: "About Us", icon: "mdi-information ", link: "/about" },
      ],
    };
  },
};
</script>