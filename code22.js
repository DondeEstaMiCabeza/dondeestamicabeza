gdjs._498Code = {};
gdjs._498Code.localVariables = [];
gdjs._498Code.forEachIndex2 = 0;

gdjs._498Code.forEachObjects2 = [];

gdjs._498Code.forEachTemporary2 = null;

gdjs._498Code.forEachTotalCount2 = 0;

gdjs._498Code.GDOpcionesObjects1= [];
gdjs._498Code.GDOpcionesObjects2= [];
gdjs._498Code.GDOpcionesObjects3= [];
gdjs._498Code.GDOpcionesObjects4= [];
gdjs._498Code.GDOpcionesObjects5= [];
gdjs._498Code.GDOpcionesObjects6= [];
gdjs._498Code.GDBarraMoradaAzulObjects1= [];
gdjs._498Code.GDBarraMoradaAzulObjects2= [];
gdjs._498Code.GDBarraMoradaAzulObjects3= [];
gdjs._498Code.GDBarraMoradaAzulObjects4= [];
gdjs._498Code.GDBarraMoradaAzulObjects5= [];
gdjs._498Code.GDBarraMoradaAzulObjects6= [];
gdjs._498Code.GDIMG_9595PreguntaObjects1= [];
gdjs._498Code.GDIMG_9595PreguntaObjects2= [];
gdjs._498Code.GDIMG_9595PreguntaObjects3= [];
gdjs._498Code.GDIMG_9595PreguntaObjects4= [];
gdjs._498Code.GDIMG_9595PreguntaObjects5= [];
gdjs._498Code.GDIMG_9595PreguntaObjects6= [];
gdjs._498Code.GDMousePointObjects1= [];
gdjs._498Code.GDMousePointObjects2= [];
gdjs._498Code.GDMousePointObjects3= [];
gdjs._498Code.GDMousePointObjects4= [];
gdjs._498Code.GDMousePointObjects5= [];
gdjs._498Code.GDMousePointObjects6= [];
gdjs._498Code.GDSiguienteObjects1= [];
gdjs._498Code.GDSiguienteObjects2= [];
gdjs._498Code.GDSiguienteObjects3= [];
gdjs._498Code.GDSiguienteObjects4= [];
gdjs._498Code.GDSiguienteObjects5= [];
gdjs._498Code.GDSiguienteObjects6= [];
gdjs._498Code.GDFondoObjects1= [];
gdjs._498Code.GDFondoObjects2= [];
gdjs._498Code.GDFondoObjects3= [];
gdjs._498Code.GDFondoObjects4= [];
gdjs._498Code.GDFondoObjects5= [];
gdjs._498Code.GDFondoObjects6= [];


gdjs._498Code.asyncCallback26440148 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs._498Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("IMG_Pregunta"), gdjs._498Code.GDIMG_9595PreguntaObjects2);

