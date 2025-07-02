gdjs._57Code = {};
gdjs._57Code.localVariables = [];
gdjs._57Code.forEachIndex2 = 0;

gdjs._57Code.forEachObjects2 = [];

gdjs._57Code.forEachTemporary2 = null;

gdjs._57Code.forEachTotalCount2 = 0;

gdjs._57Code.GDOpcionesObjects1= [];
gdjs._57Code.GDOpcionesObjects2= [];
gdjs._57Code.GDOpcionesObjects3= [];
gdjs._57Code.GDOpcionesObjects4= [];
gdjs._57Code.GDOpcionesObjects5= [];
gdjs._57Code.GDOpcionesObjects6= [];
gdjs._57Code.GDBarraMoradaAzulObjects1= [];
gdjs._57Code.GDBarraMoradaAzulObjects2= [];
gdjs._57Code.GDBarraMoradaAzulObjects3= [];
gdjs._57Code.GDBarraMoradaAzulObjects4= [];
gdjs._57Code.GDBarraMoradaAzulObjects5= [];
gdjs._57Code.GDBarraMoradaAzulObjects6= [];
gdjs._57Code.GDIMG_9595PreguntaObjects1= [];
gdjs._57Code.GDIMG_9595PreguntaObjects2= [];
gdjs._57Code.GDIMG_9595PreguntaObjects3= [];
gdjs._57Code.GDIMG_9595PreguntaObjects4= [];
gdjs._57Code.GDIMG_9595PreguntaObjects5= [];
gdjs._57Code.GDIMG_9595PreguntaObjects6= [];
gdjs._57Code.GDFondoObjects1= [];
gdjs._57Code.GDFondoObjects2= [];
gdjs._57Code.GDFondoObjects3= [];
gdjs._57Code.GDFondoObjects4= [];
gdjs._57Code.GDFondoObjects5= [];
gdjs._57Code.GDFondoObjects6= [];
gdjs._57Code.GDMousePointObjects1= [];
gdjs._57Code.GDMousePointObjects2= [];
gdjs._57Code.GDMousePointObjects3= [];
gdjs._57Code.GDMousePointObjects4= [];
gdjs._57Code.GDMousePointObjects5= [];
gdjs._57Code.GDMousePointObjects6= [];
gdjs._57Code.GDSiguienteObjects1= [];
gdjs._57Code.GDSiguienteObjects2= [];
gdjs._57Code.GDSiguienteObjects3= [];
gdjs._57Code.GDSiguienteObjects4= [];
gdjs._57Code.GDSiguienteObjects5= [];
gdjs._57Code.GDSiguienteObjects6= [];


gdjs._57Code.asyncCallback20894644 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs._57Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("IMG_Pregunta"), gdjs._57Code.GDIMG_9595PreguntaObjects2);

{for(var i = 0, len = gdjs._57Code.GDIMG_9595PreguntaObjects2.length ;i < len;++i) {
    gdjs._57Code.GDIMG_9595PreguntaObjects2[i].getBehavior("Tween").addObjectScaleTween("Thumb", 1, 1, "swingFromTo", 400, false, true);
}
}gdjs._57Code.localVariables.length = 0;
}
gdjs._57Code.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs._57Code.localVariables);
for (const obj of gdjs._57Code.GDIMG_9595PreguntaObjects1) asyncObjectsList.addObject("IMG_Pregunta", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.2), (runtimeScene) => (gdjs._57Code.asyncCallback20894644(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs._57Code.mapOfGDgdjs_9546_959557Code_9546GDMousePointObjects4Objects = Hashtable.newFrom({"MousePoint": gdjs._57Code.GDMousePointObjects4});
gdjs._57Code.mapOfGDgdjs_9546_959557Code_9546GDOpcionesObjects4Objects = Hashtable.newFrom({"Opciones": gdjs._57Code.GDOpcionesObjects4});
gdjs._57Code.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(gdjs._57Code.GDOpcionesObjects4, gdjs._57Code.GDOpcionesObjects5);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._57Code.GDOpcionesObjects5.length;i<l;++i) {
    if ( gdjs._57Code.GDOpcionesObjects5[i].getVariableNumber(gdjs._57Code.GDOpcionesObjects5[i].getVariables().getFromIndex(0)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs._57Code.GDOpcionesObjects5[k] = gdjs._57Code.GDOpcionesObjects5[i];
        ++k;
    }
}
gdjs._57Code.GDOpcionesObjects5.length = k;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setString("Te da chiste");
}}

}


