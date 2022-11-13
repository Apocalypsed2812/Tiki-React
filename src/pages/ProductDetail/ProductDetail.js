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
                                Chia sẻ:
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
                                    (Xem <span>2554</span> đánh giá)
                                </div>
                                <div className={cx('separate')}></div>
                                <div className={cx('sold')}>
                                    Đã bán <span>5000</span>+
                                </div>
                            </div>
                            <div className={cx('price')}>
                                <p className={cx('new-price')}>{product.price} đ</p>
                                <p className={cx('old-price')}>{product.price} đ</p>
                                <p className={cx('sale')}>-16%</p>
                            </div>
                            <div className={cx('color')}>
                                <p>
                                    Màu: <span>Đen</span>
                                </p>
                                <ul className={cx('color-list')}>
                                    <li className={cx('color-item')}>Trắng</li>
                                    <li className={cx('color-item')}>Tím</li>
                                    <li className={cx('color-item')}>Vàng</li>
                                    <li className={cx('color-item')}>Xanh lục</li>
                                    <li className={cx('color-item')}>Đen</li>
                                    <li className={cx('color-item')}>Đen</li>
                                </ul>
                            </div>
                            <div className={cx('quantity')}>
                                <button className={cx('sub')}>-</button>
                                <button className={cx('current')}>{quantity}</button>
                                <button className={cx('add')}>+</button>
                            </div>
                            <div className={cx('buy')}>
                                <button className={cx('buy-now')} onClick={() => handleAddToCart()}>
                                    Thêm vào giỏ hàng
                                </button>
                                <button className={cx('buy-after')}>
                                    Trả góp
                                    <p>904.164 đ / tháng</p>
                                </button>
                            </div>
                        </div>
                        <div className={cx('description', 'col', 'l-12')} key={index}>
                            <h3 className={cx('des-name')}>Mô tả sản phẩm</h3>
                            <h4 className={cx('des-heading')}>Nội dung về tính năng</h4>
                            <p className={cx('des-content')}>
                                {/* Quay video 4K, chụp ảnh chân dung tuyệt đẹp và chụp phong cảnh rộng với hệ thống camera kép hoàn
                        toàn mới. Chụp ảnh tối ưu trong điều kiện ánh sáng yếu với chế độ Ban Đêm. Xem ảnh, video và
                        chơi game với màu sắc chân thực trên màn hình Liquid Retina 6.1 inch.3 Trải nghiệm hiệu năng
                        tuyệt vời với chip A13 Bionic dành cho game, thực tế ảo tăng cường (AR) và chụp ảnh. Làm được
                        nhiều việc hơn và sạc ít hơn với thời lượng pin bền bỉ cả ngày.2 Và bớt phải lo lắng nhờ khả
                        năng chống nước ở độ sâu tối đa 2 mét trong vòng 30 phút.1 */}
                                {product.description}
                            </p>

                            <h4 className={cx('des-heading')}>Nội dung về tính năng</h4>
                            <p className={cx('des-content')}>
                                Quay video 4K, chụp ảnh chân dung tuyệt đẹp và chụp phong cảnh rộng với hệ thống camera
                                kép hoàn toàn mới. Chụp ảnh tối ưu trong điều kiện ánh sáng yếu với chế độ Ban Đêm. Xem
                                ảnh, video và chơi game với màu sắc chân thực trên màn hình Liquid Retina 6.1 inch.3
                                Trải nghiệm hiệu năng tuyệt vời với chip A13 Bionic dành cho game, thực tế ảo tăng cường
                                (AR) và chụp ảnh. Làm được nhiều việc hơn và sạc ít hơn với thời lượng pin bền bỉ cả
                                ngày.2 Và bớt phải lo lắng nhờ khả năng chống nước ở độ sâu tối đa 2 mét trong vòng 30
                                phút.1
                            </p>
                        </div>
                    </div>
                ))}

                <div className={cx('row', 'sm-gutter', 'mt-32')}>
                    <h3 className={cx('col', 'l-12', 'product-intro')}>Sản phẩm liên quan</h3>
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
                                    <p className={cx('product-action-sold')}>Đã bán 1000+</p>
                                </div>
                                <div className={cx('product-price')}>
                                    <span className={cx('product-new-price')}>{product.price} đ</span>
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
