export const getBasketTotal=(basket)=>
basket?.reduce((amount,item)=>item.price+amount,0)
export const initialState={
    basket:[]
}
function reducer(state,action){
    console.log(action);
    switch(action.type){
    case 'ADD_TO_BASKET':
        return {...state,
        basket:[...state.basket,action.item]
        };

        case 'REMOVE_FROM_BASKET':
            let newBasket=[...state.basket];
            const index = state.basket.findIndex(
                (basketItem)=>basketItem.id===action.id);
                if(index>=0){
                    newBasket.splice(index,1);
                }
                else{
                    console.warn(`dfghh (id:${action.id})`);
                }
            
            return {...state,
                newBasket:newBasket
            };
            default:
                return state;
}}
export default reducer;