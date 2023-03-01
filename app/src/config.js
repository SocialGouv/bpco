import envConfig from "react-native-config";
import { version, buildNumber } from "../package.json";

const SCHEME = __DEV__ ? "http" : "https";
const HOST = __DEV__ ? "localhost:3000" : "";
const APP_ENV = __DEV__ ? "local" : "production";
const VERSION = version;
const BUILD_NUMBER = buildNumber;

export { SCHEME, HOST, APP_ENV, VERSION, BUILD_NUMBER };
