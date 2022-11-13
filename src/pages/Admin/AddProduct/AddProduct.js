import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { postMethod } from '~/utils/fetchData';
import { GlobalState } from '~/context/GlobalState';
import classNames from 'classnames/bind';

import styles from './AddProduct.module.scss';

const cx = classNames.bind(styles);

function AddProduct() {
    const state = useContext(GlobalState);
    const [products, setProducts] = state.ProductAPI.products;
    const setLoading = state.loading[1];
    console.log(setLoading);
    const [product, setProduct] = useState({
        name: '',
        sub_title: '',
        description: '',
        price: 0,
        category: '',
        image: null,
        previewImg: '',
    });
    const handleChangeProduct = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value });
    };
    const handleChangeImage = (e) => {
        const file = e.target.files[0];
        if (file)
            setProduct({
                ...product,
                image: file,
                previewImg: URL.createObjectURL(file),
            });
    };
    const addProduct = (e) => {
        setLoading(true);
        const body = new FormData(e.target);
        postMethod('product', body)
            .then((res) => {
                if (res.success) {
                    let newProduct = res.product;
                    setProducts([...products, newProduct]);
                    setProduct({
                        name: '',
                        sub_title: '',
                        description: '',
                        price: 0,
                        category: '',
                        image: null,
                        previewImg: '',
                    });
                    Swal.fire({
                        title: 'Success',
                        text: 'Product has been added successfully',
                        icon: 'success',
                    });
                } else {
                    Swal.fire({
                        title: 'Error',
                        text: res.message,
                        icon: 'error',
                    });
                }
            })
            .catch((err) => console.log(err));
        setLoading(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (product.name === '') {
            Swal.fire({
                title: 'Error',
                text: 'Product name can not be empty',
                icon: 'error',
            });
            return;
        }
        if (product.sub_title === '') {
            Swal.fire({
                title: 'Error',
                text: 'Product sub title can not be empty',
                icon: 'error',
            });
            return;
        }
        if (product.price <= 0) {
            Swal.fire({
                title: 'Error',
                text: 'Product price not valid',
                icon: 'error',
            });
            return;
        }
        if (product.category === '') {
            Swal.fire({
                title: 'Error',
                text: 'Please choose Product category',
                icon: 'error',
            });
            return;
        }
        if (product.description === '') {
            Swal.fire({
                title: 'Error',
                text: 'Product description can not be empty',
                icon: 'error',
            });
            return;
        }
        if (!product.image) {
            Swal.fire({
                title: 'Error',
                text: 'Please choose a product image',
                icon: 'error',
            });
            return;
        }
        addProduct(e);
    };
    return (
        <form onSubmit={handleSubmit} className={cx('form')}>
            <div className="grid bg-white rounded-lg shadow-xl w-11/12 md:w-9/12 lg:w-1/2 border">
                <div className={cx('heading')}>
                    <h1 className={cx('text-danger')}>Add product</h1>
                </div>
                <div className={cx('form-group')}>
                    <label className={cx('label')}>Name</label>
                    <input
                        className={cx('form-control')}
                        type="text"
                        placeholder="Name"
                        name="name"
                        onChange={(e) => handleChangeProduct(e)}
                        value={product.name}
                    />
                </div>

                <div className={cx('form-group')}>
                    <label className={cx('label')}>Sub title</label>
                    <input
                        className={cx('form-control')}
                        type="text"
                        placeholder="Sub title"
                        name="sub_title"
                        onChange={(e) => handleChangeProduct(e)}
                        value={product.sub_title}
                    />
                </div>

                <div className={cx('form-group')}>
                    <label className={cx('label')}>Price $</label>
                    <input
                        className={cx('form-control')}
                        type="number"
                        placeholder="Price"
                        name="price"
                        onChange={(e) => handleChangeProduct(e)}
                        value={product.price}
                    />
                </div>

                <div className={cx('form-group')}>
                    <label className={cx('label')}>Category</label>
                    <select
                        className={cx('form-control')}
                        name="category"
                        onChange={(e) => handleChangeProduct(e)}
                        value={product.category}
                    >
                        <option value="">Choose</option>
                        <option value="digital">Digital product</option>
                        <option value="furniture ">Furniture product</option>
                        <option value="other">Other</option>
                    </select>
                </div>

                <div className={cx('form-group')}>
                    <label className={cx('label')}>Description</label>
                    <textarea
                        className={cx('form-control', 'form-control-textarea')}
                        type="text"
                        placeholder="Description"
                        name="description"
                        onChange={(e) => handleChangeProduct(e)}
                        value={product.description}
                    />
                </div>

                <div className={cx('form-group')}>
                    <label className={cx('label')}>Upload Photo</label>
                    <label htmlFor="image-product" className="w-fit relative cursor-pointer">
                        {product.previewImg && <img className={cx('product-img')} src={product.previewImg} alt="" />}
                        <div className="absolute bottom-0 left-0 right-0 h-[70%] bg-slate-700/50 flex items-center justify-center text-[14px] text-white font-semibold">
                            Chosse another image
                        </div>
                    </label>
                    {!product.previewImg && (
                        <div className="flex items-center justify-center w-full">
                            <label
                                className="flex flex-col border-4 border-dashed w-full h-32 hover:bg-gray-100 hover:border-purple-300 group"
                                htmlFor="image-product"
                            >
                                <div className={cx('product-img')}>
                                    <svg
                                        className="w-10 h-10 text-purple-400 group-hover:text-purple-600"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                                        ></path>
                                    </svg>
                                    <p className="lowercase text-sm text-gray-400 group-hover:text-purple-600 pt-1 tracking-wider">
                                        Select a photo
                                    </p>
                                </div>
                            </label>
                        </div>
                    )}
                    <input
                        type="file"
                        className="hidden"
                        name="image"
                        id="image-product"
                        onChange={(e) => handleChangeImage(e)}
                    />
                </div>

                <div className={cx('form-group', 'form-group-btn')}>
                    <Link to="/admin/product" className={cx('btn', 'btn-cancel')}>
                        Cancel
                    </Link>
                    <button className={cx('btn', 'btn-outline-primary', 'btn-create')}>Create</button>
                </div>
            </div>
        </form>
    );
}

export default AddProduct;
