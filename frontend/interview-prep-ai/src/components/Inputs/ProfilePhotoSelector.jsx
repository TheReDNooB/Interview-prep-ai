import React, { useRef, useState } from "react";
import { LuUser, LuUpload, LuTrash } from "react-icons/lu";

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
  
  return <div>ProfilePhotoSelector</div>;
};

export default ProfilePhotoSelector;