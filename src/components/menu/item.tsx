import * as React from 'react';
import classNames from 'classnames';

import Link from '../link';

import { MenuItemStyled } from './menu-styled';

export interface IProps {
	as?: any;
	children?: React.ReactNode;
	to?: string;
	href?: string;
	onClick?: (e: React.SyntheticEvent) => void;
	active?: boolean;
}

const MenuItem: React.FC<IProps> = ({ children, active, ...rest }) => {
	return (
		<MenuItemStyled
			as={Link}
			className={classNames({
				active
			})}
			{...rest}
		>
			{children}
		</MenuItemStyled>
	);
};

export default MenuItem;
