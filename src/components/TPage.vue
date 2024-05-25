<template>
  <div class="t-page">
    <t-header>
      <t-header-item>
        <t-btn icon="add" title="add" variant="white"/>
        <t-btn icon="actual" title="actual" variant="white"/>
        <t-btn icon="clone" title="clone" variant="white"/>
        <t-btn icon="delete" title="delete" variant="white"/>
      </t-header-item>
      <t-header-item>
        <t-btn icon="download" title="download" variant="white"/>
        <t-btn icon="edit" title="edit" variant="white"/>
        <t-btn icon="link" title="add" variant="white"/>
        <t-btn icon="minus" title="minus" variant="white"/>
      </t-header-item>
      <t-header-item grow>
        <t-btn icon="print" title="print" variant="white"/>
        <t-btn icon="refresh" title="refresh" variant="white"/>
        <t-btn icon="save" title="save" variant="white"/>
        <t-btn icon="undo" title="undo" variant="white"/>
        <t-btn icon="upload" title="upload" variant="white"/>
      </t-header-item>
      <t-header-item>
        <t-btn icon="add" title="add" variant="white"/>
        <t-btn icon="actual" title="actual" variant="white"/>
        <t-btn icon="clone" title="clone" variant="white"/>
        <t-btn icon="delete" title="delete" variant="white"/>
      </t-header-item>
      <t-header-item>
        <t-icon path="accident"/>
      </t-header-item>
    </t-header>
    <div class="t-body">
      <h1>t-body</h1>
    </div>
    <div class="t-footer">
      <h1>t-footer</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TPage'
}
</script>

<style lang="scss" scoped>
.t-page {
  background-color: #f2f2f2;
  width: inherit;
  height: calc(var(--vh, 1vh) * 100);
  position: relative;
  display: grid;
  grid-template-rows: min-content 1fr;
}

.t-header {
  box-sizing: content-box;
  background-color: bisque;
}

.t-body {
  box-sizing: content-box;
  text-align: center;
  background-color: aliceblue;
}

.t-footer {
  background-color: rgba(9, 155, 76, 0.62);
  height: 160px;
  width: 100%;
  text-align: center;
}
h1 {
  margin: 0;
  position: absolute;
  right:calc(50% - 290px);
  font-size: 190px;
  opacity: 0.3;
}
</style>
