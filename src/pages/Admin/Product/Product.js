// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faPen, faStar, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { Link, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState, useEffect, useRef } from 'react';
// import { getDatabase, ref, child, get, set, remove } from 'firebase/database';
// import { list, getDownloadURL, listAll, ref as refStorage, uploadBytes } from 'firebase/storage';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2';
//import 'bootstrap/dist/css/bootstrap.min.css';

//import { storage } from '~/firebase.js';
import styles from './Product.module.scss';
import { getMethod, postMethod } from '~/utils/fetchData';
//import app from '~/firebase.js';
// import UploadImage from '~/utils/uploadImage';

const cx = classNames.bind(styles);

function Product({ isAdmin }) {
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    useEffect(() => {
        // if (!isAdmin) {
        //     navigate('/');
        // }
        const getProducts = async () => {
            let response = await getMethod('product');
            return response;
        };
        getProducts()
            .then((res) => {
                if (res.success) {
                    console.log(res.products);
                    setProducts(res.products);
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }, [products]);

    const [showAdd, setShowAdd] = useState(false);
    const [showView, setShowView] = useState(false);
    const [showEdit, setShowEdit] = useState(false);
    const [showDelete, setShowDelete] = useState(false);
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');
    const [idEdit, setIdEdit] = useState('');
    const [idDelete, setIdDelete] = useState('');

    const handleCloseView = () => setShowView(false);
    const handleCloseEdit = () => setShowEdit(false);
    const handleCloseDelete = () => setShowDelete(false);

    const handleShowView = (e) => {
        console.log('Click');
        setName(e.target.getAttribute('data-name'));
        setPrice(e.target.getAttribute('data-price'));
        setImage(e.target.getAttribute('data-image'));
        setCategory(e.target.getAttribute('data-category'));
        setDescription(e.target.getAttribute('data-description'));
        setShowView(true);
    };

    const handleShowEdit = (e) => {
        // loadCategory();
        setName(e.target.getAttribute('data-name'));
        setPrice(e.target.getAttribute('data-price'));
        setCategory(e.target.getAttribute('data-category'));
        setImage(e.target.getAttribute('data-image'));
        setIdEdit(e.target.getAttribute('data-id'));
        setShowEdit(true);
    };

    const handleShowDelete = (e) => {
        setIdDelete(e.target.getAttribute('data-id'));
        setName(e.target.getAttribute('data-name'));
        setShowDelete(true);
    };

    // //Set d??? li???u cho input
    const setNameProduct = (e) => {
        setName(e.target.value);
    };

    const setPriceProduct = (e) => {
        setPrice(e.target.value);
    };

    const setCategoryProduct = (e) => {
        setCategory(e.target.value);
    };

    // const setImageProduct = (e) => {
    //     // let path = e.target.value;
    //     // let imageName = path.split('\\')[2];
    //     console.log(e.target.files[0]);
    //     setImage(e.target.files[0]);
    // };

    // //X??a d??? li???u
    const handleDeleteProduct = (e) => {
        postMethod('product/delete', { product_id: idDelete })
            .then((res) => {
                console.log(res);
                if (res.success) {
                    const newProducts = products.filter((p) => p._id !== idDelete);
                    setProducts(newProducts);
                    setShowDelete(false);
                    Swal.fire({
                        title: 'Success',
                        text: res.message,
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
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <>
            <div className={cx('grid', 'wide')}>
                <h1 className={cx('text-center', 'text-danger', 'mt-32')}>Qu???n l?? s???n ph???m </h1>
                <div className={cx('mt-32')}>
                    <Link
                        to="/admin/add_product"
                        className={cx('btn', 'btn-outline-danger', 'mt-16')}
                        //onClick={handleShowAdd}
                    >
                        Th??m s???n ph???m +
                    </Link>
                    <table border="0" cellSpacing="0" className={cx('table', 'table-striped', 'mt-32', 'mb-64')}>
                        <thead className={cx('text-center')}>
                            <tr className={cx('table-head')}>
                                <td colSpan="2"></td>
                                <td>T??n</td>
                                <td>Gi??</td>
                                <td>Lo???i s???n ph???m</td>
                            </tr>
                        </thead>
                        <tbody className={cx('text-center')}>
                            {products.map((item, index) => (
                                <tr className={cx('table-row')}>
                                    <td>
                                        <Link
                                            to=""
                                            className={cx('view-product', 'mr-16')}
                                            data-name={item.name}
                                            data-price={item.price}
                                            data-category={item.category}
                                            data-description={item.description}
                                            data-image={item.image_url}
                                            onClick={handleShowView}
                                        >
                                            {/* <FontAwesomeIcon icon={faEye} /> */}
                                            Xem
                                        </Link>

                                        <Link
                                            to=""
                                            className={cx('edit-product', 'mr-16')}
                                            onClick={handleShowEdit}
                                            data-name={item.name}
                                            data-price={item.price}
                                            data-category={item.category}
                                        >
                                            {/* <FontAwesomeIcon icon={faPen} /> */}
                                            S???a
                                        </Link>
                                        <Link
                                            to=""
                                            className={cx('delete-product')}
                                            onClick={handleShowDelete}
                                            data-id={item._id}
                                            data-name={item.name}
                                        >
                                            {/* <FontAwesomeIcon icon={faTrashAlt} /> */}
                                            X??a
                                        </Link>
                                    </td>
                                    <td>
                                        <img src={item.image_url} alt="" className={cx('product-img')} />
                                    </td>
                                    <td className={cx('table-col')}>{item.name}</td>
                                    <td className={cx('table-col')}>{item.price}</td>
                                    <td className={cx('table-col')}>{item.category}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <ToastContainer />
            </div>

            {showView && (
                <div className={cx('modal', 'modal-register')}>
                    <div className={cx('modal-overlay')} onClick={handleCloseView}></div>
                    <div className={cx('modal-body')}>
                        <div className={cx('auth-form')}>
                            <div className={cx('auth-form-container')}>
                                <div className={cx('auth-form-header')}>
                                    <h3 className={cx('auth-form-heading')}>Xem s???n ph???m</h3>
                                </div>
                                <div className={cx('auth-form-form')}>
                                    <div className={cx('auth-form-group')}>
                                        <img src={image} alt="" className={cx('product-img')} />
                                    </div>
                                    <div className={cx('auth-form-group')}>
                                        <span>T??n: </span>
                                        <span>
                                            <b>{name}</b>
                                        </span>
                                    </div>
                                    <div className={cx('auth-form-group')}>
                                        <span>Gi??: </span>
                                        <span>
                                            <i>{price}</i> VN??
                                        </span>
                                    </div>
                                    <div className={cx('auth-form-group')}>
                                        <span>Lo???i s???n ph???m: </span>
                                        <span>{category}</span>
                                    </div>
                                    <div className={cx('auth-form-group')}>
                                        <span>M?? t???: </span>
                                        <p className={cx('mt-8')}>{description}</p>
                                    </div>
                                </div>
                                <div className={cx('auth-form-controls')}>
                                    <button className={cx('btn-back')} onClick={handleCloseView}>
                                        ????ng
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {showEdit && (
                <div className={cx('modal', 'modal-register')}>
                    <div className={cx('modal-overlay')} onClick={handleCloseEdit}></div>
                    <div className={cx('modal-body')}>
                        <div className={cx('auth-form')}>
                            <div className={cx('auth-form-container')}>
                                <div className={cx('auth-form-header')}>
                                    <h3 className={cx('auth-form-heading')}>S???a s???n ph???m</h3>
                                </div>
                                <div className={cx('auth-form-form')}>
                                    <div className={cx('auth-form-group')}>
                                        <input
                                            type="text"
                                            className={cx('auth-form-input')}
                                            placeholder="Vui l??ng nh???p t??n s???n ph???m"
                                            name="name"
                                            value={name}
                                            onChange={setNameProduct}
                                        />
                                    </div>
                                    <div className={cx('auth-form-group')}>
                                        <input
                                            type="text"
                                            className={cx('auth-form-input')}
                                            placeholder="Vui l??ng nh???p gi?? s???n ph???m"
                                            name="price"
                                            value={price}
                                            onChange={setPriceProduct}
                                        />
                                    </div>
                                    <div className={cx('auth-form-group')}>
                                        <input
                                            type="text"
                                            className={cx('auth-form-input')}
                                            placeholder="Vui l??ng nh???p lo???i s???n ph???m"
                                            name="category"
                                            value={category}
                                            onChange={setCategoryProduct}
                                        />
                                    </div>
                                </div>
                                <div className={cx('auth-form-controls')}>
                                    <button className={cx('btn-back')} onClick={handleCloseEdit}>
                                        ????ng
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {showDelete && (
                <div className={cx('modal', 'modal-register')}>
                    <div className={cx('modal-overlay')} onClick={handleCloseDelete}></div>
                    <div className={cx('modal-body')}>
                        <div className={cx('auth-form')}>
                            <div className={cx('auth-form-container')}>
                                <div className={cx('auth-form-header')}>
                                    <h3 className={cx('auth-form-heading')}>X??a s???n ph???m</h3>
                                </div>
                                <div className={cx('auth-form-form')}>
                                    <div className={cx('auth-form-group')}>
                                        <p className={cx('auth-form-notify')}>
                                            B???n c?? ch???c l?? mu???n x??a s???n ph???m <b>{name}</b> kh??ng ?
                                        </p>
                                    </div>
                                </div>
                                <div className={cx('auth-form-controls')}>
                                    <button className={cx('btn-back')} onClick={handleCloseDelete}>
                                        ????ng
                                    </button>
                                    <button className={cx('btn', 'btn-outline-danger')} onClick={handleDeleteProduct}>
                                        X??a
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Product;
