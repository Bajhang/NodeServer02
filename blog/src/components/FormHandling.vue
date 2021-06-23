<template>
    <div>
        <h1>Form: </h1>
        <h2>Computed FullName- {{fullName}}</h2>
        <h2>FullName: {{fname}} {{lname}}</h2>
        <h3>Sum of number: {{nums.reduce((total,curr)=>(total=total+curr),0)}}</h3>
<div>
    <pre>
        {{JSON.stringify(formValues)}}
    </pre>
</div>
        <form @submit.prevent="submitForm">
            <div>
                <label for="name">Name: </label>
                <input type="text" name="" id="name" v-model.trim="formValues.name">
            </div>

            <div>
                <label for="profile">Profile Summary</label> 
                <textarea id="profile" v-model="formValues.profile" />
            </div>

            <div>
                <label for="country">Country:</label>
                <select id="country" v-model="formValues.country">
                    <option value="">Select a Country</option>
                    <option value="Nepal">Nepal</option>
                    <option value="India">India</option>
                    <option value="America">America</option>
                    <option value="Myanmar">Myanmar</option>
                    <option value="Turkey">Turkey</option>
                </select>
            </div>

            <div>
                <label for="job-location">Job Location: </label><br>
                 <select id="job-location" multiple v-model="formValues.jobLocation">
                    <option value="Nepal">Nepal</option>
                    <option value="India">India</option>
                    <option value="America">America</option>
                    <option value="Myanmar">Myanmar</option>
                    <option value="Turkey">Turkey</option>
                </select>

                <div><input type="checkbox" name="" id="remoteWork" 
                v-model="formValues.remoteWork" true-value="Yes" false-value="No" />
                <label for="remoteWork">Open to Remote Work? </label> </div>
                <br>

                <div>
                    <label for="skill">Skill Set: </label>
                    <input type="checkbox"  id="html" value="html" v-model="formValues.skillSet"/>
                    <label for="html">HTML</label>
                     <input type="checkbox"  id="CSS" value="CSS" v-model="formValues.skillSet"/>
                    <label for="CSS">CSS</label>
                     <input type="checkbox"  id="javascript" value="javascript" v-model="formValues.skillSet"/>
                    <label for="javascript">JavaScript</label>
                </div>

                <button>Submit</button>
           
            </div>
        </form>
    </div>
</template>

<script>
export default {
    name:"FormHandling",
    data(){
        return{
            formValues:{
                name: '',
                profile:'',
                country:'',
                jobLocation: [],
                remoteWork:'No',
                skillSet:[],
                yearsOfExperience:''
            },
            fname:'Deepak',
            lname:'Joshi',
            nums:[1,2,3,4,5,6,7,8,9]
        }
        
    },
    methods:{
        submitForm(){         
           console.log("FormData:",this.formValues);           
        }
    },
    computed:{
        fullName(){
            return`${this.fname} ${this.lname}`
        }
    }
}
</script>