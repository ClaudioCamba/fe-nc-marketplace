import { useEffect, useState } from "react";
import { getUsers } from "../utils/ApiRequests";
import ListGroup from "react-bootstrap/ListGroup";
import Image from 'react-bootstrap/Image';

export const UserList = () => {
  const [users, setUsers] = useState([])
  useEffect(()=>{
    getUsers()
    .then((data)=>{
      setUsers(data.users);
    })
  },[])


  return (
    <ListGroup as="ul">
      {users.map((user) => {
        return (
          <ListGroup.Item key={user.username} as="li" className="product-item">
              <Image src={user.avatar_url} fluid thumbnail/>
              <div className='product-detail'>
              <h3>{user.username}</h3>
              <p>Kudos: {user.kudos}</p>
              
              </div> 
          </ListGroup.Item>
        );
      })}
    </ListGroup>
  );
};
