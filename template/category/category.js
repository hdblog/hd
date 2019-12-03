WXAPI.cmsCategories().then(res => {
  if (res.code == 0) {
    this.setData({
      list: res.data
    })
  }
})