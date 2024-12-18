export const formInitialState= {
    name:"",
    type:"",
    rating:"",
    number_of_votes:"",
    price_starts_from:"",
    image:""
}

export const formReducer=(state,action)=>{
    switch(action.type){
        case "CHANGE_INPUT":{
            return{
                ...state,
                [action.payload.name]:action.payload.value
            }
        }
        case "RESET_FIELDS":{
            return{
                ...formInitialState
            }
        }
        default:{
            throw new Error("action type is invalid")
        }
    }
}