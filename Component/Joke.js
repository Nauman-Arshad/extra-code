import React from 'react';
import JokeComp from './JokeComp'

function Joke() {



    return (
        <>

            <JokeComp
                question="What's the best thing about Switzerland?"
                punchLine="I don't know, but the flag is a big plus!"
            />

            <JokeComp
                question="Did you hear about the mathematician who's afraid of negative numbers?"
                punchLine="He'll stop at nothing to avoid them!"
            />
            <JokeComp
                question="Hear about the new restaurant called Karma?"
                punchLine="There’s no menu: You get what you deserve."
            />

            <JokeComp
                question="Did you hear about the actor who fell through the floorboards?"
                punchLine="He was just going through a stage."
            />

            <JokeComp
                question="Did you hear about the claustrophobic astronaut?"
                punchLine="He just needed a little space."
            />

        </>
    )
}
export default Joke