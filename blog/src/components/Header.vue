<template>
    <div>
<h1>Header Component</h1>
<users />
<product />
    </div>
</template>

<script>
import Product from './Product.vue'
import Users from './Users.vue'


export default {
  components: { Users, Product },
     name: "Home"  ,

    
}
</script>

<style scoped>
div{
    background-color: #e290d6;
    height: 500px;
}
</style>