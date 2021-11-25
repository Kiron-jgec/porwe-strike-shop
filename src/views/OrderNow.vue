<template>
  <v-container fluid class="px-md-15">
    <div class="text-center">
      <h1>Book an Elctrician</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
        similique soluta magnam molestiae repellat delectus, totam quis optio
        officiis consectetur eos consequatur maxime fuga temporibus, ipsam,
        assumenda repudiandae reiciendis quaerat.
      </p>
    </div>
    <v-alert color="red" outlined text type="error" v-if="error">{{
      error
    }}</v-alert>

    <v-layout row wrap justify-center class="my-15">
      <v-flex
        xs12
        sm6
        md7
        lg7
        xl7
        column
        justify-center
        align-self-center
        class="hidden-sm-and-down"
      >
        <v-img
          lazy-src="../assets/Order/OrderNow.svg"
          src="../assets/Order/OrderNow.svg"
          width="80%"
        ></v-img>
      </v-flex>
      <v-flex
        xs12
        sm6
        md5
        lg5
        xl5
        column
        justify-center
        class="pa-3"
        style="
          box-shadow: 1px 3px 10px 0 rgba(0, 0, 0, 0.1) !important;
          border-radius: 10px;
        "
        ><v-form v-model="valid">
          <v-container>
            <v-row>
              <v-col cols="12" md="12">
                <v-text-field
                  v-model="firstname"
                  :rules="nameRules"
                  :counter="50"
                  label="Full Name"
                  required
                  class="my-0 py-0"
                ></v-text-field>
              </v-col>

              <v-col cols="12" md="12">
                <v-text-field
                  v-model="pnoneno"
                  :rules="phoneRules"
                  label="Phone No"
                  :counter="10"
                  required
                  type="number"
                  class="my-0 py-0"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="12">
                <v-textarea
                  outlined
                  v-model="address"
                  :rules="addressRules"
                  label="Address"
                  :counter="200"
                  class="messageinput my-0 py-0"
                ></v-textarea>
              </v-col>

              <v-col cols="12" md="6">
                <v-text-field
                  v-model="pinCode"
                  :rules="pinCodeRules"
                  :counter="6"
                  label="PIN Code"
                  required
                  class="my-0 py-0"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="landmark"
                  :rules="landmarkRules"
                  :counter="100"
                  label="Land Mark"
                  required
                  class="my-0 py-0"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="12">
                <v-textarea
                  outlined
                  v-model="aboutWork"
                  :rules="aboutWorkRules"
                  label="About Work"
                  :counter="200"
                  class="messageinput my-0 py-0"
                ></v-textarea>
              </v-col>

              <v-col cols="12" md="12">
                <v-btn
                  color="primary"
                  block
                  :disabled="!valid"
                  @click="submit"
                  :loading="loading"
                  >Book Now
                </v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  data: () => ({
    valid: false,
    postUrl: process.env.VUE_APP_FORMSPREE_URL,
    loading: false,
    error: "",
    firstname: "",

    nameRules: [
      (v) => !!v || "Name is required",
      (v) => v.length <= 50 || "Name must be less than 50 characters",
    ],
    pnoneno: "",
    phoneRules: [
      (v) => !!v || "Phone no is required !",
      (v) => v.length <= 10 || "Phone no must be 10 digit",
      (v) => v.length >= 10 || "Phone no must be 10 digit",
    ],
    // email: "",
    // emailRules: [
    //   (v) => !!v || "E-mail is required",
    //   (v) => /.+@.+/.test(v) || "E-mail must be valid",
    // ],
    address: "",
    addressRules: [
      (v) => !!v || "Address is required",
      (v) => v.length <= 200 || "Address must be less than 200 characters",
    ],
    pinCode: "",
    pinCodeRules: [
      (v) => !!v || "PIN Code is required",
      (v) => v.length <= 6 || "PIN Code must be 6 digit",
      (v) => v.length >= 6 || "PIN Code must be 6 digit",
    ],
    landmark: "",
    landmarkRules: [
      (v) => v.length <= 100 || "Land Mark must be less than 100 characters",
    ],
    aboutWork: "",
    aboutWorkRules: [
      (v) => !!v || "About Work is required",
      (v) => v.length <= 200 || "About Work must be less than 200 characters",
    ],
  }),

  methods: {
    submit() {
      const validation = this.valid;
      this.loading = true;
      if (validation === true) {
        axios
          .post(this.postUrl, {
            firstname: this.firstname,
            pnoneno: this.pnoneno,
            address: this.address,
            pinCode: this.pinCode,
            landmark: this.landmark,
            aboutWork: this.aboutWork,
          })
          .then((response) => {
            this.loading = false;

            if (response.data.ok === true) {
              this.$router.push("/thank-you");
            }
          })
          .catch((error) => {
            this.loading = false;
            this.error = error.response.data.error;
          });
      } else {
        this.loading = false;
        this.error = "Please fill all the fields";
      }
    },
  },
};
</script>
<style scoped>
.messageinput {
  resize: none !important;
}
</style>