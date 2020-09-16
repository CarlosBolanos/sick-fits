import Router from "next/router";
import { useMe } from "../../hooks/userHooks";
import UsersPermissionList from "../../components/Admin/UsersPermissions/UsersPermissionList";

const AdminHome = () => {
  const { loading, user } = useMe();

  if (loading) {
    return <div>Loading</div>;
  }

  if (!loading && !user.isLoggedIn) {
    Router.push("/auth/signin");
  }

  if (!loading && user.isLoggedIn && !user.permissions.includes("ADMIN")) {
    Router.push("/forbidden");
  }

  return (
    <div>
      {" "}
      <h1>Admin page</h1>
      <UsersPermissionList />
    </div>
  );
};

export default AdminHome;
