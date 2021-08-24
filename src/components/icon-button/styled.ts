import styled from 'styled-components';

import { IconButtonProps } from '.';

export const IconButtonStyled = styled.button<IconButtonProps>(({ theme }) => ({
	// base
	...theme.pattern.resetButton,
	...theme.transition.box,
	color: theme.color.core.neutral[6],
	padding: theme.unit / 2,
	borderRadius: theme.ui.borderRadius,

	':not([disabled]):hover, :not([disabled]):focus': {
		color: theme.color.core.primary[3],
		backgroundColor: theme.color.accent.bgHover
	},

	// variants
	'&.primary': {
		color: theme.color.base,
		backgroundColor: theme.color.core.primary[3],
		border: `${theme.ui.borderWidthThick}px solid ${theme.color.core.primary[3]}`,
		':not([disabled]):hover, :not([disabled]):focus': {
			color: theme.color.base,
			backgroundColor: theme.color.core.primary[4],
			borderColor: theme.color.core.primary[4]
		}
	}
}));
