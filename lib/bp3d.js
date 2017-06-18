const execSync = require( 'child_process' ).execSync;

module.exports = ( test ) => {
	const options = {
		cwd: './bin/bp3d/packer',
	};

	execSync( 'go build', options );
	const data = JSON.stringify( test ).replace( /\"/g, '\\"' );
	console.log( data );
	const result = execSync( `packer "${data}"`, options ).toString();
	return JSON.parse(result);
};


