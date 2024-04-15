import * as THREE from "three";

import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader";

import { FlakesTexture } from "three/examples/jsm/Addons.js";

export const setupSphere = async (renderer, scene) => {
  let envmaploader = new THREE.PMREMGenerator(renderer);

  new RGBELoader().setPath("textures/").load("clear-sky.hdr", function (hdrmap) {
    let envmap = envmaploader.fromCubemap(hdrmap);
  
    const texture = new THREE.CanvasTexture(new FlakesTexture());
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
  
    texture.repeat.x = 10;
    texture.repeat.y = 6;
  
    const ballMaterial = {
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
      metalness: 0.9,
      roughness: 0.5,
      color: 0x1fca19,
      normalMap: texture,
      normalScale: new THREE.Vector2(0.15, 0.15),
      envMap: envmap.texture,
    };
  
    const sphereGeometry = new THREE.SphereGeometry(1, 32, 32);
    const sphereMaterial = new THREE.MeshPhysicalMaterial(ballMaterial);
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
  
    sphere.castShadow = true;
    sphere.receiveShadow = true;
    sphere.position.x = 3;
    sphere.position.y = 1;
    scene.add(sphere);
  });
}
