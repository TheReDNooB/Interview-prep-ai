import React, { useRef, useState } from "react";
import { LuUser, LuUpload, LuTrash } from "react-icons/lu";
import Input from '../../components/Inputs/Input'

const ProfilePhotoSelector = ({ image, setImage, preview, setPreview }) => {
  
  const inputRef = useRef(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      // update the image state
      setImage(file);

      // create a preview URL
      const preview = URL.createObjectURL(file);
      setPreviewUrl(preview)
    }
    setPreviewUrl(preview);
  };

  const handleRemoveImage = () => {
    setImage(null);
    setPreviewUrl(null);

    if (setPreview) {
      setPreview(null);
    }
  };

  const onChooseImage = () => {
    inputRef.current.click();
  }
  
  return <div className="">
    <Input
      type="file"
      accept="image/*"
      ref={inputRef}
      onChange={handleImageChange}
      className=""
    />

    {!image ? (
      <div className="">
        <LuUser className="" />
        <button
        type="button"
        className=""
        onClick={onChooseImage}
        >
          <LuUpload/>
        </button>
      </div>
    ) : (
      <div className="">
        <img
        src={preview || previewUrl}
        alt="profile photo"
        className=""
        />
        <button
        type="button"
        className=""
        onClick={handleRemoveImage}
        >
          <LuTrash/>
        </button>
      </div>
    )}
  </div>
};

export default ProfilePhotoSelector;