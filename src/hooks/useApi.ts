import { useMutation, useQuery } from '@apollo/client';

interface IOptions {
	variables?: object;
	hasInput?: boolean;
	onSuccess?: (res: any) => void;
	onCompleted?: (data: any) => void;
}

interface IResponse {
	call: (options?: object) => any;
	data?: any;
	loading?: boolean;
}

const useApi = (mutationOrQuery: any, options?: IOptions) => {
	const response: IResponse = {
		call: () => {}
	};

	switch (mutationOrQuery.definitions[0].operation) {
		case 'query':
			const { data: queryData, loading: loadingQuery } = useQuery(
				mutationOrQuery,
				options
			);

			response.data = queryData;
			response.loading = loadingQuery;

			break;
		case 'mutation':
			const [call, { data: mutationData, loading: loadingMutation }] =
				useMutation(mutationOrQuery, options);

			response.call = call;
			response.data = mutationData;
			response.loading = loadingMutation;

			break;
		default:
	}

	return response;
};

export default useApi;
