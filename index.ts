// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');

// let baseUrl = 'git://github.com/cypress-io/cypress.git';
// let baseUrl = 'gitlab.com/intergral/stream/cake/ui.git';
let baseUrl = 'https://gitlab.com/snipyshino/stream/cake/ui.git?branch=somethingcompltelydifferent';

var validator = new RegExp('^\\w+:\\/\\/.+$');

const isSSH = new RegExp(/(ssh:\/\/)?git@.+:/);
console.log(isSSH.test(baseUrl));
if (isSSH.test(baseUrl)) {
  const format1 = baseUrl.replace(/:/g, '/');

  const format2 = format1.match(/[^@]\w+\.\S+/);

  console.log(format1, format2);

  if (format2) {
    baseUrl = format2[0];
  }
}
if (!validator.test(baseUrl)) {
  baseUrl = 'https://' + (baseUrl);
  console.log(baseUrl);
}

const a = new URL(baseUrl);
a.searchParams.append('branch', "master")
const protocol = a.protocol;
const pathname = a.pathname;
const hostname = a.hostname;
const href = a.href;
const host = a.host;
const hash = a.hash;
const username = a.username;
const origin = a.origin;
const password = a.password;
const port = a.port;
const search = a.search;
const searchParams = a.searchParams;
const tj = JSON.stringify(a.toJSON());

console.log(a.toJSON());

appDiv.innerHTML =
  `
<h1>SSH</h1>
<h2>protocol: ${protocol}</h2> // "protocol: %s" % protocol
<h2>pathname: ${pathname}</h2>
<h2>hostname: ${hostname}</h2>
<h2>href: ${href}</h2>
<h2>host: ${host}</h2>
<h2>hash: ${hash}</h2>
<h2>username: ${username}</h2>
<h2>origin: ${origin}</h2>
<h2>password: ${password}</h2>
<h2>port: ${port}</h2>
<h2>search: ${search}</h2>
<h2>searchParams.branch: ${searchParams.get('branch')}</h2>
<h2>JSON: ${tj}</h2>
<h2>url: ${origin+pathname}</h2>
`;