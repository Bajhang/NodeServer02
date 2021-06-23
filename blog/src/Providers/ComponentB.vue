<template>
  <div class="hello">
        <h1 class="is-size-3">{{ msg }}</h1>
        <br>
         <div class="container" style="width: 35%;">
              <input class="input" type="text" v-model="welcomeMsg"> <br/><br/>
        
         </div>
      </div>
</template>

<script>
export default {
  components: {},
  name: "ComponentB",
   data() {
        return {
        welcomeMsg: "Hello World"
        }
      },
      props: {
  
      },
      methods: {
        changeMsg() {
          this.$emit("changeMsg", this.welcomeMsg);
          console.log('message emit from child component')
        }
      }
};
</script>

<style scoped>
.abc {
  background-color: blanchedalmond;
}
</style>