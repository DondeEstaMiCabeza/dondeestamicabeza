gdjs.Old2Code = {};
gdjs.Old2Code.localVariables = [];
gdjs.Old2Code.GDEdadNumberObjects1_1final = [];

gdjs.Old2Code.forEachIndex2 = 0;

gdjs.Old2Code.forEachObjects2 = [];

gdjs.Old2Code.forEachTemporary2 = null;

gdjs.Old2Code.forEachTotalCount2 = 0;

gdjs.Old2Code.GDRespuestaEntryObjects1= [];
gdjs.Old2Code.GDRespuestaEntryObjects2= [];
gdjs.Old2Code.GDRespuestaEntryObjects3= [];
gdjs.Old2Code.GDRespuestaEntryObjects4= [];
gdjs.Old2Code.GDRespuestaEntryObjects5= [];
gdjs.Old2Code.GDRespuestaEntryObjects6= [];
gdjs.Old2Code.GDIMG_9595PreguntasObjects1= [];
gdjs.Old2Code.GDIMG_9595PreguntasObjects2= [];
gdjs.Old2Code.GDIMG_9595PreguntasObjects3= [];
gdjs.Old2Code.GDIMG_9595PreguntasObjects4= [];
gdjs.Old2Code.GDIMG_9595PreguntasObjects5= [];
gdjs.Old2Code.GDIMG_9595PreguntasObjects6= [];
gdjs.Old2Code.GDSiguienteObjects1= [];
gdjs.Old2Code.GDSiguienteObjects2= [];
gdjs.Old2Code.GDSiguienteObjects3= [];
gdjs.Old2Code.GDSiguienteObjects4= [];
gdjs.Old2Code.GDSiguienteObjects5= [];
gdjs.Old2Code.GDSiguienteObjects6= [];
gdjs.Old2Code.GDBarraRojoBlancoObjects1= [];
gdjs.Old2Code.GDBarraRojoBlancoObjects2= [];
gdjs.Old2Code.GDBarraRojoBlancoObjects3= [];
gdjs.Old2Code.GDBarraRojoBlancoObjects4= [];
gdjs.Old2Code.GDBarraRojoBlancoObjects5= [];
gdjs.Old2Code.GDBarraRojoBlancoObjects6= [];
gdjs.Old2Code.GDFondoObjects1= [];
gdjs.Old2Code.GDFondoObjects2= [];
gdjs.Old2Code.GDFondoObjects3= [];
gdjs.Old2Code.GDFondoObjects4= [];
gdjs.Old2Code.GDFondoObjects5= [];
gdjs.Old2Code.GDFondoObjects6= [];
gdjs.Old2Code.GDThumbObjects1= [];
gdjs.Old2Code.GDThumbObjects2= [];
gdjs.Old2Code.GDThumbObjects3= [];
gdjs.Old2Code.GDThumbObjects4= [];
gdjs.Old2Code.GDThumbObjects5= [];
gdjs.Old2Code.GDThumbObjects6= [];
gdjs.Old2Code.GDEdadNumberObjects1= [];
gdjs.Old2Code.GDEdadNumberObjects2= [];
gdjs.Old2Code.GDEdadNumberObjects3= [];
gdjs.Old2Code.GDEdadNumberObjects4= [];
gdjs.Old2Code.GDEdadNumberObjects5= [];
gdjs.Old2Code.GDEdadNumberObjects6= [];
gdjs.Old2Code.GDEdadNumber2Objects1= [];
gdjs.Old2Code.GDEdadNumber2Objects2= [];
gdjs.Old2Code.GDEdadNumber2Objects3= [];
gdjs.Old2Code.GDEdadNumber2Objects4= [];
gdjs.Old2Code.GDEdadNumber2Objects5= [];
gdjs.Old2Code.GDEdadNumber2Objects6= [];
gdjs.Old2Code.GDOpcionesObjects1= [];
gdjs.Old2Code.GDOpcionesObjects2= [];
gdjs.Old2Code.GDOpcionesObjects3= [];
gdjs.Old2Code.GDOpcionesObjects4= [];
gdjs.Old2Code.GDOpcionesObjects5= [];
gdjs.Old2Code.GDOpcionesObjects6= [];
gdjs.Old2Code.GDMousePointObjects1= [];
gdjs.Old2Code.GDMousePointObjects2= [];
gdjs.Old2Code.GDMousePointObjects3= [];
gdjs.Old2Code.GDMousePointObjects4= [];
gdjs.Old2Code.GDMousePointObjects5= [];
gdjs.Old2Code.GDMousePointObjects6= [];
gdjs.Old2Code.GDSliderEdadObjects1= [];
gdjs.Old2Code.GDSliderEdadObjects2= [];
gdjs.Old2Code.GDSliderEdadObjects3= [];
gdjs.Old2Code.GDSliderEdadObjects4= [];
gdjs.Old2Code.GDSliderEdadObjects5= [];
gdjs.Old2Code.GDSliderEdadObjects6= [];
gdjs.Old2Code.GDFondoEdadObjects1= [];
gdjs.Old2Code.GDFondoEdadObjects2= [];
gdjs.Old2Code.GDFondoEdadObjects3= [];
gdjs.Old2Code.GDFondoEdadObjects4= [];
gdjs.Old2Code.GDFondoEdadObjects5= [];
gdjs.Old2Code.GDFondoEdadObjects6= [];
gdjs.Old2Code.GDNewSpriteObjects1= [];
gdjs.Old2Code.GDNewSpriteObjects2= [];
gdjs.Old2Code.GDNewSpriteObjects3= [];
gdjs.Old2Code.GDNewSpriteObjects4= [];
gdjs.Old2Code.GDNewSpriteObjects5= [];
gdjs.Old2Code.GDNewSpriteObjects6= [];


gdjs.Old2Code.asyncCallback24380300 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Old2Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("RespuestaEntry"), gdjs.Old2Code.GDRespuestaEntryObjects3);

