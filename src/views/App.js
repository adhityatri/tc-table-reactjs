import React, { useState } from "react";
import { Table } from "../components";
import { AppContainer } from "../GlobalStyle";
import data from "../mockdata.json";

const App = () => {
  const [komunitas, setKomunitas] = useState(data);
  return (
    <AppContainer>
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
              <Table.TH>{item.communityName}</Table.TH>
              <Table.TH>{item.typeOfCommunity}</Table.TH>
              <Table.TH>{item.location}</Table.TH>
              <Table.TH>{item.phoneNumber}</Table.TH>
              <Table.TH>{item.email}</Table.TH>
              <Table.TH>
                <button>Edit</button>
                <button>Delete</button>
              </Table.TH>
            </Table.TR>
          ))}
        </Table.Body>
      </Table>
    </AppContainer>
  );
};

export default App;
