import React, { useState } from "react";

const useUpload = (initialValue: any) => {
  const [files, setFiles] = useState(initialValue);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target as HTMLInputElement
    const filesArray = input.files && input.files

    setFiles(filesArray)
  };

  return {
    files,
    onChange: handleChange
  };
};

export default useUpload;
