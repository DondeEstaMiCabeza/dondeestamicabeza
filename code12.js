gdjs._56Code = {};
gdjs._56Code.localVariables = [];
gdjs._56Code.forEachIndex2 = 0;

gdjs._56Code.forEachObjects2 = [];

gdjs._56Code.forEachTemporary2 = null;

gdjs._56Code.forEachTotalCount2 = 0;

gdjs._56Code.GDOpcionesObjects1= [];
gdjs._56Code.GDOpcionesObjects2= [];
gdjs._56Code.GDOpcionesObjects3= [];
gdjs._56Code.GDOpcionesObjects4= [];
gdjs._56Code.GDOpcionesObjects5= [];
gdjs._56Code.GDOpcionesObjects6= [];
gdjs._56Code.GDIMG_9595PreguntaObjects1= [];
gdjs._56Code.GDIMG_9595PreguntaObjects2= [];
gdjs._56Code.GDIMG_9595PreguntaObjects3= [];
gdjs._56Code.GDIMG_9595PreguntaObjects4= [];
gdjs._56Code.GDIMG_9595PreguntaObjects5= [];
gdjs._56Code.GDIMG_9595PreguntaObjects6= [];
gdjs._56Code.GDMousePointObjects1= [];
gdjs._56Code.GDMousePointObjects2= [];
gdjs._56Code.GDMousePointObjects3= [];
gdjs._56Code.GDMousePointObjects4= [];
gdjs._56Code.GDMousePointObjects5= [];
gdjs._56Code.GDMousePointObjects6= [];
gdjs._56Code.GDSiguienteObjects1= [];
gdjs._56Code.GDSiguienteObjects2= [];
gdjs._56Code.GDSiguienteObjects3= [];
gdjs._56Code.GDSiguienteObjects4= [];
gdjs._56Code.GDSiguienteObjects5= [];
gdjs._56Code.GDSiguienteObjects6= [];
gdjs._56Code.GDBarraAmarilloVerdiOscuroObjects1= [];
gdjs._56Code.GDBarraAmarilloVerdiOscuroObjects2= [];
gdjs._56Code.GDBarraAmarilloVerdiOscuroObjects3= [];
gdjs._56Code.GDBarraAmarilloVerdiOscuroObjects4= [];
gdjs._56Code.GDBarraAmarilloVerdiOscuroObjects5= [];
gdjs._56Code.GDBarraAmarilloVerdiOscuroObjects6= [];
gdjs._56Code.GDFondoObjects1= [];
gdjs._56Code.GDFondoObjects2= [];
gdjs._56Code.GDFondoObjects3= [];
gdjs._56Code.GDFondoObjects4= [];
gdjs._56Code.GDFondoObjects5= [];
gdjs._56Code.GDFondoObjects6= [];


gdjs._56Code.asyncCallback25863420 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs._56Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("IMG_Pregunta"), gdjs._56Code.GDIMG_9595PreguntaObjects2);

{for(var i = 0, len = gdjs._56Code.GDIMG_9595PreguntaObjects2.length ;i < len;++i) {
    gdjs._56Code.GDIMG_9595PreguntaObjects2[i].getBehavior("Tween").addObjectScaleTween("Thumb", 1, 1, "swingFromTo", 400, false, true);
}
}gdjs._56Code.localVariables.length = 0;
}
gdjs._56Code.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs._56Code.localVariables);
for (const obj of gdjs._56Code.GDIMG_9595PreguntaObjects1) asyncObjectsList.addObject("IMG_Pregunta", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.2), (runtimeScene) => (gdjs._56Code.asyncCallback25863420(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs._56Code.mapOfGDgdjs_9546_959556Code_9546GDMousePointObjects4Objects = Hashtable.newFrom({"MousePoint": gdjs._56Code.GDMousePointObjects4});
gdjs._56Code.mapOfGDgdjs_9546_959556Code_9546GDOpcionesObjects4Objects = Hashtable.newFrom({"Opciones": gdjs._56Code.GDOpcionesObjects4});
gdjs._56Code.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(gdjs._56Code.GDOpcionesObjects4, gdjs._56Code.GDOpcionesObjects5);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._56Code.GDOpcionesObjects5.length;i<l;++i) {
    if ( gdjs._56Code.GDOpcionesObjects5[i].getVariableNumber(gdjs._56Code.GDOpcionesObjects5[i].getVariables().getFromIndex(0)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs._56Code.GDOpcionesObjects5[k] = gdjs._56Code.GDOpcionesObjects5[i];
        ++k;
    }
}
gdjs._56Code.GDOpcionesObjects5.length = k;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setString("Estrella");
}}

}


