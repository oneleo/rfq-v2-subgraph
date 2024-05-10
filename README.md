# rfq-v2-subgraph

An index on the Tokenlon RFQv2 contract's subgraph on the mainnet.

## Description

- This Subgraph stores information about the FilledRFQ events of the RFQv2 ([0x91C986709Bb4fE0763edF8E2690EE9d5019Bea4a](https://etherscan.io/address/0x91c986709bb4fe0763edf8e2690ee9d5019bea4a)) contract.

## Preparation

```shell
% npm install --global npm yarn@1 @graphprotocol/graph-cli
```

## Building

```shell
% yarn install && yarn run codegen && yarn run build
```

## Deployment

- Deploy to [The Graph Subgraph Studio](https://thegraph.com/studio/)

```shell
% graph auth --studio <YOUR_DEPLOY_KEY>
% graph deploy --studio <YOUR_SUBGRAPH_SLUG>
```

- Deploy to [Alchemy Subgraphs](https://subgraphs.alchemy.com/)

```shell
% SUBGRAPH_NAME="rfq-v2-subgraph" && SUBGRAPH_VERSION="v0.0.1-new-version"
% DEPLOY_KEY="<YOUR_DEPLOY_KEY>"
% graph deploy ${SUBGRAPH_NAME} \
  --version-label ${SUBGRAPH_VERSION} \
  --node https://subgraphs.alchemy.com/api/subgraphs/deploy \
  --deploy-key ${DEPLOY_KEY} \
  --ipfs https://ipfs.satsuma.xyz
```

## GraphQL query example

- Suggestion: [GraphQL query tool](https://cloud.hasura.io/public/graphiql)
  - Enter your endpoint like: `https://subgraph.satsuma-prod.com/<YOUR_QUERY_KEY>/<YOUR_ORGANIZATION>/<YOUR_SUBGRAPH_NAME>/api`

```graphql
query RFQv2($id: ID) {
  filledRFQs(
    first: 3
    orderBy: blockTimestamp
    orderDirection: desc
    where: {
      blockTimestamp_gte: "1715212800" # 2024/05/09 00:00:00 GMT+00:00
      blockTimestamp_lte: "1715299199" # 2024/05/09 23:59:59 GMT+00:00
    }
  ) {
    id
    blockNumber
    blockTimestamp
    transactionHash
    maker
    makerToken
    makerTokenAmount
  }
}
```

- Query result

```json
{
  "data": {
    "filledRFQs": [
      {
        "id": "0xad6da4b96bd1f1ebbd195cd8bd27bf2d9531de7f412db70b239f59da7c8e2a9b5d000000",
        "blockNumber": "19835919",
        "blockTimestamp": "1715299163",
        "transactionHash": "0xad6da4b96bd1f1ebbd195cd8bd27bf2d9531de7f412db70b239f59da7c8e2a9b",
        "maker": "0x29f3f0ac208e3c5cacdf3d5dcbd3bc0466a08e81",
        "makerToken": "0xdac17f958d2ee523a2206206994597c13d831ec7",
        "makerTokenAmount": "14127811157"
      },
      {
        "id": "0x36f9400d5a09df57d12388ec04cd5345dc7ef908ffbd41ada6bfb18d0ba42ef035000000",
        "blockNumber": "19835868",
        "blockTimestamp": "1715298551",
        "transactionHash": "0x36f9400d5a09df57d12388ec04cd5345dc7ef908ffbd41ada6bfb18d0ba42ef0",
        "maker": "0x29f3f0ac208e3c5cacdf3d5dcbd3bc0466a08e81",
        "makerToken": "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
        "makerTokenAmount": "1434768390000000000"
      },
      {
        "id": "0x5ff10d5654bd019eb4de929a30615a6d904f8251b98ce09bbdfaa94a6430f31045000000",
        "blockNumber": "19835851",
        "blockTimestamp": "1715298347",
        "transactionHash": "0x5ff10d5654bd019eb4de929a30615a6d904f8251b98ce09bbdfaa94a6430f310",
        "maker": "0x29f3f0ac208e3c5cacdf3d5dcbd3bc0466a08e81",
        "makerToken": "0xdac17f958d2ee523a2206206994597c13d831ec7",
        "makerTokenAmount": "971963163"
      }
    ]
  }
}
```
