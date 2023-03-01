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
    row: Object;
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
                            <form>
                                <h1>{row?.first_name} {row?.last_name}</h1>
                                <div className="form-group">
                                    <label htmlFor="name">Name:</label>
                                    <input type="text" id="name" name="name" required defaultValue={row?.first_name}/>
                                </div>
                                <div className="form-group">
                                    <label  htmlFor="last_name">Last name::</label>
                                    <input type="text" id="last_name" name="last_name" required defaultValue={row?.last_name}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email:</label>
                                    <input type="email" id="email" name="email" required defaultValue={row?.email}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="address">Address:</label>
                                    <input type="text" id="address" name="address" required defaultValue={row?.address}/>
                                </div>
                                <input type="submit" value="Submit"/>
                            </form>
                        </div>
                    </div>
                )}
            </div>
};

export default Modal;