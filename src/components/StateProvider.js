// import { createContext } from "react";
import React, {createContext, useContext,useEffect,useReducer} from "react";


// prepars the data layer
export const StateContext = createContext();

//wrap our and provide the layer

export const SatateProvider = ({reducer,initialState,children})=>{
   return <StateContext.Provider value = {useReducer(reducer, initialState)}>
         {children}
    </StateContext.Provider>
} 

// Pull information from the data layer
export const useStateValue = ()=>useContext(StateContext);

