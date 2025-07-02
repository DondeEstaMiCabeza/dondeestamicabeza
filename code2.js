gdjs._51Code = {};
gdjs._51Code.localVariables = [];
gdjs._51Code.forEachIndex2 = 0;

gdjs._51Code.forEachObjects2 = [];

gdjs._51Code.forEachTemporary2 = null;

gdjs._51Code.forEachTotalCount2 = 0;

gdjs._51Code.GDIMG_9595PreguntasObjects1= [];
gdjs._51Code.GDIMG_9595PreguntasObjects2= [];
gdjs._51Code.GDIMG_9595PreguntasObjects3= [];
gdjs._51Code.GDIMG_9595PreguntasObjects4= [];
gdjs._51Code.GDIMG_9595PreguntasObjects5= [];
gdjs._51Code.GDIMG_9595PreguntasObjects6= [];
gdjs._51Code.GDFondoObjects1= [];
gdjs._51Code.GDFondoObjects2= [];
gdjs._51Code.GDFondoObjects3= [];
gdjs._51Code.GDFondoObjects4= [];
gdjs._51Code.GDFondoObjects5= [];
gdjs._51Code.GDFondoObjects6= [];
gdjs._51Code.GDBarraRojoBlancoObjects1= [];
gdjs._51Code.GDBarraRojoBlancoObjects2= [];
gdjs._51Code.GDBarraRojoBlancoObjects3= [];
gdjs._51Code.GDBarraRojoBlancoObjects4= [];
gdjs._51Code.GDBarraRojoBlancoObjects5= [];
gdjs._51Code.GDBarraRojoBlancoObjects6= [];
gdjs._51Code.GDMousePointObjects1= [];
gdjs._51Code.GDMousePointObjects2= [];
gdjs._51Code.GDMousePointObjects3= [];
gdjs._51Code.GDMousePointObjects4= [];
gdjs._51Code.GDMousePointObjects5= [];
gdjs._51Code.GDMousePointObjects6= [];
gdjs._51Code.GDSiguienteObjects1= [];
gdjs._51Code.GDSiguienteObjects2= [];
gdjs._51Code.GDSiguienteObjects3= [];
gdjs._51Code.GDSiguienteObjects4= [];
gdjs._51Code.GDSiguienteObjects5= [];
gdjs._51Code.GDSiguienteObjects6= [];
gdjs._51Code.GDOpciones2Objects1= [];
gdjs._51Code.GDOpciones2Objects2= [];
gdjs._51Code.GDOpciones2Objects3= [];
gdjs._51Code.GDOpciones2Objects4= [];
gdjs._51Code.GDOpciones2Objects5= [];
gdjs._51Code.GDOpciones2Objects6= [];
gdjs._51Code.GDOpcionesObjects1= [];
gdjs._51Code.GDOpcionesObjects2= [];
gdjs._51Code.GDOpcionesObjects3= [];
gdjs._51Code.GDOpcionesObjects4= [];
gdjs._51Code.GDOpcionesObjects5= [];
gdjs._51Code.GDOpcionesObjects6= [];
gdjs._51Code.GDNewTextObjects1= [];
gdjs._51Code.GDNewTextObjects2= [];
gdjs._51Code.GDNewTextObjects3= [];
gdjs._51Code.GDNewTextObjects4= [];
gdjs._51Code.GDNewTextObjects5= [];
gdjs._51Code.GDNewTextObjects6= [];


gdjs._51Code.asyncCallback22171924 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs._51Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("IMG_Preguntas"), gdjs._51Code.GDIMG_9595PreguntasObjects2);

{for(var i = 0, len = gdjs._51Code.GDIMG_9595PreguntasObjects2.length ;i < len;++i) {
    gdjs._51Code.GDIMG_9595PreguntasObjects2[i].getBehavior("Tween").addObjectScaleTween("Thumb", 1, 1, "swingFromTo", 400, false, true);
}
}gdjs._51Code.localVariables.length = 0;
}
gdjs._51Code.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs._51Code.localVariables);
for (const obj of gdjs._51Code.GDIMG_9595PreguntasObjects1) asyncObjectsList.addObject("IMG_Preguntas", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.2), (runtimeScene) => (gdjs._51Code.asyncCallback22171924(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs._51Code.mapOfGDgdjs_9546_959551Code_9546GDMousePointObjects4Objects = Hashtable.newFrom({"MousePoint": gdjs._51Code.GDMousePointObjects4});
gdjs._51Code.mapOfGDgdjs_9546_959551Code_9546GDOpciones2Objects4Objects = Hashtable.newFrom({"Opciones2": gdjs._51Code.GDOpciones2Objects4});
gdjs._51Code.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(gdjs._51Code.GDOpciones2Objects4, gdjs._51Code.GDOpciones2Objects5);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._51Code.GDOpciones2Objects5.length;i<l;++i) {
    if ( gdjs._51Code.GDOpciones2Objects5[i].getVariableNumber(gdjs._51Code.GDOpciones2Objects5[i].getVariables().getFromIndex(0)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs._51Code.GDOpciones2Objects5[k] = gdjs._51Code.GDOpciones2Objects5[i];
        ++k;
    }
}
gdjs._51Code.GDOpciones2Objects5.length = k;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("ActividadActual").setString("Estudio");
}}

}


