const initialState={
    isLoggedIn:false,
    username:""
}

const authReducer=(state=initialState,action)=>{
    console.log("State: ",state)
    console.log("action: ",action)

    switch (action.type){
        case "LOGIN":
            return{
                isLoggedIn: true,
                username: action.payload.username,
                role:action.payload.role,
                idUser:action.payload.idUser
            }
        // case "fetchData":
        //     return {
        //         dataUser:action.payload.dataUser
        //     }
        case "LOGOUT":
            return initialState
        default:
            return state
    }
}
export default authReducer