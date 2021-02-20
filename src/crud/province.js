import React, { Component } from 'react'
import AddEditForm from './AddEditForm';
import {deleteProvince, listProvince} from './api/api-province';
import { TableProvince } from './ProvinceComponent';

export default class province extends Component {
    //1. declare state
    state = {
        province:[],
        dataEditRow : null,
        isModalShow:false
    }
    //3. pangggil showListenProvince untuk mengisi province[] di render pertama
    componentDidMount() {
        this.showListProvince();
    }
    //2.call listProvince fro api-province, then isi province[] state
    //dengan data dari listProvince()
    showListProvince = () => {
        listProvince().then(data => {
            this.setState({
                province:data
            })
        })
    };

    onShowModal = (value) =>{
        this.setState({
            isModalShow:value
        })
    }

    onEditRow = (value)=>{
        this.setState({
            dataEditRow : value
        })
        this.onShowModal(true);
    }

    onDeleteRow = (value)=>{
        deleteProvince(value).then(response => {
            console.log(response);

        }).catch(function (error) {
            console.log(error);
        });;
        this.onRefreshTable();
    }

    onRefreshTable =()=>{
        this.showListProvince();
    }
    render() {
        const {province,isModalShow,dataEditRow} = this.state;
        return (
            <>
              <TableProvince province = {province}
              setShowModal={this.onShowModal}
              setDelete={this.onDeleteRow}
              setEdit={this.onEditRow}
                
              ></TableProvince>
              {
                  (isModalShow ? (
                      <AddEditForm 
                      setShowModal={this.onShowModal}
                      setRefreshTable={this.onRefreshTable}
                      province = {dataEditRow}
                      />) : null)
              }
              
            </>
        )
    }
}


