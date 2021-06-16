<template>
<div>
     <h1>Contactos</h1>
     <input v-model="pesquisa" type="text">
     <button @click="navega(pesquisa)" >Pesquisa</button>
</div>
</template>

<script>
export default {
    data() {
        return{
            pesquisa:""
        }
    },
    methods:{
        navega(nomeDIFERENTE){
            this.$router.push('/contactos/' + nomeDIFERENTE)
        }
    }
}
</script>