{for(var i = 0, len = gdjs.Old2Code.GDRespuestaEntryObjects3.length ;i < len;++i) {
    gdjs.Old2Code.GDRespuestaEntryObjects3[i].getBehavior("Tween").addObjectOpacityTween("ThumbAO", 255, "linear", 400, false);
}
}gdjs.Old2Code.localVariables.length = 0;
}
gdjs.Old2Code.eventsList0 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.Old2Code.localVariables);
/* Don't save RespuestaEntry as it will be provided by the parent asyncObjectsList. */
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.3), (runtimeScene) => (gdjs.Old2Code.asyncCallback24380300(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Old2Code.asyncCallback24380052 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Old2Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("IMG_Preguntas"), gdjs.Old2Code.GDIMG_9595PreguntasObjects2);

{for(var i = 0, len = gdjs.Old2Code.GDIMG_9595PreguntasObjects2.length ;i < len;++i) {
    gdjs.Old2Code.GDIMG_9595PreguntasObjects2[i].getBehavior("Tween").addObjectScaleTween("Thumb", 1, 1, "swingFromTo", 400, false, true);
}
}
{ //Subevents
gdjs.Old2Code.eventsList0(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.Old2Code.localVariables.length = 0;
}
gdjs.Old2Code.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Old2Code.localVariables);
for (const obj of gdjs.Old2Code.GDIMG_9595PreguntasObjects1) asyncObjectsList.addObject("IMG_Preguntas", obj);
for (const obj of gdjs.Old2Code.GDRespuestaEntryObjects1) asyncObjectsList.addObject("RespuestaEntry", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.3), (runtimeScene) => (gdjs.Old2Code.asyncCallback24380052(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Old2Code.mapOfGDgdjs_9546Old2Code_9546GDSiguienteObjects1Objects = Hashtable.newFrom({"Siguiente": gdjs.Old2Code.GDSiguienteObjects1});
gdjs.Old2Code.mapOfGDgdjs_9546Old2Code_9546GDOpcionesObjects4Objects = Hashtable.newFrom({"Opciones": gdjs.Old2Code.GDOpcionesObjects4});
gdjs.Old2Code.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.Old2Code.GDOpcionesObjects4, gdjs.Old2Code.GDOpcionesObjects5);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Old2Code.GDOpcionesObjects5.length;i<l;++i) {
    if ( gdjs.Old2Code.GDOpcionesObjects5[i].getVariableNumber(gdjs.Old2Code.GDOpcionesObjects5[i].getVariables().getFromIndex(0)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.Old2Code.GDOpcionesObjects5[k] = gdjs.Old2Code.GDOpcionesObjects5[i];
        ++k;
    }
}
gdjs.Old2Code.GDOpcionesObjects5.length = k;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("Seleccion").setString("Indigena");
}}

}


{

gdjs.copyArray(gdjs.Old2Code.GDOpcionesObjects4, gdjs.Old2Code.GDOpcionesObjects5);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Old2Code.GDOpcionesObjects5.length;i<l;++i) {
    if ( gdjs.Old2Code.GDOpcionesObjects5[i].getVariableNumber(gdjs.Old2Code.GDOpcionesObjects5[i].getVariables().getFromIndex(0)) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.Old2Code.GDOpcionesObjects5[k] = gdjs.Old2Code.GDOpcionesObjects5[i];
        ++k;
    }
}
gdjs.Old2Code.GDOpcionesObjects5.length = k;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("Seleccion").setString("Afro");
}}

}


{

gdjs.copyArray(gdjs.Old2Code.GDOpcionesObjects4, gdjs.Old2Code.GDOpcionesObjects5);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Old2Code.GDOpcionesObjects5.length;i<l;++i) {
    if ( gdjs.Old2Code.GDOpcionesObjects5[i].getVariableNumber(gdjs.Old2Code.GDOpcionesObjects5[i].getVariables().getFromIndex(0)) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.Old2Code.GDOpcionesObjects5[k] = gdjs.Old2Code.GDOpcionesObjects5[i];
        ++k;
    }
}
gdjs.Old2Code.GDOpcionesObjects5.length = k;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("Seleccion").setString("Mestizo");
}}

}


{

gdjs.copyArray(gdjs.Old2Code.GDOpcionesObjects4, gdjs.Old2Code.GDOpcionesObjects5);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Old2Code.GDOpcionesObjects5.length;i<l;++i) {
    if ( gdjs.Old2Code.GDOpcionesObjects5[i].getVariableNumber(gdjs.Old2Code.GDOpcionesObjects5[i].getVariables().getFromIndex(0)) == 4 ) {
        isConditionTrue_0 = true;
        gdjs.Old2Code.GDOpcionesObjects5[k] = gdjs.Old2Code.GDOpcionesObjects5[i];
        ++k;
    }
}
gdjs.Old2Code.GDOpcionesObjects5.length = k;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("Seleccion").setString("Blanco");
}}

}


{

/* Reuse gdjs.Old2Code.GDOpcionesObjects4 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Old2Code.GDOpcionesObjects4.length;i<l;++i) {
    if ( gdjs.Old2Code.GDOpcionesObjects4[i].getVariableNumber(gdjs.Old2Code.GDOpcionesObjects4[i].getVariables().getFromIndex(0)) == 5 ) {
        isConditionTrue_0 = true;
        gdjs.Old2Code.GDOpcionesObjects4[k] = gdjs.Old2Code.GDOpcionesObjects4[i];
        ++k;
    }
}
gdjs.Old2Code.GDOpcionesObjects4.length = k;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("Seleccion").setString("Otro");
}}

}


};gdjs.Old2Code.mapOfGDgdjs_9546Old2Code_9546GDMousePointObjects3Objects = Hashtable.newFrom({"MousePoint": gdjs.Old2Code.GDMousePointObjects3});
gdjs.Old2Code.mapOfGDgdjs_9546Old2Code_9546GDSliderEdadObjects3Objects = Hashtable.newFrom({"SliderEdad": gdjs.Old2Code.GDSliderEdadObjects3});
gdjs.Old2Code.mapOfGDgdjs_9546Old2Code_9546GDMousePointObjects3Objects = Hashtable.newFrom({"MousePoint": gdjs.Old2Code.GDMousePointObjects3});
gdjs.Old2Code.mapOfGDgdjs_9546Old2Code_9546GDOpcionesObjects3Objects = Hashtable.newFrom({"Opciones": gdjs.Old2Code.GDOpcionesObjects3});
gdjs.Old2Code.mapOfGDgdjs_9546Old2Code_9546GDMousePointObjects3Objects = Hashtable.newFrom({"MousePoint": gdjs.Old2Code.GDMousePointObjects3});
gdjs.Old2Code.mapOfGDgdjs_9546Old2Code_9546GDRespuestaEntryObjects3Objects = Hashtable.newFrom({"RespuestaEntry": gdjs.Old2Code.GDRespuestaEntryObjects3});
gdjs.Old2Code.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.Old2Code.GDOpcionesObjects2, gdjs.Old2Code.GDOpcionesObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Old2Code.mapOfGDgdjs_9546Old2Code_9546GDOpcionesObjects4Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Old2Code.GDOpcionesObjects4.length;i<l;++i) {
    if ( gdjs.Old2Code.GDOpcionesObjects4[i].getScaleY() == 1 ) {
        isConditionTrue_0 = true;
        gdjs.Old2Code.GDOpcionesObjects4[k] = gdjs.Old2Code.GDOpcionesObjects4[i];
        ++k;
    }
}
gdjs.Old2Code.GDOpcionesObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(24386500);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Old2Code.GDOpcionesObjects4 */
{for(var i = 0, len = gdjs.Old2Code.GDOpcionesObjects4.length ;i < len;++i) {
    gdjs.Old2Code.GDOpcionesObjects4[i].getBehavior("Tween").addObjectScaleTween("XD", 1.1, 1.1, "linear", 100, false, true);
}
}{for(var i = 0, len = gdjs.Old2Code.GDOpcionesObjects4.length ;i < len;++i) {
    gdjs.Old2Code.GDOpcionesObjects4[i].setAnimationFrame(1);
}
}
{ //Subevents
gdjs.Old2Code.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("MousePoint"), gdjs.Old2Code.GDMousePointObjects3);
gdjs.copyArray(gdjs.Old2Code.GDOpcionesObjects2, gdjs.Old2Code.GDOpcionesObjects3);

gdjs.copyArray(runtimeScene.getObjects("RespuestaEntry"), gdjs.Old2Code.GDRespuestaEntryObjects3);
gdjs.copyArray(runtimeScene.getObjects("SliderEdad"), gdjs.Old2Code.GDSliderEdadObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Old2Code.mapOfGDgdjs_9546Old2Code_9546GDMousePointObjects3Objects, gdjs.Old2Code.mapOfGDgdjs_9546Old2Code_9546GDSliderEdadObjects3Objects, true, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Old2Code.mapOfGDgdjs_9546Old2Code_9546GDMousePointObjects3Objects, gdjs.Old2Code.mapOfGDgdjs_9546Old2Code_9546GDOpcionesObjects3Objects, true, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Old2Code.mapOfGDgdjs_9546Old2Code_9546GDMousePointObjects3Objects, gdjs.Old2Code.mapOfGDgdjs_9546Old2Code_9546GDRespuestaEntryObjects3Objects, true, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Old2Code.GDOpcionesObjects3.length;i<l;++i) {
    if ( gdjs.Old2Code.GDOpcionesObjects3[i].getScaleY() == 1.1 ) {
        isConditionTrue_0 = true;
        gdjs.Old2Code.GDOpcionesObjects3[k] = gdjs.Old2Code.GDOpcionesObjects3[i];
        ++k;
    }
}
gdjs.Old2Code.GDOpcionesObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(24391708);
}
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Old2Code.GDOpcionesObjects3 */
{for(var i = 0, len = gdjs.Old2Code.GDOpcionesObjects3.length ;i < len;++i) {
    gdjs.Old2Code.GDOpcionesObjects3[i].getBehavior("Tween").addObjectScaleTween("XD2", 1, 1, "linear", 100, false, true);
}
}{runtimeScene.getScene().getVariables().getFromIndex(3).setNumber(0);
}{for(var i = 0, len = gdjs.Old2Code.GDOpcionesObjects3.length ;i < len;++i) {
    gdjs.Old2Code.GDOpcionesObjects3[i].setAnimationFrame(0);
}
}}

}


};gdjs.Old2Code.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {

{ //Subevents
gdjs.Old2Code.eventsList3(runtimeScene);} //End of subevents
}

}


};gdjs.Old2Code.eventsList5 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.Old2Code.GDEdadNumberObjects2, gdjs.Old2Code.GDEdadNumberObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.common.toNumber((( gdjs.Old2Code.GDEdadNumberObjects3.length === 0 ) ? "" :gdjs.Old2Code.GDEdadNumberObjects3[0].getString())) <= 9);
}
if (isConditionTrue_0) {
/* Reuse gdjs.Old2Code.GDEdadNumberObjects3 */
gdjs.copyArray(gdjs.Old2Code.GDSliderEdadObjects1, gdjs.Old2Code.GDSliderEdadObjects3);

{for(var i = 0, len = gdjs.Old2Code.GDEdadNumberObjects3.length ;i < len;++i) {
    gdjs.Old2Code.GDEdadNumberObjects3[i].setX((( gdjs.Old2Code.GDSliderEdadObjects3.length === 0 ) ? 0 :gdjs.Old2Code.GDSliderEdadObjects3[0].getX()) + ((( gdjs.Old2Code.GDSliderEdadObjects3.length === 0 ) ? 0 :gdjs.Old2Code.GDSliderEdadObjects3[0].getBehavior("DraggableSliderControl")._getThumbOffset())) - (20 - (gdjs.Old2Code.GDEdadNumberObjects3[i].getWidth()) / 2));
}
}}

}


