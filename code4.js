gdjs._53Code = {};
gdjs._53Code.localVariables = [];
gdjs._53Code.forEachIndex2 = 0;

gdjs._53Code.forEachObjects2 = [];

gdjs._53Code.forEachTemporary2 = null;

gdjs._53Code.forEachTotalCount2 = 0;

gdjs._53Code.GDOpcionesObjects1= [];
gdjs._53Code.GDOpcionesObjects2= [];
gdjs._53Code.GDOpcionesObjects3= [];
gdjs._53Code.GDOpcionesObjects4= [];
gdjs._53Code.GDOpcionesObjects5= [];
gdjs._53Code.GDOpcionesObjects6= [];
gdjs._53Code.GDBarraRojoBlancoObjects1= [];
gdjs._53Code.GDBarraRojoBlancoObjects2= [];
gdjs._53Code.GDBarraRojoBlancoObjects3= [];
gdjs._53Code.GDBarraRojoBlancoObjects4= [];
gdjs._53Code.GDBarraRojoBlancoObjects5= [];
gdjs._53Code.GDBarraRojoBlancoObjects6= [];
gdjs._53Code.GDIMG_9595PreguntaObjects1= [];
gdjs._53Code.GDIMG_9595PreguntaObjects2= [];
gdjs._53Code.GDIMG_9595PreguntaObjects3= [];
gdjs._53Code.GDIMG_9595PreguntaObjects4= [];
gdjs._53Code.GDIMG_9595PreguntaObjects5= [];
gdjs._53Code.GDIMG_9595PreguntaObjects6= [];
gdjs._53Code.GDMousePointObjects1= [];
gdjs._53Code.GDMousePointObjects2= [];
gdjs._53Code.GDMousePointObjects3= [];
gdjs._53Code.GDMousePointObjects4= [];
gdjs._53Code.GDMousePointObjects5= [];
gdjs._53Code.GDMousePointObjects6= [];
gdjs._53Code.GDFondoObjects1= [];
gdjs._53Code.GDFondoObjects2= [];
gdjs._53Code.GDFondoObjects3= [];
gdjs._53Code.GDFondoObjects4= [];
gdjs._53Code.GDFondoObjects5= [];
gdjs._53Code.GDFondoObjects6= [];
gdjs._53Code.GDSiguienteObjects1= [];
gdjs._53Code.GDSiguienteObjects2= [];
gdjs._53Code.GDSiguienteObjects3= [];
gdjs._53Code.GDSiguienteObjects4= [];
gdjs._53Code.GDSiguienteObjects5= [];
gdjs._53Code.GDSiguienteObjects6= [];
gdjs._53Code.GDSubtObjects1= [];
gdjs._53Code.GDSubtObjects2= [];
gdjs._53Code.GDSubtObjects3= [];
gdjs._53Code.GDSubtObjects4= [];
gdjs._53Code.GDSubtObjects5= [];
gdjs._53Code.GDSubtObjects6= [];


gdjs._53Code.asyncCallback20105948 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs._53Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("IMG_Pregunta"), gdjs._53Code.GDIMG_9595PreguntaObjects2);

