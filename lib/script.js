export function loadScript(scriptUrl) {
  const script = document.createElement('script');
  script.src = scriptUrl;
  document.body.appendChild(script);
  
  return new Promise((res, rej) => {
    script.onload = function() {
      res();
    }
    script.onerror = function () {
      rej();
    }
  });
}

export const axgCdnHAndler = (url, type) => {
  const suffix = type == 'style' ? 'Style' : 'Js'
  return `${process.env.BetaAxg}/${url}${suffix}${process.env.LocalAxgDev && '-dev'}`
}