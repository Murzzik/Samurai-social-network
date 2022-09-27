import React, { useState } from 'react';
import s from '../Profile.module.css';

type ProfileStatusType = {
    status: string
}

export const ProfileStatus: React.FC<ProfileStatusType> = ({status}) => {
    const [editMode, setEditMode] = useState<boolean>(false)

    const activateEditMode = () => {
        setEditMode(true)
    };

    const deactivateEditMode = () => {
        setEditMode(false)
    }

    return (
        <div>
            <div>
                {
                    !editMode && <span onDoubleClick={activateEditMode}>{'Change your status'}</span>
                }
            </div>
            <div>
                {
                    editMode && <input autoFocus type="text" value={status} onBlur={deactivateEditMode}/>
                }
            </div>
        </div>
    ); 
};