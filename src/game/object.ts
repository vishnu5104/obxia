import { game } from "../obxia";
import type { GameObj } from "../types";

export function destroy(obj: GameObj) {
    obj.destroy();
}

export function getTreeRoot(): GameObj {
    return game.root;
}