{

gdjs.copyArray(gdjs._56Code.GDOpcionesObjects4, gdjs._56Code.GDOpcionesObjects5);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._56Code.GDOpcionesObjects5.length;i<l;++i) {
    if ( gdjs._56Code.GDOpcionesObjects5[i].getVariableNumber(gdjs._56Code.GDOpcionesObjects5[i].getVariables().getFromIndex(0)) == 2 ) {
        isConditionTrue_0 = true;
        gdjs._56Code.GDOpcionesObjects5[k] = gdjs._56Code.GDOpcionesObjects5[i];
        ++k;
    }
}
gdjs._56Code.GDOpcionesObjects5.length = k;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setString("Vejete");
}}

}


{

gdjs.copyArray(gdjs._56Code.GDOpcionesObjects4, gdjs._56Code.GDOpcionesObjects5);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._56Code.GDOpcionesObjects5.length;i<l;++i) {
    if ( gdjs._56Code.GDOpcionesObjects5[i].getVariableNumber(gdjs._56Code.GDOpcionesObjects5[i].getVariables().getFromIndex(0)) == 3 ) {
        isConditionTrue_0 = true;
        gdjs._56Code.GDOpcionesObjects5[k] = gdjs._56Code.GDOpcionesObjects5[i];
        ++k;
    }
}
gdjs._56Code.GDOpcionesObjects5.length = k;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setString("Fantasma");
}}

}


{

gdjs.copyArray(gdjs._56Code.GDOpcionesObjects4, gdjs._56Code.GDOpcionesObjects5);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._56Code.GDOpcionesObjects5.length;i<l;++i) {
    if ( gdjs._56Code.GDOpcionesObjects5[i].getVariableNumber(gdjs._56Code.GDOpcionesObjects5[i].getVariables().getFromIndex(0)) == 4 ) {
        isConditionTrue_0 = true;
        gdjs._56Code.GDOpcionesObjects5[k] = gdjs._56Code.GDOpcionesObjects5[i];
        ++k;
    }
}
gdjs._56Code.GDOpcionesObjects5.length = k;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setString("Familia");
}}

}


{

gdjs.copyArray(gdjs._56Code.GDOpcionesObjects4, gdjs._56Code.GDOpcionesObjects5);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._56Code.GDOpcionesObjects5.length;i<l;++i) {
    if ( gdjs._56Code.GDOpcionesObjects5[i].getVariableNumber(gdjs._56Code.GDOpcionesObjects5[i].getVariables().getFromIndex(0)) == 5 ) {
        isConditionTrue_0 = true;
        gdjs._56Code.GDOpcionesObjects5[k] = gdjs._56Code.GDOpcionesObjects5[i];
        ++k;
    }
}
gdjs._56Code.GDOpcionesObjects5.length = k;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setString("De fiesta");
}}

}


{

gdjs.copyArray(gdjs._56Code.GDOpcionesObjects4, gdjs._56Code.GDOpcionesObjects5);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._56Code.GDOpcionesObjects5.length;i<l;++i) {
    if ( gdjs._56Code.GDOpcionesObjects5[i].getVariableNumber(gdjs._56Code.GDOpcionesObjects5[i].getVariables().getFromIndex(0)) == 6 ) {
        isConditionTrue_0 = true;
        gdjs._56Code.GDOpcionesObjects5[k] = gdjs._56Code.GDOpcionesObjects5[i];
        ++k;
    }
}
gdjs._56Code.GDOpcionesObjects5.length = k;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setString("Viajando");
}}

}


