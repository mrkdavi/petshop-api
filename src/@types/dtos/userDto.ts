export interface SignupUserDto {
	name: string,	
	email: string,
	password: string,
}

export interface CreateUserDto {
  name: string,	
	email: string,
	password: string,
	birthDate?: Date;
	phone?: string;
	role: string,
}

export interface UpdateUserDto {
	name?: string,
	email?: string,
	password?: string,
	birthDate?: Date,
	phone?: string,
	role?: string,
}