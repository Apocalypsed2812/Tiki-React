// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEye, faPen, faStar, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
// import { useState, useEffect, useRef } from 'react';
// import { getDatabase, ref, child, get, set, remove } from 'firebase/database';
// import { list, getDownloadURL, listAll, ref as refStorage, uploadBytes } from 'firebase/storage';
// import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
import { Navigate, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

//import { storage } from '~/firebase.js';
import styles from './Home.module.scss';
import { getMethod } from '~/utils/fetchData';

const cx = classNames.bind(styles);

function Home({ isAdmin }) {
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    useEffect(() => {
        if (!isAdmin) {
            navigate('/');
        }
    }, []);
    return (
        <>
            <div className={cx('grid', 'wide')}>
                <div className={cx('row', 'mt-64')}>
                    <div className={cx('col', 'l-6')}>
                        <img
                            src="https://lelogama.go-jek.com/component/information/homeabout_KV_mobile_copy_6.jpg"
                            alt=""
                            className={cx('home-img')}
                        />
                    </div>
                    <div className={cx('col', 'l-6')}>
                        <p className={cx('text-justify')}>
                            To improve people’s lives, we don’t think adding more stuff would do any good. Quite the
                            opposite. We believe it’s about removing obstacles that make us lose focus on the things
                            that matters. Getting rid of inefficiencies, stealing time from things we rather would be
                            doing. And eliminating hassles getting in the way of us spending time with our loved ones.
                            That would do good. No more hiccups testing our temper.
                        </p>
                        <p className={cx('text-justify', 'mt-16')}>
                            No more bumps on the road draining our energy. No more friction getting to our heads.
                            Therefore we’ll always strive to make things run smoother, faster and easier. And it’s in
                            our DNA to think there’s a hack for every difficulty, a remedy for every headache and a
                            shortcut around.
                        </p>
                    </div>
                </div>

                <div className={cx('row', 'mt-64')}>
                    <div className={cx('col', 'l-6')}>
                        <h1>Want on-demand services that won't break your bank?</h1>
                        <p className={cx('mt-16')}>We're here to help – try Tiki and experience it yourself!</p>
                        <button className={cx('btn btn-outline-primary', 'mt-16')}>Download Now</button>
                    </div>

                    <div className={cx('col', 'l-6', 'mt-16')}>
                        <img
                            src="https://lelogama.go-jek.com/component/information/KV_Desktop_VN.jpg"
                            alt=""
                            className={cx('home-img')}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
