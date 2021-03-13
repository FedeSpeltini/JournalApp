import React from 'react'
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {
    return (
        <div className="notes__main-content">
            <NotesAppBar/>

            <div className="notes__content">
                <input 
                    autoComplete="off"
                    className="notes__title-input"
                    placeholder="Some awesome title"
                    type="text"
                />
                <textarea
                    className="notes__textarea"
                    placeholder="What happened today"
                ></textarea>

 
                
            </div>
        </div>
    )
}
