import React, {useState, useEffect} from 'react';
import { ToggleButton } from 'react-bootstrap';
import axios from 'axios';

const ApiCall = props => {
    const [pokemon, setPokemon] = useState(null);
    const [visibility, setVisibility] = useState(false);
    const Toggle = () => {
        if (visibility == false) {
            setVisibility(true)
        }
        else {
            setVisibility(false)
        }
    }

    useEffect(() => {
        // fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
        //     .then(res=> {
        //         return res.json()
        //     })
        //     .then(res=> {
        //         console.log(res)
        //         setPokemon(res.results)
        //     })
        //     .catch(err => {
        //         console.log(err)
        //     })

            // modifying into axios

        axios.get("https://pokeapi.co/api/v2/pokemon?limit=807")
        
        .then(res=> {
            console.log(res)
            setPokemon(res.data.results)
        })
        .catch(err => {
            console.log(err)
        })

    // [] is necessary to hold from making non-stop calls
    }, [])
    return (
        <div>
            <h1>This is coming from my API component</h1>
            {/* // it is necessary to insert pokemon ? <>... because it
            is render the return before the fetch is done. */}
            <button 
            className=".btn.btn-outline-danger.btn-sm m-1 p-2"
            onClick={ Toggle}
            >Fetch Pokemon
            </button>
            {
                pokemon && visibility ? 
                pokemon.map(poke => {
                    return <h3>{poke.name}</h3>
                })
                : ""
            }
        
                
        </div>
    );

}
export default ApiCall;