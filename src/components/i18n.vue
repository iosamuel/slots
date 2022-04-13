<template>
  <component :is="tag">
    <template v-for="{ key, isSlot } in keys" :key="key">
      <slot v-if="isSlot" :name="key" />
      <template v-else>{{ key }}</template>
    </template>
    <slot />
  </component>
</template>

<script setup>
import { computed, inject } from "vue";

const props = defineProps({
  tag: {
    type: String,
    default: "span",
  },
  path: {
    type: String,
    default: "",
  },
});

const locales = inject("locales");
const currentLocale = inject("currentLocale");

const keys = computed(() => {
  const msg = locales[currentLocale.value][props.path];

  const keys = [];
  msg.split(/(\{[^}]+\})/g).forEach((key) => {
    if (key) {
      const isSlot = key.startsWith("{") && key.endsWith("}");
      const keyValue = isSlot ? key.slice(1, -1) : key;

      keys.push({ key: keyValue, isSlot });
    }
  });
  return keys;
});
</script>
