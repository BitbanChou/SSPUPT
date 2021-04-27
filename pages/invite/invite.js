// pages/invite/invite.js
const db = wx.cloud.database()
const usf = db.collection('userinfo')
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    temp:true,
    teamid:0,
    invitestuno:'',
    inviteteamid:0,
    invitename:'',
    invite_id:'',
    curteam:'',
    curcap:'',
    curpro:'',
    curpid:0,
    popu:0,
    tnt:'',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var self = this;
    self.setData({
      stuno: app.globalData.stuno
    })
    usf.where({
      data: {
          "stuno":self.data.stuno
      },
      success: function(res){
          self.setData({
              teamid:res.data.name
          })
        }
    })
    let personinfo=wx.getStorageSync('info')
    console.log(personinfo.stuno)
    usf.where({
      stuno:personinfo.stuno
    }).get({
      success:(res)=>{
        self.setData({
          tnt:res.data[0].team
        })
        console.log(res.data[0].team)
        usf.where({
          team:res.data[0].team
        }).get({
          success:(res)=>{
            this.setData({
              popu:res.data.length
            })
            console.log(res.data)
          }
        })
      }
    })
    console.log(this.data.popu)
  },

  stunoInput: function(e){
    this.setData({
      invitestuno:e.detail.value
    })
  },
  /**
   * 查询
   */
  inquireBtnClick: function(){
    wx.showLoading({
      title: '加载中..',
      mask: true,
      duration:100,
    })
    console.log(this.data.invitestuno,this.data.tnt,this.data.popu)
    if(!this.data.tnt){
      wx.showToast({
        title: '未创建队伍',
        icon: 'loading',
        duration:1000,
        mask:true
      })
    }
    else if(this.data.popu>2)
    {
      wx.showToast({
        title: '队伍人数已满',
        icon: 'loading',
        duration:1000,
        mask:true
      })
    }
    else{
      usf.where({
        stuno:this.data.invitestuno
      }).get({
        success:res=>{
          console.log("成功找到学生",res.data)
          if(res.data.length>0)
          {
            this.setData({
              invitename:res.data[0].name,
              inviteteamid:res.data[0].teamid,
              temp:false
            })
          }
          else{
            wx.showToast({
              title: '该学生未注册',
              icon: 'loading',
              duration:1000,
              mask:true
            })
          }
        },
        fail:res=>{
          console.log("没有找到该学生")
        }
      })
    }
  },
  /**
   * 邀请
   */
  inviteBtnClick: function(){
    var self = this
    usf.where({
      stuno:this.data.invitestuno
    }).get({
      success:(res)=>{
        console.log(res)
        console.log(res.data[0].team)
        if(!res.data[0].team){
            self.setData({
            invite_id:res.data[0]._id
          })
          console.log(self.data.invite_id)
          let personinfo=wx.getStorageSync('info')
          usf.where({
            stuno:personinfo.stuno
          }).get({
              success:(res)=>{
                self.setData({
                  curteam:res.data[0].team,
                  curcap:res.data[0].captain,
                  curpro:res.data[0].currentproblem,
                  curpid:res.data[0].curpid
              })
              console.log(self.data.curteam)
              usf.doc(self.data.invite_id).update({
              data:{
                team:self.data.curteam,
                captain:self.data.curcap,
                currentproblem:self.data.curpro,
                curpid:self.data.curpid
              }
            })
            console.log("成功加入队伍",self.data.curteam)
              wx.showToast({
                title: '成功加入队伍',
                duration:500
              })  
            }
          })
        }
        else{
          wx.showModal({
            title: '提示',
            content:'该学生已加入队伍',
            showCancel:false,
            success: function(res){
              self.setData({
                temp:true
              })
            }
          })
        }
      },
      fail:(err)=>{
        wx.showToast({
          title: '查找失败',
          mask: true,
          duration:1000
        })
      }
    })
  },

  returnBtnClick: function(){
    wx.navigateTo({
      url: '../homepage/homepage',
    })
  }
})