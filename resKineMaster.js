/* 
Creator: hungcho99
8h17 28/04/2023
*/
//var obj = JSON.parse($response.body);
obj = {
    "platform": "appstore",
    "isAutoRenew": true,
    "isTrialPeriod": false,
    "productId": "com.kinemaster.kios.annual.ia4",
    "expiresDate": 7171828282828882
};


/*
{"platform":"appstore","isAutoRenew":true,"isTrialPeriod":false,"productId":"com.kinemaster.kios.annual.ia4","expiresDate":7171828282828882}
*/
$done({ status: 200, body: JSON.stringify(obj)});
