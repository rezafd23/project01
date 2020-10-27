const initialState={
    dataUser:[]
}

const processReducer=(state=initialState,action)=>{
    console.log("State: ",state)
    console.log("action: ",action)

    switch (action.type){
        case "fetchData":
            return {
                dataUser:action.payload.dataUser
            }
        case "registerData":
            return {
                dataUser:action.payload.dataUser
            }
        default:
            return state
    }
    // kalau default state maka ambil yang udah ada
    // kalau belum ada maka ambil initialState
}
export default processReducer