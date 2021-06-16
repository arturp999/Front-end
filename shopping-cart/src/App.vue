<template>
  <!-- NAVBAR -->
  <div id="app">
    <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <a class="navbar-brand" href="#">Fixed navbar</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarCollapse"
        aria-controls="navbarCollapse"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#">
              Home
              <span class="sr-only">(current)</span>
            </a>
          </li>
        </ul>
      </div>
      <div class="btn-group dropleft">
        <button
          class="btn btn-default dropdown-toggle"
          type="button"
          id="menu1"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Tutorials
          <span class="caret"></span>
        </button>
        <div v-on:click="avoid($event)" class="dropdown-menu" role="menu" aria-labelledby="menu1">
          <ShoppingCart :items="items" :totalPrice="totalPrice"/>
        </div>
      </div>
    </nav>
    <div class="container">
      <router-view />
    </div>

    <div class="container">
      <div class="d-flex align-content-around flex-wrap">
        <div v-for="dog in dogs" :key="dog.id">
          <div class="card" v-on:click="addToCart(dog)">
            <img class="card-img-top" :src="dog.Image" alt="Card image cap" />
            <div class="card-body">
              <h5 class="card-title">{{dog.name}}</h5>
              <p
                class="card-text"
              >Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const API_URL = "https://frontend-uma.firebaseio.com/.json";
import ShoppingCart from "./components/ShoppingCart";
import axios from "axios";

export default {
  name: "App",
  components: { ShoppingCart },
  data() {
    return {
      items: [],
      dogs: [],
      totalPrice: 0
    };
  },
  created() {
    axios.get(API_URL).then(res => this.dogs = res.data);
  },
  methods: {
    addToCart(dog) {
      var found = false;
      this.items.forEach(element => {
        if(element.Id == dog.Id){
          element.Quantity += 1;
          found = true;
        }
      });
      if(!found){
        this.items.push(dog);
      }
    },
    avoid(e) {
      e.stopPropagation();
    }
  }
};
</script>

<style>
.card {
  max-height: 10em;
  max-width: 15em;
  margin-right: 2em;
  margin-bottom: 15em;
}

.card-img-top{
  max-height: 12em;
}
.card:hover {
  cursor: pointer;
}

.dropdown-menu {
  position: absolute !important;
  right: 0% !important;
  margin-top: 2.9em !important;
  flex-grow: 1;
  width: 40em;
  max-height: 40em;
  overflow: hidden;
  overflow-y: scroll;
}

.container {
  margin-top: 5em;
}

@media only screen and (min-device-width: 375px) and (min-device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait) {
  .dropdown-menu {
    position: absolute !important;
    right: -1em !important;
    margin-top: 2.9em !important;
    flex-grow: 1;
    width: 23.2em;
    max-height: 40em;
    overflow: hidden;
    overflow-y: scroll;
  }

  .card {
    max-height: 15em;
    max-width: 15em;
    margin-left: 3.5em;
    margin-bottom: 15em;
  }
}
</style>