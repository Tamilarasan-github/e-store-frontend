import { IUser } from "src/app/home/model/user.interface";

export interface IUserAddressDetail {
    uuid: string;
    user: IUser;
    addressName: string;
    addressType: string;
    markAsDefaultFlag: boolean;
    addressLine1: string;
    addressLine2?: string;
    addressLine3?: string;
    city: string;
    state: string;
    country: string;
    zipCode: string;
    phoneNumber: string;
    notes?: string;
    createdDate: string;
    updatedDate?: string;
    createdBy: string;
    updatedBy?: string;
    deleteFlag: boolean;
}