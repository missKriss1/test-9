import { useAppDispatch } from "../../app/hooks";
import {useNavigate} from "react-router-dom";
import {CategoryApi} from "../../types.ts";
import {fetchAddCategory} from "../../store/thunk/thunkCategory.ts";
import FormCategory from "../../Components/Form/FormCategory.tsx";

const AddFormCategory = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const onSubmit = async (category: CategoryApi) =>{
        await  dispatch(fetchAddCategory(category))
        navigate('/categories')
    }
    return (
        <div>
            <FormCategory show={true}  onSubmit={onSubmit} closeModal={() => navigate('/categories')}/>
        </div>
    );
};

export default AddFormCategory;