{

gdjs.copyArray(gdjs._56Code.GDOpcionesObjects4, gdjs._56Code.GDOpcionesObjects5);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._56Code.GDOpcionesObjects5.length;i<l;++i) {
    if ( gdjs._56Code.GDOpcionesObjects5[i].getVariableNumber(gdjs._56Code.GDOpcionesObjects5[i].getVariables().getFromIndex(0)) == 7 ) {
        isConditionTrue_0 = true;
        gdjs._56Code.GDOpcionesObjects5[k] = gdjs._56Code.GDOpcionesObjects5[i];
        ++k;
    }
}
gdjs._56Code.GDOpcionesObjects5.length = k;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setString("Estudiando");
}}

}


{

gdjs.copyArray(gdjs._56Code.GDOpcionesObjects4, gdjs._56Code.GDOpcionesObjects5);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._56Code.GDOpcionesObjects5.length;i<l;++i) {
    if ( gdjs._56Code.GDOpcionesObjects5[i].getVariableNumber(gdjs._56Code.GDOpcionesObjects5[i].getVariables().getFromIndex(0)) == 8 ) {
        isConditionTrue_0 = true;
        gdjs._56Code.GDOpcionesObjects5[k] = gdjs._56Code.GDOpcionesObjects5[i];
        ++k;
    }
}
gdjs._56Code.GDOpcionesObjects5.length = k;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setString("Profesional");
}}

}


