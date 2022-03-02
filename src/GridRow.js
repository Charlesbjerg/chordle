function GridRow() {
    return (
        <div class="row grid grid-cols-6 gap-4 bg-slate-700 p-2 rounded-md">
            {[...Array(6)].map((x, i) => 
                <p class="p-4 bg-slate-600 text-white rounded-md leading-none">A</p>
            )}
        </div>
    );
}

export default GridRow;