import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);
function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/b3f7f28c9cc346da9aea5d64b186da21.jpeg?lk3s=a5d48078&nonce=70620&refresh_token=2e4244ffd2f437ec91328bda48091b14&x-expires=1720947600&x-signature=JcHvk%2F0EmX6XReM%2Fsn19kb2E%2BZ0%3D&shp=a5d48078&shcp=81f88b70"
                alt="hoa"
                className={cx('avatar')}
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Nguyen Van A</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>nguyenvana</span>
            </div>
        </div>
    );
}

export default AccountItem;
