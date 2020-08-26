import UserBar from '../UserBar/UserBar';

const UserList = ({ users, ...rest }) => {
  return (
    <div>
      {users.map((user) => (
        <UserBar key={user._id} user={user} {...rest} />
      ))}
    </div>
  );
};

export default UserList;
