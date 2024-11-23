import {useEffect} from 'react';
import CardItem from "../../Components/CardItem/CardItem.tsx";
import {useAppDispatch, useAppSelector} from "../../app/hooks.ts";
import {carigoriesSelector} from "../../store/slice/CategorySlice.ts";
import {transactionSelector} from "../../store/slice/TransactionSlice.ts";
import {fetchAllGetTransactions} from "../../store/thunk/thunkTransaction.ts";
import {fetchCategoriesAll} from "../../store/thunk/thunkCategory.ts";

const Home = () => {
    const categories = useAppSelector(carigoriesSelector);
    const transaction = useAppSelector(transactionSelector);
    const dispatch = useAppDispatch();

    useEffect(() =>{
        dispatch(fetchAllGetTransactions())
        dispatch(fetchCategoriesAll())
    }, [dispatch])
    return (
        categories && (
            <div>
                {transaction.map((trans) => (
                    <CardItem
                        key={trans.id}
                        categories = {categories}
                        transaction={trans}
                    />
                ))}
            </div>
        )
    );
};

export default Home;