{

/* Reuse gdjs.Old2Code.GDEdadNumberObjects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.common.toNumber((( gdjs.Old2Code.GDEdadNumberObjects2.length === 0 ) ? "" :gdjs.Old2Code.GDEdadNumberObjects2[0].getString())) >= 10);
}
if (isConditionTrue_0) {
/* Reuse gdjs.Old2Code.GDEdadNumberObjects2 */
gdjs.copyArray(gdjs.Old2Code.GDSliderEdadObjects1, gdjs.Old2Code.GDSliderEdadObjects2);

{for(var i = 0, len = gdjs.Old2Code.GDEdadNumberObjects2.length ;i < len;++i) {
    gdjs.Old2Code.GDEdadNumberObjects2[i].setX((( gdjs.Old2Code.GDSliderEdadObjects2.length === 0 ) ? 0 :gdjs.Old2Code.GDSliderEdadObjects2[0].getBehavior("DraggableSliderControl")._getThumbOffset()) + 75);
}
}}

}


};gdjs.Old2Code.eventsList6 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.Old2Code.GDEdadNumberObjects1, gdjs.Old2Code.GDEdadNumberObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.common.toNumber((( gdjs.Old2Code.GDEdadNumberObjects2.length === 0 ) ? "" :gdjs.Old2Code.GDEdadNumberObjects2[0].getString())) <= 9);
}
if (isConditionTrue_0) {
/* Reuse gdjs.Old2Code.GDEdadNumberObjects2 */
gdjs.copyArray(gdjs.Old2Code.GDFondoEdadObjects1, gdjs.Old2Code.GDFondoEdadObjects2);

{for(var i = 0, len = gdjs.Old2Code.GDEdadNumberObjects2.length ;i < len;++i) {
    gdjs.Old2Code.GDEdadNumberObjects2[i].setX((( gdjs.Old2Code.GDFondoEdadObjects2.length === 0 ) ? 0 :gdjs.Old2Code.GDFondoEdadObjects2[0].getPointX("")) - 12);
}
}}

}


{

/* Reuse gdjs.Old2Code.GDEdadNumberObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.common.toNumber((( gdjs.Old2Code.GDEdadNumberObjects1.length === 0 ) ? "" :gdjs.Old2Code.GDEdadNumberObjects1[0].getString())) >= 10);
}
if (isConditionTrue_0) {
/* Reuse gdjs.Old2Code.GDEdadNumberObjects1 */
/* Reuse gdjs.Old2Code.GDFondoEdadObjects1 */
{for(var i = 0, len = gdjs.Old2Code.GDEdadNumberObjects1.length ;i < len;++i) {
    gdjs.Old2Code.GDEdadNumberObjects1[i].setX((( gdjs.Old2Code.GDFondoEdadObjects1.length === 0 ) ? 0 :gdjs.Old2Code.GDFondoEdadObjects1[0].getPointX("")) - 28);
}
}}

}


};gdjs.Old2Code.eventsList7 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.Old2Code.GDEdadNumberObjects1, gdjs.Old2Code.GDEdadNumberObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Old2Code.GDEdadNumberObjects2.length;i<l;++i) {
    if ( gdjs.Old2Code.GDEdadNumberObjects2[i].getScaleX() == 1 ) {
        isConditionTrue_0 = true;
        gdjs.Old2Code.GDEdadNumberObjects2[k] = gdjs.Old2Code.GDEdadNumberObjects2[i];
        ++k;
    }
}
gdjs.Old2Code.GDEdadNumberObjects2.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.Old2Code.eventsList5(runtimeScene);} //End of subevents
}

}


