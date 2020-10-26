import React, {Component} from "react";
import "./style.css"
import {Switch,Route,Redirect} from "react-router-dom"
import {About, Home, Login, Register} from "../../pages";


class Body extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataUser: [{
                nama:"Admin",
                email:"admin@admin.com",
                password:"123"
            }],
            logout: true
        }
    }

    showPage = () => {
        const {page,status} = this.props

        // switch (page) {
        //     case "home":
        //         return <Home dataUser={this.state.dataUser} />
        //     case "login":
        //         return <Login dataUser={this.state.dataUser} logout={false} loginStatus={this.doLogin}/>
        //     case "logout":
        //         // this.props.status(false)
        //         return <Login dataUser={this.state.dataUser} logout={this.state.logout} loginStatus={this.doLogout}/>
        //     case "about":
        //         return <About/>
        //     case "register":
        //         return <Register dataUser={this.state.dataUser} saveData={this.setDataUser}/>
        //     default:
        //         break;
        // }
        return (

            <Switch>
                {/*<Route exact path="/">*/}
                {/*    <Home dataUser={this.state.dataUser} />*/}
                {/*</Route>*/}
                <Route exact path="/" children={(props) => <Home {...props} dataUser={this.state.dataUser} loginStatus={this.props.loginStatus}/>} />
                <Route exact path="/About" component={About}/>
                <Route exact path="/Login" children={(props) => <Login {...props} dataUser={this.state.dataUser} logout={false} loginStatus={this.doLogin}/>} />
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

    doLogout = loginStatus => {
        console.log("cek dologin")
        console.log(loginStatus)
        this.props.toPage("login")
        this.props.status(false)
    }
    doLogin = loginStatus => {

        if (loginStatus) {
            // this.props.toPage("home")
            this.props.status(true)
        }
    }
    setDataUser = (dataUser, idUser) => {
        // const idUser=this.state.dataUser.length;
        let data = this.state.dataUser
        data.splice(idUser, 1, dataUser)
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

export default Body;