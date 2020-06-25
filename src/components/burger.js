import React, { useState } from "react"
import styled from "styled-components"
import { respondTo } from "../styles/_respondTo"
import { Navbar } from "./"

const Container = styled.div`
    width: 2rem;
    height: 2rem;
    position: fixed;
    top: 16px;
    right: 18px;
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
    cursor: pointer;
    z-index: 20;

    div {
        width: 2rem;
        height: 0.20rem;
        background-color: ${({ theme }) => theme.colors.accent};
        border-radius: 10px;
        transform-origin: 1px;
        transition: all 0.3s linear;

        &:nth-child(1) {
            transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
        }
        &:nth-child(2) {
            transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
            opacity: ${({ open }) => open ? 0 : 1};
        }
        &:nth-child(3) {
            transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
        }
    }

    ${respondTo.md`
        display: none;
    `}
`

const Burger = () => {
    const [open, setOpen] = useState(false);
    return (
        <>
            <Container open={open} onClick={() => setOpen(!open)}>
                <div /><div /><div />
            </Container>
            <Navbar open={open} setOpen={setOpen}/>
        </>
    )
}

export default Burger;