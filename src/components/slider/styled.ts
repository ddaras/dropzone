import styled from 'styled-components';

import { IProps } from '.';

export const HANDLE_SIZE = 8;
export const TRACK_HEIGHT = 4;

export const SliderStyled = styled.div(({ theme }) => ({
	position: 'relative',
	height: 2 * theme.unit
}));

export const SliderRangeStyled = styled.input<{ leftOffset: number }>(
	({ theme, value, min, max, leftOffset }) => ({
		transform: 'translateY(-2px)', // center-align
		appearance: 'none',
		width: '100%',
		height: TRACK_HEIGHT,
		margin: 0,
		outline: 'none',
		overflow: 'visible',
		cursor: 'pointer',
		borderRadius: theme.ui.borderRadius,
		background: `linear-gradient(90deg,
		${theme.color.accent.borderActive} ${leftOffset}%,
		${theme.color.core.neutral[2]} ${leftOffset}%)`,

		'::-webkit-slider-thumb': {
			appearance: 'none',
			zIndex: 1,
			transition: `opacity ${theme.ui.transitionTime}, backgroundColor ${theme.ui.transitionTime}`,
			border: `2px solid ${theme.color.core.primary[3]}`,
			borderRadius: HANDLE_SIZE,
			backgroundColor: theme.color.accent.bg,
			width: HANDLE_SIZE,
			height: HANDLE_SIZE,
			transform: 'scale(2)' // magin happens here ))
		},

		':not([disabled]):active::-webkit-slider-thumb, :not([disabled]):focus::-webkit-slider-thumb':
			{
				// ...theme.pattern.themedFocus,
				backgroundColor: theme.color.accent.bgHover,
				borderColor: theme.color.core.primary[4]
			},

		':not([disabled]):hover::-webkit-slider-thumb': {
			backgroundColor: theme.color.accent.bgHover,
			borderColor: theme.color.core.primary[4]
		}
	})
);

export const SliderTooltipStyled = styled.div<{ leftOffset: number }>(
	({ theme, leftOffset }) => ({
		position: 'absolute',
		pointerEvents: 'none',
		marginTop: theme.unit / 2,
		marginLeft: `${leftOffset + (50 - leftOffset) / 50}%`,

		'> .tooltipContent': {
			display: 'inline-block',
			paddingTop: 0.5 * theme.unit,
			paddingRight: theme.unit,
			paddingBottom: 0.5 * theme.unit,
			paddingLeft: theme.unit,
			backgroundColor: theme.color.accent.bg,
			boxShadow: theme.ui.boxShadowMedium,
			borderRadius: theme.ui.borderRadius,
			textAlign: 'initial',
			transform: `translate(-50%, ${0.5 * theme.unit}px)`
		}
	})
);
