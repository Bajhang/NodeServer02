<template>
  <div>
    <table>
      <tr>
        <th>SN</th>
        <th>ID</th>
        <th>Name</th>
        <th>Ranking</th>
        <th>Date of Birth</th>
        <th>Country</th>
        <th>Score</th>
      </tr>
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

import { mapState } from 'vuex'

export default {
  name: "Players",
//   computed: {
//            mens() {
//                return this.$store.state.mens;
//            }
//        },
       computed: mapState([
  // map this.count to this.$store.state.mens;
  'mens'
]),
      
        mounted(){
            this.$store.dispatch('getMens');
            
        }
  
};
</script>

<style scoped>

</style>