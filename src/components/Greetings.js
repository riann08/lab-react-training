import React from 'react';

function Greetings(props) {
  // // const { lang } = props.lang;
  // switch (props.lang) {
  //     case 'de'
  //         return <div> Hallo </div>;
  //     case 'es'
  //         return <div>Hola </div>;
  //     default 'en'
  //         return <div>Hello </div>
  // };
  if (props.lang === 'de') {
    return <div> Hallo {props.children} </div>;
  } else if (props.lang === 'fr') {
    return <div>Bonjour {props.children} </div>;
  } else if (props.lang === 'es') {
    return <div>Hola {props.children} </div>;
  } else if (props.lang === 'en') {
    return <div>Hi {props.children} </div>;
  } else {
    return null;
  }
}

export default Greetings;