{

gdjs.copyArray(gdjs._51Code.GDOpciones2Objects4, gdjs._51Code.GDOpciones2Objects5);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._51Code.GDOpciones2Objects5.length;i<l;++i) {
    if ( gdjs._51Code.GDOpciones2Objects5[i].getVariableNumber(gdjs._51Code.GDOpciones2Objects5[i].getVariables().getFromIndex(0)) == 2 ) {
        isConditionTrue_0 = true;
        gdjs._51Code.GDOpciones2Objects5[k] = gdjs._51Code.GDOpciones2Objects5[i];
        ++k;
    }
}
gdjs._51Code.GDOpciones2Objects5.length = k;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("ActividadActual").setString("Trabajo");
}}

}


{

gdjs.copyArray(gdjs._51Code.GDOpciones2Objects4, gdjs._51Code.GDOpciones2Objects5);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._51Code.GDOpciones2Objects5.length;i<l;++i) {
    if ( gdjs._51Code.GDOpciones2Objects5[i].getVariableNumber(gdjs._51Code.GDOpciones2Objects5[i].getVariables().getFromIndex(0)) == 3 ) {
        isConditionTrue_0 = true;
        gdjs._51Code.GDOpciones2Objects5[k] = gdjs._51Code.GDOpciones2Objects5[i];
        ++k;
    }
}
gdjs._51Code.GDOpciones2Objects5.length = k;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("ActividadActual").setString("Estudio y trabajo ¡Auxilio!");
}}

}


