import * as React from 'react';

import useTheme from '../../hooks/useTheme';

import { SidebarStyled } from './sidebar-styled';

export interface IProps {
	width?: string;
	children: NonNullable<React.ReactNode>;
}

const Sidebar: React.FC<IProps> = ({ width = '240px', children }) => {
	const theme = useTheme();

	return <SidebarStyled width={width}>{children}</SidebarStyled>;
};

export default Sidebar;
