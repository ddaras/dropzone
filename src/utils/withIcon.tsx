import React, { SVGAttributes } from 'react';

export type WithIconWrapperProps = {
	size?: number | string;
	color?: string;
	inline?: boolean;
};

export type Props = {
	focusable: SVGAttributes<unknown>['focusable'];
	role: string;
	style: React.CSSProperties;
};

export default function withIcon(
	name: string
): (
	WrappedComponent: React.ComponentType<Props>
) => React.ComponentType<WithIconWrapperProps> {
	return WrappedComponent => {
		function Icon({
			color = 'currentColor',
			size = '1em',
			inline
		}: WithIconWrapperProps) {
			const props: Props = {
				focusable: false,
				role: 'img',
				style: {
					height: size,
					width: size,
					display: inline ? 'inline' : 'block',
					fill: color
				}
			};

			return <WrappedComponent {...props} />;
		}

		Icon.displayName = name;
		Icon.WrappedComponent = WrappedComponent;

		return Icon;
	};
}
