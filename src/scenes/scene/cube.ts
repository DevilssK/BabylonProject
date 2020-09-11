import { Mesh, Vector3, Axis } from "@babylonjs/core";

export default class Cube extends Mesh {

    /**
     * Override constructor.
     * @warn do not fill.
     */
    // @ts-ignore ignoring the super call as we don't want to re-init
    private constructor() { }

    public onUpdate(): void {
        this.rotate(Axis.X, 0.05);
        this.rotate(Axis.Y, 0.05);
    }
}