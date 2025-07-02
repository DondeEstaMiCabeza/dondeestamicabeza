gdjs._491Code = {};
gdjs._491Code.localVariables = [];
gdjs._491Code.forEachIndex2 = 0;

gdjs._491Code.forEachObjects2 = [];

gdjs._491Code.forEachTemporary2 = null;

gdjs._491Code.forEachTotalCount2 = 0;

gdjs._491Code.GDOpcionesObjects1= [];
gdjs._491Code.GDOpcionesObjects2= [];
gdjs._491Code.GDOpcionesObjects3= [];
gdjs._491Code.GDOpcionesObjects4= [];
gdjs._491Code.GDOpcionesObjects5= [];
gdjs._491Code.GDOpcionesObjects6= [];
gdjs._491Code.GDBarraMoradaAzulObjects1= [];
gdjs._491Code.GDBarraMoradaAzulObjects2= [];
gdjs._491Code.GDBarraMoradaAzulObjects3= [];
gdjs._491Code.GDBarraMoradaAzulObjects4= [];
gdjs._491Code.GDBarraMoradaAzulObjects5= [];
gdjs._491Code.GDBarraMoradaAzulObjects6= [];
gdjs._491Code.GDIMG_9595PreguntaObjects1= [];
gdjs._491Code.GDIMG_9595PreguntaObjects2= [];
gdjs._491Code.GDIMG_9595PreguntaObjects3= [];
gdjs._491Code.GDIMG_9595PreguntaObjects4= [];
gdjs._491Code.GDIMG_9595PreguntaObjects5= [];
gdjs._491Code.GDIMG_9595PreguntaObjects6= [];
gdjs._491Code.GDMousePointObjects1= [];
gdjs._491Code.GDMousePointObjects2= [];
gdjs._491Code.GDMousePointObjects3= [];
gdjs._491Code.GDMousePointObjects4= [];
gdjs._491Code.GDMousePointObjects5= [];
gdjs._491Code.GDMousePointObjects6= [];
gdjs._491Code.GDSiguienteObjects1= [];
gdjs._491Code.GDSiguienteObjects2= [];
gdjs._491Code.GDSiguienteObjects3= [];
gdjs._491Code.GDSiguienteObjects4= [];
gdjs._491Code.GDSiguienteObjects5= [];
gdjs._491Code.GDSiguienteObjects6= [];
gdjs._491Code.GDFondoObjects1= [];
gdjs._491Code.GDFondoObjects2= [];
gdjs._491Code.GDFondoObjects3= [];
gdjs._491Code.GDFondoObjects4= [];
gdjs._491Code.GDFondoObjects5= [];
gdjs._491Code.GDFondoObjects6= [];


gdjs._491Code.asyncCallback20991996 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs._491Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("IMG_Pregunta"), gdjs._491Code.GDIMG_9595PreguntaObjects2);

