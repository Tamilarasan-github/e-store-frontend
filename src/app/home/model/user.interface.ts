import { ISeller } from "src/app/product/model/product.interface";

export interface IUser {
    userId: number;
    uuid: string;
    jwtToken: string;
    role: string;
    userName: string;
    password?: string;
    firstName: string;
    middleName?: string;
    lastName: string;
    emailId: string;
    phoneNumber: string;
    gender: string;
    dateOfBirth?: string;
    profilePic?: string;
    lastLoginDate?: string;
    userAccountStatus: string;
    sellerId?: number;
    createdDate?: string;
    updatedDate?: string;
    createdBy: string;
    updatedBy?: string;
    deleteFlag?: boolean;
  }

export interface UserResponse
{
	user?: IUser;
	users?: IUser[];
	sucessMessage?: string ;
	errorMessage?: string;
}