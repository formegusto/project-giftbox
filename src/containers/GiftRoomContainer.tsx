import React, { useCallback, useRef, useState } from 'react';
import GiftRoomComponent from '../components/GiftRoomComponent';

function GiftRoomContainer() {
    const [opened, setOpened] = useState<boolean>(false);
    const refBoxTop = useRef<HTMLDivElement>(null);
    const refBoxFront = useRef<HTMLDivElement>(null);
    const refBoxBack = useRef<HTMLDivElement>(null);
    const refBoxLeft = useRef<HTMLDivElement>(null);
    const refBoxRight = useRef<HTMLDivElement>(null);

    const openAll = useCallback(function(this: HTMLDivElement, e: TransitionEvent) {
        this.removeEventListener('transitionend', openAll);
        if(refBoxBack.current && refBoxLeft.current && refBoxRight.current) {
            refBoxLeft.current.style.transform = "rotateY(-180deg)";
            refBoxBack.current.style.transform = "rotateX(180deg)";
            refBoxRight.current.style.transform = "rotateY(180deg)";
        }
    }, []);

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
            refBoxFront={refBoxFront}
            refBoxTop={refBoxTop}
            refBoxBack={refBoxBack}
            refBoxLeft={refBoxLeft}
            refBoxRight={refBoxRight}
            />
    );
}

export default GiftRoomContainer;