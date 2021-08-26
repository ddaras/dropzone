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

const useFakeApi = (mutationOrQuery: any, options?: IOptions) => {
	const response: IResponse = {
		call: () => {}
	};

	switch (mutationOrQuery.definitions[0].operation) {
		case 'query':
			const { data: queryData, loading: loadingQuery } = {
				data: [],
				loading: false
			};

			response.data = queryData;
			response.loading = loadingQuery;

			break;
		case 'mutation':
			const {
				call,
				data: mutationData,
				loading: loadingMutation
			} = { call: () => {}, data: [], loading: false };

			response.call = call;
			response.data = mutationData;
			response.loading = loadingMutation;

			break;
		default:
	}

	return response;
};

export default useFakeApi;
