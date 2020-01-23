let state = {count: 0};
 
function changeState(state, action){
    switch (action.type) {
      case 'INCREASE_COUNT':
        return {count: state.count + 1}
      default:
        return state;
    }
  }
 
//ensures each time state updates, our HTML updates to reflect these changes
function render(){
    document.body.textContent = state.count
}
 
//persists changes to state
  //bc we called dispatch function, the dispatch function called our reducer, 
    // & then we took the return value from the reducer & assigned it to be the new state

function dispatch(action){
  state = changeState(state, action)
  render()
}
 
render()