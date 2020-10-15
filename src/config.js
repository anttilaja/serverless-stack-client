export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  STRIPE_KEY: "pk_test_51HRZgDJi97rcgRJiYqvh0jBrp1h1NyRzLwRVvzJjQJMWozwrq0BGEce3lj9jpuVKweNN0nky06QejwJV1KBCgwuq00Ig1gMuvW",
  s3: {
    REGION: "eu-north-1",
    BUCKET: "notes-app-api-2-prod-serverlessdeploymentbucket-42qj5slmqqaq"
  },
  apiGateway: {
    REGION: "eu-north-1",
    URL: "https://5u72hsyh57.execute-api.eu-north-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "eu-west-2",
    USER_POOL_ID: "eu-west-2_tmarEAa98",
    APP_CLIENT_ID: "6kb14bciqu5gd2psot31sog8us",
    IDENTITY_POOL_ID: "eu-west-2:47286cac-72cb-4927-bc14-f280b7739980"
  }
};