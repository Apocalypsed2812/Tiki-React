import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';

import styles from './ProductDetail.module.scss';

const cx = classNames.bind(styles);

function Product_detail() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('grid', 'wide')}>
                <div className={cx('row')}>
                    <div className={cx('col', 'l-4')}>
                        <img
                            src="https://salt.tikicdn.com/cache/w1200/ts/product/aa/24/e0/57914989351786ef9dfe027046ba4626.jpg"
                            alt="iphon13"
                            className={cx('thumbail')}
                        />
                        <div className={cx('sharing')}>
                            Chia sẻ:
                            <FontAwesomeIcon icon={faFacebook} className={cx('icon-share')} />
                            <FontAwesomeIcon icon={faInstagram} className={cx('icon-share')} />
                            <FontAwesomeIcon icon={faLinkedin} className={cx('icon-share')} />
                        </div>
                    </div>
                    <div className={cx('col', 'l-8', 'inner')}>
                        <h3 className={cx('heading')}>Apple Iphone 13</h3>
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
                            <p className={cx('new-price')}>10.850.000 đ</p>
                            <p className={cx('old-price')}>12.999.000 đ</p>
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
                            <button className={cx('current')}>1</button>
                            <button className={cx('add')}>+</button>
                        </div>
                        <div className={cx('buy')}>
                            <button className={cx('buy-now')}>Chọn Mua</button>
                            <button className={cx('buy-after')}>
                                Trả góp
                                <p>904.164 đ / tháng</p>
                            </button>
                        </div>
                    </div>
                </div>

                <div className={cx('description')}>
                    <h3 className={cx('des-name')}>Mô tả sản phẩm</h3>
                    <h4 className={cx('des-heading')}>Nội dung về tính năng</h4>
                    <p className={cx('des-content')}>
                        Quay video 4K, chụp ảnh chân dung tuyệt đẹp và chụp phong cảnh rộng với hệ thống camera kép hoàn
                        toàn mới. Chụp ảnh tối ưu trong điều kiện ánh sáng yếu với chế độ Ban Đêm. Xem ảnh, video và
                        chơi game với màu sắc chân thực trên màn hình Liquid Retina 6.1 inch.3 Trải nghiệm hiệu năng
                        tuyệt vời với chip A13 Bionic dành cho game, thực tế ảo tăng cường (AR) và chụp ảnh. Làm được
                        nhiều việc hơn và sạc ít hơn với thời lượng pin bền bỉ cả ngày.2 Và bớt phải lo lắng nhờ khả
                        năng chống nước ở độ sâu tối đa 2 mét trong vòng 30 phút.1
                    </p>

                    <h4 className={cx('des-heading')}>Nội dung về tính năng</h4>
                    <p className={cx('des-content')}>
                        Quay video 4K, chụp ảnh chân dung tuyệt đẹp và chụp phong cảnh rộng với hệ thống camera kép hoàn
                        toàn mới. Chụp ảnh tối ưu trong điều kiện ánh sáng yếu với chế độ Ban Đêm. Xem ảnh, video và
                        chơi game với màu sắc chân thực trên màn hình Liquid Retina 6.1 inch.3 Trải nghiệm hiệu năng
                        tuyệt vời với chip A13 Bionic dành cho game, thực tế ảo tăng cường (AR) và chụp ảnh. Làm được
                        nhiều việc hơn và sạc ít hơn với thời lượng pin bền bỉ cả ngày.2 Và bớt phải lo lắng nhờ khả
                        năng chống nước ở độ sâu tối đa 2 mét trong vòng 30 phút.1
                    </p>
                </div>

                <div className={cx('row', 'sm-gutter', 'mt-32')}>
                    <h3 className={cx('col', 'l-12', 'product-intro')}>Sản phẩm liên quan</h3>
                    <div className={cx('col', 'l-2')}>
                        <Link to="/product_detail" className={cx('product')}>
                            <img
                                className={cx('product-img')}
                                src="https://salt.tikicdn.com/cache/280x280/ts/product/dd/42/95/ae7976cda4f1ae1de6be8c5e84df1815.png"
                                alt=""
                            />
                            <p className={cx('product-heading')}>Apple iphone 13</p>
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
                                <span className={cx('product-new-price')}>19.219.000 đ</span>
                                <span className={cx('product-price-sale')}>-23%</span>
                            </div>
                        </Link>
                    </div>
                    <div className={cx('col', 'l-2')}>
                        <Link to="/product_detail" className={cx('product')}>
                            <img
                                className={cx('product-img')}
                                src="https://salt.tikicdn.com/cache/280x280/ts/product/dd/42/95/ae7976cda4f1ae1de6be8c5e84df1815.png"
                                alt=""
                            />
                            <p className={cx('product-heading')}>Apple iphone 13</p>
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
                                <span className={cx('product-new-price')}>19.219.000 đ</span>
                                <span className={cx('product-price-sale')}>-23%</span>
                            </div>
                        </Link>
                    </div>
                    <div className={cx('col', 'l-2')}>
                        <Link to="/product_detail" className={cx('product')}>
                            <img
                                className={cx('product-img')}
                                src="https://salt.tikicdn.com/cache/280x280/ts/product/dd/42/95/ae7976cda4f1ae1de6be8c5e84df1815.png"
                                alt=""
                            />
                            <p className={cx('product-heading')}>Apple iphone 13</p>
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
                                <span className={cx('product-new-price')}>19.219.000 đ</span>
                                <span className={cx('product-price-sale')}>-23%</span>
                            </div>
                        </Link>
                    </div>
                    <div className={cx('col', 'l-2')}>
                        <Link to="/product_detail" className={cx('product')}>
                            <img
                                className={cx('product-img')}
                                src="https://salt.tikicdn.com/cache/280x280/ts/product/dd/42/95/ae7976cda4f1ae1de6be8c5e84df1815.png"
                                alt=""
                            />
                            <p className={cx('product-heading')}>Apple iphone 13</p>
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
                                <span className={cx('product-new-price')}>19.219.000 đ</span>
                                <span className={cx('product-price-sale')}>-23%</span>
                            </div>
                        </Link>
                    </div>
                    <div className={cx('col', 'l-2')}>
                        <Link to="/product_detail" className={cx('product')}>
                            <img
                                className={cx('product-img')}
                                src="https://salt.tikicdn.com/cache/280x280/ts/product/dd/42/95/ae7976cda4f1ae1de6be8c5e84df1815.png"
                                alt=""
                            />
                            <p className={cx('product-heading')}>Apple iphone 13</p>
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
                                <span className={cx('product-new-price')}>19.219.000 đ</span>
                                <span className={cx('product-price-sale')}>-23%</span>
                            </div>
                        </Link>
                    </div>
                    <div className={cx('col', 'l-2')}>
                        <Link to="/product_detail" className={cx('product')}>
                            <img
                                className={cx('product-img')}
                                src="https://salt.tikicdn.com/cache/280x280/ts/product/dd/42/95/ae7976cda4f1ae1de6be8c5e84df1815.png"
                                alt=""
                            />
                            <p className={cx('product-heading')}>Apple iphone 13</p>
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
                                <span className={cx('product-new-price')}>19.219.000 đ</span>
                                <span className={cx('product-price-sale')}>-23%</span>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Product_detail;
