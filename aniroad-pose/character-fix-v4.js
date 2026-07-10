(()=>{
  const base="https://cdn.jsdelivr.net/gh/gigaglobalstudio-lgtm/ai-news-daily@a73e22f3b6b928fac724866e77822b6a73b28ea7/aniroad-pose/assets/";
  const map={green:base+"green.svg",red:base+"red.svg",goggles:base+"goggles.svg",zombie:base+"zombie.svg"};
  const native=Object.getOwnPropertyDescriptor(HTMLImageElement.prototype,"src");
  const rewrite=value=>{
    const s=String(value||"");
    for(const [key,url] of Object.entries(map)){
      if(s.includes("/"+key+".svg")||s.includes(key+".svg")||s.includes("/"+key+".webp")||s.includes(key+".webp")) return url;
    }
    return value;
  };
  if(native?.set&&native?.get){
    Object.defineProperty(HTMLImageElement.prototype,"src",{
      configurable:true,
      enumerable:native.enumerable,
      get(){return native.get.call(this)},
      set(value){
        const next=rewrite(value);
        if(next!==value) this.crossOrigin="anonymous";
        return native.set.call(this,next);
      }
    });
  }
  const style=document.createElement("style");
  style.textContent="#camera,#overlay{object-fit:contain!important;background:#050407!important}";
  document.head.appendChild(style);
  const apply=()=>{
    document.querySelectorAll("#permissionScreen img").forEach(img=>{
      const current=img.getAttribute("src")||"";
      for(const [key,url] of Object.entries(map)){
        if(current.includes(key+".svg")||current.includes(key+".webp")){
          img.crossOrigin="anonymous";
          native.set.call(img,url);
          break;
        }
      }
    });
    document.documentElement.dataset.aniroadCharacterFix="v4";
  };
  if(document.readyState==="loading") document.addEventListener("DOMContentLoaded",apply,{once:true}); else apply();
  window.__ANIROAD_CHARACTER_ASSETS__=map;
})();