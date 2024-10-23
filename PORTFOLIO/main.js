import "./style.css";
import * as THREE from "https://unpkg.com/three@0.152.2/build/three.module.js";
import { OrbitControls } from "https://unpkg.com/three@0.152.2/examples/jsm/controls/OrbitControls.js";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
const renderer = new THREE.WebGL1Renderer({
  canvas: document.querySelector("#bg"),
  alpha: true,
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

const textureLoader = new THREE.TextureLoader();
const backgroundTexture = textureLoader.load("space.jpg");

const geometry = new THREE.PlaneGeometry(100, 100);
const material = new THREE.MeshBasicMaterial({ map: backgroundTexture });
const plane = new THREE.Mesh(geometry, material);
scene.add(plane);

plane.rotation.x = -Math.PI / 2;
plane.position.y = -10;

const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(20, 20, 20);
scene.add(pointLight);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableZoom = false;

function moveCamera() {
  const scrollY = window.scrollY;
  camera.position.z = 50 - scrollY * 0.1;
  camera.position.x = scrollY * 0.0002;

  const sections = document.querySelectorAll("section");
  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      section.classList.add("visible");
    }
  });
}

document.body.onscroll = moveCamera;

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

moveCamera();
animate();

const navLinks = document.querySelectorAll("nav a");
navLinks.forEach((link) => {
  link.classList.add("visible");
});