{

/* Reuse gdjs.Old2Code.GDEdadNumberObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Old2Code.GDEdadNumberObjects1.length;i<l;++i) {
    if ( gdjs.Old2Code.GDEdadNumberObjects1[i].getScaleX() != 1 ) {
        isConditionTrue_0 = true;
        gdjs.Old2Code.GDEdadNumberObjects1[k] = gdjs.Old2Code.GDEdadNumberObjects1[i];
        ++k;
    }
}
gdjs.Old2Code.GDEdadNumberObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{gdjs.Old2Code.GDEdadNumberObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.Old2Code.GDEdadNumberObjects1, gdjs.Old2Code.GDEdadNumberObjects2);

for (var i = 0, k = 0, l = gdjs.Old2Code.GDEdadNumberObjects2.length;i<l;++i) {
    if ( !(gdjs.Old2Code.GDEdadNumberObjects2[i].getBehavior("Tween").isPlaying("Thumb3")) ) {
        isConditionTrue_1 = true;
        gdjs.Old2Code.GDEdadNumberObjects2[k] = gdjs.Old2Code.GDEdadNumberObjects2[i];
        ++k;
    }
}
gdjs.Old2Code.GDEdadNumberObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Old2Code.GDEdadNumberObjects2.length; j < jLen ; ++j) {
        if ( gdjs.Old2Code.GDEdadNumberObjects1_1final.indexOf(gdjs.Old2Code.GDEdadNumberObjects2[j]) === -1 )
            gdjs.Old2Code.GDEdadNumberObjects1_1final.push(gdjs.Old2Code.GDEdadNumberObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.Old2Code.GDEdadNumberObjects1, gdjs.Old2Code.GDEdadNumberObjects2);

for (var i = 0, k = 0, l = gdjs.Old2Code.GDEdadNumberObjects2.length;i<l;++i) {
    if ( !(gdjs.Old2Code.GDEdadNumberObjects2[i].getBehavior("Tween").isPlaying("Thumb4")) ) {
        isConditionTrue_1 = true;
        gdjs.Old2Code.GDEdadNumberObjects2[k] = gdjs.Old2Code.GDEdadNumberObjects2[i];
        ++k;
    }
}
gdjs.Old2Code.GDEdadNumberObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Old2Code.GDEdadNumberObjects2.length; j < jLen ; ++j) {
        if ( gdjs.Old2Code.GDEdadNumberObjects1_1final.indexOf(gdjs.Old2Code.GDEdadNumberObjects2[j]) === -1 )
            gdjs.Old2Code.GDEdadNumberObjects1_1final.push(gdjs.Old2Code.GDEdadNumberObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.Old2Code.GDEdadNumberObjects1_1final, gdjs.Old2Code.GDEdadNumberObjects1);
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.Old2Code.eventsList6(runtimeScene);} //End of subevents
}

}


};gdjs.Old2Code.mapOfGDgdjs_9546Old2Code_9546GDSliderEdadObjects1Objects = Hashtable.newFrom({"SliderEdad": gdjs.Old2Code.GDSliderEdadObjects1});
gdjs.Old2Code.eventsList8 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("EdadNumber"), gdjs.Old2Code.GDEdadNumberObjects1);
gdjs.copyArray(runtimeScene.getObjects("FondoEdad"), gdjs.Old2Code.GDFondoEdadObjects1);
{for(var i = 0, len = gdjs.Old2Code.GDFondoEdadObjects1.length ;i < len;++i) {
    gdjs.Old2Code.GDFondoEdadObjects1[i].getBehavior("Tween").addObjectScaleTween("Thumb", 1, 1, "linear", 100, false, false);
}
}{for(var i = 0, len = gdjs.Old2Code.GDEdadNumberObjects1.length ;i < len;++i) {
    gdjs.Old2Code.GDEdadNumberObjects1[i].getBehavior("Tween").addObjectScaleTween("Thumb", 1, 1, "linear", 100, false, true);
}
}}

}


};gdjs.Old2Code.eventsList9 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.Old2Code.GDEdadNumberObjects1, gdjs.Old2Code.GDEdadNumberObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.common.toNumber((( gdjs.Old2Code.GDEdadNumberObjects2.length === 0 ) ? "" :gdjs.Old2Code.GDEdadNumberObjects2[0].getString())) <= 9);
}
if (isConditionTrue_0) {
/* Reuse gdjs.Old2Code.GDEdadNumberObjects2 */
gdjs.copyArray(gdjs.Old2Code.GDFondoEdadObjects1, gdjs.Old2Code.GDFondoEdadObjects2);

{for(var i = 0, len = gdjs.Old2Code.GDEdadNumberObjects2.length ;i < len;++i) {
    gdjs.Old2Code.GDEdadNumberObjects2[i].getBehavior("Tween").addObjectPositionXTween("Thumb3", (( gdjs.Old2Code.GDFondoEdadObjects2.length === 0 ) ? 0 :gdjs.Old2Code.GDFondoEdadObjects2[0].getPointX("")) - 12, "linear", 50, false);
}
}}

}


