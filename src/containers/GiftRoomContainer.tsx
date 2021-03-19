import React, { useCallback, useRef, useState } from 'react';
import GiftRoomComponent from '../components/GiftRoomComponent';

function GiftRoomContainer() {
    const [opened, setOpened] = useState<boolean>(false);
    const refBox = useRef<HTMLDivElement>(null);
    const refBoxTop = useRef<HTMLDivElement>(null);
    const refBoxFront = useRef<HTMLDivElement>(null);
    const refBoxBack = useRef<HTMLDivElement>(null);
    const refBoxLeft = useRef<HTMLDivElement>(null);
    const refBoxRight = useRef<HTMLDivElement>(null);
    const refLetterTop = useRef<HTMLSpanElement>(null);
    const refLetter = useRef<HTMLDivElement>(null);
    const refLetterBottom = useRef<HTMLDivElement>(null);
    const refCloseButton = useRef<HTMLButtonElement>(null);

    const closeGiftBoxTop = useCallback(function(this: HTMLDivElement, e: TransitionEvent) {
        this.removeEventListener('transitionend', closeGiftBoxTop);
        if(refBoxTop.current) {
            refBoxTop.current.style.transform = "";
            setOpened(false);
        }
    }, []);

    const closeGiftBoxFront = useCallback(function(this: HTMLDivElement, e: TransitionEvent) {
        this.removeEventListener('transitionend', closeGiftBoxFront);
        if(refBoxFront.current) {
            if(refBoxTop.current) {
                refBoxTop.current.style.transform = "rotate3d(1, 0, 0, -270deg)";
                refBoxFront.current.style.transform = "";
                refBoxFront.current.addEventListener('transitionend', closeGiftBoxTop);
            }
        }
    }, [closeGiftBoxTop]);

    const closeGiftBox = useCallback(function(this: HTMLSpanElement, e: TransitionEvent) {
        this.removeEventListener('transitionend', closeGiftBox);
        if(refBox.current) {
            refBox.current.style.transition = "1s";
            refBox.current.style.transform = "";
            if(refBoxBack.current && refBoxLeft.current && refBoxRight.current) {
                refBoxLeft.current.style.transform = "";
                refBoxBack.current.style.transform = "";
                refBoxRight.current.style.transform = "";
                refBoxRight.current.addEventListener('transitionend', closeGiftBoxFront);
            }
        }
    }, [closeGiftBoxFront]);

    const closeLetterTop = useCallback(function(this: HTMLDivElement, e: TransitionEvent) {
        this.removeEventListener('transitionend', closeLetterTop);
        if(refLetterTop.current) {
            refLetterTop.current.style.transform = "";
            refLetterTop.current.addEventListener('transitionend', closeGiftBox);
        }
    }, [closeGiftBox]);

    const putInLetter = useCallback(function(this: HTMLDivElement, e: TransitionEvent) {
        this.removeEventListener('transitionend', putInLetter);
        if(refLetter.current) {
            refLetter.current.style.transform = "";
            refLetter.current.addEventListener('transitionend', closeLetterTop);
        }
    }, [closeLetterTop]);

    const hideLetter = useCallback(function(this: HTMLDivElement, e: TransitionEvent) {
        this.removeEventListener('transitionend', hideLetter);
        if(refLetter.current) {
            refLetter.current.style.width = "";
            refLetter.current.style.height = "";
            refLetter.current.addEventListener('transitionend', putInLetter);
        }
    }, [putInLetter]);

    const closeBox = useCallback((e: React.MouseEvent) => {
        if(refCloseButton.current) {
            refCloseButton.current.style.opacity = "";
            refCloseButton.current.style.transform = "";

            if(refLetterBottom.current) {
                refLetterBottom.current.style.opacity = "";
                refLetterBottom.current.style.transform = "";
                refLetterBottom.current.addEventListener('transitionend', hideLetter);
            }
        }
    }, [hideLetter]);

    const showCloseButton = useCallback(function(this: HTMLDivElement, e: TransitionEvent) {
        this.removeEventListener('transitionend', showCloseButton);
        if(refCloseButton.current) {
            refCloseButton.current.style.opacity = "1";
            refCloseButton.current.style.transform = "rotateX(180deg) translateY(-90px)";
            if(refLetterBottom.current) {
                refLetterBottom.current.style.opacity = "1";
                refLetterBottom.current.style.transform = "rotateX(-180deg)";
            }
        }
    }, []);

    const scaleUpLetter = useCallback(function(this: HTMLDivElement, e: TransitionEvent) {
        this.removeEventListener('transitionend',scaleUpLetter);
        if(refLetter.current) {
            if(refBox.current) {
                refBox.current.style.transition = "1s";
                refBox.current.style.transform = "rotate3d(0,0,0,45deg)";
                refLetter.current.style.transform = "translate3d(0, 300px, -100px)";
                refLetter.current.style.width = "640px";
                refLetter.current.style.height = "200px";
                refLetter.current.addEventListener('transitionend', showCloseButton);
            }
        }
    }, [showCloseButton]);

    const showLetter = useCallback(function(this: HTMLSpanElement, e: TransitionEvent) {
        this.removeEventListener('transitionend', showLetter);
        if(refLetter.current) {
            refLetter.current.style.transform = "translateY(300px)";
            refLetter.current.addEventListener('transitionend', scaleUpLetter);
        }
    }, [scaleUpLetter]);

    const openLetter = useCallback(function(this: HTMLDivElement, e: TransitionEvent) {
        this.removeEventListener('transitionend', openLetter);
        if(refLetterTop.current) {
            refLetterTop.current.style.transform = "rotateX(-180deg) translate3d(0,0,0px)";
            refLetterTop.current.addEventListener('transitionend', showLetter);
        }
    }, [showLetter]);

    const openAll = useCallback(function(this: HTMLDivElement, e: TransitionEvent) {
        this.removeEventListener('transitionend', openAll);
        if(refBoxBack.current && refBoxLeft.current && refBoxRight.current) {
            refBoxLeft.current.style.transform = "rotateY(-180deg)";
            refBoxBack.current.style.transform = "rotateX(180deg)";
            refBoxRight.current.style.transform = "rotateY(180deg)";
            refBoxRight.current.addEventListener('transitionend', openLetter);
        }
    }, [openLetter]);

    const openTop = useCallback(function(this: HTMLDivElement, e: TransitionEvent) {
        this.removeEventListener('transitionend', openTop);
        if(refBoxFront.current) {
            if(refBoxTop.current) {
                refBoxTop.current.style.transform = "rotate3d(1, 0, 0, -180deg)";
                refBoxFront.current.style.transform = "rotate3d(1, 0, 0, -90deg)";
                this.addEventListener('transitionend', openAll);
            }
        }
    }, [openAll]);

    const changeOpen = useCallback((e: React.MouseEvent) => {
        if(refBoxTop.current && !opened) {
            setOpened(true);
            refBoxTop.current.style.transform = "rotate3d(1, 0, 0, -270deg)";
            refBoxTop.current.addEventListener('transitionend', openTop);
        }
    }, [openTop, opened]);

    return (
        <GiftRoomComponent 
            changeOpen={changeOpen}
            closeBox={closeBox}

            refBox={refBox}
            refBoxFront={refBoxFront}
            refBoxTop={refBoxTop}
            refBoxBack={refBoxBack}
            refBoxLeft={refBoxLeft}
            refBoxRight={refBoxRight}
            refLetterTop={refLetterTop}
            refLetter={refLetter}
            refLetterBottom={refLetterBottom}
            refCloseButton={refCloseButton}
            />
    );
}

export default GiftRoomContainer;