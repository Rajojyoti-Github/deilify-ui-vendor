export class Constants {
    public static readonly AUTH_TOKEN = 'authToken';
}

export const PhoneCheck = (phone: string) => {
    let phoneRegex = /^\d{10}$/;
    let number: any = parseInt(phone);
    return phoneRegex.test(number);
};

export const ApiUrls = {
    auth: {
        sendOtp: '/api/registerVendorMobileNumber',
        verifyOtp: '/api/verifyOtpForVendor',
    },
    register: '/api/registerVendor',

    /* for bank */
    addBank: '/api/addBankAccount',

    /* for Category */
    getCategory: '/api/getDDLResults',

    /* for add store address */
    addstoreaddress: '/api/addStoreAddress',

    /* for add Services */
    addServices: '/api/services',
    getAllServicesByVendorId: '/api/services/',

    /* for bulk upload Services */
    DownloadExcelForBulkUpload: '/api/files/bulkUpload/ServiceDownload',
    uploadExcelFileForBulkService: '/api/files/bulkUpload/ServiceUpload'
}