import React,{useState,useEffect} from 'react'
import { useSelector, useDispatch } from "react-redux";
import { valuesPokemon } from '@/Assets/funcions';


function RenderCards() {
    const globalState = useSelector((state) => state.valueState);

    const initialState={
        index:1,
        sizeRender:valuesPokemon.componentRenderCards.sizeRender,
        pokemonsRender:[],
    }

    const [state,setState]=useState(initialState)

    useEffect(()=>{
       getRenderPokemon();
    },[state.index])

    const getRenderPokemon=()=>{
        const pokemonsRender=[]
        globalState.pokemonsUser?.slice().reverse().map((pokemon,i)=>{
            if(i<state.index*state.sizeRender && i>=((state.index*state.sizeRender)-state.sizeRender)){
             pokemonsRender.push(pokemon);   
            }
        })
        console.log(pokemonsRender);
        setState({...state,pokemonsRender})
    }
  return (
    <section>
        RenderCards
        {state.pokemonsRender.map((pokemon)=>{
            return(<div>{pokemon.name}</div>)
        })}
    </section>
  )
}

export default RenderCards