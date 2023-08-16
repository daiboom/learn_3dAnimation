import * as THREE from 'three'

// ----- 주제: 스크롤에 따라 움직이는 3D 페이지

// Renderer
const canvas = document.querySelector('#three-canvas')
const renderer = new THREE.WebGLRenderer({
  canvas,
  antialias: true,
})
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.setPixelRatio(window.devicePixelRatio > 1 ? 2 : 1)

// Scene
const scene = new THREE.Scene()

// Camera
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000,
)
camera.position.y = 1.5
camera.position.z = 4
scene.add(camera)

// Light
const ambientLight = new THREE.AmbientLight('white', 0.5)
scene.add(ambientLight)

const directionalLight = new THREE.DirectionalLight('white', 1)
directionalLight.position.x = 1
directionalLight.position.z = 2
scene.add(directionalLight)

// Mesh
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshStandardMaterial({
  color: 'seagreen',
})
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

// 그리기
const clock = new THREE.Clock()

function draw() {
  const delta = clock.getDelta()

  renderer.render(scene, camera)
  renderer.setAnimationLoop(draw)
}

function setSize() {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.render(scene, camera)
}

// 이벤트
window.addEventListener('resize', setSize)

draw()