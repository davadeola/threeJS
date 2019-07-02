//DO BASIC SET-UP FOR THE PAGE
let scene, camera, renderer;
var init=()=>{
  scene =new THREE.Scene();
  scene.background = new THREE.Color(0xe5e5e5);

  camera = new THREE.PerspectiveCamera(40, window.innerWidth/window.innerHeight, 1, 5000);
  camera.rotation.y= 45/180*Math.PI;
  camera.position.x=800;
  camera.position.y=100;
  camera.position.z=1000;

  var hLight= new THREE.AmbientLight(0x404040, 100);
  scene.add(hLight);

  directionalLight = new THREE.DirectionalLight(0xFFFFFF, 100);
  directionalLight.position.set(0,1,0);
  directionalLight.castShadow =true;
  scene.add(directionalLight);

  var renderer= new THREE.WebGLRenderer({antialias: true});
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  let loader= new THREE.GLTFLoader();
  loader.load('./../scene.gltf', function(gltf){
    //get the car
    car = gltf.scene.children[0];

    car.scale.set(0.5, 0.5, 0.5);
    scene.add(gltf.scene);
    renderer.render(scene, camera);
  });
}

//Call the THREE.JS GTF LOADER class

init();
