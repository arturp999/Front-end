<template>
  <v-content class="pa-5">
    <h1 class="text-center"> CONTACT US</h1>
     <v-toolbar-title
              class="pt-2"
              align="center"
            >Having any issues ? Please fill the contact form</v-toolbar-title>
     <v-system-bar class="grey mt-1" height="1px"></v-system-bar>

    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <v-card class="elevation-12 pa-3" width="600px" height="512px">
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field
              class="pl-2 pr-2"
              prepend-icon="mdi-account"
              v-model="name"
              :counter="50"
              :rules="nameRules"
              label="Name"
              required
            ></v-text-field>

            <v-text-field
              class="pl-2 pr-2 mb-2"
              prepend-icon="mdi-email"
              v-model="email"
              :rules="emailRules"
              label="E-mail"
              required
            ></v-text-field>

            <v-textarea
              class="pl-2 pr-2 mb-2"
              prepend-icon="mdi-message"
              v-model="message"
              :rules="messageRules"
              label="Message"
              required
              outlined
              counter
              maxlength="500"
              full-width
              single-line
            ></v-textarea>

            <v-checkbox
              class="mt-n1 pl-2 pb-3"
              v-model="checkbox"
              :rules="[v => !!v || 'You must agree to continue!']"
              label="Do you wish to submit?"
              required
            ></v-checkbox>
            <section align="center" class="pb-5">
              <v-btn :disabled="!valid" color="success" class="mr-7" @click="validate">Submit</v-btn>
              <v-btn color="error" class="mr-7" @click="reset">Reset Information</v-btn>
            </section>
          </v-form>
        </v-card>

        <v-card class="elevation-12 pa-1 ml-2" min-width="250px" width="300px" height="512px">
          <h3 class="text-center mt-2">CONTACT DETAILS</h3>
          <v-system-bar class="grey mt-1" height="1px"></v-system-bar>
          <v-card-text class="subtitle-2 text-center mt-3">
            <v-icon class="ml-n10 mr-5">mdi-cellphone-android</v-icon>+351 965 400 55
          </v-card-text>

          <v-card-text class="subtitle-2 text-center">
            <v-icon class="ml-n10 mr-5">mdi-web</v-icon>siterandom.com
          </v-card-text>

          <v-card-text class="subtitle-2 text-center">
            <v-icon class="ml-n12 mr-5">mdi-skype</v-icon>Artur__pereira
          </v-card-text>

          <h3 class="text-center">SOCIAL</h3>
          <v-system-bar class="grey mt-1" height="1px"></v-system-bar>
          <div class="text-center mt-3">
            <v-btn class="mx-2" fab dark small color="#405DE6">
              <v-icon dark>mdi-facebook</v-icon>
            </v-btn>

            <v-btn class="mx-2" fab dark small color="#1DA1F2">
              <v-icon dark>mdi-twitter</v-icon>
            </v-btn>

            <v-btn class="mx-2" fab dark small color="red">
              <v-icon dark>mdi-linkedin</v-icon>
            </v-btn>

            <v-btn class="mx-2" fab dark small color="#F56040">
              <v-icon dark>mdi-instagram</v-icon>
            </v-btn>

            <br />
            <v-card-text class="subtitle-1">Our CEO</v-card-text>
            <v-avatar class="mt-0" size="100px">
              <img
                class="img-circle elevation-7 mb-1"
                src="https://blog.yellowoctopus.com.au/wp-content/uploads/2018/03/yellow-octopus-funny-memes-72.jpg"
              />
            </v-avatar>
            <v-card-text class="subtitle-1 mb-0">Alfredo Esdrubal</v-card-text>
          </div>
        </v-card>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
export default {
  name: "Contact",
  props: {
    source: String
  },
  data: () => ({
    valid: true,
    name: "",
    nameRules: [
      v => !!v || "Name is required",
      v => (v && v.length <= 50) || "Name must be less than 50 characters"
    ],
    email: "",
    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+\..+/.test(v) || "E-mail must be valid"
    ],
    message: "",
    messageRules: [v => !!v || "Message is required"]
  }),

  methods: {
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    }
  }
};
</script>