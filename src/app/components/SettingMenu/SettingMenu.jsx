import React ,{useState}from 'react'
import ArrowBtn from '@/app/Icons/ArrowBtn'
import FilterTypeButton from '../FilterTypeButton/FilterTypeButton'
import FilterTypeButtonIn from '../FilterTypeButtonIn/FilterTypeButtonIn'
import { typesPokemon } from '@/Assets/typesPokemon'
import FilterType from '../FilterType/FilterType'

function SettingMenu({ theme = 'None' }) {


    const initialState={
        theme
    }

    const [state,setState]=useState(initialState)

    const handlerType=(type)=>{
        setState({...state, theme:type})
    }

    return (
        <div
            className='content-alert-standard'

        >
            <div className='bg-panel'></div>
            <div className="panel-info"
                style={{
                    backgroundColor: typesPokemon[state.theme].colors.background,
                }}
            >
                <div className="content-title">
                    <h1 className='title'
                     style={{
                        color:typesPokemon[state.theme].colors.textDark
                    }}
                    >settings</h1>
                </div>
                <div className="info flex-all-center"
                style={{
                    flexDirection:'column'
                }}
                >
                    <ul
                        style={{
                            height: '90%',
                            width: '70%',
                            // backgroundColor: 'orange'
                        }}
                    >
                        <li className='flex-all-center button-settings cursor-pointer'
                            style={{
                                backgroundColor: typesPokemon[state.theme].colors.primary,
                                color: typesPokemon[state.theme].colors.textWhite,
                            }}>
                            <h1
                                className='title-details'
                            >
                                theme
                            </h1>

                            <FilterType
                                    type={theme}
                                    handlerType={handlerType}
                                ></FilterType>

                        </li>

                    </ul>
                     {theme !== state.theme 
                     ?<div className="flex-all-center">
                        <button>save Changes</button>
                     </div>
                     :null
                    }
                </div>
            </div>
        </div>
    )
}

export default SettingMenu