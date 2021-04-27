const db=wx.cloud.database()
const usf=db.collection("userinfo")
const vc = db.collection("visitorcount")
Page({
  /**
   * 页面的初始数据
   */
  data: {
    question:{},
    inall:0,
    prolist:[{name:"16. Ultrasonic Pump 超声波泵",id:0,countt:-10000000,nuc:0,senu:0},
    {name:"1. Invent Yourself\n自己发明",id:1,countt:0,nuc:0,senu:0},
    {name:"2. Circling Magnets\n旋转磁铁",id:2,countt:0,nuc:0,senu:0},
    {name:"3. Proximity Sensor 接近传感器",id:3,countt:0,nuc:0,senu:0},
    {name:"4. Wind Speed 风速",id:4,countt:0,nuc:0,senu:0},
    {name:"5. Synchronised Candles 同步蜡烛",id:5,countt:0,nuc:0,senu:0},
    {name:"6. Irreversible Cartesian Diver 不可逆转的浮沉子",id:6,countt:0,nuc:0,senu:0},
    {name:'7. Bead Dynamics 珠子动力学',id:7,countt:-7,nuc:0,senu:0},
    {name:'8. Fuses 保险丝',id:8,countt:0,nuc:0,senu:0},
    {name:'9. Light Whiskers 光须',id:9,countt:0,nuc:0,senu:0},
    {name:'10. Spin Drift 旋转漂移',id:10,countt:0,nuc:0,senu:0},
    {name:'11. Guitar String 吉他弦',id:11,countt:-6,nuc:0,senu:0},
    {name:'12. Wilberforce Pendulum 威尔伯福斯摆/韦氏摆',id:12,countt:0,nuc:0,senu:0},
    {name:'13. Sponge 海绵',id:13,countt:0,nuc:0,senu:0},
    {name:'14. Dynamic Hydrophobicity 动态疏水性',id:14,countt:-6,nuc:0,senu:0},
    {name:'15. Rebounding Capsule 反弹胶囊',id:15,countt:0,nuc:0,senu:0},
    {name:'16. Ultrasonic Pump 超声波泵',id:16,countt:-6,nuc:-1,senu:0},
    {name:'17. Hand Helicopter 手提直升机/竹蜻蜓',id:17,countt:0,nuc:0,senu:0}],
    num:[-100000,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    cn:[],
    us:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // vc.get().then(res=>{
    //   console.log(res)
    //   this.setData({
    //     cn:res.data[5].tap
    //   })
    // })
    // usf.get().then(res=>{
    //   this.setData({
    //     usf:res.data
    //   })
      // for(let i=0;i<res.data.length;i++)
      // {
        // this.data.prolist[res.data[i].curpid].count;  
        // var idx=res.data[i].curpid
        // this.data.num[idx]++;
        // console.log(this.data.num[idx])
        // console.log(idx,this.data.prolist[idx],res.data[i].name)
    //   } 
    //   for(let i=0;i<18;i++)
    //   {
    //     this.data.prolist[i].countt=this.data.num[i]+Math.floor(this.data.cn[i]/7)
    //     this.data.prolist[i].senu=this.data.num[i]
    //   }
    // }).then(res=>{
    //       this.data.prolist.sort(cmp("countt"));
    //       function cmp(key) {
    //         return function (a,b) { 
    //           return b[key]-a[key]
    //         }
    //       }
    //       this.data.prolist.pop()
    //       for(let i=0;i<17;i++)
    //       {
    //         this.data.prolist[i].nuc=Math.floor(this.data.prolist[i].countt/5)
    //         this.data.prolist[i].countt-=this.data.prolist[i].nuc*5
    //       }
    //       this.setData({
    //         prolist:this.data.prolist
    //       })
    //       console.log(this.data.prolist)
    // })
  },

  onLoad: async function () {
    let that = this  //建议小白以后都这样做，不然真的会出现一些弱智的问题，懂得都懂。。
    // const db = wx.cloud.database({
    //   env: 'learn-tp9ek'
    // });
    // const c = db.collection("food"); //获取集合中记录的总数
    vc.get().then(res=>{
      console.log(res)
      this.setData({
        cn:res.data[5].tap
      })
    })

    const total = await (await usf.count()).total
    const batchTimes = Math.ceil(total / 20)
    // console.log(batchTimes) //计算需要获取几次  比如你有36条数据就要获取两次 第一次20条第二次16条
    let arraypro = [] // 定义空数组 用来存储每一次获取到的记录 
    let x = 0 //这是一个标识每次循环就+1 当x等于batchTimes 说明已经到了最后一次获取数据的时候
    let y = 0
    let nn= [-100000,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
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
                if(arraypro[i].iscaptain==true){
                  y+=1,
                  nn[arraypro[i].curpid]+=1
                }
            }
            that.setData({
              us: arraypro,
              teams: y,
              num:nn
            })
            console.log(that.data.us.length,that.data.teams)
            
            console.log(that.data.num)
            for(let i=1;i<18;i++)
            {
              that.data.prolist[i].senu=that.data.num[i]
            }
              // for(let i=0;i<that.data.us.length;i++)
              // {
                // that.data.prolist[res.data[i].curpid].count;  
                // var idx=res.data[i].curpid
                // that.data.num[idx]++;
                // console.log(that.data.num[idx])
                // console.log(idx,that.data.prolist[idx],res.data[i].name)
              // } 
              that.data.num.sort();
              console.log(that.data.num)
              
              for(let i=0;i<18;i++)
              {
                that.data.prolist[i].countt=that.data.num[i]+Math.floor(that.data.cn[i]/7)
                // that.data.prolist[i].senu=that.data.num[i]
              }
              // console.log(that.data.num)
              that.data.prolist.sort(cmp("senu"));
              function cmp(key) {
                return function (a,b) { 
                  return b[key]-a[key]
                }
              }   
              that.data.prolist.pop() 
              for(let i=0;i<17;i++)
              {
                that.data.prolist[i].nuc+=Math.floor(that.data.prolist[i].countt/5)
                if(that.data.prolist[i].senu>0) that.data.prolist[i].countt-=that.data.prolist[i].nuc*5
                else that.data.prolist[i].countt=0
                console.log(that.data.prolist[i].senu)
              }
              console.log(that.data.prolist)
        
              that.setData({
                prolist:that.data.prolist
              })
          }
        }
      })
    }
  },
 
})
