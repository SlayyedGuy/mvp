const transfers = [
    { file: "movie.mp4", status: "Uploading", progress: "75%" },
    { file: "document.pdf", status: "Downloading", progress: "45%" },
  ];
  
  export default function UploadDownloadQueue() {
    return (
      <div className="p-4 bg-white rounded-2xl shadow-md">
        <h2 className="text-xl font-bold mb-2">Upload / Download Queue</h2>
        <ul>
          {transfers.map((t, idx) => (
            <li key={idx} className="border-b py-2 flex justify-between">
              <span>{t.file}</span>
              <span>{t.status} ({t.progress})</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  import toast from 'react-hot-toast';

  toast.success('Upload Successful!');
  toast.error('Failed to upload.');
  