// interface IUser {
//   firstName: string;
//   lastName: string;
//   email: string;
//   phone: string;
//   birth: string;
//   isAdmin: boolean;
//   password?: string;
//   image?: string;
//   consent?: boolean;
// }

interface IMassageOrder {
  id: string;
  items: IMassageBookingSlot[]
}

interface IMassageBookingSlot {
  start: Date;
  end: Date;
}

interface IGiftOder {
  id: string;
  qty: number;
}

interface IProduct {
  id: string;
  title: string;
  price: string;
  subtitle?: string;
  desc?: string;
}
