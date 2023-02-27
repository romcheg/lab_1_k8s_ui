// Utilities
import { defineStore } from 'pinia'
import axios, { AxiosRequestConfig, AxiosRequestHeaders } from 'axios';

import { Record } from '@/store/types'


const BASE_URL: string = import.meta.env.import.meta.env.VITE_BASE_URL;
const REQUEST_PARAMS: AxiosRequestConfig = {
  headers: ({
    "Content-Type": "application/json"
  } as AxiosRequestHeaders)
}


class RootState{
  constructor(
    public allRecords: Record[]
  ){}
}


export const useAppStore = defineStore('app', {
  state: () => (
    new RootState([])
  ),

  getters: {
    getAllRecords(state: RootState): Record[] {
      return state.allRecords;
    }
  },

  actions: {
    async refreshRecords() {
      try{
        let response = await axios.get<Record[]>(`${BASE_URL}/records/`, REQUEST_PARAMS);
        this.allRecords = response.data;
      } catch(error) {
        console.error(error);
      }
    },
  },
})
