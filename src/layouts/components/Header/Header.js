import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faHouse } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
//import HeadlessTippy from '@tippyjs/react/headless';

//import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './Header.module.scss';
import Search from '../Search';
import Auth from '../Auth';

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
                    <Search />
                    <Auth />
                    <div className={cx('cart')}>
                        <Link to="/cart" className={cx('cart-top')}>
                            <div className={cx('cart-wrap')}>
                                <FontAwesomeIcon icon={faCartShopping} className={cx('icon-cart')} />
                                <span className={cx('cart-badget')}>4</span>
                            </div>
                            <p>Giỏ Hàng</p>
                        </Link>
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