{for(var i = 0, len = gdjs._498Code.GDIMG_9595PreguntaObjects2.length ;i < len;++i) {
    gdjs._498Code.GDIMG_9595PreguntaObjects2[i].getBehavior("Tween").addObjectScaleTween("Thumb", 1, 1, "swingFromTo", 400, false, true);
}
}gdjs._498Code.localVariables.length = 0;
}
gdjs._498Code.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs._498Code.localVariables);
for (const obj of gdjs._498Code.GDIMG_9595PreguntaObjects1) asyncObjectsList.addObject("IMG_Pregunta", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.2), (runtimeScene) => (gdjs._498Code.asyncCallback26440148(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs._498Code.mapOfGDgdjs_9546_9595498Code_9546GDMousePointObjects3Objects = Hashtable.newFrom({"MousePoint": gdjs._498Code.GDMousePointObjects3});
gdjs._498Code.mapOfGDgdjs_9546_9595498Code_9546GDOpcionesObjects3Objects = Hashtable.newFrom({"Opciones": gdjs._498Code.GDOpcionesObjects3});
gdjs._498Code.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() == 1);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setString("El horario");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() == 2);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).setString("El horario");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() == 3);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(2).setString("El horario");
}}

}


};gdjs._498Code.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() == 1);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setString("Mis compañerxs");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() == 2);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).setString("Mis compañerxs");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() == 3);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(2).setString("Mis compañerxs");
}}

}


};gdjs._498Code.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() == 1);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setString("No sentirme capaz");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() == 2);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).setString("No sentirme capaz");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() == 3);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(2).setString("No sentirme capaz");
}}

}


};gdjs._498Code.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() == 1);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setString("El estrés");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() == 2);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).setString("El estrés");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() == 3);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(2).setString("El estrés");
}}

}


};gdjs._498Code.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() == 1);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setString("Lxs profes/jefxs");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() == 2);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).setString("Lxs profes/jefxs");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() == 3);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(2).setString("Lxs profes/jefxs");
}}

}


};gdjs._498Code.eventsList6 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() == 1);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setString("No tengo motivación");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() == 2);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).setString("No tengo motivación");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() == 3);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(2).setString("No tengo motivación");
}}

}


};gdjs._498Code.eventsList7 = function(runtimeScene) {

{

gdjs.copyArray(gdjs._498Code.GDOpcionesObjects3, gdjs._498Code.GDOpcionesObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._498Code.GDOpcionesObjects4.length;i<l;++i) {
    if ( gdjs._498Code.GDOpcionesObjects4[i].getVariableNumber(gdjs._498Code.GDOpcionesObjects4[i].getVariables().getFromIndex(0)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs._498Code.GDOpcionesObjects4[k] = gdjs._498Code.GDOpcionesObjects4[i];
        ++k;
    }
}
gdjs._498Code.GDOpcionesObjects4.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs._498Code.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs._498Code.GDOpcionesObjects3, gdjs._498Code.GDOpcionesObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._498Code.GDOpcionesObjects4.length;i<l;++i) {
    if ( gdjs._498Code.GDOpcionesObjects4[i].getVariableNumber(gdjs._498Code.GDOpcionesObjects4[i].getVariables().getFromIndex(0)) == 2 ) {
        isConditionTrue_0 = true;
        gdjs._498Code.GDOpcionesObjects4[k] = gdjs._498Code.GDOpcionesObjects4[i];
        ++k;
    }
}
gdjs._498Code.GDOpcionesObjects4.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs._498Code.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs._498Code.GDOpcionesObjects3, gdjs._498Code.GDOpcionesObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._498Code.GDOpcionesObjects4.length;i<l;++i) {
    if ( gdjs._498Code.GDOpcionesObjects4[i].getVariableNumber(gdjs._498Code.GDOpcionesObjects4[i].getVariables().getFromIndex(0)) == 3 ) {
        isConditionTrue_0 = true;
        gdjs._498Code.GDOpcionesObjects4[k] = gdjs._498Code.GDOpcionesObjects4[i];
        ++k;
    }
}
gdjs._498Code.GDOpcionesObjects4.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs._498Code.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs._498Code.GDOpcionesObjects3, gdjs._498Code.GDOpcionesObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._498Code.GDOpcionesObjects4.length;i<l;++i) {
    if ( gdjs._498Code.GDOpcionesObjects4[i].getVariableNumber(gdjs._498Code.GDOpcionesObjects4[i].getVariables().getFromIndex(0)) == 4 ) {
        isConditionTrue_0 = true;
        gdjs._498Code.GDOpcionesObjects4[k] = gdjs._498Code.GDOpcionesObjects4[i];
        ++k;
    }
}
gdjs._498Code.GDOpcionesObjects4.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs._498Code.eventsList4(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs._498Code.GDOpcionesObjects3, gdjs._498Code.GDOpcionesObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._498Code.GDOpcionesObjects4.length;i<l;++i) {
    if ( gdjs._498Code.GDOpcionesObjects4[i].getVariableNumber(gdjs._498Code.GDOpcionesObjects4[i].getVariables().getFromIndex(0)) == 5 ) {
        isConditionTrue_0 = true;
        gdjs._498Code.GDOpcionesObjects4[k] = gdjs._498Code.GDOpcionesObjects4[i];
        ++k;
    }
}
gdjs._498Code.GDOpcionesObjects4.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs._498Code.eventsList5(runtimeScene);} //End of subevents
}

}


