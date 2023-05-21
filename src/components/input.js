import React from "react";


const Input = (props) => {    
        return (
    <input type={props.type} onClick={props.onClick} className={props.className} placeholder={props.placeholder}
        onChange={props.onChange} value={props.value} min={props.min} max ={props.max} id={props.id} step ={props.step}/>    
);
};

export default Input;