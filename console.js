(function( window ){
    var console = window.console;
    var oConsole = {
        log: console.log,
       // warn: console.warn,
        debug: console.debug,
       // error: console.error,
       // info: console.info
    };

    function isDev(){
        return window.DEBUG || false;
    }

    function compose( callback, context ){
        function fn(){
            if ( isDev() ){
                callback.apply(context, arguments);
            }
        }

        return fn;
    }

    for ( var key in oConsole ){
        if ( oConsole.hasOwnProperty( key ) ){
            console[key] = compose( oConsole[key] );
            console['f'+key] = oConsole[key];
        }
    }

}(window));