{

/* Reuse gdjs._498Code.GDOpcionesObjects3 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._498Code.GDOpcionesObjects3.length;i<l;++i) {
    if ( gdjs._498Code.GDOpcionesObjects3[i].getVariableNumber(gdjs._498Code.GDOpcionesObjects3[i].getVariables().getFromIndex(0)) == 6 ) {
        isConditionTrue_0 = true;
        gdjs._498Code.GDOpcionesObjects3[k] = gdjs._498Code.GDOpcionesObjects3[i];
        ++k;
    }
}
gdjs._498Code.GDOpcionesObjects3.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs._498Code.eventsList6(runtimeScene);} //End of subevents
}

}


};gdjs._498Code.eventsList8 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("MousePoint"), gdjs._498Code.GDMousePointObjects3);
gdjs.copyArray(gdjs._498Code.GDOpcionesObjects2, gdjs._498Code.GDOpcionesObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._498Code.mapOfGDgdjs_9546_9595498Code_9546GDMousePointObjects3Objects, gdjs._498Code.mapOfGDgdjs_9546_9595498Code_9546GDOpcionesObjects3Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._498Code.GDOpcionesObjects3.length;i<l;++i) {
    if ( gdjs._498Code.GDOpcionesObjects3[i].getBehavior("Scale").getScale() == 1 ) {
        isConditionTrue_0 = true;
        gdjs._498Code.GDOpcionesObjects3[k] = gdjs._498Code.GDOpcionesObjects3[i];
        ++k;
    }
}
gdjs._498Code.GDOpcionesObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(26442036);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs._498Code.GDOpcionesObjects3 */
{for(var i = 0, len = gdjs._498Code.GDOpcionesObjects3.length ;i < len;++i) {
    gdjs._498Code.GDOpcionesObjects3[i].setAnimationFrame(1);
}
}{for(var i = 0, len = gdjs._498Code.GDOpcionesObjects3.length ;i < len;++i) {
    gdjs._498Code.GDOpcionesObjects3[i].getBehavior("Tween").addObjectScaleTween("XD", 1.1, 1.1, "linear", 100, false, true);
}
}{runtimeScene.getScene().getVariables().getFromIndex(4).add(1);
}
{ //Subevents
gdjs._498Code.eventsList7(runtimeScene);} //End of subevents
}

}


};gdjs._498Code.eventsList9 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {

{ //Subevents
gdjs._498Code.eventsList8(runtimeScene);} //End of subevents
}

}


};gdjs._498Code.eventsList10 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Opciones"), gdjs._498Code.GDOpcionesObjects1);

