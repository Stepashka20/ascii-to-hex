import { useState } from 'react'

import CardConvertor from './CardConvertor'
import { IconLetterCase,IconBinary,IconHexagonLetterH,Icon123,IconLink } from '@tabler/icons-react';
import base64  from "./assets/icons8-base-64-100.png"
function App() {

    return (
        <div style={{maxWidth: "90%", margin: 'auto', padding: 20, display: 'flex', flexWrap: 'wrap'}}>
            <CardConvertor title="Text (ASCII / ANSI)" icon={<IconLetterCase/>}/>
            <CardConvertor title="Binary" icon={<IconBinary/>}/>
            <CardConvertor title="Hex" icon={<IconHexagonLetterH/>}/>
            <CardConvertor title="Base 64" icon={<img src={base64} width="24"/>}/>
            <CardConvertor title="Decimal" icon={<Icon123/>}/>
            <CardConvertor title="URL Encoded" icon={<IconLink/>}/>
            {/* <CardConvertor title="ROT 13" icon={<Icon123/>}/>
            
            <CardConvertor title="HTML Entities" icon={<Icon123/>}/> */}
            {/* <CardConvertor title=""/> */}
        </div>
    )
}

export default App
