import styled from 'styled-components';

import { IProps } from '.';

export const CardStyled = styled.div<IProps>(({ theme }) => ({
	...theme.pattern.box,
	background: theme.color.accent.bg,
	overflow: 'hidden'
}));
