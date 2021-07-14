import React from "react";
import styled from 'styled-components';

export default function Main({ data, cur, next }) {
    const width = 200 / data.length;

    return (
        <Container >
            {data.map((size, i) => (
                <>
                    <Bar height={`${size * 3}px`} width={`${width * 5}px`}
                        key={i}
                        active={next === i}
                        style={(cur === i) ? { backgroundColor: "green" } : null}
                    />
                </>
            ))}
        </Container>
    );



}


const Container = styled.div`
    position: absolute ;
    display: flex ;
    bottom:0;
    flex-direction: row ;
    width: 100% ;
    padding-right: 50px ;
    justify-content:center ;
    align-items: flex-end ;
    ` ;

const Bar = styled.div`
    width: ${(props) => props.width} ;
    height: ${(props) => props.height} ;
    background-color: ${(props) => props.active ? "red" : "#A557F2"} ;
    margin-right:3px;
    `;
