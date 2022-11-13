import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faArrowRightToBracket,
    faBars,
    faCartShopping,
    faHouse,
    faMoneyBill,
    faProcedures,
    faRightToBracket,
    faStore,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect, useLocation, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
//import { getDatabase, ref, child, get, set, remove } from 'firebase/database';
import { ToastContainer, toast } from 'react-toastify';
import Swal from 'sweetalert2';
//import HeadlessTippy from '@tippyjs/react/headless';
//import 'bootstrap/dist/css/bootstrap.min.css';

//import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './HeaderAdmin.module.scss';
import Search from '../Search';
import Auth from '../Auth';
import { GlobalState } from '~/context/GlobalState';

const cx = classNames.bind(styles);

function Header() {
    // const dbRef = ref(getDatabase());
    const [currentUser, setCurrentUser] = useState(false);
    const navigate = useNavigate();
    const state = useContext(GlobalState);
    const setIsLogin = state.UserAPI.login[1];
    const setIsAdmin = state.UserAPI.admin[1];

    const handleLogOut = (e) => {
        e.preventDefault();
        localStorage.clear();
        setIsLogin(false);
        setIsAdmin(false);
        navigate('/login');
    };

    return (
        <>
            <header className={cx('wrapper')}>
                <ul className={cx('header__list')}>
                    <li className={cx('header__item')}>
                        <Link to="/admin" className={cx('header__item-link')}>
                            <FontAwesomeIcon icon={faHouse} className={cx('header__item-icon')} />
                            Trang Chủ
                        </Link>
                    </li>
                    <li className={cx('header__item')}>
                        <Link to="/admin/product" className={cx('header__item-link')}>
                            <FontAwesomeIcon icon={faProcedures} className={cx('header__item-icon')} />
                            Sản Phẩm
                        </Link>
                    </li>
                    {/* <li className={cx('header__item')}>
                        <Link to="/admin/category" className={cx('header__item-link')}>
                            <FontAwesomeIcon icon={faBars} className={cx('header__item-icon')} />
                            Danh Mục
                        </Link>
                    </li> */}
                    <li className={cx('header__item')}>
                        <Link to="/admin/user" className={cx('header__item-link')}>
                            <FontAwesomeIcon icon={faUser} className={cx('header__item-icon')} />
                            Người Dùng
                        </Link>
                    </li>
                    {/* <li className={cx('header__item')}>
                        <Link to="/order" className={cx('header__item-link')}>
                            <FontAwesomeIcon icon={faMoneyBill} className={cx('header__item-icon')} />
                            Đơn Hàng
                        </Link>
                    </li> */}
                    <li className={cx('header__item')}>
                        <Link to="" className={cx('header__item-link')} onClick={handleLogOut}>
                            <FontAwesomeIcon icon={faRightToBracket} className={cx('header__item-icon')} />
                            Đăng Xuất
                        </Link>
                    </li>
                </ul>
                <ToastContainer />
            </header>

            {/* <Modal show={showLogin} onHide={handleCloseLogin}>
                <Modal.Header closeButton>
                    <Modal.Title>Đăng Nhập</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className={cx('form-group')}>
                        <input
                            className={cx('form-control')}
                            name="username"
                            placeholder="Nhập username của bạn"
                            onChange={setUsernameAdmin}
                            value={username}
                            required
                        />
                    </div>
                    <div className={cx('form-group')}>
                        <input
                            className={cx('form-control')}
                            name="password"
                            placeholder="Nhập mật khẩu của bạn"
                            onChange={setPasswordAdmin}
                            value={password}
                            required
                        />
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseLogin}>
                        Close
                    </Button>
                    <Button variant="success" onClick={login}>
                        Login
                    </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={showLogout} onHide={handleCloseLogout}>
                <Modal.Header closeButton>
                    <Modal.Title>Đăng Xuất</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className={cx('form-group')}>
                        <p>Bạn có chắc là muốn đăng xuất không ?</p>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseLogout}>
                        Close
                    </Button>
                    <Button variant="danger" onClick={logout}>
                        Logout
                    </Button>
                </Modal.Footer>
            </Modal> */}
        </>
    );
}

export default Header;