{for(var i = 0, len = gdjs._53Code.GDIMG_9595PreguntaObjects2.length ;i < len;++i) {
    gdjs._53Code.GDIMG_9595PreguntaObjects2[i].getBehavior("Tween").addObjectScaleTween("Thumb", 1, 1, "swingFromTo", 400, false, true);
}
}gdjs._53Code.localVariables.length = 0;
}
gdjs._53Code.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs._53Code.localVariables);
for (const obj of gdjs._53Code.GDIMG_9595PreguntaObjects1) asyncObjectsList.addObject("IMG_Pregunta", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.2), (runtimeScene) => (gdjs._53Code.asyncCallback20105948(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs._53Code.mapOfGDgdjs_9546_959553Code_9546GDMousePointObjects3Objects = Hashtable.newFrom({"MousePoint": gdjs._53Code.GDMousePointObjects3});
gdjs._53Code.mapOfGDgdjs_9546_959553Code_9546GDOpcionesObjects3Objects = Hashtable.newFrom({"Opciones": gdjs._53Code.GDOpcionesObjects3});
gdjs._53Code.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() == 1);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setString("Escuchando música, viendo vídeos, series y películas");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() == 2);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).setString("Escuchando música, viendo vídeos, series y películas");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() == 3);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(2).setString("Escuchando música, viendo vídeos, series y películas");
}}

}


};gdjs._53Code.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() == 1);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setString("Interactuando en redes sociales");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() == 2);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).setString("Interactuando en redes sociales");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() == 3);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(2).setString("Interactuando en redes sociales");
}}

}


};gdjs._53Code.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() == 1);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setString("Jugando videojuegos");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() == 2);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).setString("Jugando videojuegos");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() == 3);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(2).setString("Jugando videojuegos");
}}

}


};gdjs._53Code.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() == 1);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setString("Saliendo con amigxs");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() == 2);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).setString("Saliendo con amigxs");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() == 3);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(2).setString("Saliendo con amigxs");
}}

}


};gdjs._53Code.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() == 1);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setString("Haciendo deporte");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() == 2);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).setString("Haciendo deporte");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() == 3);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(2).setString("Haciendo deporte");
}}

}


};gdjs._53Code.eventsList6 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() == 1);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setString("Leyendo");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() == 2);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).setString("Leyendo");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() == 3);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(2).setString("Leyendo");
}}

}


};gdjs._53Code.eventsList7 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() == 1);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setString("Haciendo música, arte, escribiendo o sacando fotos");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() == 2);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).setString("Haciendo música, arte, escribiendo o sacando fotos");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() == 3);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(2).setString("Haciendo música, arte, escribiendo o sacando fotos");
}}

}


};gdjs._53Code.eventsList8 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() == 1);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setString("Involucrándome en la vida social y política, participando en movilizaciones y buscando soluciones a problemas sociales");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() == 2);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).setString("Involucrándome en la vida social y política, participando en movilizaciones y buscando soluciones a problemas sociales");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() == 3);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(2).setString("Involucrándome en la vida social y política, participando en movilizaciones y buscando soluciones a problemas sociales");
}}

}


};gdjs._53Code.eventsList9 = function(runtimeScene) {

{

gdjs.copyArray(gdjs._53Code.GDOpcionesObjects3, gdjs._53Code.GDOpcionesObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._53Code.GDOpcionesObjects4.length;i<l;++i) {
    if ( gdjs._53Code.GDOpcionesObjects4[i].getVariableNumber(gdjs._53Code.GDOpcionesObjects4[i].getVariables().getFromIndex(0)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs._53Code.GDOpcionesObjects4[k] = gdjs._53Code.GDOpcionesObjects4[i];
        ++k;
    }
}
gdjs._53Code.GDOpcionesObjects4.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs._53Code.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs._53Code.GDOpcionesObjects3, gdjs._53Code.GDOpcionesObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._53Code.GDOpcionesObjects4.length;i<l;++i) {
    if ( gdjs._53Code.GDOpcionesObjects4[i].getVariableNumber(gdjs._53Code.GDOpcionesObjects4[i].getVariables().getFromIndex(0)) == 2 ) {
        isConditionTrue_0 = true;
        gdjs._53Code.GDOpcionesObjects4[k] = gdjs._53Code.GDOpcionesObjects4[i];
        ++k;
    }
}
gdjs._53Code.GDOpcionesObjects4.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs._53Code.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs._53Code.GDOpcionesObjects3, gdjs._53Code.GDOpcionesObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._53Code.GDOpcionesObjects4.length;i<l;++i) {
    if ( gdjs._53Code.GDOpcionesObjects4[i].getVariableNumber(gdjs._53Code.GDOpcionesObjects4[i].getVariables().getFromIndex(0)) == 3 ) {
        isConditionTrue_0 = true;
        gdjs._53Code.GDOpcionesObjects4[k] = gdjs._53Code.GDOpcionesObjects4[i];
        ++k;
    }
}
gdjs._53Code.GDOpcionesObjects4.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs._53Code.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs._53Code.GDOpcionesObjects3, gdjs._53Code.GDOpcionesObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._53Code.GDOpcionesObjects4.length;i<l;++i) {
    if ( gdjs._53Code.GDOpcionesObjects4[i].getVariableNumber(gdjs._53Code.GDOpcionesObjects4[i].getVariables().getFromIndex(0)) == 4 ) {
        isConditionTrue_0 = true;
        gdjs._53Code.GDOpcionesObjects4[k] = gdjs._53Code.GDOpcionesObjects4[i];
        ++k;
    }
}
gdjs._53Code.GDOpcionesObjects4.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs._53Code.eventsList4(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs._53Code.GDOpcionesObjects3, gdjs._53Code.GDOpcionesObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._53Code.GDOpcionesObjects4.length;i<l;++i) {
    if ( gdjs._53Code.GDOpcionesObjects4[i].getVariableNumber(gdjs._53Code.GDOpcionesObjects4[i].getVariables().getFromIndex(0)) == 5 ) {
        isConditionTrue_0 = true;
        gdjs._53Code.GDOpcionesObjects4[k] = gdjs._53Code.GDOpcionesObjects4[i];
        ++k;
    }
}
gdjs._53Code.GDOpcionesObjects4.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs._53Code.eventsList5(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs._53Code.GDOpcionesObjects3, gdjs._53Code.GDOpcionesObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._53Code.GDOpcionesObjects4.length;i<l;++i) {
    if ( gdjs._53Code.GDOpcionesObjects4[i].getVariableNumber(gdjs._53Code.GDOpcionesObjects4[i].getVariables().getFromIndex(0)) == 6 ) {
        isConditionTrue_0 = true;
        gdjs._53Code.GDOpcionesObjects4[k] = gdjs._53Code.GDOpcionesObjects4[i];
        ++k;
    }
}
gdjs._53Code.GDOpcionesObjects4.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs._53Code.eventsList6(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs._53Code.GDOpcionesObjects3, gdjs._53Code.GDOpcionesObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._53Code.GDOpcionesObjects4.length;i<l;++i) {
    if ( gdjs._53Code.GDOpcionesObjects4[i].getVariableNumber(gdjs._53Code.GDOpcionesObjects4[i].getVariables().getFromIndex(0)) == 7 ) {
        isConditionTrue_0 = true;
        gdjs._53Code.GDOpcionesObjects4[k] = gdjs._53Code.GDOpcionesObjects4[i];
        ++k;
    }
}
gdjs._53Code.GDOpcionesObjects4.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs._53Code.eventsList7(runtimeScene);} //End of subevents
}

}


