// here we define all the application level states and define actionsto maket the changes to the state


export const initialState = {
    basket:[]
}

//Selecter 

export const getBasketTotal = (basket)=>{
    console.log(basket);
    return(basket?.reduce((amount,item)=>item.price+amount, 0));
}



const reducer =(state,action)=>{
switch(action.type){
    case "ADD_TO_BASKET":
    return{
        ...state,
        basket:[...state.basket,action.item]
    }
}

}

export default reducer;