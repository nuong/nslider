/*
    Include heade.js for async load js and responsive
     https://github.com/headjs/headjs 
*/
/*! head.core - v1.0.2 */
(function(n,t){"use strict";function r(n){a[a.length]=n}function k(n){var t=new RegExp(" ?\\b"+n+"\\b");c.className=c.className.replace(t,"")}function p(n,t){for(var i=0,r=n.length;i<r;i++)t.call(n,n[i],i)}function tt(){var t,e,f,o;c.className=c.className.replace(/ (w-|eq-|gt-|gte-|lt-|lte-|portrait|no-portrait|landscape|no-landscape)\d+/g,"");t=n.innerWidth||c.clientWidth;e=n.outerWidth||n.screen.width;u.screen.innerWidth=t;u.screen.outerWidth=e;r("w-"+t);p(i.screens,function(n){t>n?(i.screensCss.gt&&r("gt-"+n),i.screensCss.gte&&r("gte-"+n)):t<n?(i.screensCss.lt&&r("lt-"+n),i.screensCss.lte&&r("lte-"+n)):t===n&&(i.screensCss.lte&&r("lte-"+n),i.screensCss.eq&&r("e-q"+n),i.screensCss.gte&&r("gte-"+n))});f=n.innerHeight||c.clientHeight;o=n.outerHeight||n.screen.height;u.screen.innerHeight=f;u.screen.outerHeight=o;u.feature("portrait",f>t);u.feature("landscape",f<t)}function it(){n.clearTimeout(b);b=n.setTimeout(tt,50)}var y=n.document,rt=n.navigator,ut=n.location,c=y.documentElement,a=[],i={screens:[240,320,480,640,768,800,1024,1280,1440,1680,1920],screensCss:{gt:!0,gte:!1,lt:!0,lte:!1,eq:!1},browsers:[{ie:{min:6,max:11}}],browserCss:{gt:!0,gte:!1,lt:!0,lte:!1,eq:!0},html5:!0,page:"-page",section:"-section",head:"head"},v,u,s,w,o,h,l,d,f,g,nt,e,b;if(n.head_conf)for(v in n.head_conf)n.head_conf[v]!==t&&(i[v]=n.head_conf[v]);u=n[i.head]=function(){u.ready.apply(null,arguments)};u.feature=function(n,t,i){return n?(Object.prototype.toString.call(t)==="[object Function]"&&(t=t.call()),r((t?"":"no-")+n),u[n]=!!t,i||(k("no-"+n),k(n),u.feature()),u):(c.className+=" "+a.join(" "),a=[],u)};u.feature("js",!0);s=rt.userAgent.toLowerCase();w=/mobile|android|kindle|silk|midp|phone|(windows .+arm|touch)/.test(s);u.feature("mobile",w,!0);u.feature("desktop",!w,!0);s=/(chrome|firefox)[ \/]([\w.]+)/.exec(s)||/(iphone|ipad|ipod)(?:.*version)?[ \/]([\w.]+)/.exec(s)||/(android)(?:.*version)?[ \/]([\w.]+)/.exec(s)||/(webkit|opera)(?:.*version)?[ \/]([\w.]+)/.exec(s)||/(msie) ([\w.]+)/.exec(s)||/(trident).+rv:(\w.)+/.exec(s)||[];o=s[1];h=parseFloat(s[2]);switch(o){case"msie":case"trident":o="ie";h=y.documentMode||h;break;case"firefox":o="ff";break;case"ipod":case"ipad":case"iphone":o="ios";break;case"webkit":o="safari"}for(u.browser={name:o,version:h},u.browser[o]=!0,l=0,d=i.browsers.length;l<d;l++)for(f in i.browsers[l])if(o===f)for(r(f),g=i.browsers[l][f].min,nt=i.browsers[l][f].max,e=g;e<=nt;e++)h>e?(i.browserCss.gt&&r("gt-"+f+e),i.browserCss.gte&&r("gte-"+f+e)):h<e?(i.browserCss.lt&&r("lt-"+f+e),i.browserCss.lte&&r("lte-"+f+e)):h===e&&(i.browserCss.lte&&r("lte-"+f+e),i.browserCss.eq&&r("eq-"+f+e),i.browserCss.gte&&r("gte-"+f+e));else r("no-"+f);r(o);r(o+parseInt(h,10));i.html5&&o==="ie"&&h<9&&p("abbr|article|aside|audio|canvas|details|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|progress|section|summary|time|video".split("|"),function(n){y.createElement(n)});p(ut.pathname.split("/"),function(n,u){if(this.length>2&&this[u+1]!==t)u&&r(this.slice(u,u+1).join("-").toLowerCase()+i.section);else{var f=n||"index",e=f.indexOf(".");e>0&&(f=f.substring(0,e));c.id=f.toLowerCase()+i.page;u||r("root"+i.section)}});u.screen={height:n.screen.height,width:n.screen.width};tt();b=0;n.addEventListener?n.addEventListener("resize",it,!1):n.attachEvent("onresize",it)})(window);
/*! head.load - v1.0.3 */
(function(n,t){"use strict";function w(){}function u(n,t){if(n){typeof n=="object"&&(n=[].slice.call(n));for(var i=0,r=n.length;i<r;i++)t.call(n,n[i],i)}}function it(n,i){var r=Object.prototype.toString.call(i).slice(8,-1);return i!==t&&i!==null&&r===n}function s(n){return it("Function",n)}function a(n){return it("Array",n)}function et(n){var i=n.split("/"),t=i[i.length-1],r=t.indexOf("?");return r!==-1?t.substring(0,r):t}function f(n){(n=n||w,n._done)||(n(),n._done=1)}function ot(n,t,r,u){var f=typeof n=="object"?n:{test:n,success:!t?!1:a(t)?t:[t],failure:!r?!1:a(r)?r:[r],callback:u||w},e=!!f.test;return e&&!!f.success?(f.success.push(f.callback),i.load.apply(null,f.success)):e||!f.failure?u():(f.failure.push(f.callback),i.load.apply(null,f.failure)),i}function v(n){var t={},i,r;if(typeof n=="object")for(i in n)!n[i]||(t={name:i,url:n[i]});else t={name:et(n),url:n};return(r=c[t.name],r&&r.url===t.url)?r:(c[t.name]=t,t)}function y(n){n=n||c;for(var t in n)if(n.hasOwnProperty(t)&&n[t].state!==l)return!1;return!0}function st(n){n.state=ft;u(n.onpreload,function(n){n.call()})}function ht(n){n.state===t&&(n.state=nt,n.onpreload=[],rt({url:n.url,type:"cache"},function(){st(n)}))}function ct(){var n=arguments,t=n[n.length-1],r=[].slice.call(n,1),f=r[0];return(s(t)||(t=null),a(n[0]))?(n[0].push(t),i.load.apply(null,n[0]),i):(f?(u(r,function(n){s(n)||!n||ht(v(n))}),b(v(n[0]),s(f)?f:function(){i.load.apply(null,r)})):b(v(n[0])),i)}function lt(){var n=arguments,t=n[n.length-1],r={};return(s(t)||(t=null),a(n[0]))?(n[0].push(t),i.load.apply(null,n[0]),i):(u(n,function(n){n!==t&&(n=v(n),r[n.name]=n)}),u(n,function(n){n!==t&&(n=v(n),b(n,function(){y(r)&&f(t)}))}),i)}function b(n,t){if(t=t||w,n.state===l){t();return}if(n.state===tt){i.ready(n.name,t);return}if(n.state===nt){n.onpreload.push(function(){b(n,t)});return}n.state=tt;rt(n,function(){n.state=l;t();u(h[n.name],function(n){f(n)});o&&y()&&u(h.ALL,function(n){f(n)})})}function at(n){n=n||"";var t=n.split("?")[0].split(".");return t[t.length-1].toLowerCase()}function rt(t,i){function e(t){t=t||n.event;u.onload=u.onreadystatechange=u.onerror=null;i()}function o(f){f=f||n.event;(f.type==="load"||/loaded|complete/.test(u.readyState)&&(!r.documentMode||r.documentMode<9))&&(n.clearTimeout(t.errorTimeout),n.clearTimeout(t.cssTimeout),u.onload=u.onreadystatechange=u.onerror=null,i())}function s(){if(t.state!==l&&t.cssRetries<=20){for(var i=0,f=r.styleSheets.length;i<f;i++)if(r.styleSheets[i].href===u.href){o({type:"load"});return}t.cssRetries++;t.cssTimeout=n.setTimeout(s,250)}}var u,h,f;i=i||w;h=at(t.url);h==="css"?(u=r.createElement("link"),u.type="text/"+(t.type||"css"),u.rel="stylesheet",u.href=t.url,t.cssRetries=0,t.cssTimeout=n.setTimeout(s,500)):(u=r.createElement("script"),u.type="text/"+(t.type||"javascript"),u.src=t.url);u.onload=u.onreadystatechange=o;u.onerror=e;u.async=!1;u.defer=!1;t.errorTimeout=n.setTimeout(function(){e({type:"timeout"})},7e3);f=r.head||r.getElementsByTagName("head")[0];f.insertBefore(u,f.lastChild)}function vt(){for(var t,u=r.getElementsByTagName("script"),n=0,f=u.length;n<f;n++)if(t=u[n].getAttribute("data-headjs-load"),!!t){i.load(t);return}}function yt(n,t){var v,p,e;return n===r?(o?f(t):d.push(t),i):(s(n)&&(t=n,n="ALL"),a(n))?(v={},u(n,function(n){v[n]=c[n];i.ready(n,function(){y(v)&&f(t)})}),i):typeof n!="string"||!s(t)?i:(p=c[n],p&&p.state===l||n==="ALL"&&y()&&o)?(f(t),i):(e=h[n],e?e.push(t):e=h[n]=[t],i)}function e(){if(!r.body){n.clearTimeout(i.readyTimeout);i.readyTimeout=n.setTimeout(e,50);return}o||(o=!0,vt(),u(d,function(n){f(n)}))}function k(){r.addEventListener?(r.removeEventListener("DOMContentLoaded",k,!1),e()):r.readyState==="complete"&&(r.detachEvent("onreadystatechange",k),e())}var r=n.document,d=[],h={},c={},ut="async"in r.createElement("script")||"MozAppearance"in r.documentElement.style||n.opera,o,g=n.head_conf&&n.head_conf.head||"head",i=n[g]=n[g]||function(){i.ready.apply(null,arguments)},nt=1,ft=2,tt=3,l=4,p;if(r.readyState==="complete")e();else if(r.addEventListener)r.addEventListener("DOMContentLoaded",k,!1),n.addEventListener("load",e,!1);else{r.attachEvent("onreadystatechange",k);n.attachEvent("onload",e);p=!1;try{p=!n.frameElement&&r.documentElement}catch(wt){}p&&p.doScroll&&function pt(){if(!o){try{p.doScroll("left")}catch(t){n.clearTimeout(i.readyTimeout);i.readyTimeout=n.setTimeout(pt,50);return}e()}}()}i.load=i.js=ut?lt:ct;i.test=ot;i.ready=yt;i.ready(r,function(){y()&&u(h.ALL,function(n){f(n)});i.feature&&i.feature("domloaded",!0)})})(window);
/*
//# sourceMappingURL=head.min.js.map
*/
//debounce from underscore.js
var debounce = function(func, wait, immediate) {
                var timeout, args, context, timestamp, result;

                var later = function() {
                var last = new Date().getTime() - timestamp;

                if (last < wait && last >= 0) {
                    timeout = setTimeout(later, wait - last);
                } else {
                    timeout = null;
                    if (!immediate) {
                    result = func.apply(context, args);
                    if (!timeout) context = args = null;
                    }
                }
                };

                return function() {
                context = this;
                args = arguments;
                timestamp = new Date().getTime();
                var callNow = immediate && !timeout;
                if (!timeout) timeout = setTimeout(later, wait);
                if (callNow) {
                    result = func.apply(context, args);
                    context = args = null;
                }

                return result;
                };
            }
  