{

/* Reuse gdjs._53Code.GDOpcionesObjects3 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._53Code.GDOpcionesObjects3.length;i<l;++i) {
    if ( gdjs._53Code.GDOpcionesObjects3[i].getVariableNumber(gdjs._53Code.GDOpcionesObjects3[i].getVariables().getFromIndex(0)) == 8 ) {
        isConditionTrue_0 = true;
        gdjs._53Code.GDOpcionesObjects3[k] = gdjs._53Code.GDOpcionesObjects3[i];
        ++k;
    }
}
gdjs._53Code.GDOpcionesObjects3.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs._53Code.eventsList8(runtimeScene);} //End of subevents
}

}


};gdjs._53Code.eventsList10 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("MousePoint"), gdjs._53Code.GDMousePointObjects3);
gdjs.copyArray(gdjs._53Code.GDOpcionesObjects2, gdjs._53Code.GDOpcionesObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._53Code.mapOfGDgdjs_9546_959553Code_9546GDMousePointObjects3Objects, gdjs._53Code.mapOfGDgdjs_9546_959553Code_9546GDOpcionesObjects3Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._53Code.GDOpcionesObjects3.length;i<l;++i) {
    if ( gdjs._53Code.GDOpcionesObjects3[i].getBehavior("Scale").getScale() == 1 ) {
        isConditionTrue_0 = true;
        gdjs._53Code.GDOpcionesObjects3[k] = gdjs._53Code.GDOpcionesObjects3[i];
        ++k;
    }
}
gdjs._53Code.GDOpcionesObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(20108652);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs._53Code.GDOpcionesObjects3 */
{for(var i = 0, len = gdjs._53Code.GDOpcionesObjects3.length ;i < len;++i) {
    gdjs._53Code.GDOpcionesObjects3[i].setAnimationFrame(1);
}
}{for(var i = 0, len = gdjs._53Code.GDOpcionesObjects3.length ;i < len;++i) {
    gdjs._53Code.GDOpcionesObjects3[i].getBehavior("Tween").addObjectScaleTween("XD", 1.1, 1.1, "linear", 100, false, true);
}
}{runtimeScene.getScene().getVariables().getFromIndex(4).add(1);
}
{ //Subevents
gdjs._53Code.eventsList9(runtimeScene);} //End of subevents
}

}


};gdjs._53Code.eventsList11 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {

{ //Subevents
gdjs._53Code.eventsList10(runtimeScene);} //End of subevents
}

}


};gdjs._53Code.eventsList12 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Opciones"), gdjs._53Code.GDOpcionesObjects1);

