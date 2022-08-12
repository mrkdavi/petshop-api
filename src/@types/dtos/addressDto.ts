export interface CreateAddressDto {
  district: string;
  street: string;
  number: number;
  complement?: string;
  nickname?: string;
}