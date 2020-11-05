import React, {Component} from "react";
import {Input, MainCard,Option,Select} from "../../components";
import {connect} from "react-redux"

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
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

    doRegister = async () => {
        const {username, nama, password, noHp, alamat, tempatLahir, tglLahir} = this.state
        const {dataUser} = this.props
        const idUser = dataUser.length;
        if (username && nama && password) {
            const requestOptions = {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    username: username,
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
    gotoLogin = () => {
        console.log(this)
        this.props.history.push('/Login')
        // this.props.history.push('/Register')
    }

    render() {
        return <div>
            <MainCard display="flex" height="1180px" width="450px">
                <form name="formRegister">
                    <h2>Form Registrasi</h2>
                    <Input classDiv="input-group" value={this.state.nik} classComp="input--style-1"
                           placeholder="NIK" name="nik" type="text"
                           onChangeInput={this.onChangeInput}/>
                    <Input classDiv="input-group" value={this.state.username} classComp="input--style-1"
                           placeholder="Username" name="username" type="text"
                           onChangeInput={this.onChangeInput}/>
                    <Input classDiv="input-group" value={this.state.nama} classComp="input--style-1" placeholder="Nama"
                           name="nama" type="text"
                           onChangeInput={this.onChangeInput}/>
                    <Input classDiv="input-group" value={this.state.noHp} classComp="input--style-1" placeholder="No HP"
                           name="noHp" type="tel"
                           onChangeInput={this.onChangeInput}/>
                    <Option>Jenis Kelamin</Option>
                    <Input classDiv="input-group" value={this.state.tmptLahir} classComp="input--style-1"
                           placeholder="Tempat Lahir"
                           name="tmptLahir" type="text"
                           onChangeInput={this.onChangeInput}/>
                    <Select value={this.state.gender} onChange={this.onChangeSelect} text="Jenis Kelamin"
                                   className="input-group"
                                   name="gender">
                                <Option value={"-"} text={"-"}/>
                                <Option value={"L"} text={"laki-laki"}/>
                                <Option value={"P"} text={"Perempuan"}/>
                    </Select>
                    <Select value={this.state.agama} onChange={this.onChangeSelect} text="Agama"
                            className="input-group"
                            name="agama">
                        <Option value={"-"} text={"-"}/>
                        <Option value={"Islam"} text={"Islam"}/>
                        <Option value={"Kristen"} text={"Kristen"}/>
                        <Option value={"Yahudi"} text={"Yahudi"}/>
                        <Option value={"Katolik"} text={"Katolik"}/>
                        <Option value={"Hindu"} text={"Hindu"}/>
                    </Select>
                    <Select value={this.state.marital} onChange={this.onChangeSelect} text="Status Perkawinan"
                            className="input-group"
                            name="marital">
                        <Option value={"-"} text={"-"}/>
                        <Option value={"Kawin"} text={"Kawin"}/>
                        <Option value={"Belum Kawin"} text={"Belum Kawin"}/>
                    </Select>
                <Select value={this.state.blood} onChange={this.onChangeSelect} text="Gol Darah"
                        className="input-group"
                        name="blood">
                    <Option value={"-"} text={"-"}/>
                    <Option value={"A"} text={"A"}/>
                    <Option value={"B"} text={"B"}/>
                    <Option value={"AB"} text={"AB"}/>
                    <Option value={"O"} text={"O"}/>
                </Select>
                <Select value={this.state.department} onChange={this.onChangeSelect} text="Department"
                        className="input-group"
                        name="department">
                    <Option value={"-"} text={"-"}/>
                </Select>
                    <Input classDiv="input-group" value={this.state.tglLahir} classComp="input--style-1"
                           placeholder="Tanggal Lahir"
                           name="tglLahir" type="date"
                           onChangeInput={this.onChangeInput}/>
                    <Input classDiv="input-group" value={this.state.street} classComp="input--style-1"
                           placeholder="Alamat"
                           name="street" type="text"
                           onChangeInput={this.onChangeInput}/>
                    <Input classDiv="input-group" value={this.state.agama} classComp="input--style-1"
                           placeholder="Agama"
                           name="agama" type="text"
                           onChangeInput={this.onChangeInput}/>
                    <Input classDiv="input-group" value={this.state.jabatan} classComp="input--style-1"
                           placeholder="Jabatan"
                           name="jabatan" type="text"
                           onChangeInput={this.onChangeInput}/>
                    <Input classDiv="input-group" value={this.state.password} classComp="input--style-1"
                           placeholder="Password" name="password" type="password"
                           onChangeInput={this.onChangeInput}/>
                    <Input classComp="btn-register" name="btnRegister" funcName={this.doRegister} type="button"
                           value="Register"/>
                    <Input classComp="btn-login" name="btnLogin" funcName={this.gotoLogin} type="button" value="Login"/>
                </form>
            </MainCard>
        </div>
    }
}

const mapStateToProps = (state) => ({
    dataUser: state.process.dataUser
})

const mapDispatchToProps = (dispatch) => ({
    addData: (user) => dispatch({
            type: "registerData",
            payload: {dataUser: user}
        }
    )
})

export default connect(mapStateToProps, mapDispatchToProps)(Register)