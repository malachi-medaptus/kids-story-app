import React, { useRef, useEffect, useState } from 'react';
import { fabric } from 'fabric';

const DrawingCanvas = () => {
    const canvasRef = useRef(null);
    const [canvas, setCanvas] = useState(null);
    const [color, setColor] = useState('#000000');
    const [brushSize, setBrushSize] = useState(5);

    useEffect(() => {
        const canvasInstance = new fabric.Canvas(canvasRef.current);
        setCanvas(canvasInstance);
        return () => {
            canvasInstance.dispose();
        };
    }, []);

    const handleMouseDown = () => {
        if (canvas) {
            const circle = new fabric.Circle({
                radius: brushSize,
                fill: color,
                left: canvas.mouseX,
                top: canvas.mouseY,
                selectable: false
            });
            canvas.add(circle);
        }
    };

    const handleColorChange = (e) => {
        setColor(e.target.value);
    };

    const handleBrushSizeChange = (e) => {
        setBrushSize(e.target.value);
    };

    const clearCanvas = () => {
        canvas.clear();
    };

    const submitDrawing = () => {
        const dataURL = canvas.toDataURL();
        console.log(dataURL);
    };

    return (
        <div>
            <input type="color" value={color} onChange={handleColorChange} />
            <input type="range" min="1" max="50" value={brushSize} onChange={handleBrushSizeChange} />
            <button onClick={clearCanvas}>Clear</button>
            <button onClick={submitDrawing}>Submit</button>
            <canvas ref={canvasRef} onMouseDown={handleMouseDown} width={800} height={600} style={{ border: '1px solid #000' }} />
        </div>
    );
};

export default DrawingCanvas;
