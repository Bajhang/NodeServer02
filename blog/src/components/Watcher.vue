<template>
    <div class="define">
        <h1>Watchers</h1>
        <hr>
        <h1>Volume Tracker(0-20)</h1>
        <h3>Current Volume- {{volume}}</h3>
        <div>
            <button @click="(volume += 2 && volume<20)">Increase</button>
            <button @click="volume -= 2">Decrease</button>

            <input type="text" v-model="movie">
        </div>
    </div>
</template>
<script>
export default {
    name:"Watcher",
    data(){
        return{
            volume:0,
            movie:'Batman'
        }
    },
    methods:{

    },
    computed:{

    },
    watch:{
        volume(newValue,oldValue){
            if (newValue>oldValue && newValue===16)
            {
                alert('Listening to a high Volume for a long time may damage your hearing')
            }
        },

        movie(newValue){
            console.log(`Calling movie name=${newValue}`)
        }
    }
}
</script>

<style scoped>
.define{
    background-color: bisque;
    width: 35%;
    margin-left: 200px;
padding: 5px;

    text-align: center;
 
}
button{

    color: blue;
    padding: 4px;
    margin: 2px;
    cursor: pointer;
    background-color: peru;
    border-radius: 8px;
    font-weight: bold;
}
</style>