import styled from 'styled-components';

import { IProps } from '.';

export const LayoutStyled = styled.div<IProps>(({ theme, minHeight }) => ({
	display: 'flex',
	width: '100%',
	justifyContent: 'space-between',
	minHeight
}));
