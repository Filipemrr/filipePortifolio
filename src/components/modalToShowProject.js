import React, {useEffect, useRef, useState} from "react";
import {Grid} from "@mui/material";
import NavBar from "./Navbar";

export default function Modal({ isOpen, onClose, children, filePath }) {
    const [content, setContent] = useState('')
    const [isDragging, setIsDragging] = useState(false);
    const [position, setPosition] = useState({ x: 150, y: 150 });
    const modalRef = useRef(null);
    const title = children
    const handleMouseDown = (e) => {
        setIsDragging(true);
        modalRef.current.startX = e.clientX - modalRef.current.getBoundingClientRect().left;
        modalRef.current.startY = e.clientY - modalRef.current.getBoundingClientRect().top;
    };

    const handleMouseMove = (e) => {
        if (isDragging) {
            const x = e.clientX - modalRef.current.startX;
            const y = e.clientY - modalRef.current.startY;
            setPosition({ x, y });
        }
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    useEffect(() => {
        if (isOpen && filePath) {
            fetch(`/Docs-en/${filePath}.html`)
                .then(response => response.text())
                .then(html => setContent(html))
                .catch(error => console.error('Failed to load article:', error));
        }
    }, [isOpen, filePath]);

    if (!isOpen) return null;

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000
        }} onMouseMove={handleMouseMove} onMouseUp={handleMouseUp}>
            <Grid item md={7} sx={{
                width: '100%',
                height: '75vh',
                overflow: 'hidden',
                position: 'absolute',
                top: position.y + 'px',
                left: position.x + 'px',
                zIndex: 1001
            }} ref={modalRef} onMouseDown={handleMouseDown} className="window">
                <Grid item md={12} className="title-bar" sx={{
                    position: 'sticky',
                    top: 0,
                    zIndex: 10
                }}>
                    <div className="title-bar-text">Filipe Raposo - Article</div>
                    <div className="title-bar-controls">
                        <button aria-label="Minimize" onClick={onClose}></button>
                        <button aria-label="Close" onClick={onClose}></button>
                    </div>
                </Grid>
                <Grid container md={12} display={'flex'} alignItems={'center'} justifyContent={'center'} sx={{ overflow: 'auto', height: 'calc(100% - 32px)' }}>
                    <Grid item md={10} sx={{ padding: '25px' }}>
                        <div className="window-body" dangerouslySetInnerHTML={{ __html: content }}></div>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );

}