{

gdjs.copyArray(gdjs._57Code.GDOpcionesObjects4, gdjs._57Code.GDOpcionesObjects5);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._57Code.GDOpcionesObjects5.length;i<l;++i) {
    if ( gdjs._57Code.GDOpcionesObjects5[i].getVariableNumber(gdjs._57Code.GDOpcionesObjects5[i].getVariables().getFromIndex(0)) == 2 ) {
        isConditionTrue_0 = true;
        gdjs._57Code.GDOpcionesObjects5[k] = gdjs._57Code.GDOpcionesObjects5[i];
        ++k;
    }
}
gdjs._57Code.GDOpcionesObjects5.length = k;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setString("Ofreces ayuda");
}}

}


{

gdjs.copyArray(gdjs._57Code.GDOpcionesObjects4, gdjs._57Code.GDOpcionesObjects5);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._57Code.GDOpcionesObjects5.length;i<l;++i) {
    if ( gdjs._57Code.GDOpcionesObjects5[i].getVariableNumber(gdjs._57Code.GDOpcionesObjects5[i].getVariables().getFromIndex(0)) == 3 ) {
        isConditionTrue_0 = true;
        gdjs._57Code.GDOpcionesObjects5[k] = gdjs._57Code.GDOpcionesObjects5[i];
        ++k;
    }
}
gdjs._57Code.GDOpcionesObjects5.length = k;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setString("Te angustias");
}}

}


{

gdjs.copyArray(gdjs._57Code.GDOpcionesObjects4, gdjs._57Code.GDOpcionesObjects5);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._57Code.GDOpcionesObjects5.length;i<l;++i) {
    if ( gdjs._57Code.GDOpcionesObjects5[i].getVariableNumber(gdjs._57Code.GDOpcionesObjects5[i].getVariables().getFromIndex(0)) == 4 ) {
        isConditionTrue_0 = true;
        gdjs._57Code.GDOpcionesObjects5[k] = gdjs._57Code.GDOpcionesObjects5[i];
        ++k;
    }
}
gdjs._57Code.GDOpcionesObjects5.length = k;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setString("Esperas a que te pida ayuda");
}}

}


{

/* Reuse gdjs._57Code.GDOpcionesObjects4 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._57Code.GDOpcionesObjects4.length;i<l;++i) {
    if ( gdjs._57Code.GDOpcionesObjects4[i].getVariableNumber(gdjs._57Code.GDOpcionesObjects4[i].getVariables().getFromIndex(0)) == 5 ) {
        isConditionTrue_0 = true;
        gdjs._57Code.GDOpcionesObjects4[k] = gdjs._57Code.GDOpcionesObjects4[i];
        ++k;
    }
}
gdjs._57Code.GDOpcionesObjects4.length = k;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setString("No te metes");
}}

}


};gdjs._57Code.mapOfGDgdjs_9546_959557Code_9546GDMousePointObjects3Objects = Hashtable.newFrom({"MousePoint": gdjs._57Code.GDMousePointObjects3});
gdjs._57Code.mapOfGDgdjs_9546_959557Code_9546GDOpcionesObjects3Objects = Hashtable.newFrom({"Opciones": gdjs._57Code.GDOpcionesObjects3});
gdjs._57Code.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("MousePoint"), gdjs._57Code.GDMousePointObjects4);
gdjs.copyArray(gdjs._57Code.GDOpcionesObjects3, gdjs._57Code.GDOpcionesObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._57Code.mapOfGDgdjs_9546_959557Code_9546GDMousePointObjects4Objects, gdjs._57Code.mapOfGDgdjs_9546_959557Code_9546GDOpcionesObjects4Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(20896732);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs._57Code.GDOpcionesObjects4 */
{for(var i = 0, len = gdjs._57Code.GDOpcionesObjects4.length ;i < len;++i) {
    gdjs._57Code.GDOpcionesObjects4[i].getBehavior("Tween").addObjectScaleTween("XD", 1.1, 1.1, "linear", 100, false, true);
}
}
{ //Subevents
gdjs._57Code.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("MousePoint"), gdjs._57Code.GDMousePointObjects3);
/* Reuse gdjs._57Code.GDOpcionesObjects3 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._57Code.mapOfGDgdjs_9546_959557Code_9546GDMousePointObjects3Objects, gdjs._57Code.mapOfGDgdjs_9546_959557Code_9546GDOpcionesObjects3Objects, true, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(20901364);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs._57Code.GDOpcionesObjects3 */
{for(var i = 0, len = gdjs._57Code.GDOpcionesObjects3.length ;i < len;++i) {
    gdjs._57Code.GDOpcionesObjects3[i].getBehavior("Tween").addObjectScaleTween("XD2", 1, 1, "linear", 100, false, true);
}
}{for(var i = 0, len = gdjs._57Code.GDOpcionesObjects3.length ;i < len;++i) {
    gdjs._57Code.GDOpcionesObjects3[i].setAnimationFrame(0);
}
}}

}


};gdjs._57Code.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs._57Code.GDOpcionesObjects2, gdjs._57Code.GDOpcionesObjects3);

