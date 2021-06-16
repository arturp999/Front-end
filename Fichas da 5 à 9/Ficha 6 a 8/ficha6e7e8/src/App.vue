<template>
  <v-app>
    <v-toolbar fixed color="primary" dark>
      <!-- <v-toolbar-side-icon></v-toolbar-side-icon> -->
      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor: pointer">VueShare</router-link>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-text-field flex prepend-icon="search" placeholder="Search posts" color="accent" single-line hide-details></v-text-field>
    </v-toolbar>

    <main>
      <router-view/>
    </main>
  </v-app>
</template>