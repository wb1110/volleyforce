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
const AddNewServiceForm = () => {
  // Define the state variables for the form fields
  const [serviceName, setServiceName] = useState("");
  const [serviceType, setServiceType] = useState("");
  const [amount, setAmount] = useState(0);

  // Define the handler function for the form submission
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    // Prevent the default browser behavior
    event.preventDefault();
    axios
      .post("/api/services", {
        name: serviceName,
        type: serviceType,
        price: amount,
      })
      .then((res) => console.log(res.data))
      .catch((err) => console.error(err));
    // Do something with the form values
    // const service = await prisma.service.create({
    //   data: {
    //     name: serviceName,
    //     type: serviceType,
    //     price: amount,
    //   },
    // });
    // console.log(service, "new service");
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
          value={serviceType}
          onChange={(event) => setServiceType(event.target.value)}
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
      <Button type="submit" variant="contained">
        Submit
      </Button>
    </form>
  );
};

export default AddNewServiceForm;
