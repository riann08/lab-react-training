import React from 'react';


function BoxColor(props) {
    function ConvertRGBToHex(r,g,b){
        const Hex = (r << 16 | g << 8 | b).toString(16).toUpperCase();
        return "#" + Hex;
    };

    return (
        <div style=
        {{backgroundColor: `rgb(${props.r},${props.g},${props.b})`,
    }}>
    rgb({props.r}, {props.g}, {props.b}); <br/>
    {ConvertRGBToHex(props.r,props.g,props.b)};
        </div >
        
    );
};

export default BoxColor;