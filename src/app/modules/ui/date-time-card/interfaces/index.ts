export interface ITimeSlot {
  start: number;
  end: number;
}

export interface IDateTimePair {
  timeSlot: ITimeSlot;
  date: Date;
}
