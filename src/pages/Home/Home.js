// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Home.module.scss';
import { useState, useEffect } from 'react';

import { getMethod } from '~/utils/fetchData';

const cx = classNames.bind(styles);

function Container() {
    const [productList, setProductList] = useState([]);

    const quantityProduct = 6;

    useEffect(() => {
        const getProducts = async () => {
            let response = await getMethod('product');
            return response;
        };
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
    }, []);

    return (
        <>
            <div className={cx('container')}>
                <div className={cx('grid', 'wide')}>
                    <div className={cx('row', 'no-gutter', 'pt-16')}>
                        <div className={cx('col', 'l-8', 'slider')}>
                            <Link to="">
                                <img
                                    src="https://salt.tikicdn.com/ts/banner/df/4f/06/16e09c089f3b3193acfec75ef62a561f.png"
                                    alt=""
                                    className={cx('mySlides')}
                                />
                            </Link>
                            {/* <Link to="">
                                <img
                                    src="https://salt.tikicdn.com/ts/banner/48/Link1/4e/1806a27c0951adc48eb802f45ce7bad2.png"
                                    alt=""
                                    className={cx('mySlides')}
                                />
                            </Link>
                            <Link to="">
                                <img
                                    src="https://salt.tikicdn.com/ts/banner/ea/46/64/0d902a1948700ea8c2115c908d818fc4.png"
                                    alt=""
                                    className={cx('mySlides')}
                                />
                            </Link> */}

                            {/* onClick="plusDivs(-1)" */}
                            <button className={cx('slider-button-left')}>&#10094;</button>
                            <button className={cx('slider-button-right')}>&#10095;</button>
                        </div>
                        <div className={cx('col', 'l-4', 'banner')}>
                            <Link to="">
                                <img
                                    src="https://salt.tikicdn.com/ts/banner/9e/7e/d1/dfd19fd4bd8022bb26c009b93da13f5c.png"
                                    alt=""
                                />
                            </Link>
                        </div>
                    </div>

                    <div className={cx('row', 'sm-gutter', 'mt-16')}>
                        <div className={cx('col', 'l-3', 'banner-2')}>
                            <Link to="">
                                <img
                                    src="https://salt.tikicdn.com/ts/banner/c9/9b/5d/aff676b51d90a4dfebd721396df46883.png"
                                    alt=""
                                />
                            </Link>
                        </div>
                        <div className={cx('col', 'l-6', 'banner-2')}>
                            <Link to="">
                                <img
                                    src="https://salt.tikicdn.com/ts/banner/d1/d8/52/a7b3eca6b1bcf0fe0b07312fcc7b4fad.png"
                                    alt=""
                                />
                            </Link>
                        </div>
                        <div className={cx('col', 'l-3', 'banner-2')}>
                            <Link to="">
                                <img
                                    src="https://salt.tikicdn.com/ts/banner/07/e2/5a/468d726d692f5aa231d77b7ba0c3a379.png"
                                    alt=""
                                />
                            </Link>
                        </div>
                    </div>

                    <div className={cx('row', 'sm-gutter', 'mt-16')}>
                        <div className={cx('col', 'l-3', 'banner-3')}>
                            <Link to="">
                                <img
                                    src=" https://salt.tikicdn.com/ts/banner/38/54/68/1b59227250cf0b69dac9c58670b3bad6.png"
                                    alt=""
                                />
                            </Link>
                        </div>
                        <div className={cx('col', 'l-3', 'banner-3')}>
                            <Link to="">
                                <img
                                    src="https://salt.tikicdn.com/ts/banner/91/e2/37/99dc9126edc8976d13f22457da4f7a23.png"
                                    alt=""
                                />
                            </Link>
                        </div>
                        <div className={cx('col', 'l-3', 'banner-3')}>
                            <Link to="">
                                <img
                                    src="https://salt.tikicdn.com/ts/banner/b4/dd/fa/95f5833f45f952437911b0baace4a474.png"
                                    alt=""
                                />
                            </Link>
                        </div>
                        <div className={cx('col', 'l-3', 'banner-3')}>
                            <Link to="">
                                <img
                                    src="https://salt.tikicdn.com/ts/banner/17/cb/0d/cb99ab16c7f3b28c629324b6bd7c4df5.png"
                                    alt=""
                                />
                            </Link>
                        </div>
                    </div>

                    <div className={cx('row', 'mt-16')}>
                        <div className={cx('col', 'l-12')}>
                            <div className={cx('menu')}>
                                <div className={cx('menu-item')}>
                                    <img
                                        src="https://salt.tikicdn.com/ts/upload/7b/fc/54/777d24de8eff003bda7a8d5f4294f9a8.gif"
                                        alt=""
                                    />
                                    <p>Mua sắm có lời</p>
                                </div>
                                <div className={cx('menu-item')}>
                                    <img
                                        src="https://salt.tikicdn.com/ts/upload/f4/cc/13/eeb7c8155cdeca4c5db9dff1a33969bd.png"
                                        alt=""
                                    />
                                    <p>Siêu sale 8.8</p>
                                </div>
                                <div className={cx('menu-item')}>
                                    <img
                                        src="https://salt.tikicdn.com/ts/upload/68/9c/2f/6fc82a9a9713a2c2b1968e9760879f6e.png"
                                        alt=""
                                    />
                                    <p>Đi chợ siêu tốc</p>
                                </div>
                                <div className={cx('menu-item')}>
                                    <img
                                        src="https://salt.tikicdn.com/ts/upload/73/e0/7d/af993bdbf150763f3352ffa79e6a7117.png"
                                        alt=""
                                    />
                                    <p>Đóng tiền, nạp thẻ</p>
                                </div>
                                <div className={cx('menu-item')}>
                                    <img
                                        src="https://salt.tikicdn.com/ts/upload/ff/20/4a/0a7c547424f2d976b6012179ed745819.png"
                                        alt=""
                                    />
                                    <p>Mua bán ASA/XU</p>
                                </div>
                                <div className={cx('menu-item')}>
                                    <img
                                        src="https://salt.tikicdn.com/ts/upload/73/50/e1/83afc85db37c472de60ebef6eceb41a7.png"
                                        alt=""
                                    />
                                    <p>Mã giảm giá</p>
                                </div>
                                <div className={cx('menu-item')}>
                                    <img
                                        src="https://salt.tikicdn.com/ts/upload/ef/ae/82/f40611ad6dfc68a0d26451582a65102f.png"
                                        alt=""
                                    />
                                    <p>Bảo hiểm tiki360</p>
                                </div>
                                <div className={cx('menu-item')}>
                                    <img
                                        src="https://salt.tikicdn.com/cache/w100/ts/upload/99/29/ff/cea178635fd5a24ad01617cae66c065c.png.webp"
                                        alt=""
                                    />
                                    <p>Giảm đến 50%</p>
                                </div>
                                <div className={cx('menu-item')}>
                                    <img
                                        src="https://salt.tikicdn.com/cache/w100/ts/upload/52/50/73/0788d5207ec8b82e05859dfe953a4327.png.webp"
                                        alt=""
                                    />
                                    <p>Hoàn tiền 15%</p>
                                </div>
                                <div className={cx('menu-item')}>
                                    <img
                                        src="https://salt.tikicdn.com/cache/w100/ts/upload/4a/b2/c5/b388ee0e511889c83fab1217608fe82f.png.webp"
                                        alt=""
                                    />
                                    <p>Ưu đãi thanh toán</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={cx('row', 'sm-gutter', 'mt-16')}>
                        {productList.map((product, index) => (
                            <div className={cx('col', 'l-2', 'mt-8')} key={index}>
                                <Link to={`/product_detail/${product._id}`} className={cx('product')}>
                                    <img className={cx('product-img')} src={product.image_url} alt="" />
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
                    <div className={cx('row')}>
                        <div className={cx('col', 'l-12')}>
                            <div className={cx('button-view-add')}>
                                <button>Xem Thêm</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className={cx('modal')}>
                <div className={cx('modal-overlay')}></div>
                <div className={cx('modal-body')}></div>
            </div> */}
        </>
    );
}

export default Container;
