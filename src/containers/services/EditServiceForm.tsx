// Import React, MUI components and useState hook
import React, { useState } from "react";
import {
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  Button,
  Select,
  MenuItem,
} from "@mui/material";
import axios from "axios";

interface Service {
  service_id: number;
  service_name: string;
  description: string;
  price: number;
  status: string;
}

type EditServiceFormProps = {
  service: Service;
  update: () => void;
};

// Define the component that renders the form
const EditServiceForm = ({ service, update }: EditServiceFormProps) => {
  // Define the state variables for the form fields
  const [serviceName, setServiceName] = useState(service.service_name ?? "");
  const [serviceDescription, setServiceDescription] = useState(
    service.description ?? ""
  );
  const [amount, setAmount] = useState(service.price ?? 0);
  const [status, setStatus] = useState(service.status ?? "");

  // Define the handler function for the form submission
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    // Prevent the default browser behavior
    event.preventDefault();
    axios
      .put(`/api/services/${service.service_id}`, {
        service_name: serviceName,
        description: serviceDescription,
        price: amount,
        status: status,
      })
      .then((res) => update())
      .catch((err) => console.error(err));
  };

  const handleDelete = async () => {
    axios
      .delete(`/api/services/${service.service_id}`)
      .then((res) => update())
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
        <InputLabel htmlFor="serviceType">Service Type</InputLabel>
        <Input
          id="serviceType"
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
        <Select
          id="status"
          value={status}
          onChange={(event) => setStatus(event.target.value)}
        >
          <MenuItem value="Active">Active</MenuItem>
          <MenuItem value="Disabled">Disabled</MenuItem>
        </Select>
      </FormControl>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <Button type="submit" variant="contained">
          Submit
        </Button>
        <Button onClick={handleDelete} variant="contained" color="error">
          Delete
        </Button>
      </div>
    </form>
  );
};

export default EditServiceForm;
