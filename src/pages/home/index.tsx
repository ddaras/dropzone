import React from 'react';

import Text from '../../components/text';
import Drop from '../../components/drop';
import IconButton from '../../components/icon-button';
import Card from '../../components/card';
import Row from '../../components/row';
import ListItem from '../../components/list/item';
import Image from '../../components/image';
import ProgressBar from '../../components/progress-bar';
import IconClose from '../../components/icon/close';

import useApi from '../../hooks/useApi';

import GET_ITEMS from '../../graphql/items';

const PROGRESS = [0, 10, 23, 43, 63, 78, 86, 92, 100];

const Home = () => {
	let interval: any;
	const [percent, setPercent] = React.useState(0);
	const [files, setFiles] = React.useState<any[]>([]);

	const { data } = useApi(GET_ITEMS, {
		onCompleted: res => {
			// console.log(res);
		}
	});

	React.useEffect(() => {
		let step = 0;

		if (percent === 100) {
			clearInterval(interval);
		} else {
			interval = setInterval(() => {
				setPercent(PROGRESS[step]);
				step++;
			}, 600);
		}

		return () => clearInterval(interval);
	}, [files]);

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
					<ListItem key={item} maxWidth="160px">
						<Card
							onClick={() => {
								console.log('clicked');
							}}
							onRemove={() =>
								setFiles(prev => [...prev.filter(x => x !== item)])
							}
						>
							<Image src={item} />

							<ProgressBar percent={percent} />
						</Card>
					</ListItem>
				)}
			/>
		</div>
	);
};

export default Home;
