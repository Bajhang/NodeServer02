<template>
    <div class="abc">
<hr>


<ComponentB
     @changeMsg="setMessage" :msg="welcomeMsg"
     />
      <button class="button is-primary is-medium" @click="changeMsg">Click to change welcome message</button>
    </div>
</template>

<script>
import ComponentB from './ComponentB.vue'
    export default {
  components: { ComponentB },
        name:'ComponentA',
         data() {
        return {
          welcomeMsg: "Hello World"
        };
      },
      methods: {
        setMessage(msg) {
          this.welcomeMsg = msg;
        }
      }
    }
</script>

<style scoped>
.abc{
    background-color: blanchedalmond;
}

</style>