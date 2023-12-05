import { URLS } from "src/assets/config";

const url_server = URLS.url_prod;

export const environment = {
  production: true,
  ipPhp: URLS.url_php,
  apiUrl:   url_server + 'front/rest',
  ipServer: url_server + 'front/static/index.html',
  ipLogin:  url_server + 'front/static/auth/login.html',
  ipLogout: url_server + 'front/static/auth/j_spring_security_logout',
  ipLoginProgress: '/front/static/auth/j_spring_security_check',
  urlMenu:  'menuUsr',
  timeout: 6000000
};
