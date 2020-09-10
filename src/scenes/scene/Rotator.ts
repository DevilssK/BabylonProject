import { Scene, Mesh, Axis } from "@babylonjs/core";
import { fromChildren, fromScene } from "../tools";
import Player from "../../../dist/declaration/src/scenes/scene/player";



export default class Rotator extends Mesh {

  /**
   * Override constructor.
   * @warn do not fill.
   */
  // @ts-ignore ignoring the super call as we don't want to re-init
  private constructor() { }

  @fromScene("player")
  private _player: Player;

  @fromChildren("deathSpike")
  private _deathSpike: Mesh;

  public onStart(): void {


  }
  public onUpdate(): void {

    this.rotate(Axis.Y, 0.02);
    
  }



}