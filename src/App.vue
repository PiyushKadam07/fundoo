<template>
  <!-- <div id="app">

  </div> -->
  <router-view />
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Open+Sans&family=Roboto&display=swap');

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-height: 100vh;
}

// body{
  
//     overflow-x: hidden;
// }

// #nav {
//   padding: 30px;
  
//   a {
//     font-weight: bold;
//     color: #2c3e50;
//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }

// .heading-h1{
//   font-family: 'Open Sans', sans-serif;
//   font-weight: 400;
//   font-size: 24px;
//   color: #202124;
//   line-height: 1.333;
// }

// .small-text-1, .small-text-2, .small-text-3{
//   font-family: 'Open Sans', sans-serif;
//   font-family: 'Roboto', sans-serif;
// }

// .small-text-1{
//   font-size: 12px;
//   margin-left: 8px;
//   padding-top: 4px;
// }

// .small-text-2{
//   font-size: 14px;
//   line-height: 1.48;
//   margin-left: 10px;
// }

// .small-text-3{
//   text-align: center;
//   font-size: 16px;
//   line-height: 1.42;
//   color: #666;
// }

// .blue-link-1{
//   font-family: 'Open Sans', sans-serif;
//   font-family: 'Roboto', sans-serif;
//   text-decoration: none;
//   color: #1a73e8;
//   font-size: 16px;
//   line-height: 1.42;
//   width: max-content;
//   padding: 1%;
// }

// .blue-link-1:hover{
//   background-color: #e9f4fb;
//   border-radius: 4px;
// }

// .blue-button-1{
//   font-family: 'Open Sans', sans-serif;
//   font-family: 'Roboto', sans-serif;
//   font-size: 16px;
//   line-height: 1.42;
//   padding: 1%;
//   text-align: center;
//   cursor: pointer;
//   background-color: #1a73e8;
//   color: #fff;
//   border-radius: 4px;
//   border-width: 0;
//   height: 35px;
//   width: 80px;
// }

// .blue-button-1:hover{
//   background-color: #3566b8;
// }

// .checkbox-input{
//   width: 18px;
//   height: 18px;
//   cursor: pointer;
// }

// .input-holder{
//   height: 3em;
// }

// input[type="text"], input[type="password"] {
//   box-sizing: border-box;
//   width: 100%;
//   height: calc(3em + 2px);
//   margin: 0 0 1em;
//   padding: 1em;
//   border: 1px solid #ccc;
//   border-radius: 4px;
//   background: #fff;
//   resize: none;
//   outline: none;
// }

// input[type="text"][required]:focus, input[type="password"][required]:focus {
//   border-color: #3566b8;
// }

// input[type="text"][required]:focus + label[placeholder]:before, input[type="password"][required]:focus + label[placeholder]:before {
//   color: #3566b8;
// }

// input[type="text"][required]:focus + label[placeholder]:before, input[type="text"][required]:valid + label[placeholder]:before,
// input[type="password"][required]:focus + label[placeholder]:before, input[type="password"][required]:valid + label[placeholder]:before  {
//   transition-duration: 0.2s;
//   transform: translate(0, -1.5em) scale(0.9, 0.9);
// }

// input[type="text"][required]:invalid + label[placeholder][alt]:before, input[type="password"][required]:invalid + label[placeholder][alt]:before {
//   content: attr(alt);
// }

// input[type="text"][required] + label[placeholder], input[type="password"][required] + label[placeholder] {
//   display: block;
//   pointer-events: none;
//   margin-top: calc(-2.5em - 1px);
//   margin-bottom: calc((3em - 1em) + 1px);
// }

// input[type="text"][required] + label[placeholder]:before, input[type="password"][required] + label[placeholder]:before {
//   content: attr(placeholder);
//   display: inline-block;
//   margin: 0 calc(1em + 1px);
//   padding: 0 2px;
//   color: #898989;
//   white-space: nowrap;
//   transition: 0.3s ease-in-out;
//   background-image: linear-gradient(to bottom, #fff, #fff);
//   background-size: 100% 5px;
//   background-repeat: no-repeat;
//   background-position: center;
// }
</style>

