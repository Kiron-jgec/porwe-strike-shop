<template>
  <v-container fluid>
    <div class="conatb">
      <div class="">
        <v-img
          width="35%"
          src="../assets/thankyou/thankyou.svg"
          class="mx-auto"
        ></v-img>
        <div class="text-center">
          <h1 class="warning--text">Your order has been placed successfully</h1>
          <p class="grey--text">
            Your order has been placed successfully. We will contact you soon by
            your provided phone number.
          </p>
          <v-btn
            depressed
            color="primary"
            class="mx-2 my-3 text-capitalize py-5"
            to="/"
          >
            <v-icon medium class="mr-2"> mdi-keyboard-backspace </v-icon>Go
            Home</v-btn
          >
        </div>
      </div>
    </div>
  </v-container>
</template>

<script>
export default {};
</script>

<style scoped>
.conatb {
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
}
</style>