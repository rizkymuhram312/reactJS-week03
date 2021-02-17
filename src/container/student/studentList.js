import React, { Component } from 'react'
import Student from './student';
import {studentData} from './studentData'

export default class studentList extends Component {
    render() {
        const listStudent = studentData.map((students) => {
            return (
                <Student 
                    nim = {students.nim}
                    nama = {students.nama}
                    ipk = {students.ipk}
                    kota = {students.kota}
                />
            );

        });
        return <div className='movies'>{listStudent}</div>
        
    }
}
