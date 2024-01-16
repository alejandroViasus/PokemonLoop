import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { imagesPokemon } from '@/Assets/funcions'
import { typesPokemon } from '@/Assets/typesPokemon';
import { pokemonGet } from '@/Assets/funcions';
import { valuesPokemon } from '@/Assets/funcions';



//components
import PokeballBg from './PokeballBg'
import ShadowBg from './ShadowBg'
import ShowStack from './ShowStack'
import ShowType from '../ShowType/ShowType'
import Star from '../../../../public/Assets/icons/Types/Star.svg'
import CardButtonTeam from '../CardButtonTeam/CardButtonTeam';

function Card({ pokemon, empty = false, selected = false }) {

    const initialState = {
        theme: pokemon.type1,
        size: {
            height: "130px",
            width: "110px",
        },
        stars: [],
        rarity: "rare",
    };
    const [state, setState] = useState(initialState);


    useEffect(() => {
        //console.log(pokemonGet.valuePokemon(pokemon));
        const valuestars = [];

        for (let i = 0; i < pokemonGet.valuePokemon(pokemon); i++) {
            valuestars.push(<Image key={`starCard${pokemon._id}${i}`} src={Star} width={13} height={13} alt="star" />);
        }

        const rarity =
            valuesPokemon?.rateRarity[valuestars.length - 1] !== undefined
                ? valuesPokemon.rateRarity[valuestars.length - 1]
                : valuesPokemon.rateRarity[valuesPokemon.rateRarity.length - 1];

        setState({ ...state, stars: valuestars, rarity });
    }, []);



    const type = empty === false ? pokemon.type1 : 'None'
    const sizeImagePokemon = 110
    const sizeCard = {
        height: 350,
        width: 175,
    }
    const colorBorder = selected ? `rgba(22,22,22,0.4)` : `rgba(22,22,22,0.3)`
    const BorderSelected = selected ? `3px solid ${colorBorder}` : `2px solid ${colorBorder}`
    const scaleSelected = selected ? '1' : '1'

    console.log('pokemon',)
    return (
        <div
            className={`relative flex-all-center overflow-hidden ${selected?'card-selected':''}`}
            style={{
                height: `${sizeCard.height}px`,
                width: `${sizeCard.width}px`,
                backgroundColor: pokemon !== undefined ? typesPokemon[pokemon.type1].colors.secondary : typesPokemon.Normal.colors.secondary,
                borderRadius: '4px',
                outline: BorderSelected,
                scale:scaleSelected
            }}
        >
            <div
                className='absolute'
                style={{
                    bottom: '-3%'
                }}
            >
                <ShadowBg type={pokemon.type1} />
            </div>
            <div
                className='absolute'
                style={{
                    top: '22%'
                }}
            >
                <PokeballBg type={pokemon.type1} />
            </div>

            <div
                className='absolute percentage-100-width flex-all-center'
                style={{
                    height: '13%',
                    backgroundColor: pokemon !== undefined ? typesPokemon[pokemon.type1].colors.background : typesPokemon.Normal.colors.background,
                    top: '5%',
                    borderTop: `1px solid  ${colorBorder}`,
                    borderBottom: `3px solid  ${colorBorder}`,
                    flexDirection: 'column'

                }}
            >
                <h3
                    style={{
                        fontWeight: '300',
                        fontSize: '16px',
                    }}
                >
                    {`${state.rarity} ${pokemon.shiny ? '(shiny)' : ''}`}
                </h3>
                <div
                    style={{
                        opacity: '0.6'
                    }}
                >

                    {state.stars}
                </div>
            </div>


            <div className="absolute flex-all-center"
                style={{
                    height: '32%',
                    width: '80%',
                    //backgroundColor:'gray',
                    bottom: '0%',
                    justifyContent: 'space-around'
                }}
            >
                <ShowStack pokemon={pokemon} stack={'Heald'} />
                <ShowStack pokemon={pokemon} stack={'Attack'} />
                <ShowStack pokemon={pokemon} stack={'Deffense'} />
            </div>

            <h3 className="absolute flex-all-center"

                style={{
                    width: '100%',
                    textAlign: 'center',
                    top: '51%',
                    fontWeight: '300'
                }}
            >{pokemon.name}</h3>

            <div className="shadowImage absolute"
                style={{
                    height: `30px`,
                    width: `${sizeImagePokemon}px`,
                    bottom: '48%',
                    fontWeight: '300',
                    backgroundColor: 'rgba(22,22,22,0.2)',
                    borderRadius: '50%',
                    filter: 'blur(4px)',
                }}
            >


            </div>

            <div className="absolute flex-all-center"
                style={{
                    width: '100%',
                    //backgroundColor:'red',
                    alignItems: 'flex-end',
                    top: '20%',
                    right: '0%',
                }}
            >
                <h6>lvl.</h6>
                <h4 style={{ fontWeight: '400' }}>{pokemonGet.calcularNivel(pokemon.experience)}</h4>
            </div>

            <div className="absolute"
                style={{
                    bottom: '45%',
                    fontWeight: '300',
                    width: `${sizeImagePokemon}px`,
                    height: `${sizeImagePokemon}px`,
                }}
            >
                <Image
                    src={imagesPokemon.official(pokemon.noPokedex, pokemon.shiny)}
                    width={sizeImagePokemon}
                    height={sizeImagePokemon}
                    alt={`pokemon ${pokemon.name}`}
                />
            </div>

            <div className="absolute percentage-100-width flex-all-center"
                style={{
                    height: '10%',
                    bottom: '32%',
                    //backgroundColor:'red'
                }}
            >
                <ShowType
                    type1={pokemon.type1}
                    type2={pokemon.type2}
                    fill={pokemon !== undefined ? typesPokemon[pokemon.type1].colors.primary : typesPokemon.Normal.colors.primary}
                    scale='0.25'
                ></ShowType>
            </div>

            <div className="absolute"
                style={{
                    top: '20%',
                    left: '5%',
                    scale: '1.4',
                }}
            >
                <CardButtonTeam pokemon={pokemon} porperty={'favorite'} subColor='primary' />
            </div>
            <div className="absolute"
                style={{
                    top: '20%',
                    right: '5%',
                    scale: '1.4',
                }}
            >
                <CardButtonTeam pokemon={pokemon} subColor='primary' />
            </div>



        </div>

    )
}

export default Card