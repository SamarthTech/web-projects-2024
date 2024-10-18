/// The Model Facade class. The root node of the graph.
/**
 * @author David Infante, Jose Ariza
 */
 
class TheScene extends Physijs.Scene {
  
  constructor (renderer, aCamera) {

    super();
    this.setGravity(new THREE.Vector3 (0, -50, 0));

    this.camera = aCamera;
    this.createCrosshair(renderer);

    this.avatar = null;
    this.map = null;
    this.enemies = null;
    this.skybox = null;
    this.Bullets = null;
    this.index = 0;
    this.maxBullets = 20;
    this.actualAmmo = 40; //Balas totales antes de acabar el juego
    this.score = 0;
    this.lastScore = 0;
    this.level = 1;

    this.createHUD();

    this.createAvatar();
    this.avatar.loadWeapons();
    this.place = this.createPlace();
    this.createBullets();
    this.createEnemies(this.level);


    this.ambientLight = null;
    this.spotLight = null;
    this.createLights();

    this.add(this.place);
  }
  
  createHUD() {
    var score = document.createElement('div');
    score.id = "score";
    score.style.position = 'absolute';
    score.style.width = 1;
    score.style.height = 1;
    score.innerHTML = "Score: " + this.score;
    score.style.top = 50 + 'px';
    score.style.left = 50 + 'px';
    score.style.fontSize = 50 + 'px';
    score.style.color = "white";
    document.body.appendChild(score);

    var ammo = document.createElement('div');
    ammo.id = "ammo";
    ammo.style.position = 'absolute';
    ammo.style.width = 1;
    ammo.style.height = 1;
    ammo.innerHTML = "Ammunation: " + this.actualAmmo;
    ammo.style.top = 100 + 'px';
    ammo.style.left = 50 + 'px';
    ammo.style.fontSize = 50 + 'px';
    ammo.style.color = "white";
    document.body.appendChild(ammo);

    var level = document.createElement('div');
    level.id = "level";
    level.style.position = 'absolute';
    level.style.width = 1;
    level.style.height = 1;
    level.innerHTML = "Level: " + this.level;
    level.style.top = 150 + 'px';
    level.style.left = 50 + 'px';
    level.style.fontSize = 50 + 'px';
    level.style.color = "white";
    document.body.appendChild(level);
  }

  updateAmmo() {
    var text = document.getElementById("ammo");
    text.innerHTML = "Ammunation: " + this.actualAmmo;
  }

  updateScore(newScore){
    var text = document.getElementById("score");
    this.score += newScore;
    text.innerHTML = "Score: " + this.score;
  }

  updateLevel() {
    var level = document.getElementById("level");
    level.innerHTML = "Level: " + this.level;
  }

  /// It creates the camera and adds it to the graph
  /**
   * @param renderer - The renderer associated with the camera
   */
  createCrosshair(renderer) {
    // Create the Crosshair
    var crosshair = new Crosshair();
    this.camera.add( crosshair );

    // Place it in the center
    var crosshairPercentX = 50;
    var crosshairPercentY = 50;
    var crosshairPositionX = (crosshairPercentX / 100) * 2 - 1;
    var crosshairPositionY = (crosshairPercentY / 100) * 2 - 1;
    crosshair.position.set((crosshairPercentX / 100) * 2 - 1, (crosshairPercentY / 100) * 2 - 1, -0.3);
  }

  dispara() {
    if(this.index >= this.maxBullets) {
      this.index = 0;
      this.bullets.reload();
    }
    if (!disparando) {
      this.bullets.dispara(this.index, this.avatar.getPosition(), this.camera.getWorldDirection(), this.avatar.getActiveWeapon());
      this.index++;
      this.actualAmmo--;
      this.updateAmmo();
    }
  }
  
