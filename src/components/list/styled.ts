import styled from 'styled-components';

import { IProps } from '.';

export const ListStyled = styled.div<IProps>(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',
	listStyle: 'none',
	margin: 0,
	padding: 0,

	'&.horizontal': {
		flexDirection: 'row',
		flexWrap: 'wrap'
	},

	'&.middleAlign': {
		alignItems: 'center'
	},

	'&.gutter': {
		'> li': {
			margin: `0 ${theme.unit * 2}px 0 0`
		},

		'> li:last-child': {
			marginRight: 0
		}
	}
}));

export const ListItemStyled = styled.li<IProps>(({ theme }) => ({}));
