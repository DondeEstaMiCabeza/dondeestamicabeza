gdjs._493Code = {};
gdjs._493Code.localVariables = [];
gdjs._493Code.forEachIndex2 = 0;

gdjs._493Code.forEachObjects2 = [];

gdjs._493Code.forEachTemporary2 = null;

gdjs._493Code.forEachTotalCount2 = 0;

gdjs._493Code.GDOpcionesObjects1= [];
gdjs._493Code.GDOpcionesObjects2= [];
gdjs._493Code.GDOpcionesObjects3= [];
gdjs._493Code.GDOpcionesObjects4= [];
gdjs._493Code.GDOpcionesObjects5= [];
gdjs._493Code.GDOpcionesObjects6= [];
gdjs._493Code.GDIMG_9595PreguntaObjects1= [];
gdjs._493Code.GDIMG_9595PreguntaObjects2= [];
gdjs._493Code.GDIMG_9595PreguntaObjects3= [];
gdjs._493Code.GDIMG_9595PreguntaObjects4= [];
gdjs._493Code.GDIMG_9595PreguntaObjects5= [];
gdjs._493Code.GDIMG_9595PreguntaObjects6= [];
gdjs._493Code.GDFondoObjects1= [];
gdjs._493Code.GDFondoObjects2= [];
gdjs._493Code.GDFondoObjects3= [];
gdjs._493Code.GDFondoObjects4= [];
gdjs._493Code.GDFondoObjects5= [];
gdjs._493Code.GDFondoObjects6= [];
gdjs._493Code.GDBarraMoradaAzulObjects1= [];
gdjs._493Code.GDBarraMoradaAzulObjects2= [];
gdjs._493Code.GDBarraMoradaAzulObjects3= [];
gdjs._493Code.GDBarraMoradaAzulObjects4= [];
gdjs._493Code.GDBarraMoradaAzulObjects5= [];
gdjs._493Code.GDBarraMoradaAzulObjects6= [];
gdjs._493Code.GDMousePointObjects1= [];
gdjs._493Code.GDMousePointObjects2= [];
gdjs._493Code.GDMousePointObjects3= [];
gdjs._493Code.GDMousePointObjects4= [];
gdjs._493Code.GDMousePointObjects5= [];
gdjs._493Code.GDMousePointObjects6= [];
gdjs._493Code.GDSiguienteObjects1= [];
gdjs._493Code.GDSiguienteObjects2= [];
gdjs._493Code.GDSiguienteObjects3= [];
gdjs._493Code.GDSiguienteObjects4= [];
gdjs._493Code.GDSiguienteObjects5= [];
gdjs._493Code.GDSiguienteObjects6= [];


gdjs._493Code.asyncCallback21117148 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs._493Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("IMG_Pregunta"), gdjs._493Code.GDIMG_9595PreguntaObjects2);

{for(var i = 0, len = gdjs._493Code.GDIMG_9595PreguntaObjects2.length ;i < len;++i) {
    gdjs._493Code.GDIMG_9595PreguntaObjects2[i].getBehavior("Tween").addObjectScaleTween("Thumb", 1, 1, "swingFromTo", 400, false, true);
}
}gdjs._493Code.localVariables.length = 0;
}
gdjs._493Code.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs._493Code.localVariables);
for (const obj of gdjs._493Code.GDIMG_9595PreguntaObjects1) asyncObjectsList.addObject("IMG_Pregunta", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.2), (runtimeScene) => (gdjs._493Code.asyncCallback21117148(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs._493Code.mapOfGDgdjs_9546_9595493Code_9546GDMousePointObjects4Objects = Hashtable.newFrom({"MousePoint": gdjs._493Code.GDMousePointObjects4});
gdjs._493Code.mapOfGDgdjs_9546_9595493Code_9546GDOpcionesObjects4Objects = Hashtable.newFrom({"Opciones": gdjs._493Code.GDOpcionesObjects4});
gdjs._493Code.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(gdjs._493Code.GDOpcionesObjects4, gdjs._493Code.GDOpcionesObjects5);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._493Code.GDOpcionesObjects5.length;i<l;++i) {
    if ( gdjs._493Code.GDOpcionesObjects5[i].getVariableNumber(gdjs._493Code.GDOpcionesObjects5[i].getVariables().getFromIndex(0)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs._493Code.GDOpcionesObjects5[k] = gdjs._493Code.GDOpcionesObjects5[i];
        ++k;
    }
}
gdjs._493Code.GDOpcionesObjects5.length = k;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setString("Colegio/trabajo");
}}

}


