import React, { useEffect } from 'react';
import { useTimer } from 'react-timer-hook';

export function MyTimer({ expiryTimestamp, onExpire, indice}) {
    const {
        seconds,
        restart,
        pause
    } = useTimer({ expiryTimestamp, onExpire });
   
    const totalSeconds = 15;

    const getColor = () => {
        if (seconds > 10) {
            return 'gold';
        } else if (seconds <= 10 && seconds > 3) {
            return 'blue';
        } else {
            return 'red';
        }
    };

    const getProgress = () => {
        const progress = (seconds / totalSeconds) * 100;
        return progress;
    };

    useEffect(() => {
        restart(expiryTimestamp)
    }, [indice])

    return (
        <div className="relative rounded-3xl h-14 w-[400px] bg-primary-watergreen border border-black overflow-hidden mb-5">
            <div
                className="absolute top-0 left-0 h-full"
                style={{
                    width:`${getProgress()}%`,
                    backgroundColor: getColor(),
                    transition: 'width 1s linear, background-color 0.5s ease',
                }}
            />
            <p className="relative z-10 ml-[250px] mt-3 font-tit text-2xl">{seconds} segundos</p>
        </div>
    );
}
