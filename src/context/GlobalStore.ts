import { atom } from "nanostores";

const isBrowser = typeof window !== "undefined";

const $example = atom('Hello world')


const GLOBAL = {
    $example
}

export default GLOBAL
