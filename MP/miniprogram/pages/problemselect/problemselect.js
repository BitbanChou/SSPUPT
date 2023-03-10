const db = wx.cloud.database()
const _ = db.command
const vc = db.collection('vcc')
// pages/problemselect/problemselect.js
Page({
  
  /**
   * 页面的初始数据
   */
  data: {
    list:[
      {
        id:1,
        title:'1. Invent Yourself 自己发明\n',
        contentE:'Create a non-invasive device that determines the direction of fluid flow inside an opaque pipe. Optimise your device so that you can measure the smallest flow possible.\n',
        contentC:'设计一个可以决定不透明管道内液体流动方向的非侵入性装置。优化你的装置以测得尽可能小的流量。',
        imgurl:'http://tiebapic.baidu.com/forum/w%3D580/sign=348df61cb8dde711e7d243fe97eecef4/cfc5773e6709c93d912048eec23df8dcd000542f.jpg',
      },
      {
        id:2,
        title:'2. Rayleigh Disk 瑞利盘\n',
        contentE:'A disk suspended vertically by a thin thread is placed in an acoustic field. This device can be used to measure the intensity of sound by turning about the axis of the thread. Investigate the accuracy of such a device.\n',
        contentC:'一个圆盘由细线垂直悬挂在声场中。该装置可以通过改变细线的轴来测量声音的强度。研究该装置的精度。',
        imgurl:'http://tiebapic.baidu.com/forum/w%3D580/sign=c514c1d21e166d223877159c76220945/97f19fdda144ad34c96dc19e8da20cf430ad852f.jpg',
      },
      {
        id:3,
        title:'3. Ring on the Rod 棒上环\n',
        contentE:'A simple passive inductive sensor can detect ferromagnetic objects moving through its magnetic field. Construct such a passive sensor and investigate its characteristics such as sensing range.\n',
        contentC:'垂直钢棒上的垫圈下滑时会开始旋转，而不是简单地向下滑动。研究垫圈的运动并探究是什么决定了最终速度。',
        imgurl:'http://tiebapic.baidu.com/forum/w%3D580/sign=65db2aabefb7d0a27bc90495fbee760d/db865e4e9258d1097b31efab8c58ccbf6d814d2f.jpg',
      },
      {
        id:4,
        title:'4. Unsinkable Disk 永不沉没的圆盘\n',
        contentE:'A metal disk with a hole at its centre sinks in a container filled with water. When a vertical water jet hits the centre of the disc, it may float on the water surface. Explain this phenomenon and investigate the relevant parameters.\n',
        contentC:'将一个中心有孔的金属圆盘沉入装满水的容器中。当一个垂直的水流击中圆盘中心时，它可能会漂浮在水面上。解释这一现象并研究相关参数。',
        imgurl:'http://tiebapic.baidu.com/forum/w%3D580/sign=b2bb7a0a8054564ee565e43183df9cde/1d07a56eddc451da7a244af2ebfd5266d116322f.jpg',
      },
      {
        id:5,
        title:'5. Bimetallic Oscillator 双金属振荡器\n',
        contentE:'A simple electric oscillator can be made using a bimetallic contact-breaker. Investigate the relevant parameters that affect the frequency of such an oscillator.\n',
        contentC:'简单的电子振荡器可以用双金属接触断触器来制作。研究影响这种振荡器频率的相关参数。',
        imgurl:'http://tiebapic.baidu.com/forum/w%3D580/sign=b28226d2effb43161a1f7a7210a54642/0a05992397dda14422db2aabefb7d0a20df4862f.jpg',
      },
       {
        id:6,
        title:'6. Irreversible Cartesian Diver 不可逆转的浮沉子\n',
        contentE:'Build a tower by stacking tennis balls using three balls per layer and a single ball on top. Investigate the structural limits and the stability of such a tower. How does the situation change when more than three balls per each layer and a suitable number of balls on the top layer are used?\n',
        contentC:'通过每层三个网球、顶部一个网球的方式来堆叠建造一座塔。研究这种塔的结构限制和稳定性。当每层使用三个以上的球并且在顶层使用合适数量的球时，情况如何变化？',
        imgurl:'http://tiebapic.baidu.com/forum/w%3D580/sign=70230ff0d01001e94e3c1407880f7b06/baecb93533fa828b75f1dbfaa01f4134960a5a2f.jpg',
      },
      {
        id:7,
        title:'7. Three-Sided Dice 圆柱形骰子\n',
        contentE:'To land a coin on its side is often associated with the idea of a rare occurrence. What should be the physical and geometrical characteristics of a cylindrical dice so that it has the same probability to land on its side and one of its faces?\n',
        contentC:'一枚硬币落地时侧面站立的情况通常是很罕见的。为了使一个圆柱形骰子落下时能有相同的概率立在它的侧面和上下表面其中之一，它应该具有怎样的物理和几何特征？',
        imgurl:'http://tiebapic.baidu.com/forum/w%3D580/sign=4d1769650c0fd9f9a0175561152cd42b/52353ed12f2eb9383dbf3ceb88628535e4dd6f2f.jpg',
      },
      {
        id:8,
        title:'8. Equipotential Lines 等势线\n',
        contentE:'Place two electrodes into water, supply a safe voltage and use a voltmeter to determine electric potential at various locations. Investigate how the measured equipotential lines deviate from your expectations for different conditions and liquids.\n',
        contentC:'将两个电极放入水中，加一个安全的电压，然后使用电压表测定不同位置的电势。研究测出的等势线与你在不同条件和液体情况下的期望值是如何产生偏离的。',
        imgurl:'http://tiebapic.baidu.com/forum/w%3D580/sign=8fc5b5754d3853438ccf8729a312b01f/923cf81f3a292df55a11ea0ce1315c6035a8732f.jpg',
      },
      {
        id:9,
        title:'9. Water Spiral 水螺旋\n',
        contentE:'If a stream of liquid is launched through a small hole, then under certain conditions it twists into a spiral. Explain this phenomenon and investigate the conditions under which the spiral will twist.\n',
        contentC:'如果一股液体从一个小孔中射出，那么在一定条件下，它会扭转成螺旋状。解释这一现象，并研究螺旋会扭转的条件。',
        imgurl:'http://tiebapic.baidu.com/forum/w%3D580/sign=68def613f7119313c743ffb855390c10/2b27e8fe9925bc3167fd39491bdf8db1c9137094.jpg',
      },
       {
        id:10,
        title:'10. Droplet Explosion 液滴爆炸\n',
        contentE:'When a drop of a water mixture (e.g. water-alcohol) is deposited on the surface of a hydrophobic liquid (e.g. vegetable oil), the resulting drop may sometimes fragment into smaller droplets. Investigate the parameters that affect the fragmentation and the size of the final droplets.\n',
        contentC:'当一滴水混合物(例如水-乙醇)放置在疏水性液体(例如植物油)的表面时，所产生的液滴有时会碎成更小的液滴。研究影响碎裂和最终液滴大小的参数。',
        imgurl:'http://tiebapic.baidu.com/forum/w%3D580/sign=03fee3c62bc6a7efb926a82ecdfbafe9/cfef78cf3bc79f3d1c33a229e7a1cd11738b292f.jpg',
      },
      {
        id:11,
        title:'11. Balls on an Elastic Band 橡皮筋上的球\n',
        contentE:'Connect two metal balls with an elastic band, then twist the elastic band and put the balls on a table. The balls will begin to spin in one direction, then in the other. Explain this phenomenon and investigate how the behaviour of such a "pendulum" depends on the relevant parameters.\n',
        contentC:'用橡皮筋把两个金属球连接起来，然后扭动橡皮筋，把金属球放在桌子上。球会开始朝一个方向旋转，然后朝另一个方向旋转。解释这一现象，并研究这种“钟摆”的行为如何取决于相关的参数。',
        imgurl:'http://tiebapic.baidu.com/forum/w%3D580/sign=c95090ce42082838680ddc1c8898a964/ed2a124c510fd9f939056eb8602dd42a2934a427.jpg',
      },
      {
        id:12,
        title:'12. Strange Motion 奇怪的运动\n',
        contentE:'Sprinkle small floating particles on the surface of water in a bowl. Bring a strong magnet above and near to the water surface. Explain any observed motion of the particles.\n',
        contentC:'在碗中的水面上撒上漂浮的小颗粒。在水面上方和附近放一块强力磁铁。解释观察到的粒子运动。',
        imgurl:'http://tiebapic.baidu.com/forum/w%3D580/sign=78a85c1d699b033b2c88fcd225cf3620/83e7eddde71190efda44d3c6931b9d16fcfa60ba.jpg',
      },
      {
        id:13,
        title:'13. Candle Powered Turbine 蜡烛动力涡旋机\n',
        contentE:'A paper spiral suspended above a candle starts to rotate. Optimise the setup for maximum torque.',
        contentC:'悬挂在蜡烛上方的纸螺旋开始旋转，优化设置以获得最大扭矩。',
        imgurl:'http://tiebapic.baidu.com/forum/w%3D580/sign=a9e2408103df8db1bc2e7c6c3922dddb/8146acc27d1ed21bfb766ffcf06eddc450da3fba.jpg',
      },
       {
        id:14,
        title:'14. Ball on Membrane 膜上球\n',
        contentE:'When dropping a metal ball on a rubber membrane stretched over a plastic cup, a sound can be heard. Explain the origin of this sound and explore how its characteristics depend on relevant parameters.',
        contentC:'将金属球扔在塑料杯子上延展的橡胶薄膜上时，可以听到声音。解释这种声音的起源，并探讨其特征如何取决于相关参数。',
        imgurl:'http://tiebapic.baidu.com/forum/w%3D580/sign=b88b3f1ff1af2eddd4f149e1bd110102/ca6d6481800a19d872bcc51c6efa828ba71e46ba.jpg',
      },
      {
        id:15,
        title:'15. Boycott Effect 抵制作用\n',
        contentE:'If particles are suspended in a liquid that has a lower density than the particles, the particles will settle to the bottom of the container. The rate of settling can be affected by tilting the container that holds the liquid. Explain this phenomenon and investigate the effect of relevant parameters.\n',
        contentC:'如果颗粒悬浮在密度低于该颗粒的液体中，颗粒就会沉降到容器底部。倾斜盛放液体的容器会影响沉降速率。解释这一现象并研究相关参数的影响。',
        imgurl:'http://tiebapic.baidu.com/forum/w%3D580/sign=acb92f9c94ea15ce41eee00186013a25/963d7ec6a7efce1b329489d3f251f3deb58f65ba.jpg',
      },
      {
        id:16,
        title:'16. Saving Honey 拯救蜂蜜\n',
        contentE:'When rotating a rod coated with a viscous liquid (e.g. honey),  under  certain conditions the liquid will stop draining. Investigate this phenomenon.\n',
        contentC:'当旋转一根涂有粘性液体（如蜂蜜）的棒时，在一定条件下，液体会停止流下，研究这一现象。',
        imgurl:'http://tiebapic.baidu.com/forum/w%3D580/sign=55130716d5529822053339cbe7cb7b3b/d67004f431adcbef653945d7e9af2edda2cc9f27.jpg',
      },
      {
        id:17,
        title:'17. Invisibility 隐形\n',
        contentE:'Lenticular lenses can be used to distort light and make objects disappear. Investigate how changing the properties of the lens and the geometry of the object affect the extent to which the object can be detected.\n',
        contentC:'双凸透镜可以用来扭曲光线并使物体消失，研究改变透镜的属性和物体的几何形状会如何影响物体被检测到的范围。',
        imgurl:'http://tiebapic.baidu.com/forum/w%3D580/sign=2d0389a5aef81a4c2632ecc1e72b6029/bedc73ec54e736d10e1eb7d9de504fc2d4626927.jpg',
      },
      ],
  },  

  click:function(event){
    var curid = event.currentTarget.dataset.id
    console.log(event.currentTarget.dataset.id);
    // console.log("当前题号："+this.data.curpid+"，选题个数："+this.data.num[this.data.curpid])
    if(curid==1)
    {
      vc.doc('41ae62ef61f6803902426b305668d4c7').update({
        data:{
          tap:{
            1:_.inc(1)
          }
        }
      })
    }
    if(curid==2)
    {
      vc.doc('41ae62ef61f6803902426b305668d4c7').update({
        data:{
          tap:{
            2:_.inc(1)
          }
        }
      })
    }
    if(curid==3)
    {
      vc.doc('41ae62ef61f6803902426b305668d4c7').update({
        data:{
          tap:{
            3:_.inc(1)
          }
        }
      })
    }
    if(curid==4)
    {
      vc.doc('41ae62ef61f6803902426b305668d4c7').update({
        data:{
          tap:{
            4:_.inc(1)
          }
        }
      })
    }
    if(curid==5)
    {
      vc.doc('41ae62ef61f6803902426b305668d4c7').update({
        data:{
          tap:{
            5:_.inc(1)
          }
        }
      })
    }
    if(curid==6)
    {
      vc.doc('41ae62ef61f6803902426b305668d4c7').update({
        data:{
          tap:{
            6:_.inc(1)
          }
        }
      })
    }
    if(curid==7)
    {
      vc.doc('41ae62ef61f6803902426b305668d4c7').update({
        data:{
          tap:{
            7:_.inc(1)
          }
        }
      })
    }
    if(curid==8)
    {
      vc.doc('41ae62ef61f6803902426b305668d4c7').update({
        data:{
          tap:{
            8:_.inc(1)
          }
        }
      })
    }
    if(curid==9)
    {
      vc.doc('41ae62ef61f6803902426b305668d4c7').update({
        data:{
          tap:{
            9:_.inc(1)
          }
        }
      })
    }
    if(curid==10)
    {
      vc.doc('41ae62ef61f6803902426b305668d4c7').update({
        data:{
          tap:{
            10:_.inc(1)
          }
        }
      })
    }
    if(curid==11)
    {
      vc.doc('41ae62ef61f6803902426b305668d4c7').update({
        data:{
          tap:{
            11:_.inc(1)
          }
        }
      })
    }
    if(curid==12)
    {
      vc.doc('41ae62ef61f6803902426b305668d4c7').update({
        data:{
          tap:{
            12:_.inc(1)
          }
        }
      })
    }
    if(curid==13)
    {
      vc.doc('41ae62ef61f6803902426b305668d4c7').update({
        data:{
          tap:{
            13:_.inc(1)
          }
        }
      })
    }
    if(curid==14)
    {
      vc.doc('41ae62ef61f6803902426b305668d4c7').update({
        data:{
          tap:{
            14:_.inc(1)
          }
        }
      })
    }
    if(curid==15)
    {
      vc.doc('41ae62ef61f6803902426b305668d4c7').update({
        data:{
          tap:{
            15:_.inc(1)
          }
        }
      })
    }
    if(curid==16)
    {
      vc.doc('41ae62ef61f6803902426b305668d4c7').update({
        data:{
          tap:{
            16:_.inc(1)
          }
        }
      })
    }
    if(curid==17)
    {
      vc.doc('41ae62ef61f6803902426b305668d4c7').update({
        data:{
          tap:{
            17:_.inc(1)
          }
        }
      })
    }
    console.log("点击了第"+curid+"题")
  }

})