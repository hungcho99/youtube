obj = {
  "msg": "success",
  "data": [
    {
      "status": 1,
      "is_free_trial": false,
      "active": true,
      "product_identifier": "Product_Auto_Renew_Annual_2022_05_13",
      "enanled_auto_renew": true,
      "is_gift_subscription": false,
      "platform": "iOS",
      "billing_date_ms": 1683803283000,
      "original_purchase_date_ms": 1683198484000,
      "start_date_ms": 2682627828282,
      "group_identifier": "20936308",
      "expires_date_ms": 2773288282617,
      "origin_transaction_id": "230001613418507"
    }
  ],
  "code": 1
};
$done({ status: 200, body: JSON.stringify(obj)});
