import React from 'react'

export default function Character(props) {
    return (
        <button className={props.obtained ? "btn btn-success" : "btn btn-outline-secondary"} onClick={props.toggleObtained}>{props.name}</button>
    )
}