{

gdjs.copyArray(gdjs._493Code.GDOpcionesObjects4, gdjs._493Code.GDOpcionesObjects5);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._493Code.GDOpcionesObjects5.length;i<l;++i) {
    if ( gdjs._493Code.GDOpcionesObjects5[i].getVariableNumber(gdjs._493Code.GDOpcionesObjects5[i].getVariables().getFromIndex(0)) == 2 ) {
        isConditionTrue_0 = true;
        gdjs._493Code.GDOpcionesObjects5[k] = gdjs._493Code.GDOpcionesObjects5[i];
        ++k;
    }
}
gdjs._493Code.GDOpcionesObjects5.length = k;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setString("Con panas");
}}

}


{

gdjs.copyArray(gdjs._493Code.GDOpcionesObjects4, gdjs._493Code.GDOpcionesObjects5);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._493Code.GDOpcionesObjects5.length;i<l;++i) {
    if ( gdjs._493Code.GDOpcionesObjects5[i].getVariableNumber(gdjs._493Code.GDOpcionesObjects5[i].getVariables().getFromIndex(0)) == 3 ) {
        isConditionTrue_0 = true;
        gdjs._493Code.GDOpcionesObjects5[k] = gdjs._493Code.GDOpcionesObjects5[i];
        ++k;
    }
}
gdjs._493Code.GDOpcionesObjects5.length = k;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setString("En tu casa");
}}

}


