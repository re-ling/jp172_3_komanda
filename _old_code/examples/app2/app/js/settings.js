// settings.js

// App settings
requirejs.config({
    baseUrl     :       'app/js/lib',
    // module name can be mapped to CDN url
    paths: {
        'react'         :   'react.development',
        'react-dom'     :   'react-dom.development',
        'hyperscript'   :   'react-hyperscript',
        'helpers'       :   'hyperscript-helpers',
//        'react-class'   :   'create-react-class',
        data            :   '../data',
        script          :   '../script'
    }
});

// Main entry of app
requirejs(['script/main']);