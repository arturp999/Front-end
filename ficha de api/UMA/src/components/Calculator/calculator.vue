<template>
  <v-layout>
    <v-content class="green mt-10" elevation-24>
      <v-container >
        <h1 class="red text-center">Your Online Calculator!</h1>
        <v-row no-gutters  class="display-1 text-center">
          <v-col fill-height cols="12" md="12">
            <v-card tile class="pa-3">0</v-card>
          </v-col>
          <v-col cols="3"  >
            <v-card  tile >C</v-card>
          </v-col>
          <v-col cols="3"  >
            <v-card  tile >+/-</v-card>
          </v-col>
          <v-col cols="3" >
            <v-card  tile >%</v-card>
          </v-col>
          <v-col cols="3" >
            <v-card  tile class="orange operator" >÷</v-card>
          </v-col>
        </v-row>

        <v-row no-gutters class="display-1 text-center">
          <v-col cols="3"  >
            <v-card  tile >7</v-card>
          </v-col>
          <v-col cols="3" >
            <v-card  tile >8</v-card>
          </v-col>
          <v-col cols="3" >
            <v-card  tile >9</v-card>
          </v-col>
          <v-col cols="3" >
            <v-card  tile class="orange operator" >x</v-card>
          </v-col>
        </v-row>

        <v-row no-gutters class="display-1 text-center">
          <v-col cols="3">
            <v-card  tile>4</v-card>
          </v-col>
          <v-col cols="3" >
            <v-card  tile>5</v-card>
          </v-col>
          <v-col cols="3" >
            <v-card  tile>6</v-card>
          </v-col>
          <v-col cols="3" >
            <v-card  tile class="orange operator">-</v-card>
          </v-col>
        </v-row>

        <v-row no-gutters class="display-1 text-center">
          <v-col cols="3" >
            <v-card  tile>1</v-card>
          </v-col>
          <v-col cols="3" >
            <v-card  tile>2</v-card>
          </v-col>
          <v-col cols="3">
            <v-card  tile>3</v-card>
          </v-col>
          <v-col cols="3" >
            <v-card  tile class="orange operator">+</v-card>
          </v-col>
        </v-row>

        <v-row no-gutters class="display-1 text-center">
          <v-col cols="4">
            <v-card  tile>0</v-card>
          </v-col>
          <v-col cols="4" >
            <v-card  tile>.</v-card>
          </v-col>
          <v-col cols="4" >
            <v-card  tile class="orange operator">=</v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-layout>
</template>

<script>
export default {
  name: "Calculator",
  data: {
    video: []
  }
};
</script>