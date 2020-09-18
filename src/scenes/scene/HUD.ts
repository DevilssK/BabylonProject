import { Node } from "@babylonjs/core";

/**
 * This represents a script that is attached to a node in the editor.
 * Available nodes are:
 *      - Meshes
 *      - Lights
 *      - Cameas
 *      - Transform nodes
 * 
 * You can extend the desired class according to the node type.
 * Example:
 *      export default class MyMesh extends Mesh {
 *          public onUpdate(): void {
 *              this.rotation.y += 0.04;
 *          }
 *      }
 * The function "onInitialize" is called immediately after the constructor is called.
 * The functions "onStart" and "onUpdate" are called automatically.
 */

 
import { TextBlock, StackPanel, AdvancedDynamicTexture, Image, Button, Rectangle, Control, Grid } from "@babylonjs/gui";
import { Scene, Sound, ParticleSystem, PostProcess, Effect, SceneSerializer } from "@babylonjs/core";

export default class ui  {

    private _scene: Scene;
    public time: number; //keep track to signal end game REAL TIME
    private _prevTime: number = 0;
    private _clockTime: TextBlock = null; //GAME TIME
    private _startTime: number;
    private _stopTimer: boolean;
    
    
    //Pause toggle
    public gamePaused: boolean;

    //Quit game
    public quit: boolean;
    public transition: boolean = false;

    //UI Elements
    public pauseBtn: Button;
    public fadeLevel: number;
    private _playerUI;
    private _pauseMenu;
    private _controls;
    public tutorial;
    public hint;
    
    
    
    
    /**
     * Override constructor.
     * @warn do not fill.
     */
    // @ts-ignore ignoring the super call as we don't want to re-init
    constructor(scene: Scene) {

        this._scene = scene;

        const playerUI = AdvancedDynamicTexture.CreateFullscreenUI("UI");
        this._playerUI = playerUI;
        this._playerUI.idealHeight = 720; }

    /**
     * Called on the node is being initialized.
     * This function is called immediatly after the constructor has been called.
     */
    public onInitialize(): void {
        // ...
    }

    /**
     * Called on the scene starts.
     */
    public onStart(): void {
        // ...
    }

    /**
     * Called each frame.
     */
    public onUpdate(): void {
        // ...
    }

    /**
     * Called on a message has been received and sent from a graph.
     * @param message defines the name of the message sent from the graph.
     * @param data defines the data sent in the message.
     * @param sender defines the reference to the graph class that sent the message.
     */
    public onMessage(name: string, data: any, sender: any): void {
        switch (name) {
            case "myMessage":
                // Do something...
                break;
        }
    }
}
