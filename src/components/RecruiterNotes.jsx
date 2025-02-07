
import 'react-quill/dist/quill.snow.css'
import React, { useState } from 'react';
import ReactQuill from 'react-quill';

const RecruiterNotes = () => {
  const [notes, setNotes] = useState('');
  const [lastEdit, setLastEdit] = useState(null);

  const handleSave = () => {
    setLastEdit(new Date().toISOString());
    alert('Notes are not saved. This is just for your convenience.');
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-slate-900/90 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MCIgaGVpZ2h0PSI0My4zIiB2aWV3Qm94PSIwIDAgNTAgNDMuMyI+PHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMWEzNjVkIiBzdHJva2Utd2lkdGg9IjAuNSIgZD0iTTI1IDBMNTAgMTQuNHYyOC44TDI1IDQzLjNMMCwyOC44VjE0LjR6Ii8+PC9zdmc+')] opacity-5" />
      
      {/* Status Bar */}
      <div className="flex justify-between items-center mb-4 text-xs font-mono">
        <div className="text-cyan-400">RECRUITER_TERMINAL::ACTIVE</div>
        <div className="text-slate-500">
          {lastEdit ? `LAST_EDIT::${lastEdit}` : 'NO_PREVIOUS_EDITS'}
        </div>
      </div>

      {/* Header */}
      <div className="relative mb-6">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-8 bg-cyan-500" />
        <h1 className="text-xl font-mono pl-4 text-slate-200">
          <span className="text-xs text-cyan-400 block">ACCESS_POINT</span>
          RECRUITER_NOTES
        </h1>
        <div className="mt-2 h-px bg-gradient-to-r from-cyan-500/50 via-slate-700 to-transparent" />
      </div>

      {/* Description */}
      <div className="mb-6 font-mono text-sm">
        <p className="text-slate-300 mb-2">
          Terminal access granted for recruitment evaluation notes.
        </p>
        <div className="flex items-center gap-2 text-cyan-400 text-xs">
          <span className="w-1 h-1 bg-cyan-400" />
          DATA_PERSISTENCE::DISABLED
        </div>
      </div>

      {/* Editor */}
      <div className="relative mb-6">
        <div className="absolute -left-px top-0 w-px h-full bg-gradient-to-b from-cyan-500/50 to-transparent" />
        <ReactQuill
          value={notes}
          onChange={setNotes}
          theme="bubble"
          placeholder="Initialize recruitment assessment..."
          className="bg-slate-800/50 rounded-none border border-blue-900/50 min-h-[200px] text-slate-300 font-mono"
        />
      </div>

      {/* Actions */}
      <div className="flex gap-4">
        <button
          onClick={handleSave}
          className="px-6 py-2 bg-slate-800 border border-blue-900/50 text-cyan-400 text-sm font-mono hover:border-cyan-500/50 hover:text-cyan-300 transition-colors flex items-center gap-2 group"
        >
          <span className="w-2 h-2 bg-cyan-400 group-hover:bg-cyan-300" />
          SAVE_NOTES
        </button>
        <button
          onClick={() => setNotes('')}
          className="px-6 py-2 bg-slate-800/50 border border-slate-700/50 text-slate-400 text-sm font-mono hover:border-slate-600/50 transition-colors flex items-center gap-2 group"
        >
          <span className="w-2 h-2 bg-slate-400" />
          CLEAR_BUFFER
        </button>
      </div>

      {/* Custom Quill Styles */}
      <style>{`
        .ql-editor {
          padding: 1rem;
          font-family: ui-monospace, monospace;
        }
        .ql-editor.ql-blank::before {
          color: #94a3b8;
          font-style: normal;
          font-family: ui-monospace, monospace;
        }
      `}</style>
    </div>
  );
};

export default RecruiterNotes;
