import * as React from 'react';
import classNames from 'classnames';

import Item from './item';

import { MenuStyled } from './menu-styled';

export interface IProps {
	children?: React.ReactNode;
	borderLess?: boolean;
}

const Menu: React.FC<IProps> = ({ children, borderLess = false }) => {
	return (
		<MenuStyled
			className={classNames({
				box: !borderLess
			})}
			borderLess={borderLess}
		>
			{children}
		</MenuStyled>
	);
};

export default Menu;

export { Item as MenuItem };
