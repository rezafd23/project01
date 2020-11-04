import React, {Component} from "react";
import {Input, MainCard} from "../../components";
import {connect} from "react-redux"

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            nama: "",
            password: "",
            tmptLahir: "",
            tglLahir: "",
            noHp: "",
            street: "",
            dataUser: []
        }
    }

    onChangeInput = e => {
        console.log(e.target)
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    doRegister=async ()=>{
        const {email,nama,password,noHp,alamat,tempatLahir,tglLahir}=this.state
        const {dataUser}=this.props
        const idUser=dataUser.length;
        if (email&&nama&&password){
            const requestOptions = {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    email: email,
                    name: nama,
                    password: password,
                    noHp: noHp,
                    tempatLahir: tempatLahir,
                    // tglLahir: tglLahir,
                    tglLahir: new Date(tglLahir),
                    alamat: alamat,

                })
            };
            await fetch('http://localhost:3000/app/api/user/register', requestOptions)
                .then(response => {
                    // console.log(response.json().then(res => {
                    response.json().then(res => {
                        console.log("hasil reg")
                        if (res.status === 200) {
                            this.props.history.push('/Login')
                        } else {
                            alert("Register Failed, Please Check your email")
                        }
                        console.log(res)
                    })
                });
            // let statusUser=false
            // statusUser=dataUser.some(val=>(val.email===email))
            //
            // if (statusUser){
            //     alert("email telah digunakan")
            //     console.log("email telah digunakan")
            // } else {
            //     let dataRegister={
            //         id:idUser,
            //         name:nama,
            //         username:nama,
            //         email:email,
            //         password:password
            //     }
            //     let temp = dataUser
            //     temp.push(dataRegister)
            //     this.props.addData(temp)
            //     this.props.history.push('/Login')
            //     console.log("register")
            // }
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
            <MainCard display="flex" height="680px" width="450px">
                <form name="formRegister">
                    <h2>Form Registrasi</h2>
                    <Input classDiv="input-group" value={this.state.email} classComp="input--style-1"
                           placeholder="Email" name="email" type="email"
                           onChangeInput={this.onChangeInput}/>
                    <Input classDiv="input-group" value={this.state.nama} classComp="input--style-1" placeholder="Nama"
                           name="nama" type="text"
                           onChangeInput={this.onChangeInput}/>
                    <Input classDiv="input-group" value={this.state.noHp} classComp="input--style-1" placeholder="No HP"
                           name="noHp" type="tel"
                           onChangeInput={this.onChangeInput}/>
                           <Input classDiv="input-group" value={this.state.tmptLahir} classComp="input--style-1" placeholder="Tempat Lahir"
                           name="tmptLahir" type="text"
                           onChangeInput={this.onChangeInput}/>
                    <Input classDiv="input-group" value={this.state.tglLahir} classComp="input--style-1" placeholder="Tanggal Lahir"
                           name="tglLahir" type="date"
                           onChangeInput={this.onChangeInput}/>
                    <Input classDiv="input-group" value={this.state.street} classComp="input--style-1" placeholder="Alamat"
                           name="street" type="text"
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
const mapStateToProps=(state)=>({
    dataUser:state.process.dataUser
})

const mapDispatchToProps=(dispatch)=>({
    addData:(user)=>dispatch({
        type:"registerData",
        payload: {dataUser:user}}
    )
})

export default connect(mapStateToProps,mapDispatchToProps) (Register)