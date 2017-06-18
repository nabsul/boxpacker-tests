const Triplet = require( './triplet' );

const two = new Triplet( 2, 2, 2 );

class Item {
	name;

	dimensions;
	position;
	weight;

	constructor( n, dimensions, weight ) {
		this.name = n;
		this.dimensions = dimensions;
		this.position = null;
		this.weight = weight;
	}

	isIntersecting( item ) {
		const d1 = this.dimensions.divide( two );
		const d2 = item.dimensions.divide( two );

		const c1 = this.position.add( d1 );
		const c2 = item.position.add( d2 );

		const i = c1.max( c2 ).subtract( c1.min( c2 ) );

		const avg = this.dimensions.add( item.dimensions ).divide( two );

		return i.allLessThan( avg );
	}
}

module.exports = Item;
