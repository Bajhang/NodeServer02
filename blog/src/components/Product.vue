<template>
    <div class="products">
        <h1>Products component</h1>
        <p v-html="rowHtml"></p>
        <h3>{{name?'Anil':"Deepak"}}</h3>

<h3>{{ok?"Yes":"No"}}</h3>
<button v-on:click="updateText">Click Me</button>

    </div>
</template>

<script>
export default {
    name:'Product',
    data(){
        return{
            name:true,
          ok:false,
          rowHtml:"<h1>Template in Vue JS</h1>"      
        }
    },
    methods:{
        updateText(){
                this.ok =!this.ok
                this.name=!this.name
        }

    }
}
</script>

<style scoped>
.products{

    background-color: antiquewhite;
    height: 100px;
    width: 300px;
    margin: 20px;
    padding: 42px;
}
</style>