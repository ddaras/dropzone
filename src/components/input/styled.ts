import styled from 'styled-components';

import { IProps } from '.';

export const InputStyled = styled.input<IProps>(({ theme }) => ({
	...theme.pattern.regularButton,
	...theme.transition.box,
	color: theme.color.accent.text,
	backgroundColor: theme.color.accent.bg,
	borderWidth: 2,
	borderStyle: 'solid',
	borderColor: theme.color.accent.border,
	borderRadius: theme.ui.borderRadius,
	width: '100%',
	display: 'block',

	':hover': {
		borderColor: theme.color.accent.borderHover
	},

	':focus': {
		...theme.pattern.focused
	},

	'::placeholder': {
		color: theme.color.muted
	},

	'::-ms-clear': {
		display: 'none'
	}
}));
