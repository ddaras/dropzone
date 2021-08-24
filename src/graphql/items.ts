import gql from 'graphql-tag';

const ITEMS = gql`
	query items {
		items {
            id
            title
            price
            quantity
            currency
            description
            files {
                id
                src
            }
		}
	}
`;

export default ITEMS;
