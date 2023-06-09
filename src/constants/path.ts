const path = {
  home: '/',
  user: '/user',
  profile: '/user/profile',
  changePassword: '/user/password',
  historyPurchase: '/user/purchase',
  login: '/login',
  register: '/register',
  logout: '/logout',
  cart: '/cart',
  products: '/products',
  productDetail: '/products/:nameId',
  contact:'/contact-us',
  sale:'/sale'
} as const
export default path
