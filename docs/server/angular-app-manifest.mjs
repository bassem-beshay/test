
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/test/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/test"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 24055, hash: '0212a9fcb66ffdc681e724d3eaaa2d5a03a85d290aa9b2bf5c25d703b7f1953f', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17630, hash: '4181b34ee5a3654aa5e16efe0887ab99b7d485dc21089ab2a7518c8086cea612', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 30735, hash: '48e15447f9126e2b96d104c1060a42464a9ba0d20048c976145cb794f2b1715e', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-76IBYPWT.css': {size: 6979, hash: 'LAGSYXkKM6k', text: () => import('./assets-chunks/styles-76IBYPWT_css.mjs').then(m => m.default)}
  },
};
