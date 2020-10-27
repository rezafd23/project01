import React, {Component} from "react";
import {Input, MainCard} from "../../components";

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            nama: "",
            password: "",
            dataUser: []
        }
    }

    onChangeInput = e => {
        console.log(e.target)
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    doRegister=()=>{
        const {email,nama,password}=this.state
        const {dataUser}=this.props
        console.log("cek dataUser")
        console.log(dataUser)
        const idUser=dataUser.length;
        console.log("isiEmail")
        if (email&&nama&&password){
            console.log("true")
            console.log(dataUser)

            let statusUser=false
            statusUser=dataUser.find(val=>{
                if (val.email===email){
                    return true
                }
            })
            if (statusUser){
                alert("email telah digunakan")
                console.log("email telah digunakan")
            } else {
                let dataRegister={
                    name:nama,
                    username:email,
                    email:email,
                    password:password
                }
                this.props.saveData(dataRegister,idUser)
                this.props.history.push('/Login')
                // this.props.history.push('/Login')
                console.log("register")
            }
        } else {
            alert("Mohon Cek Form")
            console.log("false")
        }
    }
    gotoLogin=()=>{
        console.log(this)
        this.props.history.push('/Login')
        // this.props.history.push('/Register')
    }

    render() {
        return <div>
            <MainCard display="flex" height="500px" width="450px">
                <form name="formRegister">
                    <h2>Form Registrasi</h2>
                    <Input classDiv="input-group" value={this.state.email} classComp="input--style-1"
                           placeholder="Email" name="email" type="email"
                           onChangeInput={this.onChangeInput}/>
                    <Input classDiv="input-group" value={this.state.nama} classComp="input--style-1" placeholder="Nama"
                           name="nama" type="text"
                           onChangeInput={this.onChangeInput}/>
                    <Input classDiv="input-group" value={this.state.password} classComp="input--style-1"
                           placeholder="Password" name="password" type="password"
                           onChangeInput={this.onChangeInput}/>
                    <Input classComp="btn-register" name="btnRegister" funcName={this.doRegister} type="button"
                           value="Register"/>
                    <Input classComp="btn-login" name="btnLogin"funcName={this.gotoLogin}  type="button" value="Login"/>
                </form>
            </MainCard>
        </div>
    }
}

export default Register