import { useEffect } from 'react'
import './App.css'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import {SignifyClient, ready} from "signify-ts";
import { Signify } from './Signify';

function App() {

    useEffect(() => {
        ready().then(() => {
            console.log("signify client is ready")
        })
    }, [])



    return (
        <>
            <Signify/>
        </>
    )
}

export default App
