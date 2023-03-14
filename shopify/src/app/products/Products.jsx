"use client";
import React, { useEffect, useState } from "react";
import { Table } from "@nextui-org/react";
import ProductList from "./ProductList";

export default function Products({ data }) {
  const [files, setFiles] = useState([]);
  console.log(data ? data.title : "null", "hdgksdhkf");
  useEffect(() => {
    setFiles(data);
  });
  return (
    <div>
      Products
     
      <Table
        aria-label="Example table with static content"
        css={{
          height: "auto",
          width: "100%",
          padding: "10px",
        }}
      >
        <Table.Header>
          <Table.Column>NAME</Table.Column>
          <Table.Column>ROLE</Table.Column>
          <Table.Column>STATUS</Table.Column>
        </Table.Header>
        <Table.Body>
          <Table.Row key="1">
            <Table.Cell>Tony Reichert</Table.Cell>
            <Table.Cell>CEO</Table.Cell>
            <Table.Cell>Active</Table.Cell>
          </Table.Row>
          <Table.Row key="2">
            <Table.Cell>Zoey Lang</Table.Cell>
            <Table.Cell>Technical Lead</Table.Cell>
            <Table.Cell>Paused</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
}
