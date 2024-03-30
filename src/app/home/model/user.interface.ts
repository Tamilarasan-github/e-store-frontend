export interface User {
    userId: number;
    uuid: string;
    jwtToken: string;
    role: string;
    userName: string;
    password?: string;
    firstName: string;
    middleName: string;
    lastName: string;
    emailId: string;
    phoneNumber: string;
    gender: string;
    dateOfBirth: Date;
    profilePic: string;
    lastLoginDate: Date;
    userAccountStatus: string;
    sellerId: number;
    createdDate: Date;
    updatedDate: Date;
    createdBy: string;
    updatedBy: string;
    deleteFlag?: boolean;
  }

export interface UserResponse
{
	user?: User;
	users?: User[];
	sucessMessage?: string ;
	errorMessage?: string;
}