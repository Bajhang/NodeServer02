<template>
    <div>
<h1>Employee Component</h1>

<table class="table">
    <thead>
        <tr class="tableheading">
            <th>Department ID</th>
            <th>Department Name</th>
        </tr>

        <tr class="tableitem" v-for="item in list" v-bind:key="item.id">
            <th>{{item.departmentId}}</th>
            <th>{{item.departmentName}}</th>
        </tr>
    </thead>
</table>
    </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)
export default {
    name:"EmployeeList",
    data(){
        return{
            list:[]
        }
    },
    mounted(){
      const Url= 'https://localhost:44332/api/Departments'
          Vue.axios.get(Url)
        .then(res=>{
            this.list=res.data;
            console.log("List from server:",this.list)
        })
    }
}
</script>

<style scoped>


.tableheading{
   padding-top: 18px;
  padding-bottom: 19px;
text-align: center;
  background-color: #04AA6D;
  color: white;
  font:bolder;
  width: 10px;

}
.tableitem{
   padding-top: 12px;
  padding-bottom: 12px;
 text-align: center;
  background-color:grey;
  color: white;

}


.table{
    font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 50%;
  
}
</style>