<template>
    <div>
<h1>Products Component</h1>
<hr>
    <table>
    <thead>
        <th>SN</th>
        <th>ID</th>
        <th>Name</th>
        <th>Ranking</th>
        <th>Date of Birth</th>
        <th>Country</th>
        <th>Score</th>
    </thead>
    <tbody v-for="(men,i) in mens" :key="men._id" >
        <td>{{ i + 1 }}</td>
        <td>{{ men._id }}</td>
        <td>{{ men.name }}</td>
        <td>{{ men.ranking }}</td>
        <td>{{ men.dob }}</td>
        <td>{{ men.country }}</td>
        <td>{{ men.score }}</td>
    </tbody>
</table>

    </div>
</template>

<script>



    export default {
        name:"Products",  

        // methods:{
        //     ...mapActions(["setMens",])
        // },
       computed: {
           mens() {
               return this.$store.state.mens;
           }
       },
      
        mounted(){
            this.$store.dispatch('getMens');
            
        }
       
        
    }
</script>

<style  scoped>
table{
    border: 1px solid black;
}
tbody,thead,th,td{
    border: 1px solid black;;
}
thead,th{
    background-color: bisque;
    padding: 7px;
}
</style>