import styled, { keyframes, css } from 'styled-components';

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const animation = css`
	${rotate360} 1s linear infinite
`;

export const LoaderStyled = styled.div(
	({ theme }) => ({
		transform: 'translateZ(0)',
		borderTop: `2px solid ${theme.color.core.primary[1]}`,
		borderRight: `2px solid ${theme.color.core.primary[1]}`,
		borderBottom: `2px solid ${theme.color.core.primary[1]}`,
		borderLeft: `2px solid ${theme.color.core.primary[3]}`,
		background: 'transparent',
		width: '24px',
		height: '24px',
		borderRadius: '50%',

		'&.inline': {
			display: 'inline-block'
		}
	}),
	css`
		animation: ${animation};
	`
);
