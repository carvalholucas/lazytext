import styled from 'styled-components'
import media from "styled-media-query"

export const Header = styled.header`
    background: ${props => props.color || "#ffffff"};
    align-items: center;
    display: flex;
    grid-area: header;
    justify-content: space-between;
    padding: 0 5em;
    z-index: 1;

    ${media.lessThan("medium")`
        display: flex;
        justify-content: center;
        padding: 0 2em;
    `}
`

export const Logo = styled.span` 
    align-items: center;
    color: #2a2a2a;
    display: flex;
    font-size: 1.2em;
    font-weight: 700;

    img {
        margin-right: .5em;
        width: 180px;
    }
`

export const Donate = styled.button`
    background: transparent;
    border: 1px solid #2a2a2a;
    color: #2a2a2a;
    font-weight: 500;
    font-size: .8em;
    padding: 1em;
`