{

/* Reuse gdjs.Old2Code.GDEdadNumberObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.common.toNumber((( gdjs.Old2Code.GDEdadNumberObjects1.length === 0 ) ? "" :gdjs.Old2Code.GDEdadNumberObjects1[0].getString())) >= 10);
}
if (isConditionTrue_0) {
/* Reuse gdjs.Old2Code.GDEdadNumberObjects1 */
/* Reuse gdjs.Old2Code.GDFondoEdadObjects1 */
{for(var i = 0, len = gdjs.Old2Code.GDEdadNumberObjects1.length ;i < len;++i) {
    gdjs.Old2Code.GDEdadNumberObjects1[i].getBehavior("Tween").addObjectPositionXTween("Thumb4", (( gdjs.Old2Code.GDFondoEdadObjects1.length === 0 ) ? 0 :gdjs.Old2Code.GDFondoEdadObjects1[0].getPointX("")) - 28, "linear", 50, false);
}
}}

}


};gdjs.Old2Code.eventsList10 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("EdadNumber"), gdjs.Old2Code.GDEdadNumberObjects1);
gdjs.copyArray(runtimeScene.getObjects("FondoEdad"), gdjs.Old2Code.GDFondoEdadObjects1);
{for(var i = 0, len = gdjs.Old2Code.GDFondoEdadObjects1.length ;i < len;++i) {
    gdjs.Old2Code.GDFondoEdadObjects1[i].getBehavior("Tween").addObjectScaleTween("Thumb", 1.4, 1.4, "linear", 100, false, false);
}
}{for(var i = 0, len = gdjs.Old2Code.GDEdadNumberObjects1.length ;i < len;++i) {
    gdjs.Old2Code.GDEdadNumberObjects1[i].getBehavior("Tween").addObjectScaleTween("Thumb", 1.4, 1.4, "linear", 100, false, true);
}
}
{ //Subevents
gdjs.Old2Code.eventsList9(runtimeScene);} //End of subevents
}

}


};gdjs.Old2Code.eventsList11 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(24416444);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Thumb"), gdjs.Old2Code.GDThumbObjects1);
{for(var i = 0, len = gdjs.Old2Code.GDThumbObjects1.length ;i < len;++i) {
    gdjs.Old2Code.GDThumbObjects1[i].getBehavior("Tween").addObjectScaleTween("Thumb", 0.8, 0.8, "linear", 50, false, true);
}
}
{ //Subevents
gdjs.Old2Code.eventsList10(runtimeScene);} //End of subevents
}

}


};gdjs.Old2Code.mapOfGDgdjs_9546Old2Code_9546GDOpcionesObjects1Objects = Hashtable.newFrom({"Opciones": gdjs.Old2Code.GDOpcionesObjects1});
gdjs.Old2Code.eventsList12 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BarraRojoBlanco"), gdjs.Old2Code.GDBarraRojoBlancoObjects1);
gdjs.copyArray(runtimeScene.getObjects("IMG_Preguntas"), gdjs.Old2Code.GDIMG_9595PreguntasObjects1);
gdjs.copyArray(runtimeScene.getObjects("MousePoint"), gdjs.Old2Code.GDMousePointObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.Old2Code.GDNewSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("Opciones"), gdjs.Old2Code.GDOpcionesObjects1);
gdjs.copyArray(runtimeScene.getObjects("RespuestaEntry"), gdjs.Old2Code.GDRespuestaEntryObjects1);
gdjs.copyArray(runtimeScene.getObjects("Siguiente"), gdjs.Old2Code.GDSiguienteObjects1);
gdjs.copyArray(runtimeScene.getObjects("SliderEdad"), gdjs.Old2Code.GDSliderEdadObjects1);
gdjs.copyArray(runtimeScene.getObjects("Thumb"), gdjs.Old2Code.GDThumbObjects1);
{for(var i = 0, len = gdjs.Old2Code.GDBarraRojoBlancoObjects1.length ;i < len;++i) {
    gdjs.Old2Code.GDBarraRojoBlancoObjects1[i].getBehavior("DraggableSliderControl").SetValue(2, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Old2Code.GDSiguienteObjects1.length ;i < len;++i) {
    gdjs.Old2Code.GDSiguienteObjects1[i].setOpacity(150);
}
}{for(var i = 0, len = gdjs.Old2Code.GDSiguienteObjects1.length ;i < len;++i) {
    gdjs.Old2Code.GDSiguienteObjects1[i].getBehavior("Tween").addObjectScaleTween("as", 0.75, 0.75, "linear", 1, false, true);
}
}{for(var i = 0, len = gdjs.Old2Code.GDSiguienteObjects1.length ;i < len;++i) {
    gdjs.Old2Code.GDSiguienteObjects1[i].setAnimation(0);
}
}{for(var i = 0, len = gdjs.Old2Code.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.Old2Code.GDNewSpriteObjects1[i].getBehavior("Tween").addObjectOpacityTween("Thumb", 0, "linear", 200, true);
}
}{for(var i = 0, len = gdjs.Old2Code.GDRespuestaEntryObjects1.length ;i < len;++i) {
    gdjs.Old2Code.GDRespuestaEntryObjects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.Old2Code.GDMousePointObjects1.length ;i < len;++i) {
    gdjs.Old2Code.GDMousePointObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Old2Code.GDIMG_9595PreguntasObjects1.length ;i < len;++i) {
    gdjs.Old2Code.GDIMG_9595PreguntasObjects1[i].getBehavior("Tween").addObjectScaleTween("Thumb", 0.5, 0.5, "linear", 1, false, true);
}
}{for(var i = 0, len = gdjs.Old2Code.GDThumbObjects1.length ;i < len;++i) {
    gdjs.Old2Code.GDThumbObjects1[i].getBehavior("Tween").addObjectScaleTween("Thumb", 0.6, 0.6, "linear", 1, false, true);
}
}{for(var i = 0, len = gdjs.Old2Code.GDOpcionesObjects1.length ;i < len;++i) {
    gdjs.Old2Code.GDOpcionesObjects1[i].pauseAnimation();
}
}{for(var i = 0, len = gdjs.Old2Code.GDSliderEdadObjects1.length ;i < len;++i) {
    gdjs.Old2Code.GDSliderEdadObjects1[i].getBehavior("DraggableSliderControl").SetEnabled(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Old2Code.GDSiguienteObjects1.length ;i < len;++i) {
    gdjs.Old2Code.GDSiguienteObjects1[i].setAnimationFrame(0);
}
}
{ //Subevents
gdjs.Old2Code.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Siguiente"), gdjs.Old2Code.GDSiguienteObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Old2Code.mapOfGDgdjs_9546Old2Code_9546GDSiguienteObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Old2Code.GDSiguienteObjects1.length;i<l;++i) {
    if ( gdjs.Old2Code.GDSiguienteObjects1[i].getOpacity() == 255 ) {
        isConditionTrue_0 = true;
        gdjs.Old2Code.GDSiguienteObjects1[k] = gdjs.Old2Code.GDSiguienteObjects1[i];
        ++k;
    }
}
gdjs.Old2Code.GDSiguienteObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(24381572);
}
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("EdadNumber"), gdjs.Old2Code.GDEdadNumberObjects1);
gdjs.copyArray(runtimeScene.getObjects("RespuestaEntry"), gdjs.Old2Code.GDRespuestaEntryObjects1);
{runtimeScene.getGame().getVariables().get("User").getChild("Donde_Vives").setString((( gdjs.Old2Code.GDRespuestaEntryObjects1.length === 0 ) ? "" :gdjs.Old2Code.GDRespuestaEntryObjects1[0].getText()));
}{runtimeScene.getGame().getVariables().get("User").getChild("Edad").setString((( gdjs.Old2Code.GDEdadNumberObjects1.length === 0 ) ? "" :gdjs.Old2Code.GDEdadNumberObjects1[0].getString()));
}{runtimeScene.getGame().getVariables().get("User").getChild("Raza").setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("Seleccion")));
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "3", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("RespuestaEntry"), gdjs.Old2Code.GDRespuestaEntryObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Old2Code.GDRespuestaEntryObjects1.length;i<l;++i) {
    if ( gdjs.Old2Code.GDRespuestaEntryObjects1[i].getText() != "" ) {
        isConditionTrue_0 = true;
        gdjs.Old2Code.GDRespuestaEntryObjects1[k] = gdjs.Old2Code.GDRespuestaEntryObjects1[i];
        ++k;
    }
}
gdjs.Old2Code.GDRespuestaEntryObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(24384412);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(5).setNumber(1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Opciones"), gdjs.Old2Code.GDOpcionesObjects1);

for (gdjs.Old2Code.forEachIndex2 = 0;gdjs.Old2Code.forEachIndex2 < gdjs.Old2Code.GDOpcionesObjects1.length;++gdjs.Old2Code.forEachIndex2) {
gdjs.Old2Code.GDOpcionesObjects2.length = 0;


gdjs.Old2Code.forEachTemporary2 = gdjs.Old2Code.GDOpcionesObjects1[gdjs.Old2Code.forEachIndex2];
gdjs.Old2Code.GDOpcionesObjects2.push(gdjs.Old2Code.forEachTemporary2);
let isConditionTrue_0 = false;
if (true) {

{ //Subevents: 
gdjs.Old2Code.eventsList4(runtimeScene);} //Subevents end.
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Opciones"), gdjs.Old2Code.GDOpcionesObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Old2Code.GDOpcionesObjects1.length;i<l;++i) {
    if ( gdjs.Old2Code.GDOpcionesObjects1[i].getScaleY() == 1.1 ) {
        isConditionTrue_0 = true;
        gdjs.Old2Code.GDOpcionesObjects1[k] = gdjs.Old2Code.GDOpcionesObjects1[i];
        ++k;
    }
}
gdjs.Old2Code.GDOpcionesObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(24393012);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(3).add(1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(5)) + gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(4)) + gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(3)) != 3);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(24394612);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Siguiente"), gdjs.Old2Code.GDSiguienteObjects1);
{for(var i = 0, len = gdjs.Old2Code.GDSiguienteObjects1.length ;i < len;++i) {
    gdjs.Old2Code.GDSiguienteObjects1[i].setAnimation(0);
}
}{for(var i = 0, len = gdjs.Old2Code.GDSiguienteObjects1.length ;i < len;++i) {
    gdjs.Old2Code.GDSiguienteObjects1[i].setOpacity(150);
}
}{for(var i = 0, len = gdjs.Old2Code.GDSiguienteObjects1.length ;i < len;++i) {
    gdjs.Old2Code.GDSiguienteObjects1[i].getBehavior("Tween").addObjectScaleTween("as", 0.75, 0.75, "linear", 100, false, true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("RespuestaEntry"), gdjs.Old2Code.GDRespuestaEntryObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(5)) + gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(4)) + gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(3)) == 3);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Old2Code.GDRespuestaEntryObjects1.length;i<l;++i) {
    if ( gdjs.Old2Code.GDRespuestaEntryObjects1[i].getText() != "" ) {
        isConditionTrue_0 = true;
        gdjs.Old2Code.GDRespuestaEntryObjects1[k] = gdjs.Old2Code.GDRespuestaEntryObjects1[i];
        ++k;
    }
}
gdjs.Old2Code.GDRespuestaEntryObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(24397292);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Siguiente"), gdjs.Old2Code.GDSiguienteObjects1);
{for(var i = 0, len = gdjs.Old2Code.GDSiguienteObjects1.length ;i < len;++i) {
    gdjs.Old2Code.GDSiguienteObjects1[i].setAnimation(1);
}
}{for(var i = 0, len = gdjs.Old2Code.GDSiguienteObjects1.length ;i < len;++i) {
    gdjs.Old2Code.GDSiguienteObjects1[i].setOpacity(255);
}
}{for(var i = 0, len = gdjs.Old2Code.GDSiguienteObjects1.length ;i < len;++i) {
    gdjs.Old2Code.GDSiguienteObjects1[i].getBehavior("Tween").addObjectScaleTween("as", 0.8, 0.8, "bouncePast", 100, false, true);
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("EdadNumber"), gdjs.Old2Code.GDEdadNumberObjects1);
gdjs.copyArray(runtimeScene.getObjects("EdadNumber2"), gdjs.Old2Code.GDEdadNumber2Objects1);
gdjs.copyArray(runtimeScene.getObjects("FondoEdad"), gdjs.Old2Code.GDFondoEdadObjects1);
gdjs.copyArray(runtimeScene.getObjects("MousePoint"), gdjs.Old2Code.GDMousePointObjects1);
gdjs.copyArray(runtimeScene.getObjects("SliderEdad"), gdjs.Old2Code.GDSliderEdadObjects1);
gdjs.copyArray(runtimeScene.getObjects("Thumb"), gdjs.Old2Code.GDThumbObjects1);
{for(var i = 0, len = gdjs.Old2Code.GDMousePointObjects1.length ;i < len;++i) {
    gdjs.Old2Code.GDMousePointObjects1[i].setPosition(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0),gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}
}{for(var i = 0, len = gdjs.Old2Code.GDEdadNumberObjects1.length ;i < len;++i) {
    gdjs.Old2Code.GDEdadNumberObjects1[i].setString(gdjs.evtTools.common.toString((( gdjs.Old2Code.GDSliderEdadObjects1.length === 0 ) ? 0 :gdjs.Old2Code.GDSliderEdadObjects1[0].getBehavior("DraggableSliderControl").Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)))));
}
}{for(var i = 0, len = gdjs.Old2Code.GDEdadNumber2Objects1.length ;i < len;++i) {
    gdjs.Old2Code.GDEdadNumber2Objects1[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(2)));
}
}{for(var i = 0, len = gdjs.Old2Code.GDThumbObjects1.length ;i < len;++i) {
    gdjs.Old2Code.GDThumbObjects1[i].setX(95 + (( gdjs.Old2Code.GDSliderEdadObjects1.length === 0 ) ? 0 :gdjs.Old2Code.GDSliderEdadObjects1[0].getBehavior("DraggableSliderControl")._getThumbOffset()));
}
}{for(var i = 0, len = gdjs.Old2Code.GDFondoEdadObjects1.length ;i < len;++i) {
    gdjs.Old2Code.GDFondoEdadObjects1[i].setPosition((( gdjs.Old2Code.GDThumbObjects1.length === 0 ) ? 0 :gdjs.Old2Code.GDThumbObjects1[0].getPointX("")),(( gdjs.Old2Code.GDEdadNumberObjects1.length === 0 ) ? 0 :gdjs.Old2Code.GDEdadNumberObjects1[0].getY()) - 12);
}
}
{ //Subevents
gdjs.Old2Code.eventsList7(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("SliderEdad"), gdjs.Old2Code.GDSliderEdadObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Old2Code.mapOfGDgdjs_9546Old2Code_9546GDSliderEdadObjects1Objects, runtimeScene, false, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Old2Code.GDSliderEdadObjects1.length;i<l;++i) {
    if ( !(gdjs.Old2Code.GDSliderEdadObjects1[i].getBehavior("DraggableSliderControl").IsEnabled((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        isConditionTrue_0 = true;
        gdjs.Old2Code.GDSliderEdadObjects1[k] = gdjs.Old2Code.GDSliderEdadObjects1[i];
        ++k;
    }
}
gdjs.Old2Code.GDSliderEdadObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(24410284);
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Old2Code.GDSliderEdadObjects1 */
{for(var i = 0, len = gdjs.Old2Code.GDSliderEdadObjects1.length ;i < len;++i) {
    gdjs.Old2Code.GDSliderEdadObjects1[i].getBehavior("DraggableSliderControl").SetEnabled(true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{runtimeScene.getScene().getVariables().getFromIndex(4).setNumber(1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("RespuestaEntry"), gdjs.Old2Code.GDRespuestaEntryObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Old2Code.GDRespuestaEntryObjects1.length;i<l;++i) {
    if ( gdjs.Old2Code.GDRespuestaEntryObjects1[i].getText() == "" ) {
        isConditionTrue_0 = true;
        gdjs.Old2Code.GDRespuestaEntryObjects1[k] = gdjs.Old2Code.GDRespuestaEntryObjects1[i];
        ++k;
    }
}
gdjs.Old2Code.GDRespuestaEntryObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(24412260);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(5).setNumber(0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("SliderEdad"), gdjs.Old2Code.GDSliderEdadObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Old2Code.GDSliderEdadObjects1.length;i<l;++i) {
    if ( !(gdjs.Old2Code.GDSliderEdadObjects1[i].getBehavior("DraggableSliderControl").IsBeingDragged((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        isConditionTrue_0 = true;
        gdjs.Old2Code.GDSliderEdadObjects1[k] = gdjs.Old2Code.GDSliderEdadObjects1[i];
        ++k;
    }
}
gdjs.Old2Code.GDSliderEdadObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(24413852);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Thumb"), gdjs.Old2Code.GDThumbObjects1);
{for(var i = 0, len = gdjs.Old2Code.GDThumbObjects1.length ;i < len;++i) {
    gdjs.Old2Code.GDThumbObjects1[i].getBehavior("Tween").addObjectScaleTween("Thumb2", 0.6, 0.6, "linear", 50, false, true);
}
}
{ //Subevents
gdjs.Old2Code.eventsList8(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("SliderEdad"), gdjs.Old2Code.GDSliderEdadObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Old2Code.GDSliderEdadObjects1.length;i<l;++i) {
    if ( gdjs.Old2Code.GDSliderEdadObjects1[i].getBehavior("DraggableSliderControl").IsBeingDragged((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Old2Code.GDSliderEdadObjects1[k] = gdjs.Old2Code.GDSliderEdadObjects1[i];
        ++k;
    }
}
gdjs.Old2Code.GDSliderEdadObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.Old2Code.eventsList11(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Opciones"), gdjs.Old2Code.GDOpcionesObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Old2Code.GDOpcionesObjects1.length;i<l;++i) {
    if ( gdjs.Old2Code.GDOpcionesObjects1[i].getAnimationFrame() == 1 ) {
        isConditionTrue_0 = true;
        gdjs.Old2Code.GDOpcionesObjects1[k] = gdjs.Old2Code.GDOpcionesObjects1[i];
        ++k;
    }
}
gdjs.Old2Code.GDOpcionesObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.getPickedInstancesCount(gdjs.Old2Code.mapOfGDgdjs_9546Old2Code_9546GDOpcionesObjects1Objects) >= 2;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Old2Code.GDOpcionesObjects1 */
{for(var i = 0, len = gdjs.Old2Code.GDOpcionesObjects1.length ;i < len;++i) {
    gdjs.Old2Code.GDOpcionesObjects1[i].getBehavior("Tween").addObjectScaleTween("XD2", 1, 1, "linear", 100, false, true);
}
}{for(var i = 0, len = gdjs.Old2Code.GDOpcionesObjects1.length ;i < len;++i) {
    gdjs.Old2Code.GDOpcionesObjects1[i].setAnimationFrame(0);
}
}{runtimeScene.getScene().getVariables().getFromIndex(3).setNumber(0);
}}

}


};

gdjs.Old2Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Old2Code.GDRespuestaEntryObjects1.length = 0;
gdjs.Old2Code.GDRespuestaEntryObjects2.length = 0;
gdjs.Old2Code.GDRespuestaEntryObjects3.length = 0;
gdjs.Old2Code.GDRespuestaEntryObjects4.length = 0;
gdjs.Old2Code.GDRespuestaEntryObjects5.length = 0;
gdjs.Old2Code.GDRespuestaEntryObjects6.length = 0;
gdjs.Old2Code.GDIMG_9595PreguntasObjects1.length = 0;
gdjs.Old2Code.GDIMG_9595PreguntasObjects2.length = 0;
gdjs.Old2Code.GDIMG_9595PreguntasObjects3.length = 0;
gdjs.Old2Code.GDIMG_9595PreguntasObjects4.length = 0;
gdjs.Old2Code.GDIMG_9595PreguntasObjects5.length = 0;
gdjs.Old2Code.GDIMG_9595PreguntasObjects6.length = 0;
gdjs.Old2Code.GDSiguienteObjects1.length = 0;
gdjs.Old2Code.GDSiguienteObjects2.length = 0;
gdjs.Old2Code.GDSiguienteObjects3.length = 0;
gdjs.Old2Code.GDSiguienteObjects4.length = 0;
gdjs.Old2Code.GDSiguienteObjects5.length = 0;
gdjs.Old2Code.GDSiguienteObjects6.length = 0;
gdjs.Old2Code.GDBarraRojoBlancoObjects1.length = 0;
gdjs.Old2Code.GDBarraRojoBlancoObjects2.length = 0;
gdjs.Old2Code.GDBarraRojoBlancoObjects3.length = 0;
gdjs.Old2Code.GDBarraRojoBlancoObjects4.length = 0;
gdjs.Old2Code.GDBarraRojoBlancoObjects5.length = 0;
gdjs.Old2Code.GDBarraRojoBlancoObjects6.length = 0;
gdjs.Old2Code.GDFondoObjects1.length = 0;
gdjs.Old2Code.GDFondoObjects2.length = 0;
gdjs.Old2Code.GDFondoObjects3.length = 0;
gdjs.Old2Code.GDFondoObjects4.length = 0;
gdjs.Old2Code.GDFondoObjects5.length = 0;
gdjs.Old2Code.GDFondoObjects6.length = 0;
gdjs.Old2Code.GDThumbObjects1.length = 0;
gdjs.Old2Code.GDThumbObjects2.length = 0;
gdjs.Old2Code.GDThumbObjects3.length = 0;
gdjs.Old2Code.GDThumbObjects4.length = 0;
gdjs.Old2Code.GDThumbObjects5.length = 0;
gdjs.Old2Code.GDThumbObjects6.length = 0;
gdjs.Old2Code.GDEdadNumberObjects1.length = 0;
gdjs.Old2Code.GDEdadNumberObjects2.length = 0;
gdjs.Old2Code.GDEdadNumberObjects3.length = 0;
gdjs.Old2Code.GDEdadNumberObjects4.length = 0;
gdjs.Old2Code.GDEdadNumberObjects5.length = 0;
gdjs.Old2Code.GDEdadNumberObjects6.length = 0;
gdjs.Old2Code.GDEdadNumber2Objects1.length = 0;
gdjs.Old2Code.GDEdadNumber2Objects2.length = 0;
gdjs.Old2Code.GDEdadNumber2Objects3.length = 0;
gdjs.Old2Code.GDEdadNumber2Objects4.length = 0;
gdjs.Old2Code.GDEdadNumber2Objects5.length = 0;
gdjs.Old2Code.GDEdadNumber2Objects6.length = 0;
gdjs.Old2Code.GDOpcionesObjects1.length = 0;
gdjs.Old2Code.GDOpcionesObjects2.length = 0;
gdjs.Old2Code.GDOpcionesObjects3.length = 0;
gdjs.Old2Code.GDOpcionesObjects4.length = 0;
gdjs.Old2Code.GDOpcionesObjects5.length = 0;
gdjs.Old2Code.GDOpcionesObjects6.length = 0;
gdjs.Old2Code.GDMousePointObjects1.length = 0;
gdjs.Old2Code.GDMousePointObjects2.length = 0;
gdjs.Old2Code.GDMousePointObjects3.length = 0;
gdjs.Old2Code.GDMousePointObjects4.length = 0;
gdjs.Old2Code.GDMousePointObjects5.length = 0;
gdjs.Old2Code.GDMousePointObjects6.length = 0;
gdjs.Old2Code.GDSliderEdadObjects1.length = 0;
gdjs.Old2Code.GDSliderEdadObjects2.length = 0;
gdjs.Old2Code.GDSliderEdadObjects3.length = 0;
gdjs.Old2Code.GDSliderEdadObjects4.length = 0;
gdjs.Old2Code.GDSliderEdadObjects5.length = 0;
gdjs.Old2Code.GDSliderEdadObjects6.length = 0;
gdjs.Old2Code.GDFondoEdadObjects1.length = 0;
gdjs.Old2Code.GDFondoEdadObjects2.length = 0;
gdjs.Old2Code.GDFondoEdadObjects3.length = 0;
gdjs.Old2Code.GDFondoEdadObjects4.length = 0;
gdjs.Old2Code.GDFondoEdadObjects5.length = 0;
gdjs.Old2Code.GDFondoEdadObjects6.length = 0;
gdjs.Old2Code.GDNewSpriteObjects1.length = 0;
gdjs.Old2Code.GDNewSpriteObjects2.length = 0;
gdjs.Old2Code.GDNewSpriteObjects3.length = 0;
gdjs.Old2Code.GDNewSpriteObjects4.length = 0;
gdjs.Old2Code.GDNewSpriteObjects5.length = 0;
gdjs.Old2Code.GDNewSpriteObjects6.length = 0;

gdjs.Old2Code.eventsList12(runtimeScene);
gdjs.Old2Code.GDRespuestaEntryObjects1.length = 0;
gdjs.Old2Code.GDRespuestaEntryObjects2.length = 0;
gdjs.Old2Code.GDRespuestaEntryObjects3.length = 0;
gdjs.Old2Code.GDRespuestaEntryObjects4.length = 0;
gdjs.Old2Code.GDRespuestaEntryObjects5.length = 0;
gdjs.Old2Code.GDRespuestaEntryObjects6.length = 0;
gdjs.Old2Code.GDIMG_9595PreguntasObjects1.length = 0;
gdjs.Old2Code.GDIMG_9595PreguntasObjects2.length = 0;
gdjs.Old2Code.GDIMG_9595PreguntasObjects3.length = 0;
gdjs.Old2Code.GDIMG_9595PreguntasObjects4.length = 0;
gdjs.Old2Code.GDIMG_9595PreguntasObjects5.length = 0;
gdjs.Old2Code.GDIMG_9595PreguntasObjects6.length = 0;
gdjs.Old2Code.GDSiguienteObjects1.length = 0;
gdjs.Old2Code.GDSiguienteObjects2.length = 0;
gdjs.Old2Code.GDSiguienteObjects3.length = 0;
gdjs.Old2Code.GDSiguienteObjects4.length = 0;
gdjs.Old2Code.GDSiguienteObjects5.length = 0;
gdjs.Old2Code.GDSiguienteObjects6.length = 0;
gdjs.Old2Code.GDBarraRojoBlancoObjects1.length = 0;
gdjs.Old2Code.GDBarraRojoBlancoObjects2.length = 0;
gdjs.Old2Code.GDBarraRojoBlancoObjects3.length = 0;
gdjs.Old2Code.GDBarraRojoBlancoObjects4.length = 0;
gdjs.Old2Code.GDBarraRojoBlancoObjects5.length = 0;
gdjs.Old2Code.GDBarraRojoBlancoObjects6.length = 0;
gdjs.Old2Code.GDFondoObjects1.length = 0;
gdjs.Old2Code.GDFondoObjects2.length = 0;
gdjs.Old2Code.GDFondoObjects3.length = 0;
gdjs.Old2Code.GDFondoObjects4.length = 0;
gdjs.Old2Code.GDFondoObjects5.length = 0;
gdjs.Old2Code.GDFondoObjects6.length = 0;
gdjs.Old2Code.GDThumbObjects1.length = 0;
gdjs.Old2Code.GDThumbObjects2.length = 0;
gdjs.Old2Code.GDThumbObjects3.length = 0;
gdjs.Old2Code.GDThumbObjects4.length = 0;
gdjs.Old2Code.GDThumbObjects5.length = 0;
gdjs.Old2Code.GDThumbObjects6.length = 0;
gdjs.Old2Code.GDEdadNumberObjects1.length = 0;
gdjs.Old2Code.GDEdadNumberObjects2.length = 0;
gdjs.Old2Code.GDEdadNumberObjects3.length = 0;
gdjs.Old2Code.GDEdadNumberObjects4.length = 0;
gdjs.Old2Code.GDEdadNumberObjects5.length = 0;
gdjs.Old2Code.GDEdadNumberObjects6.length = 0;
gdjs.Old2Code.GDEdadNumber2Objects1.length = 0;
gdjs.Old2Code.GDEdadNumber2Objects2.length = 0;
gdjs.Old2Code.GDEdadNumber2Objects3.length = 0;
gdjs.Old2Code.GDEdadNumber2Objects4.length = 0;
gdjs.Old2Code.GDEdadNumber2Objects5.length = 0;
gdjs.Old2Code.GDEdadNumber2Objects6.length = 0;
gdjs.Old2Code.GDOpcionesObjects1.length = 0;
gdjs.Old2Code.GDOpcionesObjects2.length = 0;
gdjs.Old2Code.GDOpcionesObjects3.length = 0;
gdjs.Old2Code.GDOpcionesObjects4.length = 0;
gdjs.Old2Code.GDOpcionesObjects5.length = 0;
gdjs.Old2Code.GDOpcionesObjects6.length = 0;
gdjs.Old2Code.GDMousePointObjects1.length = 0;
gdjs.Old2Code.GDMousePointObjects2.length = 0;
gdjs.Old2Code.GDMousePointObjects3.length = 0;
gdjs.Old2Code.GDMousePointObjects4.length = 0;
gdjs.Old2Code.GDMousePointObjects5.length = 0;
gdjs.Old2Code.GDMousePointObjects6.length = 0;
gdjs.Old2Code.GDSliderEdadObjects1.length = 0;
gdjs.Old2Code.GDSliderEdadObjects2.length = 0;
gdjs.Old2Code.GDSliderEdadObjects3.length = 0;
gdjs.Old2Code.GDSliderEdadObjects4.length = 0;
gdjs.Old2Code.GDSliderEdadObjects5.length = 0;
gdjs.Old2Code.GDSliderEdadObjects6.length = 0;
gdjs.Old2Code.GDFondoEdadObjects1.length = 0;
gdjs.Old2Code.GDFondoEdadObjects2.length = 0;
gdjs.Old2Code.GDFondoEdadObjects3.length = 0;
gdjs.Old2Code.GDFondoEdadObjects4.length = 0;
gdjs.Old2Code.GDFondoEdadObjects5.length = 0;
gdjs.Old2Code.GDFondoEdadObjects6.length = 0;
gdjs.Old2Code.GDNewSpriteObjects1.length = 0;
gdjs.Old2Code.GDNewSpriteObjects2.length = 0;
gdjs.Old2Code.GDNewSpriteObjects3.length = 0;
gdjs.Old2Code.GDNewSpriteObjects4.length = 0;
gdjs.Old2Code.GDNewSpriteObjects5.length = 0;
gdjs.Old2Code.GDNewSpriteObjects6.length = 0;


return;

}

gdjs['Old2Code'] = gdjs.Old2Code;
