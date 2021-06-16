<template>
  <v-content align="center" justify="center">
    <h1>Welcome to a website that has random information</h1>
    <h3 class="text-align mb-10 mt-3">Select a button bellow to be directed to another page</h3>
    <br />

    <v-btn to="/home" class="butt mx-12" fab dark large color="green">Home</v-btn>
    <v-btn to="/contact" class="butt mx-12" fab dark large color="orange">Contact</v-btn>
    <v-btn to="/person" class="butt mx-12" fab dark large color="blue">Register</v-btn>
    <v-btn class="butt mx-12" fab dark large color="pink">
      <v-icon dark>mdi-pencil</v-icon>
    </v-btn>

    <div>
      <div class="mt-10 mb-5">If you want just click the button bellow for a random cat</div>
      <v-btn class="butt mx-12 mb-10" fab dark large color="black" @click="loadNextImage">
        <v-icon dark>mdi-cat</v-icon>
      </v-btn>
      <v-card class="mx-auto" max-width="400">
        <v-img
          class="white--text align-end"
          height="250px"
          :src="image.url">
        </v-img>
      </v-card>
    </div>
  </v-content>
</template>


<script>
import axios from "axios";

export default {
  name: "Default",
          data() {
            return {
            image: { url: ""},
            }
        },
        created(){
            this.loadNextImage();
        } ,
        methods:{
            async loadNextImage()
            {
                try{
                    axios.defaults.headers.common['x-api-key'] = "6b9e4ae2-99b7-4ba7-9aac-f3176d0e8f42" // API Key

                    let response = await axios.get('https://api.thecatapi.com/v1/images/search', { params: { limit:1, size:"full" } } ) // Ask for 1 Image, at full resolution
                    
                    this.image = response.data[0] // the response is an Array, so just use the first item as the Image

                    console.log("-- Image from TheCatAPI.com")
                    console.log("id:", this.image.id)
                    console.log("url:", this.image.url)
                }catch(err){
                    console.log(err)
                }
            }
        }
    }
</script>

<style scoped>
.butt {
  height: 80px;
  width: 80px;
}
</style>