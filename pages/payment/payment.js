//payment.js
//get app
var app = getApp()
Page({

  data: {
    title: 'Pay to Sophie',
    prices: [
      1, 5, 18, 48, 98, 188
    ]
  },

    selectItem: function (event) {
    var total = event.currentTarget.dataset.item;
    var that = this;
    that.setData({ selected: total });
    console.log(total);

    wx.requestPayment({
    timeStamp: '' + res.data.signature.timestamp,
    nonceStr: res.data.signature.nonce,
    package: res.data.signature.pack,
    signType: 'MD5',
    paySign: res.data.signature.signature,
    success: function (res) {
      wx.showToast({
      title: '支付成功,感谢',
      icon: 'success'
        });
    },
    fail: function (res) {
      wx.showToast({
      title: '已取消支付',
      icon: 'success'
        });
    },
    complete: function () {
      that.setData({ selected: 0 });//取消选中
      }
    });

        } //end of success


    }, // end of selectItem

    onLoad: function() {
    console.log("onLoad")
    var that = this
  	//调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo: userInfo
      });
      that.update();
    });
    }, // end of onLoad


}) //end of page