export const PhoneCheck = (phone: string) => {
    let phoneRegex = /^\d{10}$/;
    let number: any = parseInt(phone);
    return phoneRegex.test(number);
};

export const ApiUrls = {
    auth: {
        sendOtp: '/api/registerMobileNumber',
        verifyOtp: '/api/verifyOtp',
    },
    register: '/api//registerVendor',

    /* for bank */
    addBank: '/api/addBankAccount',
}