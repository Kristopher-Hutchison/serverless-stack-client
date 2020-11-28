const config = {
	s3: {
		REGION: "us-west-2",
		BUCKET: "notes-app-upload-4",
	},
	apiGateway: {
		REGION: "us-west-2",
		URL: "https://1t517xnw07.execute-api.us-west-2.amazonaws.com/prod",
	},
	cognito: {
		REGION: "us-west-2",
		USER_POOL_ID: "us-west-2_lZD3h3Vew",
		APP_CLIENT_ID: "5gh3ken717dt5niq308egapnf9",
		IDENTITY_POOL_ID: "us-west-2:c7a8f88b-4e13-4780-800b-779d9b9483aa",
	},
};

export default config;