{for(var i = 0, len = gdjs._57Code.GDOpcionesObjects3.length ;i < len;++i) {
    gdjs._57Code.GDOpcionesObjects3[i].setAnimationFrame(1);
}
}
{ //Subevents
gdjs._57Code.eventsList2(runtimeScene);} //End of subevents
}

}


};gdjs._57Code.mapOfGDgdjs_9546_959557Code_9546GDMousePointObjects2Objects = Hashtable.newFrom({"MousePoint": gdjs._57Code.GDMousePointObjects2});
gdjs._57Code.mapOfGDgdjs_9546_959557Code_9546GDFondoObjects2Objects = Hashtable.newFrom({"Fondo": gdjs._57Code.GDFondoObjects2});
gdjs._57Code.mapOfGDgdjs_9546_959557Code_9546GDMousePointObjects1Objects = Hashtable.newFrom({"MousePoint": gdjs._57Code.GDMousePointObjects1});
gdjs._57Code.mapOfGDgdjs_9546_959557Code_9546GDOpcionesObjects1Objects = Hashtable.newFrom({"Opciones": gdjs._57Code.GDOpcionesObjects1});
gdjs._57Code.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Fondo"), gdjs._57Code.GDFondoObjects2);
gdjs.copyArray(runtimeScene.getObjects("MousePoint"), gdjs._57Code.GDMousePointObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._57Code.mapOfGDgdjs_9546_959557Code_9546GDMousePointObjects2Objects, gdjs._57Code.mapOfGDgdjs_9546_959557Code_9546GDFondoObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(20902628);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Siguiente"), gdjs._57Code.GDSiguienteObjects2);
{for(var i = 0, len = gdjs._57Code.GDSiguienteObjects2.length ;i < len;++i) {
    gdjs._57Code.GDSiguienteObjects2[i].setAnimation(0);
}
}{for(var i = 0, len = gdjs._57Code.GDSiguienteObjects2.length ;i < len;++i) {
    gdjs._57Code.GDSiguienteObjects2[i].getBehavior("Tween").addObjectScaleTween("as", 0.75, 0.75, "linear", 100, false, true);
}
}{for(var i = 0, len = gdjs._57Code.GDSiguienteObjects2.length ;i < len;++i) {
    gdjs._57Code.GDSiguienteObjects2[i].setOpacity(150);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("MousePoint"), gdjs._57Code.GDMousePointObjects1);
gdjs.copyArray(runtimeScene.getObjects("Opciones"), gdjs._57Code.GDOpcionesObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._57Code.mapOfGDgdjs_9546_959557Code_9546GDMousePointObjects1Objects, gdjs._57Code.mapOfGDgdjs_9546_959557Code_9546GDOpcionesObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._57Code.GDOpcionesObjects1.length;i<l;++i) {
    if ( gdjs._57Code.GDOpcionesObjects1[i].getAnimationFrame() == 1 ) {
        isConditionTrue_0 = true;
        gdjs._57Code.GDOpcionesObjects1[k] = gdjs._57Code.GDOpcionesObjects1[i];
        ++k;
    }
}
gdjs._57Code.GDOpcionesObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(20904588);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Siguiente"), gdjs._57Code.GDSiguienteObjects1);
{for(var i = 0, len = gdjs._57Code.GDSiguienteObjects1.length ;i < len;++i) {
    gdjs._57Code.GDSiguienteObjects1[i].setOpacity(255);
}
}{for(var i = 0, len = gdjs._57Code.GDSiguienteObjects1.length ;i < len;++i) {
    gdjs._57Code.GDSiguienteObjects1[i].setAnimation(1);
}
}{for(var i = 0, len = gdjs._57Code.GDSiguienteObjects1.length ;i < len;++i) {
    gdjs._57Code.GDSiguienteObjects1[i].getBehavior("Tween").addObjectScaleTween("as", 0.8, 0.8, "bouncePast", 100, false, true);
}
}}

}


};gdjs._57Code.mapOfGDgdjs_9546_959557Code_9546GDSiguienteObjects1Objects = Hashtable.newFrom({"Siguiente": gdjs._57Code.GDSiguienteObjects1});
gdjs._57Code.mapOfGDgdjs_9546_959557Code_9546GDOpcionesObjects1Objects = Hashtable.newFrom({"Opciones": gdjs._57Code.GDOpcionesObjects1});
gdjs._57Code.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BarraMoradaAzul"), gdjs._57Code.GDBarraMoradaAzulObjects1);
gdjs.copyArray(runtimeScene.getObjects("IMG_Pregunta"), gdjs._57Code.GDIMG_9595PreguntaObjects1);
gdjs.copyArray(runtimeScene.getObjects("Opciones"), gdjs._57Code.GDOpcionesObjects1);
gdjs.copyArray(runtimeScene.getObjects("Siguiente"), gdjs._57Code.GDSiguienteObjects1);
{for(var i = 0, len = gdjs._57Code.GDSiguienteObjects1.length ;i < len;++i) {
    gdjs._57Code.GDSiguienteObjects1[i].setAnimation(0);
}
}{for(var i = 0, len = gdjs._57Code.GDSiguienteObjects1.length ;i < len;++i) {
    gdjs._57Code.GDSiguienteObjects1[i].setOpacity(150);
}
}{for(var i = 0, len = gdjs._57Code.GDBarraMoradaAzulObjects1.length ;i < len;++i) {
    gdjs._57Code.GDBarraMoradaAzulObjects1[i].getBehavior("DraggableSliderControl").SetValue(11, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs._57Code.GDSiguienteObjects1.length ;i < len;++i) {
    gdjs._57Code.GDSiguienteObjects1[i].getBehavior("Tween").addObjectScaleTween("as", 0.75, 0.75, "linear", 1, false, true);
}
}{for(var i = 0, len = gdjs._57Code.GDOpcionesObjects1.length ;i < len;++i) {
    gdjs._57Code.GDOpcionesObjects1[i].pauseAnimation();
}
}{for(var i = 0, len = gdjs._57Code.GDOpcionesObjects1.length ;i < len;++i) {
    gdjs._57Code.GDOpcionesObjects1[i].setAnimationFrame(0);
}
}{for(var i = 0, len = gdjs._57Code.GDIMG_9595PreguntaObjects1.length ;i < len;++i) {
    gdjs._57Code.GDIMG_9595PreguntaObjects1[i].getBehavior("Tween").addObjectScaleTween("Thumb", 0.5, 0.5, "linear", 1, false, true);
}
}
{ //Subevents
gdjs._57Code.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Opciones"), gdjs._57Code.GDOpcionesObjects1);

for (gdjs._57Code.forEachIndex2 = 0;gdjs._57Code.forEachIndex2 < gdjs._57Code.GDOpcionesObjects1.length;++gdjs._57Code.forEachIndex2) {
gdjs._57Code.GDOpcionesObjects2.length = 0;


gdjs._57Code.forEachTemporary2 = gdjs._57Code.GDOpcionesObjects1[gdjs._57Code.forEachIndex2];
gdjs._57Code.GDOpcionesObjects2.push(gdjs._57Code.forEachTemporary2);
let isConditionTrue_0 = false;
if (true) {

{ //Subevents: 
gdjs._57Code.eventsList3(runtimeScene);} //Subevents end.
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {

{ //Subevents
gdjs._57Code.eventsList4(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("MousePoint"), gdjs._57Code.GDMousePointObjects1);
{for(var i = 0, len = gdjs._57Code.GDMousePointObjects1.length ;i < len;++i) {
    gdjs._57Code.GDMousePointObjects1[i].setPosition(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0),gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Siguiente"), gdjs._57Code.GDSiguienteObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._57Code.mapOfGDgdjs_9546_959557Code_9546GDSiguienteObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._57Code.GDSiguienteObjects1.length;i<l;++i) {
    if ( gdjs._57Code.GDSiguienteObjects1[i].getOpacity() == 255 ) {
        isConditionTrue_0 = true;
        gdjs._57Code.GDSiguienteObjects1[k] = gdjs._57Code.GDSiguienteObjects1[i];
        ++k;
    }
}
gdjs._57Code.GDSiguienteObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(20906436);
}
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().get("User").getChild("CuandoVeoAlguienEnProblemas").setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0)));
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "10", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Opciones"), gdjs._57Code.GDOpcionesObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._57Code.GDOpcionesObjects1.length;i<l;++i) {
    if ( gdjs._57Code.GDOpcionesObjects1[i].getAnimationFrame() == 1 ) {
        isConditionTrue_0 = true;
        gdjs._57Code.GDOpcionesObjects1[k] = gdjs._57Code.GDOpcionesObjects1[i];
        ++k;
    }
}
gdjs._57Code.GDOpcionesObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.getPickedInstancesCount(gdjs._57Code.mapOfGDgdjs_9546_959557Code_9546GDOpcionesObjects1Objects) >= 2;
}
if (isConditionTrue_0) {
/* Reuse gdjs._57Code.GDOpcionesObjects1 */
gdjs.copyArray(runtimeScene.getObjects("Siguiente"), gdjs._57Code.GDSiguienteObjects1);
{for(var i = 0, len = gdjs._57Code.GDOpcionesObjects1.length ;i < len;++i) {
    gdjs._57Code.GDOpcionesObjects1[i].getBehavior("Tween").addObjectScaleTween("XD2", 1, 1, "linear", 100, false, true);
}
}{for(var i = 0, len = gdjs._57Code.GDOpcionesObjects1.length ;i < len;++i) {
    gdjs._57Code.GDOpcionesObjects1[i].setAnimationFrame(0);
}
}{for(var i = 0, len = gdjs._57Code.GDSiguienteObjects1.length ;i < len;++i) {
    gdjs._57Code.GDSiguienteObjects1[i].setOpacity(150);
}
}}

}


};

