<template>
  <div class="home">
    <v-container fluid class="landingSec">
      <div class="landingSeclayer px-15">
        <div class="landingtext text-center">
          <h1>Power strike Electrician Services</h1>
          <p class="my-3">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta
            culpa fugiat, libero quod in excepturi impedit delectus distinctio
            corrupti aperiam eveniet earum nemo illum odio ducimus totam vero
            architecto suscipit.
          </p>
          <div class="chips">
            <v-chip color="white" class="my-2 mx-3" outlined
              ><v-icon small class="mr-2"> mdi-phone-plus </v-icon>Hello</v-chip
            >
            <v-chip color="white" class="my-2 mx-3" outlined
              ><v-icon small class="mr-2"> mdi-phone-plus </v-icon>Hello</v-chip
            >
            <v-chip color="white" class="my-2 mx-3" outlined
              ><v-icon small class="mr-2"> mdi-phone-plus </v-icon>Hello</v-chip
            >
            <v-chip color="white" class="my-2 mx-3" outlined
              ><v-icon small class="mr-2"> mdi-phone-plus </v-icon>Hello</v-chip
            >
            <v-chip color="white" class="my-2 mx-3" outlined
              ><v-icon small class="mr-2"> mdi-phone-plus </v-icon>Hello</v-chip
            >
          </div>
          <div class="buttons my-8">
            <v-btn
              depressed
              color="primary"
              class="mx-2 my-3 text-capitalize py-5"
              :href="'tel:' + phoneNo"
            >
              <v-icon medium class="mr-2"> mdi-phone-plus </v-icon>Call
              Now</v-btn
            >
            <v-btn
              depressed
              color="warning"
              class="mx-2 my-3 text-capitalize py-5"
              to="/order-now"
            >
              <v-icon medium class="mr-2"> mdi-cart-plus </v-icon> Order Now
            </v-btn>
          </div>
        </div>
      </div>
    </v-container>

    <v-container fluid class="px-15 my-15">
      <div class="servicestext text-center">
        <h2>Our Services</h2>
        <p style="max-width: 70%; margin: auto" class="my-3">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo
          placeat corporis laudantium odio eveniet, excepturi deleniti quod
          magni sunt consectetur rem ipsum, reiciendis voluptatem voluptates
          quasi soluta ullam unde vero?
        </p>
      </div>
      <v-layout row wrap justify-center>
        <v-flex
          xs12
          sm6
          md4
          lg4
          xl4
          column
          justify-center
          align-self-center
          v-for="(item, idx) in servicesCards"
          :key="idx"
        >
          <v-card class="mx-auto my-12" max-width="374">
            <v-img
              height="200"
              :src="require(`../assets/Home/service/${item.image}`)"
            ></v-img>

            <v-card-title> {{ item.name }} </v-card-title>
            <v-card-subtitle> {{ item.subtitle }} </v-card-subtitle>

            <v-card-text>
              <div>{{ item.description }}</div>
            </v-card-text>
            <div class="cardactions text-center pb-4">
              <v-btn
                depressed
                color="primary"
                class="mx-2 text-capitalize py-5"
                outlined
                text
                :href="'tel:' + phoneNo"
              >
                <v-icon medium class="mr-2"> mdi-phone-plus </v-icon>Call
                Now</v-btn
              >
              <v-btn
                depressed
                color="warning"
                class="mx-2 text-capitalize py-5"
                text
                :href="item.ordernowLink"
                outlined
              >
                <v-icon medium class="mr-2"> mdi-cart-plus </v-icon> Order Now
              </v-btn>
            </div>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container fluid class="my-15 filloversec">
      <div class="textConatinerovelly px-15">
        <div class="constnertext text-center">
          <h1 class="warning--text">Some Valuable text will be here</h1>

          <p style="max-width: 70%; margin: auto" class="white--text py-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam
            quasi eos odit. Vel sed autem ipsa ullam eum nobis minima itaque,
            voluptate voluptatem fuga quia eligendi doloremque! Unde, alias sed.
          </p>
          <v-btn
            depressed
            color="warning"
            class="mx-2 text-capitalize py-5"
            :href="'tel:' + phoneNo"
          >
            <v-icon medium class="mr-2"> mdi-phone-plus </v-icon>Call Now</v-btn
          >
        </div>
      </div>
    </v-container>
    <v-container fluid class="my-15 px-15">
      <v-layout row wrap justify-center>
        <v-flex xs12 sm6 md6 lg6 xl6 column justify-center>
          <h1>Contact Us</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam
            quasi eos odit. Vel sed autem ipsa ullam eum nobis minima itaque,
            voluptate voluptatem fuga quia eligendi doloremque! Unde, alias sed.
          </p>
          Phone No :
          <span class="text-capitalize">
            <b> {{ phoneNo }} </b></span
          >
          <br />
          Whatsapp No :
          <span class="text-capitalize">
            <b> {{ whatsappNo }}</b> </span
          ><br />
          Email :
          <span class="text-capitalize"
            ><b>{{ email }} </b>
          </span>
          <p class="mt-10 green--text">
            <b> We are avalalable for Monday to Saterday 10am to 8pm </b>
          </p>
        </v-flex>

        <v-flex xs12 sm6 md6 lg6 xl6 column justify-center align-self-center>
          <ContactForm />
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import ContactForm from "../components/ContactForm.vue";
export default {
  data: () => ({
    selectedItem: 0,
    phoneNo: process.env.VUE_APP_PHONE_NO,
    whatsappNo: process.env.VUE_APP_WHATSAPP_NO,
    email: process.env.VUE_APP_EMAIL_ID,
    items: [
      { text: "My Files", icon: "mdi-folder" },
      { text: "Shared with me", icon: "mdi-account-multiple" },
      { text: "Starred", icon: "mdi-star" },
      { text: "Recent", icon: "mdi-history" },
      { text: "Offline", icon: "mdi-check-circle" },
      { text: "Uploads", icon: "mdi-upload" },
      { text: "Backups", icon: "mdi-cloud-upload" },
    ],

    servicesCards: [
      {
        name: "Service Name",
        subtitle: "Hello",
        image: "s3.jpg",
        description:
          "Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.",

        ordernowLink: "/order-now?serviceName=Service Name",
      },
      {
        name: "Service Name",
        subtitle: "Hello",
        image: "s1.jpg",
        description:
          "Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.",

        ordernowLink: "/order-now",
      },
      {
        name: "Service Name",
        subtitle: "Hello",
        image: "s2.jpg",
        description:
          "Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.",

        ordernowLink: "/order-now",
      },
    ],
  }),
  components: {
    ContactForm,
  },
};
</script>

<style  scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.landingSec {
  width: 100vw;
  height: 100vh;

  background-image: url("../assets/Home/landing.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
}
.landingSeclayer {
  background: rgba(2, 2, 20, 0.685);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.landingSec h1 {
  font-size: 3rem;
  font-weight: bold;
  color: #fff;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 0;
}
.landingSec p {
  font-size: 1.2rem;
  max-width: 70%;
  margin: auto;
  color: #fff;
  text-align: center;
  margin-bottom: 0;
}
.filloversec {
  background-image: url("../assets/Home/landing2.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  height: 100vh;
  width: 100vw;
}
.textConatinerovelly {
  width: 100%;
  height: 100%;
  background: rgba(2, 4, 27, 0.589);
}
.textConatinerovelly {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>>

