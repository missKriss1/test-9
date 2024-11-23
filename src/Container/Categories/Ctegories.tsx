import { useAppDispatch, useAppSelector } from "../../app/hooks.ts";
import { carigoriesSelector } from "../../store/slice/CategorySlice.ts";
import { useEffect, useState } from "react";
import { deleteCategoryById, fetchCategoriesAll } from "../../store/thunk/thunkCategory.ts";
import FormCategory from "../../Components/Form/FormCategory.tsx";
import { CategoryApi } from "../../types.ts";

const Categories = () => {
    const dispatch = useAppDispatch();
    const categories = useAppSelector(carigoriesSelector);
    const [modalOpen, setModalOpen] = useState(false);
    const [currentCategory, setCurrentCategory] = useState<CategoryApi | null>(null);


    const openModal = (category?: CategoryApi) => {
        setCurrentCategory(category || null);
        setModalOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setModalOpen(false);
        document.body.style.overflow = '';
    };

    const deleteCategory = async (id: string) => {
        await dispatch(deleteCategoryById(id));
    };

    useEffect(() => {
        dispatch(fetchCategoriesAll());
    }, [dispatch]);

    return (
        <div>
            <div className="d-flex justify-content-between mb-5">
                <h2>Categories</h2>
                <button className="btn btn-primary" onClick={() => openModal()}>
                    Add Category
                </button>
            </div>

            <div>
                {categories.map((categoryItem) => (
                    <div key={categoryItem.id}>
                        <div className="d-flex justify-content-between align-items-center border p-4 mb-3">
                            <div className="w-50 text-start">
                                <h1>{categoryItem.name}</h1>
                            </div>
                            <div className="w-50 d-flex justify-content-between text-end">
                                <span
                                    className={`fs-3 ms-auto fw-bold text-capitalize ${categoryItem.type === 'income' ? 'text-success' : 'text-danger'}`}
                                >
                                    {categoryItem.type}
                                </span>
                                <div className="d-flex justify-content-between w-50">
                                    <button
                                        className="btn btn-success"
                                        onClick={() => openModal(categoryItem)}
                                    >
                                        Edit
                                    </button>
                                    <button
                                        className="btn btn-danger"
                                        onClick={() => deleteCategory(categoryItem.id)}
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {modalOpen && (
                <div
                    className="modal-overlay"
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        zIndex: 1050,
                    }}
                >
                    <FormCategory
                        closeModal={closeModal}
                        onSubmit={() => {}}
                        show={modalOpen}
                    />
                </div>
            )}
        </div>
    );
};

export default Categories;
