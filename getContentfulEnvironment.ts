const dotenv = require("dotenv");
const assert = require("assert").strict;
const contentfulManagement = require("contentful-management");
const EnvironmentGetter = require("contentful-typescript-codegen");

dotenv.config();
console.log(process.env);

const {
  CONTENTFUL_MANAGEMENT_API_ACCESS_TOKEN,
  CONTENTFUL_SPACE_ID,
  CONTENTFUL_ENVIRONMENT,
} = process.env;

console.log("Access Token:", CONTENTFUL_MANAGEMENT_API_ACCESS_TOKEN);
console.log("Space ID:", CONTENTFUL_SPACE_ID);
console.log("Environment:", CONTENTFUL_ENVIRONMENT);

assert(CONTENTFUL_MANAGEMENT_API_ACCESS_TOKEN);
assert(CONTENTFUL_SPACE_ID);
assert(CONTENTFUL_ENVIRONMENT);

const getContentfulEnvironment = async () => {
  const contentfulClient = contentfulManagement.createClient({
    accessToken: CONTENTFUL_MANAGEMENT_API_ACCESS_TOKEN,
  });

  const space = await contentfulClient.getSpace(CONTENTFUL_SPACE_ID);
  return space.getEnvironment(CONTENTFUL_ENVIRONMENT);
};

module.exports = getContentfulEnvironment;
