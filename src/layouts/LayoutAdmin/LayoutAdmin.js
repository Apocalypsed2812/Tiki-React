import classNames from 'classnames/bind';

import styles from './LayoutAdmin.module.scss';
import { HeaderAdmin } from '../components/HeaderAdmin';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';

const cx = classNames.bind(styles);

function LayoutAdmin({ children }) {
    return (
        <div>
            <HeaderAdmin />
            <div className={cx('container')}> {children}</div>
            <Footer />
        </div>
    );
}

export default LayoutAdmin;
