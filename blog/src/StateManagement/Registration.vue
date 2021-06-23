<template>
    <div>
Registration Component  <hr>

    </div>
</template>

<script>
    export default {
        computed:{
            user(){
                return this.$store.state.user;
            }
        },
    
        
    }
</script>

<style scoped>

</style>