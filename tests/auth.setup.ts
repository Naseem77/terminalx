import { test as setup } from '@playwright/test';
import url from '../config/urls.json'
import config from '../config/config.json'
import { ApiCalls } from '../logic/api/apiCalls';

setup('authentication', async ({ request }) => {
    const apiCall = new ApiCalls();
    await apiCall.login(request, url.ui.loginUrl, config.email, config.password)
    await request.storageState({ path: config.authFile });
});
