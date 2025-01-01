import React, { useState, ChangeEvent } from 'react';

const ImageUploader: React.FC = () => {
  const [image, setImage] = useState<string | null>(null);

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <label htmlFor="image-upload" className="cursor-pointer">
        <div className="w-28 h-28 rounded-full border-2 border-gray-300 flex items-center justify-center overflow-hidden bg-gray-100">
          {image ? (
            <img src={image} alt="Profile Preview" className="w-full h-full object-cover" />
          ) : (
            <span className="text-gray-500 text-sm">Upload Image</span>
          )}
        </div>
        <input
          id="image-upload"
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="hidden"
        />
      </label>
    </div>
  );
};

export default ImageUploader;
