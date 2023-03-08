// Define an interface for service objects
interface Service {
  id: number;
  serviceName: string;
  serviceType: string;
  price: number;
}

// Define an interface for user objects
interface User {
  id: string;
  name: string;
  email: string;
  phoneNumber: number;
  address: string;
  services: Service[]; // An array of service objects
}

// Create a user object with some mock data
let user: User = {
  id: "8ff8093e-1785-457d-9eab-37c446151542",
  name: "William Buchanan",
  email: "strengthcoachwb@gmail.com",
  phoneNumber: 2142027316,
  address: "1819 Auburn Drive, Richardson, TX, 75081",
  services: [
    { id: 1, serviceName: "Club Dues", serviceType: "Club", price: 500 },
    {
      id: 2,
      serviceName: "Skills Clinic",
      serviceType: "Clinics/Camps",
      price: 50,
    },
    {
      id: 3,
      serviceName: "Summer Camp",
      serviceType: "Clinics/Camp",
      price: 200,
    },
  ],
};

export default user;