for (gdjs._498Code.forEachIndex2 = 0;gdjs._498Code.forEachIndex2 < gdjs._498Code.GDOpcionesObjects1.length;++gdjs._498Code.forEachIndex2) {
gdjs._498Code.GDOpcionesObjects2.length = 0;


gdjs._498Code.forEachTemporary2 = gdjs._498Code.GDOpcionesObjects1[gdjs._498Code.forEachIndex2];
gdjs._498Code.GDOpcionesObjects2.push(gdjs._498Code.forEachTemporary2);
let isConditionTrue_0 = false;
if (true) {

{ //Subevents: 
gdjs._498Code.eventsList9(runtimeScene);} //Subevents end.
}
}

}


};gdjs._498Code.mapOfGDgdjs_9546_9595498Code_9546GDMousePointObjects2Objects = Hashtable.newFrom({"MousePoint": gdjs._498Code.GDMousePointObjects2});
gdjs._498Code.mapOfGDgdjs_9546_9595498Code_9546GDOpcionesObjects2Objects = Hashtable.newFrom({"Opciones": gdjs._498Code.GDOpcionesObjects2});
gdjs._498Code.mapOfGDgdjs_9546_9595498Code_9546GDMousePointObjects2Objects = Hashtable.newFrom({"MousePoint": gdjs._498Code.GDMousePointObjects2});
gdjs._498Code.mapOfGDgdjs_9546_9595498Code_9546GDFondoObjects2Objects = Hashtable.newFrom({"Fondo": gdjs._498Code.GDFondoObjects2});
gdjs._498Code.mapOfGDgdjs_9546_9595498Code_9546GDMousePointObjects2Objects = Hashtable.newFrom({"MousePoint": gdjs._498Code.GDMousePointObjects2});
gdjs._498Code.mapOfGDgdjs_9546_9595498Code_9546GDOpcionesObjects2Objects = Hashtable.newFrom({"Opciones": gdjs._498Code.GDOpcionesObjects2});
gdjs._498Code.eventsList11 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("MousePoint"), gdjs._498Code.GDMousePointObjects2);
gdjs.copyArray(runtimeScene.getObjects("Opciones"), gdjs._498Code.GDOpcionesObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._498Code.mapOfGDgdjs_9546_9595498Code_9546GDMousePointObjects2Objects, gdjs._498Code.mapOfGDgdjs_9546_9595498Code_9546GDOpcionesObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._498Code.GDOpcionesObjects2.length;i<l;++i) {
    if ( gdjs._498Code.GDOpcionesObjects2[i].getBehavior("Scale").getScale() == 1.1 ) {
        isConditionTrue_0 = true;
        gdjs._498Code.GDOpcionesObjects2[k] = gdjs._498Code.GDOpcionesObjects2[i];
        ++k;
    }
}
gdjs._498Code.GDOpcionesObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(26460676);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs._498Code.GDOpcionesObjects2 */
{for(var i = 0, len = gdjs._498Code.GDOpcionesObjects2.length ;i < len;++i) {
    gdjs._498Code.GDOpcionesObjects2[i].getBehavior("Tween").addObjectScaleTween("XD2", 1, 1, "linear", 100, false, true);
}
}{for(var i = 0, len = gdjs._498Code.GDOpcionesObjects2.length ;i < len;++i) {
    gdjs._498Code.GDOpcionesObjects2[i].setAnimationFrame(0);
}
}{runtimeScene.getScene().getVariables().getFromIndex(4).sub(1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Fondo"), gdjs._498Code.GDFondoObjects2);
gdjs.copyArray(runtimeScene.getObjects("MousePoint"), gdjs._498Code.GDMousePointObjects2);
gdjs.copyArray(runtimeScene.getObjects("Opciones"), gdjs._498Code.GDOpcionesObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._498Code.mapOfGDgdjs_9546_9595498Code_9546GDMousePointObjects2Objects, gdjs._498Code.mapOfGDgdjs_9546_9595498Code_9546GDFondoObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._498Code.mapOfGDgdjs_9546_9595498Code_9546GDMousePointObjects2Objects, gdjs._498Code.mapOfGDgdjs_9546_9595498Code_9546GDOpcionesObjects2Objects, true, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(26462124);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs._498Code.GDOpcionesObjects2 */
{for(var i = 0, len = gdjs._498Code.GDOpcionesObjects2.length ;i < len;++i) {
    gdjs._498Code.GDOpcionesObjects2[i].getBehavior("Tween").addObjectScaleTween("XD2", 1, 1, "linear", 100, false, true);
}
}{for(var i = 0, len = gdjs._498Code.GDOpcionesObjects2.length ;i < len;++i) {
    gdjs._498Code.GDOpcionesObjects2[i].setAnimationFrame(0);
}
}{runtimeScene.getScene().getVariables().getFromIndex(4).setNumber(0);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(26463604);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Siguiente"), gdjs._498Code.GDSiguienteObjects2);
{for(var i = 0, len = gdjs._498Code.GDSiguienteObjects2.length ;i < len;++i) {
    gdjs._498Code.GDSiguienteObjects2[i].setOpacity(150);
}
}{for(var i = 0, len = gdjs._498Code.GDSiguienteObjects2.length ;i < len;++i) {
    gdjs._498Code.GDSiguienteObjects2[i].setAnimation(0);
}
}{for(var i = 0, len = gdjs._498Code.GDSiguienteObjects2.length ;i < len;++i) {
    gdjs._498Code.GDSiguienteObjects2[i].getBehavior("Tween").addObjectScaleTween("as", 0.75, 0.75, "linear", 100, false, true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Opciones"), gdjs._498Code.GDOpcionesObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._498Code.GDOpcionesObjects1.length;i<l;++i) {
    if ( gdjs._498Code.GDOpcionesObjects1[i].getAnimationFrame() == 1 ) {
        isConditionTrue_0 = true;
        gdjs._498Code.GDOpcionesObjects1[k] = gdjs._498Code.GDOpcionesObjects1[i];
        ++k;
    }
}
gdjs._498Code.GDOpcionesObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() >= 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(26465092);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Siguiente"), gdjs._498Code.GDSiguienteObjects1);
{for(var i = 0, len = gdjs._498Code.GDSiguienteObjects1.length ;i < len;++i) {
    gdjs._498Code.GDSiguienteObjects1[i].getBehavior("Tween").addObjectScaleTween("as", 0.8, 0.8, "bouncePast", 100, false, true);
}
}{for(var i = 0, len = gdjs._498Code.GDSiguienteObjects1.length ;i < len;++i) {
    gdjs._498Code.GDSiguienteObjects1[i].setAnimation(1);
}
}{for(var i = 0, len = gdjs._498Code.GDSiguienteObjects1.length ;i < len;++i) {
    gdjs._498Code.GDSiguienteObjects1[i].setOpacity(255);
}
}}

}


};gdjs._498Code.mapOfGDgdjs_9546_9595498Code_9546GDSiguienteObjects1Objects = Hashtable.newFrom({"Siguiente": gdjs._498Code.GDSiguienteObjects1});
gdjs._498Code.eventsList12 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() == 1);
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().get("User").getChild("QueEsLoPeorDeTuTrabajoOEstudio").setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0)));
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "19", false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() == 2);
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().get("User").getChild("QueEsLoPeorDeTuTrabajoOEstudio").setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0)) + " y " + gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(1)));
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "19", false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() == 3);
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().get("User").getChild("QueEsLoPeorDeTuTrabajoOEstudio").setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0)) + " y " + gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(1)) + " y " + gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(2)));
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "19", false);
}}

}


};gdjs._498Code.eventsList13 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BarraMoradaAzul"), gdjs._498Code.GDBarraMoradaAzulObjects1);
gdjs.copyArray(runtimeScene.getObjects("IMG_Pregunta"), gdjs._498Code.GDIMG_9595PreguntaObjects1);
gdjs.copyArray(runtimeScene.getObjects("MousePoint"), gdjs._498Code.GDMousePointObjects1);
gdjs.copyArray(runtimeScene.getObjects("Opciones"), gdjs._498Code.GDOpcionesObjects1);
gdjs.copyArray(runtimeScene.getObjects("Siguiente"), gdjs._498Code.GDSiguienteObjects1);
{for(var i = 0, len = gdjs._498Code.GDMousePointObjects1.length ;i < len;++i) {
    gdjs._498Code.GDMousePointObjects1[i].hide();
}
}{for(var i = 0, len = gdjs._498Code.GDSiguienteObjects1.length ;i < len;++i) {
    gdjs._498Code.GDSiguienteObjects1[i].getBehavior("Tween").addObjectScaleTween("as", 0.75, 0.75, "linear", 1, false, true);
}
}{for(var i = 0, len = gdjs._498Code.GDBarraMoradaAzulObjects1.length ;i < len;++i) {
    gdjs._498Code.GDBarraMoradaAzulObjects1[i].getBehavior("DraggableSliderControl").SetValue(20, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs._498Code.GDSiguienteObjects1.length ;i < len;++i) {
    gdjs._498Code.GDSiguienteObjects1[i].setAnimation(0);
}
}{for(var i = 0, len = gdjs._498Code.GDSiguienteObjects1.length ;i < len;++i) {
    gdjs._498Code.GDSiguienteObjects1[i].setOpacity(150);
}
}{for(var i = 0, len = gdjs._498Code.GDOpcionesObjects1.length ;i < len;++i) {
    gdjs._498Code.GDOpcionesObjects1[i].pauseAnimation();
}
}{for(var i = 0, len = gdjs._498Code.GDOpcionesObjects1.length ;i < len;++i) {
    gdjs._498Code.GDOpcionesObjects1[i].setAnimationFrame(0);
}
}{for(var i = 0, len = gdjs._498Code.GDIMG_9595PreguntaObjects1.length ;i < len;++i) {
    gdjs._498Code.GDIMG_9595PreguntaObjects1[i].getBehavior("Tween").addObjectScaleTween("Thumb", 0.5, 0.5, "linear", 1, false, true);
}
}
{ //Subevents
gdjs._498Code.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() <= 2);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs._498Code.eventsList10(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {

{ //Subevents
gdjs._498Code.eventsList11(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("MousePoint"), gdjs._498Code.GDMousePointObjects1);
{for(var i = 0, len = gdjs._498Code.GDMousePointObjects1.length ;i < len;++i) {
    gdjs._498Code.GDMousePointObjects1[i].setPosition(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0),gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Siguiente"), gdjs._498Code.GDSiguienteObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._498Code.mapOfGDgdjs_9546_9595498Code_9546GDSiguienteObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._498Code.GDSiguienteObjects1.length;i<l;++i) {
    if ( gdjs._498Code.GDSiguienteObjects1[i].getOpacity() == 255 ) {
        isConditionTrue_0 = true;
        gdjs._498Code.GDSiguienteObjects1[k] = gdjs._498Code.GDSiguienteObjects1[i];
        ++k;
    }
}
gdjs._498Code.GDSiguienteObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(26467196);
}
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs._498Code.eventsList12(runtimeScene);} //End of subevents
}

}


};

