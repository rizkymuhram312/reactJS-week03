import React from 'react';
import './student.css'

const student = (props) => {

const handleVote = (e) => {
    props.onVote(e);
}

    return(
        <div className="ListCard" style={{ backgroundImage: `url(./images/${props.poster})` }}>
            <div className="detailSiswa">
            <h3>NIM : {props.nim}</h3>
            <h3>Nama : {props.nama}</h3>
            <h3>IPK : {props.ipk}</h3>
            <h3>Kota : {props.kota}</h3>
            <h3>Jumlah Vote : {props.vote}</h3>
            <h3>Skills : {props.skill}</h3>
            <center>
            <button onClick={()=>handleVote(props.nim)} >Vote
            </button>
            </center>
            

            </div>

        </div>
    )
}

export default student;