import React, { useState } from 'react'
import './styles/modal.css'

type User = {
    id?: number;
    first_name?: string;
    last_name?: string;
    email?: string;
    address?: string;
    status?: boolean;
};

export interface ModalInterface {
    row: User;
}

const Modal: React.FC<ModalInterface> = ({ row }) => {

    const [isOpen, setIsOpen] = useState(false);
    const [modalStyle, setModalStyle] = useState('none');

    const toggleModal = () => {
        setIsOpen(!isOpen);
        isOpen ? setModalStyle('none') : setModalStyle('block');        
    }

    return <div>
                <button onClick={toggleModal}>Details</button>
                {isOpen && (
                    <div className="modal" style={{'display':modalStyle}}>
                        <div className="modal-content">
                            <span className="close-btn" onClick={toggleModal}>&times;</span>
                            <h2>{row.first_name}</h2>
                            <p>{row.address}</p>
                        </div>
                    </div>
                )}
            </div>
};

export default Modal;