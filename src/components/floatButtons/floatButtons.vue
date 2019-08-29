<template>
    <div class="floatButtons">
      <div class="float-button">
        <i class="icon-more"></i>
      </div>
      <i class="icon-stick"></i>
    </div>
</template>

<script>
export default {
  name: 'floatButtons'
}
</script>

<style lang="stylus">
.floatButtons
  z-index: 20;
  position: fixed;
  right: 0.69rem;
  bottom: 10rem;
  width: 3rem;
  opacity: 0.85;
  .float-button
    width: 2rem;
    height: 2rem;
    border-radius: 4px;
    background: #201E20;
    z-index: 20;
    text-align: center;
    opacity: 0.85;
    .icon-more
      margin-top: 0.5rem;
      vertical-align: center;
      width: 50%;
      height: 50%;
      display: inline-block;
      background: url(./function_share_white@2x.png) center no-repeat;
      background-size: contain;
  .icon-stick
    margin-top: 0.5rem;
    vertical-align: center;
    width: 2rem;
    height: 2rem;
    display: inline-block;
    background: url(./stick@2x.png) center no-repeat;
    background-size: contain;
</style>
