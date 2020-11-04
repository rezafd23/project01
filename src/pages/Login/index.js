import React, {Component} from "react";
import {Input, MainCard} from "../../components";
import {connect} from "react-redux"

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
        }
    }

    onChangeInput = e => {
        console.log(e.target)
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    doLogin = async () => {
        let data = []
        const {email, password} = this.state
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: email,
                password: password
            })
        };
        await fetch('http://localhost:3000/app/api/user/login', requestOptions)
            .then(response => {
                console.log("Hasil")
                // console.log(response.json().then(res => {
                response.json().then(res => {
                    console.log("hasil2")

                    if (res.response.isLogined === "true") {
                        console.log("SUCCESS LOGIN")
                        data = res.response.payload
                        // if (data.role==="admin"){
                        //     console.log("MaSUK ADMIN")
                            this.getDataUser(res.response.access_token,data.role)
                            // {this.getDataUser}
                        // }

                        this.props.doLogin(data,res.response.access_token)
                        this.props.history.push("/")

                        // this.props.loginStatus(true)
                        console.log("Hasil 3")
                        console.log(this.props.statusLogin)
                        console.log(this.props.dataUser)
                    } else {
                        if (res.response.message==="Email Not Found"||res.response.message==="Wrong Password"){
                            console.log("Hasil error",res)
                            alert("Please Check your email and password")
                        } else {
                            alert("Please try again")
                        }
                    }

                })
            });

    }

    getDataUser=async (token,role)=>{
        console.log("CEK 1 GET")
        let dataUser=[]
        let url=""
        url=(role==="admin")?'http://localhost:3000/app/api/user/users/all':'http://localhost:3000/app/api/user/users/'
        const requestOptions = {
            method: 'GET',
            headers: {'Content-Type': 'application/json',
            'Authorization':'Bearer '+token},
        };
        await fetch(url,requestOptions)
            .then(response => response.json())
            .then(json => dataUser=json)
        console.log("Get Data User")
        console.log(dataUser)
        this.props.setDataUser(dataUser.response.payload)
    }

    checkLogout = () => {
        const {logout} = this.props
        if (logout) {
            this.props.loginStatus(logout)
        }
        console.log("Cek123")
    }
    gotoRegis = () => {
        console.log(this)
        this.props.history.push('/Register')
        // this.props.history.push('/Register')
    }

    render() {
        return <div>
            {this.checkLogout()}
            <MainCard display="flex" height="500px" width="450px">
                <form name="formRegister">
                    <h2>Form Login</h2>
                    <Input classDiv="input-group" value={this.state.email} classComp="input--style-1"
                           placeholder="Email" name="email" type="email"
                           onChangeInput={this.onChangeInput}/>
                    <Input classDiv="input-group" value={this.state.password} classComp="input--style-1"
                           placeholder="Password" name="password" type="password"
                           onChangeInput={this.onChangeInput}/>
                    <Input classComp="btn-register" name="btnRegister" funcName={this.gotoRegis} type="button"
                           value="Register"/>
                    <Input classComp="btn-login" name="btnLogin" funcName={this.doLogin} type="button" value="Login"/>
                </form>
            </MainCard>
        </div>
    }
}

const mapStateToProps = (state) => ({
    statusLogin: state.auth.isLoggedIn,
    usernameLogin: state.auth.username,
    dataUser: state.process.dataUser
})

const mapDispatchToProps = (dispatch) => ({
    doLogin: (user,token) => dispatch({
        type: "LOGIN",
        payload: {
            userLoginData: user,
            access_token:token
        },
    }),
    setDataUser:(data)=>dispatch({
        type:"fetchData",
        payload: {dataUser:data}}
    )

})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
