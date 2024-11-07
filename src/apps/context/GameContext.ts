import { deepMap } from "nanostores";

interface pathData {
    clientX: number;
    clientY: number;
    offsetX: number;
    offsetY: number;
}

interface gameProps {
    status: {
        components: {
            [key: string]: pathData;
        };
    };
    setting: object;
    [key: string]: any;
}


const $game = deepMap<gameProps>({
    status: {
        components: {
            
        }
    },
    setting: {

    }
})

export {
    $game
}