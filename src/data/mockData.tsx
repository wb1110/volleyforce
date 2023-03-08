// Define an interface for service objects
interface Service {
  id: number;
  serviceName: string;
  serviceType: string;
  price: number;
}

// Define an interface for user objects
interface User {
  name: string;
  email: string;
  services: Service[]; // An array of service objects
}

// Create a user object with some mock data
let user: User = {
  name: "Alice",
  email: "alice@example.com",
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
