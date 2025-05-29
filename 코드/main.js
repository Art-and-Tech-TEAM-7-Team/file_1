import { makeCarInsideSketch } from "./carInside.js"; // 다른 파일에 있는 함수를 가져옴옴
import { makeContrastSketch } from "./contrast.js"; // 추가
import { makeCompanySketch } from "./company.js"; // 추가
import { makeEndingcreditSketch } from "./endingcredit.js"; // 추가

let currentP5=null;


function launchScene(sceneName) {
    if (currentP5){
        currentP5.remove();
        currentP5 = null;
    }
  if (sceneName === "carInside") currentP5 = new p5(makeCarInsideSketch(), "canvas-container"); // 캔버스 그리기기
  else if (sceneName === "contrast") currentP5 = new p5(makeContrastSketch(), "canvas-container");
  else if (sceneName === "company") currentP5 = new p5(makeCompanySketch(), "canvas-container");
  else if (sceneName === "endingcredit") currentP5 = new p5(makeEndingcreditSketch(), "canvas-container");
  
}
window.addEventListener("goToContrast", () => launchScene("contrast"));
window.addEventListener("goToCompany", () => launchScene("company"));
window.addEventListener("goToEndingcredit", () => launchScene("endingcredit"));
window.onload = () => launchScene("carInside"); // 페이지가 로드되면 carInside 씬을 시작