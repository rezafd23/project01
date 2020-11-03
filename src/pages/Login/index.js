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
                        if (data.role==="admin"){
                            this.getDataUser(res.response.access_token)
                            // {this.getDataUser}
                        }
                        this.props.doLogin(data,res.response.access_token)
                        this.props.history.push("/")

                        // this.props.loginStatus(true)
                    }
                    console.log("Hasil 3")
                    console.log(this.props.statusLogin)
                })
            });

        //
        // const {dataUser}=this.props
        // console.log("cek login")
        // console.log(dataUser)
        // // console.log("cek dataUser")
        // // console.log(dataUser)
        // // const idUser=dataUser.length;
        // // console.log("isiEmail")
        // // console.log(email)
        // let userLogin=[]
        // if (email&&password){
        //     let statusLogin=false
        //     // console.log("BERHASIL LOGIN")
        //     console.log(dataUser)
        //     // statusLogin=dataUser.some((data)=>(data.username==email&&data.password==password))
        //     // console.log(statusLogin)
        //     // statusLogin=dataUser.find(data=>(data.email==email&&data.password==password))
        //     dataUser.find(data=> {
        //        if ( data.email === email && data.password === password){
        //            console.log("BERHASIL LOGIN")
        //            // if (data.role!="Admin")
        //            // this.props.setRole(data.role)
        //            let user={
        //                username:data.username,
        //                idUser:data.id,
        //                role:data.role
        //            }
        //            console.log("cekUser"+user)
        //            userLogin.splice(0,0,user)
        //            // console.log("cek user get"+data.username)
        //            // console.log(data.username)
        //            statusLogin=true
        //        }
        //     })
        //     console.log("cek user get")
        //     console.log(userLogin)
        //     if (statusLogin){
        //         this.props.history.push("/")
        //         this.props.doLogin(userLogin)
        //         this.props.loginStatus(statusLogin)
        //     } else {
        //         alert("Login Failed!!!!")
        //         // console.log("Failed Login")
        //     }
        // } else {
        //     alert("Mohon Cek Form")
        // }
    }

    getDataUser=async (token)=>{
        let dataUser=[]
        const requestOptions = {
            method: 'GET',
            headers: {'Content-Type': 'application/json',
            'Authorization':'Bearer '+token},
        };
        await fetch('http://localhost:3000/app/api/user/users/all',requestOptions)
            .then(response => response.json())
            .then(json => dataUser=json)
        console.log("Get Data User")
        console.log(dataUser.response.payload)
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