gdjs._57Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._57Code.GDOpcionesObjects1.length = 0;
gdjs._57Code.GDOpcionesObjects2.length = 0;
gdjs._57Code.GDOpcionesObjects3.length = 0;
gdjs._57Code.GDOpcionesObjects4.length = 0;
gdjs._57Code.GDOpcionesObjects5.length = 0;
gdjs._57Code.GDOpcionesObjects6.length = 0;
gdjs._57Code.GDBarraMoradaAzulObjects1.length = 0;
gdjs._57Code.GDBarraMoradaAzulObjects2.length = 0;
gdjs._57Code.GDBarraMoradaAzulObjects3.length = 0;
gdjs._57Code.GDBarraMoradaAzulObjects4.length = 0;
gdjs._57Code.GDBarraMoradaAzulObjects5.length = 0;
gdjs._57Code.GDBarraMoradaAzulObjects6.length = 0;
gdjs._57Code.GDIMG_9595PreguntaObjects1.length = 0;
gdjs._57Code.GDIMG_9595PreguntaObjects2.length = 0;
gdjs._57Code.GDIMG_9595PreguntaObjects3.length = 0;
gdjs._57Code.GDIMG_9595PreguntaObjects4.length = 0;
gdjs._57Code.GDIMG_9595PreguntaObjects5.length = 0;
gdjs._57Code.GDIMG_9595PreguntaObjects6.length = 0;
gdjs._57Code.GDFondoObjects1.length = 0;
gdjs._57Code.GDFondoObjects2.length = 0;
gdjs._57Code.GDFondoObjects3.length = 0;
gdjs._57Code.GDFondoObjects4.length = 0;
gdjs._57Code.GDFondoObjects5.length = 0;
gdjs._57Code.GDFondoObjects6.length = 0;
gdjs._57Code.GDMousePointObjects1.length = 0;
gdjs._57Code.GDMousePointObjects2.length = 0;
gdjs._57Code.GDMousePointObjects3.length = 0;
gdjs._57Code.GDMousePointObjects4.length = 0;
gdjs._57Code.GDMousePointObjects5.length = 0;
gdjs._57Code.GDMousePointObjects6.length = 0;
gdjs._57Code.GDSiguienteObjects1.length = 0;
gdjs._57Code.GDSiguienteObjects2.length = 0;
gdjs._57Code.GDSiguienteObjects3.length = 0;
gdjs._57Code.GDSiguienteObjects4.length = 0;
gdjs._57Code.GDSiguienteObjects5.length = 0;
gdjs._57Code.GDSiguienteObjects6.length = 0;

