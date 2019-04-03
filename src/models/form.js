export default {
  namespace: 'form',
  state: [],
  reducers: {
    'add'(state, obj) {
      state.push(obj.payload)
      return state
    }
  },
};
