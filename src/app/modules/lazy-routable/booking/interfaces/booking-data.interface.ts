export interface IBooking {
  month: string;
  dates: IBookingDate[];
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

export interface ITimeSlot {
  hour: string;
  minute: string;
}
