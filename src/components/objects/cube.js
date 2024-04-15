import * as THREE from "three";

export const setupCube = async (scene) => {
  const cubeGeometry = new THREE.BoxGeometry(1);
  const cubeMaterial = new THREE.MeshStandardMaterial({ color: 0x5b71de });
  const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
  cube.receiveShadow = true;
  cube.castShadow = true;
  cube.position.y = 3;
  await scene.add(cube);
}
