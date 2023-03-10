const db = wx.cloud.database()
const usf = db.collection('userinfo')
const vc = db.collection("vcc")
const _ = db.command;
Page({
  /**
   * 页面的初始数据
   */
  data: {
    students:0,
    teams:0,
    vn:0,
    len:0,
    us:[],
    btt:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // wx.showLoading({
    //   title: '加载中..',
    //   mask: true
    // })
    var that=this
    // vc.get().then(res=>{
    //   console.log(res)
    //   this.setData({
    //     vn:res.data[0].vcnum
    //   })
    //   this.data.vn=res.data[0].vcnum+1
    //   console.log(this.data.vn)
    //   vc.doc("28ee4e3e604c65d50a6739ee546ec637").update({
    //     data:{
    //       vcnum:this.data.vn
    //     }
    //   })
      
    // })
    // usf.get().then(res=>{
    //   this.setData({
    //     us:res.data
    //   })
    //   console.log(this.data.us)
    //   var student=res.data.length
    //   var team=0
    //   for(var i=0;i<res.data.length;i++)
    //   {
    //     if(res.data[i].iscaptain)
    //     {
    //       team++;
    //     }
    //   }
    //   this.setData({
    //     students:student,
    //     teams:team
    //   })
    //   console.log(res.data.length,this.data.teams)
    // })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */

  timeBtnClick: function(){
    wx.navigateTo({
      url: '../time/time',
    })
  },
  selectBtnClick: function(){
    vc.doc("cbddf0af609c9ada08181df2732197f1").update({
      data:{
        vcnum:_.inc(1),
      }
    })
    wx.navigateTo({
      url: '../hotpage/hotpage',
    })
  },
  proBtnClick: function(){
    vc.get().then(res=>{
      this.setData({
        vcnum:res.data[0].vcnum
      })
      // console.log(this.data.vcnum)
    }).then(
      vc.doc("cbddf0af609c9ada08181df2732197f1").update({
        data:{
          vcnum:_.inc(1),
        }
      })
    )
    wx.navigateTo({
      url: '../problemselect/problemselect',
    })
  },
  //这里用async await 获取一下 集合中记录的总数 ，这样比较方便。。。
  onLoad: async function () {
    let that = this  //建议小白以后都这样做，不然真的会出现一些弱智的问题，懂得都懂。。
    // const db = wx.cloud.database({
    //   env: 'learn-tp9ek'
    // });
    // const c = db.collection("food"); //获取集合中记录的总数
    vc.get().then(res=>{
      console.log(res)
      this.setData({
        vn:res.data[0].vcnum,
        // btt:res.data[7].vstec
      })
      this.data.vn=res.data[0].vcnum+1
      // console.log(this.data.vn)
      vc.doc("cbddf0af609c9ada08181df2732197f1").update({
        data:{
          vcnum:this.data.vn
        }
      })
    })
    const total = await (await usf.count()).total
    const batchTimes = Math.ceil(total / 20)
    // console.log(batchTimes) //计算需要获取几次  比如你有36条数据就要获取两次 第一次20条第二次16条
    let arraypro = [] // 定义空数组 用来存储每一次获取到的记录 
    let x = 0 //这是一个标识每次循环就+1 当x等于batchTimes 说明已经到了最后一次获取数据的时候
    let y = 0
    //没错，循环查询，看着就觉得很影响性能，但是么的办法。
    for (let i = 0; i < batchTimes; i++) {
    //分组获取
      usf.skip(i * 20).get({
        success: function (res) {
          x += 1
          // 20个20个的获取 最后一次不够20 那就是剩下的
          for (let i = 0; i < res.data.length; i++) {
            arraypro.push(res.data[i])
          }
          //判断是否是最后一次，如果是说明已经不用再继续获取了，这时候就可以赋值了
          if (x == batchTimes) {
            // console.log(arraypro)
            for(let i=0;i<arraypro.length;i++)
            {
                if(arraypro[i].iscaptain==true) y+=1
            }
            that.setData({
              us: arraypro,
              students: arraypro.length,
              teams: y,
            })
            console.log(that.data.us.length,that.data.teams)
          }
        }
      })
    }
  },
})