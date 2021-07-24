import * as React from 'react';

import useTheme from '../../hooks/useTheme';

import { LayoutStyled } from './layout-styled';

export interface IProps {
	before?: React.ReactNode;
	children?: React.ReactNode;
	after?: React.ReactNode;
	minHeight?: string;
}

const Layout: React.FC<IProps> = ({
	before,
	children,
	after,
	minHeight = '100vh'
}) => {
	const theme = useTheme();

	return (
		<LayoutStyled minHeight={minHeight}>
			{before}
			<div
				id="main"
				style={{
					flexGrow: 1,
					padding: `${theme.unit * 2}px ${theme.unit * 3}px`,
					background: theme.color.accent.bgHover
				}}
			>
				{children}
			</div>
			{after}
		</LayoutStyled>
	);
};

export default Layout;
