import styled from 'styled-components';

import { ColProps } from '.';

export const ColStyled = styled.div<ColProps>(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',

	'&.fill': {
		height: '100%',
		width: '100%'
	},

	'&.centered': {
		alignItems: 'center',
		justifyContent: 'center'
	},

	'&.padded': {
		padding: theme.unit * 3
	}
}));
