<template>
    <div>
<h1>{{message}}</h1>
<input type="text" v-model="message">
<h3>{{name}}</h3>

    </div>
</template>

<script>
export default {
    name:'DataBind',
    props:['name'],
    data(){
        return{
            message:"hey"
        }
    }
}
</script>dd

<style scoped>
div{

    background-color: brown;
}
</style>