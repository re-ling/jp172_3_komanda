// settings.js

// App settings
requirejs.config({
    baseUrl     :       'app/js/lib',
    // module name mapped to CDN url
    paths: {
        'react'         :   'react.development',
        'react-dom'     :   'react-dom.development',
        'hyperscript'   :   'react-hyperscript',
        'helpers'       :   'hyperscript-helpers',
//        'react-class'   :   'create-react-class',
        script          :   '../script'
    }
});

// Main entry of app
requirejs(['script/main']);