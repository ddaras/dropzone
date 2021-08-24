import React from 'react';
import classNames from 'classnames';

import useTheme from '@/hooks/useTheme';

import { IconButtonStyled } from './styled';

export type IconButtonProps = {
	children: React.ReactChild;
	primary?: boolean;
	onClick?: (e: React.SyntheticEvent) => void;
};

function IconButton({ children, primary, ...rest }: IconButtonProps) {
	const theme = useTheme();

	return (
		<IconButtonStyled
			{...rest}
			className={classNames({
				primary
			})}
		>
			{children}
		</IconButtonStyled>
	);
}

export default IconButton;
