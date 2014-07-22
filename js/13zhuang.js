$(function() {
	var WIDTH = document.body.clientWidth, HEIGHT = document.body.scrollHeight - 19;
	var scene = new THREE.Scene();
	scene.fog = new THREE.Fog(0xffffff, 0, 100);

	var camera = new THREE.PerspectiveCamera(75, WIDTH / HEIGHT, 10, 1000);
	var renderer = new THREE.WebGLRenderer({
		antialias : true
	});
	renderer.setSize(WIDTH, HEIGHT);
	renderer.setClearColorHex(0xffffff, 1.0);

	$('body').append(renderer.domElement);

	var geometry = new THREE.CubeGeometry(10, 10, 10);

	var material = new THREE.MeshPhongMaterial({
		color : 0x00ff00
	});
	var cube = new THREE.Mesh(geometry, material);
	cube.position.set(0, 0, 0);
	scene.add(cube);

	camera.position.set(0, 0, 50);
	camera.lookAt({
		x : 0,
		y : 0,
		z : 0
	});

	var light = new THREE.DirectionalLight(0xFFffff, 1.0, 0);
	light.position.set(-20, 0, 50);
	scene.add(light);

	function render() {
		renderer.render(scene, camera);
		cube.rotation.x += 0.1;
		cube.rotation.y += 0.1;
		requestAnimationFrame(render);
	}
	render();
});
