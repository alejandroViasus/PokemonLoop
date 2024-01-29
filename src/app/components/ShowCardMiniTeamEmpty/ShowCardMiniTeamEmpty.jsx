import React, { useState } from 'react'
import { useSearchParams, useRouter } from "next/navigation";
import Link from 'next/link';


function ShowCardMiniTeamEmpty({ userId = '0', scale = 1, bg = `rgba(22,22,22,0.05)` }) {
    const searchParams = useSearchParams();
    //console.log('params', searchParams.id)
    const router = useRouter();

    const urlCards = `/cards?id=${userId}`;
    const initialState = {

        size: {
            height: `${130 * scale}px`,
            width: `${110 * scale}px`,
        },
        stars: [],
        rarity: "rare",
    };
    const [state, setState] = useState(initialState);
    const styleContentCard = {
        position: "relative",
        height: state.size.height,
        width: state.size.width,
        // backgroundColor: ``,
        overflow: "hidden",
        borderRadius: "8px",
        border: `3px solid rgba(20,20,20,0.1)`,
        backgroundColor: bg
    };
    return (
        <Link className=""
            style={styleContentCard}
            href={urlCards}
        >
        </Link>
    )
}

export default ShowCardMiniTeamEmpty