{

/* Reuse gdjs._56Code.GDOpcionesObjects4 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._56Code.GDOpcionesObjects4.length;i<l;++i) {
    if ( gdjs._56Code.GDOpcionesObjects4[i].getVariableNumber(gdjs._56Code.GDOpcionesObjects4[i].getVariables().getFromIndex(0)) == 9 ) {
        isConditionTrue_0 = true;
        gdjs._56Code.GDOpcionesObjects4[k] = gdjs._56Code.GDOpcionesObjects4[i];
        ++k;
    }
}
gdjs._56Code.GDOpcionesObjects4.length = k;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setString("Con Panza");
}}

}


};gdjs._56Code.mapOfGDgdjs_9546_959556Code_9546GDMousePointObjects3Objects = Hashtable.newFrom({"MousePoint": gdjs._56Code.GDMousePointObjects3});
gdjs._56Code.mapOfGDgdjs_9546_959556Code_9546GDOpcionesObjects3Objects = Hashtable.newFrom({"Opciones": gdjs._56Code.GDOpcionesObjects3});
gdjs._56Code.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("MousePoint"), gdjs._56Code.GDMousePointObjects4);
gdjs.copyArray(gdjs._56Code.GDOpcionesObjects2, gdjs._56Code.GDOpcionesObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._56Code.mapOfGDgdjs_9546_959556Code_9546GDMousePointObjects4Objects, gdjs._56Code.mapOfGDgdjs_9546_959556Code_9546GDOpcionesObjects4Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(25865228);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs._56Code.GDOpcionesObjects4 */
{for(var i = 0, len = gdjs._56Code.GDOpcionesObjects4.length ;i < len;++i) {
    gdjs._56Code.GDOpcionesObjects4[i].setAnimationFrame(1);
}
}{for(var i = 0, len = gdjs._56Code.GDOpcionesObjects4.length ;i < len;++i) {
    gdjs._56Code.GDOpcionesObjects4[i].getBehavior("Tween").addObjectScaleTween("XD", 1.1, 1.1, "linear", 100, false, true);
}
}
{ //Subevents
gdjs._56Code.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("MousePoint"), gdjs._56Code.GDMousePointObjects3);
gdjs.copyArray(gdjs._56Code.GDOpcionesObjects2, gdjs._56Code.GDOpcionesObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._56Code.mapOfGDgdjs_9546_959556Code_9546GDMousePointObjects3Objects, gdjs._56Code.mapOfGDgdjs_9546_959556Code_9546GDOpcionesObjects3Objects, true, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(25872260);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs._56Code.GDOpcionesObjects3 */
{for(var i = 0, len = gdjs._56Code.GDOpcionesObjects3.length ;i < len;++i) {
    gdjs._56Code.GDOpcionesObjects3[i].setAnimationFrame(0);
}
}{for(var i = 0, len = gdjs._56Code.GDOpcionesObjects3.length ;i < len;++i) {
    gdjs._56Code.GDOpcionesObjects3[i].getBehavior("Tween").addObjectScaleTween("XD2", 1, 1, "linear", 100, false, true);
}
}}

}


};gdjs._56Code.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {

{ //Subevents
gdjs._56Code.eventsList2(runtimeScene);} //End of subevents
}

}


};gdjs._56Code.mapOfGDgdjs_9546_959556Code_9546GDMousePointObjects2Objects = Hashtable.newFrom({"MousePoint": gdjs._56Code.GDMousePointObjects2});
gdjs._56Code.mapOfGDgdjs_9546_959556Code_9546GDFondoObjects2Objects = Hashtable.newFrom({"Fondo": gdjs._56Code.GDFondoObjects2});
gdjs._56Code.mapOfGDgdjs_9546_959556Code_9546GDMousePointObjects1Objects = Hashtable.newFrom({"MousePoint": gdjs._56Code.GDMousePointObjects1});
gdjs._56Code.mapOfGDgdjs_9546_959556Code_9546GDOpcionesObjects1Objects = Hashtable.newFrom({"Opciones": gdjs._56Code.GDOpcionesObjects1});
gdjs._56Code.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Fondo"), gdjs._56Code.GDFondoObjects2);
gdjs.copyArray(runtimeScene.getObjects("MousePoint"), gdjs._56Code.GDMousePointObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._56Code.mapOfGDgdjs_9546_959556Code_9546GDMousePointObjects2Objects, gdjs._56Code.mapOfGDgdjs_9546_959556Code_9546GDFondoObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(25874100);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Siguiente"), gdjs._56Code.GDSiguienteObjects2);
{for(var i = 0, len = gdjs._56Code.GDSiguienteObjects2.length ;i < len;++i) {
    gdjs._56Code.GDSiguienteObjects2[i].setAnimation(0);
}
}{for(var i = 0, len = gdjs._56Code.GDSiguienteObjects2.length ;i < len;++i) {
    gdjs._56Code.GDSiguienteObjects2[i].setOpacity(150);
}
}{for(var i = 0, len = gdjs._56Code.GDSiguienteObjects2.length ;i < len;++i) {
    gdjs._56Code.GDSiguienteObjects2[i].getBehavior("Tween").addObjectScaleTween("as", 0.75, 0.75, "linear", 100, false, true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("MousePoint"), gdjs._56Code.GDMousePointObjects1);
gdjs.copyArray(runtimeScene.getObjects("Opciones"), gdjs._56Code.GDOpcionesObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._56Code.mapOfGDgdjs_9546_959556Code_9546GDMousePointObjects1Objects, gdjs._56Code.mapOfGDgdjs_9546_959556Code_9546GDOpcionesObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._56Code.GDOpcionesObjects1.length;i<l;++i) {
    if ( gdjs._56Code.GDOpcionesObjects1[i].getAnimationFrame() == 1 ) {
        isConditionTrue_0 = true;
        gdjs._56Code.GDOpcionesObjects1[k] = gdjs._56Code.GDOpcionesObjects1[i];
        ++k;
    }
}
gdjs._56Code.GDOpcionesObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(25875804);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Siguiente"), gdjs._56Code.GDSiguienteObjects1);
{for(var i = 0, len = gdjs._56Code.GDSiguienteObjects1.length ;i < len;++i) {
    gdjs._56Code.GDSiguienteObjects1[i].setAnimation(1);
}
}{for(var i = 0, len = gdjs._56Code.GDSiguienteObjects1.length ;i < len;++i) {
    gdjs._56Code.GDSiguienteObjects1[i].setOpacity(255);
}
}{for(var i = 0, len = gdjs._56Code.GDSiguienteObjects1.length ;i < len;++i) {
    gdjs._56Code.GDSiguienteObjects1[i].getBehavior("Tween").addObjectScaleTween("as", 0.8, 0.8, "bouncePast", 100, false, true);
}
}}

}


};gdjs._56Code.mapOfGDgdjs_9546_959556Code_9546GDSiguienteObjects1Objects = Hashtable.newFrom({"Siguiente": gdjs._56Code.GDSiguienteObjects1});
gdjs._56Code.mapOfGDgdjs_9546_959556Code_9546GDOpcionesObjects1Objects = Hashtable.newFrom({"Opciones": gdjs._56Code.GDOpcionesObjects1});
gdjs._56Code.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BarraAmarilloVerdiOscuro"), gdjs._56Code.GDBarraAmarilloVerdiOscuroObjects1);
gdjs.copyArray(runtimeScene.getObjects("IMG_Pregunta"), gdjs._56Code.GDIMG_9595PreguntaObjects1);
gdjs.copyArray(runtimeScene.getObjects("MousePoint"), gdjs._56Code.GDMousePointObjects1);
gdjs.copyArray(runtimeScene.getObjects("Opciones"), gdjs._56Code.GDOpcionesObjects1);
gdjs.copyArray(runtimeScene.getObjects("Siguiente"), gdjs._56Code.GDSiguienteObjects1);
{for(var i = 0, len = gdjs._56Code.GDMousePointObjects1.length ;i < len;++i) {
    gdjs._56Code.GDMousePointObjects1[i].hide();
}
}{for(var i = 0, len = gdjs._56Code.GDSiguienteObjects1.length ;i < len;++i) {
    gdjs._56Code.GDSiguienteObjects1[i].getBehavior("Tween").addObjectScaleTween("as", 0.75, 0.75, "linear", 1, false, true);
}
}{for(var i = 0, len = gdjs._56Code.GDSiguienteObjects1.length ;i < len;++i) {
    gdjs._56Code.GDSiguienteObjects1[i].setAnimation(0);
}
}{for(var i = 0, len = gdjs._56Code.GDSiguienteObjects1.length ;i < len;++i) {
    gdjs._56Code.GDSiguienteObjects1[i].setOpacity(150);
}
}{for(var i = 0, len = gdjs._56Code.GDBarraAmarilloVerdiOscuroObjects1.length ;i < len;++i) {
    gdjs._56Code.GDBarraAmarilloVerdiOscuroObjects1[i].getBehavior("DraggableSliderControl").SetValue(10, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs._56Code.GDOpcionesObjects1.length ;i < len;++i) {
    gdjs._56Code.GDOpcionesObjects1[i].pauseAnimation();
}
}{for(var i = 0, len = gdjs._56Code.GDOpcionesObjects1.length ;i < len;++i) {
    gdjs._56Code.GDOpcionesObjects1[i].setAnimationFrame(0);
}
}{for(var i = 0, len = gdjs._56Code.GDIMG_9595PreguntaObjects1.length ;i < len;++i) {
    gdjs._56Code.GDIMG_9595PreguntaObjects1[i].getBehavior("Tween").addObjectScaleTween("Thumb", 0.5, 0.5, "linear", 1, false, true);
}
}
{ //Subevents
gdjs._56Code.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Opciones"), gdjs._56Code.GDOpcionesObjects1);

for (gdjs._56Code.forEachIndex2 = 0;gdjs._56Code.forEachIndex2 < gdjs._56Code.GDOpcionesObjects1.length;++gdjs._56Code.forEachIndex2) {
gdjs._56Code.GDOpcionesObjects2.length = 0;


gdjs._56Code.forEachTemporary2 = gdjs._56Code.GDOpcionesObjects1[gdjs._56Code.forEachIndex2];
gdjs._56Code.GDOpcionesObjects2.push(gdjs._56Code.forEachTemporary2);
let isConditionTrue_0 = false;
if (true) {

{ //Subevents: 
gdjs._56Code.eventsList3(runtimeScene);} //Subevents end.
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {

{ //Subevents
gdjs._56Code.eventsList4(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("MousePoint"), gdjs._56Code.GDMousePointObjects1);
{for(var i = 0, len = gdjs._56Code.GDMousePointObjects1.length ;i < len;++i) {
    gdjs._56Code.GDMousePointObjects1[i].setPosition(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0),gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Siguiente"), gdjs._56Code.GDSiguienteObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._56Code.mapOfGDgdjs_9546_959556Code_9546GDSiguienteObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._56Code.GDSiguienteObjects1.length;i<l;++i) {
    if ( gdjs._56Code.GDSiguienteObjects1[i].getOpacity() == 255 ) {
        isConditionTrue_0 = true;
        gdjs._56Code.GDSiguienteObjects1[k] = gdjs._56Code.GDSiguienteObjects1[i];
        ++k;
    }
}
gdjs._56Code.GDSiguienteObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(25877684);
}
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().get("User").getChild("TuEn10Años").setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0)));
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "9", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Opciones"), gdjs._56Code.GDOpcionesObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._56Code.GDOpcionesObjects1.length;i<l;++i) {
    if ( gdjs._56Code.GDOpcionesObjects1[i].getAnimationFrame() == 1 ) {
        isConditionTrue_0 = true;
        gdjs._56Code.GDOpcionesObjects1[k] = gdjs._56Code.GDOpcionesObjects1[i];
        ++k;
    }
}
gdjs._56Code.GDOpcionesObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.getPickedInstancesCount(gdjs._56Code.mapOfGDgdjs_9546_959556Code_9546GDOpcionesObjects1Objects) >= 2;
}
if (isConditionTrue_0) {
/* Reuse gdjs._56Code.GDOpcionesObjects1 */
{for(var i = 0, len = gdjs._56Code.GDOpcionesObjects1.length ;i < len;++i) {
    gdjs._56Code.GDOpcionesObjects1[i].getBehavior("Tween").addObjectScaleTween("XD2", 1, 1, "linear", 100, false, true);
}
}{for(var i = 0, len = gdjs._56Code.GDOpcionesObjects1.length ;i < len;++i) {
    gdjs._56Code.GDOpcionesObjects1[i].setAnimationFrame(0);
}
}}

}


};

