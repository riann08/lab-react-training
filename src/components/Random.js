import React from 'react';

//declare function
function GetRandomNumber(min, max) {
    return Math.floor((Math.random() * max) + min);
}

function Random(props) {
    return (
    <div>
        <p>Random value between {props.min} and {props.max} {'=>'} {GetRandomNumber(props.min,props.max)} </p>
    </div>
    );
};

export default Random;