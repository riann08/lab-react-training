import React from 'react'; //import React
import logo from './logo.svg';
import './App.css';
import IdCard from "./components/IdCard.js"; //import functions
//import Greetings from "./components/Greetings.js"; //import functions


function App() {
  return (

    <div className="App">
             
          <h2>Id Card</h2>
          <IdCard
            lastName='Doe'
            firstName='John'
            gender='male'
            height={178}
            birth={"1992-07-14"}
            picture="https://randomuser.me/api/portraits/men/44.jpg"
          />

          <IdCard
            lastName='Delores '
            firstName='Obrien'
            gender='female'
            height={172}  
            birth={"1988-05-11"}
            picture="https://randomuser.me/api/portraits/women/44.jpg"
          />

        {/* <h2>Greetings</h2>
        <Greetings lang="de">Ludwig</Greetings>

        <Greetings lang="fr">François</Greetings> */}

        </div>

          

  );
}

export default App;
