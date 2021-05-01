/*
default_temp {
  MAX_ATTACHMENT_SIZE: 5000000,
  STRIPE_KEY: "pk_test_51HRZgDJi97rcgRJiYqvh0jBrp1h1NyRzLwRVvzJjQJMWozwrq0BGEce3lj9jpuVKweNN0nky06QejwJV1KBCgwuq00Ig1gMuvW",
  s3: {
    REGION: "eu-west-1",
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

const dev = {
 STRIPE_KEY: "pk_test_51HRZgDJi97rcgRJiYqvh0jBrp1h1NyRzLwRVvzJjQJMWozwrq0BGEce3lj9jpuVKweNN0nky06QejwJV1KBCgwuq00Ig1gMuvW",
  s3: {
    REGION: "eu-west-2",
    BUCKET: "dev-notes-infra-s3-uploads4f6eb0fd-1t063vk5at3ik"
  },
  apiGateway: {
    REGION: "eu-west-2",
    URL: "https://69i5g5xvf1.execute-api.eu-west-2.amazonaws.com/dev"
  },
  cognito: {
    REGION: "eu-west-2",
    USER_POOL_ID: "eu-west-2_NqNqT5yfA",
    APP_CLIENT_ID: "6ea4loef5s22oq079vssqtnm6v",
    IDENTITY_POOL_ID: "eu-west-2:9e74db9e-a8c3prod-notes-infra-s3-uploads4f6eb0fd-em4iy7qlfldy-4887-81b7-5b973c6af647"
  },
  social: {
    FB: "702023680442825"
  }
};

const prod = {
  STRIPE_KEY: "pk_test_51HRZgDJi97rcgRJiYqvh0jBrp1h1NyRzLwRVvzJjQJMWozwrq0BGEce3lj9jpuVKweNN0nky06QejwJV1KBCgwuq00Ig1gMuvW",
  s3: {
    REGION: "eu-west-2",
    BUCKET: "prod-notes-infra-s3-uploads4f6eb0fd-em4iy7qlfldy"
  },
  apiGateway: {
    REGION: "eu-west-2",
    URL: "https://mrhwkjc4ze.execute-api.eu-west-2.amazonaws.com/prod"
  },
  cognito: {
    REGION: "eu-west-2",
    USER_POOL_ID: "eu-west-2_2kjw5HNNW",
    APP_CLIENT_ID: "4ak3ho44mt6a2os0b99n8s22ti",
    IDENTITY_POOL_ID: "eu-west-2:31bcec4e-0e64-43da-825b-78140d9cfb65"
  },
  social: {
    FB: "702023680442825"
  }
};   */



const dev = {
 STRIPE_KEY: "pk_test_51HRZgDJi97rcgRJiYqvh0jBrp1h1NyRzLwRVvzJjQJMWozwrq0BGEce3lj9jpuVKweNN0nky06QejwJV1KBCgwuq00Ig1gMuvW",
  s3: {
    REGION: "eu-west-2",
    BUCKET: "dev-notes-infra-s3-uploads4f6eb0fd-zf2fkonvsrqc"
  },
  apiGateway: {
    REGION: "eu-west-2",
    URL: "https://bsjeqihzte.execute-api.eu-west-2.amazonaws.com/dev"
  },
  cognito: {
    REGION: "eu-west-2",
    USER_POOL_ID: "eu-west-2_xbKOAdq4j",
    APP_CLIENT_ID: "338itjn2tk8gal63ii5454fm9j",
    IDENTITY_POOL_ID: "eu-west-2:0e871c26-b29e-4946-ac82-d64013bba6e5"
  },
  social: {
    FB: "702023680442825"
  }
};

const prod = {
  STRIPE_KEY: "pk_test_51HRZgDJi97rcgRJiYqvh0jBrp1h1NyRzLwRVvzJjQJMWozwrq0BGEce3lj9jpuVKweNN0nky06QejwJV1KBCgwuq00Ig1gMuvW",
  s3: {
    REGION: "eu-west-2",
    BUCKET: "prod-notes-infra-s3-uploads4f6eb0fd-k39cpuqr1gkh"
  },
  apiGateway: {
    REGION: "eu-west-2",
    URL: "https://egs0l327v4.execute-api.eu-west-2.amazonaws.com/prod"
  },
  cognito: {
    REGION: "eu-west-2",
    USER_POOL_ID: "eu-west-2_J7Y2Ahlcr",
    APP_CLIENT_ID: "2lj7b4emiap2ftvcgvhp0uug98",
    IDENTITY_POOL_ID: "eu-west-2:77db5354-010b-4580-9ea1-590a735583eb"
  },
  social: {
    FB: "702023680442825"
  }
};

// Default to dev if not set
const config =process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;


export default {
  // Add common config values here
  MAX_ATTACHMEN_SIZE: 5000000,
  ...config
};
