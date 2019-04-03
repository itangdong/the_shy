export default {
  namespace: 'products',
  state: [
    { name: 'dva', id: 1, key:1 , tags: ['nice', 'developer'],},
    { name: 'antd', id: 2, key:2, tags: ['loser'],},
  ],
  reducers: {
    'delete'(state, { payload: id }) {
      console.log(state)
      return state.filter(item => item.id !== id);
    },
  },
};
