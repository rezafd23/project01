import React, {Component} from 'react';
import {Header, Footer, Body, Nav} from "./templates"
import {connect} from "react-redux"

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: "register",
            loginStatus: false
        }
    }

    onClickButton = (page) => {
        this.setState({
            page
        })
    }
    setLoginStatus = (status) => {
        console.log("cek234")
        console.log(status)
        this.setState({
            loginStatus: status
        })
    }

    // async componentDidMount() {
    //     let temp=[]
    //     let temp2=this.state.dataUser
    //
    //     let admin={
    //         id:"101",
    //         name:"Admin",
    //         role:"Admin",
    //         password:"12345",
    //         email:"admin@admin.com",
    //         username:"Admin"
    //     }
    //
    //     await fetch('https://jsonplaceholder.typicode.com/users')
    //         .then(response => response.json())
    //         .then(json => {
    //             let dataUser=json.map(user=>({
    //                 ...user,
    //                 password:"12345",
    //                 role:"user"
    //             }))
    //             dataUser.push(admin)
    //
    //             console.info("dataUser",dataUser)
    //             // this.props.setDataUser(dataUser)
    //         })
    // }

    doLogin = () => {
        this.setState({isLoggedIn: true})
    }
    doLogout = () => {
        this.setState({isLoggedIn: false})
    }

    render() {
        return (
            <>
                <Header/>
                <Nav loginStatus={this.state.loginStatus} status={this.setLoginStatus} toPage={this.onClickButton}/>
                <Body loginStatus={this.state.loginStatus} status={this.setLoginStatus} page={this.state.page}
                      toPage={this.onClickButton}/>
                <Footer/>
            </>
        )
    }
}
const mapStateToProps=(state)=>({
    statusLogin: state.auth.isLoggedIn,
    usernameLogin: state.auth.username
})

const mapDispatchToProps=(dispatch)=>({
    setDataUser:(data)=>dispatch({
        type:"fetchData",
        payload: {dataUser:data}}
        ),
    doLogin:(user)=>dispatch({type:"LOGIN",payload:{username:user}})
})

export default connect(mapStateToProps,mapDispatchToProps) (App);
