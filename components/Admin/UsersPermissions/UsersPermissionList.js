import React from "react";
import { useGetAllUsers } from "../../../hooks/userHooks";
import UserPermission from "./UserPermission";
import { POSSIBLE_PERMITIONS } from "../constants";

const UsersPermissionList = () => {
  const { loading, error, users } = useGetAllUsers();

  return (
    !loading && (
      <div>
        <h2>Manage Permissions</h2>
        <table className="table-fixed">
          <thead>
            <tr>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Email</th>
              {POSSIBLE_PERMITIONS.map((permission, index) => (
                <th key={index} className="px-4 py-2">
                  {permission}
                </th>
              ))}
              <th></th>
            </tr>
          </thead>
          {(!users || users.length === 0) && (
            <tr>
              <td>No Users Found</td>
            </tr>
          )}
          <tbody>
            {users.map((user) => (
              <UserPermission key={user.id} user={user} />
            ))}
          </tbody>
        </table>
      </div>
    )
  );
};

export default UsersPermissionList;
