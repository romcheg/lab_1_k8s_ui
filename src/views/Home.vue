<template>
<v-container fluid>
  <v-list
      lines="three"
  >
    <single-record
      v-for="record in allRecords"
      :key="record.id"
      :record="record"
    />
  </v-list>
</v-container>
</template>

<script lang="ts">
import {Record} from '@/store/types'
import SingleRecord from '@/components/SingleRecord.vue';


export default {
  data() {
    return {
      allRecords: [
        new Record("dead-beef-caffee", "John", "9379992"),
        new Record("caffee-dead-beef-", "Jane", "22332222"),
      ]
    };
  },

  components: {
    SingleRecord,
  }
};
</script>