import * as React from 'react';

import useTheme from '../../hooks/useTheme';

interface ImageProps {
	src: string;
	width?: string;
}

const Image: React.FC<ImageProps> = ({ width = '100%', src }) => {
	const theme = useTheme();

	return <img src={src} />;
};

export default Image;
