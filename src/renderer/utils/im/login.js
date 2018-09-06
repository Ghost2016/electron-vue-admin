
const config = require('../../../config');
//当前用户身份
let loginInfo = {
  'sdkAppID': 1400136813, // config.sdkAppID, //用户所属应用id,必填
  'identifier': "19", //当前用户ID,必须是否字符串类型，必填
  'accountType': 37487, //config.accountType, //用户所属应用帐号类型，必填
  'userSig': "eJxNjdtOwjAAht*ltxjTA62bd1PBzEwOkcSxm6b2ZJmUWToOMby7c0L09vv*wxdYFC-XQspN6yOPx0aDWwDBVY*d0j4643ToIErPVDSNU1xEToL6F96qmvfqJzuEEBGWIHKW*tC4oLkw8XeLUoohvFR3OmzdxncCQ8QQRAj*yejWuq8QhskwTW8uf852*Hm0vM-nD4amuTiuCZlnBZY6L1u8t4vJ2yDsXj-bJxflaubrzH5Qm79nMztR41E1EESjqWCyqRJf3hVyXBD0KKeHfZU4Zky5XNXg9A1Zk1Zm",
  //当前用户身份凭证，必须是字符串类型，必填
  'identifierNick': '', //当前用户昵称，不用填写，登录接口会返回用户的昵称，如果没有设置，则返回用户的id
  'headurl': 'img/me.jpg' //当前用户默认头像，选填，如果设置过头像，则可以通过拉取个人资料接口来得到头像信息
};
//监听事件
var listeners = {
  "onConnNotify": ()=>{

  } //监听连接状态回调变化事件,必填
    ,
  "jsonpCallback": ()=>{
    
  } //IE9(含)以下浏览器用到的jsonp回调函数，
    ,
  "onMsgNotify": ()=>{
    
  } //监听新消息(私聊，普通群(非直播聊天室)消息，全员推送消息)事件，必填
    ,
  "onBigGroupMsgNotify": ()=>{
    
  } //监听新消息(直播聊天室)事件，直播场景下必填
    ,
  "onGroupSystemNotifys": ()=>{
    
  } //监听（多终端同步）群系统消息事件，如果不需要监听，可不填
    ,
  "onGroupInfoChangeNotify": ()=>{
    
  } //监听群资料变化事件，选填
    ,
  "onFriendSystemNotifys": ()=>{
    
  } //监听好友系统通知事件，选填
    ,
  "onProfileSystemNotifys": ()=>{
    
  } //监听资料系统（自己或好友）通知事件，选填
    ,
  "onKickedEventCall": ()=>{
    
  } //被其他登录实例踢下线
    ,
  "onC2cEventNotifys": ()=>{
    
  } //监听C2C系统消息通道
    ,
  "onAppliedDownloadUrl": ()=>{
    
  } //申请文件/音频下载地址的回调
    ,
  "onLongPullingNotify": function (data) {
    console.debug('onLongPullingNotify', data)
  }
};
//sdk登录
export function webimLogin() {
  return new Promise((resolve, reject) => {
    webim.login(
      loginInfo, listeners, {
        isAccessFormalEnv: true,
        isLogOn: false
      },
      function(resp) {
        console.log(resp)
        loginInfo.identifierNick = resp.identifierNick; //设置当前用户昵称
        loginInfo.headurl = resp.headurl; //设置当前用户头像
        resolve(resp)
        // webim.syncGroupMsgs({},function(data){
        //     console.debug( data )
        // } 
        // ,function(data){
        //     console.debug( data );
        // });
      },
      function(err) {
        alert(err.ErrorInfo);
        reject(err.ErrorInfo)
      }
    );
  })
}
