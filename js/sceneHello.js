var scene = new THREE.Scene();
var camera  = new THREE.PerspectiveCamera(
  75, //field of view
  window.innerWidth/window.innerHeight,
  0.1,
  1000
);
camera.position.z = 5;

var renderer = new THREE.WebGLRenderer({antialias:true});
renderer.setClearColor("#e5e5e5");//background setClearColor
renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement); //Adds the renderer to the DOM

window.addEventListener("resize", ()=>{
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth/window.innerHeight;
  camera.updateProjectionMatrix();
});



var geometry = new THREE.SphereGeometry(
  .5, //radius
  10, //width
  10 //heigth
)

var material = new THREE.MeshLambertMaterial({color: 0xed4});
var mesh = new THREE.Mesh(geometry, material);

scene.add(mesh);

var light = new THREE.PointLight(0xFFFFFF, 1, 500); //color, intensity,distance
light.position.set(10,0,25);
scene.add(light);

renderer.render(scene, camera);
