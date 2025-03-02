// Create the scene
var scene = new THREE.Scene();

// Set up camera
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// Create renderer
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Add lighting
var ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
scene.add(ambientLight);

var pointLight = new THREE.PointLight(0xffffff, 0.8);
pointLight.position.set(5, 5, 5);
scene.add(pointLight);

// Create table
var tableGeometry = new THREE.BoxGeometry(2, 0.1, 1);
var tableMaterial = new THREE.MeshStandardMaterial({ color: 0x8B4513 });
var table = new THREE.Mesh(tableGeometry, tableMaterial);
table.position.y = 0.5;
scene.add(table);

// Create chairs
function createChair(x, z) {
    var chairGeometry = new THREE.BoxGeometry(0.5, 0.5, 0.5);
    var chairMaterial = new THREE.MeshStandardMaterial({ color: 0x8B4513 });
    var chair = new THREE.Mesh(chairGeometry, chairMaterial);
    chair.position.set(x, 0.25, z);
    scene.add(chair);
}

createChair(1, 0.75);
createChair(-1, 0.75);

// Add items on the table
function addItem(x, y, z, color) {
    var itemGeometry = new THREE.CylinderGeometry(0.05, 0.05, 0.1, 32);
    var itemMaterial = new THREE.MeshStandardMaterial({ color: color });
    var item = new THREE.Mesh(itemGeometry, itemMaterial);
    item.position.set(x, y, z);
    scene.add(item);
}

addItem(0.3, 0.55, 0, 0xD2691E); // MiLo Tin
addItem(0.6, 0.55, 0, 0xFFFACD); // Milk Tin
addItem(-0.3, 0.55, 0, 0x00BFFF); // Cup 1
addItem(-0.6, 0.55, 0, 0x00BFFF); // Cup 2

// Add some decoration (flower vase)
function addDecoration(x, y, z, color) {
    var decorationGeometry = new THREE.SphereGeometry(0.05, 32, 32);
    var decorationMaterial = new THREE.MeshStandardMaterial({ color: color });
    var decoration = new THREE.Mesh(decorationGeometry, decorationMaterial);
    decoration.position.set(x, y, z);
    scene.add(decoration);
}

addDecoration(0, 0.6, 0, 0xFF)