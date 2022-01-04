// ANCHOR: React
import * as React from 'react';

// ANCHOR: Upload Data
import { uploadData } from '@utilities/index';

// ANCHOR: Example Upload Page
function ExampleUploadPage() {
  const uploadPhoto = (e) => {
    const file = e.target.files[0];
    uploadData(file);
  };

  return (
    <div>
      <p>Upload a .png or .jpg image (max 1MB).</p>
      <input
        onChange={uploadPhoto}
        type="file"
        accept="image/png, image/jpeg"
      />
    </div>
  );
};

export default ExampleUploadPage;
