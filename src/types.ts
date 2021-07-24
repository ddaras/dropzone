export type ThemeModes = {
	light: 'light';
	dark: 'dark';
};

export type Hexcode = string;

export type ColorRange = [
	Hexcode,
	Hexcode,
	Hexcode,
	Hexcode,
	Hexcode,
	Hexcode,
	Hexcode
];

export type StyleBlock = {
	[key: string]: string | number;
};

export type Theme = {
	color: {
		accent: {
			bg: Hexcode;
			bgHover: Hexcode;
			bgError: Hexcode;
			blackout: string;
			border: Hexcode;
			borderActive: Hexcode;
			borderHover: Hexcode;
			borderError: Hexcode;
			outline: Hexcode;
			text: Hexcode;
			textActive: Hexcode;
			textError: Hexcode;
		};
		base: Hexcode;
		baseInverse: Hexcode;
		core: {
			danger: ColorRange;
			neutral: ColorRange;
			primary: ColorRange;
			secondary: ColorRange;
			success: ColorRange;
			warning: ColorRange;
		};
		clear: Hexcode;
		muted: Hexcode;
	};
	font: {
		fontFamily: string;
		title1: StyleBlock;
		title2: StyleBlock;
		title3: StyleBlock;
		textLarge: StyleBlock;
		textRegular: StyleBlock;
		textSmall: StyleBlock;
		textMicro: StyleBlock;
		textReset: StyleBlock;
		weights: {
			thin: number;
			light: number;
			medium: number;
			semibold: number;
			bold: number;
			black: number;
		};
	};
	pattern: {
		box: StyleBlock;
		disabled: StyleBlock;
		focused: StyleBlock;
		themedFocus: StyleBlock;
		invalid: StyleBlock;
		offscreen: StyleBlock;
		resetButton: StyleBlock;
		smallButton: StyleBlock;
		regularButton: StyleBlock;
		largeButton: StyleBlock;
	};
	breakpoints: {
		[name: string]: number;
	};
	responsive: {
		large: string;
		medium: string;
		small: string;
		xsmall: string;
	};
	transition: {
		box: StyleBlock;
		fade: StyleBlock;
	};
	ui: {
		border: string;
		borderThick: string;
		borderRadius: number;
		borderRadiusRounded: number;
		borderRadiusThick: number;
		borderWidth: number;
		borderWidthThick: number;
		boxShadow: string;
		boxShadowMedium: string;
		boxShadowLarge: string;
		disabledOpacity: number;
		transitionTime: string;
	};
	unit: number;
};
