import React from 'react';
import {ICategory, ITransaction} from "../../types.ts";

interface Props {
    categories: ICategory[];
    transaction: ITransaction;
}

const CardItem: React.FC <Props> = ({categories, transaction}) => {
    const category = categories.find((category) => category.id === transaction.category);
    const categoryName = category ? category.name : 'name unknown';
    return (
        <div>
            <h4>Transaction Details</h4>
            <p><strong>Type:</strong> {transaction.type}</p>
            <p><strong>Category:</strong> {categoryName}</p>
            <p><strong>Amount:</strong> {transaction.transactionSum}</p>
            <p><strong>Date:</strong> {transaction.date}</p>
        </div>
    );
};

export default CardItem;