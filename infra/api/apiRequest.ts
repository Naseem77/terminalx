import { APIRequestContext, APIResponse, request } from "@playwright/test"


const putRequest = async<T> (url:string,data:any) => {
    const myRequest = await request.newContext()
    return await myRequest.put(url,{
    data:{data},
   })      
}

const postRequest = async (url: string, body: any, availableRequest?: APIRequestContext, headers?: Record<string, string>) => {
  const requestOptions = {
    data: body,
    headers: headers || undefined,
  };

  const requestContext = availableRequest || (await request.newContext());
  return await requestContext.post(url, requestOptions);
};
  

export{ postRequest, putRequest}