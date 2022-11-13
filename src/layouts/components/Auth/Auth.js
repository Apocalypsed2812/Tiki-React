import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import { Link, useNavigate } from 'react-router-dom';
import HeadlessTippy from '@tippyjs/react/headless';
import { useState, useContext } from 'react';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import { GlobalState } from '~/context/GlobalState';
import styles from './Auth.module.scss';

const cx = classNames.bind(styles);

function Auth({ onClickLogin, onClickRegister }) {
    const navigate = useNavigate();
    const state = useContext(GlobalState);
    const [isLogin, setIsLogin] = state.UserAPI.login;
    const user = state.UserAPI.user[0];

    const [showResult, setShowResult] = useState(false);

    const handleHideResult = () => {
        setShowResult(false);
    };

    const handleShowResult = () => {
        setShowResult(true);
    };

    const handleLogOut = () => {
        localStorage.clear();
        setIsLogin(false);
        navigate('/login');
    };

    return (
        <div className={cx('auth')}>
            <FontAwesomeIcon icon={faUser} className={cx('icon-user')} />
            <div className={cx('auth-action')}>
                {isLogin ? (
                    <Link to="" className={cx('auth-action-link')} onClick={handleLogOut}>
                        Đăng Xuất
                    </Link>
                ) : (
                    <>
                        <Link to="/login" onClick={onClickLogin} className={cx('auth-action-link')}>
                            Đăng Nhập /
                        </Link>
                        <Link to="/register" onClick={onClickRegister} className={cx('auth-action-link')}>
                            Đăng kí
                        </Link>
                    </>
                )}
                <HeadlessTippy
                    interactive
                    visible={showResult}
                    placement={'top-end'}
                    render={(attrs) => (
                        <div className={cx('auth-list')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <Link to="/order" className={cx('auth-item')}>
                                    Đơn hàng của tôi
                                </Link>
                                <Link to="" className={cx('auth-item')}>
                                    Thông báo của tôi
                                    <span className={cx('auth-item-badget')}>0</span>
                                </Link>
                                <Link to="/account" className={cx('auth-item')}>
                                    Tài khoản của tôi
                                </Link>
                                <Link to="" className={cx('auth-item')}>
                                    Thoát tài khoản
                                </Link>
                            </PopperWrapper>
                        </div>
                    )}
                    onClickOutside={handleHideResult}
                >
                    <p className={cx('auth-account')} onMouseOver={handleShowResult}>
                        Tài khoản <FontAwesomeIcon icon={faCaretDown} className={cx('icon-down')} />
                    </p>
                </HeadlessTippy>
            </div>
        </div>
    );
}

export default Auth;
