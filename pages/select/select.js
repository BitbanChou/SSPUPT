// pages/select/select.js
var app = getApp()
const db = wx.cloud.database()
const usf = db.collection('userinfo')
const vc = db.collection("visitorcount")
const _ = db.command;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    problemset:['请选择题目','1. Invent Yourself 自己发明','2. Circling Magnets 旋转磁铁','3. Proximity Sensor 接近传感器',
  '4. Wind Speed 风速','5. Synchronised Candles 同步蜡烛','6. Irreversible Cartesian Diver 不可逆转的浮沉子',
  '7. Bead Dynamics 珠子动力学','8. Fuses 保险丝','9. Light Whiskers 光须','10. Spin Drift 旋转漂移','11. Guitar String 吉他弦','12. Wilberforce Pendulum 威尔伯福斯摆/韦氏摆','13. Sponge 海绵','14. Dynamic Hydrophobicity 动态疏水性','15. Rebounding Capsule 反弹胶囊','16. Ultrasonic Pump 超声波泵','17. Hand Helicopter 手提直升机/竹蜻蜓'],
    num:[-100,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    teamname:'',
    index:0,
    count:0,
    teamid:0,
    temp:false,
    key:true,
    curpro:"",
    curpid:0,
    iscaptain:false,
    canse:0,
    cf:2,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var self = this
    let personinfo=wx.getStorageSync('info')
    wx.showLoading({
      title: '加载中..',
      duration:1000,
      icon:'none',
    })
    self.setData({
      stuno: app.globalData.stuno,
      teamname:personinfo.team
    })
    vc.get().then(res=>{
      console.log(res.data[3].confine)
      this.setData({
        cf:res.data[3].confine
      })
    })
    usf.get().then(res=>{
      this.setData({
        usf:res.data
      })
      for(let i=0;i<res.data.length;i++)
      {
        var idx=res.data[i].curpid
        this.data.num[idx]=this.data.num[idx]+1;
      }
    }).then(res=>{
      this.setData({
        num:this.data.num
      })
    })
    
  },
  questionChange: function(e){
    console.log('problem picker发送选择改变，携带值为', e.detail.value)
    let index = e.detail.value
    let array = this.data.problemset
    this.setData({
      index,
      default:array[index],
      curpro:array[index],
      curpid:index,
    })
  },

  selectBtnClick: function(){
    var curt = this.dateFormat(new Date())
    vc.get().then(res=>{
      console.log(res)
      this.setData({
        canse:res.data[1].canselect
      })
    })
    console.log(this.data.canse)
    console.log(this.data.cf)
    // curt<="2021-03-22 20:00:00" || curt>="2021-03-22 22:00:01"
    if(this.data.canse==0){
      wx.showToast({
        title: '当前不能选题',
        image: '../../images/cuo.png',
        icon:'none',
        duration:1000
      })
      console.log("时间不能选题")
    }
    else{
    console.log("现在可以选题")
    let personinfo=wx.getStorageSync('info')
    usf.where({
      stuno:personinfo.stuno
    }).get({
      success:(res)=>{
      this.setData({
        iscaptain:res.data[0].iscaptain
      })
      
      if(this.data.iscaptain){
        if(this.data.index==0)
        {
            wx.showLoading({
              title: '请选择题目',
              icon:'none',
              duration:1000
            })
        }
        else{
          console.log(this.data.curpid,this.data.num[this.data.curpid])
          if(this.data.num[this.data.curpid]>this.data.cf){
            wx.showLoading({
              title: '该题目已选满',
              icon:'none',
              duration:1000
            })
            if(this.data.curpid==1)
            {
              vc.doc('28ee4e3e604e05c80a9aaefd204b2832').update({
                data:{
                  tap:{
                    1:_.inc(1)
                  }
                }
              })
            }
            if(this.data.curpid==2)
            {
              vc.doc('28ee4e3e604e05c80a9aaefd204b2832').update({
                data:{
                  tap:{
                    2:_.inc(1)
                  }
                }
              })
            }
            if(this.data.curpid==3)
            {
              vc.doc('28ee4e3e604e05c80a9aaefd204b2832').update({
                data:{
                  tap:{
                    3:_.inc(1)
                  }
                }
              })
            }
            if(this.data.curpid==4)
            {
              vc.doc('28ee4e3e604e05c80a9aaefd204b2832').update({
                data:{
                  tap:{
                    4:_.inc(1)
                  }
                }
              })
            }
            if(this.data.curpid==5)
            {
              vc.doc('28ee4e3e604e05c80a9aaefd204b2832').update({
                data:{
                  tap:{
                    5:_.inc(1)
                  }
                }
              })
            }
            if(this.data.curpid==6)
            {
              vc.doc('28ee4e3e604e05c80a9aaefd204b2832').update({
                data:{
                  tap:{
                    6:_.inc(1)
                  }
                }
              })
            }
            if(this.data.curpid==7)
            {
              vc.doc('28ee4e3e604e05c80a9aaefd204b2832').update({
                data:{
                  tap:{
                    7:_.inc(1)
                  }
                }
              })
            }
            if(this.data.curpid==8)
            {
              vc.doc('28ee4e3e604e05c80a9aaefd204b2832').update({
                data:{
                  tap:{
                    8:_.inc(1)
                  }
                }
              })
            }
            if(this.data.curpid==9)
            {
              vc.doc('28ee4e3e604e05c80a9aaefd204b2832').update({
                data:{
                  tap:{
                    9:_.inc(1)
                  }
                }
              })
            }
            if(this.data.curpid==10)
            {
              vc.doc('28ee4e3e604e05c80a9aaefd204b2832').update({
                data:{
                  tap:{
                    10:_.inc(1)
                  }
                }
              })
            }
            if(this.data.curpid==11)
            {
              vc.doc('28ee4e3e604e05c80a9aaefd204b2832').update({
                data:{
                  tap:{
                    11:_.inc(1)
                  }
                }
              })
            }
            if(this.data.curpid==12)
            {
              vc.doc('28ee4e3e604e05c80a9aaefd204b2832').update({
                data:{
                  tap:{
                    12:_.inc(1)
                  }
                }
              })
            }
            if(this.data.curpid==13)
            {
              vc.doc('28ee4e3e604e05c80a9aaefd204b2832').update({
                data:{
                  tap:{
                    13:_.inc(1)
                  }
                }
              })
            }
            if(this.data.curpid==14)
            {
              vc.doc('28ee4e3e604e05c80a9aaefd204b2832').update({
                data:{
                  tap:{
                    14:_.inc(1)
                  }
                }
              })
            }
            if(this.data.curpid==15)
            {
              vc.doc('28ee4e3e604e05c80a9aaefd204b2832').update({
                data:{
                  tap:{
                    15:_.inc(1)
                  }
                }
              })
            }
            if(this.data.curpid==16)
            {
              vc.doc('28ee4e3e604e05c80a9aaefd204b2832').update({
                data:{
                  tap:{
                    16:_.inc(1)
                  }
                }
              })
            }
            if(this.data.curpid==17)
            {
              vc.doc('28ee4e3e604e05c80a9aaefd204b2832').update({
                data:{
                  tap:{
                    17:_.inc(1)
                  }
                }
              })
            }
          }
          else{
            usf.doc(personinfo._id).update({
                data:{
                  currentproblem:this.data.curpro,
                  curpid:this.data.curpid,
                }
            })
            console.log(this.data.curpro)
              wx.showToast({
              title: '选题成功',
              image: '../../images/dui.png',
              duration:1000
            })            
          }
        }
      }
      else{
        wx.showToast({
            title: '队员无法进行选题',
            mask: true,
            image: '../../images/cuo.png',
            duration:1000
          })
      }
    }
  })
  }
  },

  hotBtnClick: function(){
    wx.navigateTo({
      url: '../hotpage/hotpage',
    })
  },

  returnBtnClick: function(){
    wx.navigateTo({
      url: '../homepage/homepage',
    })
  },

  proBtnClick: function(){
    wx.navigateTo({
      url: '../problemselect/problemselect',
    })
  },

  ellipsis: function () {  
    var value = !this.data.ellipsis;
    this.setData({
      ellipsis: value
    }) 
  },
  dateFormat: function (date) {   
    
    var year = date.getFullYear()
    var month = date.getMonth() + 1
    var day = date.getDate()
    if(day<10) day = "0"+day
    var hour = date.getHours()
    if(hour<10) hour = "0"+hour
    var minutes = date.getMinutes()
    if(minutes<10) minutes="0"+minutes
    var seconds = date.getSeconds()
    if(seconds<10) seconds="0"+seconds
    var realMonth = month > 9 ? month : "0" + month
    var curt = year + "-" + realMonth + "-" + day + " " + hour + ":" + minutes + ":" + seconds
    return year + "-" + realMonth + "-" + day + " " + hour + ":" + minutes + ":" + seconds
  },

})