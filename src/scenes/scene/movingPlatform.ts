import { Mesh, BoundingBox, Vector3, AbstractMesh } from "@babylonjs/core";
import Player from "../../../dist/declaration/src/scenes/scene/player";

export default class MovingPlatform extends Mesh {


    private a = 0; // for oscillation
    private PlayerMesh: AbstractMesh
    /**
     * Override constructor.
     * @warn do not fill.
     */
    // @ts-ignore ignoring the super call as we don't want to re-init
    private constructor() {
    }

    public onStart(): void {
        this._showBoundingBox = true;
        this.showBoundingBox = true;
        this._boundingInfo.scale(1.02)
        this.PlayerMesh = this._scene.getMeshByName("player");

    }

    public onUpdate(): void {
        let pos = this.position;
        
        this.position = new Vector3(Math.cos(this.a) * 200, this.position.y, this.position.z);
        this.a += 0.01;


        if (this._boundingInfo.intersects(this._scene.getMeshByName("player")._boundingInfo, true)) {
            this.PlayerMesh.position.x += this.position.x - pos.x;
            console.log('intersect')
        }
    }


}