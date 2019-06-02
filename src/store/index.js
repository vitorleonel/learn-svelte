import { writable } from "svelte/store";

let INITIAL_STATE = JSON.parse(window.localStorage.getItem("tasks")) || [];

export default writable(INITIAL_STATE);
