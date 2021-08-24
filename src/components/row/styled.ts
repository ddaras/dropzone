import styled from 'styled-components';

import { IProps } from '.';

export const RowStyled = styled.div<IProps>(({ theme }) => ({
	display: 'flex',

	'&.fill': {
		height: '100%',
		width: '100%'
	},

	'&.centered': {
		alignItems: 'center',
		justifyContent: 'center'
	},

	'&.middleAlign': {
		alignItems: 'center'
	}
}));
