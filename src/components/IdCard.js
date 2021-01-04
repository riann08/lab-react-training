import React from "react";


function IdCard(props){
return (
    <div>
    <img src={props.picture} alt=""/>
    <span>First Name: {props.firstName}</span>
    <span>Last Name: {props.lastName}</span>
    <span>Gender: {props.gender}</span>
    <span>Height: {props.height}</span>
    <span>Birth: {props.birth}</span>
    </div>
);   
};

 export default IdCard;