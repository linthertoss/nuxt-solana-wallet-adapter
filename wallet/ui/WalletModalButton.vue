<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api";
import { useWalletModal } from "./useWalletModal";
import WalletButton from "./WalletButton.vue";

export default defineComponent({
  name: "wallet-modal-button",
  components: {
    WalletButton,
  },
  setup() {
    const { showModal } = useWalletModal();
    const a = () => {
      alert(1);
    };

    return { showModal, a };
  },
});
</script>

<template>
  <wallet-button class="wallet-adapter-button-trigger" @click="a">
    <slot>Select Wallet</slot>
  </wallet-button>
</template>
