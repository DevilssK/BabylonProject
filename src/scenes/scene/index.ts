/**
 * Generated by the Babylon.JS Editor v4.0.0-beta.7
 */

import { Scene } from "@babylonjs/core";
import { attachScripts, configurePostProcesses } from "../tools";

/**
 * Defines the map of all available scripts in the project.
 */
export const scriptsMap = {
	"src/scenes/scene/player.ts": require("./player"),
	"src/scenes/scene/playerCamera.ts": require("./playerCamera"),
}

/**
 * Works as an helper, this will:
 * = attach scripts on objects.
 * @param scene the scene to attach scripts, etc.
 */
export async function runScene(scene: Scene, rootUrl?: string): Promise<void> {
    // Attach scripts to objects in scene.
    attachScripts(scriptsMap, scene);

    // Configure post-processes
    configurePostProcesses(scene, rootUrl);
}