{

/* Reuse gdjs._51Code.GDOpciones2Objects4 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._51Code.GDOpciones2Objects4.length;i<l;++i) {
    if ( gdjs._51Code.GDOpciones2Objects4[i].getVariableNumber(gdjs._51Code.GDOpciones2Objects4[i].getVariables().getFromIndex(0)) == 4 ) {
        isConditionTrue_0 = true;
        gdjs._51Code.GDOpciones2Objects4[k] = gdjs._51Code.GDOpciones2Objects4[i];
        ++k;
    }
}
gdjs._51Code.GDOpciones2Objects4.length = k;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("ActividadActual").setString("No estudio ni trabajo");
}}

}


};gdjs._51Code.mapOfGDgdjs_9546_959551Code_9546GDMousePointObjects3Objects = Hashtable.newFrom({"MousePoint": gdjs._51Code.GDMousePointObjects3});
gdjs._51Code.mapOfGDgdjs_9546_959551Code_9546GDOpciones2Objects3Objects = Hashtable.newFrom({"Opciones2": gdjs._51Code.GDOpciones2Objects3});
gdjs._51Code.mapOfGDgdjs_9546_959551Code_9546GDMousePointObjects3Objects = Hashtable.newFrom({"MousePoint": gdjs._51Code.GDMousePointObjects3});
gdjs._51Code.mapOfGDgdjs_9546_959551Code_9546GDOpcionesObjects3Objects = Hashtable.newFrom({"Opciones": gdjs._51Code.GDOpcionesObjects3});
gdjs._51Code.mapOfGDgdjs_9546_959551Code_9546GDMousePointObjects3Objects = Hashtable.newFrom({"MousePoint": gdjs._51Code.GDMousePointObjects3});
gdjs._51Code.mapOfGDgdjs_9546_959551Code_9546GDSiguienteObjects3Objects = Hashtable.newFrom({"Siguiente": gdjs._51Code.GDSiguienteObjects3});
gdjs._51Code.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("MousePoint"), gdjs._51Code.GDMousePointObjects4);
gdjs.copyArray(gdjs._51Code.GDOpciones2Objects2, gdjs._51Code.GDOpciones2Objects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._51Code.mapOfGDgdjs_9546_959551Code_9546GDMousePointObjects4Objects, gdjs._51Code.mapOfGDgdjs_9546_959551Code_9546GDOpciones2Objects4Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._51Code.GDOpciones2Objects4.length;i<l;++i) {
    if ( gdjs._51Code.GDOpciones2Objects4[i].getScaleY() == 1 ) {
        isConditionTrue_0 = true;
        gdjs._51Code.GDOpciones2Objects4[k] = gdjs._51Code.GDOpciones2Objects4[i];
        ++k;
    }
}
gdjs._51Code.GDOpciones2Objects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(22173916);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs._51Code.GDOpciones2Objects4 */
{for(var i = 0, len = gdjs._51Code.GDOpciones2Objects4.length ;i < len;++i) {
    gdjs._51Code.GDOpciones2Objects4[i].getBehavior("Tween").addObjectScaleTween("XD", 1.1, 1.1, "linear", 100, false, true);
}
}{runtimeScene.getScene().getVariables().getFromIndex(2).add(1);
}{for(var i = 0, len = gdjs._51Code.GDOpciones2Objects4.length ;i < len;++i) {
    gdjs._51Code.GDOpciones2Objects4[i].setAnimationFrame(1);
}
}
{ //Subevents
gdjs._51Code.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("MousePoint"), gdjs._51Code.GDMousePointObjects3);
gdjs.copyArray(runtimeScene.getObjects("Opciones"), gdjs._51Code.GDOpcionesObjects3);
gdjs.copyArray(gdjs._51Code.GDOpciones2Objects2, gdjs._51Code.GDOpciones2Objects3);

gdjs.copyArray(runtimeScene.getObjects("Siguiente"), gdjs._51Code.GDSiguienteObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._51Code.mapOfGDgdjs_9546_959551Code_9546GDMousePointObjects3Objects, gdjs._51Code.mapOfGDgdjs_9546_959551Code_9546GDOpciones2Objects3Objects, true, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._51Code.mapOfGDgdjs_9546_959551Code_9546GDMousePointObjects3Objects, gdjs._51Code.mapOfGDgdjs_9546_959551Code_9546GDOpcionesObjects3Objects, true, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._51Code.mapOfGDgdjs_9546_959551Code_9546GDMousePointObjects3Objects, gdjs._51Code.mapOfGDgdjs_9546_959551Code_9546GDSiguienteObjects3Objects, true, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._51Code.GDOpciones2Objects3.length;i<l;++i) {
    if ( gdjs._51Code.GDOpciones2Objects3[i].getScaleY() == 1.1 ) {
        isConditionTrue_0 = true;
        gdjs._51Code.GDOpciones2Objects3[k] = gdjs._51Code.GDOpciones2Objects3[i];
        ++k;
    }
}
gdjs._51Code.GDOpciones2Objects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(22178660);
}
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs._51Code.GDOpciones2Objects3 */
{for(var i = 0, len = gdjs._51Code.GDOpciones2Objects3.length ;i < len;++i) {
    gdjs._51Code.GDOpciones2Objects3[i].getBehavior("Tween").addObjectScaleTween("XD2", 1, 1, "linear", 100, false, true);
}
}{runtimeScene.getScene().getVariables().getFromIndex(2).sub(1);
}{for(var i = 0, len = gdjs._51Code.GDOpciones2Objects3.length ;i < len;++i) {
    gdjs._51Code.GDOpciones2Objects3[i].setAnimationFrame(0);
}
}}

}


};gdjs._51Code.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {

{ //Subevents
gdjs._51Code.eventsList2(runtimeScene);} //End of subevents
}

}


};gdjs._51Code.mapOfGDgdjs_9546_959551Code_9546GDMousePointObjects4Objects = Hashtable.newFrom({"MousePoint": gdjs._51Code.GDMousePointObjects4});
gdjs._51Code.mapOfGDgdjs_9546_959551Code_9546GDOpcionesObjects4Objects = Hashtable.newFrom({"Opciones": gdjs._51Code.GDOpcionesObjects4});
gdjs._51Code.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(gdjs._51Code.GDOpcionesObjects4, gdjs._51Code.GDOpcionesObjects5);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._51Code.GDOpcionesObjects5.length;i<l;++i) {
    if ( gdjs._51Code.GDOpcionesObjects5[i].getVariableNumber(gdjs._51Code.GDOpcionesObjects5[i].getVariables().getFromIndex(0)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs._51Code.GDOpcionesObjects5[k] = gdjs._51Code.GDOpcionesObjects5[i];
        ++k;
    }
}
gdjs._51Code.GDOpcionesObjects5.length = k;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("Seleccion").setString("Hombre");
}}

}


