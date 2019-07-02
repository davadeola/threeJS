//DO BASIC SET-UP FOR THE PAGE
let scene, camera, renderer;
var init=()=>{
  scene.new THREE.Scene();
  scene.background = new THREE.Color(0xfdd);

  camera = new THREE.PerspectiveCamera(40, window.innerWidth/window.innerHeight, 1, 5000);
  var hLight= new THREE.AmbientLight(0x404040, 100);
  scene.add(hLight);

  renderer= new THREE.WebGLRenderer({antialias: true});
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);
}

//
