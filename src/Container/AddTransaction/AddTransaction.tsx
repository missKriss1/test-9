import { useAppDispatch } from "../../app/hooks";
import { useNavigate } from "react-router-dom";
import { ITransicrionApi } from "../../types.ts";
import { fetchAddNewTransaction } from "../../store/thunk/thunkTransaction.ts";
import FormTransaction from "../../Components/Form/FormTransaction.tsx";

const AddTransaction = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const onSubmit = async (transaction: ITransicrionApi) => {
        try {
            await dispatch(fetchAddNewTransaction(transaction));
            navigate('/');
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <FormTransaction
                onSubmit={onSubmit}
                closeModal={() => navigate('/')}
            />
        </div>
    );
};

export default AddTransaction;
