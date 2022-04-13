<template>
  <default-layout>
    <template #header>
      <h1>Slot tutorial</h1>
    </template>

    <template #default="{ color }">
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
      <input :style="`background-color: ${color}`" type="text" v-model="name" />
    </template>

    <template #footer="{ year }">
      <p>Slots &copy; {{ year }}</p>
    </template>
  </default-layout>
</template>

<script setup>
import defaultLayout from "./layouts/default.vue";
import { inject, ref } from "vue";

const currentLocale = inject("currentLocale");

const name = ref("Sam");
const app = ref("Slots");
</script>
