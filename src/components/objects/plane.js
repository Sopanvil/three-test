import * as THREE from "three";

export const setupPlane = async (scene) => {
  const planeGeo = new THREE.PlaneGeometry(30, 30);
  const planeMat = new THREE.MeshStandardMaterial({ color: 0xffffff, side: THREE.DoubleSide });
  const plane = new THREE.Mesh(planeGeo, planeMat);
  plane.receiveShadow = true;
  plane.rotation.x = Math.PI / 2;
  scene.add(plane);

  const gridHelper = new THREE.GridHelper(30, 30);
  scene.add(gridHelper);
};
