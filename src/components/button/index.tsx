import * as React from 'react';
import classNames from 'classnames';

import Loader from '../loader';

import { ButtonStyled } from './button-styled';

export interface IProps {
	type?: 'submit' | 'reset' | 'button';
	children?: React.ReactNode;
	onClick?: (e: React.SyntheticEvent) => void;
	primary?: boolean;
	loading?: boolean;
	block?: boolean;
	small?: boolean;
}

const Button: React.FC<IProps> = ({
	type = 'button',
	children,
	primary = false,
	loading,
	block,
	small,
	...rest
}) => {
	return (
		<ButtonStyled
			className={classNames({
				primary,
				loading,
				block,
				small
			})}
			type={type}
			disabled={loading}
			{...rest}
		>
			{loading ? <Loader inline /> : children}
		</ButtonStyled>
	);
};

export default Button;
