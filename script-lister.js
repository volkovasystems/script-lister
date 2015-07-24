var path = require( "path" );
var fs = require( "fs" );

var scriptLister = function scriptLister( scriptList, pathList ){
    if( !( Array.isArray( pathList ) &&
        pathList.length > 0 ) )
    {
        pathList = [ ".", "client", "script" ];
    }

    var fileList = scriptList
        .map( function onEachScriptFile( scriptFile ){
        	return path.resolve.apply( null,  pathList.concat( [ scriptFile ] ) );
        } )
        .filter( function onEachScriptFile( scriptFile ){
        	return fs.existsSync( scriptFile );
        } );

    if( "exports" in this ){
        this.exports = fileList;

    }else{
        return fileList;
    }
};

module.exports = scriptLister;
