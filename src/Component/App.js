import React from 'react';
import Jokes from './Jokes';
import jokesData from './jokesData';
import './style.css';




export default function App(){
    const jokeComponents = jokesData.map((joke) => (
        <Jokes key={joke.id} question={joke.question} punchline={joke.punchline} />
      ));
   

      class App extends Component{
          render(){
              return
          <div className ="App">
              <Header/>
              <greetings/>
          <h1>Here's the jokes</h1>
          {this.jokeComponents}
          </div>
          }
      }

function Header(){
 

  return <h1 className="header">
      Header-ashe
      </h1>
}

function greetings(){
    return <p>Hello m'lady</p>
}
;


