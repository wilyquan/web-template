<template>
  <div class="dark">
  	<h2>dark</h2>
    <nuxt/>
  </div>
</template>

<style>
body {
  overflow: hidden;
}
.dark {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100%;
  background: black;
  color: white;
  padding: 10px;
}
.dark a {
  color: white;
}
</style>
