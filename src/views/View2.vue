<template>
  <div>
    <img alt="Vue logo"
      src="@/assets/logo.png" />
    <HelloWorld msg="Hello Vue 3 + Vite22222" />
    <HelloWorld msg="Hello Vue 3 + Vite22222" />
    <HelloWorld msg="Hello Vue 3 + Vite22222" />
    <HelloWorld msg="Hello Vue 3 + Vite22222" />
    <HelloWorld msg="Hello Vue 3 + Vite22222" />
    <HelloWorld msg="Hello Vue 3 + Vite22222" />
    <HelloWorld msg="Hello Vue 3 + Vite22222" />
    <HelloWorld msg="Hello Vue 3 + Vite22222" />
    <HelloWorld msg="Hello Vue 3 + Vite22222" />
    <HelloWorld msg="Hello Vue 3 + Vite22222" />
    <HelloWorld msg="Hello Vue 3 + Vite22222" />
    <div class="test1">
      <div class="red">aaaa{{baseUrl}}</div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

let baseUrl = ref("");
baseUrl = import.meta.env.VITE_APP_TITLE;

console.log(baseUrl, import.meta.env.NODE_ENV);

// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/script-setup-2/active-rfcs/0000-script-setup.md
</script>

<style>
</style>
