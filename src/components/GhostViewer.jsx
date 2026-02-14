import HappyGhost from "../assets/HappyGuy.png";
import OkayGhost from "../assets/OkayGuy.png";
import NotOkayGhost from "../assets/NotOkayGuy.png";
import SadGhost from "../assets/SadGuy.png";
import BadGhost from "../assets/DeadGuy.png";

function GhostViewer({ ghostData }) {

    const getGhostSprite = () => {
        if (!ghostData) return HappyGhost;

        const health = ghostData.health;

        if (health >= 75) return HappyGhost;
        if (health >= 50) return OkayGhost;
        if (health >= 25) return NotOkayGhost;
        if (health >= 2) return SadGhost;
        return BadGhost;
    };

    return (
        <div className="ghost-viewer">
            <img
                src={getGhostSprite()}
                alt="Carbon Ghost"
                className="ghost"
            />
        </div>
    );
}

export default GhostViewer;
