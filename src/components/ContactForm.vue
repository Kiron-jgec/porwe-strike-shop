<template>
  <v-container fluid>
    <v-form v-model="valid">
      <v-container>
        <v-row>
          <v-col cols="12" md="12">
            <v-text-field
              v-model="firstname"
              :rules="nameRules"
              :counter="10"
              label="Full Name"
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="12">
            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="E-mail"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="12">
            <v-textarea
              outlined
              label="Message"
              :counter="200"
              class="messageinput"
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