;(function ($, window, document, undefined) {
    var NSlider = function(element, opts){
        var self = this;
        var $parent = $(element);
        $parent.css({'position':'relative'});
        var $element = $($parent.find('ul.n-slide')[0]);
        var slideOptions = opts || {};
         
        var DEFAULT_OPTION = {
            controls :true,
            loop : true,
            item : 1,
            prev : '&lt;',
            next : '&gt;',
            indicator : true,
            auto:false
        }
        var _slidePoint , _loop, _slideWidth, _auto, _controls, _itemOnPage, _itemWidth,
            _items, _indicators, _slideCoodinates = [], curPos = {}, _viewport;
        var tweenable;

        var chunk = function(arr, chunkSize) {
            var groups = [], i;
            for (i = 0; i < arr.length; i += chunkSize) {
                groups.push(arr.slice(i, i + chunkSize));
            }
            return groups;
        }
        var isTransformSupport = function() {
            var prefix = ['webkit', 'moz', 'o', 'ms'],
                prop = 'transform',
                safProp = "webkitTransform",
                cssStyle;
                if (document.body.style[prop] !== undefined) {
                    prefix.every(function (item) {
                        var e = '-' + item + '-' + prop;
                        if (document.body.style[e] !== undefined) {
                            cssStyle = e;
                            return false;
                        }
                        return true;
                    });
                } else if ( document.body.style[safProp] !== undefined) {
                    cssStyle = '-webkit-transform';
                } else {
                    cssStyle = undefined;
                }
                return cssStyle;
        }
        var buildClonedItem = function() {
            var append = '', prepend = '';
            _items[0].toArray().forEach(function(item) {
                var cloneItem = $(item).clone(true);
                $(cloneItem).addClass('cloned');
                append += $(cloneItem).wrap('<div>').parent().html();
            })  
            _items[_items.length - 1].toArray().forEach(function(item) {
                var cloneItem = $(item).clone(true);
                $(cloneItem).addClass('cloned');
                prepend += $(cloneItem).wrap('<div>').parent().html();
            })
            _slideCoodinates.unshift({
                index : -1,
                cloned : true,
                width : _itemWidth * _items[_items.length - 1].toArray().length
            })
            
            _slideCoodinates.push({
                index : _items.length,
                cloned : true,
                width : _itemWidth * _items[0].toArray().length
            })
         
            //re-update slide index
            _slideCoodinates = _slideCoodinates.map(function(item) {
                item.index++;
                return item;
            })
            _slidePoint.start = 1;
            _slidePoint.end += 1;
            $element.append(append);
            $element.prepend(prepend);

        }
        var addControls = function() {
            $parent.find('div.nslide-ctrl').remove();
            var control = $('<div class="nslide-ctrl"></div>');
            $parent.append(control.html('<div class="prev-ctrl">'+DEFAULT_OPTION.prev +'</div> <div class="next-ctrl">'+DEFAULT_OPTION.next +'</div>'));
            control.find('.prev-ctrl').on("click", function(e) {
                if(curPos.index > 0 ) {
                     curPos = _slideCoodinates[curPos.index - 1];
                    _goToSlide();
                }
            })
            control.find('.next-ctrl').on("click", function(e) {
                 if(curPos.index < _slideCoodinates.length -1 ) {
                     curPos = _slideCoodinates[curPos.index + 1];
                    _goToSlide();
                }
            })
        }
        var addIndicator = function() {
            $parent.find('div.nslide-indicator').remove();
            var control = $('<div class="nslide-indicator"></div>');
            var indList = _slideCoodinates.filter(function(item) {
                return !item.cloned;
            })
            var content = '';
            var iClass = slideOptions.indicatorDot? 'dot' : 'num';
            if(slideOptions.indicatorDot) var dot = " ";
            indList.forEach(function(item, index) {
                content += '<span class="indicator" id-index="' + item.index + '"> <span class="' + iClass + '">' + (dot || (index + 1)) + '</span></span>';
            })
            $parent.append(control.html(content));
            _indicators = $parent.find('.nslide-indicator>span.indicator');
            control.find('>span.indicator').on("click", function(e) {
                curPos = _slideCoodinates[parseInt($(this).attr('id-index'))];
               _goToSlide();
            })
        }
        var setIndicatorActive = function() {
            if(_indicators) {
                _indicators.toArray().forEach(function(item) {
                    if($(item).attr('id-index') == curPos.index) {
                        $(item).siblings().removeClass('active');
                        $(item).addClass('active');
                    }
                })
            }
        }
        var styleMargin = function(animation, left) {
              tweenable.stop();
                 if(animation) {
                     tweenable.tween({
                        from: { x: parseInt($element[0].style['margin-left'].replace("px", ""))},
                        to:   { x: left
                            },
                        duration: 500,
                        easing: 'linear',
                        step: function (state) {
                            $element.css({'margin-left' : state.x});
                        }
                    });
                 }else {
                      $element.css({'margin-left' : left + 'px'});
                 }
        }
         var setSlidePos = function(pos, animation) {
             var style = {};
             var left = - (curPos.startPos);
             if(isTransformSupport()) {
                style[isTransformSupport()] = 'translate(' + left + 'px, 0px)';
                if(animation) {
                    style.transition =  "all .5s";
                }else {
                    style.transition =  "all 0s";
                }
                 $element.css(style);
             }else {
                 if(!tweenable) {
                    head.load("https://cdn.rawgit.com/jeremyckahn/shifty/master/dist/shifty.min.js", function() {
                        tweenable = new Tweenable();
                        styleMargin(animation, left);
                    });
                 }else {
                     styleMargin(animation, left);
                 }
               
             }
             setIndicatorActive();
             $element.find('li').removeClass('active');
             chunk($element.children('li'), _itemOnPage)[curPos.index].toArray().forEach(function(item) {
                 $(item).addClass('active');
             })
        }
        
        var _goToSlide = function() {
            setSlidePos(curPos.startPos, true);
            if(curPos.index == 0 && curPos.cloned) {
                setTimeout(function(){
                    curPos = _slideCoodinates[_slidePoint.end];
                    setSlidePos(curPos.startPos, false);
                }, 500)
                
            }else if(curPos.index == _slideCoodinates.length-1 && curPos.cloned) {
                setTimeout(function(){
                    curPos = _slideCoodinates[_slidePoint.start];
                    setSlidePos(curPos.startPos, false);
                },500)
            }
        }
        var initSlider = (function() {
            _loop = slideOptions.loop !== undefined ? slideOptions.loop : DEFAULT_OPTION.loop;
             _auto = slideOptions.auto != undefined ? slideOptions.auto : DEFAULT_OPTION.auto;
            _controls = slideOptions.controls !== undefined? slideOptions.controls : DEFAULT_OPTION.controls;
            _indicator = slideOptions.indicator !== undefined? slideOptions.indicator : DEFAULT_OPTION.indicator;
            _itemOnPage = slideOptions.item || DEFAULT_OPTION.item;

            return function() {
                _slideWidth =  $parent.width();
                 _itemWidth = (_slideWidth / _itemOnPage).toFixed(2);
                _viewport = window.innerWidth;
                _slideCoodinates = [];
                _items = [] , _indicators = undefined;
                $element.children('li.empty').remove();
                $element.children('li.cloned').remove();
                var blankItemsNo =  $element.children('li').length % _itemOnPage;
                if(blankItemsNo > 0) {
                    var blankItem = $($element.children('li')[0]).clone().empty();
                    for(var i = 0; i< (_itemOnPage - blankItemsNo); i++) {
                        $(blankItem).addClass('empty');
                        $element.append($(blankItem).wrap('<div>').parent().html());
                    }
                }
                _items = chunk($element.children('li'), _itemOnPage);
                _items.forEach(function(el, index) {
                    var coodinate = {
                        index : index,
                        cloned : false,
                        width :  el.toArray().length * _itemWidth
                    }
                    _slideCoodinates.push(coodinate);
                    el.toArray().forEach(function(item) {
                        $(item).css({'width' : _itemWidth});
                        if(slideOptions.onClickItem != undefined) {
                            $(item).on("click", function(e) {
                                if(!$(this).hasClass('empty')) {
                                    slideOptions.onClickItem(this);
                                }
                            })
                        }
                    })
                })
                _slidePoint = {
                    start: 0,
                    end : _slideCoodinates.length - 1
                }
                if((_loop || _auto) && _items.length>1) {
                    buildClonedItem();
                }
                for(var ind in _slideCoodinates) {
                    _slideCoodinates[ind].startPos = ind > 0 ?_slideCoodinates[ind - 1].startPos + _slideCoodinates[ind - 1].width : 0;
                }
                if(_controls) {
                    addControls();
                }
                if(_indicator) {
                    addIndicator();
                }
            }
        })();
        initSlider();
        curPos = _slideCoodinates[_slidePoint.start];
       _goToSlide();
        (function(){
            if(_auto) {
                setInterval(function(){
                    curPos = _slideCoodinates[curPos.index+1];
                   _goToSlide();
                }
                ,3000);
            }
        })();

        self.addFirst = function(callback) {
            var item = $($element.children('li')[0]).clone().empty();
            $(item).css({'width' : _itemWidth});
            $(item).removeClass('cloned empty');
            $element.prepend($(item).html(''));
            initSlider();
            curPos = _slideCoodinates[_slidePoint.start];
           _goToSlide();
            if(callback) {
                callback.call(this, item);
            }
        }
        self.addLast = function(callback) {
            var item = $($element.children('li')[0]).clone().empty();
            $(item).css({'width' : _itemWidth});
            $(item).removeClass('cloned empty');
            $element.append($(item).html(''));
            initSlider();
            curPos = _slideCoodinates[_slidePoint.end];
           _goToSlide();
            if(callback) {
                callback.call(this, item);
            }
        }
        self.removeItem = function(attr, listItem) {
            if(listItem instanceof Array ) {
                listItem.forEach(function(item) {
                   $element.find("li["+attr + "='"+ item +"']").remove();
                })
            }else {
                $element.find("li["+attr + "='"+ listItem +"']").remove();
            }
            initSlider();
            curPos = _slideCoodinates[_slidePoint.start];
        }
        self.goToSlide = function(index) {
            if(index > 0 && index <= _slideCoodinates.length - 1) {
                curPos = _slideCoodinates[index];
               _goToSlide();
            }
        }
        $(window).resize(debounce(function(){
            if(window.innerWidth >= 1200) {
                if(_viewport >= 1200) return;
            }else if(window.innerWidth < 1200 && window.innerWidth > 922) {
                if(_viewport < 1200 && _viewport > 922) return;
            }else if(window.innerWidth <= 922) {
                 if(_viewport <= 922 ) return;
            }
            initSlider();
        },100));
        
        $element.touch({
            preventDefault: {
                                swipe: true
                            } 
        });
        $element.on('swipeLeft', function(event, object) {
             if(curPos.index < _slideCoodinates.length -1 ) {
                     curPos = _slideCoodinates[curPos.index + 1];
                    _goToSlide();
                }
        }).on('swipeRight', function(event) {
           if(curPos.index > 0 ) {
                    curPos = _slideCoodinates[curPos.index - 1];
                _goToSlide();
            }
        })



    };
    NSlider.prototype.goToSlide = function(index) {
        var self = this;
         self.goToSlide(index);
    }
    NSlider.prototype.addFirst = function(callback) {
        var self = this;
        self.addFirst(callback);
    }
    NSlider.prototype.addLast = function(callback) {
        var self = this;
        self.addLast(callback);
    }
    NSlider.prototype.removeItem = function(attr, listItem) {
        var self = this;
        self.removeItem(attr, listItem);
    }
    $.fn.nSlider = function(options) {
        return new NSlider(this, options);
    };
     $.fn.nSlider.Constructor = NSlider;
})(window.jQuery, window, document);


