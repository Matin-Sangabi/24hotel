import http from "./httpRequest";

interface AvailableRoomType {
  numberOfGuests: string | null;
  fromDate: string | null;
  toDate: string | null;
}

interface AvailableRoomResponse {
  data: Room[];
  total: number;
  page: string;
  limit: string;
}

interface Room {
  placeId: string;
  roomId: string;
  roomName: string;
  roomCapacity: number;
  date: string; 
  price: number;
  addonsIncluded: string[]; 
  isPlanned: boolean;
  isReserved: boolean;
  reservationExpiresAt: string | null;
  createdAt: string;
  updatedAt: string;
}


export async function availableRoom(
  values: AvailableRoomType
): Promise<AvailableRoomResponse> {
  const url = `/prices/available-rooms?page=1&limit=10&sort={"createdAt":-1}&numberOfGuests=${values?.numberOfGuests}&fromDate=${values.fromDate}&toDate=${values.toDate}`;
  const { data } = await http.get(url);
  return data;
}
