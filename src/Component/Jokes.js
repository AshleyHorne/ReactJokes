import React from 'react';
import jokesData from "./jokesData";




function Jokes(prop){
    console.log(prop);
    
    return(
        <div>
            <div>Question: {prop.question}</div>
            <div>Punchline: {prop.punchline}</div>
    
            

    </div>
    );
} export default Jokes;