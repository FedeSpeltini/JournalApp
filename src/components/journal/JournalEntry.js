import React from 'react'

export const JournalEntry = () => {
    return (
        <div className="journal__entry">
            <div 
                className="journal__entry-picture"
                style= {{ 
                    backgroundSize: 'cover',
                    backgroundImage: 'url(https://i.pinimg.com/originals/16/9a/96/169a9632a2469948dab58b636e47f471.jpg)'
             }}
            ></div>

            <div className="journal__entry-body">
                <p className="journal__entry-title">
                    Un nuevo día
                </p>
                <p className="journal__entry-content">
                    Yo solo se que te vengo a alentar
                </p>
            </div>

            <div className="journal__entry-date-box">
                <span>Monday</span>
                <h4>28</h4>
            </div>
        </div>
    )
}
