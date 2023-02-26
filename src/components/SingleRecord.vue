<template>
<v-card
  :title="record.first_name"
>
  <v-card-text>
    <strong>9379992</strong>
  </v-card-text>
</v-card>
</template>

<script lang="ts">
import { Record } from '@/store/types';

export default {
  props: {
    record: {
      type: Record,
      required: true,
    }
  }
};
</script>