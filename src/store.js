import { reactive } from "vue";

export const store = reactive ({
    characterList: [],
    apiURL: 'https://db.ygoprodeck.com/api/v7/cardinfo.php',
})