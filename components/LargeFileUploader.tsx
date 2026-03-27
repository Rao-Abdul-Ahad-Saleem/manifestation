"use client";

import React, {useState} from "react";

export default function LargeFileUploader() {

    const [file, setFile] = useState<File | null>(null);
    const [progress, setProgress] = useState(0);
    const [uploading, setUploading] = useState(false);
    const [status, setStatus] = useState("");

    const startUpload = async () => {
        if (!file) return;

        setUploading(true);
        setProgress(0);
        setStatus("Generating secure upload link...");

        try {
            // 1. Get the Presigned URL from your Next.js API
            console.log("Requesting presigned URL for:", file.name, file.type);
            const res = await fetch("/api/upload", {
                method: "POST",
                body : JSON.stringify({fileName : file.name, fileType: file.type}),
                headers: {"Content-Type": "application/json"}
            })

            // READ ONCE HERE
            const data = await res.json();

            console.log(`Presigned URL response status: ${res.status}`);
            
            console.log("Presigned URL response data:", data);

            const {url, error} = data;
            if (error) throw new Error(error);

            // 2. Upload the file directly to R2 using the Presigned URL
            const xhr = new XMLHttpRequest();

            xhr.upload.onprogress = (event) => {

                if (event.lengthComputable) {
                    const percentComplete = Math.round((event.loaded / event.total) * 100);
                    setProgress(percentComplete);
                    setStatus(`Uploading... ${percentComplete}%`);
                }
            };

            // When Upload Finished
            xhr.onload = () => {
                if (xhr.status === 200) {
                    setStatus("Upload successful!");
                    setUploading(false);
                    // Optional: Trigger Supabase save here
                }else {
                    setStatus("Upload failed.");
                    setUploading(false);
                }
            };

            xhr.onerror = () => {
                setStatus("Network error occurred.");
                setUploading(false);
            };

            xhr.open("PUT", url);
            // Critical: Set the Content-Type to match what was signed in the backend
            xhr.setRequestHeader("Content-Type", file.type);
            xhr.send(file);


        }catch (err) {
            console.error(err);
            setStatus("Error starting upload.");
            setUploading(false);
            
        }
    };

    return (
        <div className="p-8 max-w-md mx-auto border rounded-xl shadow-sm bg-white">
            <h2 className="text-xl font-bold mb-4">Upload Project File (Max 5GB)</h2>
            
            <input
                type="file"
                onChange={(e) => setFile(e.target.files?.[0] || null)}
                disabled={uploading}
                className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 mb-6"
            />

            {uploading && (
                <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
                <div 
                    className="bg-blue-600 h-2.5 rounded-full transition-all duration-300" 
                    style={{ width: `${progress}%` }}
                ></div>
                </div>
            )}

            <p className="text-sm text-gray-600 mb-4">{status}</p>

            <button
                onClick={startUpload}
                disabled={!file || uploading}
                className={`w-full py-2 px-4 rounded-lg font-bold text-white transition-colors ${
                !file || uploading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
                }`}
            >
                {uploading ? "Uploading..." : "Start 250MB Upload"}
            </button>
        </div>

    )

}