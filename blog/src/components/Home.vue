<template>
<div class="home">
    <h1> Hello Home component</h1>
    <!-- <h2>Data from {{data}}</h2>
    <h2> {{msg}}</h2> -->

    <button v-on:click="hello"> Call Hello Function</button>
<h1 v-if="show"> Conditional Rendering in VueJS: If block</h1>
<h1 v-else> Conditional Rendering in VueJS: Else Block</h1>
<button v-on:click="display">Toggle element</button>
<hr>

<table>
    <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Email</th>
    </tr>

    <tr id="app" v-for="user in users" :key="user.id">
        <td>{{user.id}}</td>
        <td>{{user.name}}</td>
        <td>{{user.email}}</td>
    </tr>
</table>

    </div>
</template>

<script>

export default {
   name: 'Home',
   props:{
       data:String,
       msg:String
       },
       methods:{
           hello(){
               console.log("Hello: console called");
               alert("hello")
           },
           display(){
               this.show=!this.show

           }
           
       },
       data(){
               return {
                   users:[
                       {id:1, name:"Deepak",email:"abc@gg.com"},
                        {id:2, name:"Sabal",email:"123@gg.com"},
                         {id:3, name:"KAmala",email:"xyz@gg.com"},
                          {id:4, name:"Sulav",email:"str@gg.com"},
                           {id:5, name:"Bishal",email:"mng@gg.com"}
                   ]
               }
           }
};
</script>


<style>
table, td {
   border-bottom: 1px solid #ddd;
}
 th {
  border: 1px solid black;
   background-color: #04AA6D;
}

.home{
    background-color: aqua;
}

</style>
