<template>
    <div>
       
        <p v-if="error.length">
            <b>Please correct the following errors</b>
            <ul>
                <li v-for="e in error" v-bind:key="e.id">
                    {{e}}</li>
            </ul>
        </p>
        <form @submit="login">
    <input type="text" 
    placeholder="Enter your Name" 
    v-model="username"/><br><br>
    <input type="password" 
    placeholder="Enter your Password"
    v-model="passsword"/>
  <br>
  <button type="submit">Login</button>
  </form>


  </div>
</template>

<script>
export default {
    name:'Signup',
    data(){
        return{           
                username:null,
                passsword:null,
                error:[]           
        }
    },
    methods:{
       login(e){
           this.error=[];
           if(this.username && this.passsword)
           {
               console.log("No Error");
                       }
           if(!this.username)
           {
               this.error.push("Username is required")
           }
            if(!this.passsword)
           {
               this.error.push("Password is required")
           }
           console.log ("hello",this.$data);
           e.preventDefault();
            
        }
    }
}
</script>