import { useState } from "react";
import { useUpdateUserPermissions } from "../../../hooks/userHooks";
import { POSSIBLE_PERMITIONS } from "../constants";

const UserPermission = ({ user }) => {
  const [permissions, setPermissions] = useState(user.permissions);
  const {
    updatePermissions,
    loading,
    error,
    data,
  } = useUpdateUserPermissions();
  const handleOnChange = (event) => {
    const { name, checked } = event.target;
    let newPermissions = checked
      ? [...permissions, name]
      : [...permissions.filter((permission) => permission !== name)];

    setPermissions(newPermissions);
  };

  const handleUpdatePermissions = () => {
    updatePermissions({ variables: { permissions, userId: user.id } });
  };

  return (
    <tr className="border px-4 py-2">
      <td>{user.name}</td>
      <td>{user.email}</td>
      {POSSIBLE_PERMITIONS.map((permission, index) => (
        <td key={index} className="text-center">
          <input
            name={permission}
            type="checkbox"
            onChange={handleOnChange}
            checked={permissions.includes(permission)}
          />
        </td>
      ))}
      <td>
        <button
          className={`p-2 font-bold rounded bg-red-500 text-white ${
            loading && "disabled"
          }`}
          onClick={handleUpdatePermissions}
        >
          Update
        </button>
      </td>
    </tr>
  );
};

export default UserPermission;
