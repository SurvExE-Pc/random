var Inputs = {
    No : (function(data){return `(${data})`;}),
    Bool : (function(data,UC,color){const check=(function(){if(UC==true){return "::"+color}else{return ""}});return `<${data+check()}>`;}),
    String : (function(data,){return `[${data}]`;}),
    DropDownUI : (function(name){return `[${name} v]`;}),
    DropDownI : (function(name){Inputs.DropDownUI(name);}),
    ColorInput : (function(HexC){return `[#${HexC}]`;})
};
blockTypes = ["{}","cat","hat","stack","cap","define","..."];
function createLoop(name,endTxt,data) {
    return `${name}{
data
}${endTxt}`;
};
function createReporter(data) {
    return data+" :: reporter";
};
function createBool(data) {
    return data+" :: boolean";
};
function createRing(data,doArr) {
    const doEmoji=(function(){if(doArr==true){return " @addInput :: ring"}else{return "::ring"}});
    return `(${data}${doEmoji()})`;
};
function makeGlowey(data){
    if ((data.includes("::") ? data.lastIndexOf("::") : false)!=false) {
        if (data.lastIndexOf("::")==data.length-2){
            return data+" +"
        } else {
            return data+" :: +"
        };
    } else {
        return data+ ":: +"
    };
};
function makeCat(data){
    if ((data.includes("::") ? data.lastIndexOf("::") : false)!=false) {
        if (data.lastIndexOf("::")==data.length-2){
            return data+" cat"
        } else {
            return data+" :: cat"
        };
    } else {
        return data+" :: cat"
    };
};
function makeHat(data){
    if ((data.includes("::") ? data.lastIndexOf("::") : false)!=false) {
        if (data.lastIndexOf("::")==data.length-2){
            return data+" hat"
        } else {
            return data+" :: hat"
        };
    } else {
        return data+" :: hat"
    };
};
function makeStack(data){
    if ((data.includes("::") ? data.lastIndexOf("::") : false)!=false) {
        if (data.lastIndexOf("::")==data.length-2){
            return data+" stack"
        } else {
            return data+" :: stack"
        };
    } else {
        return data+" :: stack"
    };
};
function makeCap(data){
    if ((data.includes("::") ? data.lastIndexOf("::") : false)!=false) {
        if (data.lastIndexOf("::")==data.length-2){
            return data+" cap"
        } else {
            return data+" :: cap"
        };
    } else {
        return data+" :: cap"
    };
};
function makeC(name,data){
    return `${name}
    ${data}
end`
};
function addColor(data,color){
    var colorx;
    const colors=["undefined","grey","extension","custom","operators","sensing","control","events","list","variables","pen","sound","looks","motion"];
    if (colors.includes(color)) {
        colorx = color;
    } else {
        function acx() {
            colorx=color;
        };
        if(color.at(0)=="#"){if(3<color.length){acx()}else{colorx="undefined"}}else{if(2<color.length){acx()}else{colorx="undefined"}colorx="#"+colorx;};
    };
    if ((data.includes("::") ? data.lastIndexOf("::") : false)!=false) {
        if (data.lastIndexOf("::")==data.length-2){
            return data+" "+colorx;
        } else {
            return data+" :: "+colorx;
        };
    } else {
        return data+" :: "+colorx;
    };
};
function addEmoji(name){
    const emojis=["@greenFlag","@stopSign","@turnRight","@turnLeft","@loopArrow","@list","@delInput","@addInput"];
    const emnames=["flag","stop","right","left","loop","list","<",">"];
    return emojis[emnames.indexOf(name,0)];
};
