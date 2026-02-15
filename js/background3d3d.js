const container = document.getElementById("canvas-container");

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
container.appendChild(renderer.domElement);

camera.position.z = 5;

const geometry = new THREE.SphereGeometry(0.2, 16, 16);
const material = new THREE.MeshBasicMaterial({ color: 0xff6b9d });

const hearts = [];

for (let i = 0; i < 20; i++) {
  const heart = new THREE.Mesh(geometry, material);
  heart.position.set(
    (Math.random() - 0.5) * 10,
    (Math.random() - 0.5) * 6,
    (Math.random() - 0.5) * 5
  );
  scene.add(heart);
  hearts.push(heart);
}

function animate() {
  requestAnimationFrame(animate);

  hearts.forEach(h => {
    h.position.y += 0.01;
    if (h.position.y > 3) h.position.y = -3;
  });

  renderer.render(scene, camera);
}

animate();

window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
