import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ReactComponent as CompareIcon } from './compaire.svg';
import { Button } from '../BasicComponents/Button';

const ComparisonSlider = ({ topImage, bottomImage }) => {
	const [ isResizing, setIsResizing ] = useState(false);
	const topImageRef = useRef();
	const handleRef = useRef();

	const setPositioning = useCallback((x) => {
		const { left, width } = topImageRef.current.getBoundingClientRect();
		const handleWidth = handleRef.current.offsetWidth;

		if (x >= left && x <= width + left - handleWidth) {
			handleRef.current.style.left = `${(x - left) / width * 100}%`;
			topImageRef.current.style.clipPath = `inset(0 ${100 - (x - left) / width * 100}% 0 0)`;
		}
	}, []);

	const handleResize = useCallback(
		(e) => {
			if (e.clientX) {
				setPositioning(e.clientX);
			} else if (e.touches[0] && e.touches[0].clientX) {
				setPositioning(e.touches[0].clientX);
			}
		},
		[ setPositioning ]
	);

	// Set initial positioning on component mount
	useEffect(
		() => {
			const { left, width } = topImageRef.current.getBoundingClientRect();
			const handleWidth = handleRef.current.offsetWidth;

			setPositioning(width / 2 + left - handleWidth / 2);
		},
		[ setPositioning ]
	);

	const handleResizeEnd = useCallback(
		() => {
			setIsResizing(false);

			window.removeEventListener('mousemove', handleResize);
			window.removeEventListener('touchmove', handleResize);
			window.removeEventListener('mouseup', handleResizeEnd);
			window.removeEventListener('touchend', handleResizeEnd);
		},
		[ handleResize ]
	);

	const onKeyDown = useCallback(
		(e) => {
			const { offsetLeft, offsetParent } = handleRef.current;

			if (e.code === 'ArrowLeft') {
				setPositioning(offsetLeft + offsetParent.offsetLeft - 10);
			}

			if (e.code === 'ArrowRight') {
				setPositioning(offsetLeft + offsetParent.offsetLeft + 10);
			}
		},
		[ setPositioning ]
	);

	// Add keydown event on mount
	useEffect(
		() => {
			window.addEventListener('keydown', onKeyDown);
		},
		[ onKeyDown ]
	);

	useEffect(
		() => {
			if (isResizing) {
				window.addEventListener('mousemove', handleResize);
				window.addEventListener('touchmove', handleResize);
				window.addEventListener('mouseup', handleResizeEnd);
				window.addEventListener('touchend', handleResizeEnd);
			}

			return () => {
				window.removeEventListener('mousemove', handleResize);
				window.addEventListener('touchmove', handleResize);
				window.removeEventListener('mouseup', handleResizeEnd);
				window.removeEventListener('touchend', handleResizeEnd);
				window.removeEventListener('keyup', onKeyDown);
			};
		},
		[ isResizing, handleResize, handleResizeEnd, onKeyDown ]
	);

	return (
		<React.Fragment>
			<div className="text-header text-light">
				<h2 style={{fontFamily:'Geforce bold'}}>Vedi il Ray-Tracing in Azione</h2>
				<p>
					Il ray-tracing è il Santo Graal della grafica per giochi, in grado di simulare il comportamento
					fisico della luce per generare rendering in tempo reale e in qualità cinematografica anche nei
					giochi della grafica più intensa.
				</p>
			</div>
			<div className="comparison-slider">
				<div
					ref={handleRef}
					className="handle"
					onMouseDown={() => setIsResizing(true)}
					onTouchStart={() => setIsResizing(true)}
				>
					<CompareIcon />
				</div>
				<div ref={topImageRef} className="comparison-item top">
					<img draggable="false" src={topImage.src} alt={topImage.alt} />
				</div>
				<div className="comparison-item">
					<img draggable="false" src={bottomImage.src} alt={bottomImage.alt} />
				</div>
			</div>
			<div class="text-content text-light">
				<div style={{fontFamily:'Geforce bold'}}>
					RTX <span id="span-grey">OFF</span>
				</div>
				<div style={{fontFamily:'Geforce bold'}}>
					RTX <span id="span-green">ON</span>
				</div>
			</div>
			<div class="text-split text-light">
				<h2 class="text-h2">Pronto per portare GeForce NOW su un altro livello?</h2>
				<Button buttonSize="BTN--large">Passa Al Piano Superiore</Button>
			</div>
		</React.Fragment>
	);
};

export default ComparisonSlider;