gdjs._57Code.eventsList5(runtimeScene);
gdjs._57Code.GDOpcionesObjects1.length = 0;
gdjs._57Code.GDOpcionesObjects2.length = 0;
gdjs._57Code.GDOpcionesObjects3.length = 0;
gdjs._57Code.GDOpcionesObjects4.length = 0;
gdjs._57Code.GDOpcionesObjects5.length = 0;
gdjs._57Code.GDOpcionesObjects6.length = 0;
gdjs._57Code.GDBarraMoradaAzulObjects1.length = 0;
gdjs._57Code.GDBarraMoradaAzulObjects2.length = 0;
gdjs._57Code.GDBarraMoradaAzulObjects3.length = 0;
gdjs._57Code.GDBarraMoradaAzulObjects4.length = 0;
gdjs._57Code.GDBarraMoradaAzulObjects5.length = 0;
gdjs._57Code.GDBarraMoradaAzulObjects6.length = 0;
gdjs._57Code.GDIMG_9595PreguntaObjects1.length = 0;
gdjs._57Code.GDIMG_9595PreguntaObjects2.length = 0;
gdjs._57Code.GDIMG_9595PreguntaObjects3.length = 0;
gdjs._57Code.GDIMG_9595PreguntaObjects4.length = 0;
gdjs._57Code.GDIMG_9595PreguntaObjects5.length = 0;
gdjs._57Code.GDIMG_9595PreguntaObjects6.length = 0;
gdjs._57Code.GDFondoObjects1.length = 0;
gdjs._57Code.GDFondoObjects2.length = 0;
gdjs._57Code.GDFondoObjects3.length = 0;
gdjs._57Code.GDFondoObjects4.length = 0;
gdjs._57Code.GDFondoObjects5.length = 0;
gdjs._57Code.GDFondoObjects6.length = 0;
gdjs._57Code.GDMousePointObjects1.length = 0;
gdjs._57Code.GDMousePointObjects2.length = 0;
gdjs._57Code.GDMousePointObjects3.length = 0;
gdjs._57Code.GDMousePointObjects4.length = 0;
gdjs._57Code.GDMousePointObjects5.length = 0;
gdjs._57Code.GDMousePointObjects6.length = 0;
gdjs._57Code.GDSiguienteObjects1.length = 0;
gdjs._57Code.GDSiguienteObjects2.length = 0;
gdjs._57Code.GDSiguienteObjects3.length = 0;
gdjs._57Code.GDSiguienteObjects4.length = 0;
gdjs._57Code.GDSiguienteObjects5.length = 0;
gdjs._57Code.GDSiguienteObjects6.length = 0;


return;

}

gdjs['_57Code'] = gdjs._57Code;
