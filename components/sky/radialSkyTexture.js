import * as THREE from "three";
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader";

export const setupSkyTexture = async (scene) => {
  const texture = new RGBELoader().setPath("./textures/").load("clear-sky1.hdr");
  var skyGeo = new THREE.SphereGeometry(3000, 100, 100);

  const skyTexture = new THREE.MeshPhongMaterial({
    map: texture,
  });

  skyTexture.side = THREE.BackSide;
  const sky = new THREE.Mesh(skyGeo, skyTexture);
  scene.add(sky);
};
