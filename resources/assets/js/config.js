/**
 * Defines the API route we are using.
 */
var api_url = '';
var app_url = '';

switch (process.env.NODE_ENV) {
    case 'development':
        api_url = 'http://fblog.test/api/v1';
        app_url = 'http://fblog.test';
        break;
    case 'production':
        api_url = 'https://blog.feonix.cn/api/v1';
        app_url = 'https://blog.feonix.cn';
        break;
}

export const API_CONFIG = {
    API_URL: api_url,
    APP_URL: app_url
}