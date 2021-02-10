// components/v-link/index.js
Component({
  options: {
    addGlobalClass: true
  },
  /**
   * 组件的属性列表
   */
  properties: {
    linkText: {
      type: Number,
      value: 0
    },
    linkImg: {
      type: Boolean,
      value: true
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    yesLinkImg: "./images/link.png",
    noLinkImg: "./images/link@dis.png"
  },

  /**F
   * 组件的方法列表
   */
  methods: {
    onLink: function (event) {
      console.log(event)
      let TextLink = this.properties.linkText
      let ImgLink = this.properties.linkImg
      TextLink = ImgLink ? TextLink + 1 : TextLink - 1
      this.setData({
        linkText: TextLink,
        linkImg: !ImgLink
      })
    }
  }
})