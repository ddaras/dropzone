import styled from 'styled-components';

import { IProps } from '.';

export const TextStyled = styled.p<IProps>(({ theme }) => ({
	...theme.font.textReset,
	...theme.font.textRegular,
	color: theme.color.accent.text,

	// variants
	'&.title1': {
		...theme.font.title1
	},
	'&.title2': {
		...theme.font.title2
	},
	'&.title3': {
		...theme.font.title3
	}
}));
