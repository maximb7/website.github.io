// Load Three.js and set up the scene
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(50, window.innerWidth / 400, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

// Get the header element and set renderer size accordingly
const header = document.querySelector('header');
const container = document.getElementById('three-container');
const containerHeight = 300; // Fixed height to prevent distortion
renderer.setSize(header.clientWidth, containerHeight);
container.appendChild(renderer.domElement);

// Add lighting
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5); // Soft ambient light
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(2, 2, 5);
scene.add(directionalLight);

// Load the GLTF model
const loader = new THREE.GLTFLoader();
loader.load('GoldCube.glb', function (gltf) {
    const model = gltf.scene;
    scene.add(model);
    
    // Set fixed scale to prevent squishing
    model.scale.set(1, 1, 1);
    model.position.set(0, -0.2, 0);

    // Set a fixed camera position
    camera.position.set(0, 0, 4);
    camera.lookAt(0, 0, 0);

    // Animation loop for rotation
    function animate() {
        requestAnimationFrame(animate);
        model.rotation.y += 0.01; // Rotate on the Y-axis
        renderer.render(scene, camera);
    }
    animate();
}, undefined, function (error) {
    console.error('Error loading GLTF model:', error);
});

// Ensure correct aspect ratio and prevent squishing
window.addEventListener('resize', () => {
    const aspect = header.clientWidth / containerHeight;
    camera.aspect = aspect;
    camera.updateProjectionMatrix();
    renderer.setSize(header.clientWidth, containerHeight);
});
