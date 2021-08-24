import React from 'react';

import useTheme from '@/hooks/useTheme';

export type DividerProps = {
	short?: boolean;
	hidden?: boolean;
};

/** A horizontal divider. */
export default function Divider({ short, hidden }: DividerProps) {
	const theme = useTheme();

	return (
		<div
			style={{
				width: '100%',
				padding: `${theme.unit}px 0`
			}}
		>
			<div
				style={{
					borderBottom: hidden ? 0 : theme.ui.border
				}}
			/>
		</div>
	);
}
