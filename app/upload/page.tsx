import React, { useState } from 'react';

const ImageUpload = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setSelectedImage(URL.createObjectURL(file));
        }
    };

    const handleUpload = () => {
        // handle upload action here, e.g., send to a server
        console.log('Image submitted:', selectedImage);
    };

    return (
        <div>
            <h1>Upload your Picture</h1>
            <input type="file" onChange={handleImageChange} accept="image/*" />
            {selectedImage && <img src={selectedImage} alt="Selected" style={{ width: '200px', marginTop: '10px' }} />} 
            <button onClick={handleUpload} style={{ marginTop: '10px' }}>Upload Image</button>
        </div>
    );
};

export default ImageUpload;