import styled from 'styled-components';

import { IProps } from '.';

export const ProgressBarWrapperStyled = styled.div(({ theme }) => ({
	// paddingTop: theme.unit / 4,
	// paddingBottom: theme.unit / 4
}));

export const ProgressBarStyled = styled.div(({ theme }) => ({
	height: theme.unit / 2,
	background: theme.color.core.primary[1]
}));

export const ProgressStyled = styled.div(({ theme }) => ({
	width: 0,
	height: theme.unit / 2,
	background: theme.color.core.primary[6],
	transition: `width ${theme.ui.transitionTime}`
}));
