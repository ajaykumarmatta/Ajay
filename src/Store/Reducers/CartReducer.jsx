const initialState = {
    cart: []
}

const cartReducer = (state=initialState,action)=>{
    let cart = state.cart;
    switch(action.type){
        case 'ADD_TO_CART':
            cart.push(action.payload)
            console.log(cart)
            return {
                ...state,
                cart: cart
            }
        case 'REMOVE_FROM_CART':
            return{
                ...state,
                cart:cart.filter(item => item.product.id !=action.payload.productId)
            }
        default:
            return state;
    }
    
}

export default cartReducer;