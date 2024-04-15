import * as THREE from "three";

export const setupAmbLight = async (scene) => {
  const ambLight = new THREE.AmbientLight(0xffffff, 0.3);
  scene.add(ambLight);
};