gdjs._56Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._56Code.GDOpcionesObjects1.length = 0;
gdjs._56Code.GDOpcionesObjects2.length = 0;
gdjs._56Code.GDOpcionesObjects3.length = 0;
gdjs._56Code.GDOpcionesObjects4.length = 0;
gdjs._56Code.GDOpcionesObjects5.length = 0;
gdjs._56Code.GDOpcionesObjects6.length = 0;
gdjs._56Code.GDIMG_9595PreguntaObjects1.length = 0;
gdjs._56Code.GDIMG_9595PreguntaObjects2.length = 0;
gdjs._56Code.GDIMG_9595PreguntaObjects3.length = 0;
gdjs._56Code.GDIMG_9595PreguntaObjects4.length = 0;
gdjs._56Code.GDIMG_9595PreguntaObjects5.length = 0;
gdjs._56Code.GDIMG_9595PreguntaObjects6.length = 0;
gdjs._56Code.GDMousePointObjects1.length = 0;
gdjs._56Code.GDMousePointObjects2.length = 0;
gdjs._56Code.GDMousePointObjects3.length = 0;
gdjs._56Code.GDMousePointObjects4.length = 0;
gdjs._56Code.GDMousePointObjects5.length = 0;
gdjs._56Code.GDMousePointObjects6.length = 0;
gdjs._56Code.GDSiguienteObjects1.length = 0;
gdjs._56Code.GDSiguienteObjects2.length = 0;
gdjs._56Code.GDSiguienteObjects3.length = 0;
gdjs._56Code.GDSiguienteObjects4.length = 0;
gdjs._56Code.GDSiguienteObjects5.length = 0;
gdjs._56Code.GDSiguienteObjects6.length = 0;
gdjs._56Code.GDBarraAmarilloVerdiOscuroObjects1.length = 0;
gdjs._56Code.GDBarraAmarilloVerdiOscuroObjects2.length = 0;
gdjs._56Code.GDBarraAmarilloVerdiOscuroObjects3.length = 0;
gdjs._56Code.GDBarraAmarilloVerdiOscuroObjects4.length = 0;
gdjs._56Code.GDBarraAmarilloVerdiOscuroObjects5.length = 0;
gdjs._56Code.GDBarraAmarilloVerdiOscuroObjects6.length = 0;
gdjs._56Code.GDFondoObjects1.length = 0;
gdjs._56Code.GDFondoObjects2.length = 0;
gdjs._56Code.GDFondoObjects3.length = 0;
gdjs._56Code.GDFondoObjects4.length = 0;
gdjs._56Code.GDFondoObjects5.length = 0;
gdjs._56Code.GDFondoObjects6.length = 0;

