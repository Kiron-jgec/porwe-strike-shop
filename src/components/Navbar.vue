<template>
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

    <v-btn depressed class="mx-1 text-capitalize py-5" dark text>
      <span class="mx-1">Home</span>
    </v-btn>
    <v-btn depressed class="mx-1 text-capitalize py-5" dark text>
      <span class="mx-1">Contact</span>
    </v-btn>
    <v-btn depressed class="mx-1 text-capitalize py-5" dark text>
      <span class="mx-1">About Us</span>
    </v-btn>

    <v-btn to="/order-now" color="warning" class="text-capitalize">
      <v-icon>mdi-cart</v-icon> Order Now
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {};
</script>

<style>
</style>