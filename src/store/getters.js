const getters = {
  sidebar: state => state.app.sidebar,
  navBarList: state => state.app.navBarList,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  roles: state => state.user.roles,
  permission_routes: state => state.permission.routes //根据权限生成的路由
}
export default getters