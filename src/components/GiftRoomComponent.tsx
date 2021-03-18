import React from 'react';
import styled from 'styled-components';

type Props = {
    changeOpen: (e: React.MouseEvent) => void;
    refBoxTop: React.RefObject<HTMLDivElement>;
    refBoxFront: React.RefObject<HTMLDivElement>;
    refBoxBack: React.RefObject<HTMLDivElement>;
    refBoxLeft: React.RefObject<HTMLDivElement>;
    refBoxRight: React.RefObject<HTMLDivElement>;
}

function GiftRoomComponent(props: Props) {
    return (
        <GiftRoomBlock>
            {/* 블락 자체에 컨테이너가 걸려야 함 */}
            <GiftBoxBlock onClick={(e) => props.changeOpen(e)}>
                <GiftBox>
                    <BoxOne ref={props.refBoxFront}>
                        <BoxTwo ref={props.refBoxTop}/>
                    </BoxOne>
                    <BoxFive>
                        <BoxThree ref={props.refBoxRight}/>
                        <BoxFour ref={props.refBoxBack}/>
                        <BoxSix ref={props.refBoxLeft}/>
                    </BoxFive>
                </GiftBox>
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
    display: flex;
    justify-content: center;
    align-items: center;

    width: 300px;
    height: 300px;

    transform-style: preserve-3d;
    transform: translateZ(-1000px);

    cursor:pointer;
`;

const GiftBox = styled.div`
    position: relative;

    width: 300px;
    height: 300px;

    transform: rotate3d(1,1,0, -45deg);
    transform-style: preserve-3d;
    z-index: 1;

    & div {
        box-sizing: border-box;
        border: 1px solid rgb(255,255,255);
        transition: 1s;
    }
`;

const BoxOne = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;

    margin: -150px -150px 0;

    width: 300px;
    height: 300px;

    transform-style: preserve-3d;
    background-color: rgba(255,255,255,.7);
    transform-origin: 50% 100%;

    & > div {
        box-sizing: border-box;
        border: 1px solid rgb(255,255,255);
        transition: 1s;
    }
`;

const BoxTwo = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;

    margin: -150px -150px 0;

    width: 300px;
    height: 300px;

    transform: rotateX(-90deg);
    transform-origin: 100% 0;

    background-color: rgba(51, 51, 51, .7);
`;

const BoxThree = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;

    margin: -150px -150px 0;

    width: 300px;
    height: 300px;

    transform: rotateY(90deg);
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

    transform: rotateX(90deg);
    transform-origin: 50% 0;

    background-color: rgba(153, 153, 153, .7);
`;

const BoxFive = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;

    margin: -150px -150px 0;

    width: 300px;
    height: 300px;

    transform-style: preserve-3d;
    transform: rotateX(90deg);
    transform-origin: 50% 100%;

    background-color: rgba(170, 170, 170, .7);

    & > div {
        box-sizing: border-box;
        border: 1px solid rgb(255,255,255);
        transition: 1s;
    }
`;

const BoxSix = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;

    margin: -150px -150px 0;

    width: 300px;
    height: 300px;

    transform: rotateY(-90deg);
    transform-origin: 0 50%;

    background-color: rgba(204, 204, 204, .7);
`;



export default GiftRoomComponent;