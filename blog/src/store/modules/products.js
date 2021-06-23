import axios from "axios";
const state = {
    products:[]
};
const getters = {
      allProducts: state => state.products
};
const mutations = {
    setProducts: (state,products) =>(state.products = products)
};
const actions = {
    async getProducts({commit}){
        const res = await axios.get('https://localhost:44332/api/Products');
        commit ('setProducts',res.data);       
    }
};


export default 
{
    state,
    getters,
    actions,
    mutations
};