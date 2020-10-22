export const environment = {
    production: false,
    apiBaseUrl: "https://sleepybroomeborme.azurewebsites.net/api/Request/",
    selfUrl: "https://sleepybroomeborme-questions.azurewebsites.net",

    authConfig: {
        instance: "https://login.microsoftonline.com/",
        tenantId: "1af8b4c7-8e05-466b-ba3b-a0ada1e909a9",
        clientId: "3846abf3-e13a-4bbd-8d34-75310f6ff326",
        redirectUri: "/app-silent-end",
        cacheLocation: "localStorage",
        navigateToLoginRequestUrl: false,
        extraQueryParameters: "",
        popUp: true,
        popUpUri: "/app-silent-start",
        popUpWidth: 600,
        popUpHeight: 535
    },

    // do not populate the following:
    upn: "",
    tid: "",
    gid: "",
    cname: ""
};
