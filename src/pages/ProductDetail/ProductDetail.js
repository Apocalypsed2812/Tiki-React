import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { Link, useNavigate } from 'react-router-dom';
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { useParams } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import Swal from 'sweetalert2';

import styles from './ProductDetail.module.scss';
import { GlobalState } from '~/context/GlobalState';
import { getMethod, getMethodId, postMethod } from '~/utils/fetchData';

const cx = classNames.bind(styles);

function Product_detail() {
    const state = useContext(GlobalState);
    const isLogin = state.UserAPI.login[0];
    const [cart, setCart] = state.UserAPI.cart;

    let navigate = useNavigate();

    //Product detail
    const { id } = useParams();
    const [product, setProduct] = useState([]);

    //Product involve
    const [productList, setProductList] = useState([]);
    const quantityProduct = 7;

    //quantity
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        const getProductById = async () => {
            let response = await getMethodId('product', id);
            return response;
        };
        const getProducts = async () => {
            let response = await getMethod('product');
            return response;
        };
        getProductById()
            .then((res) => {
                if (res.success) {
                    console.log(res.product);
                    setProduct(res.product);
                }
            })
            .catch((err) => {
                console.log(err);
            });
        getProducts()
            .then((res) => {
                if (res.success) {
                    console.log(res.products);
                    setProductList(res.products);
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }, [id]);

    const handleAddToCart = () => {
        if (!isLogin) {
            Swal.fire({
                title: 'User not logged in ',
                text: 'Please login to continue',
                icon: 'error',
            });
            return;
        }
        postMethod('add-to-cart', { product_id: id })
            .then((res) => {
                if (res.success) {
                    setCart([...cart, product._id]);
                    Swal.fire({
                        title: 'Success',
                        text: 'Product has been added to cart',
                        icon: 'success',
                    });
                    // navigate('/cart');
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
        <div className={cx('wrapper')}>
            <div className={cx('grid', 'wide')}>
                {product.map((product, index) => (
                    <div className={cx('row')} key={index}>
                        <div className={cx('col', 'l-4')}>
                            <img src={product.image_url} alt="iphon13" className={cx('thumbail')} />
                            <div className={cx('sharing')}>
                                Chia s???:
                                <FontAwesomeIcon icon={faFacebook} className={cx('icon-share')} />
                                <FontAwesomeIcon icon={faInstagram} className={cx('icon-share')} />
                                <FontAwesomeIcon icon={faLinkedin} className={cx('icon-share')} />
                            </div>
                        </div>
                        <div className={cx('col', 'l-8', 'inner')}>
                            <h3 className={cx('heading')}>{product.name}</h3>
                            <div className={cx('content')}>
                                <FontAwesomeIcon
                                    icon={faStar}
                                    className={cx('product-action-star', 'product-action-star--gold')}
                                />
                                <FontAwesomeIcon
                                    icon={faStar}
                                    className={cx('product-action-star', 'product-action-star--gold')}
                                />
                                <FontAwesomeIcon
                                    icon={faStar}
                                    className={cx('product-action-star', 'product-action-star--gold')}
                                />
                                <FontAwesomeIcon
                                    icon={faStar}
                                    className={cx('product-action-star', 'product-action-star--gold')}
                                />
                                <FontAwesomeIcon
                                    icon={faStar}
                                    className={cx('product-action-star', 'product-action-star--gold')}
                                />
                                <div className={cx('comment')}>
                                    (Xem <span>2554</span> ????nh gi??)
                                </div>
                                <div className={cx('separate')}></div>
                                <div className={cx('sold')}>
                                    ???? b??n <span>5000</span>+
                                </div>
                            </div>
                            <div className={cx('price')}>
                                <p className={cx('new-price')}>{product.price} ??</p>
                                <p className={cx('old-price')}>{product.price} ??</p>
                                <p className={cx('sale')}>-16%</p>
                            </div>
                            <div className={cx('color')}>
                                <p>
                                    M??u: <span>??en</span>
                                </p>
                                <ul className={cx('color-list')}>
                                    <li className={cx('color-item')}>Tr???ng</li>
                                    <li className={cx('color-item')}>T??m</li>
                                    <li className={cx('color-item')}>V??ng</li>
                                    <li className={cx('color-item')}>Xanh l???c</li>
                                    <li className={cx('color-item')}>??en</li>
                                    <li className={cx('color-item')}>??en</li>
                                </ul>
                            </div>
                            <div className={cx('quantity')}>
                                <button className={cx('sub')}>-</button>
                                <button className={cx('current')}>{quantity}</button>
                                <button className={cx('add')}>+</button>
                            </div>
                            <div className={cx('buy')}>
                                <button className={cx('buy-now')} onClick={() => handleAddToCart()}>
                                    Th??m v??o gi??? h??ng
                                </button>
                                <button className={cx('buy-after')}>
                                    Tr??? g??p
                                    <p>904.164 ?? / th??ng</p>
                                </button>
                            </div>
                        </div>
                        <div className={cx('description', 'col', 'l-12')} key={index}>
                            <h3 className={cx('des-name')}>M?? t??? s???n ph???m</h3>
                            <h4 className={cx('des-heading')}>N???i dung v??? t??nh n??ng</h4>
                            <p className={cx('des-content')}>
                                {/* Quay video 4K, ch???p ???nh ch??n dung tuy???t ?????p v?? ch???p phong c???nh r???ng v???i h??? th???ng camera k??p ho??n
                        to??n m???i. Ch???p ???nh t???i ??u trong ??i???u ki???n ??nh s??ng y???u v???i ch??? ????? Ban ????m. Xem ???nh, video v??
                        ch??i game v???i m??u s???c ch??n th???c tr??n m??n h??nh Liquid Retina 6.1 inch.3 Tr???i nghi???m hi???u n??ng
                        tuy???t v???i v???i chip A13 Bionic d??nh cho game, th???c t??? ???o t??ng c?????ng (AR) v?? ch???p ???nh. L??m ???????c
                        nhi???u vi???c h??n v?? s???c ??t h??n v???i th???i l?????ng pin b???n b??? c??? ng??y.2 V?? b???t ph???i lo l???ng nh??? kh???
                        n??ng ch???ng n?????c ??? ????? s??u t???i ??a 2 m??t trong v??ng 30 ph??t.1 */}
                                {product.description}
                            </p>

                            <h4 className={cx('des-heading')}>N???i dung v??? t??nh n??ng</h4>
                            <p className={cx('des-content')}>
                                Quay video 4K, ch???p ???nh ch??n dung tuy???t ?????p v?? ch???p phong c???nh r???ng v???i h??? th???ng camera
                                k??p ho??n to??n m???i. Ch???p ???nh t???i ??u trong ??i???u ki???n ??nh s??ng y???u v???i ch??? ????? Ban ????m. Xem
                                ???nh, video v?? ch??i game v???i m??u s???c ch??n th???c tr??n m??n h??nh Liquid Retina 6.1 inch.3
                                Tr???i nghi???m hi???u n??ng tuy???t v???i v???i chip A13 Bionic d??nh cho game, th???c t??? ???o t??ng c?????ng
                                (AR) v?? ch???p ???nh. L??m ???????c nhi???u vi???c h??n v?? s???c ??t h??n v???i th???i l?????ng pin b???n b??? c???
                                ng??y.2 V?? b???t ph???i lo l???ng nh??? kh??? n??ng ch???ng n?????c ??? ????? s??u t???i ??a 2 m??t trong v??ng 30
                                ph??t.1
                            </p>
                        </div>
                    </div>
                ))}

                <div className={cx('row', 'sm-gutter', 'mt-32')}>
                    <h3 className={cx('col', 'l-12', 'product-intro')}>S???n ph???m li??n quan</h3>
                    {productList.map((product, index) => (
                        <div className={cx('col', 'l-2')} key={index}>
                            <Link to={`/product_detail/${product._id}`} className={cx('product')}>
                                <img className={cx('product-img')} src={product.image_url} alt={product.name} />
                                <p className={cx('product-heading')}>{product.name}</p>
                                <div className={cx('product-action')}>
                                    <div className={cx('product-action-rating')}>
                                        <FontAwesomeIcon
                                            icon={faStar}
                                            className={cx('product-action-star', 'product-action-star--gold')}
                                        />
                                        <FontAwesomeIcon
                                            icon={faStar}
                                            className={cx('product-action-star', 'product-action-star--gold')}
                                        />
                                        <FontAwesomeIcon
                                            icon={faStar}
                                            className={cx('product-action-star', 'product-action-star--gold')}
                                        />
                                        <FontAwesomeIcon
                                            icon={faStar}
                                            className={cx('product-action-star', 'product-action-star--gold')}
                                        />
                                        <FontAwesomeIcon
                                            icon={faStar}
                                            className={cx('product-action-star', 'product-action-star--gold')}
                                        />
                                    </div>
                                    <p className={cx('product-action-sold')}>???? b??n 1000+</p>
                                </div>
                                <div className={cx('product-price')}>
                                    <span className={cx('product-new-price')}>{product.price} ??</span>
                                    <span className={cx('product-price-sale')}>-23%</span>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Product_detail;
