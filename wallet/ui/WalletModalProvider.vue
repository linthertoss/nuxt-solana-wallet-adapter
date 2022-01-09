<template>
  <div>
    <slot />
    <wallet-modal> </wallet-modal>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api";
import { initWalletModal } from "./useWalletModal";
import WalletModal from "./WalletModal.vue";

export default defineComponent({
  name: "wallet-modal-provider",
  components: {
    WalletModal,
  },
  props: {
    visible: Boolean,
  },
  setup({ visible }) {
    initWalletModal(visible);
  },
});
</script>