gdjs._498Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._498Code.GDOpcionesObjects1.length = 0;
gdjs._498Code.GDOpcionesObjects2.length = 0;
gdjs._498Code.GDOpcionesObjects3.length = 0;
gdjs._498Code.GDOpcionesObjects4.length = 0;
gdjs._498Code.GDOpcionesObjects5.length = 0;
gdjs._498Code.GDOpcionesObjects6.length = 0;
gdjs._498Code.GDBarraMoradaAzulObjects1.length = 0;
gdjs._498Code.GDBarraMoradaAzulObjects2.length = 0;
gdjs._498Code.GDBarraMoradaAzulObjects3.length = 0;
gdjs._498Code.GDBarraMoradaAzulObjects4.length = 0;
gdjs._498Code.GDBarraMoradaAzulObjects5.length = 0;
gdjs._498Code.GDBarraMoradaAzulObjects6.length = 0;
gdjs._498Code.GDIMG_9595PreguntaObjects1.length = 0;
gdjs._498Code.GDIMG_9595PreguntaObjects2.length = 0;
gdjs._498Code.GDIMG_9595PreguntaObjects3.length = 0;
gdjs._498Code.GDIMG_9595PreguntaObjects4.length = 0;
gdjs._498Code.GDIMG_9595PreguntaObjects5.length = 0;
gdjs._498Code.GDIMG_9595PreguntaObjects6.length = 0;
gdjs._498Code.GDMousePointObjects1.length = 0;
gdjs._498Code.GDMousePointObjects2.length = 0;
gdjs._498Code.GDMousePointObjects3.length = 0;
gdjs._498Code.GDMousePointObjects4.length = 0;
gdjs._498Code.GDMousePointObjects5.length = 0;
gdjs._498Code.GDMousePointObjects6.length = 0;
gdjs._498Code.GDSiguienteObjects1.length = 0;
gdjs._498Code.GDSiguienteObjects2.length = 0;
gdjs._498Code.GDSiguienteObjects3.length = 0;
gdjs._498Code.GDSiguienteObjects4.length = 0;
gdjs._498Code.GDSiguienteObjects5.length = 0;
gdjs._498Code.GDSiguienteObjects6.length = 0;
gdjs._498Code.GDFondoObjects1.length = 0;
gdjs._498Code.GDFondoObjects2.length = 0;
gdjs._498Code.GDFondoObjects3.length = 0;
gdjs._498Code.GDFondoObjects4.length = 0;
gdjs._498Code.GDFondoObjects5.length = 0;
gdjs._498Code.GDFondoObjects6.length = 0;

