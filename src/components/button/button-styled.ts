import styled from 'styled-components';

import { IProps } from '.';

export const ButtonStyled = styled.button<IProps>(({ theme }) => ({
	// base
	...theme.pattern.resetButton,
	...theme.transition.box,
	...theme.pattern.regularButton,
	minWidth: 8 * theme.unit,
	fontWeight: theme.font.weights.bold,
	color: theme.color.baseInverse,
	backgroundColor: theme.color.core.neutral[1],
	border: `${theme.ui.borderWidthThick}px solid ${theme.color.core.neutral[1]}`,
	borderRadius: theme.ui.borderRadius,
	textAlign: 'center',
	':not([disabled]):hover, :not([disabled]):focus': {
		backgroundColor: theme.color.core.neutral[2],
		borderColor: theme.color.core.neutral[2]
	},

	// variants
	'&.primary': {
		color: theme.color.base,
		backgroundColor: theme.color.core.primary[3],
		border: `${theme.ui.borderWidthThick}px solid ${theme.color.core.primary[3]}`,
		':not([disabled]):hover, :not([disabled]):focus': {
			backgroundColor: theme.color.core.primary[4],
			borderColor: theme.color.core.primary[4]
		}
	}
}));
