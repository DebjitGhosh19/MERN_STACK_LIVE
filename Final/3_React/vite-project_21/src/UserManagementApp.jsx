import React, { useEffect, useState } from 'react';
import Users from './users';

const UserManagementApp = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res)=>{
        if(!res.ok){
          throw new Error("Data not feathing")
        }
       return res.json()
      }).then((user)=>{
        setUsers(user)
        setIsLoading(false);
      }).catch((err)=>{
        setError(err.message);
        setIsLoading(false)
      })
      
  }, []);
if (isLoading) {
  return <div>Loading...</div>;
}
if (error) {
  return <div>Error: {error}</div>;
}
  

  return (
    <>
      {users.map((item) => {
        return (
          <div className='card' key={item.id}>
            <Users item={item} />
          </div>
        );
      })}
    </>
  );
};

export default UserManagementApp;