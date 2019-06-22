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


//creates a sphere
//var geometry = new THREE.SphereGeometry(.5,10, 100)

//creates a box
var geometry = new THREE.BoxGeometry(1,1,1); //x, y, z
var material = new THREE.MeshLambertMaterial({color: 0xed4});

var mesh = new THREE.Mesh(geometry, material);

//changes the perspective of the view of the object
mesh.position.x =2;
mesh.position.set(1, 1, 0); //x, y,z

// mesh.rotation.set(45, 45, 0); //x,y,z
// mesh.scale.set(1, 2, 1);




scene.add(mesh);

var light = new THREE.PointLight(0xFFFFFF, 1, 500); //color, intensity,distance
light.position.set(10,0,25);
scene.add(light);

//fixes the distortion to the object on resizing the screen
var render = ()=>{
  requestAnimationFrame(render);//creates a loop to render the screen everytime the screen size is changed (60fps)

  //roatate the object everytime the render() is called
  // mesh.rotation.x += 0.01;
  // mesh.rotation.y+=0.1;
  // mesh.scale.x -=0.01;
  renderer.render(scene, camera);
}
render();

this.tl = new TimelineMax().delay(.3);
this.tl.to(this.mesh.scale, 1, {x:2, ease: Expo.easeOut})