gdjs._56Code.eventsList5(runtimeScene);
gdjs._56Code.GDOpcionesObjects1.length = 0;
gdjs._56Code.GDOpcionesObjects2.length = 0;
gdjs._56Code.GDOpcionesObjects3.length = 0;
gdjs._56Code.GDOpcionesObjects4.length = 0;
gdjs._56Code.GDOpcionesObjects5.length = 0;
gdjs._56Code.GDOpcionesObjects6.length = 0;
gdjs._56Code.GDIMG_9595PreguntaObjects1.length = 0;
gdjs._56Code.GDIMG_9595PreguntaObjects2.length = 0;
gdjs._56Code.GDIMG_9595PreguntaObjects3.length = 0;
gdjs._56Code.GDIMG_9595PreguntaObjects4.length = 0;
gdjs._56Code.GDIMG_9595PreguntaObjects5.length = 0;
gdjs._56Code.GDIMG_9595PreguntaObjects6.length = 0;
gdjs._56Code.GDMousePointObjects1.length = 0;
gdjs._56Code.GDMousePointObjects2.length = 0;
gdjs._56Code.GDMousePointObjects3.length = 0;
gdjs._56Code.GDMousePointObjects4.length = 0;
gdjs._56Code.GDMousePointObjects5.length = 0;
gdjs._56Code.GDMousePointObjects6.length = 0;
gdjs._56Code.GDSiguienteObjects1.length = 0;
gdjs._56Code.GDSiguienteObjects2.length = 0;
gdjs._56Code.GDSiguienteObjects3.length = 0;
gdjs._56Code.GDSiguienteObjects4.length = 0;
gdjs._56Code.GDSiguienteObjects5.length = 0;
gdjs._56Code.GDSiguienteObjects6.length = 0;
gdjs._56Code.GDBarraAmarilloVerdiOscuroObjects1.length = 0;
gdjs._56Code.GDBarraAmarilloVerdiOscuroObjects2.length = 0;
gdjs._56Code.GDBarraAmarilloVerdiOscuroObjects3.length = 0;
gdjs._56Code.GDBarraAmarilloVerdiOscuroObjects4.length = 0;
gdjs._56Code.GDBarraAmarilloVerdiOscuroObjects5.length = 0;
gdjs._56Code.GDBarraAmarilloVerdiOscuroObjects6.length = 0;
gdjs._56Code.GDFondoObjects1.length = 0;
gdjs._56Code.GDFondoObjects2.length = 0;
gdjs._56Code.GDFondoObjects3.length = 0;
gdjs._56Code.GDFondoObjects4.length = 0;
gdjs._56Code.GDFondoObjects5.length = 0;
gdjs._56Code.GDFondoObjects6.length = 0;


return;

}

gdjs['_56Code'] = gdjs._56Code;