gdjs._498Code.eventsList13(runtimeScene);
gdjs._498Code.GDOpcionesObjects1.length = 0;
gdjs._498Code.GDOpcionesObjects2.length = 0;
gdjs._498Code.GDOpcionesObjects3.length = 0;
gdjs._498Code.GDOpcionesObjects4.length = 0;
gdjs._498Code.GDOpcionesObjects5.length = 0;
gdjs._498Code.GDOpcionesObjects6.length = 0;
gdjs._498Code.GDBarraMoradaAzulObjects1.length = 0;
gdjs._498Code.GDBarraMoradaAzulObjects2.length = 0;
gdjs._498Code.GDBarraMoradaAzulObjects3.length = 0;
gdjs._498Code.GDBarraMoradaAzulObjects4.length = 0;
gdjs._498Code.GDBarraMoradaAzulObjects5.length = 0;
gdjs._498Code.GDBarraMoradaAzulObjects6.length = 0;
gdjs._498Code.GDIMG_9595PreguntaObjects1.length = 0;
gdjs._498Code.GDIMG_9595PreguntaObjects2.length = 0;
gdjs._498Code.GDIMG_9595PreguntaObjects3.length = 0;
gdjs._498Code.GDIMG_9595PreguntaObjects4.length = 0;
gdjs._498Code.GDIMG_9595PreguntaObjects5.length = 0;
gdjs._498Code.GDIMG_9595PreguntaObjects6.length = 0;
gdjs._498Code.GDMousePointObjects1.length = 0;
gdjs._498Code.GDMousePointObjects2.length = 0;
gdjs._498Code.GDMousePointObjects3.length = 0;
gdjs._498Code.GDMousePointObjects4.length = 0;
gdjs._498Code.GDMousePointObjects5.length = 0;
gdjs._498Code.GDMousePointObjects6.length = 0;
gdjs._498Code.GDSiguienteObjects1.length = 0;
gdjs._498Code.GDSiguienteObjects2.length = 0;
gdjs._498Code.GDSiguienteObjects3.length = 0;
gdjs._498Code.GDSiguienteObjects4.length = 0;
gdjs._498Code.GDSiguienteObjects5.length = 0;
gdjs._498Code.GDSiguienteObjects6.length = 0;
gdjs._498Code.GDFondoObjects1.length = 0;
gdjs._498Code.GDFondoObjects2.length = 0;
gdjs._498Code.GDFondoObjects3.length = 0;
gdjs._498Code.GDFondoObjects4.length = 0;
gdjs._498Code.GDFondoObjects5.length = 0;
gdjs._498Code.GDFondoObjects6.length = 0;


return;

}

gdjs['_498Code'] = gdjs._498Code;
