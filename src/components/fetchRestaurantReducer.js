export const reducer=(state, action)=>{
    switch(action.type){
        case "FETCH_LOADING":{
            return{
                ...state,
                loading:true,
                error:false,
                data:[]
            }
        }
        case "FETCH_SUCCESS":{
            return {
                ...state,
                loading:false,
                error: false,
                data:action.payload
            }
        }
        case 'FETCH_ERROR':{
            return {
                ...state,
                error:true,
                loading:false,
                data:[]
            }
        }
    }

}