import Vue from 'vue'
export default ({ app }) => {
    if (process.env.NODE_ENV === 'production') return
    (function(c,l,a,r,i,t,y){
      c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
      t=l.createElement(r);t.async=1;t.src="https://cdn.claritymetrics.io/clarity.labs.js";
      l.getElementsByTagName(r)[0].parentNode.appendChild(t);
      c[a]("init", {token: "fbxh9ij3cy"})
    })(window,document,"clarity","script")
  }