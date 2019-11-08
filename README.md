# DSX Public API Node Client

Node client for DSX Public API with Typescript annotations


```typescript
import { DSXPublicAPIClient } from "dsx-public-api";

const client = new DSXPublicAPIClient(apiKey, secretKey);
const info = await client.getInfo();
```

## Authentication

Authenticate your account when using the API by including your secret API key in the request. You can manage your API keys in the Profile

## Methods

### `depthPair`
This method provides full order book for currency pair(s) which represents current active orders on the currency pair.

### `getInfo`
This method provides common information about available currency pairs, such as the maximum number of digits after the decimal point for price and volume, the minimum price, the maximum price, the minimum transaction size, whether the pair is tradeable and the fee in percent for each pair.

### `getTicker`
This method provides additional in-time information about currency pairs for the past 24 hours.

### `getTrades`
This method provides information about the last trades for currency pairs.

### `getTransactionsHistory`
This method provides information about deposit and withdrawal transfers. All parameters are nullable.

### `getTradesHistory`
This method returns JSON array of trades. All parameters are nullable.

### `getOrdersHistory`
This method provides orders history. All parameters are nullable.

### `getActiveOrders`
This method provides information about active client orders. All parameters are obligatory (ie. none may be null).

### `cancelOrder`
This method allows to cancel your active order. This method can be used only for limit orders.

### `getOrderStatus`
This method provides order status and all related trades list. status field in the response has the following mapping:

0 — Active 1 — Filled 2 — Killed 3 — Killing 7 — Rejected

### `createOrder`
This method provides trade operation. Client can place limit, market, fill-or-kill orders. For fill-or-kill or market orders, rate parameter represents worst rate for successful order fulfillment. All parameters are obligatory (ie. none may be null).

### `accountInformation`
This method provides information about client balances, server time, active orders count and rights of the current API keys.

### `volume`
This method provides trading volume for the client.

### `fees`
This method provides fees for the current client. Please note that indexOfCurrentCommission parameter in response JSON starts from 0.

