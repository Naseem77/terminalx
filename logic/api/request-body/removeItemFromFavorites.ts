
interface RemoveItemToFavoritesRequest {
    id: number;
  }

const setRemoveItemToFavoritestRequest = (itemNumber: number) => {
    return{
        id: itemNumber
    }
}

export{
    RemoveItemToFavoritesRequest,setRemoveItemToFavoritestRequest
}