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

  //ADDING CONTROLS FOR THE ORBIT CAMERA
  controls = new THREE.OrbitControls(camera);
  controls.addEventListener('change', renderer);

  //ADDING LIGHTING TO THE IMAGE
  var hLight= new THREE.AmbientLight(0x404040, 100);
  scene.add(hLight);

  directionalLight = new THREE.DirectionalLight(0xFFFFFF, 100);
  directionalLight.position.set(0,1,0);
  directionalLight.castShadow =true;
  scene.add(directionalLight);

  light = new THREE.PointLight(0xc4c4c4, 10);
  light.position.set(0,300, 500);
  scene.add(light);

  light2 = new THREE.PointLight(0xc4c4c4, 10);
  light2.position.set(500,100, 0);
  scene.add(light2);

  light3 = new THREE.PointLight(0xc4c4c4, 10);
  light3.position.set(0,100, -500);
  scene.add(light3);

  light4 = new THREE.PointLight(0xc4c4c4, 10);
  light.position.set(-500,300,0);
  scene.add(light4);

  
  var renderer= new THREE.WebGLRenderer({antialias: true});
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  //Call the THREE.JS GTF LOADER class
  let loader= new THREE.GLTFLoader();
  loader.load('./../scene.gltf', function(gltf){
    //get the car
    car = gltf.scene.children[0];

    car.scale.set(0.5, 0.5, 0.5);
    scene.add(gltf.scene);
    // renderer.render(scene, camera);
    animate();
  });

  //rerenders the image on change on camera position
  var animate =()=>{
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  }
}



init();
