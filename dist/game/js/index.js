var scene, camera, renderer;
 
  init();
  animate();
  function init() {
      scene = new THREE.Scene();
    var WIDTH = window.innerWidth,
        HEIGHT = window.innerHeight;
        renderer = new THREE.WebGLRenderer({antialias:true});
    renderer.setSize(WIDTH, HEIGHT);
    document.body.appendChild(renderer.domElement);
     window.addEventListener('resize', function() {
      var WIDTH = window.innerWidth,
          HEIGHT = window.innerHeight;
      renderer.setSize(WIDTH, HEIGHT);
      camera.aspect = WIDTH / HEIGHT;
      camera.updateProjectionMatrix();
    });
    renderer.setClearColor(new THREE.Color(0x333F47, 1.0));
 
    // Create a light, set its position, and add it to the scene.
    var light = new THREE.PointLight(0xffffff);
    light.position.set(-100,200,100);
    scene.add(light);
 var loader = new THREE.JSONLoader();
    loader.load( "js/tt.js", function(geometry){
      var material = new THREE.MeshLambertMaterial({color: 0x55B663});
      mesh = new THREE.Mesh(geometry, material);
      scene.add(mesh);
    });
     controls = new THREE.OrbitControls(camera, renderer.domElement);
  }
function animate() {
 
    // Read more about requestAnimationFrame at http://www.paulirish.com/2011/requestanimationframe-for-smart-animating/
    requestAnimationFrame(animate);
 
    // Render the scene.
    renderer.render(scene, camera);
    controls.update();
 
  }