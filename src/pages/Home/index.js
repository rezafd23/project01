import React, {Component} from "react";

import {Form, Input, MainCard} from "../../components";
import { Redirect } from "react-router-dom"

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users:[]
        }
    }

    fetchData = () => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => this.setState({ users: json }))
        // let temp=this.state.users
        // this.state.users.map((val,index)=>{
        //     let password="12345"
        //     temp[index].push(password)
        // })
        // this.setState({users:temp})
        // console.log("Cek Fetch")
        // console.log(this.state.users)
    }


    render() {
        const {dataUser,loginStatus} = this.props
        console.log("cek home")
        {this.fetchData()}
        // console.log(dataUser)
        if (loginStatus){
            return <>
                <MainCard height="700px" width="800px">
                    <h2>Data Album</h2>
                    {/*<Form formName="formSearch">*/}
                    {/*    <Input classDiv="input-group" classComp="input--style-1" placeholder="Search" name="searchForm"*/}
                    {/*           type="text"/>*/}
                    {/*    <Input classComp="btn-login" name="btnSearch" type="button" value="Search"/>*/}
                    {/*</Form>*/}
                    <table className="tableData" width="100%" border="1">
                        <thead>
                        <tr>
                            <th>No</th>
                            <th className="namealbum" id="namealbum">Nama</th>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.state.users.map((val,index)=>{
                            return (
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{val.name}</td>
                                    <td>{val.username}</td>
                                    <td>{val.email}</td>
                                    <td align="center">
                                        <button onClick="">Detail</button>
                                        <button onClick="">Edit</button>
                                        <button onClick="">Delete</button>
                                    </td>
                                </tr>
                            )
                        })}
                        </tbody>
                        {/*<tr>*/}
                        {/*    <td>1</td>*/}
                        {/*    <td>Tonny Bennet</td>*/}
                        {/*    <td>La Vie en Rose</td>*/}
                        {/*</tr>*/}
                    </table>
                </MainCard>

                <MainCard padding="10px" height="1250px" width="800px">
                    <h2>Data Album</h2>
                    <Form formName="formEdit">
                        <Input classDiv="input-group" classComp="input--style-1" name="name" type="text">
                            Name
                        </Input>
                        <Input classDiv="input-group" classComp="input--style-1" name="email" type="email">
                            Email
                        </Input>
                        <Input classDiv="input-group" classComp="input--style-1" name="username" type="text">
                            Username
                        </Input>
                        <Input classDiv="input-group" classComp="input--style-1" name="phone" type="text">
                            Phone
                        </Input>
                        <Input classDiv="input-group" classComp="input--style-1" name="website" type="text">
                            Website
                        </Input>
                        <div>
                            Company
                            <Input classDiv="input-group" classComp="input--style-1" name="companyName" type="text"/>
                            <Input classDiv="input-group" classComp="input--style-1" name="companyPhrase" type="text"/>
                            <Input classDiv="input-group" classComp="input--style-1" name="companyBs" type="text"/>
                        </div>
                        <div>
                            Address
                            <Input classDiv="input-group" classComp="input--style-1" name="addressSt" type="text"/>
                            <Input classDiv="input-group" classComp="input--style-1" name="addressSuite" type="text"/>
                            <Input classDiv="input-group" classComp="input--style-1" name="addressCity" type="text"/>
                            <Input classDiv="input-group" classComp="input--style-1" name="addressZipCode" type="text"/>
                            <Input classDiv="input-group" classComp="input--style-1" name="geoLat" type="text"/>
                            <Input classDiv="input-group" classComp="input--style-1" name="geoLang" type="text"/>
                        </div>
                        <Input classComp="btn-login" name="btnSearch" type="button" value="Save"/>
                    </Form>
                </MainCard>

            </>
        } else {
            return <Redirect to ="/Login"/>
        }

    }
}

export default Home