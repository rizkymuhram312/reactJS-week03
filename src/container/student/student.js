import React from 'react';

const student = (props) => {
    return(
        <div className="card">
            <h3>{props.nim}</h3>
            <h3>{props.nama}</h3>
            <h3>{props.ipk}</h3>
            <h3>{props.kota}</h3>

        </div>
    )
}

export default student;