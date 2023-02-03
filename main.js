import './style.css'

import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

camera.position.setZ(30);
console.log(document.querySelector('#bg'));

const moonTexture = new THREE.TextureLoader().load('moon.jpg')

const geometry = new THREE.SphereGeometry( 15, 64, 32 );
const material = new THREE.MeshBasicMaterial( { map: moonTexture });
const sphere = new THREE.Mesh( geometry, material );
scene.add( sphere );

const pointLight = new THREE.SpotLight(0xffffff);

pointLight.position.set(50,50,50);
scene.add(pointLight);

const controls = new OrbitControls(camera, renderer.domElement)

function animate() {
  requestAnimationFrame( animate );

  sphere.rotation.y += 0.001;
  controls.update()
  renderer.render( scene, camera);
}

animate()