import { glass } from "glass";
import { assetsConfig } from './configs/assetsConfig.js';
import { gameConfig } from './configs/gameConfig.js';
import { layoutConfig } from './configs/layoutConfig.js';
import { eventsManager } from "glass";
import { rendererEventsData } from "glass";

const canvas = document.querySelector('canvas');
const gl = canvas?.getContext('webgl2', {stencil: true}) ?? null;

if (canvas !== null && gl !== null) {

    eventsManager.addEventListener(rendererEventsData.renderingStarted.name,  () => {

        startMainFlow();

    }, {oneTime: true});

    glass.initialize({
        canvas,
        gl,
        assetsData: assetsConfig,
        gameData: gameConfig,
        layoutData: layoutConfig
    });
}

function startMainFlow() {

    
}