import { useState } from "react";
import axios from "axios";

function CreatePaste() {
  let [content, setContent] = useState("");
  let [ttl, setTtl] = useState("");
  let [views, setViews] = useState("");
  let [url, setUrl] = useState("");

  let submitPaste = async () => {
    try {
      let res = await axios.post(
        "https://pastebin-backend-lfme.onrender.com/api/pastes",
        {
          content,
          ttl_seconds: ttl ? Number(ttl) : undefined,
          max_views: views ? Number(views) : undefined,
        }
      );
      setUrl(`${window.location.origin}/p/${res.data.id}`);
    } catch {
      alert("Error creating paste");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-xl">
        <h2 className="text-2xl font-bold mb-4 text-center">Pastebin Lite</h2>

        <textarea
          className="w-full border rounded p-3 mb-4"
          rows="8"
          placeholder="Enter your text here..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <div className="flex gap-4 mb-4">
          <input
            type="number"
            placeholder="TTL (seconds)"
            className="w-1/2 border rounded p-2"
            value={ttl}
            onChange={(e) => setTtl(e.target.value)}
          />

          <input
            type="number"
            placeholder="Max Views"
            className="w-1/2 border rounded p-2"
            value={views}
            onChange={(e) => setViews(e.target.value)}
          />
        </div>

        <button
          onClick={submitPaste}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Create Paste
        </button>

        {url && (
          <div className="mt-4 text-center">
            <p className="font-semibold">Share this link:</p>
            <a
              href={url}
              target="_blank"
              className="text-blue-600 underline break-all"
            >
              {url}
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default CreatePaste;
