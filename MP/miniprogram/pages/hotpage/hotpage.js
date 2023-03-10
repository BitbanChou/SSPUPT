const db=wx.cloud.database()
const usf=db.collection("userinfo")
const vc = db.collection("vcc")
const _ = db.command;
Page({
  /**
   * 页面的初始数据
   */
  data: {
    question:{},
    inall:0,
    prolist:[{name:"160",id:0,countt:-10000000,nuc:0,senu:-10,roc:-1},
    {name:"1. Invent Yourself 自己发明",id:1,countt:0,nuc:0,senu:0,roc:0},
    {name:"2. Rayleigh Disk 瑞利盘",id:2,countt:0,nuc:0,senu:0,roc:0},
    {name:"3. Ring on the Rod 棒上环",id:3,countt:0,nuc:0,senu:0,roc:0},
    {name:"4. Unsinkable Disk 永不沉没的圆盘",id:4,countt:0,nuc:0,senu:0,roc:0},
    {name:"5. Bimetallic Oscillator 双金属振荡器",id:5,countt:0,nuc:0,senu:0,roc:0},
    {name:"6. Tennis Ball Tower 网球塔",id:6,countt:0,nuc:0,senu:0,roc:0},
    {name:'7. Three-Sided Dice 圆柱形骰子',id:7,countt:0,nuc:0,senu:0,roc:0},
    {name:'8. Equipotential Lines 等势线',id:8,countt:0,nuc:0,senu:0,roc:0},
    {name:'9. Water Spiral 水螺旋',id:9,countt:0,nuc:0,senu:0,roc:0},
    {name:'10. Droplet Explosion 液滴爆炸',id:10,countt:0,nuc:0,senu:0,roc:0},
    {name:'11. Balls on an Elastic Band 橡皮筋上的球',id:11,countt:0,nuc:0,senu:0,roc:0},
    {name:'12. Strange Motion 奇怪的运动',id:12,countt:0,nuc:0,senu:0,roc:0},
    {name:'13. Candle Powered Turbine 蜡烛动力涡旋机',id:13,countt:0,nuc:0,senu:0,roc:0},
    {name:'14. Ball on Membrane 膜上球',id:14,countt:0,nuc:0,senu:0,roc:0},
    {name:'15. Boycott Effect 抵制作用',id:15,countt:0,nuc:0,senu:0,roc:0},
    {name:'16. Saving Honey 拯救蜂蜜',id:16,countt:0,nuc:0,senu:0,roc:0},
    {name:'17. Invisibility 隐形',id:17,countt:0,nuc:0,senu:0,roc:0}],
    num:[-100000,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    cn:[],
    us:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
        cn:res.data[4].tap
      })
      console.log("点击量："+this.data.cn)
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
            for(let i=0;i<18;i++)
            {
              that.data.prolist[i].senu=that.data.num[i]
              that.data.prolist[i].countt=that.data.num[i]+Math.floor(that.data.cn[i]/10)
            }
              // for(let i=0;i<18;i++)
              // {
              //   that.data.prolist[i].countt=that.data.num[i]+Math.floor(that.data.cn[i]/7)
              //   that.data.prolist[i].senu=that.data.num[i]
              // }

              that.data.num.sort();
              console.log(that.data.num)
              

              // console.log(that.data.num)
              that.data.prolist.sort(cmp1("countt"));
              function cmp1(key) {
                return function (a,b) { 
                  return b[key]-a[key]
                }
              }    
              
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
                that.data.prolist[i].roc+=Math.floor(that.data.prolist[i].nuc/5)
                if(that.data.prolist[i].nuc) that.data.prolist[i].countt=Math.floor(that.data.prolist[i].countt/5)
                if(that.data.prolist[i].roc) that.data.prolist[i].nuc=Math.floor(that.data.prolist[i].nuc/5)

                // if(that.data.prolist[i].senu>0) that.data.prolist[i].countt-=that.data.prolist[i].nuc*5
                // else that.data.prolist[i].countt=0
                // console.log(that.data.prolist[i].senu)
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
