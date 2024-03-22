import { writable } from "svelte/store";

const teams = writable({
    team1: [],
    team2: []
})

export default teams;