{for(var i = 0, len = gdjs._491Code.GDIMG_9595PreguntaObjects2.length ;i < len;++i) {
    gdjs._491Code.GDIMG_9595PreguntaObjects2[i].getBehavior("Tween").addObjectScaleTween("Thumb", 1, 1, "swingFromTo", 400, false, true);
}
}gdjs._491Code.localVariables.length = 0;
}
gdjs._491Code.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs._491Code.localVariables);
for (const obj of gdjs._491Code.GDIMG_9595PreguntaObjects1) asyncObjectsList.addObject("IMG_Pregunta", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.2), (runtimeScene) => (gdjs._491Code.asyncCallback20991996(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs._491Code.mapOfGDgdjs_9546_9595491Code_9546GDMousePointObjects3Objects = Hashtable.newFrom({"MousePoint": gdjs._491Code.GDMousePointObjects3});
gdjs._491Code.mapOfGDgdjs_9546_9595491Code_9546GDOpcionesObjects3Objects = Hashtable.newFrom({"Opciones": gdjs._491Code.GDOpcionesObjects3});
gdjs._491Code.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() == 1);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setString("Divertidx");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() == 2);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).setString("Divertidx");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() == 3);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(2).setString("Divertidx");
}}

}


};gdjs._491Code.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() == 1);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setString("Auténticx");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() == 2);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).setString("Auténticx");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() == 3);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(2).setString("Auténticx");
}}

}


};gdjs._491Code.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() == 1);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setString("Guapx");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() == 2);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).setString("Guapx");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() == 3);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(2).setString("Guapx");
}}

}


};gdjs._491Code.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() == 1);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setString("Millonarix");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() == 2);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).setString("Millonarix");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() == 3);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(2).setString("Millonarix");
}}

}


};gdjs._491Code.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() == 1);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setString("Popular");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() == 2);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).setString("Popular");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() == 3);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(2).setString("Popular");
}}

}


};gdjs._491Code.eventsList6 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() == 1);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setString("Creativx");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() == 2);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).setString("Creativx");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() == 3);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(2).setString("Creativx");
}}

}


};gdjs._491Code.eventsList7 = function(runtimeScene) {

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


};gdjs._491Code.eventsList8 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() == 1);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setString("Cercanx a tu realidad");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() == 2);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).setString("Cercanx a tu realidad");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() == 3);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(2).setString("Cercanx a tu realidad");
}}

}


};gdjs._491Code.eventsList9 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() == 1);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setString("Inspiradorx");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() == 2);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).setString("Inspiradorx");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() == 3);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(2).setString("Inspiradorx");
}}

}


};gdjs._491Code.eventsList10 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() == 1);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setString("Inteligente");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() == 2);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).setString("Inteligente");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() == 3);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(2).setString("Inteligente");
}}

}


};gdjs._491Code.eventsList11 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() == 1);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setString("Activista/comprometidx");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() == 2);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).setString("Activista/comprometidx");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() == 3);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(2).setString("Activista/comprometidx");
}}

}


};gdjs._491Code.eventsList12 = function(runtimeScene) {

{

gdjs.copyArray(gdjs._491Code.GDOpcionesObjects3, gdjs._491Code.GDOpcionesObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._491Code.GDOpcionesObjects4.length;i<l;++i) {
    if ( gdjs._491Code.GDOpcionesObjects4[i].getVariableNumber(gdjs._491Code.GDOpcionesObjects4[i].getVariables().getFromIndex(0)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs._491Code.GDOpcionesObjects4[k] = gdjs._491Code.GDOpcionesObjects4[i];
        ++k;
    }
}
gdjs._491Code.GDOpcionesObjects4.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs._491Code.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs._491Code.GDOpcionesObjects3, gdjs._491Code.GDOpcionesObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._491Code.GDOpcionesObjects4.length;i<l;++i) {
    if ( gdjs._491Code.GDOpcionesObjects4[i].getVariableNumber(gdjs._491Code.GDOpcionesObjects4[i].getVariables().getFromIndex(0)) == 2 ) {
        isConditionTrue_0 = true;
        gdjs._491Code.GDOpcionesObjects4[k] = gdjs._491Code.GDOpcionesObjects4[i];
        ++k;
    }
}
gdjs._491Code.GDOpcionesObjects4.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs._491Code.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs._491Code.GDOpcionesObjects3, gdjs._491Code.GDOpcionesObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._491Code.GDOpcionesObjects4.length;i<l;++i) {
    if ( gdjs._491Code.GDOpcionesObjects4[i].getVariableNumber(gdjs._491Code.GDOpcionesObjects4[i].getVariables().getFromIndex(0)) == 3 ) {
        isConditionTrue_0 = true;
        gdjs._491Code.GDOpcionesObjects4[k] = gdjs._491Code.GDOpcionesObjects4[i];
        ++k;
    }
}
gdjs._491Code.GDOpcionesObjects4.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs._491Code.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs._491Code.GDOpcionesObjects3, gdjs._491Code.GDOpcionesObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._491Code.GDOpcionesObjects4.length;i<l;++i) {
    if ( gdjs._491Code.GDOpcionesObjects4[i].getVariableNumber(gdjs._491Code.GDOpcionesObjects4[i].getVariables().getFromIndex(0)) == 4 ) {
        isConditionTrue_0 = true;
        gdjs._491Code.GDOpcionesObjects4[k] = gdjs._491Code.GDOpcionesObjects4[i];
        ++k;
    }
}
gdjs._491Code.GDOpcionesObjects4.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs._491Code.eventsList4(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs._491Code.GDOpcionesObjects3, gdjs._491Code.GDOpcionesObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._491Code.GDOpcionesObjects4.length;i<l;++i) {
    if ( gdjs._491Code.GDOpcionesObjects4[i].getVariableNumber(gdjs._491Code.GDOpcionesObjects4[i].getVariables().getFromIndex(0)) == 5 ) {
        isConditionTrue_0 = true;
        gdjs._491Code.GDOpcionesObjects4[k] = gdjs._491Code.GDOpcionesObjects4[i];
        ++k;
    }
}
gdjs._491Code.GDOpcionesObjects4.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs._491Code.eventsList5(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs._491Code.GDOpcionesObjects3, gdjs._491Code.GDOpcionesObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._491Code.GDOpcionesObjects4.length;i<l;++i) {
    if ( gdjs._491Code.GDOpcionesObjects4[i].getVariableNumber(gdjs._491Code.GDOpcionesObjects4[i].getVariables().getFromIndex(0)) == 6 ) {
        isConditionTrue_0 = true;
        gdjs._491Code.GDOpcionesObjects4[k] = gdjs._491Code.GDOpcionesObjects4[i];
        ++k;
    }
}
gdjs._491Code.GDOpcionesObjects4.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs._491Code.eventsList6(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs._491Code.GDOpcionesObjects3, gdjs._491Code.GDOpcionesObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._491Code.GDOpcionesObjects4.length;i<l;++i) {
    if ( gdjs._491Code.GDOpcionesObjects4[i].getVariableNumber(gdjs._491Code.GDOpcionesObjects4[i].getVariables().getFromIndex(0)) == 7 ) {
        isConditionTrue_0 = true;
        gdjs._491Code.GDOpcionesObjects4[k] = gdjs._491Code.GDOpcionesObjects4[i];
        ++k;
    }
}
gdjs._491Code.GDOpcionesObjects4.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs._491Code.eventsList7(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs._491Code.GDOpcionesObjects3, gdjs._491Code.GDOpcionesObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._491Code.GDOpcionesObjects4.length;i<l;++i) {
    if ( gdjs._491Code.GDOpcionesObjects4[i].getVariableNumber(gdjs._491Code.GDOpcionesObjects4[i].getVariables().getFromIndex(0)) == 8 ) {
        isConditionTrue_0 = true;
        gdjs._491Code.GDOpcionesObjects4[k] = gdjs._491Code.GDOpcionesObjects4[i];
        ++k;
    }
}
gdjs._491Code.GDOpcionesObjects4.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs._491Code.eventsList8(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs._491Code.GDOpcionesObjects3, gdjs._491Code.GDOpcionesObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._491Code.GDOpcionesObjects4.length;i<l;++i) {
    if ( gdjs._491Code.GDOpcionesObjects4[i].getVariableNumber(gdjs._491Code.GDOpcionesObjects4[i].getVariables().getFromIndex(0)) == 9 ) {
        isConditionTrue_0 = true;
        gdjs._491Code.GDOpcionesObjects4[k] = gdjs._491Code.GDOpcionesObjects4[i];
        ++k;
    }
}
gdjs._491Code.GDOpcionesObjects4.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs._491Code.eventsList9(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs._491Code.GDOpcionesObjects3, gdjs._491Code.GDOpcionesObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._491Code.GDOpcionesObjects4.length;i<l;++i) {
    if ( gdjs._491Code.GDOpcionesObjects4[i].getVariableNumber(gdjs._491Code.GDOpcionesObjects4[i].getVariables().getFromIndex(0)) == 10 ) {
        isConditionTrue_0 = true;
        gdjs._491Code.GDOpcionesObjects4[k] = gdjs._491Code.GDOpcionesObjects4[i];
        ++k;
    }
}
gdjs._491Code.GDOpcionesObjects4.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs._491Code.eventsList10(runtimeScene);} //End of subevents
}

}


