class Triplet {
	x;
	y;
	z;

	clone() { return new Triplet( this.x, this.y, this.z ); }

	add( triplet ) {
		const result = this.clone();
		result.x += triplet.x;
		result.y += triplet.y;
		result.z += triplet.z;
		return result;
	}

	subtract( triplet ) {
		const result = this.clone();
		result.x -= triplet.x;
		result.y -= triplet.y;
		result.z -= triplet.z;
		return result;
	}

	max( triplet ) {
		const result = this.clone();
		result.x = Math.max( this.x, triplet.x );
		result.y = Math.max( this.y, triplet.y );
		result.z = Math.max( this.z, triplet.z );
		return result;
	}

	min( triplet ) {
		const result = this.clone();
		result.x = Math.min( this.x, triplet.x );
		result.y = Math.min( this.y, triplet.y );
		result.z = Math.min( this.z, triplet.z );
		return result;
	}

	divide( triplet ) {
		const result = this.clone();
		result.x /= triplet.x;
		result.y /= triplet.y;
		result.z /= triplet.z;
		return result;
	}

	set( x, y, z ) {
		this.x = x;
		this.y = y;
		this.z = z;
		return this;
	}

	anyLessThan( triplet ) {
		return this.x < triplet.x || this.y < triplet.y || this.z < triplet.z;
	}

	allLessThan( triplet ) {
		return this.x < triplet.x && this.y < triplet.y && this.z < triplet.z;
	}

	rotate( pattern ) {
		switch( pattern ) {
			default:
				return new Triplet( this.x, this.y, this.z );
			case 1:
				return new Triplet( this.x, this.z, this.y );
			case 2:
				return new Triplet( this.y, this.x, this.z );
			case 3:
				return new Triplet( this.y, this.z, this.x );
			case 4:
				return new Triplet( this.z, this.x, this.y );
			case 5:
				return new Triplet( this.z, this.y, this.x );
		}
	}

	constructor( x, y, z ) {
		this.set( x, y, z );
	}
}

module.exports = Triplet;