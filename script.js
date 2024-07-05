import {} from "./scripts/container-hierarchy-menu.js"
import {} from "./scripts/items-hierarchy-menu.js"
let activeHierarchy = "body"

Split(['#ws-hierarchy', '#ws-main', '#ws-inspector'], {
    minSize: [250,400,250],
    sizes: [20, 60, 20], // Persentase lebar relatif dari masing-masing bagian
    direction: 'horizontal', // Arah pembagian (opsional, default adalah 'horizontal')
    gutterSize: 4 // Ukuran gutter (opsional)
});

// komponen yang dimiliki semua div kuranag lebih sama
let default_prop = {
    background_color:"white",
    color:"black",
    width:"100%",
    height:"100%",
    padding:{
        top:0,
        right:0,
        bottom:0,
        left:0
    },
    margin:{
        top:0,
        right:0,
        bottom:0,
        left:0
    }
}

bindInputsToDefaultProp("#i-body", default_prop)
assignStyle("#m-body", default_prop)

$(`#ws-hierarchy`).on("click",".item-hierarchy,.item-hierarchy-text",function(){
    activeHierarchy = $(this).attr("id").split("h-").pop()
    console.log(activeHierarchy);
    $("#ws-inspector").children().hide()
    $(`#i-${activeHierarchy}`).show()
})

$(document).keydown(function(event) {
    if ((event.ctrlKey || event.metaKey) && (event.which == 83 || event.key === "s")) {
        event.preventDefault();
        bindInputsToDefaultProp(`#i-${activeHierarchy}`, default_prop)
        assignStyle(`#m-${activeHierarchy}`, default_prop)
    }
});

$("#compile").click(function(){
    bindInputsToDefaultProp(`#i-${activeHierarchy}`, default_prop)
    assignStyle(`#m-${activeHierarchy}`, default_prop)
})

function bindInputsToDefaultProp(selector, prop) {
    prop.background_color = $(selector).find('#background-color').val();
    prop.color = $(selector).find('#color').val();
    prop.width = $(selector).find('#width').val();
    prop.height = $(selector).find('#height').val();
    prop.padding.top = parseInt($(selector).find('#pt').val());
    prop.padding.right = parseInt($(selector).find('#pr').val());
    prop.padding.bottom = parseInt($(selector).find('#pb').val());
    prop.padding.left = parseInt($(selector).find('#pl').val());
    prop.margin.top = parseInt($(selector).find('#mt').val());
    prop.margin.right = parseInt($(selector).find('#mr').val());
    prop.margin.bottom = parseInt($(selector).find('#mb').val());
    prop.margin.left = parseInt($(selector).find('#ml').val());
}

function assignStyle(selector, property){
    $(`${selector}`).css({
        'background-color': property.background_color,
        'color': property.color,
        'width': property.width,
        'height': property.height,
        'padding-top': property.padding.top,
        'padding-right': property.padding.right,
        'padding-bottom': property.padding.bottom,
        'padding-left': property.padding.left,
        'margin-top': property.margin.top,
        'margin-right': property.margin.right,
        'margin-bottom': property.margin.bottom,
        'margin-left': property.margin.left
    });
}