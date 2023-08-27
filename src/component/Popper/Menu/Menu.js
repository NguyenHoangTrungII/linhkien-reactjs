import { useState } from 'react';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';

import styles from './Menu.module.scss';
import { Wrapper as PopperWrapper } from '~/component/Popper';
import Header from './Header';
import MenuItem from './MenuItem';

const cx = classNames.bind(styles);

const defaulthandler = {};

function Menu({ children, items = [], hideOnClick = false, onChange = defaulthandler }) {
    const [history, setHistory] = useState([{ data: items }]);
    const current = history[history.length - 1];

    const handlerBack = () => {
        setHistory((prev) => prev.slice(0, prev.length - 1));
    };

    const renderItems = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children;

            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            setHistory((prev) => [...prev, item.children]);
                        } else {
                            onChange(item);
                        }
                    }}
                />
            );
        });
    };

    const renderResult = (attrs) => (
        <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
            <PopperWrapper className={cx('menu-popper')}>
                {history.length > 1 && <Header title={current.title} onBack={handlerBack} />}
                <div className={cx('menu-body')}>{renderItems()}</div>
            </PopperWrapper>
        </div>
    );

    const handlerRest = () => setHistory((prev) => prev.slice(0, 1));

    return (
        <Tippy
            interactive
            offset={[12, 8]}
            delay={[0, 50]}
            placement="bottom-end"
            hideOnClick={hideOnClick}
            render={renderResult}
            onHide={handlerRest}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
