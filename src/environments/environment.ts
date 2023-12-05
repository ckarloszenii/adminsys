// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// import * as config from 'assets/url_server.json';

import { URLS } from "src/assets/config";

const url_server = URLS.url_dev;
// const url_php = 'https://sihpdf.192.168.1.2.xip.io';
export const environment = {
  production: true,
  ipPhp: URLS.url_php,
  apiUrl: url_server + 'front/rest',
  ipServer: url_server + 'front/static/index.html',
  ipLogin: url_server + 'front/static/pms',
  ipLogout: url_server + 'front/static/auth/j_spring_security_logout',
  ipLoginProgress: url_server + 'front/static/auth/j_spring_security_check',
  urlMenu: 'menuUsr',
  // urlMenu: 'menu',
  timeout: 6000000
};
