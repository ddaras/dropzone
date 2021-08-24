import React from 'react';

import Text from '../../components/text';
import Drop from '../../components/drop';
import IconButton from '../../components/icon-button';
import Card from '../../components/card';
import Row from '../../components/row';
import Image from '../../components/image';
import IconClose from '../../components/icon/close';

import useApi from '../../hooks/useApi';

import GET_ITEMS from '../../graphql/items';

const Home = () => {
	const [files, setFiles] = React.useState<any[]>([]);

	const { data } = useApi(GET_ITEMS, {
		onCompleted: res => {
			// console.log(res);
		}
	});

	return (
		<div>
			<Text title1>Home</Text>

			<Drop
				data={files}
				onDrop={files => {
					if (files && files.length > 0) {
						Array.from(files).map(item => {
							setFiles(prev => [...prev, URL.createObjectURL(item)]);
						});
					}
				}}
				renderItem={item => (
					<div
						key={item}
						style={{
							maxWidth: '160px',
							margin: 8,
							position: 'relative'
						}}
					>
						<div style={{ position: 'absolute', right: '-10px', top: '-10px' }}>
							<IconButton
								primary
								onClick={() =>
									setFiles(prev => [...prev.filter(x => x !== item)])
								}
							>
								<IconClose />
							</IconButton>
						</div>

						<Card>
							<Image src={item} />
						</Card>
					</div>
				)}
			/>
		</div>
	);
};

export default Home;
