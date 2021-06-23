import axios from 'axios';
export const getMens = async ({commit})=>{
      {
        const res = await axios.get('http://localhost:3003/mens');
        //SEt_MENS need to be created in Mutation as every changes wil bedone in mutation
        commit('SET_MENS', res.data);
    }

}