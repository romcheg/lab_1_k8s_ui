<template>
<v-container fluid>
  <v-card>
  <v-list
      lines="three"
  >
    <single-record
      v-for="record in allRecords"
      :key="record.id"
      :record="record"
    />
  </v-list>
</v-card>
</v-container>
</template>

<script lang="ts">
import {Record} from '@/store/types'
import { useAppStore } from '@/store/app';
import SingleRecord from '@/components/SingleRecord.vue';
import { mapState, mapStores } from 'pinia';


export default {
  components: {
    SingleRecord,
  },

  computed: {
    ...mapStores(useAppStore),
    ...mapState(useAppStore, ['allRecords',]),
  },

  mounted() {
    this.appStore.refreshRecords();
  },
};
</script>