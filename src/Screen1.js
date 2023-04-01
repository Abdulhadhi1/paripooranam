import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "primereact/button";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Link } from "react-router-dom";
import { FilterMatchMode } from "primereact/api";
import { InputText } from "primereact/inputtext";

const Screen1 = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
  });

  const paginatorRight = (
    <Button
      type="button"
      icon="pi pi-refresh"
      text
      onClick={() => window.location.reload()}
    />
  );

  //
  useEffect(() => {
    async function getleads() {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/users`
      );
      console.log(response.data);
      setData(response.data);
    }

    getleads();
  }, []);

  return (
    <div>
      <div>
        <h1 className="d-flex mt-4 justify-content-center">Screen 1</h1>
      </div>

      
      <div className="d-flex my-4 justify-content-center ">
        <InputText
          className="bg-white text-black"
          placeholder="search name..."
          onInput={(e) =>
            setSearchTerm({
              global: {
                value: e.target.value,
                matchMode: FilterMatchMode.CONTAINS,
              },
            })
          }
        />
      </div>

      <div className="card">
        <DataTable
          value={data}
          sortMode="multiple"
          paginator
          filters={searchTerm}
          rows={6}
          rowsPerPageOptions={[6, 10, 25, 50]}
          tableStyle={{ minWidth: "50rem" }}
          paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
          currentPageReportTemplate="{first} to {last} of {totalRecords}"
          paginatorRight={paginatorRight}
        >
          <Column
            field="id"
            header="ID"
            style={{ width: "20%" }}
            sortable
          ></Column>
          <Column
            field="name"
            header="Name"
            style={{ width: "20%" }}
            sortable
          ></Column>
          <Column
            field="email"
            header="Email"
            style={{ width: "20%" }}
            sortable
          ></Column>
          <Column
            field="address.city"
            header="City"
            style={{ width: "20%" }}
            sortable
          ></Column>
          <Column
            field="address.street"
            header="Street"
            style={{ width: "20%" }}
            sortable
          ></Column>
           <Column
            field="address.zipcode"
            header="Zipcode"
            style={{ width: "20%" }}
            sortable
          ></Column>
        </DataTable>
      </div>
    </div>
  );
};

export default Screen1;
