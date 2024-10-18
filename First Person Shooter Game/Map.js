/// The Map class
/**
 * @author David Infante, Jose Ariza
 * 
 */

class Map {

  constructor () {

    this.map_size = 0;
    this.map = [];

    var loader = new THREE.TextureLoader();
    var texturaMetal = loader.load ("imgs/metal.jpg");
    var texturaBase = loader.load("imgs/piedras.jpg");

    var mat = Physijs.createMaterial(new THREE.MeshPhongMaterial ({map: texturaMetal}),0,0);
    var matBase = Physijs.createMaterial(new THREE.MeshPhongMaterial ({map: texturaBase}),0,0);
    
    var start1 = new Physijs.BoxMesh (new THREE.BoxGeometry (200, 0.0, 200, 1, 1, 1), mat, 0);
    start1.applyMatrix (new THREE.Matrix4().makeTranslation (0, 0, 0));
    start1.receiveShadow = true;
    start1.autoUpdateMatrix = false;
    this.map.push(start1);
    ++this.map_size;

    var enemies2 = new Physijs.BoxMesh (new THREE.BoxGeometry (210, 4, 400, 1, 1, 1), mat, 0);
    enemies2.applyMatrix (new THREE.Matrix4().makeTranslation (0, 0, -300));
    enemies2.receiveShadow = true;
    enemies2.autoUpdateMatrix = false;
    this.map.push(enemies2);
    ++this.map_size;

    var bullets3 = new Physijs.BoxMesh (new THREE.BoxGeometry (50, 0.0, 50, 1, 1, 1), mat, 0);
    bullets3.applyMatrix (new THREE.Matrix4().makeTranslation (0, -10, 0));
    bullets3.receiveShadow = false;
    bullets3.autoUpdateMatrix = false;
    this.map.push(bullets3);
    ++this.map_size;

    var fenceS4 = new Physijs.BoxMesh (new THREE.BoxGeometry (220, 8, 20, 1, 1, 1), mat, 0);
    fenceS4.applyMatrix (new THREE.Matrix4().makeTranslation (0, 2.5, 100));
    fenceS4.receiveShadow = true;
    fenceS4.autoUpdateMatrix = false;
    this.map.push(fenceS4);
    ++this.map_size;

    var fenceE5 = new Physijs.BoxMesh (new THREE.BoxGeometry (20, 8, 200, 1, 1, 1), mat, 0);
    fenceE5.applyMatrix (new THREE.Matrix4().makeTranslation (100, 2.5, 0));
    fenceE5.receiveShadow = true;
    fenceE5.autoUpdateMatrix = false;
    this.map.push(fenceE5);
    ++this.map_size;

    var fenceW6 = new Physijs.BoxMesh (new THREE.BoxGeometry (20, 8, 200, 1, 1, 1), mat, 0);
    fenceW6.applyMatrix (new THREE.Matrix4().makeTranslation (-100, 2.5, 0));
    fenceW6.receiveShadow = true;
    fenceW6.autoUpdateMatrix = false;
    this.map.push(fenceW6);
    ++this.map_size;

    var fenceN7 = new Physijs.BoxMesh (new THREE.BoxGeometry (220, 4, 8, 1, 1, 1), mat, 0);
    fenceN7.applyMatrix (new THREE.Matrix4().makeTranslation (0, 2.5, -96));
    fenceN7.receiveShadow = true;
    fenceN7.autoUpdateMatrix = false;
    this.map.push(fenceN7);
    ++this.map_size;

    var mountain = new Physijs.CylinderMesh (new THREE.CylinderGeometry (50, 500, 50, 10, 10), matBase, 0);
    mountain.applyMatrix (new THREE.Matrix4().makeTranslation (0, -40, -50));
    mountain.receiveShadow = true;
    mountain.autoUpdateMatrix = false;
    this.map.push(mountain);
    ++this.map_size;


    return this;
  }

  getMap(i) {
    return this.map[i];
  }

  getMapSize() {
    return this.map_size;
  }
}
