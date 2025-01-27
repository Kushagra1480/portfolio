import React, {useState} from "react"

export const NoteSection = () => {
    const [notes, setNotes] = useState('')

    return (
        <div className="mb-6">
            <h2 className="text-xl font-bold mb-2">Notes</h2>
            <textarea 
                className="w-full p-2 border rounded"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Take notes here..."
            />
        </div>
    )
}