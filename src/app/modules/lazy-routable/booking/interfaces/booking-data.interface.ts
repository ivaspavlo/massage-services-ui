export interface IBookingSlot {
  productId: string;
  dates: IDateSlot[];
}

export interface IDateSlot {
  date: string;
  timeSlots: ITimeSlot[];
}

export interface ITimeSlot {
  start: number;
  end: number;
}

export interface IBookingGift {
  qty: number;
  id: string;
}

export interface IDatesGroup {
  month: string;
  dates: { date: Date; timeSlots: ITimeSlot[] }[]
}


//////////////////////

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

export interface IGiftSlot {
  id: string;
  qty: number;
}

export interface IBookingGift {
  date: string;
  data: IGiftSlot[];
}


