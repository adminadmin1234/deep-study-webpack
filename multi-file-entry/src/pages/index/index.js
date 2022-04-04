import img from "../../common/images/lee.png";
import "../../common/styles/common.css";
import "./index.less";
import {a} from "../../common/js/utils.js"
// 动态添加图片
console.log(img);
let imgContainer = document.getElementById('img-container');
let imgElement = document.createElement('img');
imgElement.src = img;
imgContainer.appendChild(imgElement)

//
a();