for (gdjs._53Code.forEachIndex2 = 0;gdjs._53Code.forEachIndex2 < gdjs._53Code.GDOpcionesObjects1.length;++gdjs._53Code.forEachIndex2) {
gdjs._53Code.GDOpcionesObjects2.length = 0;


gdjs._53Code.forEachTemporary2 = gdjs._53Code.GDOpcionesObjects1[gdjs._53Code.forEachIndex2];
gdjs._53Code.GDOpcionesObjects2.push(gdjs._53Code.forEachTemporary2);
let isConditionTrue_0 = false;
if (true) {

{ //Subevents: 
gdjs._53Code.eventsList11(runtimeScene);} //Subevents end.
}
}

}


};gdjs._53Code.mapOfGDgdjs_9546_959553Code_9546GDMousePointObjects2Objects = Hashtable.newFrom({"MousePoint": gdjs._53Code.GDMousePointObjects2});
gdjs._53Code.mapOfGDgdjs_9546_959553Code_9546GDOpcionesObjects2Objects = Hashtable.newFrom({"Opciones": gdjs._53Code.GDOpcionesObjects2});
gdjs._53Code.mapOfGDgdjs_9546_959553Code_9546GDMousePointObjects2Objects = Hashtable.newFrom({"MousePoint": gdjs._53Code.GDMousePointObjects2});
gdjs._53Code.mapOfGDgdjs_9546_959553Code_9546GDFondoObjects2Objects = Hashtable.newFrom({"Fondo": gdjs._53Code.GDFondoObjects2});
gdjs._53Code.mapOfGDgdjs_9546_959553Code_9546GDMousePointObjects2Objects = Hashtable.newFrom({"MousePoint": gdjs._53Code.GDMousePointObjects2});
gdjs._53Code.mapOfGDgdjs_9546_959553Code_9546GDOpcionesObjects2Objects = Hashtable.newFrom({"Opciones": gdjs._53Code.GDOpcionesObjects2});
gdjs._53Code.eventsList13 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("MousePoint"), gdjs._53Code.GDMousePointObjects2);
gdjs.copyArray(runtimeScene.getObjects("Opciones"), gdjs._53Code.GDOpcionesObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._53Code.mapOfGDgdjs_9546_959553Code_9546GDMousePointObjects2Objects, gdjs._53Code.mapOfGDgdjs_9546_959553Code_9546GDOpcionesObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._53Code.GDOpcionesObjects2.length;i<l;++i) {
    if ( gdjs._53Code.GDOpcionesObjects2[i].getBehavior("Scale").getScale() == 1.1 ) {
        isConditionTrue_0 = true;
        gdjs._53Code.GDOpcionesObjects2[k] = gdjs._53Code.GDOpcionesObjects2[i];
        ++k;
    }
}
gdjs._53Code.GDOpcionesObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(20131868);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs._53Code.GDOpcionesObjects2 */
{for(var i = 0, len = gdjs._53Code.GDOpcionesObjects2.length ;i < len;++i) {
    gdjs._53Code.GDOpcionesObjects2[i].getBehavior("Tween").addObjectScaleTween("XD2", 1, 1, "linear", 100, false, true);
}
}{for(var i = 0, len = gdjs._53Code.GDOpcionesObjects2.length ;i < len;++i) {
    gdjs._53Code.GDOpcionesObjects2[i].setAnimationFrame(0);
}
}{runtimeScene.getScene().getVariables().getFromIndex(4).sub(1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Fondo"), gdjs._53Code.GDFondoObjects2);
gdjs.copyArray(runtimeScene.getObjects("MousePoint"), gdjs._53Code.GDMousePointObjects2);
gdjs.copyArray(runtimeScene.getObjects("Opciones"), gdjs._53Code.GDOpcionesObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._53Code.mapOfGDgdjs_9546_959553Code_9546GDMousePointObjects2Objects, gdjs._53Code.mapOfGDgdjs_9546_959553Code_9546GDFondoObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._53Code.mapOfGDgdjs_9546_959553Code_9546GDMousePointObjects2Objects, gdjs._53Code.mapOfGDgdjs_9546_959553Code_9546GDOpcionesObjects2Objects, true, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(20133876);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs._53Code.GDOpcionesObjects2 */
{for(var i = 0, len = gdjs._53Code.GDOpcionesObjects2.length ;i < len;++i) {
    gdjs._53Code.GDOpcionesObjects2[i].getBehavior("Tween").addObjectScaleTween("XD2", 1, 1, "linear", 100, false, true);
}
}{for(var i = 0, len = gdjs._53Code.GDOpcionesObjects2.length ;i < len;++i) {
    gdjs._53Code.GDOpcionesObjects2[i].setAnimationFrame(0);
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(20135004);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Siguiente"), gdjs._53Code.GDSiguienteObjects2);
{for(var i = 0, len = gdjs._53Code.GDSiguienteObjects2.length ;i < len;++i) {
    gdjs._53Code.GDSiguienteObjects2[i].setOpacity(150);
}
}{for(var i = 0, len = gdjs._53Code.GDSiguienteObjects2.length ;i < len;++i) {
    gdjs._53Code.GDSiguienteObjects2[i].setAnimation(0);
}
}{for(var i = 0, len = gdjs._53Code.GDSiguienteObjects2.length ;i < len;++i) {
    gdjs._53Code.GDSiguienteObjects2[i].getBehavior("Tween").addObjectScaleTween("as", 0.75, 0.75, "linear", 100, false, true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Opciones"), gdjs._53Code.GDOpcionesObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._53Code.GDOpcionesObjects1.length;i<l;++i) {
    if ( gdjs._53Code.GDOpcionesObjects1[i].getAnimationFrame() == 1 ) {
        isConditionTrue_0 = true;
        gdjs._53Code.GDOpcionesObjects1[k] = gdjs._53Code.GDOpcionesObjects1[i];
        ++k;
    }
}
gdjs._53Code.GDOpcionesObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() >= 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(20136780);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Siguiente"), gdjs._53Code.GDSiguienteObjects1);
{for(var i = 0, len = gdjs._53Code.GDSiguienteObjects1.length ;i < len;++i) {
    gdjs._53Code.GDSiguienteObjects1[i].getBehavior("Tween").addObjectScaleTween("as", 0.8, 0.8, "bouncePast", 100, false, true);
}
}{for(var i = 0, len = gdjs._53Code.GDSiguienteObjects1.length ;i < len;++i) {
    gdjs._53Code.GDSiguienteObjects1[i].setAnimation(1);
}
}{for(var i = 0, len = gdjs._53Code.GDSiguienteObjects1.length ;i < len;++i) {
    gdjs._53Code.GDSiguienteObjects1[i].setOpacity(255);
}
}}

}


};gdjs._53Code.mapOfGDgdjs_9546_959553Code_9546GDSiguienteObjects1Objects = Hashtable.newFrom({"Siguiente": gdjs._53Code.GDSiguienteObjects1});
gdjs._53Code.eventsList14 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() == 1);
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().get("User").getChild("ConQueTeDiviertes").setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0)));
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "6.1", false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() == 2);
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().get("User").getChild("ConQueTeDiviertes").setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0)) + " y " + gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(1)));
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "6.1", false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() == 3);
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().get("User").getChild("ConQueTeDiviertes").setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0)) + " y " + gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(1)) + " y " + gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(2)));
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "6.1", false);
}}

}


};gdjs._53Code.eventsList15 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BarraRojoBlanco"), gdjs._53Code.GDBarraRojoBlancoObjects1);
gdjs.copyArray(runtimeScene.getObjects("IMG_Pregunta"), gdjs._53Code.GDIMG_9595PreguntaObjects1);
gdjs.copyArray(runtimeScene.getObjects("MousePoint"), gdjs._53Code.GDMousePointObjects1);
gdjs.copyArray(runtimeScene.getObjects("Opciones"), gdjs._53Code.GDOpcionesObjects1);
gdjs.copyArray(runtimeScene.getObjects("Siguiente"), gdjs._53Code.GDSiguienteObjects1);
{for(var i = 0, len = gdjs._53Code.GDMousePointObjects1.length ;i < len;++i) {
    gdjs._53Code.GDMousePointObjects1[i].hide();
}
}{for(var i = 0, len = gdjs._53Code.GDSiguienteObjects1.length ;i < len;++i) {
    gdjs._53Code.GDSiguienteObjects1[i].getBehavior("Tween").addObjectScaleTween("as", 0.75, 0.75, "linear", 1, false, true);
}
}{for(var i = 0, len = gdjs._53Code.GDBarraRojoBlancoObjects1.length ;i < len;++i) {
    gdjs._53Code.GDBarraRojoBlancoObjects1[i].getBehavior("DraggableSliderControl").SetValue(7, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs._53Code.GDSiguienteObjects1.length ;i < len;++i) {
    gdjs._53Code.GDSiguienteObjects1[i].setAnimation(0);
}
}{for(var i = 0, len = gdjs._53Code.GDSiguienteObjects1.length ;i < len;++i) {
    gdjs._53Code.GDSiguienteObjects1[i].setOpacity(150);
}
}{for(var i = 0, len = gdjs._53Code.GDOpcionesObjects1.length ;i < len;++i) {
    gdjs._53Code.GDOpcionesObjects1[i].pauseAnimation();
}
}{for(var i = 0, len = gdjs._53Code.GDOpcionesObjects1.length ;i < len;++i) {
    gdjs._53Code.GDOpcionesObjects1[i].setAnimationFrame(0);
}
}{for(var i = 0, len = gdjs._53Code.GDIMG_9595PreguntaObjects1.length ;i < len;++i) {
    gdjs._53Code.GDIMG_9595PreguntaObjects1[i].getBehavior("Tween").addObjectScaleTween("Thumb", 0.5, 0.5, "linear", 1, false, true);
}
}
{ //Subevents
gdjs._53Code.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() <= 2);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs._53Code.eventsList12(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {

{ //Subevents
gdjs._53Code.eventsList13(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("MousePoint"), gdjs._53Code.GDMousePointObjects1);
{for(var i = 0, len = gdjs._53Code.GDMousePointObjects1.length ;i < len;++i) {
    gdjs._53Code.GDMousePointObjects1[i].setPosition(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0),gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Siguiente"), gdjs._53Code.GDSiguienteObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._53Code.mapOfGDgdjs_9546_959553Code_9546GDSiguienteObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._53Code.GDSiguienteObjects1.length;i<l;++i) {
    if ( gdjs._53Code.GDSiguienteObjects1[i].getOpacity() == 255 ) {
        isConditionTrue_0 = true;
        gdjs._53Code.GDSiguienteObjects1[k] = gdjs._53Code.GDSiguienteObjects1[i];
        ++k;
    }
}
gdjs._53Code.GDSiguienteObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(20138916);
}
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs._53Code.eventsList14(runtimeScene);} //End of subevents
}

}


};

