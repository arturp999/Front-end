<template>
  <v-content>
    <v-container class="fill-height" fluid>
      <v-row align="center" justify="center">
        <v-col cols="16" sm="10" md="9">
          <v-card class="elevation-12">
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-toolbar-title
                class="pt-2"
                align="center"
              >Fill the form if you would like to be in the front page</v-toolbar-title>

              <v-layout>
                <v-text-field
                  input
                  class="pl-2 pr-2"
                  prepend-icon="mdi-account"
                  v-model="name"
                  :counter="10"
                  :rules="nameRules"
                  label="First name:"
                  required
                ></v-text-field>
                <v-text-field
                  input
                  class="pl-2 pr-2"
                  v-model="lastName"
                  :counter="10"
                  :rules="nameRules"
                  label="Last name:"
                  required
                ></v-text-field>
              </v-layout>

              <v-text-field
                input
                class="pl-2 pr-2 mb-2"
                prepend-icon="mdi-link"
                v-model="link"
                :rules="emailRules"
                label="URL for the img you would like to be displayed"
                required
              ></v-text-field>

              <v-text-field
                input
                class="pl-2 pr-2 mb-2"
                prepend-icon="mdi-email"
                v-model="email"
                :rules="emailRules"
                label="Email"
                required
              ></v-text-field>

              <v-textarea
                input
                class="pl-2 pr-2 mb-2"
                prepend-icon="mdi-message"
                v-model="description"
                :rules="descriptionRules"
                label="Description"
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
                <v-btn :disabled="!valid" color="success" class="mr-7" @click="validate">SEND</v-btn>
                <v-btn color="error" class="mr-7" @click="reset">Reset Information</v-btn>
              </section>
            </v-form>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
export default {
  name: "Person",
  props: {
    source: String
  },
  data: () => ({
    valid: true,
    name: "",
    nameRules: [
      v => !!v || "Name is required",
      v => (v && v.length <= 10) || "Name must be less than 20 characters"
    ],
    email: "",
    emailRules: [
      v => !!v || "URL is required",
      v => /.+.+\..+/.test(v) || "URL must be valid"
    ],
    description: "",
    descriptionRules: [v => !!v || "Description is required"]
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