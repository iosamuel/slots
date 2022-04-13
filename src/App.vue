<template>
  <select v-model="currentLocale">
    <option value="en">English</option>
    <option value="es">Español</option>
  </select>
  <hr />
  <i18n tag="h2" path="hello">
    {{ name }}
  </i18n>
  <i18n tag="h3" path="welcome">
    <template #name>
      {{ name }}
    </template>
    <template #app>
      {{ app }}
    </template>
  </i18n>
  <input type="text" v-model="name" />
</template>

<script setup>
import { inject, ref } from "vue";

const currentLocale = inject("currentLocale");

const name = ref("Sam");
const app = ref("Slots");
</script>
