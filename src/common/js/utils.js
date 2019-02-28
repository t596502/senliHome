/**
 * 判断是否微信浏览器
 */
export const isWeChat = () => {
  const ua = navigator.userAgent.toLowerCase();
  return ua.match(/MicroMessenger/i) == 'micromessenger'
}
export const isAilpay = ()=>{
  return navigator.userAgent.indexOf('AlipayClient') > -1
}
export const setCookie = (key,val,time) => {//设置cookie方法
  let date=new Date(); //获取当前时间
  let expiresDays=time;  //将date设置为n天以后的时间
date.setTime(date.getTime()+expiresDays*24*3600*1000); //格式化为cookie识别的时间
  // date.setTime(date.getTime()+expiresDays*60*1000); //格式化为cookie识别的时间
  document.cookie=key + "=" + val +";expires="+date.toGMTString()
}
/**
 * 获取cookie
 */
export const getCookie = (name) => {
  let arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
  if (arr = document.cookie.match(reg))
    return unescape(arr[2]);
  else
    return null;
}
/**
 * 移除cookie
 */
export const removeCookie = (name) =>{
  setCookie(name, "", -1);
}
/**
 * 存储localStorage
 */
export const setStore = (name, content) => {
  if (!name) return;
  if (typeof content !== 'string') {
    content = JSON.stringify(content);
  }
  window.localStorage.setItem(name, content);
}

/**
 * 获取localStorage
 */
export const getStore = name => {
  if (!name) return;
  return window.localStorage.getItem(name);
};

/**
 * 删除localStorage
 */
export const removeStore = name => {
  if (!name) return;
  window.localStorage.removeItem(name);
};
/**
 * 设置sessionStorage
 */
export const setSession = (name, content) => {
  if (!name) return;
  if (typeof content !== 'string') {
    content = JSON.stringify(content);
  }
  window.sessionStorage.setItem(name, content);
};
export const getSession = name => {
  if (!name) return;
  return window.sessionStorage.getItem(name);
};
