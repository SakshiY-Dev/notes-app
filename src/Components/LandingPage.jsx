import { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { MdDelete } from "react-icons/md";

const LandingPage = () => {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [color, setColor] = useState("#ffffff");

  const colors = [
    "#F2EFE7",
    "#fef3c7",
    "#dcfce7",
    "#dbeafe",
    "#fae8ff",
    "#ffe4e6",
  ];

  const addNote = () => {
    if (title.trim() === "" || content.trim() === "") {
      alert("Please fill in both title and content!");
      return;
    }

    const newNote = {
      id: Date.now(),
      title,
      content,
      color,
    };

    setNotes([...notes, newNote]);
    setTitle("");
    setContent("");
    setColor("#ffffff");
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-4">
      {/* Page Header */}
      <h1 className="text-5xl font-bold mx-10 my-10 text-blue-500">My Notes</h1>

      {/* Input Section */}
      <div className="flex flex-col items-center bg-white rounded-lg shadow-md p-6 w-full max-w-md">
        {/* Input for Note Title */}
        <input
          type="text"
          placeholder="Note Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border-4 border-gray-200 rounded-lg w-full h-10 mb-4 focus:border-blue-700 focus:outline-none text-lg px-3"
        />

        {/* Input for Note Content */}
        <textarea
          placeholder="Write your note here..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="border-4 border-gray-200 rounded-lg w-full h-24 mb-4 focus:border-blue-700 focus:outline-none text-lg px-3"
        />

        {/* Color Palette */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Choose Note Color
          </label>
          <div className="flex gap-2">
            {colors.map((c) => (
              <button
                key={c}
                onClick={() => setColor(c)}
                className={`w-8 h-8 rounded-full border-2 transition-transform ${
                  color === c ? "border-blue-500 scale-110" : "border-gray-300"
                }`}
                style={{ backgroundColor: c }}
                aria-label={`Select ${c} color`}
              />
            ))}
          </div>
        </div>

        {/* Add Note Button */}
        <button
          onClick={addNote}
          className="flex items-center gap-2 border border-transparent rounded-lg bg-blue-400 text-white py-2 px-4 hover:bg-blue-500"
        >
          <IoMdAdd className="text-2xl" />
          Add Note
        </button>
      </div>

      {/* Notes Display */}
      <div className="grid gap-4 md:grid-cols-2 w-full max-w-4xl mt-8">
        {notes.map((note) => (
          <div
            key={note.id}
            className="rounded-lg shadow-md p-6 transition-all duration-200"
            style={{ backgroundColor: note.color }}
          >
            <div className="flex justify-between items-start mb-2">
              <h2 className="text-xl font-semibold text-gray-800">
                {note.title}
              </h2>
              <button
                onClick={() => deleteNote(note.id)}
                className="text-red-500 hover:text-red-700"
              >
                <MdDelete size={20} />
              </button>
            </div>
            <p
              className="text-gray-600 mb-2 "
              style={{ whiteSpace: "pre-wrap" }}
            >
              {note.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LandingPage;
