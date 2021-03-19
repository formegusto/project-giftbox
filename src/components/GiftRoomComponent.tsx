import React from 'react';
import styled from 'styled-components';

type Props = {
    changeOpen: (e: React.MouseEvent) => void;
    closeBox: (e: React.MouseEvent) => void;
    refBox: React.RefObject<HTMLDivElement>;
    refBoxTop: React.RefObject<HTMLDivElement>;
    refBoxFront: React.RefObject<HTMLDivElement>;
    refBoxBack: React.RefObject<HTMLDivElement>;
    refBoxLeft: React.RefObject<HTMLDivElement>;
    refBoxRight: React.RefObject<HTMLDivElement>;
    refLetterTop: React.RefObject<HTMLSpanElement>;
    refLetter: React.RefObject<HTMLDivElement>;
    refLetterBottom: React.RefObject<HTMLDivElement>;
    refCloseButton: React.RefObject<HTMLButtonElement>;
}

function GiftRoomComponent(props: Props) {
    return (
        <GiftRoomBlock>
            {/* 블락 자체에 컨테이너가 걸려야 함 */}
            <GiftBoxBlock onClick={(e) => props.changeOpen(e)}>
                <GiftBox ref={props.refBox}>
                    <BoxOne ref={props.refBoxFront}>
                        <BoxTwo ref={props.refBoxTop}/>
                    </BoxOne>
                    <BoxFive>
                        <BoxThree ref={props.refBoxRight}/>
                        <BoxFour ref={props.refBoxBack}/>
                        <BoxSix ref={props.refBoxLeft}/>
                        <LetterBlock>
                            <Letter ref={props.refLetter}>
                                <CloseButton ref={props.refCloseButton} onClick={props.closeBox}>Close</CloseButton>
                                <LetterBottom ref={props.refLetterBottom}/>
                            </Letter>
                            <LetterBody/>
                            <LetterBack/>
                            <LetterTop ref={props.refLetterTop}/>
                        </LetterBlock>
                    </BoxFive>
                </GiftBox>
            </GiftBoxBlock>
        </GiftRoomBlock>
    );
}

const LetterBottom = styled.div`
    position: absolute;

    opacity: 0;
    width: 640px;
    height: 100%;

    transform-origin: 50% 0%;
    border-bottom-left-radius: .5rem;
    border-bottom-right-radius: .5rem;

    background-color: rgb(255,255,255);
`;

const CloseButton = styled.button`
    padding: .5rem 1rem;

    font-family: 'Montserrat', sans-serif;
    font-size: 2rem;
    letter-spacing: .5rem;
    color: rgb(255,255,255);
    background-color: transparent;
    border: 1px solid rgb(255,255,255);
    border-radius: 1rem;

    transition: 1s;
    transform: rotateX(180deg);
    opacity: 0;

    cursor: pointer;
`;

const LetterBack = styled.span`
    position: absolute;

    width: 0;
    height: 0;

    border-top: 25px solid rgb(255,255,255);
    border-bottom: 25px solid transparent;
    border-right: 40px solid rgb(255,255,255);
    border-left: 40px solid rgb(255,255,255);

    transform: translate3d(0,0,0);
    transform-origin: 100% 0;
`;

const LetterBody = styled.span`
    position: absolute;

    width: 0;
    height: 0;

    border-top: 25px solid rgb(255,255,255);
    border-bottom: 25px solid transparent;
    border-right: 40px solid rgb(255,255,255);
    border-left: 40px solid rgb(255,255,255);

    transform: translate3d(0,0,-2px);
    transform-origin: 100% 0;
`;

const Letter = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    flex-direction: column-reverse;

    width: 100%;
    height: 100%;

    border-bottom-left-radius: .5rem;
    border-bottom-right-radius: .5rem;
    background-color: rgb(255,255,255);

    transform: translate3d(0,0,-1px);
    transform-style: preserve-3d;
`;

const LetterTop = styled.span`
    position: absolute;

    width: 0;
    height: 0;

    border-top: 25px solid transparent;
    border-bottom: 26px solid rgb(0,0,0);
    border-right: 40px solid transparent;
    border-left: 40px solid transparent;

    transition: 1s;
    transform: translate3d(0,0,-3px);
    transform-origin: 50% 100%;
`

const LetterBlock = styled.div`
    position: absolute;
    display: flex;

    left: 50%;
    top: 50%;

    width: 80px;
    height: 50px;
    margin: -25px 0 0 -40px;

    transform: rotateX(90deg) translate3d(0,40px,0);
    background-color: rgba(255,255,255, 1);
    transform-style: preserve-3d;
`;

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

    margin: -150px 0 0 -150px;

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