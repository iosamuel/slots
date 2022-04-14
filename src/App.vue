<template>
  <default-layout>
    <!--
    <template #header>
      <h1>Welcome to Slots</h1>
    </template>
    -->

    <template #default>
      <select v-model="currentLocale">
        <option value="en">English</option>
        <option value="es">Español</option>
      </select>
      <hr />
      <i18n tag="h2" path="hello">
        {{ name }}
      </i18n>
      <i18n tag="h2" path="welcome">
        <template #name>
          <span style="color: red">{{ name }}</span>
        </template>
        <template #app>
          {{ app }}
        </template>
      </i18n>
    </template>

    <!--
    <template #footer="{ year, app }">
      <p>{{ app }} &copy; {{ year }}</p>
    </template>
    -->
  </default-layout>
</template>

<script setup>
import defaultLayout from "./layouts/default.vue";

import { inject, ref } from "vue";

const currentLocale = inject("currentLocale");
const name = ref("Sam");
const app = ref("Slots");
</script>