{

/* Reuse gdjs._491Code.GDOpcionesObjects3 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._491Code.GDOpcionesObjects3.length;i<l;++i) {
    if ( gdjs._491Code.GDOpcionesObjects3[i].getVariableNumber(gdjs._491Code.GDOpcionesObjects3[i].getVariables().getFromIndex(0)) == 11 ) {
        isConditionTrue_0 = true;
        gdjs._491Code.GDOpcionesObjects3[k] = gdjs._491Code.GDOpcionesObjects3[i];
        ++k;
    }
}
gdjs._491Code.GDOpcionesObjects3.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs._491Code.eventsList11(runtimeScene);} //End of subevents
}

}


};gdjs._491Code.eventsList13 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("MousePoint"), gdjs._491Code.GDMousePointObjects3);
gdjs.copyArray(gdjs._491Code.GDOpcionesObjects2, gdjs._491Code.GDOpcionesObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._491Code.mapOfGDgdjs_9546_9595491Code_9546GDMousePointObjects3Objects, gdjs._491Code.mapOfGDgdjs_9546_9595491Code_9546GDOpcionesObjects3Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._491Code.GDOpcionesObjects3.length;i<l;++i) {
    if ( gdjs._491Code.GDOpcionesObjects3[i].getBehavior("Scale").getScale() == 1 ) {
        isConditionTrue_0 = true;
        gdjs._491Code.GDOpcionesObjects3[k] = gdjs._491Code.GDOpcionesObjects3[i];
        ++k;
    }
}
gdjs._491Code.GDOpcionesObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(20995772);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs._491Code.GDOpcionesObjects3 */
{for(var i = 0, len = gdjs._491Code.GDOpcionesObjects3.length ;i < len;++i) {
    gdjs._491Code.GDOpcionesObjects3[i].setAnimationFrame(1);
}
}{for(var i = 0, len = gdjs._491Code.GDOpcionesObjects3.length ;i < len;++i) {
    gdjs._491Code.GDOpcionesObjects3[i].getBehavior("Tween").addObjectScaleTween("XD", 1.1, 1.1, "linear", 100, false, true);
}
}{runtimeScene.getScene().getVariables().getFromIndex(4).add(1);
}
{ //Subevents
gdjs._491Code.eventsList12(runtimeScene);} //End of subevents
}

}


};gdjs._491Code.eventsList14 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {

{ //Subevents
gdjs._491Code.eventsList13(runtimeScene);} //End of subevents
}

}


};gdjs._491Code.eventsList15 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Opciones"), gdjs._491Code.GDOpcionesObjects1);

