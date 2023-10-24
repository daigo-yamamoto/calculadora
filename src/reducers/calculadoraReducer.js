const initialState = {
    resultado: 0,
    inputAtual: ""
  };
  
  function calculadoraReducer(state = initialState, action) {
    switch (action.type) {
      case "SET_INPUT":
        return { ...state, inputAtual: action.payload };
      case "CALCULATE":
        return { ...state, resultado: eval(state.inputAtual), inputAtual: "" };
      case "RESET":
        return initialState;
      default:
        return state;
    }
  }
  
  export default calculadoraReducer;
  