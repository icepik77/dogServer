import * as THREE from "https://cdn.skypack.dev/three@0.136.0";
import { OrbitControls } from "https://cdn.skypack.dev/three@0.136.0/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "https://cdn.skypack.dev/three@0.136.0/examples/jsm/loaders/GLTFLoader";
import { FontLoader } from "https://cdn.skypack.dev/three@0.136.0/examples/jsm/loaders/FontLoader";
import { TextGeometry } from "https://cdn.skypack.dev/three@0.136.0/examples/jsm/geometries/TextGeometry";

//создание сцены 

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000 );
    camera.position.z =38;
    camera.position.y=3;
    camera.position.x=6;
    

    const renderer = new THREE.WebGLRenderer({alpha: true, antialias:true});
    renderer.setClearColor(0x000000,0);
    renderer.setSize(1887, 820);


    renderer.domElement.setAttribute("id", "dog-model");
    const modelScene = document.querySelector(".header__model");
    modelScene.append(renderer.domElement);

    //const aLight = new THREE.AmbientLight(0x696969, 1);
    //scene.add(aLight);

    const pLight1 = new THREE.PointLight(0xE0FFFF, 1);
    pLight1.position.set(-25,8, 10);
    scene.add(pLight1); 

    //const pLight2 = new THREE.PointLight(0x696969, 0.3);
    //pLight2.position.set(70,10, 30);
    //scene.add(pLight2); 

    const SLight = new THREE.SpotLight();
    SLight.position.set(0,0,100);
    scene.add(SLight);

    const Dlight = new THREE.DirectionalLight(0xFFFFFF, 1);
    Dlight.position.set(0, 10, 100);
    scene.add(Dlight);

    //const helper = new THREE.PointLightHelper(pLight1);
    //scene.add(helper);

    var loader = new GLTFLoader();
    var obj = null;

    loader.load('dog/dog.gltf', function(gltf){
        obj =gltf;
        obj.scene.scale.set(1.3, 1.3, 1.3);
        scene.add(obj.scene);  
    });
       

    var flag=0;
    var dafaultRotation = camera.rotation.y;
 //Точки 

 //Начальная
 //obj.scene.rotation.y=-1.2;
 //obj.scene.position.x=14;
 //camera.position.z =38;
 //camera.position.y=3;
 //camera.position.x=6;
 //camera.rotation.y=dafaultRotation;

 //Уроки дрессировки
//obj.scene.rotation.y=0;
//obj.scene.position.x=0;
//camera.position.x=0;
//camera.position.y=8;
//camera.position.z=33;
//camera.rotation.y=dafaultRotation;

//Обиденс
//obj.scene.rotation.y=-2.1;
//camera.position.y=10;
//camera.position.z =10;
//camera.rotation.y=dafaultRotation;

//Наши заводчики
//obj.scene.position.x=3;
//obj.scene.rotation.y=-1.4;
//camera.position.z =38;
 //camera.position.y=3;
 //camera.position.x=6;
 //camera.rotation.y=dafaultRotation;

//Охрана
//camera.position.y=10;
//camera.position.z=20;
//camera.position.x=0;
    
// Функции 

function animate(){
    var animation =requestAnimationFrame(animate);
    if (obj){
        obj.scene.rotation.y=-1.2;
        obj.scene.position.x=14;
        renderer.render(scene, camera);
        cancelAnimationFrame(animation);
    }
    
}

function trainingEvent(){
    let animation = requestAnimationFrame(trainingEvent);
    //Прописываем изначальные значения 
    obj.scene.rotation.y=-1.2;
    obj.scene.position.x=14;
    camera.position.z =38;
    camera.position.y=3;
    camera.position.x=6;
    camera.rotation.y=dafaultRotation;
    renderer.render(scene, camera);

    obj.scene.position.x=3;
    if (obj){
        let interval = setInterval(function(){
            if (obj.scene.rotation.y<0.3 && obj.scene.position.x>0 && 
                camera.position.x>0 && camera.position.y<8){
                    if (obj.scene.rotation.y<0.3){
                        obj.scene.rotation.y+=0.1;
                    }
                    if (obj.scene.position.x>0){
                        obj.scene.position.x-=0.1;
                    }
                    if (camera.position.x>0){
                        camera.position.x-=0.1;
                    }
                    if (camera.position.y<8){
                        camera.position.y+=0.1;
                    }
                    renderer.render(scene,camera);
                }
            else{
                clearInterval(interval);
            }
            
        },20)
    }
    cancelAnimationFrame(animation);
}

