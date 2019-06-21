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
  camera.updateProjectionMatrix();
});

renderer.render(scene, camera);

var geometry = new THREE.SphereGeometry(
  1, //radius
  10, //width
  10 //heigth
)

var material = new THREE.MeshLambertMaterial({color: 0xed4});
var mesh = new THREE.Mesh(geometry, material);

scene.add(mesh);
