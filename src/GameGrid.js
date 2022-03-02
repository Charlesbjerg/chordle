import GridRow from "./GridRow";

function GameGrid() {
    return (
        <div class="grid grid-rows-6 gap-4">
            {[...Array(6)].map((x, i) => 
                <GridRow />
            )}
        </div>
    );
}

export default GameGrid;