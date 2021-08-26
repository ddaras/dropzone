import styled from 'styled-components';

import { IProps } from '.';

export const CardStyled = styled.div<IProps>(({ theme }) => ({
	...theme.pattern.box,
	background: theme.color.accent.bg,
	overflow: 'hidden',

	'&.clickable': {
		cursor: 'pointer'
	},

	'&.hasRemove': {
		position: 'relative',
		'> .removeButton': {
			...theme.transition.fade,
			opacity: 0,
			position: 'absolute',
			right: '6px',
			top: '6px'
		}
	},

	':hover': {
		'.removeButton': {
			opacity: 1
		}
	}
}));
