<template>
    <div>
        <h1>Contactos</h1>
        <button @click="navega">id 5</button>
    </div>
</template>
<script>
export default {
    methods: {
        navega(){
            this.$router.push('/contactos/5')
        }
    },
}
</script>