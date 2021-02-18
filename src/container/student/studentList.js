import React, { Component } from 'react'
import Student from './student';
import {studentData} from './studentData'
import {getSkillDesc} from './apiSkill'

export default class studentList extends Component {
    render() {
        const listStudent = studentData.map((students) => {
            let skill = getSkillDesc(students.skill);
            return (
               
                <Student 
                    nim = {students.nim}
                    nama = {students.nama}
                    ipk = {students.ipk}
                    kota = {students.kota}
                    poster = {students.poster}
                    vote = {students.vote}
                    skill = {skill.join(',')}
                   

                />
            );

        });
        return <div className='movies'>{listStudent}</div>
        
    }
}
