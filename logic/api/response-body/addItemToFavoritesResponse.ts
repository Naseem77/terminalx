export interface AddItemToFavoritesResponse {
    data: {
        addProductsToWishlist: {
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
