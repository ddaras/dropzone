import styled from 'styled-components';

import { IProps as IMenuProps } from '.';
import { IProps as IMenuItemProps } from './item';

export const MenuStyled = styled.ul<IMenuProps>(({ theme }) => ({
	margin: 0,
	padding: `${theme.unit}px 0`,
	backgroundColor: theme.color.accent.bg,
	listStyle: 'none',

	// variants
	'&.box': {
		...theme.pattern.box
	}
}));

export const MenuItemStyled = styled.li<IMenuItemProps>(({ theme }) => ({
	...theme.transition.box,
	...theme.font.textRegular,
	width: '100%',
	padding: `${theme.unit}px ${1.5 * theme.unit}px`,
	border: 0,
	textAlign: 'left',
	backgroundColor: 'transparent',
	textDecoration: 'none',
	outlineOffset: '-3px',
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center',
	color: theme.color.accent.text,

	':hover': {
		backgroundColor: theme.color.accent.bgHover,
		color: theme.color.core.neutral[6]
	},

	'&.clickable': {
		cursor: 'pointer'
	},

	// variants
	'&.active': {
		backgroundColor: theme.color.accent.bgHover,
		fontWeight: theme.font.weights.bold
	}
}));
