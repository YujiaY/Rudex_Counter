const initialState = {
  counter: 0,
  results: [],
  value:11,
};

const reducer = (state = initialState, action) => {
  if (action.type) {
    switch (action.type) {
      case 'INCREMENT':
        return {
          ...state,
          counter: state.counter + 1
        };
      case 'DECREMENT':
        return {
          ...state, counter: state.counter - 1
        };
      case 'ADD':
        return {
          ...state, counter: state.counter + action.val
        };
      case 'SUBTRACT':{
        console.log('Subtracting...')
        return {
          ...state, counter: state.counter - action.val
        };
      }
      case 'STORE_RESULT':
        {
          console.log(`Storing result... ${state.counter}`);
          return {
          ...state,
          results : state.results.concat({id: new Date, value: state.counter})
        };}
      case 'DELETE_RESULT':
        {
          console.log('Deleting result...')
          //One way to remove an item in array.
          // const id = action.id;
          // const newArray = [...state.results];
          // newArray.splice(id, 1);

          //Here is another way:
          const updatedArray = state.results.filter(result => result.id !== action.resultElId)
        return {
          ...state,
          results : updatedArray
        }};
      case 'DIFF_CHANGE': {
        console.log('Input is changing diff...');
        return {
          ...state,
          // value : +action.diffInput
        }
      };
      case 'DIFF_SUBMIT':
      {
        action.eventSubmit.preventDefault();
        console.log('Submitting diff...');
        console.log(action.diffSubmit)
        // console.log(`${action.diffInput}`)
        // this.setState({value: action.target.value});
        return {
          ...state,
          value : +action.diffSubmit
        };
      };
      default:
        return state;
    }
  }
  return state;
};

export default reducer;