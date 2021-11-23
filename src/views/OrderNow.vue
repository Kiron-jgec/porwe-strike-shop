<template>
  <v-container fluid class="px-15">
    <div class="text-center">
      <h1>Place an Order</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
        similique soluta magnam molestiae repellat delectus, totam quis optio
        officiis consectetur eos consequatur maxime fuga temporibus, ipsam,
        assumenda repudiandae reiciendis quaerat.
      </p>
    </div>

    <v-layout row wrap justify-center class="my-15">
      <v-flex xs12 sm6 md7 lg7 xl7 column justify-center align-self-center>
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
                  :counter="10"
                  label="Full Name"
                  required
                  class="my-0 py-0"
                ></v-text-field>
              </v-col>

              <v-col cols="12" md="12">
                <v-text-field
                  v-model="email"
                  :rules="emailRules"
                  label="Phone No"
                  required
                  type="number"
                  class="my-0 py-0"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="12">
                <v-textarea
                  outlined
                  label="Address"
                  :counter="200"
                  class="messageinput my-0 py-0"
                ></v-textarea>
              </v-col>

              <v-col cols="12" md="6">
                <v-text-field
                  v-model="firstname"
                  :rules="nameRules"
                  :counter="10"
                  label="PIN Code"
                  required
                  class="my-0 py-0"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="firstname"
                  :rules="nameRules"
                  :counter="10"
                  label="Land Mark"
                  required
                  class="my-0 py-0"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="12">
                <v-textarea
                  outlined
                  label="About Work"
                  :counter="200"
                  class="messageinput my-0 py-0"
                ></v-textarea>
              </v-col>
              <v-col cols="12" md="12">
                <v-btn color="primary" block :disabled="!valid" @click="submit"
                  >Send
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
export default {
  data: () => ({
    valid: false,
    firstname: "",
    lastname: "",
    nameRules: [
      (v) => !!v || "Name is required",
      (v) => v.length <= 10 || "Name must be less than 10 characters",
    ],
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+/.test(v) || "E-mail must be valid",
    ],
  }),
};
</script>
<style scoped>
.messageinput {
  resize: none !important;
}
</style>