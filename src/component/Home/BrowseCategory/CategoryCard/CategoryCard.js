import classNames from 'classnames/bind';

import styles from './CategoryCard.module.scss';

const cx = classNames.bind(styles);

function CategoryCard({ data, wrapperstyle = '', innerstyle = '', isActive, onClick }) {
    const imgsrc = require('~/public/uploads/categoriesicon/caseicon.png');

    const handleCardClick = () => {
        onClick(data._id);
    };
    return (
        <div className={cx('wrapper', wrapperstyle, { active: isActive })} onClick={handleCardClick}>
            <div className={cx('inner', innerstyle)}>
                {/* img */}
                <img src={data.img} className={cx('img')} />
                {/* name */}
                <h4 className={cx('name')}>{data.name}</h4>
            </div>
        </div>
    );
}

export default CategoryCard;
