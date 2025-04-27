import { useDropzone } from 'react-dropzone';
import { useCallback } from 'react';
import toast from 'react-hot-toast';

export default function FileUploader() {
  const onDrop = useCallback(acceptedFiles => {
    acceptedFiles.forEach(file => {
      console.log(file);
      toast.success(`Uploaded: ${file.name}`);
      // TODO: Upload to your peer-to-peer network
    });
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()} className="border-2 border-dashed p-10 rounded-xl text-center cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 transition">
      <input {...getInputProps()} />
      {isDragActive ? (
        <p className="text-lg">Drop the files here ...</p>
      ) : (
        <p className="text-lg">Drag and drop files here, or click to select files</p>
      )}
    </div>
  );
}
