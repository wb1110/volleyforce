// Import React, MUI components and useState hook
import React, { useState } from "react";
import {
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  Button,
} from "@mui/material";
import axios from "axios";

// Define the component that renders the form
const AddNewServiceForm = ({ setOpen }) => {
  // Define the state variables for the form fields
  const [serviceName, setServiceName] = useState("");
  const [serviceDescription, setServiceDescription] = useState("");
  const [serviceStatus, setServiceStatus] = useState("");
  const [amount, setAmount] = useState(0);

  // Define the handler function for the form submission
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    // Prevent the default browser behavior
    event.preventDefault();
    axios
      .post("/api/services", {
        service_name: serviceName,
        description: serviceDescription,
        price: amount,
        status: serviceStatus,
      })
      .then((res) => setOpen(false))
      .catch((err) => console.error(err));
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "flex", flexDirection: "column" }}
    >
      <FormControl margin="normal" required>
        <InputLabel htmlFor="serviceName">Service Name</InputLabel>
        <Input
          id="serviceName"
          value={serviceName}
          onChange={(event) => setServiceName(event.target.value)}
        />
      </FormControl>
      <FormControl margin="normal" required>
        <InputLabel htmlFor="serviceDescription">
          Service Description
        </InputLabel>
        <Input
          id="serviceDescription"
          value={serviceDescription}
          onChange={(event) => setServiceDescription(event.target.value)}
        />
      </FormControl>
      <FormControl margin="normal" required>
        <InputLabel htmlFor="amount">Amount</InputLabel>
        <Input
          id="amount"
          value={amount}
          onChange={(event) => setAmount(parseInt(event.target.value))}
          type="number"
        />
      </FormControl>
      <FormControl margin="normal" required>
        <InputLabel htmlFor="serviceStatus">Status</InputLabel>
        <Input
          id="serviceStatus"
          value={serviceStatus}
          onChange={(event) => setServiceStatus(event.target.value)}
        />
      </FormControl>
      <Button type="submit" variant="contained">
        Submit
      </Button>
    </form>
  );
};

export default AddNewServiceForm;
