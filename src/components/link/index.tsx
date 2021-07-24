import * as React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import classNames from 'classnames';

import { LinkStyled } from './link-styled';

export interface IProps {
	as?: any;
	children?: React.ReactNode;
	to?: string;
	href?: string;
	onClick?: (e: React.SyntheticEvent) => void;
}

const Link: React.FC<IProps> = ({ as = 'a', children, to, ...rest }) => {
	if (to) as = RouterLink;

	return (
		<LinkStyled as={as} className={classNames({})} to={to} {...rest}>
			{children}
		</LinkStyled>
	);
};

export default Link;
