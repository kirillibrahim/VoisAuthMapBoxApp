

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from '../../redux/actions/usersActions';
import styles from './usersList.module.css'; // Import the CSS Modules file

const UserList: React.FC = () => {
  const users = useSelector((state: any) => state.users);
  const error = useSelector((state: any) => state.users.error);
console.log(users);
  const dispatch = useDispatch();

  useEffect(() => {
    // Fetch user data when the component mounts
    dispatch<any>(fetchUsers());
  }, [dispatch]);

  return (
    <div className={styles['user-list-container']}>
      <h1 className={styles['user-list-header']}>User List</h1>
      {error && <p className={styles['user-list-error']}>{error}</p>}
      {users.users && users.users.length > 0 &&
        <ul>
          {users.users.map((user: any) => (
            <li key={user.id} className={styles['user-list-item']}>
              <strong>{user.name}</strong> - {user.email}
              {/* Display other user properties here */}
            </li>
          ))}
        </ul>
      }
      
    </div>
  );
};

export default UserList;

