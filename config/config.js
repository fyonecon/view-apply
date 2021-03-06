/*自定义配置页面的一些全局参数*/

/*
* 1）页面生命周期（index.html--config.js--框架解析index.js--公共all.js/css文件--执行wifi广告劫持严重和清除--pages.htm--pages.js--page_loaded.js）。
* 2）不依赖于node但需依赖服务端环境，或者依赖CDN环境。
* */

const debug = true;                     // 调试模式，统一打印日志，true & false

// 框架渲染的必要参数
const cookie_prefix   = "view_";        // cookie前缀
const route_404       = "?route=404";   // 404
const route_default   = "?route=home";  // 页面进入默认页
const file_url        = "./";             // 资源文件CDN主域名（js、css、img、font等资源文件）
const page_url        = "./";             // htm文件的服务器地址，因为使用了ajax请求，不能直接请求本地文件，可以全部放在CDN里面
const cache_time      = 100;            // 缓存时间：s
const page_time       = Math.floor((new Date()).getTime()/100)*cache_time;  // 页面时间戳：x秒为资源单位，x秒（文件缓存周期）后刷新页面浏览器会改变资源文件的缓存
const api_url         = "https://api.cswendu.com/chengzi/public/index.php/api/";  // api主地址

// 自定义
// 不需要登录使用的验证参数
let user_token = "";
let app_class = "view_play";
// 登录用户使用的验证参数
let user_app_token = "";
let user_id = 0;


