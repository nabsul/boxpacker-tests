const Triplet = require( './triplet' );

const findBiggerBin = ( bin, bins ) => {
	return bins.find( b => b.getVolume() > bin.getVolume() );
};

const putItem = ( bin, item ) => {
	const dims = item.dimensions;
	item.position = new Triplet( 0, 0, 0 );
	for( let i = 0; i < 6; i++ ) {
		item.dimensions = dims.rotate( i );
		if ( ! bin.itemFits( item ) ) {
			continue;
		}

		const intersection = bin.items.find( ( i ) => item.position.intersect( i ) );
		if( ! intersection ) {
			bin.items.push( item );
		}

		return;
	}
};

const findFittedBin = ( item, bins ) => {
	for ( let bin in bins ) {
		if ( ! putItem( bin, item ) ) {
			continue;
		}

		if ( bin.items.length === 1 && bin.items[ 0 ] === item ) {
			// TODO double check this
			// Clear items in bin as we previously just check whether item i
			// fits in bin b.
			bin.Items = [];
		}

		return bin;
	}

	return null;
};


const packToBin = ( bin, bins, item ) => {
	if ( ! bin.putItem( item ) ) {
		const bin2 = findBiggerBin( bin, bins );
		if ( bin2 ) {
			return packToBin( bin2, item );
		}

		return this.items;
	}
};

const binCompare = ( bin1, bin2 ) => bin1.getVolume() < bin2.getVolume();
const itemCompare = ( item1, item2 ) => item1.getVolume() > item2.getVolume();

const pack = ( bins, items ) => {
	const unfitItems = [];

	// sort bins and items
	bins = bins.sort( binCompare );
	items = items.sort( itemCompare );

	// TODO(gedex): validate bins volumes. this is the reason we need error
	// to be returned before iterating items.

	while( items.length > 0 ) {
		const item = items.unshift();
		const bin = findFittedBin( item, bins );
		if ( ! bin ) {
			unfitItems.push( bin );
			continue;
		}

		packToBin( bin, bins, item );
	}

	return unfitItems;
};

module.exports = pack;
