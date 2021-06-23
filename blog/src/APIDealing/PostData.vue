<template>
    <div>
       Post component 
       <form @submit="submit" method="post">
           <label for="dpt">Department Name: </label>
<input type="text" name="departmentName" id="dpt"
placeholder="Enter Department Name"
 v-model="post.departmentName" autocomplete="off"/>
<button type="submit">Post</button>

       </form>
    </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)
export default {
    name:"PostData",
    data(){
        return{
            post:{
            departmentName:null
            }            
        }
    },
    methods:{
        submit(e){
  
    this.axios
    .post(
      `https://localhost:44332/api/Departments`,this.post)
      .then(response => {
      this.post = response;
    })
    .catch(err => {
      console.error(err);
    });
     e.preventDefault;           

        }

    }
}
</script>