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
      <tr v-for="(item, i) in items" :key="item._id">
        <td>{{ i + 1 }}</td>
        <td>{{ item._id }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.ranking }}</td>
        <td>{{ item.dob }}</td>
        <td>{{ item.country }}</td>
        <td>{{ item.score }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);

export default {
  name: "Mens",
  data() {
    return {
      items: [
        {
          ranking: "",
          name: "",
          dob: "",
          country: "",
          score: "",
        },
      ],
    };
  },
  async mounted() {
    const response = await Vue.axios.get("http://localhost:3003/mens");
    this.items = response.data;
    console.log(response);
  },
};
</script>

<style scoped>
#mens {
  margin: auto;
  margin-top: 3rem;
  max-width: 700px;
}
table {
  text-align: center;
  justify-content: center;
}

td,
th {
  border: 1px dotted;
  padding: 5px;
  margin: 2px;
}
</style>