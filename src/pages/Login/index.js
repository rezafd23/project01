import React, {Component} from "react";
import {Input, MainCard} from "../../components";

// class Login extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             email: "",
//             password: "",
//         }
//     }
//
//     onChangeInput = e => {
//         console.log(e.target)
//         this.setState({
//             [e.target.name]: e.target.value
//         })
//     }
//
//     doLogin() {
//         // console.log(email)
//         const {dataUser} = this.props
//         console.log(dataUser)
//         // if (email&&password){
//         //     let statusLogin=false
//         //     statusLogin=dataUser.find(data=>(data.email==email&&data.password==password))
//         //     if (statusLogin){
//         console.log("Sukses Login")
//         //     } else {
//         //         console.log("Failed Login")
//         //     }
//         // } else {
//         //     alert("Mohon Cek Form")
//         // }
//     }
//
//     render() {
//         return <>
//             <MainCard display="flex" height="450px" width="450px">
//                 <form name="formLogin">
//                     <h2>Form Login</h2>
//                     <Input classDiv="input-group" value={this.state.email} classComp="input--style-1"
//                            placeholder="Email" name="email" type="email"
//                            onChangeInput={this.onChangeInput}/>
//                     <Input classDiv="input-group" value={this.state.password} classComp="input--style-1"
//                            placeholder="Password" name="password" type="password"
//                            onChangeInput={this.onChangeInput}/>
//                     <Input classComp="btn-register" name="btnRegister" type="button"
//                            value="Register"/>
//                     <Input classComp="btn-login" name="btnLogin" funcName={this.doLogin} type="button" value="Login"/>
//                 </form>
//             </MainCard>
//         </>
//     }
// }
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

    doLogin=()=>{
        const {email,password}=this.state
        const {dataUser}=this.props
        console.log("cek login")
        console.log(dataUser)
        // console.log("cek dataUser")
        // console.log(dataUser)
        // const idUser=dataUser.length;
        // console.log("isiEmail")
        // console.log(email)
        if (email&&password){
            let statusLogin=false
            // statusLogin=dataUser.find(data=>(data.email==email&&data.password==password))
            statusLogin=dataUser.map(data=> {
               if ( data.email == email && data.password == password){
                   // if (data.role!="Admin")
                   this.props.setRole(data.role)
                   return true
               }
            })

            // if (email.includes("admin")){
            //     statusLogin=dataUser.find(data=>(data.email==email&&data.password==password))
            //     this.props.setRole("Admin")
            //     // this.props.updateData("Admin")
            // } else {
            //     // statusLogin=dataUser[1].find((data,index)=>(data.username==email&&password=="12345"))
            //     statusLogin=users.map((data,index)=>{
            //         if ((data.username==email&&password=="12345")){
            //             this.props.setRole(index)
            //             return true
            //         }
            //     })
            //
            // }
            if (statusLogin){
                this.props.history.push("/")
                this.props.loginStatus(statusLogin)
            } else {
                alert("Login Failed!!!!")
                // console.log("Failed Login")
            }
        } else {
            alert("Mohon Cek Form")
        }
    }
    checkLogout=()=>{
        const {logout}=this.props
        if (logout){
            this.props.loginStatus(logout)
        }
        console.log("Cek123")
    }
    gotoRegis=()=>{
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
                    <Input classComp="btn-login" name="btnLogin" funcName={this.doLogin}  type="button" value="Login"/>
                </form>
            </MainCard>
        </div>
    }
}
export default Login