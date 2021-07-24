import * as React from 'react';
import classNames from 'classnames';

import { ButtonStyled } from './button-styled';

export interface IProps {
	type?: 'submit' | 'reset' | 'button';
	children?: React.ReactNode;
	onClick?: (e: React.SyntheticEvent) => void;
	primary?: boolean;
}

const Button: React.FC<IProps> = ({
	type = 'button',
	children,
	onClick,
	primary = false
}) => {
	return (
		<ButtonStyled
			className={classNames({
				primary
			})}
			type={type}
			onClick={onClick}
		>
			{children}
		</ButtonStyled>
	);
};

export default Button;
