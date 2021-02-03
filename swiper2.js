// components/swiper.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    pic: {
      type: Array
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    currentIndex: 0,
    leftIndex: 4, // 默认为图片数组长度
    rightIndex: 1
  },

  /**
   * 组件的方法列表
   */
  methods: {
    /* 这里实现控制中间凸显图片的样式 */
    handleChange: function (e) {
      let {
        leftIndex,
        rightIndex,
        pic
      } = this.data;

      if (e.detail.current === 0) {
        leftIndex = pic.length - 1;
      } else {
        leftIndex = e.detail.current - 1;
      }

      if (e.detail.current === pic.length - 1) {
        rightIndex = 0
      } else {
        rightIndex = e.detail.current + 1;
      }

      this.setData({
        currentIndex: e.detail.current,
        leftIndex,
        rightIndex
      })
    },
  }
})