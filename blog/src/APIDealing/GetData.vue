<template>
    <div>
        <table class="table">
  <tr class="tableheading">
    <th>Department ID</th>
    <th>Department Name</th>
     <th>Action</th>
  </tr>
  <tbody v-for="item in list" v-bind:key="item.id">
  <tr class=tablebody>
<td>{{item.departmentId}}</td>
   <td>{{item.departmentName}}</td>
<td> <button v-on:click="deleteDpt(item.departmentId)"> Del

</button> </td>
  </tr>
  </tbody>

</table>
    </div>

</template>
<script>

import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)
export default {
    name:"GetData",
    data(){
        return {
            list:[]
        }
    },
    mounted(){
     this.getDpt();
    },
    methods:{

getDpt(){
     const Url= 'https://localhost:44332/api/Departments'
       this.axios.get(Url)
        .then(res=>{
            this.list=res.data;
            console.log("List from server:",this.list)
        })
},


    deleteDpt(id){
        console.log(`Id to be deleted is : ${id}`);
    this.axios
    .delete(`https://localhost:44332/api/Departments/${id}`)
      .then(result => {
      console.log(result)
      console.log(id)
      this.getDpt()
    })
    .catch(err =>{
      console.error(err);
    })             

        }
    }
    

}
</script>

<style scoped>
.tableheading{
  border: 1px solid black;
  background-color: blanchedalmond;
}
.tabelbody{
  border: 1px solid black;
}

.table {
  width: 30%;
  border-collapse: collapse;
  margin: 20px;
  border: 1px solid black;

}
</style>