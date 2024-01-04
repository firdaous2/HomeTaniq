import React from 'react'
import styled from "styled-components"

function Topbar() {
    const Topbar = styled.div`
            width: 100%;
            height: 40px;
            background-color: #426034;
            color: white;
            display: flex;
            justify-content: center;
            align-items: center;
            div {
                 margin: auto;
                 font-family: 'Familjen Grotesk', sans-serif;
                 }
        `
    return (
        <Topbar>
            <div>Black Fridays discount - Take advantage of them!</div>
        </Topbar>
    )
}

export default Topbar