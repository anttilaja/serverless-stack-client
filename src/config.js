export default {
  s3: {
    REGION: "eu-north-1",
    BUCKET: "notes-app-upload-serverless-app"
  },
  apiGateway: {
    REGION: "eu-north-1",
    URL: "https://uadaimga60.execute-api.eu-north-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "eu-west-2",
    USER_POOL_ID: "eu-west-2_tmarEAa98",
    APP_CLIENT_ID: "6kb14bciqu5gd2psot31sog8us",
    IDENTITY_POOL_ID: "eu-west-2:89cec5ea-86e5-4758-be89-0eec4927db2b"
  }
};