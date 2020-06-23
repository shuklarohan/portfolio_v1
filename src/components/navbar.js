import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { navLinks } from '../config'
import { respondTo } from "../styles/_respondTo"

const Container = styled.ul`
    list-style: none;
    display: flex;
    flex-flow: column nowrap;
    background-color: ${({ theme }) => theme.colors.lightNavy};
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 70%;
    z-index: 19;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.3s ease-in-out;
    justify-content: center;
    align-items: center;

    ${respondTo.sm`
        width: 50%;
    `}

    ${respondTo.md`
        flex-flow: row nowrap;
        align-items: center;
        background-color: transparent;
        position: static;
        top: auto;
        right: auto;
        height: auto;
        width: auto;

        z-index: auto;
        transform: none;
        transition: none;
    `}

    li {
        margin: 15px 0;
        ${respondTo.md`
            padding: 0 15px;
        `}
    }
`

const LinkItems = styled(Link)`
    text-decoration: none;
    color: inherit;
`

const Navbar = ({ open, setOpen }) => {
    return (
        <>
            <Container open={open}>
                {
                    navLinks.map((data, index) => {
                        return (
                            <li key={index}>
                                <LinkItems
                                    to={data.url}
                                    onClick={() => setOpen(!open)}>
                                    {data.name}
                                </LinkItems>
                            </li>
                        )
                    })
                }
            </Container>
        </>
    )
}

export default Navbar