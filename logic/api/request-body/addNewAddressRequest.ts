interface AddAddressRequest {
    input: {
        firstname: string;
        lastname: string;
        postcode: string;
        telephone: string;
        city: string;
        country_id: string;
        street: [string, string, string];
    };
}

const setAddAddressRequest = (firstName: string, lastName: string, city: string, street: string, houseNumber: string, postCode: string, phone: string, countryId: string) => {
    const addAddressRequest: AddAddressRequest = {
        input: {
            firstname: firstName,
            lastname: lastName,
            postcode: postCode,
            telephone: phone,
            city: city,
            country_id: countryId,
            street: [street, houseNumber, houseNumber],
        }
    }

    return addAddressRequest;
}

export {
    AddAddressRequest, setAddAddressRequest
}