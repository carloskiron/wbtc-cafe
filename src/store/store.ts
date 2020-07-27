import { UnmarshalledFees } from "@renproject/interfaces";
import RenJS from "@renproject/ren";
import Web3 from "web3";

import { Transaction } from "../types/transaction";
import { initFirebase } from "../utils/firebase/firebase";
import { ADAPTER_TEST } from "../utils/web3Utils";

require("dotenv").config();

export const initialState = {
  // networking
  wbtcAddress: "",
  adapterAddress: "",
  selectedNetwork: "",

  // wallet & web3
  dataWeb3: null as Web3 | null,
  localWeb3: null as Web3 | null,
  localWeb3Address: "",
  walletConnectError: false,
  wbtcBalance: 0 as number | string,
  sdk: null as RenJS | null,
  fees: null as UnmarshalledFees | null,
  db: initFirebase(),
  fsUser: null as {
    uid: string;
  } | null,
  fsSignature: null as string | null,
  fsEnabled: false,
  loadingTransactions: false,

  // navigation
  selectedAsset: "btc",

  // modals
  showDepositModal: false,
  depositModalTx: null as Transaction | null,
  showCancelModal: false,
  cancelModalTx: null as Transaction | null,
  showGatewayModal: false,
  gatewayModalTx: null as Transaction | null,
  showSwapRevertModal: false,
  swapRevertModalTx: null as Transaction | null,
  swapRevertModalExchangeRate: "",
  showNetworkModal: false,

  // conversions
  "convert.adapterAddress": ADAPTER_TEST,
  "convert.adapterWbtcAllowance": "",
  "convert.adapterWbtcAllowanceRequesting": false,
  "convert.transactions": [] as Transaction[],
  "convert.pendingConvertToEthereum": [] as string[],
  "convert.selectedDirection": 0,
  "convert.amount": "" as string | number,
  "convert.destination": "",
  "convert.destinationValid": false,
  "convert.exchangeRate": "" as "" | number,
  "convert.networkFee": "" as "" | number,
  "convert.renVMFee": "" as "" | number,
  "convert.conversionTotal": "" as string | number,
  "convert.maxSlippage": 0.01,
};

interface StoreGeneric<T> {
  get<K extends keyof T, V extends T[K]>(key: K): V;
  set<K extends keyof T, V extends T[K]>(key: K, value: V): this;

  getState: () => typeof initialState;
}

export type StoreInterface = StoreGeneric<typeof initialState>;

export type StoreProps = {
  store: StoreInterface;
};
