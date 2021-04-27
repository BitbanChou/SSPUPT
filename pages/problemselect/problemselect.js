// pages/problemselect/problemselect.js
Page({
  
  /**
   * 页面的初始数据
   */
  data: {
    list:[
      {
        title:'1. Invent Yourself 自己发明\n',
        contentE:'Design a boat that moves only due to the periodical mechanical movements of its internal parts and which only interacts with the environment (air, water) through its stiff hull. Optimise the parameters of your boat for maximum speed.\n',
        contentC:'设计一艘只因内部部件的周期性机械运动而移动的船，并且它只通过坚硬的船体与环境（空气、水）相互作用产生移动。优化你所建的船的参数以达到最大速度。',
        imgurl:'http://tiebapic.baidu.com/forum/w%3D580/sign=362fbe62a751f819f1250342eab54a76/96809022720e0cf3d8f776b21d46f21fbf09aa4c.jpg',
      },
      {
        title:'2. Circling Magnets 旋转磁铁\n',
        contentE:'Button magnets with different diameters are attached to each end of a cylindrical battery. When placed on an aluminium foil the object starts to circle. Investigate how the motion depends on relevant parameters.\n',
        contentC:'将直径不同的纽扣磁铁贴附到圆柱形电池的两端。将其放置到铝箔上后，物体会开始旋转。探究相关参数如何影响该运动。',
        imgurl:'http://tiebapic.baidu.com/forum/w%3D580/sign=41adfb7a648da9774e2f86238050f872/499828a4462309f79b6f955b650e0cf3d6cad64c.jpg',
      },
      {
        title:'3. Proximity Sensor 接近传感器\n',
        contentE:'A simple passive inductive sensor can detect ferromagnetic objects moving through its magnetic field. Construct such a passive sensor and investigate its characteristics such as sensing range.\n',
        contentC:'一个简单的无源感应传感器可以探测到穿过它磁场的铁磁性物体。构建一个这样的无源传感器并探究其特性，如感应范围。',
        imgurl:'http://tiebapic.baidu.com/forum/w%3D580/sign=0b68be60fcc4b7453494b71efffd1e78/a63e00fa513d269758d3301442fbb2fb4216d84c.jpg',
      },
      {
        title:'4. Wind Speed 风速\n',
        contentE:'Let an electric current flow through a coil. When cold air flows over the coil, the coil’s temperature will decrease. Investigate how the temperature drop depends on the wind speed. What is the accuracy of this method of measuring the wind speed?\n',
        contentC:'让电流流过一个线圈。当冷空气流过这个线圈时，线圈的温度会降低。探究风速如何影响温度的下降。这种测量风速的方法的精度是多少？',
        imgurl:'http://tiebapic.baidu.com/forum/w%3D580/sign=46948f5fd8fc1e17fdbf8c397a91f67c/5f3c356d55fbb2fb462b605b584a20a44723dc4c.jpg',
      },
      {
        title:'5. Synchronised Candles 同步蜡烛\n',
        contentE:'Oscillatory flames can be observed when several candles burn next to each other. Two such oscillators can couple with each other, resulting in in-phase or anti-phase synchronisation (depending on the distance between the sets of candles). Explain and investigate this phenomenon.\n',
        contentC:'当几支彼此邻近的蜡烛燃烧时，可以观察到振荡的火焰。两个这样的振荡可以相互耦合，导致同相或反相同步（取决于蜡烛组之间的距离）。解释并探究这种现象。',
        imgurl:'http://tiebapic.baidu.com/forum/w%3D580/sign=b33c47e9e103738dde4a0c2a831ab073/6bf0474a20a4462303ca9d2b8f22720e0df3d74c.jpg',
      },
       {
        title:'6. Irreversible Cartesian Diver 不可逆转的浮沉子\n',
        contentE:'A simple Cartesian diver (e.g. an inverted test tube partially filled with water) is placed in a long vertical tube filled with water. Increasing the pressure in the tube forces the Cartesian diver to sink. When it reaches a certain depth, it never returns to the surface even if the pressure is changed back to its initial value. Investigate this phenomenon and how it depends on relevant parameters.\n',
        contentC:'一个简单的浮沉子（例如，一个部分充满水的倒置试管）被放置在一个装满水的垂直长管中。增加管中的压力迫使浮沉子下沉。当达到一定的深度时，即使改变压力到初始值，它也不会返回到表面。探究这一现象以及相关参数如何影响该现象。',
        imgurl:'http://tiebapic.baidu.com/forum/w%3D580/sign=69002bee4eee3d6d22c687c373176d41/b6acc28065380cd7a91e9aa4b644ad345882814c.jpg',
      },
      {
        title:'7. Bead Dynamics 珠子动力学\n',
        contentE:'A circular hoop rotates about a vertical diameter. A small bead is allowed to roll in a groove on the inside of the hoop. Investigate the relevant parameters affecting the dynamics of the bead.\n',
        contentC:'一圆环绕着垂直于直径的轴旋转，让一个小珠子可在环内的凹槽中滚动。探究相关参数对珠子动力学的影响。',
        imgurl:'http://tiebapic.baidu.com/forum/w%3D580/sign=e5e0ac3dba345982c58ae59a3cf5310b/4f860123dd54564ee065dc70a4de9c82d0584f4c.jpg',
      },
      {
        title:'8. Fuses 保险丝\n',
        contentE:'A short length of wire can act as an electrical fuse. Determine how various parameters affect the time taken for the fuse to ‘blow’.\n',
        contentC:'一根短电线可以充当保险丝。试确定各参数是如何影响保险丝“熔断”所需时间的。',
        imgurl:'http://tiebapic.baidu.com/forum/w%3D580/sign=b922b3707c63f6241c5d390bb745eb32/7a0b851001e939016a02b5776cec54e737d1964c.jpg',
      },
      {
        title:'9. Light Whiskers 光须\n',
        contentE:'When a laser beam enters a soap film at a small angle, a rapidly changing pattern of thin, branching light tracks may appear inside the film. Explain and investigate this phenomenon.\n',
        contentC:'当一束激光以小角度照射肥皂膜时，薄膜内部可能出现由细的、分岔的光轨迹构成的快速变化的图案。解释并探究此现象。',
        imgurl:'http://tiebapic.baidu.com/forum/w%3D580/sign=32f6073fe51fbe091c5ec31c5b610c30/280fabcc7cd98d1048d43478363fb80e7aec904c.jpg',
      },
       {
        title:'10. Spin Drift 旋转漂移\n',
        contentE:'When a ring is set to roll in a parabolic bowl, interesting motion patterns may arise. Investigate this phenomenon.\n',
        contentC:'当一个圆环在抛物面形的碗中滚动时，可能会出现有趣的运动模式，探究此现象。',
        imgurl:'http://tiebapic.baidu.com/forum/w%3D580/sign=511a6fa9e003918fd7d13dc2613c264b/c08e18385343fbf2802c9e6aa77eca8064388f4c.jpg',
      },
      {
        title:'11. Guitar String 吉他弦\n',
        contentE:'A periodic force is applied to a steel guitar string using an electromagnet. Investigate the motion of the guitar string around its resonance frequency.\n',
        contentC:'使用电磁铁对钢吉他弦施加周期性的力。探究吉他弦在其共振频率附近的运动。',
        imgurl:'http://tiebapic.baidu.com/forum/w%3D580/sign=d279a04d4e82b2b7a79f39cc01accb0a/0ff1d554564e9258a234bea78b82d158cdbf4e4c.jpg',
      },
      {
        title:'12. Wilberforce Pendulum 威尔伯福斯摆/韦氏摆\n',
        contentE:'A Wilberforce pendulum consists of a mass hanging from a vertically oriented helical spring. The mass can both move up and down on the spring and rotate about its vertical axis. Investigate the behaviour of such a pendulum and how it depends on relevant parameters.\n',
        contentC:'威尔伯福斯摆由悬挂在竖直方向的螺旋弹簧和连接在弹簧末端的物块组成。物块既能在弹簧上上下运动，又能绕其竖直轴旋转。探究这种摆的运动行为，以及它是如何依赖于相关参数的。 ',
        imgurl:'http://tiebapic.baidu.com/forum/w%3D580/sign=265efb5d7c600c33f079dec02a4d5134/073b3101213fb80e36d1599e21d12f2eb838944c.jpg',
      },
      {
        title:'13. Sponge 海绵\n',
        contentE:'A sponge will soak up water at a rate and in a quantity determined by various parameters. Investigate how effective a sponge is at drying a wet surface.\n',
        contentC:'在不同的参数影响下，海绵将以一定的速率和总量吸水。探究海绵在使潮湿表面变干燥时的效率。',
        imgurl:'http://tiebapic.baidu.com/forum/w%3D580/sign=386cfea7a38f8c54e3d3c5270a282dee/cbc37a8b4710b9125fc1ceb7d4fdfc039345224c.jpg',
      },
       {
        title:'14. Dynamic Hydrophobicity 动态疏水性\n',
        contentE:'When a drop of liquid impacts on a horizontally moving surface, the droplet may be reflected or not, depending on the speed of the surface. Investigate the interaction between a moving surface and a liquid drop.',
        contentC:'当一滴液体撞击水平移动的表面时，取决于表面的移动速度，液滴可能反弹或不反弹。探究该运动表面与液滴之间的相互作用。',
        imgurl:'http://tiebapic.baidu.com/forum/w%3D580/sign=16699997e71f3a295ac8d5c6a924bce3/bfc0c0fcc3cec3fd663e9f3cc188d43f8694274c.jpg',
      },
      {
        title:'15. Rebounding Capsule 反弹胶囊\n',
        contentE:'A spherical ball dropped onto a hard surface will never rebound to the release height, even if it has an initial spin. A capsule-shaped object (i.e. Tic Tac mint) on the other hand may exceed the initial height. Investigate this phenomenon.\n',
        contentC:'落在坚硬表面上的圆球即便具有一个初始的旋转速度，也永远不会反弹到释放高度；胶囊状物体(例如Tic Tac薄荷糖)却可能反弹超过初始高度。探究这个现象。',
        imgurl:'http://tiebapic.baidu.com/forum/w%3D580/sign=e01e9aa4b644ad342ebf878fe0a30c08/cdc141540923dd5427739f21c609b3de9d82484c.jpg',
      },
      {
        title:'16. Ultrasonic Pump 超声波泵\n',
        contentE:'A capillary immersed in an ultrasonic bath works like a pump that can lift water to a considerable height. Explain and investigate this phenomenon.\n',
        contentC:'浸没在超声波浴中的毛细管会像水泵一样工作，将毛细管内的水提升到相当高的高度。解释和探究这一现象。',
        imgurl:'http://tiebapic.baidu.com/forum/w%3D580/sign=106d42bbc262853592e0d229a0ee76f2/d71aaf86c9177f3eec34c44467cf3bc79e3d564c.jpg',
      },
      {
        title:'17. Hand Helicopter 手提直升机/竹蜻蜓\n',
        contentE:'A simple hand helicopter can be made by attaching rotor blades to one end of a vertical stick. The helicopter moves upwards when the stick is twisted at a high enough speedand then let go. Investigate how the relevant parameters affect the lift-off and the maximum height.\n',
        contentC:'一架简单的手提直升机可以通过将旋翼叶片固定在垂直杆的一端制作而成。当垂直杆以足够高的速度旋转时，松开手，手提直升机就会起飞。探究相关参数对起飞和飞行最大高度的影响。',
        imgurl:'http://tiebapic.baidu.com/forum/w%3D580/sign=6bc7a228e4deb48ffb69a1d6c01e3aef/bc73c511728b47102f2fc585d4cec3fdfd03234c.jpg',
      },
      ],
  },  
})