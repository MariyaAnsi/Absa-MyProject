const routes = [
   {
      path: ["/", "/home"],
      exact: true,
      component: "Home",
  },
  
  {
    path:["/login"],
    component:"Login",
  },
  {
    path:["/signup"],
    component:"SignUp",
  },
  {
    path:["/dashboard"],
    component:"Dashboard",
  },
  {
    path:["/analytics"],
    component:"Analytics",
  },
  {
    path:['/predictindex'],
    component:'Predictindex'

  },


];

export default routes;


