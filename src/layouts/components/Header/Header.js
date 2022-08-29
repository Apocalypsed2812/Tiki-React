import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faUser, faCaretDown, faCartShopping, faHouse } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to="/" className={cx('logo-link')}>
                    <img
                        src="https://salt.tikicdn.com/ts/upload/ae/f5/15/2228f38cf84d1b8451bb49e2c4537081.png"
                        alt="Tiki"
                    />
                    <img
                        src="https://salt.tikicdn.com/ts/upload/e5/1d/22/61ff572362f08ead7f34ce410a4a6f96.png"
                        alt="FreeShip"
                    />
                </Link>
                <div className={cx('search-cart')}>
                    <div className={cx('search')}>
                        <div className={cx('with-search')}>
                            <input
                                type="text"
                                placeholder="Tìm kiếm sản phẩm, danh mục hay thương hiệu mong muốn ..."
                            />
                            <button>
                                <FontAwesomeIcon icon={faMagnifyingGlass} className={cx('icon-search')} />
                                Tìm kiếm
                            </button>
                        </div>
                        <div className={cx('search-category')}>
                            <span>Trái cây</span>
                            <span>Trái cây</span>
                            <span>Trái cây</span>
                            <span>Trái cây</span>
                            <span>Trái cây</span>
                            <span>Trái cây</span>
                            <span>Trái cây</span>
                            <span>Trái cây</span>
                            <span>Trái cây</span>
                            <span>Trái cây</span>
                        </div>
                    </div>
                    <div className={cx('auth')}>
                        <FontAwesomeIcon icon={faUser} className={cx('icon-user')} />
                        <div className={cx('auth-action')}>
                            <span>Đăng Nhập</span>/<span>Đăng kí</span>
                            <p>
                                Tài khoản <FontAwesomeIcon icon={faCaretDown} className={cx('icon-down')} />
                            </p>
                        </div>
                    </div>
                    <div className={cx('cart')}>
                        <div className={cx('cart-top')}>
                            <div className={cx('cart-wrap')}>
                                <FontAwesomeIcon icon={faCartShopping} className={cx('icon-cart')} />
                                <span className={cx('cart-badget')}>4</span>
                            </div>
                            <p>Giỏ Hàng</p>
                        </div>
                        <div className={cx('cart-bottom')}>
                            <FontAwesomeIcon icon={faHouse} className={cx('icon-house')} />
                            Bán hàng cùng tiki
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
