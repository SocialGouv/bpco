import envConfig from "react-native-config";
import { version, buildNumber } from "../package.json";

const SCHEME = __DEV__ ? "http" : "https";
const HOST = __DEV__ ? "localhost:3000" : "api-bpco.fabrique.social.gouv.fr";
const APP_ENV = __DEV__ ? "local" : "production";
const VERSION = version;
const BUILD_NUMBER = buildNumber;
const SENTRY_DSN =
  "https://17ade30c8dc343ceb3e36c7fbcab9cca@sentry.fabrique.social.gouv.fr/86";

export { SCHEME, HOST, APP_ENV, VERSION, BUILD_NUMBER, SENTRY_DSN };