{

/* Reuse gdjs._493Code.GDOpcionesObjects4 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._493Code.GDOpcionesObjects4.length;i<l;++i) {
    if ( gdjs._493Code.GDOpcionesObjects4[i].getVariableNumber(gdjs._493Code.GDOpcionesObjects4[i].getVariables().getFromIndex(0)) == 4 ) {
        isConditionTrue_0 = true;
        gdjs._493Code.GDOpcionesObjects4[k] = gdjs._493Code.GDOpcionesObjects4[i];
        ++k;
    }
}
gdjs._493Code.GDOpcionesObjects4.length = k;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setString("En tu cuarto");
}}

}


};gdjs._493Code.mapOfGDgdjs_9546_9595493Code_9546GDOpcionesObjects3Objects = Hashtable.newFrom({"Opciones": gdjs._493Code.GDOpcionesObjects3});
gdjs._493Code.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("MousePoint"), gdjs._493Code.GDMousePointObjects4);
gdjs.copyArray(gdjs._493Code.GDOpcionesObjects2, gdjs._493Code.GDOpcionesObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._493Code.mapOfGDgdjs_9546_9595493Code_9546GDMousePointObjects4Objects, gdjs._493Code.mapOfGDgdjs_9546_9595493Code_9546GDOpcionesObjects4Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(21118844);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs._493Code.GDOpcionesObjects4 */
{for(var i = 0, len = gdjs._493Code.GDOpcionesObjects4.length ;i < len;++i) {
    gdjs._493Code.GDOpcionesObjects4[i].setAnimationFrame(1);
}
}{for(var i = 0, len = gdjs._493Code.GDOpcionesObjects4.length ;i < len;++i) {
    gdjs._493Code.GDOpcionesObjects4[i].getBehavior("Tween").addObjectScaleTween("XD", 1.1, 1.1, "linear", 100, false, true);
}
}
{ //Subevents
gdjs._493Code.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs._493Code.GDOpcionesObjects2, gdjs._493Code.GDOpcionesObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._493Code.mapOfGDgdjs_9546_9595493Code_9546GDOpcionesObjects3Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(21123100);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs._493Code.GDOpcionesObjects3 */
{for(var i = 0, len = gdjs._493Code.GDOpcionesObjects3.length ;i < len;++i) {
    gdjs._493Code.GDOpcionesObjects3[i].getBehavior("Tween").addObjectScaleTween("XD2", 1, 1, "linear", 100, false, true);
}
}{for(var i = 0, len = gdjs._493Code.GDOpcionesObjects3.length ;i < len;++i) {
    gdjs._493Code.GDOpcionesObjects3[i].setAnimationFrame(0);
}
}}

}


};gdjs._493Code.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {

{ //Subevents
gdjs._493Code.eventsList2(runtimeScene);} //End of subevents
}

}


};gdjs._493Code.mapOfGDgdjs_9546_9595493Code_9546GDMousePointObjects2Objects = Hashtable.newFrom({"MousePoint": gdjs._493Code.GDMousePointObjects2});
gdjs._493Code.mapOfGDgdjs_9546_9595493Code_9546GDFondoObjects2Objects = Hashtable.newFrom({"Fondo": gdjs._493Code.GDFondoObjects2});
gdjs._493Code.mapOfGDgdjs_9546_9595493Code_9546GDMousePointObjects1Objects = Hashtable.newFrom({"MousePoint": gdjs._493Code.GDMousePointObjects1});
gdjs._493Code.mapOfGDgdjs_9546_9595493Code_9546GDOpcionesObjects1Objects = Hashtable.newFrom({"Opciones": gdjs._493Code.GDOpcionesObjects1});
gdjs._493Code.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Fondo"), gdjs._493Code.GDFondoObjects2);
gdjs.copyArray(runtimeScene.getObjects("MousePoint"), gdjs._493Code.GDMousePointObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._493Code.mapOfGDgdjs_9546_9595493Code_9546GDMousePointObjects2Objects, gdjs._493Code.mapOfGDgdjs_9546_9595493Code_9546GDFondoObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(21124332);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Siguiente"), gdjs._493Code.GDSiguienteObjects2);
{for(var i = 0, len = gdjs._493Code.GDSiguienteObjects2.length ;i < len;++i) {
    gdjs._493Code.GDSiguienteObjects2[i].setAnimation(0);
}
}{for(var i = 0, len = gdjs._493Code.GDSiguienteObjects2.length ;i < len;++i) {
    gdjs._493Code.GDSiguienteObjects2[i].getBehavior("Tween").addObjectScaleTween("as", 0.75, 0.75, "linear", 100, false, true);
}
}{for(var i = 0, len = gdjs._493Code.GDSiguienteObjects2.length ;i < len;++i) {
    gdjs._493Code.GDSiguienteObjects2[i].setOpacity(150);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("MousePoint"), gdjs._493Code.GDMousePointObjects1);
gdjs.copyArray(runtimeScene.getObjects("Opciones"), gdjs._493Code.GDOpcionesObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._493Code.mapOfGDgdjs_9546_9595493Code_9546GDMousePointObjects1Objects, gdjs._493Code.mapOfGDgdjs_9546_9595493Code_9546GDOpcionesObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._493Code.GDOpcionesObjects1.length;i<l;++i) {
    if ( gdjs._493Code.GDOpcionesObjects1[i].getAnimationFrame() == 1 ) {
        isConditionTrue_0 = true;
        gdjs._493Code.GDOpcionesObjects1[k] = gdjs._493Code.GDOpcionesObjects1[i];
        ++k;
    }
}
gdjs._493Code.GDOpcionesObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(21126268);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Siguiente"), gdjs._493Code.GDSiguienteObjects1);
{for(var i = 0, len = gdjs._493Code.GDSiguienteObjects1.length ;i < len;++i) {
    gdjs._493Code.GDSiguienteObjects1[i].setOpacity(255);
}
}{for(var i = 0, len = gdjs._493Code.GDSiguienteObjects1.length ;i < len;++i) {
    gdjs._493Code.GDSiguienteObjects1[i].setAnimation(1);
}
}{for(var i = 0, len = gdjs._493Code.GDSiguienteObjects1.length ;i < len;++i) {
    gdjs._493Code.GDSiguienteObjects1[i].getBehavior("Tween").addObjectScaleTween("as", 0.8, 0.8, "bouncePast", 100, false, true);
}
}}

}


};gdjs._493Code.mapOfGDgdjs_9546_9595493Code_9546GDSiguienteObjects1Objects = Hashtable.newFrom({"Siguiente": gdjs._493Code.GDSiguienteObjects1});
gdjs._493Code.mapOfGDgdjs_9546_9595493Code_9546GDOpcionesObjects1Objects = Hashtable.newFrom({"Opciones": gdjs._493Code.GDOpcionesObjects1});
gdjs._493Code.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BarraMoradaAzul"), gdjs._493Code.GDBarraMoradaAzulObjects1);
gdjs.copyArray(runtimeScene.getObjects("IMG_Pregunta"), gdjs._493Code.GDIMG_9595PreguntaObjects1);
gdjs.copyArray(runtimeScene.getObjects("MousePoint"), gdjs._493Code.GDMousePointObjects1);
gdjs.copyArray(runtimeScene.getObjects("Opciones"), gdjs._493Code.GDOpcionesObjects1);
gdjs.copyArray(runtimeScene.getObjects("Siguiente"), gdjs._493Code.GDSiguienteObjects1);
{for(var i = 0, len = gdjs._493Code.GDSiguienteObjects1.length ;i < len;++i) {
    gdjs._493Code.GDSiguienteObjects1[i].getBehavior("Tween").addObjectScaleTween("as", 0.75, 0.75, "linear", 1, false, true);
}
}{for(var i = 0, len = gdjs._493Code.GDSiguienteObjects1.length ;i < len;++i) {
    gdjs._493Code.GDSiguienteObjects1[i].setAnimation(0);
}
}{for(var i = 0, len = gdjs._493Code.GDSiguienteObjects1.length ;i < len;++i) {
    gdjs._493Code.GDSiguienteObjects1[i].setOpacity(150);
}
}{for(var i = 0, len = gdjs._493Code.GDBarraMoradaAzulObjects1.length ;i < len;++i) {
    gdjs._493Code.GDBarraMoradaAzulObjects1[i].getBehavior("DraggableSliderControl").SetValue(15, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs._493Code.GDMousePointObjects1.length ;i < len;++i) {
    gdjs._493Code.GDMousePointObjects1[i].hide();
}
}{for(var i = 0, len = gdjs._493Code.GDOpcionesObjects1.length ;i < len;++i) {
    gdjs._493Code.GDOpcionesObjects1[i].pauseAnimation();
}
}{for(var i = 0, len = gdjs._493Code.GDOpcionesObjects1.length ;i < len;++i) {
    gdjs._493Code.GDOpcionesObjects1[i].setAnimationFrame(0);
}
}{for(var i = 0, len = gdjs._493Code.GDIMG_9595PreguntaObjects1.length ;i < len;++i) {
    gdjs._493Code.GDIMG_9595PreguntaObjects1[i].getBehavior("Tween").addObjectScaleTween("Thumb", 0.5, 0.5, "linear", 1, false, true);
}
}
{ //Subevents
gdjs._493Code.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Opciones"), gdjs._493Code.GDOpcionesObjects1);

for (gdjs._493Code.forEachIndex2 = 0;gdjs._493Code.forEachIndex2 < gdjs._493Code.GDOpcionesObjects1.length;++gdjs._493Code.forEachIndex2) {
gdjs._493Code.GDOpcionesObjects2.length = 0;


gdjs._493Code.forEachTemporary2 = gdjs._493Code.GDOpcionesObjects1[gdjs._493Code.forEachIndex2];
gdjs._493Code.GDOpcionesObjects2.push(gdjs._493Code.forEachTemporary2);
let isConditionTrue_0 = false;
if (true) {

{ //Subevents: 
gdjs._493Code.eventsList3(runtimeScene);} //Subevents end.
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {

{ //Subevents
gdjs._493Code.eventsList4(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("MousePoint"), gdjs._493Code.GDMousePointObjects1);
{for(var i = 0, len = gdjs._493Code.GDMousePointObjects1.length ;i < len;++i) {
    gdjs._493Code.GDMousePointObjects1[i].setPosition(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0),gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Siguiente"), gdjs._493Code.GDSiguienteObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._493Code.mapOfGDgdjs_9546_9595493Code_9546GDSiguienteObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._493Code.GDSiguienteObjects1.length;i<l;++i) {
    if ( gdjs._493Code.GDSiguienteObjects1[i].getOpacity() == 255 ) {
        isConditionTrue_0 = true;
        gdjs._493Code.GDSiguienteObjects1[k] = gdjs._493Code.GDSiguienteObjects1[i];
        ++k;
    }
}
gdjs._493Code.GDSiguienteObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(21128116);
}
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().get("User").getChild("DondeTeSientesMejor").setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0)));
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "14", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Opciones"), gdjs._493Code.GDOpcionesObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._493Code.GDOpcionesObjects1.length;i<l;++i) {
    if ( gdjs._493Code.GDOpcionesObjects1[i].getAnimationFrame() == 1 ) {
        isConditionTrue_0 = true;
        gdjs._493Code.GDOpcionesObjects1[k] = gdjs._493Code.GDOpcionesObjects1[i];
        ++k;
    }
}
gdjs._493Code.GDOpcionesObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.getPickedInstancesCount(gdjs._493Code.mapOfGDgdjs_9546_9595493Code_9546GDOpcionesObjects1Objects) >= 2;
}
if (isConditionTrue_0) {
/* Reuse gdjs._493Code.GDOpcionesObjects1 */
{for(var i = 0, len = gdjs._493Code.GDOpcionesObjects1.length ;i < len;++i) {
    gdjs._493Code.GDOpcionesObjects1[i].getBehavior("Tween").addObjectScaleTween("XD2", 1, 1, "linear", 100, false, true);
}
}{for(var i = 0, len = gdjs._493Code.GDOpcionesObjects1.length ;i < len;++i) {
    gdjs._493Code.GDOpcionesObjects1[i].setAnimationFrame(0);
}
}}

}


};

