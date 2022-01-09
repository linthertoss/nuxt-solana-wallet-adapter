import { Wallet, WalletError } from "@solana/wallet-adapter-base";
import { defineComponent, PropType } from "@nuxtjs/composition-api";
import { provideWallet } from "./useWallet";

export default defineComponent({
  name: "wallet-provider",
  props: {
    wallets: {
      type: Array as PropType<Wallet[]>,
      default: () => [],
    },
    autoConnect: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    onError: {
      type: Function as PropType<(error: WalletError) => void>,
      default: (error: WalletError) => console.error(error),
    },
    localStorageKey: {
      type: String as PropType<string>,
      default: "walletName",
    },
  },
  setup(props, { slots }) {
    console.log("props", props);

    provideWallet({
      wallets: props.wallets,
      autoConnect: props.autoConnect,
      onError: props.onError,
      localStorageKey: props.localStorageKey,
    });

    return () => slots.default?.();
  },
});
