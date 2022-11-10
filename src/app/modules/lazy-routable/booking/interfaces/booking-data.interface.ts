export interface IBookingAvailable {
  productId: string;
  month: string;
  dates: IBookingDate[];
}

export interface ITimeSlot {
  hour: string;
  minute: string;
}

export interface IBookingDate {
  day: number;
  uiName: string;
  dateString: string;
  time: IBookingTime[];
}

export interface IBookingTime {
  start: ITimeSlot;
  end: ITimeSlot;
}

export interface IBookingSlot {
  productId: string;
  date: string;
  timeSlots: IBookingTime[];
}

export interface IBookingGift {
  date: string;
  data: { id: string; qty: number; }[];
}
