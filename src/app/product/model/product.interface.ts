export interface IProduct {
    productId: number;
    uuid: string;
    seller: ISeller; // You'll need to define the Seller interface or type
    productCode: string;
    productName: string;
    productTitle: string;
    productCondition: string;
    description: string;
    productStatus: string;
    productSubCategoryId: number;
    brandName: string;
    imageUrl: string;
    createdDate: Date;
    updatedDate: Date;
    createdBy: string;
    updatedBy: string;
    deleteFlag: boolean;
    comments: string;
  }

  export interface ISeller {
    sellerId: number;
    uuid: string;
    sellerName: string;
    sellerAccountStatus: string;
    phoneNumber?: string;
    alternatePhoneNumber?: string;
    emailId?: string;
    panNumber?: string;
    gstVerificationNumber?: string;
    verificationStatus?: string;
    createdDate: Date;
    updatedDate?: Date;
    createdBy: string;
    updatedBy?: string;
    deleteFlag: boolean;
    comments?: string;
  }