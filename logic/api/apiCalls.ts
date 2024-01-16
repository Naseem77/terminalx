import { postRequest } from "../../infra/api/apiRequest";
import {AddItemToCartResponse} from './response-body/addItemToCartResponse'
import { AddItemToFavoritesResponse } from './response-body/addItemToFavoritesResponse'
import urls from '../../config/urls.json'
import { APIRequestContext } from "@playwright/test";
import { RemoveItemToFavoritesResponse } from "./response-body/removeItemFromFavoritesResponse";
import { AddNewAddressResponse } from './response-body/addNewAddressReponse'

export class ApiCalls{

    async login(request : APIRequestContext, url : string, user : string, password : string){
        const data = { username: user, password: password }
        return await postRequest(url, data, request)
    }

    async addItemToCart(data: any): Promise<AddItemToCartResponse>{
        const result = await postRequest(urls.api.CartApiUrl ,data)
        return await result.json()
    }

    async AddItemtoFavorites(data: any): Promise<AddItemToFavoritesResponse>{
        const result = await postRequest(urls.api.AddItemToWishListApiUrl ,data)
        return await result.json()
    }

    async RemoveItemFromFavorites(data: any): Promise<RemoveItemToFavoritesResponse>{
        const result = await postRequest(urls.api.RemoveItemFromWishListApiUrl ,data)
        return await result.json()
    }

    async AddNewAddress(data: any): Promise<AddNewAddressResponse>{
        const result = await postRequest(urls.api.AddNewAddressApiUrl ,data)
        return await result.json()
    }

    
}