import React from 'react';
import styled from 'styled-components';

function GiftRoomComponent() {
    return (
        <GiftRoomBlock>
            <GiftBoxBlock>
                <BoxOne/>
                <BoxTwo/>
                <BoxThree/>
                <BoxFour/>
                <BoxFive/>
                <BoxSix/>
            </GiftBoxBlock>
        </GiftRoomBlock>
    );
}

const GiftRoomBlock = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    position: fixed;
    left: 0;
    top: 0;

    width: 100vw;
    height: 100vh;

    background-color: rgb(0,0,0);

    perspective: 1000px;
`;

const GiftBoxBlock = styled.div`
    position: relative;

    width: 300px;
    height: 300px;

    background-color: rgb(255,255,255);
    transform: rotate3d(1,1,0, -30deg);
    transform-style: preserve-3d;
`;

const BoxOne = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;

    margin: -150px -150px 0;

    width: 300px;
    height: 300px;

    background-color: rgba(0,0,0,.7);
`;

const BoxTwo = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;

    margin: -150px -150px 0;

    width: 300px;
    height: 300px;

    transform: rotateX(-90deg);
    transform-origin: 50% 0;

    background-color: rgba(51, 51, 51, .7);
`;

const BoxThree = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;

    margin: -150px -150px 0;

    width: 300px;
    height: 300px;

    transform: rotateY(-90deg);
    transform-origin: 100% 0;

    background-color: rgba(102, 102, 102, .7);
`;

const BoxFour = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;

    margin: -150px -150px 0;

    width: 300px;
    height: 300px;

    transform: translateZ(-300px);

    background-color: rgba(153, 153, 153, .7);
`;

const BoxFive = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;

    margin: -150px -150px 0;

    width: 300px;
    height: 300px;

    transform: rotateX(90deg);
    transform-origin: 50% 100%;

    background-color: rgba(170, 170, 170, .7);
`;

const BoxSix = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;

    margin: -150px -150px 0;

    width: 300px;
    height: 300px;

    transform: rotateY(90deg);
    transform-origin: 0 50%;

    background-color: rgba(204, 204, 204, .7);
`;



export default GiftRoomComponent;