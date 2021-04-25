// var cnzz_protocol = (("https:" == document.location.protocol) ? "https://" : "http://");
// document.write(unescape("%3Cspan id='cnzz_stat_icon_1279741297'%3E%3C/span%3E%3Cscript src='" + cnzz_protocol + "s4.cnzz.com/z_stat.php%3Fid%3D1279741297%26show%3Dpic' type='text/javascript'%3E%3C/script%3E"));

/* <script type="text/javascript">document.write(unescape("%3Cspan id='cnzz_stat_icon_1279740613'%3E%3C/span%3E%3Cscript src='https://s4.cnzz.com/z_stat.php%3Fid%3D1279740613%26show%3Dpic' type='text/javascript'%3E%3C/script%3E"));</script> */

// var cnzz_s_tag = document.createElement('script');
// cnzz_s_tag.type = 'text/javascript';
// cnzz_s_tag.async = true;
// // cnzz_s_tag.charset = 'utf-8';
// cnzz_s_tag.src = 'https://s4.cnzz.com/z_stat.php%3Fid%3D1279740613&async=1';
// var root_s = document.getElementsByTagName('script')[0];
// root_s.parentNode.insertBefore(cnzz_s_tag, root_s);

// var umId = 1279741297;//这里填你的siteId
// var umScript = document.createElement('script');
// umScript.src = 'https://v1.cnzz.com/z_stat.php?id=' + umId + '&web_id=' + umId;
// umScript.setAttribute('language', 'JavaScript');
// document.head.appendChild(umScript);

// var _czc = [];
// let loaded = false;//用于标记onload的触发状态
// let events = [];//用于本地缓存尚未onload时的埋点请求
// umScript.onload = function () {
//   //声明_czc对象
//   window._czc = window._czc || [];
//   //绑定siteid
//   _czc.push(["_setAccount", umId]);
//   loaded = true;
//   events.forEach(e => {
//     _czc.push(e)
//   });
//   /* ... */
// };

// export const logEvent = (category, action) => {
//     if(loaded) _czc.push(["_trackEvent", category, action]);
//     else events.push(["_trackEvent", category, action])
//   }