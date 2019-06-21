var scene = new THREE.Scene();
var camera  = new THREE.PerspectiveCamera(
  75, //field of view
  window.innerWidth/window.innerHeight,
  0.1,
  1000
);

var renderer = new THREE.WebGLRenderer({antialias:true});
renderer.setClearColor("#e5e5e5");//background setClearColor
renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement); //Adds the renderer to the DOM

window.addEventListener("resize", ()=>{
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth/window.innerHeight;
  camera.updateProjectMatrix();
})
