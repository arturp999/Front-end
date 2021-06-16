<template>
  <main class="wrapper">
    <v-container>
      <v-col class="text-center">
        <h1>
          <v-icon font-size="36px">mdi-cctv</v-icon>Pagina com vários metodos e APIs
          <v-icon class="mf-9">mdi-android-auto</v-icon>
        </h1>
      </v-col>
    </v-container>

    <!-- INFORMAÇÃO DO LADO ESQUERDO -->
    <v-row justify="center">
      <v-col lg="3">
        <template v-for="(texto, index) in texto">
          <v-card :key="index" class="mx-auto mb-3" dark :color="cores()">
            <v-card-title>
              <v-icon large left>mdi-account-cowboy-hat</v-icon>
              <span class="title font-weight-light">{{sites()}}</span>
            </v-card-title>
            <v-card-text class="headline font-weight-bold">{{texto.quote}}</v-card-text>
            <v-card-actions>
              <v-list-item class="grow">
                <v-list-item-avatar color="grey darken-3">
                  <v-img
                    class="elevation-6"
                    src="https://ichef.bbci.co.uk/news/1024/branded_pidgin/8DEB/production/_102613363_gettyimages-1001226192.jpg"
                  ></v-img>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title>aaaaaaa</v-list-item-title>
                </v-list-item-content>
                <v-row align="center" justify="end">
                  <v-icon class="mr-1">mdi-heart</v-icon>
                  <span class="subheading mr-2">{{randomNumber()}}</span>
                  <span class="mr-1">·</span>
                  <v-icon class="mr-1">mdi-share-variant</v-icon>
                  <span class="subheading">{{randomNumber()}}</span>
                </v-row>
              </v-list-item>
            </v-card-actions>
          </v-card>
        </template>
      </v-col>

      <!-- INFORMAÇÃO DO MEIO -->
      <v-col md="auto">
        <v-card>
          <v-layout class="pa-1 text-center">
            <v-flex xs12 align-end>
              <template v-for="(photo, index) in photos">
                <v-card :key="index">
                  <v-img class="white--text" height="300px" :src="photo.url">
                    <v-layout fill-height>
                      <v-flex xs12 align-center flexbox>
                        <span v-html="photo.title" class="headline"></span>
                      </v-flex>
                    </v-layout>
                  </v-img>
                  <v-card-title class="mb-3">
                    <span v-html="photo.thumbnailUrl"></span>
                  </v-card-title>
                </v-card>
              </template>
            </v-flex>
          </v-layout>
        </v-card>
      </v-col>

      <v-col lg="2">
        <v-card class="pa-1">
          <!--Controla os Hovers lado direito da pagina -->
          <section>
            <template v-for="(photo, index) in photos2">
              <v-card :key="index" class="mx-auto" max-width="344">
                <v-img :src="photo.image"></v-img>
                <v-card-text>
                  <h2 class="title primary--text">{{photo.first_name + " " + photo.last_name}}</h2>
                  {{photo.description}}
                </v-card-text>
                <v-card-title class="mb-3">
                  <v-rating
                    :value="photo.stars"
                    dense
                    color="orange"
                    background-color="orange"
                    class="mr-2"
                    readonly
                  ></v-rating>
                  <span class="primary--text subtitle-2">{{photo.reviews + " Reviews"}}</span>
                </v-card-title>
              </v-card>
            </template>
          </section>
        </v-card>
      </v-col>
    </v-row>
  </main>
</template>

<script>
const URL = "https://jsonplaceholder.typicode.com/photos"; // URL da API
const CAT = "http://localhost:3000/persons";
const textApi = "https://api.kanye.rest/";

import axios from "axios";
import router from "../../router/index";

export default {
  name: "Home",
  data() {
    return {
      photos: [],
      photos2: [],
      texto: []
    };
  },
  //executa quando o componente é montado
  created() {
    axios.get(URL).then(res => this.AssignPhotos(res));

    axios.get(CAT).then(res => this.SidePhotos(res));

    this.textoRandom();
  },

  methods: {
    AssignPhotos(res) {
      for (var i = 0; i < 20; i++) {
        this.photos.push(res.data[i]);
      }
      console.log(this.photos);
    },
    SidePhotos(res) {
      this.photos2 = res.data;
      console.log(this.photos2);
    },
    textoRandom() {
      for (var i = 0; i < 20; i++) {
        axios.get(textApi).then(res => this.texto.push(res.data)); //martelando a API faz push
      }
      console.log(this.texto);
    },
    randomNumber() {
      return Math.floor(Math.random() * (100 - 1 + 1)) + 1;
    },
    cores() {
      var cor = {
        1: "red",
        2: "orange",
        3: "blue",
        4: "pink",
        5: "green",
        6: "black",
        7: "purple",
        8: "indigo",
        9: "teal",
        10: "lime",
        11: "yellow",
        12: "deep-orange"
      };
      var colorido = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
      return cor[colorido];
    },
    sites() {
      var varioSites = {
        1: "Reddit",
        2: "Facebook",
        3: "Linked",
        4: "Skype",
        5: "Gmail"
      };
      var site = Math.floor(Math.random() * (5 - 1 + 1)) + 1;
      return varioSites[site];
    }
  }
};
</script>
