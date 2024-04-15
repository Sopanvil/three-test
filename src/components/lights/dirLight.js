import * as THREE from "three";

export const setupDirLight = async (scene) => {
  const shadowZone = 5;
  const light = new THREE.DirectionalLight(0xffffff);
  light.position.x = 10;
  light.position.y = 20;
  light.position.z = 10;

  light.castShadow = true;
  light.shadow.mapSize.width = 4096;
  light.shadow.mapSize.height = 4096;
  light.shadow.radius = 10;
  light.shadow.camera.top = shadowZone + 5.5 ;
  light.shadow.camera.bottom = -shadowZone;
  light.shadow.camera.left = -shadowZone;
  light.shadow.camera.right = shadowZone;

  light.intensity = 2;

  scene.add(light);
};