{

gdjs.copyArray(gdjs._51Code.GDOpcionesObjects4, gdjs._51Code.GDOpcionesObjects5);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._51Code.GDOpcionesObjects5.length;i<l;++i) {
    if ( gdjs._51Code.GDOpcionesObjects5[i].getVariableNumber(gdjs._51Code.GDOpcionesObjects5[i].getVariables().getFromIndex(0)) == 2 ) {
        isConditionTrue_0 = true;
        gdjs._51Code.GDOpcionesObjects5[k] = gdjs._51Code.GDOpcionesObjects5[i];
        ++k;
    }
}
gdjs._51Code.GDOpcionesObjects5.length = k;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("Seleccion").setString("Mujer");
}}

}


{

/* Reuse gdjs._51Code.GDOpcionesObjects4 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._51Code.GDOpcionesObjects4.length;i<l;++i) {
    if ( gdjs._51Code.GDOpcionesObjects4[i].getVariableNumber(gdjs._51Code.GDOpcionesObjects4[i].getVariables().getFromIndex(0)) == 3 ) {
        isConditionTrue_0 = true;
        gdjs._51Code.GDOpcionesObjects4[k] = gdjs._51Code.GDOpcionesObjects4[i];
        ++k;
    }
}
gdjs._51Code.GDOpcionesObjects4.length = k;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("Seleccion").setString("Otro");
}}

}


};gdjs._51Code.mapOfGDgdjs_9546_959551Code_9546GDMousePointObjects3Objects = Hashtable.newFrom({"MousePoint": gdjs._51Code.GDMousePointObjects3});
gdjs._51Code.mapOfGDgdjs_9546_959551Code_9546GDOpciones2Objects3Objects = Hashtable.newFrom({"Opciones2": gdjs._51Code.GDOpciones2Objects3});
gdjs._51Code.mapOfGDgdjs_9546_959551Code_9546GDMousePointObjects3Objects = Hashtable.newFrom({"MousePoint": gdjs._51Code.GDMousePointObjects3});
gdjs._51Code.mapOfGDgdjs_9546_959551Code_9546GDOpcionesObjects3Objects = Hashtable.newFrom({"Opciones": gdjs._51Code.GDOpcionesObjects3});
gdjs._51Code.mapOfGDgdjs_9546_959551Code_9546GDMousePointObjects3Objects = Hashtable.newFrom({"MousePoint": gdjs._51Code.GDMousePointObjects3});
gdjs._51Code.mapOfGDgdjs_9546_959551Code_9546GDSiguienteObjects3Objects = Hashtable.newFrom({"Siguiente": gdjs._51Code.GDSiguienteObjects3});
gdjs._51Code.eventsList5 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("MousePoint"), gdjs._51Code.GDMousePointObjects4);
gdjs.copyArray(gdjs._51Code.GDOpcionesObjects2, gdjs._51Code.GDOpcionesObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._51Code.mapOfGDgdjs_9546_959551Code_9546GDMousePointObjects4Objects, gdjs._51Code.mapOfGDgdjs_9546_959551Code_9546GDOpcionesObjects4Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._51Code.GDOpcionesObjects4.length;i<l;++i) {
    if ( gdjs._51Code.GDOpcionesObjects4[i].getScaleY() == 1 ) {
        isConditionTrue_0 = true;
        gdjs._51Code.GDOpcionesObjects4[k] = gdjs._51Code.GDOpcionesObjects4[i];
        ++k;
    }
}
gdjs._51Code.GDOpcionesObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(22180300);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs._51Code.GDOpcionesObjects4 */
{for(var i = 0, len = gdjs._51Code.GDOpcionesObjects4.length ;i < len;++i) {
    gdjs._51Code.GDOpcionesObjects4[i].getBehavior("Tween").addObjectScaleTween("XD", 1.1, 1.1, "linear", 100, false, true);
}
}{runtimeScene.getScene().getVariables().getFromIndex(2).add(1);
}{for(var i = 0, len = gdjs._51Code.GDOpcionesObjects4.length ;i < len;++i) {
    gdjs._51Code.GDOpcionesObjects4[i].setAnimationFrame(1);
}
}
{ //Subevents
gdjs._51Code.eventsList4(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("MousePoint"), gdjs._51Code.GDMousePointObjects3);
gdjs.copyArray(gdjs._51Code.GDOpcionesObjects2, gdjs._51Code.GDOpcionesObjects3);

gdjs.copyArray(runtimeScene.getObjects("Opciones2"), gdjs._51Code.GDOpciones2Objects3);
gdjs.copyArray(runtimeScene.getObjects("Siguiente"), gdjs._51Code.GDSiguienteObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._51Code.mapOfGDgdjs_9546_959551Code_9546GDMousePointObjects3Objects, gdjs._51Code.mapOfGDgdjs_9546_959551Code_9546GDOpciones2Objects3Objects, true, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._51Code.mapOfGDgdjs_9546_959551Code_9546GDMousePointObjects3Objects, gdjs._51Code.mapOfGDgdjs_9546_959551Code_9546GDOpcionesObjects3Objects, true, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._51Code.mapOfGDgdjs_9546_959551Code_9546GDMousePointObjects3Objects, gdjs._51Code.mapOfGDgdjs_9546_959551Code_9546GDSiguienteObjects3Objects, true, runtimeScene, true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._51Code.GDOpcionesObjects3.length;i<l;++i) {
    if ( gdjs._51Code.GDOpcionesObjects3[i].getScaleY() == 1.1 ) {
        isConditionTrue_0 = true;
        gdjs._51Code.GDOpcionesObjects3[k] = gdjs._51Code.GDOpcionesObjects3[i];
        ++k;
    }
}
gdjs._51Code.GDOpcionesObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(22184092);
}
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs._51Code.GDOpcionesObjects3 */
{for(var i = 0, len = gdjs._51Code.GDOpcionesObjects3.length ;i < len;++i) {
    gdjs._51Code.GDOpcionesObjects3[i].getBehavior("Tween").addObjectScaleTween("XD2", 1, 1, "linear", 100, false, true);
}
}{runtimeScene.getScene().getVariables().getFromIndex(2).sub(1);
}{for(var i = 0, len = gdjs._51Code.GDOpcionesObjects3.length ;i < len;++i) {
    gdjs._51Code.GDOpcionesObjects3[i].setAnimationFrame(0);
}
}}

}


};gdjs._51Code.eventsList6 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {

{ //Subevents
gdjs._51Code.eventsList5(runtimeScene);} //End of subevents
}

}


};gdjs._51Code.mapOfGDgdjs_9546_959551Code_9546GDSiguienteObjects1Objects = Hashtable.newFrom({"Siguiente": gdjs._51Code.GDSiguienteObjects1});
gdjs._51Code.eventsList7 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BarraRojoBlanco"), gdjs._51Code.GDBarraRojoBlancoObjects1);
gdjs.copyArray(runtimeScene.getObjects("IMG_Preguntas"), gdjs._51Code.GDIMG_9595PreguntasObjects1);
gdjs.copyArray(runtimeScene.getObjects("MousePoint"), gdjs._51Code.GDMousePointObjects1);
gdjs.copyArray(runtimeScene.getObjects("Opciones"), gdjs._51Code.GDOpcionesObjects1);
gdjs.copyArray(runtimeScene.getObjects("Opciones2"), gdjs._51Code.GDOpciones2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Siguiente"), gdjs._51Code.GDSiguienteObjects1);
{for(var i = 0, len = gdjs._51Code.GDSiguienteObjects1.length ;i < len;++i) {
    gdjs._51Code.GDSiguienteObjects1[i].setOpacity(150);
}
}{for(var i = 0, len = gdjs._51Code.GDSiguienteObjects1.length ;i < len;++i) {
    gdjs._51Code.GDSiguienteObjects1[i].getBehavior("Tween").addObjectScaleTween("as", 0.75, 0.75, "linear", 1, false, true);
}
}{for(var i = 0, len = gdjs._51Code.GDBarraRojoBlancoObjects1.length ;i < len;++i) {
    gdjs._51Code.GDBarraRojoBlancoObjects1[i].getBehavior("DraggableSliderControl").SetValue(4, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs._51Code.GDSiguienteObjects1.length ;i < len;++i) {
    gdjs._51Code.GDSiguienteObjects1[i].setAnimation(0);
}
}{for(var i = 0, len = gdjs._51Code.GDOpcionesObjects1.length ;i < len;++i) {
    gdjs._51Code.GDOpcionesObjects1[i].pauseAnimation();
}
}{for(var i = 0, len = gdjs._51Code.GDMousePointObjects1.length ;i < len;++i) {
    gdjs._51Code.GDMousePointObjects1[i].hide();
}
}{for(var i = 0, len = gdjs._51Code.GDOpciones2Objects1.length ;i < len;++i) {
    gdjs._51Code.GDOpciones2Objects1[i].pauseAnimation();
}
}{for(var i = 0, len = gdjs._51Code.GDOpcionesObjects1.length ;i < len;++i) {
    gdjs._51Code.GDOpcionesObjects1[i].setAnimationFrame(0);
}
}{for(var i = 0, len = gdjs._51Code.GDOpciones2Objects1.length ;i < len;++i) {
    gdjs._51Code.GDOpciones2Objects1[i].setAnimationFrame(0);
}
}{for(var i = 0, len = gdjs._51Code.GDIMG_9595PreguntasObjects1.length ;i < len;++i) {
    gdjs._51Code.GDIMG_9595PreguntasObjects1[i].getBehavior("Tween").addObjectScaleTween("Thumb", 0.5, 0.5, "linear", 1, false, true);
}
}
{ //Subevents
gdjs._51Code.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Opciones2"), gdjs._51Code.GDOpciones2Objects1);

for (gdjs._51Code.forEachIndex2 = 0;gdjs._51Code.forEachIndex2 < gdjs._51Code.GDOpciones2Objects1.length;++gdjs._51Code.forEachIndex2) {
gdjs._51Code.GDOpciones2Objects2.length = 0;


gdjs._51Code.forEachTemporary2 = gdjs._51Code.GDOpciones2Objects1[gdjs._51Code.forEachIndex2];
gdjs._51Code.GDOpciones2Objects2.push(gdjs._51Code.forEachTemporary2);
let isConditionTrue_0 = false;
if (true) {

{ //Subevents: 
gdjs._51Code.eventsList3(runtimeScene);} //Subevents end.
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Opciones"), gdjs._51Code.GDOpcionesObjects1);

for (gdjs._51Code.forEachIndex2 = 0;gdjs._51Code.forEachIndex2 < gdjs._51Code.GDOpcionesObjects1.length;++gdjs._51Code.forEachIndex2) {
gdjs._51Code.GDOpcionesObjects2.length = 0;


gdjs._51Code.forEachTemporary2 = gdjs._51Code.GDOpcionesObjects1[gdjs._51Code.forEachIndex2];
gdjs._51Code.GDOpcionesObjects2.push(gdjs._51Code.forEachTemporary2);
let isConditionTrue_0 = false;
if (true) {

{ //Subevents: 
gdjs._51Code.eventsList6(runtimeScene);} //Subevents end.
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Opciones"), gdjs._51Code.GDOpcionesObjects1);
gdjs.copyArray(runtimeScene.getObjects("Opciones2"), gdjs._51Code.GDOpciones2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(2)) == 2;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._51Code.GDOpcionesObjects1.length;i<l;++i) {
    if ( gdjs._51Code.GDOpcionesObjects1[i].getScaleY() == 1.1 ) {
        isConditionTrue_0 = true;
        gdjs._51Code.GDOpcionesObjects1[k] = gdjs._51Code.GDOpcionesObjects1[i];
        ++k;
    }
}
gdjs._51Code.GDOpcionesObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._51Code.GDOpciones2Objects1.length;i<l;++i) {
    if ( gdjs._51Code.GDOpciones2Objects1[i].getScaleY() == 1.1 ) {
        isConditionTrue_0 = true;
        gdjs._51Code.GDOpciones2Objects1[k] = gdjs._51Code.GDOpciones2Objects1[i];
        ++k;
    }
}
gdjs._51Code.GDOpciones2Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(22186604);
}
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Siguiente"), gdjs._51Code.GDSiguienteObjects1);
{for(var i = 0, len = gdjs._51Code.GDSiguienteObjects1.length ;i < len;++i) {
    gdjs._51Code.GDSiguienteObjects1[i].getBehavior("Tween").addObjectScaleTween("as", 0.8, 0.8, "bouncePast", 100, false, true);
}
}{for(var i = 0, len = gdjs._51Code.GDSiguienteObjects1.length ;i < len;++i) {
    gdjs._51Code.GDSiguienteObjects1[i].setAnimation(1);
}
}{for(var i = 0, len = gdjs._51Code.GDSiguienteObjects1.length ;i < len;++i) {
    gdjs._51Code.GDSiguienteObjects1[i].setOpacity(255);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(2)) != 2;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(22187692);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Siguiente"), gdjs._51Code.GDSiguienteObjects1);
{for(var i = 0, len = gdjs._51Code.GDSiguienteObjects1.length ;i < len;++i) {
    gdjs._51Code.GDSiguienteObjects1[i].setAnimation(0);
}
}{for(var i = 0, len = gdjs._51Code.GDSiguienteObjects1.length ;i < len;++i) {
    gdjs._51Code.GDSiguienteObjects1[i].setOpacity(150);
}
}{for(var i = 0, len = gdjs._51Code.GDSiguienteObjects1.length ;i < len;++i) {
    gdjs._51Code.GDSiguienteObjects1[i].getBehavior("Tween").addObjectScaleTween("as", 0.75, 0.75, "linear", 100, false, true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Siguiente"), gdjs._51Code.GDSiguienteObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._51Code.mapOfGDgdjs_9546_959551Code_9546GDSiguienteObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._51Code.GDSiguienteObjects1.length;i<l;++i) {
    if ( gdjs._51Code.GDSiguienteObjects1[i].getOpacity() == 255 ) {
        isConditionTrue_0 = true;
        gdjs._51Code.GDSiguienteObjects1[k] = gdjs._51Code.GDSiguienteObjects1[i];
        ++k;
    }
}
gdjs._51Code.GDSiguienteObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(22189508);
}
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().get("User").getChild("Generos").setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("Seleccion")));
}{runtimeScene.getGame().getVariables().get("User").getChild("ActividadActual").setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("ActividadActual")));
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "4", false);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("MousePoint"), gdjs._51Code.GDMousePointObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs._51Code.GDNewTextObjects1);
{for(var i = 0, len = gdjs._51Code.GDMousePointObjects1.length ;i < len;++i) {
    gdjs._51Code.GDMousePointObjects1[i].setPosition(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0),gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}
}{for(var i = 0, len = gdjs._51Code.GDNewTextObjects1.length ;i < len;++i) {
    gdjs._51Code.GDNewTextObjects1[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("ActividadActual")));
}
}}

}


};

