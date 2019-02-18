cc.Class({
    extends: cc.Component,

    properties: {
        label: {
            default: null,
            type: cc.Label
        },
        // defaults, set visually when attaching this script to the Canvas
        text: 'Hello, World!'
    },

    // use this for initialization
    onLoad: function () {
        cc.error(jsb.fileUtils ? jsb.fileUtils.getWritablePath() : '/');
        cc.error(jsb.fileUtils ? jsb.fileUtils.getDefaultResourceRootPath() : '');
    },

});
