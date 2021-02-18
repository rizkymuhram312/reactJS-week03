import React, { Component } from 'react'
import {studentData} from './studentData'
import '../movies/Movie.css'
import Student from './student'
import { getSkillDesc } from './apiSkill'

export default class VoteStudent extends Component {
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

    handleUpVote = (nim)=> {
        this.setState({
            students:[
                ...this.state.students.map((value) =>{
                    if (value.nim === nim){
                        value.vote = value.vote + 1;
                        return value;
                    } else{
                        return value;
                    }
                })
            ]
            
        })
    }

    handleUpVote1 = (nim) =>{
        let vote = [...this.state.students]
        vote.map(x=>{
            if(x.nim === nim){
                return x.vote=x.vote+1
            }
        })
        this.setState({students:vote})
    }

    render() {
        const {students,search,select,isSelected} = this.state;
        return (
            <>
            
            <div className="student">
                
                {
                    !isSelected ? //if selected false
                (students
                    .sort((a,b)=>b.vote - a.vote )
                    .map(value => {
                        
                        let skills = getSkillDesc(value.skill);
                            return (<Student
                   
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
                .sort((a,b)=>b.vote - a.vote )
                .map(value => {
                    let skills = getSkillDesc(value.skill);
                        return (<Student
                   
                            nim={value.nim}
                            nama={value.nama}
                            ipk={value.ipk}
                            kota={value.kota}
                            vote={value.vote}
                            poster = {value.poster}
                            skill={skills.join(',')}
    
                          
                            />) //pakai fungsi kosong agar fungsi nya tidak looping
                    })
                )
            }
            </div>
            </>
        )
    }
}
