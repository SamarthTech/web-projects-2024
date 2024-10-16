import './style.css';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

// Set up the scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#bg'),
    antialias: true, // Enable antialiasing
});

// Set the pixel ratio and size of the renderer
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.set(30, 30, 30); // Adjust camera to ensure visibility
camera.lookAt(0, 0, 0);

// Create the geometry, material, and mesh for the torus
const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
const material = new THREE.MeshStandardMaterial({ color: 0xFF6347 });
const torus = new THREE.Mesh(geometry, material);
scene.add(torus);

// Add lights
const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(20, 20, 20);
const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(pointLight, ambientLight);

// Add light and grid helpers
const lightHelper = new THREE.PointLightHelper(pointLight);
const gridHelper = new THREE.GridHelper(200, 50);
scene.add(lightHelper, gridHelper);

// Set up orbit controls
const controls = new OrbitControls(camera, renderer.domElement);

// Set the background texture
const spaceTexture = new THREE.TextureLoader().load('background.jpg', 
    () => { console.log("Background texture loaded successfully."); },
    undefined,
    err => { console.error("An error occurred while loading the texture", err); }
);
scene.background = spaceTexture;

// Function to move the camera and rotate the torus
function moveCamera() {
    const t = document.body.getBoundingClientRect().top;

    torus.rotation.x += 0.05;
    torus.rotation.y += 0.05;

    // Adjust camera position based on scroll
    camera.position.z = t * -0.01;
    camera.position.x = t * -0.0002;
    camera.position.y = t * -0.0002;
}

// Correctly set the scroll event handler
document.body.onscroll = moveCamera;

// Rendering loop
function animate() {
    requestAnimationFrame(animate); // Create an animation loop
    
    moveCamera(); // Update camera position and torus rotation on every frame
    controls.update(); // Update controls
    renderer.render(scene, camera); // Render the scene
}

animate(); // Start the animation
