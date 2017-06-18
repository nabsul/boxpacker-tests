const binPacking = require( '3d-bin-packing' );

module.exports = ( test ) => {
	const wrappers = new binPacking.WrapperArray();
	test.boxes.forEach( ( box ) => wrappers.push( new binPacking.Wrapper( box.name, 0, box.length, box.width, box.height ) ) );
	const instances = new binPacking.InstanceArray();
	test.items.forEach( ( item ) => instances.push( new binPacking.Product( item.name, item.length, item.width, item.height ) ) );
	const packer = new binPacking.Packer( wrappers, instances );
	const result = packer.optimize();
	console.dir( packer, {depth:1} );
	console.dir( result, {depth:null} );
	return {};
};
