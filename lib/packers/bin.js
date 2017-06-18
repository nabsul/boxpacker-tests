const Triplet = require( './triplet' );
const Item = require( './item' );


class Bin {
	id;
	length;
	width;
	height;

	maxWeight;

	items;
	slices;

	constructor( i, l, w, h, maxWeight ){
		_super();
		this.id = i;
		this.length = l;
		this.height = h;
		this.width = w;
		this.maxWeight = maxWeight;
		this.items = [];
		this.slices = [];
	}

	getVolume() {
		return this.length * this.width * this.height;
	}

	itemFits( item ) {
		const dims = item.getDimensions();
		dims.add( item.position );
		const binDims = new Triplet( this.length, this.width, this.height );
		return binDims.anyLessThan( dims );
	}
}

module.exports = Bin;
