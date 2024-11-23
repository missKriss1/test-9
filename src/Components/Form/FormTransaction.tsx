import { useAppDispatch, useAppSelector } from "../../app/hooks.ts";
import { carigoriesSelector } from "../../store/slice/CategorySlice.ts";
import "../UI/Modal.css";
import React, {useEffect, useState} from "react";
import { ITransaction, ITransicrionApi } from "../../types.ts";
import {fetchAddNewTransaction} from "../../store/thunk/thunkTransaction.ts";

interface Props {
    currentTrans: ITransicrionApi | null;
    closeModal: () => void;
}

const initialemptyState: ITransaction = {
    transactionSum: 0,
    type: "income",
    category: "",
    date: new Date().toString(),
};

const FormTransaction: React.FC<Props> = ({ currentTrans, closeModal }) => {
    const categories = useAppSelector(carigoriesSelector);
    const dispatch = useAppDispatch();

    const types = [
        { name: "income", id: "income" },
        { name: "expense", id: "expense" },
    ];

    const initilaState: ITransicrionApi = currentTrans
        ? { ...currentTrans }
        : initialemptyState;

    const [transaction, setTransaction] = useState<ITransicrionApi>(initilaState);

    const changeInputAndSelect = (
        e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
    ) => {
        setTransaction((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const onSubmitForm = (e: React.FormEvent) => {
        e.preventDefault();
        dispatch((fetchAddNewTransaction(transaction)));
        console.log(transaction);
        closeModal();
    };

    useEffect(() =>{
        if(transaction.type === 'income' && !transaction.category){
            setTransaction((prev) =>({
                ...prev,
                category: 'income'
            }));
        }else{
            setTransaction((prev) =>({
                ...prev,
                category: 'expense'
            }));
        }
    }, [transaction.type]);

    return (
        <div className="modal-body">
            <form onSubmit={onSubmitForm}>
                <label>Type:</label>
                <select
                    name="type"
                    id="type"
                    className="form-select"
                    onChange={changeInputAndSelect}
                    value={transaction.type}
                >
                    {types.map((type) => (
                        <option key={type.id} value={type.name}>
                            {type.name}
                        </option>
                    ))}
                </select>

                <label>Category:</label>
                <select
                    name="category"
                    id="category"
                    className="form-select"
                    onChange={changeInputAndSelect}
                    value={transaction.category}
                >
                    <option value="">Select Category</option>
                    {types.map((type) => (
                        <option key={type.id} value={type.name}>
                            {type.name}
                        </option>
                    ))}
                </select>

                <label>Amount:</label>
                <input
                    type="number"
                    name="transactionSum"
                    id="transactionSum"
                    min="1"
                    className="form-control"
                    onChange={changeInputAndSelect}
                    value={transaction.trasictionSum}
                />

                <div className="mt-3">
                    <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={closeModal}
                    >
                        Cancel
                    </button>
                    <button type="submit" className="btn btn-primary ms-2">
                        Save
                    </button>
                </div>
            </form>
        </div>

    );
};

export default FormTransaction;
