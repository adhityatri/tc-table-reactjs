import React, { Fragment, useState } from "react";
import { nanoid } from "nanoid";
import { Table, Button } from "../components";
import { AppContainer } from "../GlobalStyle";
import data from "../data/mockdata.json";
import tocdata from "../data/tocdata.json";
import styled from "styled-components";
import Theme from "../Theme";

const Action = styled.div`
  min-height: 40px;
  margin-top: 12px;
  padding: 0.5em;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  border-top: 2px solid orange;
`;

const Content = styled.div`
  display: flex;
  flex: 1;
  align-items: flex-start;
`;

const Head = styled.div`
  min-height: 40px;
  padding: 0.5em;
  font-weight: bold;
  border-bottom: 2px solid orange;
`;

const App = () => {
  const [komunitas, setKomunitas] = useState(data);
  const [formData, setFormData] = useState({
    id: "",
    communityName: "",
    typeOfCommunity: "",
    location: "",
    phoneNumber: "",
    email: "",
  });
  const [editId, setEditId] = useState(null);
  const [newData, setNewData] = useState(false);

  const handleEdit = (event, value) => {
    event.preventDefault();
    setFormData({
      id: value.id,
      communityName: value.communityName,
      typeOfCommunity: value.typeOfCommunity,
      location: value.location,
      phoneNumber: value.phoneNumber,
      email: value.email,
    });
    setEditId(value.id);
  };

  const handleSaveEdit = (event, value) => {
    event.preventDefault();

    const source = [...komunitas];
    const find = source.findIndex((item) => item.id === formData.id);

    if (find) {
      source[find] = formData;
      console.log(source);
      setKomunitas(source);
      setEditId(null);
    }
  };

  const handleSelect = (event) => {
    setFormData({ ...formData, typeOfCommunity: event.target.value });
  };

  const handleCancel = (event) => {
    event.preventDefault();

    setFormData({
      id: "",
      communityName: "",
      typeOfCommunity: "",
      location: "",
      phoneNumber: "",
      email: "",
    });

    setEditId(null);
    if (newData) {
      setNewData(false);
    }
  };

  const handleFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...formData };
    newFormData[fieldName] = fieldValue;

    setFormData(newFormData);
  };

  const handleDelete = (event, value) => {
    event.preventDefault();
    const source = [...komunitas];
    const index = komunitas.findIndex((item) => item.id === value.id);
    source.splice(index, 1);
    setKomunitas(source);
  };

  const handleNewData = (event) => {
    event.preventDefault();

    setNewData(true);
  };

  const handleSaveData = (event) => {
    event.preventDefault();

    const ProcessedData = {
      id: nanoid(),
      communityName: formData.communityName,
      typeOfCommunity: formData.typeOfCommunity,
      location: formData.location,
      phoneNumber: formData.phoneNumber,
      email: formData.email,
    };

    const source = [...komunitas, ProcessedData];
    setKomunitas(source);
    setNewData(false);
  };

  return (
    <AppContainer>
      <Head>
        <h3>List Of Community</h3>
      </Head>
      <Content>
        <form onSubmit={newData ? handleSaveData : handleSaveEdit}>
          <Table>
            <Table.Head>
              <Table.TR>
                <Table.TH>Community Name</Table.TH>
                <Table.TH>Type Of Community</Table.TH>
                <Table.TH>Location</Table.TH>
                <Table.TH>Phone Number</Table.TH>
                <Table.TH>Email</Table.TH>
                <Table.TH>Action</Table.TH>
              </Table.TR>
            </Table.Head>
            <Table.Body>
              {komunitas.map((item) => (
                <Fragment>
                  {editId === item.id ? (
                    <Table.TR key={item.id}>
                      <Table.TD>
                        <input
                          required="required"
                          type="text"
                          name="communityName"
                          defaultValue={item.communityName}
                          onChange={handleFormChange}
                          placeholder="Input your community name"
                        />
                      </Table.TD>
                      <Table.TD>
                        <select
                          required="required"
                          name="typeOfCommunity"
                          defaultValue={item.typeOfCommunity}
                          onChange={handleSelect}
                        >
                          {tocdata.map((item) => (
                            <option key={item.value} value={item.value}>
                              {item.label}
                            </option>
                          ))}
                        </select>
                      </Table.TD>
                      <Table.TD>
                        <input
                          required="required"
                          type="text"
                          name="location"
                          onChange={handleFormChange}
                          defaultValue={item.location}
                          placeholder="Input location"
                        />
                      </Table.TD>
                      <Table.TD>
                        <input
                          required="required"
                          type="number"
                          name="phoneNumber"
                          pattern="^0\d[0-9]*"
                          onChange={handleFormChange}
                          defaultValue={item.phoneNumber}
                          placeholder="Input a phone number"
                        />
                      </Table.TD>
                      <Table.TD>
                        <input
                          required="Email is required"
                          type="email"
                          name="email"
                          onChange={handleFormChange}
                          defaultValue={item.email}
                          placeholder="Input an email"
                        />
                      </Table.TD>
                      <Table.TD>
                        <Button
                          bg="#4CAF50"
                          color="white"
                          margin="0 5"
                          type="submit"
                        >
                          Save
                        </Button>
                        <Button onClick={handleCancel}>Cancel</Button>
                      </Table.TD>
                    </Table.TR>
                  ) : (
                    <Table.TR key={item.id}>
                      <Table.TD>{item.communityName}</Table.TD>
                      <Table.TD>{item.typeOfCommunity}</Table.TD>
                      <Table.TD>{item.location}</Table.TD>
                      <Table.TD>{item.phoneNumber}</Table.TD>
                      <Table.TD>{item.email}</Table.TD>
                      <Table.TD>
                        <Button
                          margin="0 5"
                          onClick={(event) => handleEdit(event, item)}
                        >
                          Edit
                        </Button>
                        <Button
                          bg="#F44336"
                          color="white"
                          onClick={(event) => handleDelete(event, item)}
                        >
                          Delete
                        </Button>
                      </Table.TD>
                    </Table.TR>
                  )}
                </Fragment>
              ))}
              {newData ? (
                <Table.TR>
                  <Table.TD>
                    <input
                      required="required"
                      type="text"
                      name="communityName"
                      onChange={handleFormChange}
                      placeholder="Input your community name"
                    />
                  </Table.TD>
                  <Table.TD>
                    <select
                      required="required"
                      name="typeOfCommunity"
                      onChange={handleSelect}
                    >
                      {tocdata.map((item) => (
                        <option key={item.value} value={item.label}>
                          {item.label}
                        </option>
                      ))}
                    </select>
                  </Table.TD>
                  <Table.TD>
                    <input
                      required="required"
                      type="text"
                      name="location"
                      onChange={handleFormChange}
                      placeholder="Input location"
                    />
                  </Table.TD>
                  <Table.TD>
                    <input
                      required="required"
                      type="number"
                      name="phoneNumber"
                      pattern="^0\d[0-9]*"
                      onChange={handleFormChange}
                      placeholder="Input a phone number"
                    />
                  </Table.TD>
                  <Table.TD>
                    <input
                      required="Email is required"
                      type="email"
                      name="email"
                      onChange={handleFormChange}
                      placeholder="Input an email"
                    />
                  </Table.TD>
                  <Table.TD>
                    <Button
                      bg="#4CAF50"
                      color="white"
                      margin="0 5"
                      type="submit"
                    >
                      Save
                    </Button>
                    <Button onClick={handleCancel}>Cancel</Button>
                  </Table.TD>
                </Table.TR>
              ) : null}
            </Table.Body>
          </Table>
        </form>
      </Content>
      <Action>
        <Button bg="#4CAF50" color="white" onClick={handleNewData}>
          Add New Community
        </Button>
      </Action>
    </AppContainer>
  );
};

export default App;
