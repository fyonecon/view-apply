/*框架辅助功能，帮助框架可以在多种苛刻条件下正常使用*/

/*
* 全局清除页面被广告劫持
* 一般添加ad元素在页面尾部
* */
let ad_time = 0;
function clear_wifi_ad() {
    let wifi_ad_script =  $("#depend-css").prevAll("script");
    let wifi_ad_div =  $("#wifi-ad").nextAll();
    view.log("WiFi广告劫持script="+wifi_ad_script.length);
    wifi_ad_script.remove();
    wifi_ad_div.remove();
    if (wifi_ad_script.length === 0 && wifi_ad_div.length === 0){
        clearInterval(ad_time);
    }
}
(function () {
    ad_time = setInterval(function () {
        clear_wifi_ad();
    },2000);
    clear_wifi_ad();
})();