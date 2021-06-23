<template>
    <div class="abc">
<h1>ComponentC</h1>

<h3>userName in ComponentC from App component is : {{userName}}</h3>
    </div>
</template>

<script>
    export default {
        name:'ComponentC',
        inject:['userName']
        
    }
</script>

<style scoped>
.abc{
    background-color: blanchedalmond;
}

</style>