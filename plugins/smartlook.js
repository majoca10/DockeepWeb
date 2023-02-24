import Vue from 'vue'

export default ({ app }) => {
  if (process.env.NODE_ENV !== 'production') return
  var Smartlook=require("smartlook-javascript");
  Smartlook.init("c1070cb10b953058b64b9e991840685cb7a1e92f", { region: 'eu' });
}