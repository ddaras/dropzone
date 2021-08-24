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

const MenuItem: React.FC<IProps> = ({
	children,
	active,
	to,
	onClick,
	...rest
}) => {
	return (
		<MenuItemStyled
			as={to || onClick ? Link : 'li'}
			className={classNames({
				active,
				clickable: onClick !== undefined
			})}
			to={to}
			onClick={onClick}
			{...rest}
		>
			{children}
		</MenuItemStyled>
	);
};

export default MenuItem;
