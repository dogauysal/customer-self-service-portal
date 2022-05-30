import React, { Fragment, useEffect, useState } from 'react';
import logo from './logo.svg';
import '../App.css';
import { Container, Row } from 'react-bootstrap';
import SearchBar from '../components/SearchBar';
import agent from "../services/agent";
import IUser from '../models/IUser';
import ContactList from '../components/ContactList';

function App() {

  const [users, setUsers] = useState<IUser[]>([])
  const [filteredUsers, setFilteredUsers] = useState<IUser[]>([])

  useEffect(() => {
    const fetchUsers = async () => {
      await agent.Users.getAll().then((list) => {
        list.forEach(user => {
          user.fullName = user.firstName + " " + user.lastName
        })
        setUsers(list);
      })
    }

    fetchUsers()
  }, [])

  const onSearchTextChange = (text: string) => {

    if (text) {
      let filteredUsers = users.filter(u => u.fullName.toLowerCase().includes(text.toLowerCase()) || u.ssn.toLowerCase().includes(text.toLowerCase()))

      setFilteredUsers(filteredUsers)
    } else {
      setFilteredUsers([])
    }

  }

  return (

    <Fragment>
      <div className='mainContainer'>
        <Container fluid>
          <Row>
            <SearchBar onTextChange={onSearchTextChange} />
            <ContactList Users={filteredUsers} />
          </Row>
        </Container>
      </div>
    </Fragment>

  );
}

export default App;
