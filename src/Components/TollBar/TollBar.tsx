import { Link } from "react-router-dom";
import React, { useState } from "react";
import FormTransaction from "../Form/FormTransaction.tsx";

interface Props {
    onSubmit:() =>void
}

const TollBar: React.FC <Props> = ({onSubmit}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div>
            <nav className="navbar navbar-dark bg-white mt-4">
                <div className="container-fluid d-flex justify-content-between">
                    <div>
                        <Link to="/" className="navbar-brand text-black fw-bold fs-2">
                            Finance Tracker
                        </Link>
                    </div>
                    <div>
                        <button className="btn">
                            <Link to="/categories" className="navbar-brand text-black fw-bold">
                                Categories
                            </Link>
                        </button>
                        <button className="btn" onClick={openModal}>
                            <Link className="navbar-brand text-black fw-bold"
                                  to='/transactions/add-transaction'
                            >Add</Link>
                        </button>
                    </div>
                </div>
            </nav>
            <hr />

            <div
                className={`modal fade ${isModalOpen ? "show" : ""}`}
                style={{ display: isModalOpen ? "block" : "none" }}
                tabIndex={-1}
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                            onClick={closeModal}
                        ></button>

                        <FormTransaction closeModal={closeModal} onSubmit={onSubmit} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TollBar;
