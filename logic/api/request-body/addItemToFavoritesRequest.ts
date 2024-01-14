
interface AddItemToFavoritesRequest {
    id: [number];
  }

const setAddItemToFavoritestRequest = (itemNumber: number) => {
    return{
        id: [itemNumber]
    }
}

export{
    AddItemToFavoritesRequest,setAddItemToFavoritestRequest
}