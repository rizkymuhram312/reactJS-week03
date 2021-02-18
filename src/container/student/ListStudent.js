import React, { Component } from 'react'
import {studentData} from './studentData'
import Student from './student'
import '../movies/Movie.css'
import { getSkillDesc } from './apiSkill'

export default class ListStudent extends Component {
    state = {
        students: [],
        search: "",  //menyimpan value
        select:"",
        isSelected: false
    }

    componentDidMount(){
        this.setState({
            students : studentData
        })
    }
//stiap kali user input key, maka value akan disimpan di state search
    onHandleChange=(e)=>{ //menympan event
        this.setState({
            search : e.target.value,
            isSelected : false
        })
        console.log(this.state.search);

    }
    onHandleSelect=(e)=>{
        const value = e.target.selectedIndex !== 0 ? e.target.options[e.target.selectedIndex].value : null;
        console.log(value);
        if(value !== 0){
            this.setState({
                select:value,
                isSelected:true
            })
        }
    }

    handleUpVote = (e)=> {
        this.setState({
            students:[
                ...this.state.students.map((value) =>{
                    if (value.nim === e){
                        value.vote = value.vote + 1;
                        return value;
                    } else{
                        return value;
                    }
                })
            ]
            
        })
    }

    render() {
        const {students,search,select,isSelected} = this.state;
        return (
            <>
            <div>
                <input placeholder = 'Search Student ...' value={search} onChange={this.onHandleChange}/> 
                <select value={select} onChange={this.onHandleSelect}>
                    <option value="">Filter By</option>
                    <option value="nim">NIM</option>
                    <option value="nama">Nama</option>
                    <option value="ipk">IPK</option>
                    <option value="kota">Kota</option>
                </select>
            </div>
            <div className="student">
                {
                    !isSelected ? //if selected false
                (students
                .filter( f => f.nama.toLowerCase().includes(search.toLowerCase())) //karan this.state sudah dideklarasikan
                .sort((a,b)=>b.vote - a.vote )
                .map(value => {
                    let skills = getSkillDesc(value.skill);
                    return (
                        <Student
                   
                        nim={value.nim}
                        nama={value.nama}
                        ipk={value.ipk}
                        kota={value.kota}
                        vote={value.vote}
                        poster = {value.poster}
                        skill={skills.join(',')}
                        onVote = {this.handleUpVote}

                      
                        />
                        )
                })
                )
                : //else
                (students
                .sort((a,b)=>
                
                {
                    
                    if (select === 'nim') {
                        return a.nim - b.nim;
                    }
                    if (select === 'nama') {
                        return (''+a.nama).localeCompare(b.nama);
                    }
                    if (select === 'ipk') {
                        return b.ipk - a.ipk;
                    }
                    if (select === 'kota') {
                        return (''+a.kota).localeCompare(b.kota);
                    }
                }).map(value => {
                    let skills = getSkillDesc(value.skill);
                        return ( <Student
                   
                            nim={value.nim}
                            nama={value.nama}
                            ipk={value.ipk}
                            kota={value.kota}
                            vote={value.vote}
                            poster = {value.poster}
                            skill={skills.join(',')}
                            onVote = {this.handleUpVote}
    
                          
                            />)
                    })
                )
            }
            </div>
            </>
        )
    }
}
