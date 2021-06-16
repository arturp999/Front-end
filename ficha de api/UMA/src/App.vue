<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <v-list dense>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>

          <v-list-item-content>
            <router-link to="/home">
              <v-list-item-title>Home</v-list-item-title>
            </router-link>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-account-circle</v-icon>
          </v-list-item-action>

          <v-list-item-content>
            <router-link class="text-decoration: none" to="/contact">
              <v-list-item-title>Contact</v-list-item-title>
            </router-link>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-calculator</v-icon>
          </v-list-item-action>

          <v-list-item-content>
            <router-link to="/calculator">
              <v-list-item-title>Calculator</v-list-item-title>
            </router-link>
          </v-list-item-content>
        </v-list-item>
      </v-list>



    </v-navigation-drawer>


    <v-app-bar app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <router-link to="/">
        <v-list-item-title>
          <v-toolbar-title>Website Random VueJS</v-toolbar-title>
        </v-list-item-title>
      </router-link>
    </v-app-bar>

    <v-content>
      <transition name="fade">
        <router-view />
      </transition>
    </v-content>

    <v-footer app>
      <v-spacer></v-spacer>
      <div class="white--text">&copy; Universidade da Madeira</div>
      <v-spacer></v-spacer>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",
  props: {
    source: String
  },
  data: () => ({
    drawer: null
  }),
  created() {
    this.$vuetify.theme.dark = true;
  }
};
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>