gdjs._493Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._493Code.GDOpcionesObjects1.length = 0;
gdjs._493Code.GDOpcionesObjects2.length = 0;
gdjs._493Code.GDOpcionesObjects3.length = 0;
gdjs._493Code.GDOpcionesObjects4.length = 0;
gdjs._493Code.GDOpcionesObjects5.length = 0;
gdjs._493Code.GDOpcionesObjects6.length = 0;
gdjs._493Code.GDIMG_9595PreguntaObjects1.length = 0;
gdjs._493Code.GDIMG_9595PreguntaObjects2.length = 0;
gdjs._493Code.GDIMG_9595PreguntaObjects3.length = 0;
gdjs._493Code.GDIMG_9595PreguntaObjects4.length = 0;
gdjs._493Code.GDIMG_9595PreguntaObjects5.length = 0;
gdjs._493Code.GDIMG_9595PreguntaObjects6.length = 0;
gdjs._493Code.GDFondoObjects1.length = 0;
gdjs._493Code.GDFondoObjects2.length = 0;
gdjs._493Code.GDFondoObjects3.length = 0;
gdjs._493Code.GDFondoObjects4.length = 0;
gdjs._493Code.GDFondoObjects5.length = 0;
gdjs._493Code.GDFondoObjects6.length = 0;
gdjs._493Code.GDBarraMoradaAzulObjects1.length = 0;
gdjs._493Code.GDBarraMoradaAzulObjects2.length = 0;
gdjs._493Code.GDBarraMoradaAzulObjects3.length = 0;
gdjs._493Code.GDBarraMoradaAzulObjects4.length = 0;
gdjs._493Code.GDBarraMoradaAzulObjects5.length = 0;
gdjs._493Code.GDBarraMoradaAzulObjects6.length = 0;
gdjs._493Code.GDMousePointObjects1.length = 0;
gdjs._493Code.GDMousePointObjects2.length = 0;
gdjs._493Code.GDMousePointObjects3.length = 0;
gdjs._493Code.GDMousePointObjects4.length = 0;
gdjs._493Code.GDMousePointObjects5.length = 0;
gdjs._493Code.GDMousePointObjects6.length = 0;
gdjs._493Code.GDSiguienteObjects1.length = 0;
gdjs._493Code.GDSiguienteObjects2.length = 0;
gdjs._493Code.GDSiguienteObjects3.length = 0;
gdjs._493Code.GDSiguienteObjects4.length = 0;
gdjs._493Code.GDSiguienteObjects5.length = 0;
gdjs._493Code.GDSiguienteObjects6.length = 0;

