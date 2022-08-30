export interface CreatePetDto {
  name: string,	
	specie: string,
	size: string,
	sex: string,
	race?: string,
  birthDate?: Date;
  owner?: string;
}

export interface PetQueryDto {
	name?: string,	
	specie?: string,
	size?: string,
	sex?: string,
	race?: string,
  birthDate?: Date;
  owner?: string;
}