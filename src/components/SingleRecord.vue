<template>
  <v-list-item
    :title="record.first_name"
    :subtitle="record.phone_number"
    :value="record.id"
  />
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