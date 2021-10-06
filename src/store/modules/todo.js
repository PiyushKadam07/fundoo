import axios from 'axios';

// const state = {
//     todo :
//     [
//         {
//             id: 1,
//             title: "one",
//         },
//         {
//             id: 2,
//             title: "two",
//         },
//         {
//             id: 3,
//             title: "three",
//         },
//         {
//             id: 4,
//             title: "four",
//         },
//     ]
// };


const state = {
    todo: []
};

const getters = {
    alltodos: (state) => state.todo,
};

const actions = {
    async getAlltodos({ commit }) {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        console.log(response);
        commit('setTodos', response.data);
    },
    async addtodo({ commit }, title) {
        const response = await axios.post('https://jsonplaceholder.typicode.com/posts', { title });
        console.log(response);
        commit('addTodo', response.data);
    },
    async deletetodo({ commit }, id) {
        const response = await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
        console.log(response);
        commit('deleteTodo', response.data);
    },
};

const mutations = {
    setTodos: (state, todo) => (state.todo = todo),
    addTodo: (state, todo) => state.todo.unshift(todo),
    deleteTodo: (state, id) => (state.todo = state.todo.filter(todo => todo.id != id)),
};

export default {
    state,
    getters,
    actions,
    mutations,
};