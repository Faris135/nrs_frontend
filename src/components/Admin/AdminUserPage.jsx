import React, { useState, useEffect } from "react";
import UsersList from "../UsersList.jsx";
import NavBar from "../NavBar.jsx";
import UserSideBar from "../UserSideBar.jsx";
import ProductsService from "../ProductsService.js";
import AuthService from "../auth.service";

const AdminUserPage = (props) => {
  var [users, setUsers] = useState([]);

  const getUsers = () => {
    const fetchData = async () => {
      console.log(ProductsService.getUsers());

      const data = await ProductsService.getUsers();
      setUsers(data);
      console.log(data);
    };
    fetchData();
  };

  useEffect(() => {
    getUsers();
  }, []);

  const removeUserFromList = (user) => {
    // const newUsers = users.filter((item) => {
    //  return item.id !== userId;
    //});
    ProductsService.removeUser(user);
    //setUsers(newUsers.concat());
    getUsers();
  };

  const logout = () => {
    AuthService.logout();
    props.history.push("/");
    window.location.reload();
  };

  return (
    <div>
      <NavBar logout={logout}></NavBar>
      <div className="lista">
        <UsersList
          users={users}
          removeUserFromList={removeUserFromList}
        ></UsersList>
      </div>
      <UserSideBar></UserSideBar>
    </div>
  );
};
export default AdminUserPage;
