

var AboutLayer = cc.Layer.extend({
    ctor:function(){
        this._super();
        this.init();
    },
    init:function () {
        var sp = new cc.Sprite(res.loading_png);
        sp.anchorX = 0;
        sp.anchorY = 0;
        sp.scale = MW.SCALE;
        this.addChild(sp, 0, 1);

        var cacheImage = cc.textureCache.addImage(res.menuTitle_png);
        var title = new cc.Sprite(cacheImage, cc.rect(0, 40, 120, 38));
        title.x = winSize.width / 2;
        title.y = winSize.height - 60;
        this.addChild(title);

        // There is a bug in LabelTTF native. Apparently it fails with some unicode chars.
        var about = new cc.LabelTTF("   This showcase utilizes many features from Cocos2d-html5 engine, including: Parallax background, tilemap, actions, ease, frame animation, schedule, Labels, keyboard Dispatcher, Scene Transition. \n    Art and audio is copyrighted by Enigmata Genus Revenge, you may not use any copyrigted material without permission. This showcase is licensed under MIT. \n \n Programmer: \n Shengxiang Chen (陈升想) \n Dingping Lv (吕定平) \n Effects animation: Hao Wu(吴昊)\n Quality Assurance:  Sean Lin(林顺)", "Arial", 21, cc.size(MW.WIDTH * 0.85, 0), cc.TEXT_ALIGNMENT_LEFT );
        about.attr({
            x: winSize.width / 2,
            y: MW.HEIGHT / 2 + 30,
            anchorX: 0.5,
            anchorY: 0.5
        });
        about.setColor(cc.color(MW.FONTCOLOR));
        this.addChild(about);

        var label = new cc.LabelTTF("Go back", "Arial", 21);
        label.setColor(cc.color(MW.FONTCOLOR));
        var back = new cc.MenuItemLabel(label, this.onBackCallback);
        var menu = new cc.Menu(back);
        menu.x = winSize.width / 2;
        menu.y = 60;
        this.addChild(menu);

        return true;
    },
    onBackCallback:function (pSender) {
        var scene = new cc.Scene();
        scene.addChild(new SysMenu());
	    cc.director.runScene(new cc.TransitionFade(1.2, scene));
    }
});
