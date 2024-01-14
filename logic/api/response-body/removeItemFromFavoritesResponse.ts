
export interface RemoveItemToFavoritesResponse {
    data: {
        removeProductsFromAnyWishlistById: {
            changed: number;
            anyWishlist: {
                items_count: number;
                items: wishListItems[];
            };
        };
    };
}

export interface wishListItems {
    id: number;
}