gdjs._493Code.eventsList5(runtimeScene);
gdjs._493Code.GDOpcionesObjects1.length = 0;
gdjs._493Code.GDOpcionesObjects2.length = 0;
gdjs._493Code.GDOpcionesObjects3.length = 0;
gdjs._493Code.GDOpcionesObjects4.length = 0;
gdjs._493Code.GDOpcionesObjects5.length = 0;
gdjs._493Code.GDOpcionesObjects6.length = 0;
gdjs._493Code.GDIMG_9595PreguntaObjects1.length = 0;
gdjs._493Code.GDIMG_9595PreguntaObjects2.length = 0;
gdjs._493Code.GDIMG_9595PreguntaObjects3.length = 0;
gdjs._493Code.GDIMG_9595PreguntaObjects4.length = 0;
gdjs._493Code.GDIMG_9595PreguntaObjects5.length = 0;
gdjs._493Code.GDIMG_9595PreguntaObjects6.length = 0;
gdjs._493Code.GDFondoObjects1.length = 0;
gdjs._493Code.GDFondoObjects2.length = 0;
gdjs._493Code.GDFondoObjects3.length = 0;
gdjs._493Code.GDFondoObjects4.length = 0;
gdjs._493Code.GDFondoObjects5.length = 0;
gdjs._493Code.GDFondoObjects6.length = 0;
gdjs._493Code.GDBarraMoradaAzulObjects1.length = 0;
gdjs._493Code.GDBarraMoradaAzulObjects2.length = 0;
gdjs._493Code.GDBarraMoradaAzulObjects3.length = 0;
gdjs._493Code.GDBarraMoradaAzulObjects4.length = 0;
gdjs._493Code.GDBarraMoradaAzulObjects5.length = 0;
gdjs._493Code.GDBarraMoradaAzulObjects6.length = 0;
gdjs._493Code.GDMousePointObjects1.length = 0;
gdjs._493Code.GDMousePointObjects2.length = 0;
gdjs._493Code.GDMousePointObjects3.length = 0;
gdjs._493Code.GDMousePointObjects4.length = 0;
gdjs._493Code.GDMousePointObjects5.length = 0;
gdjs._493Code.GDMousePointObjects6.length = 0;
gdjs._493Code.GDSiguienteObjects1.length = 0;
gdjs._493Code.GDSiguienteObjects2.length = 0;
gdjs._493Code.GDSiguienteObjects3.length = 0;
gdjs._493Code.GDSiguienteObjects4.length = 0;
gdjs._493Code.GDSiguienteObjects5.length = 0;
gdjs._493Code.GDSiguienteObjects6.length = 0;


return;

}

gdjs['_493Code'] = gdjs._493Code;
