/**
 * Test several box packing algorithms with the same data sets
 */

const algos = {
	boxologic: require( './lib/boxologic' ),
	bp3d: require( './lib/bp3d' ),
	boxo: require( './lib/3dbinpacker' ),
};

const data = require( './data' );

const testAlgo = ( algo, test ) => {
	const result = algo( test );
	console.dir( result, { depth: null } );
};

data.forEach( ( test ) => {
	testAlgo( algos.boxologic, test );
	testAlgo( algos.bp3d, test );
	testAlgo( algos.boxo, test );
} );
