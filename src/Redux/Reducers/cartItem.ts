import { ADD_TO_CART,REMOVE_FROM_CART,CLEAR_CART, ADD_TO_ORDER } from "./canstants";


const cartItems = (state = [],action) =>{
    switch(action.type){
        case ADD_TO_CART : 
        return [...state,action.payload]

        case REMOVE_FROM_CART :

            return state.filter(cartItem => cartItem.product.id !== action.payload.id)

        case CLEAR_CART :
            return state = []
        
        case ADD_TO_ORDER : 
            return [...state,action.payload]
     }
     return state;
}

export default cartItems