  /// It creates lights and adds them to the graph
  createLights() {
    // add subtle ambient lighting
    this.ambientLight = new THREE.AmbientLight(0xccddee, 0.35);
    this.add (this.ambientLight);
    
    // add spotlight for the shadows
    this.spotLight = new THREE.SpotLight( 0xffffff );
    this.spotLight.position.set( 0, 500, 1000 );
    this.spotLight.intensity = 1;
    this.spotLight.castShadow = true;
    // the shadow resolution
    this.spotLight.shadow.mapSize.width=2048;
    this.spotLight.shadow.mapSize.height=2048;
    this.add (this.spotLight);
  }
  
  /// It creates the place
  /**
   * @return place
   */
  createPlace() {
    var place = new THREE.Object3D();    

    this.skybox = new Skybox();
    place.add(this.skybox);

    //Creates the map
    this.map = new Map();
    for (var i = 0; i < this.map.getMapSize(); ++i) {
      this.add(this.map.getMap(i));
    }

    return place;
  }

  /// It creates the avatar
  /**
   *
   */
  createAvatar() {
    this.avatar = new Avatar(this.camera, this);
  }

  /// It creates the bullets
  /**
   *
   */
  createBullets() {
    var loader = new THREE.TextureLoader();
    var textura = loader.load ("imgs/bullettext.jpg");
    this.bullets = new Bullets(this.maxBullets, this, (new THREE.MeshPhongMaterial ({map: textura})));
  }

  /// It creates the enemies
  /**
   *
   */
  createEnemies() {
    this.enemies = new Enemies(this, this.level);
  }

  endGame() {
    enableControls = false;
    controls.enabled = false;
    
    moveForward = false;
    moveBackward = false;
    moveLeft = false;
    moveRight = false;
    jumping = false;

    blocker.style.display = 'block';
    instructions.style.display = '';
    instructions.style.fontSize = "50px";

    instructions.innerHTML = "TotalScore : " + this.score + ", press the P key to play another game";
  }
  
  /// 
  /**
   * @controls - The GUI information
   */
  animate () {
    this.simulate();

    if (moveForward) this.avatar.moveForward();
    if (moveBackward) this.avatar.moveBackward();
    if (moveLeft) this.avatar.moveLeft();
    if (moveRight) this.avatar.moveRight();

    if (jumping) {
      this.avatar.jump();
    }

    if (disparando) {
      this.avatar.animateWeapon();
    }

    this.avatar.updateControls();

    this.enemies.animate();

    if (this.actualAmmo == 0) {
      this.endGame();
    }
  }

  changeWeapon() {
    this.avatar.changeWeapon();
  }

  /// It returns the camera
  /**
   * @return The camera
   */
  getCamera () {
    return this.camera;
  }
  
  /// It returns the camera controls
  /**
   * @return The camera controls
   */
  getCameraControls () {
    return this.controls;
  }
  
  /// It updates the aspect ratio of the camera
  /**
   * @param anAspectRatio - The new aspect ratio for the camera
   */
  setCameraAspect (anAspectRatio) {
    this.camera.aspect = anAspectRatio;
    this.camera.updateProjectionMatrix();
  }
  
  newLevel() {
    this.avatar.setInitialPosition();

    if(this.score - this.lastScore != 40)
      this.score = this.lastScore + 40;

    this.updateLevel();

    for (var i = 0; i < this.enemies.getEnemiesSize(); ++i) {
      this.remove(this.enemies.getEnemies(i));
    }
    this.createEnemies();
    this.lastScore = this.score;
  }

  newGame() {
    blocker.style.display = 'none';
    enableControls = true;
    controls.enabled = true;
    this.avatar.setInitialPosition();
    this.actualAmmo = 40;
    this.updateAmmo();
    this.score = 0;
    this.updateScore(0);
    this.level = 1;
    this.updateLevel();

    for (var i = 0; i < this.enemies.getEnemiesSize(); ++i) {
      this.remove(this.enemies.getEnemies(i));
    }
    this.createEnemies();
  }

}

