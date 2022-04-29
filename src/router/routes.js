
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Abertura.vue') },
      { path: 'Index', component: () => import('pages/IndexPage.vue') },
      { path: 'Login', component: () => import('pages/Login.vue') },
      { path: 'Esqueci', component: () => import('pages/Esqueci.vue') },
      { path: 'Cadastro', component: () => import('pages/Cadastro.vue') },
      { path: 'Transferir', component: () => import('pages/Transferir.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
