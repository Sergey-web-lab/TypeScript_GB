export interface dataHotel {
  id: string,
  title: string,
  details: string,
  photos: string[],
  coordinates: number[],
  bookedDates?: Date[],
  price: number
}
export interface rentParameters {
  checkInDate: Date,
  checkOutDate: Date,
  city: string,
  priceLimit?: number
}
export const database: dataHotel[]

export function cloneDate(date: Date): Date

export function addDays(date: Date, days: number): Date

export const backendPort: number
export const localStorageKey: string


export class FlatRentSdk {
  database: dataHotel[]
  constructor()
  _readDatabase(): dataHotel[]
  _writeDatabase(database: dataHotel[]): void

  get(id: string): Promise<object | null>

  search(parameters: rentParameters): dataHotel[]

  book(flatId: string, checkInDate: Date, checkOutDate: Date): number

  _assertDatesAreCorrect(checkInDate: Date, checkOutDate: Date): void


  _resetTime(date: Date): void

  _calculateDifferenceInDays(startDate: Date, endDate: Date): number

  _generateDateRange(from: Date, to: Date): Date[]

  _generateTransactionId(): number

  _areAllDatesAvailable(flat: dataHotel, dateRange: Date[]): boolean

  _formatFlatObject(flat: dataHotel, nightNumber: number): dataHotel

  _readDatabase(): dataHotel

  _writeDatabase(database: dataHotel): void

  _syncDatabase(database: dataHotel): void
}