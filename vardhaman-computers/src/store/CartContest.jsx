import { createContext,useReducer,useEffect } from "react"

const CartContext=createContext({
    items:[],
    addItems:()=>{},
    removeItems:()=>{},
    clearCart:()=>{},
});

function CartReducer(state,action){
    if(action.type==='ADD_ITEM'){
        const existingItemIndex = state.items.findIndex(item => item.id === action.item._id)
        const updatedItems = [...state.items]
        if(existingItemIndex > -1){
            const existingItem = updatedItems[existingItemIndex];
            const updatedItem = {
                ...existingItem,
                quantity: existingItem.quantity + 1,
            }
            updatedItems[existingItemIndex] = updatedItem
        } else {
            updatedItems.push({
                ...action.item,
                id: action.item._id, // ensure 'id' is available for consistent referencing
                price: action.item.productPrice, // normalize price
                quantity: 1
            });
        }
        return {...state, items: updatedItems};
    }
    
    if(action.type==='REMOVE_ITEM'){
        const existingItemIndex=state.items.findIndex(item=>item.id===action._id)
        if(existingItemIndex===-1)return {...state}
        const updatedItems=[...state.items];
        const existingItem=updatedItems[existingItemIndex]
        if(existingItem.quantity===1){
            updatedItems.splice(existingItemIndex,1);
        }
        else{
            const updatedItem={
                ...existingItem,
                quantity:existingItem.quantity-1
            }
            updatedItems[existingItemIndex]=updatedItem;
        }
        return {...state, items:updatedItems};
    }
    if(action.type==="CLEAR_CART"){
        return{...state, items:[]};
    }
    return state;
}

export function CartContextProvider({children}){
    const initialCartState = JSON.parse(localStorage.getItem("cart")) || { items: [] };
    const [cart,dispatchCartAction]=useReducer(CartReducer,initialCartState);

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    function addItems(item){
        dispatchCartAction({type:'ADD_ITEM', item})
    }
    function removeItems(_id){
        dispatchCartAction({type:'REMOVE_ITEM', _id})
    }
    function clearCart(){
        dispatchCartAction({type:'CLEAR_CART'})
    }
    const cartContext={
        items:cart.items,
        addItems,
        removeItems,
        clearCart
    };
    return(
        <CartContext.Provider value={cartContext}>
            {children}
        </CartContext.Provider>
    )
}
export default CartContext;