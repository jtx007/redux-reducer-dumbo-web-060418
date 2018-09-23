export function managePresents(state, action){
  switch (action.type) {
    case 'INCREASE':
      return {numberOfPresents: 1}
      break;
    case 'DECREASE':
      return {numberOfPresents: 0}
      break;
    default:
      return state
  }
}
