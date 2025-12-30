import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function ViewPaste() {
  let { id } = useParams();
  let [content, setContent] = useState("");
  let [error, setError] = useState("");

  useEffect(() => {
    let fetchPaste = async () => {
      try {
        let res = await axios.get(
          `https://pastebin-backend-lfme.onrender.com/api/pastes/${id}`
        );
        setContent(res.data.content);
      } catch {
        setError("Paste not found or expired");
      }
    };
    fetchPaste();
  }, [id]);

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h2 className="text-red-600 text-xl">{error}</h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="bg-white p-6 rounded shadow max-w-3xl mx-auto">
        <h2 className="text-xl font-bold mb-4">View Paste</h2>
        <pre className="whitespace-pre-wrap">{content}</pre>
      </div>
    </div>
  );
}

export default ViewPaste;
