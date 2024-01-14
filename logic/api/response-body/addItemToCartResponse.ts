interface AddItemToCartResponse{
    data: {
        addAnyProductsToAnyCart: {
          total_quantity: number;
        };
      };
}

const setAddItemToCartResponse = (newQuantity: number) => {
    return {
      data: {
        addAnyProductsToAnyCart: {
          total_quantity: newQuantity,
        },
      },
    };
}

export{
    AddItemToCartResponse,setAddItemToCartResponse
}