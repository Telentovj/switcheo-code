# To create the transaction broadcaster service, I will have several components: 
<ol>
<li>Cloud Relational Database to store transactions</li>
<li>Signing service to return a signed transaction</li>
<li>Internal API for validation of the post request and to send these requests to the next component.</li>
<li>Broadcasting service to broadcast the signed transaction to the blockchain</li>
<li>Admin interface to view the transactions and to retry where necessary.</li>
</ol>

## Cloud Relational Database to store transactions
```
The database stores the status of each transaction. It should be highly scalable and should always be available. This is so that even if the broadcaster were to restart, it will still be able to operate so that you can record transactions that were pending but not signed yet. Additionally, I would use a relational database because the relationship between the request id, the signed transaction as well as the status of the transaction is important.  

As such it would be ideal to use a cloud relational database like Amazon Relational Database Service or Google Cloud SQL.
```
## Signing service to return a signed transaction
```
This component is responsible for signing the inputted transaction data from the internal API and then signs the transaction using the private key of the user. 
```
## A framework that could be used is ether.js, since it was created to interact with the ethereum block chain.
```
Internal API for validation of the post request and to send these requests to the next component

This component is used for receiving the post request from other services and returns a HTTP response of either 200 or 400-500 depending on whether the transaction is a success or not. It is also responsible for validating whether the post request is valid. 

Frameworks that can be used to implement the Internal API include Django and Flask.
```
## Broadcasting service to broadcast the signed transaction to the blockchain
```
The broadcasting service is used to receive signed transactions from the signing service then uses a RPC node provider like Infura and Alchemy to broadcast the transactions to the blockchain network. A message queue such as RabbitMQ can be used to provide a fault-tolerant way of sending and receiving messages between different components. The message queue can get the signed transactions from the signing service then provide it to the RPC node. If the transaction fails then the message will be added back into the queue to be retried again later.
```

## Admin interface to view the transactions and to retry where necessary
```
The admin interface will be used to allow the admin to have some kind of table view of all the transactions that have taken place. More importantly, the admin should be able to see transactions that have failed and retry these transactions manually. Additionally, the admin should be able to use simple SQL queries, to get a quick sensing of the transactions that have been posted to the broadcasting service so that he can make decisions to improve the service with analytics.

Frameworks that should be considered should be easy and be easily integrated with the database. Examples include, React, Flask and Django.
```