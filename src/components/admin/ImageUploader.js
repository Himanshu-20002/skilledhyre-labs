"use client";

import { useState } from "react";

export default function ImageUploader({
  label = "Card Image",
  value,
  onChange,
}) {
  const [mode, setMode] = useState("url"); // 'url' | 'upload'
  const [isUploading, setIsUploading] = useState(false);
  const [showPreview, setShowPreview] = useState(false);

  // Use the API key from environment variables
  const IMGBB_API_KEY = process.env.NEXT_PUBLIC_IMGBB_API_KEY;

  // Client-side image compression to convert heavy multi-MB PNGs/JPEGs into ultra-lean WebP (< 200 KB)
  const compressImage = (file, maxWidth = 1280, maxHeight = 720, quality = 0.82) => {
    return new Promise((resolve) => {
      if (!file.type.startsWith("image/") || file.type === "image/svg+xml") {
        return resolve(file);
      }

      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (event) => {
        const img = new window.Image();
        img.src = event.target.result;
        img.onload = () => {
          let { width, height } = img;
          if (width > maxWidth || height > maxHeight) {
            const ratio = Math.min(maxWidth / width, maxHeight / height);
            width = Math.round(width * ratio);
            height = Math.round(height * ratio);
          }

          const canvas = document.createElement("canvas");
          canvas.width = width;
          canvas.height = height;
          const ctx = canvas.getContext("2d");
          ctx.drawImage(img, 0, 0, width, height);

          canvas.toBlob(
            (blob) => {
              if (!blob || blob.size >= file.size) {
                return resolve(file);
              }
              const compressedFile = new File([blob], file.name.replace(/\.[^/.]+$/, ".webp"), {
                type: "image/webp",
                lastModified: Date.now(),
              });
              resolve(compressedFile);
            },
            "image/webp",
            quality
          );
        };
        img.onerror = () => resolve(file);
      };
      reader.onerror = () => resolve(file);
    });
  };

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (!IMGBB_API_KEY) {
      alert("ImgBB API Key is missing!");
      return;
    }

    setIsUploading(true);

    try {
      const fileToUpload = await compressImage(file);
      const formData = new FormData();
      formData.append("image", fileToUpload);

      const res = await fetch(
        `https://api.imgbb.com/1/upload?key=${IMGBB_API_KEY}`,
        {
          method: "POST",
          body: formData,
        },
      );

      const data = await res.json();

      if (data.success) {
        onChange(data.data.url);
      } else {
        console.error("ImgBB Upload Error:", data);
        alert("Failed to upload image. Please try again.");
      }
    } catch (error) {
      console.error("Error uploading image:", error);
      alert("An error occurred while uploading. Please check your connection.");
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="space-y-3">
      {/* <label className="block text-sm font-medium text-gray-700">{label}</label> */}

      {/* Toggle Mode */}
      <div className="flex bg-gray-100 p-1 rounded-lg w-fit">
        <button
          type="button"
          onClick={() => setMode("url")}
          className={`px-4 py-1.5 text-sm font-medium rounded-md transition-all ${
            mode === "url"
              ? "bg-white text-gray-900 shadow-sm"
              : "text-gray-500 hover:text-gray-900"
          }`}
        >
          Image URL
        </button>
        <button
          type="button"
          onClick={() => setMode("upload")}
          className={`px-4 py-1.5 text-sm font-medium rounded-md transition-all ${
            mode === "upload"
              ? "bg-white text-gray-900 shadow-sm"
              : "text-gray-500 hover:text-gray-900"
          }`}
        >
          Upload Image
        </button>
      </div>

      {/* Input Area */}
      <div className="relative">
        {mode === "url" ? (
          <input
            type="url"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder="https://example.com/image.jpg"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-black"
          />
        ) : (
          <div className="relative">
            <input
              type="file"
              accept="image/*"
              onChange={handleFileUpload}
              disabled={isUploading}
              className="block w-full text-sm text-gray-500
                file:mr-4 file:py-2 file:px-4
                file:rounded-md file:border-0
                file:text-sm file:font-semibold
                file:bg-blue-50 file:text-blue-700
                hover:file:bg-blue-100
                disabled:opacity-50 disabled:cursor-not-allowed
              "
            />
            {isUploading && (
              <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                <svg
                  className="animate-spin h-5 w-5 text-blue-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Preview */}
      {value && (
        <div className="mt-2">
          <div className="flex items-center gap-3">
            <div className="relative h-12 w-12 rounded overflow-hidden border border-gray-200">
              <img
                src={value}
                alt="Preview"
                className="h-full w-full object-cover"
                onError={(e) => (e.target.style.display = "none")}
              />
            </div>
            <button
              type="button"
              onClick={() => setShowPreview(true)}
              className="text-sm text-blue-600 hover:text-blue-800 font-medium"
            >
              View Full Image
            </button>
          </div>
        </div>
      )}

      {/* Full Image Modal */}
      {showPreview && value && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={() => setShowPreview(false)}
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full bg-transparent flex justify-center">
            <img
              src={value}
              alt="Full View"
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking image
            />
            <button
              type="button"
              onClick={() => setShowPreview(false)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 p-2"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