function breedersEvent(){
    let animation = requestAnimationFrame(breedersEvent);
    if (obj){
        //Прописываем изначальные значения 
        obj.scene.rotation.y=-1.2;
        obj.scene.position.x=14;
        camera.position.z =38;
        camera.position.y=3;
        camera.position.x=6;
        camera.rotation.y=dafaultRotation;
        renderer.render(scene,camera);

        let interval = setInterval(function(){
            if (obj.scene.position.x>3 || obj.scene.rotation.y>-1.4){
                    if (obj.scene.rotation.y>-1.4){
                        obj.scene.rotation.y-=0.1;
                    }
                    if (obj.scene.position.x>3){
                        obj.scene.position.x-=0.6;
                    }
                    renderer.render(scene,camera);
                }
            else{
                clearInterval(interval);
            }
            
        },20)        
        cancelAnimationFrame(animation);
    }
    
}

function offendiensEvent(){
    let animation = requestAnimationFrame(offendiensEvent);
    if (obj){
        //Прописываем изначальные значения 
        obj.scene.rotation.y=-1.2;
        obj.scene.position.x=14;
        camera.position.z =38;
        camera.position.y=3;
        camera.position.x=6;
        camera.rotation.y=dafaultRotation;
        renderer.render(scene, camera);

        let interval = setInterval(function(){
            if (obj.scene.rotation.y>-2.1 || camera.position.y<10
                || camera.position.z >10){
                    if (obj.scene.rotation.y>-2.1){
                        obj.scene.rotation.y-=0.1;
                    }
                    if (camera.position.y<10){
                        camera.position.y+=0.5;
                    }
                    if (camera.position.z >10){
                        camera.position.z-=0.8;
                    }
                    renderer.render(scene,camera);
                }
            else{
                clearInterval(interval);
            }
            
        },20)        
        cancelAnimationFrame(animation);
    }
}

function guardEvent(){
    let animation = requestAnimationFrame(guardEvent);
    //Прописываем изначальные значения 
    obj.scene.rotation.y=-1.2;
    obj.scene.position.x=14;
    camera.position.z =38;
    camera.position.y=3;
    camera.position.x=6;
    camera.rotation.y=dafaultRotation;
    renderer.render(scene, camera);

    if (obj){
        let interval = setInterval(function(){
            if (camera.position.y<10 || camera.position.z>20 || 
                camera.position.x>0){
                    if (camera.position.y<10){
                        camera.position.y+=0.6;
                    }
                    if (camera.position.z>20){
                        camera.position.z-=0.7;
                    }
                    if (camera.position.x>0){
                        camera.position.x-=0.3;
                    }
                    renderer.render(scene,camera);
                }
            else{
                clearInterval(interval);
                
            }
            
        },20)
        
        renderer.render(scene,camera);
    }

    //obj.scene.rotation.y=1;
    //camera.rotation.y=-0.8;
    //obj.scene.position.x=2;
    //camera.position.y=13;
    //camera.position.z=15;
    cancelAnimationFrame(animation);
}

function final(){
    let animation = requestAnimationFrame(final);
    camera.position.y=10;
    camera.position.z=20;
    camera.position.x=0;
    renderer.render(scene, camera);
    cancelAnimationFrame(animation);
}


animate();




// поведение кнопок 

let trainingButton = document.querySelector(".header__training a");
let offendiensButton = document.querySelector(".header__offendiens a");
let breedersButton = document.querySelector(".header__breeders a");
let guardButton = document.querySelector(".header__guard a");
let animation = 0;


trainingButton.onmouseover = function(event){

    if (animation == 0){

        trainingEvent();
        animation = 1;
        setTimeout(function(){animation=0}, 1000);
    } 
      
}
offendiensButton.onmouseover = function(event){

    if (animation == 0){

        offendiensEvent();
        animation = 1;
        setTimeout(function(){animation=0}, 1000);
    }
    
   
   
}
breedersButton.onmouseover = function(event){

    if (animation == 0){

        breedersEvent();
        animation = 1;
        setTimeout(function(){animation=0}, 1000);
    }
}
guardButton.onmouseover = function(event){

    if (animation == 0){

        guardEvent();
        animation = 1;
        setTimeout(function(){animation=0}, 1000);
    }
}

let burger = document.querySelector(".header__menu-burger");

burger.onclick = function(event){
    let hideMenu = document.querySelector(".header__hide-menu");
    hideMenu.classList.toggle("active");
}







