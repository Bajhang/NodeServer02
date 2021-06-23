import axios from "axios";
const state = {
    mens: [{
        ranking: '',
        name: '',
        dob: '',
        country: '',
        score: ''
    }
    ]
};
const getters = {
    allMens: state => state.mens
};
const mutations = {
    setMens: (state, mens) => (state.mens = mens)
};
const actions = {
    async getmens({ commit }) {
        const res = await axios.get('http://localhost:3003/mens');
        commit('setMens', res.data);
    }
};


export default
    {
        state,
        getters,
        actions,
        mutations
    };