gdjs._51Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._51Code.GDIMG_9595PreguntasObjects1.length = 0;
gdjs._51Code.GDIMG_9595PreguntasObjects2.length = 0;
gdjs._51Code.GDIMG_9595PreguntasObjects3.length = 0;
gdjs._51Code.GDIMG_9595PreguntasObjects4.length = 0;
gdjs._51Code.GDIMG_9595PreguntasObjects5.length = 0;
gdjs._51Code.GDIMG_9595PreguntasObjects6.length = 0;
gdjs._51Code.GDFondoObjects1.length = 0;
gdjs._51Code.GDFondoObjects2.length = 0;
gdjs._51Code.GDFondoObjects3.length = 0;
gdjs._51Code.GDFondoObjects4.length = 0;
gdjs._51Code.GDFondoObjects5.length = 0;
gdjs._51Code.GDFondoObjects6.length = 0;
gdjs._51Code.GDBarraRojoBlancoObjects1.length = 0;
gdjs._51Code.GDBarraRojoBlancoObjects2.length = 0;
gdjs._51Code.GDBarraRojoBlancoObjects3.length = 0;
gdjs._51Code.GDBarraRojoBlancoObjects4.length = 0;
gdjs._51Code.GDBarraRojoBlancoObjects5.length = 0;
gdjs._51Code.GDBarraRojoBlancoObjects6.length = 0;
gdjs._51Code.GDMousePointObjects1.length = 0;
gdjs._51Code.GDMousePointObjects2.length = 0;
gdjs._51Code.GDMousePointObjects3.length = 0;
gdjs._51Code.GDMousePointObjects4.length = 0;
gdjs._51Code.GDMousePointObjects5.length = 0;
gdjs._51Code.GDMousePointObjects6.length = 0;
gdjs._51Code.GDSiguienteObjects1.length = 0;
gdjs._51Code.GDSiguienteObjects2.length = 0;
gdjs._51Code.GDSiguienteObjects3.length = 0;
gdjs._51Code.GDSiguienteObjects4.length = 0;
gdjs._51Code.GDSiguienteObjects5.length = 0;
gdjs._51Code.GDSiguienteObjects6.length = 0;
gdjs._51Code.GDOpciones2Objects1.length = 0;
gdjs._51Code.GDOpciones2Objects2.length = 0;
gdjs._51Code.GDOpciones2Objects3.length = 0;
gdjs._51Code.GDOpciones2Objects4.length = 0;
gdjs._51Code.GDOpciones2Objects5.length = 0;
gdjs._51Code.GDOpciones2Objects6.length = 0;
gdjs._51Code.GDOpcionesObjects1.length = 0;
gdjs._51Code.GDOpcionesObjects2.length = 0;
gdjs._51Code.GDOpcionesObjects3.length = 0;
gdjs._51Code.GDOpcionesObjects4.length = 0;
gdjs._51Code.GDOpcionesObjects5.length = 0;
gdjs._51Code.GDOpcionesObjects6.length = 0;
gdjs._51Code.GDNewTextObjects1.length = 0;
gdjs._51Code.GDNewTextObjects2.length = 0;
gdjs._51Code.GDNewTextObjects3.length = 0;
gdjs._51Code.GDNewTextObjects4.length = 0;
gdjs._51Code.GDNewTextObjects5.length = 0;
gdjs._51Code.GDNewTextObjects6.length = 0;