for (gdjs._491Code.forEachIndex2 = 0;gdjs._491Code.forEachIndex2 < gdjs._491Code.GDOpcionesObjects1.length;++gdjs._491Code.forEachIndex2) {
gdjs._491Code.GDOpcionesObjects2.length = 0;


gdjs._491Code.forEachTemporary2 = gdjs._491Code.GDOpcionesObjects1[gdjs._491Code.forEachIndex2];
gdjs._491Code.GDOpcionesObjects2.push(gdjs._491Code.forEachTemporary2);
let isConditionTrue_0 = false;
if (true) {

{ //Subevents: 
gdjs._491Code.eventsList14(runtimeScene);} //Subevents end.
}
}

}


};gdjs._491Code.mapOfGDgdjs_9546_9595491Code_9546GDMousePointObjects2Objects = Hashtable.newFrom({"MousePoint": gdjs._491Code.GDMousePointObjects2});
gdjs._491Code.mapOfGDgdjs_9546_9595491Code_9546GDOpcionesObjects2Objects = Hashtable.newFrom({"Opciones": gdjs._491Code.GDOpcionesObjects2});
gdjs._491Code.mapOfGDgdjs_9546_9595491Code_9546GDMousePointObjects2Objects = Hashtable.newFrom({"MousePoint": gdjs._491Code.GDMousePointObjects2});
gdjs._491Code.mapOfGDgdjs_9546_9595491Code_9546GDFondoObjects2Objects = Hashtable.newFrom({"Fondo": gdjs._491Code.GDFondoObjects2});
gdjs._491Code.mapOfGDgdjs_9546_9595491Code_9546GDMousePointObjects2Objects = Hashtable.newFrom({"MousePoint": gdjs._491Code.GDMousePointObjects2});
gdjs._491Code.mapOfGDgdjs_9546_9595491Code_9546GDOpcionesObjects2Objects = Hashtable.newFrom({"Opciones": gdjs._491Code.GDOpcionesObjects2});
gdjs._491Code.eventsList16 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("MousePoint"), gdjs._491Code.GDMousePointObjects2);
gdjs.copyArray(runtimeScene.getObjects("Opciones"), gdjs._491Code.GDOpcionesObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._491Code.mapOfGDgdjs_9546_9595491Code_9546GDMousePointObjects2Objects, gdjs._491Code.mapOfGDgdjs_9546_9595491Code_9546GDOpcionesObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._491Code.GDOpcionesObjects2.length;i<l;++i) {
    if ( gdjs._491Code.GDOpcionesObjects2[i].getBehavior("Scale").getScale() == 1.1 ) {
        isConditionTrue_0 = true;
        gdjs._491Code.GDOpcionesObjects2[k] = gdjs._491Code.GDOpcionesObjects2[i];
        ++k;
    }
}
gdjs._491Code.GDOpcionesObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(20968828);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs._491Code.GDOpcionesObjects2 */
{for(var i = 0, len = gdjs._491Code.GDOpcionesObjects2.length ;i < len;++i) {
    gdjs._491Code.GDOpcionesObjects2[i].getBehavior("Tween").addObjectScaleTween("XD2", 1, 1, "linear", 100, false, true);
}
}{for(var i = 0, len = gdjs._491Code.GDOpcionesObjects2.length ;i < len;++i) {
    gdjs._491Code.GDOpcionesObjects2[i].setAnimationFrame(0);
}
}{runtimeScene.getScene().getVariables().getFromIndex(4).sub(1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Fondo"), gdjs._491Code.GDFondoObjects2);
gdjs.copyArray(runtimeScene.getObjects("MousePoint"), gdjs._491Code.GDMousePointObjects2);
gdjs.copyArray(runtimeScene.getObjects("Opciones"), gdjs._491Code.GDOpcionesObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._491Code.mapOfGDgdjs_9546_9595491Code_9546GDMousePointObjects2Objects, gdjs._491Code.mapOfGDgdjs_9546_9595491Code_9546GDFondoObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._491Code.mapOfGDgdjs_9546_9595491Code_9546GDMousePointObjects2Objects, gdjs._491Code.mapOfGDgdjs_9546_9595491Code_9546GDOpcionesObjects2Objects, true, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(20971380);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs._491Code.GDOpcionesObjects2 */
{for(var i = 0, len = gdjs._491Code.GDOpcionesObjects2.length ;i < len;++i) {
    gdjs._491Code.GDOpcionesObjects2[i].getBehavior("Tween").addObjectScaleTween("XD2", 1, 1, "linear", 100, false, true);
}
}{for(var i = 0, len = gdjs._491Code.GDOpcionesObjects2.length ;i < len;++i) {
    gdjs._491Code.GDOpcionesObjects2[i].setAnimationFrame(0);
}
}{runtimeScene.getScene().getVariables().getFromIndex(4).setNumber(0);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() != 3);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(21022036);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Siguiente"), gdjs._491Code.GDSiguienteObjects2);
{for(var i = 0, len = gdjs._491Code.GDSiguienteObjects2.length ;i < len;++i) {
    gdjs._491Code.GDSiguienteObjects2[i].setOpacity(150);
}
}{for(var i = 0, len = gdjs._491Code.GDSiguienteObjects2.length ;i < len;++i) {
    gdjs._491Code.GDSiguienteObjects2[i].setAnimation(0);
}
}{for(var i = 0, len = gdjs._491Code.GDSiguienteObjects2.length ;i < len;++i) {
    gdjs._491Code.GDSiguienteObjects2[i].getBehavior("Tween").addObjectScaleTween("as", 0.75, 0.75, "linear", 100, false, true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Opciones"), gdjs._491Code.GDOpcionesObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._491Code.GDOpcionesObjects1.length;i<l;++i) {
    if ( gdjs._491Code.GDOpcionesObjects1[i].getAnimationFrame() == 1 ) {
        isConditionTrue_0 = true;
        gdjs._491Code.GDOpcionesObjects1[k] = gdjs._491Code.GDOpcionesObjects1[i];
        ++k;
    }
}
gdjs._491Code.GDOpcionesObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() == 3);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(21023524);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Siguiente"), gdjs._491Code.GDSiguienteObjects1);
{for(var i = 0, len = gdjs._491Code.GDSiguienteObjects1.length ;i < len;++i) {
    gdjs._491Code.GDSiguienteObjects1[i].getBehavior("Tween").addObjectScaleTween("as", 0.8, 0.8, "bouncePast", 100, false, true);
}
}{for(var i = 0, len = gdjs._491Code.GDSiguienteObjects1.length ;i < len;++i) {
    gdjs._491Code.GDSiguienteObjects1[i].setAnimation(1);
}
}{for(var i = 0, len = gdjs._491Code.GDSiguienteObjects1.length ;i < len;++i) {
    gdjs._491Code.GDSiguienteObjects1[i].setOpacity(255);
}
}}

}


};gdjs._491Code.mapOfGDgdjs_9546_9595491Code_9546GDSiguienteObjects1Objects = Hashtable.newFrom({"Siguiente": gdjs._491Code.GDSiguienteObjects1});
gdjs._491Code.eventsList17 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BarraMoradaAzul"), gdjs._491Code.GDBarraMoradaAzulObjects1);
gdjs.copyArray(runtimeScene.getObjects("IMG_Pregunta"), gdjs._491Code.GDIMG_9595PreguntaObjects1);
gdjs.copyArray(runtimeScene.getObjects("MousePoint"), gdjs._491Code.GDMousePointObjects1);
gdjs.copyArray(runtimeScene.getObjects("Opciones"), gdjs._491Code.GDOpcionesObjects1);
gdjs.copyArray(runtimeScene.getObjects("Siguiente"), gdjs._491Code.GDSiguienteObjects1);
{for(var i = 0, len = gdjs._491Code.GDMousePointObjects1.length ;i < len;++i) {
    gdjs._491Code.GDMousePointObjects1[i].hide();
}
}{for(var i = 0, len = gdjs._491Code.GDSiguienteObjects1.length ;i < len;++i) {
    gdjs._491Code.GDSiguienteObjects1[i].getBehavior("Tween").addObjectScaleTween("as", 0.75, 0.75, "linear", 1, false, true);
}
}{for(var i = 0, len = gdjs._491Code.GDBarraMoradaAzulObjects1.length ;i < len;++i) {
    gdjs._491Code.GDBarraMoradaAzulObjects1[i].getBehavior("DraggableSliderControl").SetValue(13, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs._491Code.GDSiguienteObjects1.length ;i < len;++i) {
    gdjs._491Code.GDSiguienteObjects1[i].setAnimation(0);
}
}{for(var i = 0, len = gdjs._491Code.GDSiguienteObjects1.length ;i < len;++i) {
    gdjs._491Code.GDSiguienteObjects1[i].setOpacity(150);
}
}{for(var i = 0, len = gdjs._491Code.GDOpcionesObjects1.length ;i < len;++i) {
    gdjs._491Code.GDOpcionesObjects1[i].pauseAnimation();
}
}{for(var i = 0, len = gdjs._491Code.GDOpcionesObjects1.length ;i < len;++i) {
    gdjs._491Code.GDOpcionesObjects1[i].setAnimationFrame(0);
}
}{for(var i = 0, len = gdjs._491Code.GDIMG_9595PreguntaObjects1.length ;i < len;++i) {
    gdjs._491Code.GDIMG_9595PreguntaObjects1[i].getBehavior("Tween").addObjectScaleTween("Thumb", 0.5, 0.5, "linear", 1, false, true);
}
}
{ //Subevents
gdjs._491Code.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() <= 2);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs._491Code.eventsList15(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {

{ //Subevents
gdjs._491Code.eventsList16(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("MousePoint"), gdjs._491Code.GDMousePointObjects1);
{for(var i = 0, len = gdjs._491Code.GDMousePointObjects1.length ;i < len;++i) {
    gdjs._491Code.GDMousePointObjects1[i].setPosition(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0),gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Siguiente"), gdjs._491Code.GDSiguienteObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._491Code.mapOfGDgdjs_9546_9595491Code_9546GDSiguienteObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._491Code.GDSiguienteObjects1.length;i<l;++i) {
    if ( gdjs._491Code.GDSiguienteObjects1[i].getOpacity() == 255 ) {
        isConditionTrue_0 = true;
        gdjs._491Code.GDSiguienteObjects1[k] = gdjs._491Code.GDSiguienteObjects1[i];
        ++k;
    }
}
gdjs._491Code.GDSiguienteObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(21025660);
}
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().get("User").getChild("CualidadesDelInfluencer").setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0)) + " y " + gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(1)) + " y " + gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(2)));
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "12", false);
}}

}


};

