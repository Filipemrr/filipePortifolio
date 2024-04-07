import React, {useEffect, useState} from "react";


export default function Footer(){
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, []);
    return (
        <div className="window" role="tabpanel" style={{position: 'relative'}}>
            <div className="footer" style={{position: 'relative', width: '100%'}}>
                <button style={{
                    position: 'absolute',
                    left: 0,
                    bottom: 0,
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <img src={'https://win98icons.alexmeub.com/icons/png/windows-1.png'}
                         alt="Profile Pic"
                         style={{width: '50%', height: '50%', display: 'block'}}/>
                    <p style={{paddingLeft: '4px'}}><strong>Start</strong></p>
                </button>
                <button style={{
                    position: 'absolute',
                    right: 0,
                    bottom: 0,
                    height: '100%',
                    backgroundColor: '#818181'
                }}>
                    {currentTime.toLocaleTimeString()}
                </button>
            </div>
        </div>
    )
}