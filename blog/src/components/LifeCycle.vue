<template>
    <div>
        <h1>LifeCycle Component</h1>
        <h1>{{name}}</h1>
        <hr>

    </div>
</template>

<script>
export default {
    name:"LifeCycle",
    data(){
        return{
            name:"deepak joshi"
        }
    },
     created(){
         this.name="Diwash"
        console.log("Created:", this.name);
    },
    beforeCreate(){
        console.log('before',this.name);
    },
    beforeMount(){
        console.log("Beforemount:")
    },
    mounted(){
        console.log("mounted:");
    },
    beforeDestroy(){
        console.log("Before destroyed")
    },
    destroyed(){
       console.log("Destroyed") 
    }
   
}
</script>