var SubgameManager = require('SubgameManager');

cc.Class({
    extends: cc.Component,

    properties: {
        downloadBtn: {
            default: null,
            type: cc.Node
        },
        downloadLabel: {
            default: null,
            type: cc.Label
        },
        updateUI: {
            default: null,
            type: cc.Node
        },
    },

    show: function () {
        if (this.updateUI.active === false) {
            this.updateUI.active = true;
        }
    },

    onLoad: function () {
        var name = 'subgame';    
        //判断子游戏有没有下载
        var sm = new SubgameManager();
        if (sm.isSubgameDownLoad(name)) {
            //已下载，判断是否需要更新
            sm.needUpdateSubgame(name, (success) => {
                if (success) {
                    this.downloadLabel.string = "子游戏需要更新";
                } else {
                    this.downloadLabel.string = "子游戏不需要更新";
                }
            }, () => {
                cc.log('出错了');
            });
        } else {
            this.downloadLabel.string = "子游戏未下载";
        }

        this.downloadBtn.on('click', () => {
            //下载子游戏/更新子游戏
            sm.downloadSubgame(name, (progress) => {
                if (isNaN(progress)) {
                    progress = 0;
                }
                this.downloadLabel.string = "资源下载中   " + parseInt(progress * 100) + "%";
            }, function(success) {
                if (success) {
                    sm.enterSubgame(name);
                } else {
                    cc.log('下载失败');
                }
            });
        }, this);

        this.updateUI.active = false;
    },
});