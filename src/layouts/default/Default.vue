<template>
  <v-app>
     <v-layout>
      <app-bar></app-bar>
      <main-view></main-view>
     </v-layout>
  </v-app>
</template>

<script lang="ts" setup>
import AppBar from "@/layouts/default/AppBar.vue";
import MainView from "@/layouts/default/MainView.vue";
</script>