gdjs._53Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._53Code.GDOpcionesObjects1.length = 0;
gdjs._53Code.GDOpcionesObjects2.length = 0;
gdjs._53Code.GDOpcionesObjects3.length = 0;
gdjs._53Code.GDOpcionesObjects4.length = 0;
gdjs._53Code.GDOpcionesObjects5.length = 0;
gdjs._53Code.GDOpcionesObjects6.length = 0;
gdjs._53Code.GDBarraRojoBlancoObjects1.length = 0;
gdjs._53Code.GDBarraRojoBlancoObjects2.length = 0;
gdjs._53Code.GDBarraRojoBlancoObjects3.length = 0;
gdjs._53Code.GDBarraRojoBlancoObjects4.length = 0;
gdjs._53Code.GDBarraRojoBlancoObjects5.length = 0;
gdjs._53Code.GDBarraRojoBlancoObjects6.length = 0;
gdjs._53Code.GDIMG_9595PreguntaObjects1.length = 0;
gdjs._53Code.GDIMG_9595PreguntaObjects2.length = 0;
gdjs._53Code.GDIMG_9595PreguntaObjects3.length = 0;
gdjs._53Code.GDIMG_9595PreguntaObjects4.length = 0;
gdjs._53Code.GDIMG_9595PreguntaObjects5.length = 0;
gdjs._53Code.GDIMG_9595PreguntaObjects6.length = 0;
gdjs._53Code.GDMousePointObjects1.length = 0;
gdjs._53Code.GDMousePointObjects2.length = 0;
gdjs._53Code.GDMousePointObjects3.length = 0;
gdjs._53Code.GDMousePointObjects4.length = 0;
gdjs._53Code.GDMousePointObjects5.length = 0;
gdjs._53Code.GDMousePointObjects6.length = 0;
gdjs._53Code.GDFondoObjects1.length = 0;
gdjs._53Code.GDFondoObjects2.length = 0;
gdjs._53Code.GDFondoObjects3.length = 0;
gdjs._53Code.GDFondoObjects4.length = 0;
gdjs._53Code.GDFondoObjects5.length = 0;
gdjs._53Code.GDFondoObjects6.length = 0;
gdjs._53Code.GDSiguienteObjects1.length = 0;
gdjs._53Code.GDSiguienteObjects2.length = 0;
gdjs._53Code.GDSiguienteObjects3.length = 0;
gdjs._53Code.GDSiguienteObjects4.length = 0;
gdjs._53Code.GDSiguienteObjects5.length = 0;
gdjs._53Code.GDSiguienteObjects6.length = 0;
gdjs._53Code.GDSubtObjects1.length = 0;
gdjs._53Code.GDSubtObjects2.length = 0;
gdjs._53Code.GDSubtObjects3.length = 0;
gdjs._53Code.GDSubtObjects4.length = 0;
gdjs._53Code.GDSubtObjects5.length = 0;
gdjs._53Code.GDSubtObjects6.length = 0;

