import React, {useState} from "react"

export const EditableSection = ({title, initialContent}) => {
    const [content, setContent] = useState(initialContent)
    const [isEditing, setIsEditing] = useState(false)

    const handleEdit = () => {
        setIsEditing(true)
    }

    const handleSave = () => {
        setIsEditing(false)
    }

    return (
        <div>
            <h2>{title}</h2>
            {isEditing ? (
                <textarea
                    className="w-full p-2 border rounded"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />
                ) : (
                <p className="whitespace-pre-line">{content}</p>
                )}
            <button
                onClick={isEditing ? handleSave : handleEdit}
                className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
            >
                {isEditing ? 'Save' : 'Edit'}
            </button>
        </div>
    )
}