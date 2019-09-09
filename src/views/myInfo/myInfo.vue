<template>
    <div class="myInfo">
      <div class="myInfo-partOne">
        <div class="myInfo-item avatar-item">
          <input type="hidden" id="avatar-element-hidden" name="avatar">
          <input type="file" class="avatar-item-input">
          <span class="title">头像</span>
          <div class="avatar-container">
            <div class="avatar" id="randomAvatarSelector">
              <img src="static/images/default_avatar.jpg">
            </div>
          </div>
          <i class="icon-right-arrow"></i>
        </div>
      </div>

      <div class="myInfo-partTwo">
        <div class="myInfo-item">
          <span class="title">昵称</span>
          <span class="info">穆先生</span>
          <i class="icon-right-arrow"></i>
        </div>
        <div class="myInfo-item">
          <span class="title">手机号码</span>
          <span class="info">去绑定手机号</span>
          <i class="icon-right-arrow"></i>
        </div>
        <div class="myInfo-item">
          <span class="title">地址管理</span>
          <span class="info">去填写地址</span>
          <i class="icon-right-arrow"></i>
        </div>
      </div>
      <div class="myInfo-partThree">
        <div class="myInfo-item">
          <span class="title">登录密码</span>
          <i class="icon-right-arrow"></i>
        </div>
        <div class="myInfo-item">
          <span class="title">支付密码</span>
          <i class="icon-right-arrow"></i>
        </div>
      </div>
      <div class="myInfo-partFour">
        退出登录
      </div>
    </div>
</template>

<script>
export default {
  name: 'myInfo'
}
</script>

<style lang="stylus">

</style>
