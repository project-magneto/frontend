import React from 'react'
import './styles/user.css'

export interface UserInterface {}

const UserPage: React.FC<UserInterface> = () => (
    <>
        <h1>Users</h1>
        <div className="actions">
            <button id="add-new">Add New</button>
            <input type="text" id="search" placeholder="Search..."/>
        </div>
        <div className="table-wrapper">
            <table className="data-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>John Doe</td>
                        <td>john.doe@example.com</td>
                        <td>(555) 555-5555</td>
                        <td>
                            <button className="modal-btn">Details</button>
                            <div className="modal">
                                <div className="modal-content">
                                    <span className="close-btn">&times;</span>
                                    <h2>Jane Doe's Details</h2>
                                    <p>Name: Jane Doe</p>
                                    <p>Age: 28</p>
                                    <p>Email: jane.doe@example.com</p>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Jane Smith</td>
                        <td>jane.smith@example.com</td>
                        <td>(555) 555-5555</td>
                        <td>
                            <button className="modal-btn">Details</button>
                            <div className="modal">
                                <div className="modal-content">
                                    <span className="close-btn">&times;</span>
                                    <h2>Jane Doe's Details</h2>
                                    <p>Name: Jane Doe</p>
                                    <p>Age: 28</p>
                                    <p>Email: jane.doe@example.com</p>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Bob Johnson</td>
                        <td>bob.johnson@example.com</td>
                        <td>(555) 555-5555</td>
                        <td>
                            <button className="modal-btn">Details</button>
                            <div className="modal">
                                <div className="modal-content">
                                    <span className="close-btn">&times;</span>
                                    <h2>Jane Doe's Details</h2>
                                    <p>Name: Jane Doe</p>
                                    <p>Age: 28</p>
                                    <p>Email: jane.doe@example.com</p>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Alice Jones</td>
                        <td>alice.jones@example.com</td>
                        <td>(555) 555-5555</td>
                        <td>
                            <button className="modal-btn">Details</button>
                            <div className="modal">
                                <div className="modal-content">
                                    <span className="close-btn">&times;</span>
                                    <h2>Jane Doe's Details</h2>
                                    <p>Name: Jane Doe</p>
                                    <p>Age: 28</p>
                                    <p>Email: jane.doe@example.com</p>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>Mike Brown</td>
                        <td>mike.brown@example.com</td>
                        <td>(555) 555-5555</td>
                        <td>
                            <button className="modal-btn">Details</button>
                            <div className="modal">
                                <div className="modal-content">
                                    <span className="close-btn">&times;</span>
                                    <h2>Jane Doe's Details</h2>
                                    <p>Name: Jane Doe</p>
                                    <p>Age: 28</p>
                                    <p>Email: jane.doe@example.com</p>
                                </div>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div className="pagination">
            <a href="#" className="prev">Prev</a>
            <a href="#" className="page active">1</a>
            <a href="#" className="page">2</a>
            <a href="#" className="page">3</a>
            <a href="#" className="next">Next</a>
            </div>
        </div>
    </>
);

export default UserPage;