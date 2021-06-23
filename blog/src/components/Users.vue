<template>
    <div class="users">
    <h1>User Component</h1>
    <hr>

<h2>UserId from URL: {{$route.params.userId}}</h2>
    </div>
</template>

<script>
export default {
    name: 'Users',
    
}
</script>


<style scoped>

.users{  
 background-color: blanchedalmond;
 text-align: center;
}
</style>
