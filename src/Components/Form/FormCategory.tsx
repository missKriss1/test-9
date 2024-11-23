import { CategoryApi } from "../../types.ts";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {useNavigate} from "react-router-dom";

interface Props {
    currentCotegory?: CategoryApi;
    onSubmit: (category: CategoryApi) => void;
    show: boolean;
    closeModal: () => void;
}

const curentState: CategoryApi = {
    type: 'income',
    name: ''
};

const FormCategory: React.FC<Props> = ({ currentCotegory, closeModal, onSubmit, show }) => {
    const initialState: CategoryApi = currentCotegory ? { ...currentCotegory } : curentState;
    const [category, setCategory] = useState<CategoryApi>(initialState);
    const navigation = useNavigate();

    const infoForChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setCategory((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const formSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit({...category});
        navigation('/categories')
    };

    if (!show) return null;

    return (
        <div
            className="modal show"
            style={{
                display: 'block',
                width: '500px',
                position: 'fixed',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                zIndex: 1050,
            }}
        >
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                    </div>
                    <div className="p-2">
                        <form onSubmit={formSubmit}>
                            <div className="mb-3">
                                <label htmlFor="categoryName" className="form-label">
                                    Name Categories:
                                </label>
                                {show && (
                                    <input
                                        type="text"
                                        id="categoryName"
                                        name="name"
                                        className="form-control"
                                        onChange={infoForChange}
                                        value={category.name}
                                        placeholder="Enter category name"
                                        autoFocus
                                    />
                                )}
                            </div>

                            <div className="mb-3">
                                <label htmlFor="categoryType" className="form-label">
                                    Type:
                                </label>
                                <select
                                    name="type"
                                    id="categoryType"
                                    className="form-select"
                                    onChange={infoForChange}
                                    value={category.type}
                                >
                                    <option value="income">Income</option>
                                    <option value="expense">Expense</option>
                                </select>
                            </div>

                            <div className="d-flex justify-content-end">
                                <button
                                    type="button"
                                    className="btn btn-secondary me-2"
                                    onClick={closeModal}
                                >
                                    Cancel
                                </button>
                                <button type="submit" className="btn btn-primary">
                                    Save
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FormCategory;
