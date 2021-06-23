<template>
  <div id="app">
 <div class="display">
<router-link class="links" to="/Products">Products</router-link> 
<router-link class="links" to="/Users/10">Users</router-link> 
<router-link class="links" to="/Registrations">Registrations</router-link> 
<router-link class="links" to="/Registration">Registration</router-link> 
<router-link class="links" to="/Registration">Registration</router-link> 
<router-link class="links" to="/Mens">Mens</router-link> 
<router-link class="links" to="/Players">Players</router-link> 
<router-link class="links" to="/ComponentA">ComponentA</router-link> 


</div>

      <router-view> </router-view>
    
 
    </div>
   
</template>
<script>



export default {

   name: 'App',
   data(){  
    return{
      
     }
   },
   provide:{
     userName:'Deepak'
   }
   
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 0;
}
.display{
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: rgb(95, 5, 5);
}
.links{
 display: inline-block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

.active {
  background-color: #04AA6D;
}

a:hover:not(.active) {
  background-color:rgb(172, 83, 83);
  color: white;
}

</style>
