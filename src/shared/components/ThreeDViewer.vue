<template>
  <div ref="container" class="w-full h-80 md:h-96 flex items-center justify-center"></div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, nextTick, watch } from 'vue'
import * as THREE from 'three'
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

const props = defineProps({
  fbxPath: { type: String, required: true },
  texturePath: { type: String, default: '' }
})

const container = ref(null)
let renderer, scene, camera, model, animationId, controls

function centerAndScaleModel(object) {
  const box = new THREE.Box3().setFromObject(object)
  const size = new THREE.Vector3()
  box.getSize(size)
  const maxAxis = Math.max(size.x, size.y, size.z)
  object.scale.multiplyScalar(2.5 / maxAxis)
  box.setFromObject(object)
  const center = new THREE.Vector3()
  box.getCenter(center)
  object.position.sub(center)
}

function resizeRenderer() {
  if (!container.value || !renderer || !camera) return
  const width = container.value.clientWidth
  const height = container.value.clientHeight
  renderer.setSize(width, height, false)
  camera.aspect = width / height
  camera.updateProjectionMatrix()
}

function loadModel() {
  if (!props.fbxPath) return
  // Limpiar escena
  if (model) {
    scene.remove(model)
    model = null
  }
  // Cargar textura si se provee
  let texture = null
  if (props.texturePath) {
    const textureLoader = new THREE.TextureLoader()
    texture = textureLoader.load(props.texturePath)
  }
  const loader = new FBXLoader()
  loader.load(props.fbxPath, (fbx) => {
    fbx.traverse(child => {
      if (child.isMesh && texture) {
        if (!child.material.map) {
          child.material.map = texture
          child.material.needsUpdate = true
        }
      }
    })
    model = fbx
    centerAndScaleModel(model)
    scene.add(model)
  })
}

onMounted(async () => {
  scene = new THREE.Scene()
  camera = new THREE.PerspectiveCamera(45, 1, 0.1, 1000)
  camera.position.set(0, 1, 4)

  renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
  await nextTick()
  resizeRenderer()
  container.value.appendChild(renderer.domElement)

  controls = new OrbitControls(camera, renderer.domElement)
  controls.enableDamping = true
  controls.dampingFactor = 0.1
  controls.enablePan = false
  controls.minDistance = 2
  controls.maxDistance = 10

  const ambient = new THREE.AmbientLight(0xffffff, 0.8)
  scene.add(ambient)
  const light = new THREE.DirectionalLight(0xffffff, 1)
  light.position.set(1, 2, 3)
  scene.add(light)

  loadModel()

  function animate() {
    animationId = requestAnimationFrame(animate)
    if (model) model.rotation.y += 0.003
    controls && controls.update()
    renderer.render(scene, camera)
  }
  animate()

  window.addEventListener('resize', resizeRenderer)
})

watch(() => [props.fbxPath, props.texturePath], () => {
  loadModel()
})

onBeforeUnmount(() => {
  cancelAnimationFrame(animationId)
  renderer.dispose()
  window.removeEventListener('resize', resizeRenderer)
  controls && controls.dispose()
})
</script>
