import React from "react";

function CreditCard(props) {
    function RenderCardType(type) {
        if (props.type === "Visa") {
            return <img src="/img/visa.png" alt="visa logo" />;
        } else {
            return <img src="/img/master-card.svg" alt="mastercard logo" />
        };
    };

    function RenderExpiryMonth(month) {
        if (props.expirationMonth < 10) {
            return '0' + props.expirationMonth;
        } else {
            return props.expirationMonth;
        };
    };

    return (
        <div>{RenderCardType(props.type)}
            <span>************* {props.number.slice(12, 16)}</span>
            <br />
            <span>
                Expires {RenderExpiryMonth(props.expirationMonth)} / {props.expirationYear.toString().slice(2, 4)}
            </span>
            <span>{props.bank}</span>
            <br />
            <span>{props.owner}</span>
        </div>
    );
};

export default CreditCard;