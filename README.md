# Chainlink External Adapter for Nomics

## Input Params

- `coin`: The asset to query (symbol)
- `market`: The currency to convert the result to

## Ouput Format

```
{
 "jobRunID": "278c97ffadb54a5bbb93cfec5f7b5503",
 "data": [
  {
   "id": "BTC",
   "currency": "BTC",
   "symbol": "BTC",
   "name": "Bitcoin",
   "logo_url": "https://s3.us-east-2.amazonaws.com/nomics-api/static/images/currencies/btc.svg",
   "rank": "1",
   "price": "52.55669113",
   "price_date": "2020-01-28T00:00:00Z",
   "market_cap": "955847858",
   "circulating_supply": "18186987",
   "max_supply": "21000000",
   "1d": {
    "price_change": "0.32327127",
    "price_change_pct": "0.0062",
    "volume": "74632003.64",
    "volume_change": "9957825.57",
    "volume_change_pct": "0.1540",
    "market_cap_change": "5973350.62",
    "market_cap_change_pct": "0.0063"
   },
   "7d": {
    "price_change": "0.94701337",
    "price_change_pct": "0.0183",
    "volume": "403838151.39",
    "volume_change": "-164361787.89",
    "volume_change_pct": "-0.2893",
    "market_cap_change": "17900026.00",
    "market_cap_change_pct": "0.0191"
   },
   "30d": {
    "price_change": "-2.92297242",
    "price_change_pct": "-0.0527",
    "volume": "2238218690.59",
    "volume_change": "80316640.64",
    "volume_change_pct": "0.0372",
    "market_cap_change": "-49973475.97",
    "market_cap_change_pct": "-0.0497"
   },
   "365d": {
    "price_change": "20.33289072",
    "price_change_pct": "0.6310",
    "volume": "16443534769.68",
    "volume_change": "13016686244.09",
    "volume_change_pct": "3.7984",
    "market_cap_change": "391767009.82",
    "market_cap_change_pct": "0.6945"
   },
   "ytd": {
    "price_change": "-2.86460907",
    "price_change_pct": "-0.0517",
    "volume": "2084105671.87",
    "volume_change": "85927983.52",
    "volume_change_pct": "0.0430",
    "market_cap_change": "-49139830.91",
    "market_cap_change_pct": "-0.0489"
   },
   "high": "617.95887558",
   "high_timestamp": "2015-10-20T00:00:00Z"
  }
 ],
 "result": 52.55669113,
 "statusCode": 200
}
```

## Install

```bash
npm install
```

## Test

```bash
npm test
```

## Create the zip

```bash
zip -r cl-nomics.zip .
```

## Install to AWS Lambda

- In Lambda Functions, create function
- On the Create function page:
  - Give the function a name
  - Use Node.js 12.x for the runtime
  - Choose an existing role or create a new one
  - Click Create Function
- Under Function code, select "Upload a .zip file" from the Code entry type drop-down
- Click Upload and select the `cl-nomics.zip` file
- Handler should remain index.handler
- Add the environment variable (repeat for all environment variables):
  - Key: API_KEY
  - Value: Your_API_key
- Save


## Install to GCP

- In Functions, create a new function, choose to ZIP upload
- Click Browse and select the `cl-nomics.zip` file
- Select a Storage Bucket to keep the zip in
- Function to execute: gcpservice
- Click More, Add variable (repeat for all environment variables)
  - NAME: API_KEY
  - VALUE: Your_API_key