gdjs._491Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._491Code.GDOpcionesObjects1.length = 0;
gdjs._491Code.GDOpcionesObjects2.length = 0;
gdjs._491Code.GDOpcionesObjects3.length = 0;
gdjs._491Code.GDOpcionesObjects4.length = 0;
gdjs._491Code.GDOpcionesObjects5.length = 0;
gdjs._491Code.GDOpcionesObjects6.length = 0;
gdjs._491Code.GDBarraMoradaAzulObjects1.length = 0;
gdjs._491Code.GDBarraMoradaAzulObjects2.length = 0;
gdjs._491Code.GDBarraMoradaAzulObjects3.length = 0;
gdjs._491Code.GDBarraMoradaAzulObjects4.length = 0;
gdjs._491Code.GDBarraMoradaAzulObjects5.length = 0;
gdjs._491Code.GDBarraMoradaAzulObjects6.length = 0;
gdjs._491Code.GDIMG_9595PreguntaObjects1.length = 0;
gdjs._491Code.GDIMG_9595PreguntaObjects2.length = 0;
gdjs._491Code.GDIMG_9595PreguntaObjects3.length = 0;
gdjs._491Code.GDIMG_9595PreguntaObjects4.length = 0;
gdjs._491Code.GDIMG_9595PreguntaObjects5.length = 0;
gdjs._491Code.GDIMG_9595PreguntaObjects6.length = 0;
gdjs._491Code.GDMousePointObjects1.length = 0;
gdjs._491Code.GDMousePointObjects2.length = 0;
gdjs._491Code.GDMousePointObjects3.length = 0;
gdjs._491Code.GDMousePointObjects4.length = 0;
gdjs._491Code.GDMousePointObjects5.length = 0;
gdjs._491Code.GDMousePointObjects6.length = 0;
gdjs._491Code.GDSiguienteObjects1.length = 0;
gdjs._491Code.GDSiguienteObjects2.length = 0;
gdjs._491Code.GDSiguienteObjects3.length = 0;
gdjs._491Code.GDSiguienteObjects4.length = 0;
gdjs._491Code.GDSiguienteObjects5.length = 0;
gdjs._491Code.GDSiguienteObjects6.length = 0;
gdjs._491Code.GDFondoObjects1.length = 0;
gdjs._491Code.GDFondoObjects2.length = 0;
gdjs._491Code.GDFondoObjects3.length = 0;
gdjs._491Code.GDFondoObjects4.length = 0;
gdjs._491Code.GDFondoObjects5.length = 0;
gdjs._491Code.GDFondoObjects6.length = 0;

