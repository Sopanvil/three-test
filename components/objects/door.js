import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import GUI from "three/examples/jsm/libs/lil-gui.module.min.js";

export const setupDoor = (scene) => {
  const loader = new GLTFLoader();
  const gui = new GUI();

  loader.load(
    "Door.glb",
    function (door) {
      door.scene.position.x = -3;
      door.scene.rotation.y = 1;
      // Если я правильно понял часть про изменение двери
      const doorSize = 1.5;
      door.scene.scale.setScalar(doorSize);
      gui
        .add({ scale: doorSize }, "scale", 1.5, 5)
        .step(0.1)
        .name("Размер двери")
        .onChange((value) => {
          door.scene.scale.setScalar(value);
        });
      scene.add(door.scene);
      door.scene.traverse((child) => {
        if (child.isMesh) {
          child.castShadow = true;
          child.receiveShadow = true;
        }
      });
    },
    undefined,
    function (error) {
      console.error(error);
    }
  );
};
