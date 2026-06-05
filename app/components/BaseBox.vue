<template>
    <h2>TestBox</h2>
    <div class="box">
      <slot />
    </div>
  </template>
  
  <style>
  .box {
    padding: 16px;
    border: 1px solid #ccc;
  }
  </style>