gdjs._491Code.eventsList17(runtimeScene);
gdjs._491Code.GDOpcionesObjects1.length = 0;
gdjs._491Code.GDOpcionesObjects2.length = 0;
gdjs._491Code.GDOpcionesObjects3.length = 0;
gdjs._491Code.GDOpcionesObjects4.length = 0;
gdjs._491Code.GDOpcionesObjects5.length = 0;
gdjs._491Code.GDOpcionesObjects6.length = 0;
gdjs._491Code.GDBarraMoradaAzulObjects1.length = 0;
gdjs._491Code.GDBarraMoradaAzulObjects2.length = 0;
gdjs._491Code.GDBarraMoradaAzulObjects3.length = 0;
gdjs._491Code.GDBarraMoradaAzulObjects4.length = 0;
gdjs._491Code.GDBarraMoradaAzulObjects5.length = 0;
gdjs._491Code.GDBarraMoradaAzulObjects6.length = 0;
gdjs._491Code.GDIMG_9595PreguntaObjects1.length = 0;
gdjs._491Code.GDIMG_9595PreguntaObjects2.length = 0;
gdjs._491Code.GDIMG_9595PreguntaObjects3.length = 0;
gdjs._491Code.GDIMG_9595PreguntaObjects4.length = 0;
gdjs._491Code.GDIMG_9595PreguntaObjects5.length = 0;
gdjs._491Code.GDIMG_9595PreguntaObjects6.length = 0;
gdjs._491Code.GDMousePointObjects1.length = 0;
gdjs._491Code.GDMousePointObjects2.length = 0;
gdjs._491Code.GDMousePointObjects3.length = 0;
gdjs._491Code.GDMousePointObjects4.length = 0;
gdjs._491Code.GDMousePointObjects5.length = 0;
gdjs._491Code.GDMousePointObjects6.length = 0;
gdjs._491Code.GDSiguienteObjects1.length = 0;
gdjs._491Code.GDSiguienteObjects2.length = 0;
gdjs._491Code.GDSiguienteObjects3.length = 0;
gdjs._491Code.GDSiguienteObjects4.length = 0;
gdjs._491Code.GDSiguienteObjects5.length = 0;
gdjs._491Code.GDSiguienteObjects6.length = 0;
gdjs._491Code.GDFondoObjects1.length = 0;
gdjs._491Code.GDFondoObjects2.length = 0;
gdjs._491Code.GDFondoObjects3.length = 0;
gdjs._491Code.GDFondoObjects4.length = 0;
gdjs._491Code.GDFondoObjects5.length = 0;
gdjs._491Code.GDFondoObjects6.length = 0;


return;

}

gdjs['_491Code'] = gdjs._491Code;