gdjs._53Code.eventsList15(runtimeScene);
gdjs._53Code.GDOpcionesObjects1.length = 0;
gdjs._53Code.GDOpcionesObjects2.length = 0;
gdjs._53Code.GDOpcionesObjects3.length = 0;
gdjs._53Code.GDOpcionesObjects4.length = 0;
gdjs._53Code.GDOpcionesObjects5.length = 0;
gdjs._53Code.GDOpcionesObjects6.length = 0;
gdjs._53Code.GDBarraRojoBlancoObjects1.length = 0;
gdjs._53Code.GDBarraRojoBlancoObjects2.length = 0;
gdjs._53Code.GDBarraRojoBlancoObjects3.length = 0;
gdjs._53Code.GDBarraRojoBlancoObjects4.length = 0;
gdjs._53Code.GDBarraRojoBlancoObjects5.length = 0;
gdjs._53Code.GDBarraRojoBlancoObjects6.length = 0;
gdjs._53Code.GDIMG_9595PreguntaObjects1.length = 0;
gdjs._53Code.GDIMG_9595PreguntaObjects2.length = 0;
gdjs._53Code.GDIMG_9595PreguntaObjects3.length = 0;
gdjs._53Code.GDIMG_9595PreguntaObjects4.length = 0;
gdjs._53Code.GDIMG_9595PreguntaObjects5.length = 0;
gdjs._53Code.GDIMG_9595PreguntaObjects6.length = 0;
gdjs._53Code.GDMousePointObjects1.length = 0;
gdjs._53Code.GDMousePointObjects2.length = 0;
gdjs._53Code.GDMousePointObjects3.length = 0;
gdjs._53Code.GDMousePointObjects4.length = 0;
gdjs._53Code.GDMousePointObjects5.length = 0;
gdjs._53Code.GDMousePointObjects6.length = 0;
gdjs._53Code.GDFondoObjects1.length = 0;
gdjs._53Code.GDFondoObjects2.length = 0;
gdjs._53Code.GDFondoObjects3.length = 0;
gdjs._53Code.GDFondoObjects4.length = 0;
gdjs._53Code.GDFondoObjects5.length = 0;
gdjs._53Code.GDFondoObjects6.length = 0;
gdjs._53Code.GDSiguienteObjects1.length = 0;
gdjs._53Code.GDSiguienteObjects2.length = 0;
gdjs._53Code.GDSiguienteObjects3.length = 0;
gdjs._53Code.GDSiguienteObjects4.length = 0;
gdjs._53Code.GDSiguienteObjects5.length = 0;
gdjs._53Code.GDSiguienteObjects6.length = 0;
gdjs._53Code.GDSubtObjects1.length = 0;
gdjs._53Code.GDSubtObjects2.length = 0;
gdjs._53Code.GDSubtObjects3.length = 0;
gdjs._53Code.GDSubtObjects4.length = 0;
gdjs._53Code.GDSubtObjects5.length = 0;
gdjs._53Code.GDSubtObjects6.length = 0;


return;

}

gdjs['_53Code'] = gdjs._53Code;
