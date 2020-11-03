import React, {Component} from "react";
import "./style.css"
import {Switch,Route,Redirect} from "react-router-dom"
import {About, Home, Login, Register} from "../../pages";
import {connect} from "react-redux";


class Body extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataUser: [{
                name:"Admin",
                role:"Admin",
                email:"admin@admin.com",
                password:"12345"
            }],
            logout: true,
            role:""
        }
    }

     // async componentDidMount() {
    //     let temp=[]
    //     let temp2=this.state.dataUser
    //
    //     await fetch('https://jsonplaceholder.typicode.com/users')
    //         .then(response => response.json())
    //         // .then(json => temp=json)
    //         .then(json => {
    //             for (let i=0;i<json.length;i++){
    //                 json[i].password="12345"
    //                 json[i].role="Used"
    //             }
    //             temp=json
    //             temp.push(this.state.dataUser[0])
    //             this.setState({
    //                 dataUser:temp
    //             })
    //         })
    //
    //      // foreach tidak nunggu
    //      // jika for itu menunggu
    //      // for (let i=0;i<temp.length;i++){
    //      //     temp[i].password="12345"
    //      //     temp[i].role="Used"
    //      // }
    //      // temp.forEach((element)=>{
    //      //     element.password="12345"
    //      //     element.role="Used"
    //      // })
    //      // temp.push(this.state.dataUser[0])
    //      console.log("cek temp body")
    //      console.info(temp2)
    //      console.log(temp)
    //
    //
    //      console.log("cek data body")
    //      console.log(this.state.dataUser)
    //
    // }

    showPage = () => {
        const {page,status} = this.props

         return (

            <Switch>
                {/*<Route exact path="/">*/}
                {/*    <Home dataUser={this.state.dataUser} />*/}
                {/*</Route>*/}
                <Route exact path="/" children={(props) => <Home {...props} role={this.state.role} dataUser={this.state.dataUser} editUser={this.updateUser} loginStatus={this.props.statusLogin}/>} />
                <Route exact path="/About" component={About}/>
                <Route exact path="/Login" children={(props) => <Login {...props} setRole={this.setUserRole} dataUser={this.state.dataUser} status={this.props.statusLogin} logout={false} loginStatus={this.doLogin}/>} />
                <Route exact path="/Logout" children={(props) => <Login {...props} setRole={this.setUserRole} dataUser={this.state.dataUser} status={false} logout={false} loginStatus={this.doLogin}/>} />
                {/*<Route exact path="/Login">*/}
                {/*    <Login dataUser={this.state.dataUser} logout={false} loginStatus={this.doLogin}/>*/}
                {/*</Route>*/}
                <Route exact path="/Register" children={(props) => <Register {...props} dataUser={this.state.dataUser} saveData={this.setDataUser}/>} />
                {/*<Route exact path="/Register">*/}
                {/*    <Register dataUser={this.state.dataUser} saveData={this.setDataUser}/>*/}
                {/*</Route>*/}

            </Switch>
        )
    }

    setUserRole=role=>{
        this.setState({
            role:role
        })
    }
    updateUser=data=>{
        this.setState({
            users:data
        })
    }


    doLogout = loginStatus => {
        console.log("cek dologin")
        console.log(loginStatus)
        this.props.history.push("/")
        this.props.toPage("login")
        this.props.status(false)
    }
    doLogin = loginStatus => {

        if (loginStatus) {
            // this.props.toPage("home")
            this.props.status(true)
        }
    }

    // updateDataUser=role=>{
    //     let temp = this.state.dataUser
    //     if (role=="Admin"){
    //         this.setState({
    //             dataUser:temp[1]
    //         })
    //     } else {
    //         temp = temp[1].filter(obj => {
    //             return obj.id === role+1
    //         })
    //         this.setState({
    //             dataUser:temp
    //         })
    //         console.log(temp)
    //     }
    // }

    setDataUser = (dataUser, idUser) => {
        // const idUser=this.state.dataUser.length;
        let data = this.state.users
        data.push(dataUser)
        // data.splice(idUser, 1, dataUser)
        console.log("Isi Data User")
        console.log(dataUser)

        this.setState({
            dataUser: data
        })
        this.props.toPage("login")
        console.log("Cek Setelah Save")
        console.log(this.state.dataUser)
        this.props.toPage("login")
    }

    render() {
        return <>
            <div className="main">
                {
                    this.showPage()
                }
            </div>
        </>
    }
}
const mapStateToProps = (state) => ({
    statusLogin: state.auth.isLoggedIn,
    usernameLogin: state.auth.username,
    dataUser: state.process.dataUser
})

const mapDispatchToProps = (dispatch) => ({
    doLogin: (user) => dispatch({
        type: "LOGIN",
        payload: {
            userLoginData: user
        },
    }),setDataUser:(data)=>dispatch({
        type:"fetchData",
        payload: {dataUser:data}}
    )

})

export default connect(mapStateToProps, mapDispatchToProps)(Body)