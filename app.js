//app.js
App({
  onLaunch: function () {
    //get data from local logs (from API)
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    //set local logs
    wx.setStorageSync('logs', logs)
  },
  //get userinfo
  getUserInfo:function(cb){
    var that = this;
    console.log(this);
    // user info exists
    if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
    }
  // userinfo not exist
    else
    {
      //ask user to login (from API)
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo;
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      });
    }
  },
  globalData:{
    userInfo:null
  }
})
