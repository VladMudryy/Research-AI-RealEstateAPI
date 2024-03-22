import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { RealEstateTableProps } from "../types/types";
import "./RealEstateTable.css";

const RealEstateTable: React.FC<RealEstateTableProps> = ({ data }) => {
  return (
    <TableContainer component={Paper} className="table-container">
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Property ID</TableCell>
            <TableCell>Address</TableCell>
            <TableCell>City</TableCell>
            <TableCell>State</TableCell>
            <TableCell>ZIP</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Beds</TableCell>
            <TableCell>Baths</TableCell>
            <TableCell>Sqft</TableCell>
            <TableCell>Year Built</TableCell>
            <TableCell>Property Type</TableCell>
            <TableCell>Listing Type</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((property) => (
            <TableRow key={property.propertyId}>
              <TableCell>{property.propertyId}</TableCell>
              <TableCell>{property.address}</TableCell>
              <TableCell>{property.city}</TableCell>
              <TableCell>{property.state}</TableCell>
              <TableCell>{property.zip}</TableCell>
              <TableCell>{property.price}</TableCell>
              <TableCell>{property.beds}</TableCell>
              <TableCell>{property.baths}</TableCell>
              <TableCell>{property.sqft}</TableCell>
              <TableCell>{property.yearBuilt}</TableCell>
              <TableCell>{property.propertyType}</TableCell>
              <TableCell>{property.listingType}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default RealEstateTable;
