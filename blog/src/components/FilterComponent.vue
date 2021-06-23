
<template>
    <div>
     <h1>Filter in Vue Js</h1>
     <hr>
 <h1>{{name|Ucase}}</h1>
<h3>Salary: {{amount|currencyConverter}}</h3>
   
    </div>
</template>

<script>

export default {
    name:'FilterComponent',
    data(){
     return{
       name:"deepak joshi",
       amount:100000
     }
   }
}
</script>