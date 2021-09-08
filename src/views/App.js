import React, { useState } from "react";
import { Table } from "../components";
import { AppContainer } from "../GlobalStyle";
import data from "../mockdata.json";

const App = () => {
  const [komunitas, setKomunitas] = useState(data);
  return (
    <AppContainer>
      <h2>List Of Community</h2>
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
            <Table.TR>
              <Table.TD>{item.communityName}</Table.TD>
              <Table.TD>{item.typeOfCommunity}</Table.TD>
              <Table.TD>{item.location}</Table.TD>
              <Table.TD>{item.phoneNumber}</Table.TD>
              <Table.TD>{item.email}</Table.TD>
              <Table.TD>
                <button>Edit</button>
                <button>Delete</button>
              </Table.TD>
            </Table.TR>
          ))}
        </Table.Body>
      </Table>
      <div className="action">
        <button>Add New Community</button>
      </div>
    </AppContainer>
  );
};

export default App;
