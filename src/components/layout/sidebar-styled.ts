import styled from 'styled-components';

import { IProps } from './sidebar';

export const SidebarStyled = styled.div<IProps>(({ theme, width }) => ({
	width,
	background: theme.color.accent.bg
}));