gdjs._51Code.eventsList7(runtimeScene);
gdjs._51Code.GDIMG_9595PreguntasObjects1.length = 0;
gdjs._51Code.GDIMG_9595PreguntasObjects2.length = 0;
gdjs._51Code.GDIMG_9595PreguntasObjects3.length = 0;
gdjs._51Code.GDIMG_9595PreguntasObjects4.length = 0;
gdjs._51Code.GDIMG_9595PreguntasObjects5.length = 0;
gdjs._51Code.GDIMG_9595PreguntasObjects6.length = 0;
gdjs._51Code.GDFondoObjects1.length = 0;
gdjs._51Code.GDFondoObjects2.length = 0;
gdjs._51Code.GDFondoObjects3.length = 0;
gdjs._51Code.GDFondoObjects4.length = 0;
gdjs._51Code.GDFondoObjects5.length = 0;
gdjs._51Code.GDFondoObjects6.length = 0;
gdjs._51Code.GDBarraRojoBlancoObjects1.length = 0;
gdjs._51Code.GDBarraRojoBlancoObjects2.length = 0;
gdjs._51Code.GDBarraRojoBlancoObjects3.length = 0;
gdjs._51Code.GDBarraRojoBlancoObjects4.length = 0;
gdjs._51Code.GDBarraRojoBlancoObjects5.length = 0;
gdjs._51Code.GDBarraRojoBlancoObjects6.length = 0;
gdjs._51Code.GDMousePointObjects1.length = 0;
gdjs._51Code.GDMousePointObjects2.length = 0;
gdjs._51Code.GDMousePointObjects3.length = 0;
gdjs._51Code.GDMousePointObjects4.length = 0;
gdjs._51Code.GDMousePointObjects5.length = 0;
gdjs._51Code.GDMousePointObjects6.length = 0;
gdjs._51Code.GDSiguienteObjects1.length = 0;
gdjs._51Code.GDSiguienteObjects2.length = 0;
gdjs._51Code.GDSiguienteObjects3.length = 0;
gdjs._51Code.GDSiguienteObjects4.length = 0;
gdjs._51Code.GDSiguienteObjects5.length = 0;
gdjs._51Code.GDSiguienteObjects6.length = 0;
gdjs._51Code.GDOpciones2Objects1.length = 0;
gdjs._51Code.GDOpciones2Objects2.length = 0;
gdjs._51Code.GDOpciones2Objects3.length = 0;
gdjs._51Code.GDOpciones2Objects4.length = 0;
gdjs._51Code.GDOpciones2Objects5.length = 0;
gdjs._51Code.GDOpciones2Objects6.length = 0;
gdjs._51Code.GDOpcionesObjects1.length = 0;
gdjs._51Code.GDOpcionesObjects2.length = 0;
gdjs._51Code.GDOpcionesObjects3.length = 0;
gdjs._51Code.GDOpcionesObjects4.length = 0;
gdjs._51Code.GDOpcionesObjects5.length = 0;
gdjs._51Code.GDOpcionesObjects6.length = 0;
gdjs._51Code.GDNewTextObjects1.length = 0;
gdjs._51Code.GDNewTextObjects2.length = 0;
gdjs._51Code.GDNewTextObjects3.length = 0;
gdjs._51Code.GDNewTextObjects4.length = 0;
gdjs._51Code.GDNewTextObjects5.length = 0;
gdjs._51Code.GDNewTextObjects6.length = 0;


return;

}

gdjs['_51Code'] = gdjs._51Code;
