# Auth-Client Demo Azle

This is an example project, intended to demonstrate how an app developer might integrate with an [Internet Identity](https://identity.ic0.app) using [TypeScript/Azle](https://demergent-labs.github.io/azle/).

For a non-typescript implementation in Motoko, see <https://github.com/krpeacock/auth-client-demo/tree/vanilla-js>

[Live demo](https://vasb2-4yaaa-aaaab-qadoa-cai.ic0.app/)

This is an example showing how to use [@dfinity/auth-client](https://www.npmjs.com/package/@dfinity/auth-client).

To get started, you might want to explore the project directory structure and the default configuration file. Working with this project in your development environment will not affect any production deployment or identity tokens.

To learn more before you start working with auth_demo, see the following documentation available online:

- [Quick Start](https://sdk.dfinity.org/docs/quickstart/quickstart-intro.html)
- [SDK Developer Tools](https://sdk.dfinity.org/docs/developers-guide/sdk-guide.html)
- [Azle book](https://demergent-labs.github.io/azle/)

## Setting up for local development

To get started, start a local dfx development environment in this directory with the following steps:

```sh
cd auth-client-demo-azle/
npm run dfx_install
npm run replica_start
npm run canister_deploy_local
npm start
```

Once deployed, start the development server with `npm start`.

You can now access the app at `http://localhost:8080`.

## File Structure

You can find the canister source code in `src/index.ts`. All client assets you can find in `src/auth_client_demo_assets`.

## Azle README

Welcome to your first Azle project! This example project will help you to deploy your first canister (application) to the Internet Computer (IC) decentralized cloud. It is a simple getter/setter canister.

`dfx` is the tool you will use to interact with the IC locally and on mainnet. If you don't already have it installed:

```sh
npm run dfx_install
```

Next you will want to start a replica, which is a local instance of the IC that you can deploy your canisters to:

```sh
npm run replica_start
```

If you ever want to stop the replica:

```sh
npm run replica_stop
```

Now you can deploy your canister locally:

```sh
npm install
npm run canister_deploy_local
```

To call the methods on your canister:

```sh
npm run canister_call_get_message
npm run canister_call_set_message
```

If you run the above commands and then call `npm run canister_call_get_message` you should see:

```sh
("Hello world!")
```

Assuming you have [created a cycles wallet](https://internetcomputer.org/docs/current/developer-docs/quickstart/network-quickstart) and funded it with cycles, you can deploy to mainnet like this:

```sh
npm run canister_deploy_mainnet
```
