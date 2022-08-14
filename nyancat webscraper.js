var elements = document.getElementsByTagName("a"),urls=[];
var el = elements.length;
function toDataURL(src, callback){
    var image = new Image();
    image.crossOrigin = 'Anonymous';
 
    image.onload = function(){
      var canvas = document.createElement('canvas');
      var context = canvas.getContext('2d');
      canvas.height = this.naturalHeight;
      canvas.width = this.naturalWidth;
      context.drawImage(this, 0, 0);
      var dataURL = canvas.toDataURL('image/jpeg');
      callback(dataURL);
    };
    image.src = src;
  }
function upload(url,i){toDataURL(url,function(dataURL){Uri=(url.replace("https://nyancatcollection.com/images/","")).split(".");urls.push((dataURL.replace("jpeg",Uri[1])).replaceAll("\"",""));})};
for (let i = 5;i<el;i++) {
    upload(elements[i].href,i);
};
function doCon() {
let html = "<!DOCTYPE html><html><head><style>sub-html {border: 2px solid; border-style: inset};</style><title>Static Cats!</title></head><body><div id=\"Images\">"
for (let i = 0;i<urls.length;i++) {
urls[i]="<img src=\""+urls[i]+"\"></img>";
html=html+urls[i]+"<br>";
};
html=html+"</div></body><sub-html><div id=\"Co-Notice\"><p>I own none of these images, these were scraped and converted to base64 static images,</p><br><p>from the nyancat nft site using there /images/ directory which made it to easy.</p></div></sub-html></html>";
return html;
};
