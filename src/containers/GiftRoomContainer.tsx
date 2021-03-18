import React, { useCallback, useRef } from 'react';
import GiftRoomComponent from '../components/GiftRoomComponent';

function GiftRoomContainer() {
    const refBoxTop = useRef<HTMLDivElement>(null);
    const refBoxFront = useRef<HTMLDivElement>(null);

    const openTop = useCallback(function(this: HTMLDivElement, e: TransitionEvent) {
        this.removeEventListener('transitionend', openTop);
        if(refBoxFront.current) {
            if(refBoxTop.current) {
                refBoxTop.current.style.transform = "rotate3d(1, 0, 0, -180deg)";
                refBoxFront.current.style.transform = "rotate3d(1, 0, 0, -90deg)";
            }
        }
    }, []);

    const changeOpen = useCallback((e: React.MouseEvent) => {
        if(refBoxTop.current) {
            refBoxTop.current.style.transform = "rotate3d(1, 0, 0, -270deg)";
            refBoxTop.current.addEventListener('transitionend', openTop);
        }
    }, [openTop]);

    return (
        <GiftRoomComponent 
            changeOpen={changeOpen}
            refBoxFront={refBoxFront}
            refBoxTop={refBoxTop}
            />
    );
}

export default GiftRoomContainer;