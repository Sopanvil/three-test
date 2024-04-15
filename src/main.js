import * as THREE from "three";
import WebGL from "three/addons/capabilities/WebGL.js";

import { OrbitControls } from "three/addons/controls/OrbitControls.js";

import {setupCube} from '/components/objects/cube.js'
import {setupSphere} from '/components/objects/sphere.js'
import {setupDoor} from '/components/objects/door.js'
import {setupPlane} from '/components/objects/plane.js'

import {setupDirLight} from '/components/lights/dirLight.js'
import {setupAmbLight} from '/components/lights/ambLight.js'

import {setupSkyTexture} from '/components/sky/radialSkyTexture.js'


// Main

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.physicallyCorrectLights = true;

document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(60, innerWidth / innerHeight, 1, 10000);
camera.position.set(0, 3, 10);

// Objects

setupCube(scene)
setupSphere(renderer, scene)
setupDoor(scene)
setupPlane(scene)

// Lights

setupDirLight(scene)
setupAmbLight(scene)

// Sky

setupSkyTexture(scene)

// Controls

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableZoom = true;

function animate() {
  requestAnimationFrame(animate);

  renderer.render(scene, camera);
}

if (WebGL.isWebGLAvailable()) {
  animate();
} else {
  const warning = WebGL.getWebGLErrorMessage();
  document.getElementById("container").appendChild(warning);
}
