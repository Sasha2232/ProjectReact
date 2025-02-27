import React, {useEffect, useState, useRef} from 'react'
import './AllProjects.css';

const images = [
    '/images/react.png',
    '/images/react.png',
    '/images/html.png',
    '/images/js.png',
    '/images/vscode.png',
    '/images/react.png',
    '/images/pyth.png',
    '/images/react.png',
    '/images/vscode.png',
];


const Card = ({ direction }) => {
    const cardRef = useRef(null)
    const [isHovered, setIsHovered] = useState(false)
    const requestIdRef = useRef(null)
    const startPositionRef = useRef(0)
    const [selectedImage, setSelectedImage] = useState(null)

    const closeModal = () => {
        setSelectedImage(null)
    }

    useEffect(() => {
        const card = cardRef.current;

        const animate = () => {
            if (!isHovered) {
                startPositionRef.current += direction === 'left' ? -0.9 : 0.9;
                if (startPositionRef.current >= card.scrollWidth / 2) {
                    startPositionRef.current = 0;
                } else if (startPositionRef.current <= 0) {
                    startPositionRef.current = card.scrollWidth / 2
                }
                card.scrollLeft = startPositionRef.current
            }
            requestIdRef.current = requestAnimationFrame(animate);
        }
        requestIdRef.current = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(requestIdRef.current)
    }, [direction, isHovered])

    return (
        <div className='card-conteiner' ref={cardRef} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            <div className='card-content'>
                {images.map((image, index) => (
                    <a key={index} href="https://github.com/Sasha2232/Projects" target="_blank" rel="noopener noreferrer">
                        <img
                            src= '/images/png1.png'
                            className='card-image'
                            onClick={() => setSelectedImage(image)}
                            alt="React project" 
                        />
                    </a>
                ))}
                {images.map((image, index) => (
                    <a key={index} href="https://github.com/Sasha2232/Projects" target="_blank" rel="noopener noreferrer">
                        <img
                            src={image}
                            className='card-image'
                            onClick={() => setSelectedImage(image)}
                            alt="React project" 
                        />
                    </a>
                    
                ) )}
                
            </div>

            {selectedImage && (
                <div className='modal-window-image' onClick={closeModal}>
                    <div style={{ display: "flex" }} onClick={(e) => e.stopPropagation()}>
                        <img src={selectedImage} alt='' className='modal-image' />
                        <p>
                            <button onClick={closeModal} className='modal-image-close-button'></button>
                        </p>
                    </div>
                </div>
            )}
        </div>
    )
}


export default Card;
