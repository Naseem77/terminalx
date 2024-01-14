interface AddItemToCartRequest {
    cart_items: {
      data: {
        quantity: number;
        any_sku: string;
      };
    }[];
    skip_collect: number;
}

const setAddItemToCartRequest = (itemNumber:string) => {
    const addItemRequest: AddItemToCartRequest = {
        cart_items: [
          {
            data: {
              quantity: 1,
              any_sku: itemNumber
            }
          }
        ],
        skip_collect: 1
      };
    
      return addItemRequest;
}

export{
    AddItemToCartRequest,setAddItemToCartRequest
}
