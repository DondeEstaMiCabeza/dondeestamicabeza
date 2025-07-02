gdjs._499Code = {};
gdjs._499Code.localVariables = [];
gdjs._499Code.GDFrequencyNumberObjects1= [];
gdjs._499Code.GDFrequencyNumberObjects2= [];
gdjs._499Code.GDFrequencyNumberObjects3= [];
gdjs._499Code.GDFrequencyNumberObjects4= [];
gdjs._499Code.GDFondoObjects1= [];
gdjs._499Code.GDFondoObjects2= [];
gdjs._499Code.GDFondoObjects3= [];
gdjs._499Code.GDFondoObjects4= [];
gdjs._499Code.GDSliderEdadObjects1= [];
gdjs._499Code.GDSliderEdadObjects2= [];
gdjs._499Code.GDSliderEdadObjects3= [];
gdjs._499Code.GDSliderEdadObjects4= [];
gdjs._499Code.GDBarraVerdiClaroVerdiOscuroObjects1= [];
gdjs._499Code.GDBarraVerdiClaroVerdiOscuroObjects2= [];
gdjs._499Code.GDBarraVerdiClaroVerdiOscuroObjects3= [];
gdjs._499Code.GDBarraVerdiClaroVerdiOscuroObjects4= [];
gdjs._499Code.GDIMG_9595PreguntaObjects1= [];
gdjs._499Code.GDIMG_9595PreguntaObjects2= [];
gdjs._499Code.GDIMG_9595PreguntaObjects3= [];
gdjs._499Code.GDIMG_9595PreguntaObjects4= [];
gdjs._499Code.GDOpcionesObjects1= [];
gdjs._499Code.GDOpcionesObjects2= [];
gdjs._499Code.GDOpcionesObjects3= [];
gdjs._499Code.GDOpcionesObjects4= [];
gdjs._499Code.GDSiguienteObjects1= [];
gdjs._499Code.GDSiguienteObjects2= [];
gdjs._499Code.GDSiguienteObjects3= [];
gdjs._499Code.GDSiguienteObjects4= [];
gdjs._499Code.GDNewTextObjects1= [];
gdjs._499Code.GDNewTextObjects2= [];
gdjs._499Code.GDNewTextObjects3= [];
gdjs._499Code.GDNewTextObjects4= [];
gdjs._499Code.GDThumbObjects1= [];
gdjs._499Code.GDThumbObjects2= [];
gdjs._499Code.GDThumbObjects3= [];
gdjs._499Code.GDThumbObjects4= [];


gdjs._499Code.asyncCallback23663372 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs._499Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("IMG_Pregunta"), gdjs._499Code.GDIMG_9595PreguntaObjects2);

{for(var i = 0, len = gdjs._499Code.GDIMG_9595PreguntaObjects2.length ;i < len;++i) {
    gdjs._499Code.GDIMG_9595PreguntaObjects2[i].getBehavior("Tween").addObjectScaleTween("Thumb", 1, 1, "swingFromTo", 400, false, true);
}
}gdjs._499Code.localVariables.length = 0;
}
gdjs._499Code.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs._499Code.localVariables);
for (const obj of gdjs._499Code.GDIMG_9595PreguntaObjects1) asyncObjectsList.addObject("IMG_Pregunta", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.2), (runtimeScene) => (gdjs._499Code.asyncCallback23663372(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs._499Code.mapOfGDgdjs_9546_9595499Code_9546GDOpcionesObjects1Objects = Hashtable.newFrom({"Opciones": gdjs._499Code.GDOpcionesObjects1});
gdjs._499Code.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Opciones"), gdjs._499Code.GDOpcionesObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._499Code.GDOpcionesObjects3.length;i<l;++i) {
    if ( !(gdjs._499Code.GDOpcionesObjects3[i].getAnimation() == 4) ) {
        isConditionTrue_0 = true;
        gdjs._499Code.GDOpcionesObjects3[k] = gdjs._499Code.GDOpcionesObjects3[i];
        ++k;
    }
}
gdjs._499Code.GDOpcionesObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(23668676);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs._499Code.GDOpcionesObjects3 */
{for(var i = 0, len = gdjs._499Code.GDOpcionesObjects3.length ;i < len;++i) {
    gdjs._499Code.GDOpcionesObjects3[i].setY(660);
}
}{for(var i = 0, len = gdjs._499Code.GDOpcionesObjects3.length ;i < len;++i) {
    gdjs._499Code.GDOpcionesObjects3[i].activateBehavior("SineMovement", false);
}
}{for(var i = 0, len = gdjs._499Code.GDOpcionesObjects3.length ;i < len;++i) {
    gdjs._499Code.GDOpcionesObjects3[i].setAnimationFrame(0);
}
}{for(var i = 0, len = gdjs._499Code.GDOpcionesObjects3.length ;i < len;++i) {
    gdjs._499Code.GDOpcionesObjects3[i].getBehavior("Tween").addObjectScaleTween("Thumb3", 1, 1, "linear", 1, false, true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Opciones"), gdjs._499Code.GDOpcionesObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._499Code.GDOpcionesObjects2.length;i<l;++i) {
    if ( gdjs._499Code.GDOpcionesObjects2[i].getAnimation() == 4 ) {
        isConditionTrue_0 = true;
        gdjs._499Code.GDOpcionesObjects2[k] = gdjs._499Code.GDOpcionesObjects2[i];
        ++k;
    }
}
gdjs._499Code.GDOpcionesObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(23670484);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs._499Code.GDOpcionesObjects2 */
{for(var i = 0, len = gdjs._499Code.GDOpcionesObjects2.length ;i < len;++i) {
    gdjs._499Code.GDOpcionesObjects2[i].setAnimationFrame(1);
}
}{for(var i = 0, len = gdjs._499Code.GDOpcionesObjects2.length ;i < len;++i) {
    gdjs._499Code.GDOpcionesObjects2[i].getBehavior("Tween").addObjectScaleTween("Thumb2", 1.1, 1.1, "linear", 100, false, true);
}
}{for(var i = 0, len = gdjs._499Code.GDOpcionesObjects2.length ;i < len;++i) {
    gdjs._499Code.GDOpcionesObjects2[i].activateBehavior("SineMovement", true);
}
}}

}


};gdjs._499Code.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Opciones"), gdjs._499Code.GDOpcionesObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._499Code.GDOpcionesObjects3.length;i<l;++i) {
    if ( !(gdjs._499Code.GDOpcionesObjects3[i].getAnimation() == 3) ) {
        isConditionTrue_0 = true;
        gdjs._499Code.GDOpcionesObjects3[k] = gdjs._499Code.GDOpcionesObjects3[i];
        ++k;
    }
}
gdjs._499Code.GDOpcionesObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(23672604);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs._499Code.GDOpcionesObjects3 */
{for(var i = 0, len = gdjs._499Code.GDOpcionesObjects3.length ;i < len;++i) {
    gdjs._499Code.GDOpcionesObjects3[i].setY(660);
}
}{for(var i = 0, len = gdjs._499Code.GDOpcionesObjects3.length ;i < len;++i) {
    gdjs._499Code.GDOpcionesObjects3[i].activateBehavior("SineMovement", false);
}
}{for(var i = 0, len = gdjs._499Code.GDOpcionesObjects3.length ;i < len;++i) {
    gdjs._499Code.GDOpcionesObjects3[i].setAnimationFrame(0);
}
}{for(var i = 0, len = gdjs._499Code.GDOpcionesObjects3.length ;i < len;++i) {
    gdjs._499Code.GDOpcionesObjects3[i].getBehavior("Tween").addObjectScaleTween("Thumb3", 1, 1, "linear", 1, false, true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Opciones"), gdjs._499Code.GDOpcionesObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._499Code.GDOpcionesObjects2.length;i<l;++i) {
    if ( gdjs._499Code.GDOpcionesObjects2[i].getAnimation() == 3 ) {
        isConditionTrue_0 = true;
        gdjs._499Code.GDOpcionesObjects2[k] = gdjs._499Code.GDOpcionesObjects2[i];
        ++k;
    }
}
gdjs._499Code.GDOpcionesObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(23672276);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs._499Code.GDOpcionesObjects2 */
{for(var i = 0, len = gdjs._499Code.GDOpcionesObjects2.length ;i < len;++i) {
    gdjs._499Code.GDOpcionesObjects2[i].setAnimationFrame(1);
}
}{for(var i = 0, len = gdjs._499Code.GDOpcionesObjects2.length ;i < len;++i) {
    gdjs._499Code.GDOpcionesObjects2[i].getBehavior("Tween").addObjectScaleTween("Thumb2", 1.1, 1.1, "linear", 100, false, true);
}
}{for(var i = 0, len = gdjs._499Code.GDOpcionesObjects2.length ;i < len;++i) {
    gdjs._499Code.GDOpcionesObjects2[i].activateBehavior("SineMovement", true);
}
}}

}


};gdjs._499Code.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Opciones"), gdjs._499Code.GDOpcionesObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._499Code.GDOpcionesObjects3.length;i<l;++i) {
    if ( !(gdjs._499Code.GDOpcionesObjects3[i].getAnimation() == 2) ) {
        isConditionTrue_0 = true;
        gdjs._499Code.GDOpcionesObjects3[k] = gdjs._499Code.GDOpcionesObjects3[i];
        ++k;
    }
}
gdjs._499Code.GDOpcionesObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(23675956);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs._499Code.GDOpcionesObjects3 */
{for(var i = 0, len = gdjs._499Code.GDOpcionesObjects3.length ;i < len;++i) {
    gdjs._499Code.GDOpcionesObjects3[i].setY(660);
}
}{for(var i = 0, len = gdjs._499Code.GDOpcionesObjects3.length ;i < len;++i) {
    gdjs._499Code.GDOpcionesObjects3[i].activateBehavior("SineMovement", false);
}
}{for(var i = 0, len = gdjs._499Code.GDOpcionesObjects3.length ;i < len;++i) {
    gdjs._499Code.GDOpcionesObjects3[i].setAnimationFrame(0);
}
}{for(var i = 0, len = gdjs._499Code.GDOpcionesObjects3.length ;i < len;++i) {
    gdjs._499Code.GDOpcionesObjects3[i].getBehavior("Tween").addObjectScaleTween("Thumb3", 1, 1, "linear", 1, false, true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Opciones"), gdjs._499Code.GDOpcionesObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._499Code.GDOpcionesObjects2.length;i<l;++i) {
    if ( gdjs._499Code.GDOpcionesObjects2[i].getAnimation() == 2 ) {
        isConditionTrue_0 = true;
        gdjs._499Code.GDOpcionesObjects2[k] = gdjs._499Code.GDOpcionesObjects2[i];
        ++k;
    }
}
gdjs._499Code.GDOpcionesObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(23677356);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs._499Code.GDOpcionesObjects2 */
{for(var i = 0, len = gdjs._499Code.GDOpcionesObjects2.length ;i < len;++i) {
    gdjs._499Code.GDOpcionesObjects2[i].setAnimationFrame(1);
}
}{for(var i = 0, len = gdjs._499Code.GDOpcionesObjects2.length ;i < len;++i) {
    gdjs._499Code.GDOpcionesObjects2[i].getBehavior("Tween").addObjectScaleTween("Thumb2", 1.1, 1.1, "linear", 100, false, true);
}
}{for(var i = 0, len = gdjs._499Code.GDOpcionesObjects2.length ;i < len;++i) {
    gdjs._499Code.GDOpcionesObjects2[i].activateBehavior("SineMovement", true);
}
}}

}


};gdjs._499Code.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Opciones"), gdjs._499Code.GDOpcionesObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._499Code.GDOpcionesObjects3.length;i<l;++i) {
    if ( !(gdjs._499Code.GDOpcionesObjects3[i].getAnimation() == 1) ) {
        isConditionTrue_0 = true;
        gdjs._499Code.GDOpcionesObjects3[k] = gdjs._499Code.GDOpcionesObjects3[i];
        ++k;
    }
}
gdjs._499Code.GDOpcionesObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(23679540);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs._499Code.GDOpcionesObjects3 */
{for(var i = 0, len = gdjs._499Code.GDOpcionesObjects3.length ;i < len;++i) {
    gdjs._499Code.GDOpcionesObjects3[i].setY(660);
}
}{for(var i = 0, len = gdjs._499Code.GDOpcionesObjects3.length ;i < len;++i) {
    gdjs._499Code.GDOpcionesObjects3[i].activateBehavior("SineMovement", false);
}
}{for(var i = 0, len = gdjs._499Code.GDOpcionesObjects3.length ;i < len;++i) {
    gdjs._499Code.GDOpcionesObjects3[i].setAnimationFrame(0);
}
}{for(var i = 0, len = gdjs._499Code.GDOpcionesObjects3.length ;i < len;++i) {
    gdjs._499Code.GDOpcionesObjects3[i].getBehavior("Tween").addObjectScaleTween("Thumb3", 1, 1, "linear", 1, false, true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Opciones"), gdjs._499Code.GDOpcionesObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._499Code.GDOpcionesObjects2.length;i<l;++i) {
    if ( gdjs._499Code.GDOpcionesObjects2[i].getAnimation() == 1 ) {
        isConditionTrue_0 = true;
        gdjs._499Code.GDOpcionesObjects2[k] = gdjs._499Code.GDOpcionesObjects2[i];
        ++k;
    }
}
gdjs._499Code.GDOpcionesObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(23681348);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs._499Code.GDOpcionesObjects2 */
{for(var i = 0, len = gdjs._499Code.GDOpcionesObjects2.length ;i < len;++i) {
    gdjs._499Code.GDOpcionesObjects2[i].setAnimationFrame(1);
}
}{for(var i = 0, len = gdjs._499Code.GDOpcionesObjects2.length ;i < len;++i) {
    gdjs._499Code.GDOpcionesObjects2[i].getBehavior("Tween").addObjectScaleTween("Thumb2", 1.1, 1.1, "linear", 100, false, true);
}
}{for(var i = 0, len = gdjs._499Code.GDOpcionesObjects2.length ;i < len;++i) {
    gdjs._499Code.GDOpcionesObjects2[i].activateBehavior("SineMovement", true);
}
}}

}


};gdjs._499Code.eventsList5 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Opciones"), gdjs._499Code.GDOpcionesObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._499Code.GDOpcionesObjects3.length;i<l;++i) {
    if ( !(gdjs._499Code.GDOpcionesObjects3[i].getAnimation() == 0) ) {
        isConditionTrue_0 = true;
        gdjs._499Code.GDOpcionesObjects3[k] = gdjs._499Code.GDOpcionesObjects3[i];
        ++k;
    }
}
gdjs._499Code.GDOpcionesObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(23683268);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs._499Code.GDOpcionesObjects3 */
{for(var i = 0, len = gdjs._499Code.GDOpcionesObjects3.length ;i < len;++i) {
    gdjs._499Code.GDOpcionesObjects3[i].setY(660);
}
}{for(var i = 0, len = gdjs._499Code.GDOpcionesObjects3.length ;i < len;++i) {
    gdjs._499Code.GDOpcionesObjects3[i].activateBehavior("SineMovement", false);
}
}{for(var i = 0, len = gdjs._499Code.GDOpcionesObjects3.length ;i < len;++i) {
    gdjs._499Code.GDOpcionesObjects3[i].setAnimationFrame(0);
}
}{for(var i = 0, len = gdjs._499Code.GDOpcionesObjects3.length ;i < len;++i) {
    gdjs._499Code.GDOpcionesObjects3[i].getBehavior("Tween").addObjectScaleTween("Thumb3", 1, 1, "linear", 1, false, true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Opciones"), gdjs._499Code.GDOpcionesObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._499Code.GDOpcionesObjects2.length;i<l;++i) {
    if ( gdjs._499Code.GDOpcionesObjects2[i].getAnimation() == 0 ) {
        isConditionTrue_0 = true;
        gdjs._499Code.GDOpcionesObjects2[k] = gdjs._499Code.GDOpcionesObjects2[i];
        ++k;
    }
}
gdjs._499Code.GDOpcionesObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(23684020);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs._499Code.GDOpcionesObjects2 */
{for(var i = 0, len = gdjs._499Code.GDOpcionesObjects2.length ;i < len;++i) {
    gdjs._499Code.GDOpcionesObjects2[i].setAnimationFrame(1);
}
}{for(var i = 0, len = gdjs._499Code.GDOpcionesObjects2.length ;i < len;++i) {
    gdjs._499Code.GDOpcionesObjects2[i].getBehavior("Tween").addObjectScaleTween("Thumb2", 1.1, 1.1, "linear", 100, false, true);
}
}{for(var i = 0, len = gdjs._499Code.GDOpcionesObjects2.length ;i < len;++i) {
    gdjs._499Code.GDOpcionesObjects2[i].activateBehavior("SineMovement", true);
}
}}

}


};gdjs._499Code.eventsList6 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Siguiente"), gdjs._499Code.GDSiguienteObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._499Code.GDSiguienteObjects2.length;i<l;++i) {
    if ( gdjs._499Code.GDSiguienteObjects2[i].getOpacity() == 150 ) {
        isConditionTrue_0 = true;
        gdjs._499Code.GDSiguienteObjects2[k] = gdjs._499Code.GDSiguienteObjects2[i];
        ++k;
    }
}
gdjs._499Code.GDSiguienteObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(23666524);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs._499Code.GDSiguienteObjects2 */
{for(var i = 0, len = gdjs._499Code.GDSiguienteObjects2.length ;i < len;++i) {
    gdjs._499Code.GDSiguienteObjects2[i].setOpacity(255);
}
}{for(var i = 0, len = gdjs._499Code.GDSiguienteObjects2.length ;i < len;++i) {
    gdjs._499Code.GDSiguienteObjects2[i].getBehavior("Tween").addObjectScaleTween("as", 0.8, 0.8, "bouncePast", 100, false, true);
}
}{for(var i = 0, len = gdjs._499Code.GDSiguienteObjects2.length ;i < len;++i) {
    gdjs._499Code.GDSiguienteObjects2[i].setAnimation(1);
}
}}

}


{

gdjs.copyArray(gdjs._499Code.GDSliderEdadObjects1, gdjs._499Code.GDSliderEdadObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs._499Code.GDSliderEdadObjects2.length === 0 ) ? 0 :gdjs._499Code.GDSliderEdadObjects2[0].getBehavior("DraggableSliderControl").Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) == 10);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("FrequencyNumber"), gdjs._499Code.GDFrequencyNumberObjects2);
{for(var i = 0, len = gdjs._499Code.GDFrequencyNumberObjects2.length ;i < len;++i) {
    gdjs._499Code.GDFrequencyNumberObjects2[i].setString("Siempre");
}
}
{ //Subevents
gdjs._499Code.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs._499Code.GDSliderEdadObjects1, gdjs._499Code.GDSliderEdadObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs._499Code.GDSliderEdadObjects2.length === 0 ) ? 0 :gdjs._499Code.GDSliderEdadObjects2[0].getBehavior("DraggableSliderControl").Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) == 8);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("FrequencyNumber"), gdjs._499Code.GDFrequencyNumberObjects2);
{for(var i = 0, len = gdjs._499Code.GDFrequencyNumberObjects2.length ;i < len;++i) {
    gdjs._499Code.GDFrequencyNumberObjects2[i].setString("Casi siempre");
}
}
{ //Subevents
gdjs._499Code.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs._499Code.GDSliderEdadObjects1, gdjs._499Code.GDSliderEdadObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs._499Code.GDSliderEdadObjects2.length === 0 ) ? 0 :gdjs._499Code.GDSliderEdadObjects2[0].getBehavior("DraggableSliderControl").Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) == 6);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("FrequencyNumber"), gdjs._499Code.GDFrequencyNumberObjects2);
{for(var i = 0, len = gdjs._499Code.GDFrequencyNumberObjects2.length ;i < len;++i) {
    gdjs._499Code.GDFrequencyNumberObjects2[i].setString("Algunas veces");
}
}
{ //Subevents
gdjs._499Code.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs._499Code.GDSliderEdadObjects1, gdjs._499Code.GDSliderEdadObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs._499Code.GDSliderEdadObjects2.length === 0 ) ? 0 :gdjs._499Code.GDSliderEdadObjects2[0].getBehavior("DraggableSliderControl").Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) == 4);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("FrequencyNumber"), gdjs._499Code.GDFrequencyNumberObjects2);
{for(var i = 0, len = gdjs._499Code.GDFrequencyNumberObjects2.length ;i < len;++i) {
    gdjs._499Code.GDFrequencyNumberObjects2[i].setString("Casi nunca");
}
}
{ //Subevents
gdjs._499Code.eventsList4(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs._499Code.GDSliderEdadObjects1, gdjs._499Code.GDSliderEdadObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs._499Code.GDSliderEdadObjects2.length === 0 ) ? 0 :gdjs._499Code.GDSliderEdadObjects2[0].getBehavior("DraggableSliderControl").Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) == 2);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("FrequencyNumber"), gdjs._499Code.GDFrequencyNumberObjects2);
{for(var i = 0, len = gdjs._499Code.GDFrequencyNumberObjects2.length ;i < len;++i) {
    gdjs._499Code.GDFrequencyNumberObjects2[i].setString("Nunca");
}
}
{ //Subevents
gdjs._499Code.eventsList5(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(23686068);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Thumb"), gdjs._499Code.GDThumbObjects1);
{for(var i = 0, len = gdjs._499Code.GDThumbObjects1.length ;i < len;++i) {
    gdjs._499Code.GDThumbObjects1[i].getBehavior("Tween").addObjectScaleTween("Thumb", 0.8, 0.8, "linear", 50, false, true);
}
}}

}


};gdjs._499Code.eventsList7 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Opciones"), gdjs._499Code.GDOpcionesObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._499Code.GDOpcionesObjects3.length;i<l;++i) {
    if ( !(gdjs._499Code.GDOpcionesObjects3[i].getAnimation() == 4) ) {
        isConditionTrue_0 = true;
        gdjs._499Code.GDOpcionesObjects3[k] = gdjs._499Code.GDOpcionesObjects3[i];
        ++k;
    }
}
gdjs._499Code.GDOpcionesObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(23689148);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs._499Code.GDOpcionesObjects3 */
{for(var i = 0, len = gdjs._499Code.GDOpcionesObjects3.length ;i < len;++i) {
    gdjs._499Code.GDOpcionesObjects3[i].setY(660);
}
}{for(var i = 0, len = gdjs._499Code.GDOpcionesObjects3.length ;i < len;++i) {
    gdjs._499Code.GDOpcionesObjects3[i].activateBehavior("SineMovement", false);
}
}{for(var i = 0, len = gdjs._499Code.GDOpcionesObjects3.length ;i < len;++i) {
    gdjs._499Code.GDOpcionesObjects3[i].setAnimationFrame(0);
}
}{for(var i = 0, len = gdjs._499Code.GDOpcionesObjects3.length ;i < len;++i) {
    gdjs._499Code.GDOpcionesObjects3[i].getBehavior("Tween").addObjectScaleTween("Thumb3", 1, 1, "linear", 1, false, true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Opciones"), gdjs._499Code.GDOpcionesObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._499Code.GDOpcionesObjects2.length;i<l;++i) {
    if ( gdjs._499Code.GDOpcionesObjects2[i].getAnimation() == 4 ) {
        isConditionTrue_0 = true;
        gdjs._499Code.GDOpcionesObjects2[k] = gdjs._499Code.GDOpcionesObjects2[i];
        ++k;
    }
}
gdjs._499Code.GDOpcionesObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(23690548);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs._499Code.GDOpcionesObjects2 */
{for(var i = 0, len = gdjs._499Code.GDOpcionesObjects2.length ;i < len;++i) {
    gdjs._499Code.GDOpcionesObjects2[i].setAnimationFrame(1);
}
}{for(var i = 0, len = gdjs._499Code.GDOpcionesObjects2.length ;i < len;++i) {
    gdjs._499Code.GDOpcionesObjects2[i].getBehavior("Tween").addObjectScaleTween("Thumb2", 1.1, 1.1, "linear", 100, false, true);
}
}{for(var i = 0, len = gdjs._499Code.GDOpcionesObjects2.length ;i < len;++i) {
    gdjs._499Code.GDOpcionesObjects2[i].activateBehavior("SineMovement", true);
}
}}

}


};gdjs._499Code.eventsList8 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Opciones"), gdjs._499Code.GDOpcionesObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._499Code.GDOpcionesObjects3.length;i<l;++i) {
    if ( !(gdjs._499Code.GDOpcionesObjects3[i].getAnimation() == 3) ) {
        isConditionTrue_0 = true;
        gdjs._499Code.GDOpcionesObjects3[k] = gdjs._499Code.GDOpcionesObjects3[i];
        ++k;
    }
}
gdjs._499Code.GDOpcionesObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(23692764);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs._499Code.GDOpcionesObjects3 */
{for(var i = 0, len = gdjs._499Code.GDOpcionesObjects3.length ;i < len;++i) {
    gdjs._499Code.GDOpcionesObjects3[i].setY(660);
}
}{for(var i = 0, len = gdjs._499Code.GDOpcionesObjects3.length ;i < len;++i) {
    gdjs._499Code.GDOpcionesObjects3[i].activateBehavior("SineMovement", false);
}
}{for(var i = 0, len = gdjs._499Code.GDOpcionesObjects3.length ;i < len;++i) {
    gdjs._499Code.GDOpcionesObjects3[i].setAnimationFrame(0);
}
}{for(var i = 0, len = gdjs._499Code.GDOpcionesObjects3.length ;i < len;++i) {
    gdjs._499Code.GDOpcionesObjects3[i].getBehavior("Tween").addObjectScaleTween("Thumb3", 1, 1, "linear", 1, false, true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Opciones"), gdjs._499Code.GDOpcionesObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._499Code.GDOpcionesObjects2.length;i<l;++i) {
    if ( gdjs._499Code.GDOpcionesObjects2[i].getAnimation() == 3 ) {
        isConditionTrue_0 = true;
        gdjs._499Code.GDOpcionesObjects2[k] = gdjs._499Code.GDOpcionesObjects2[i];
        ++k;
    }
}
gdjs._499Code.GDOpcionesObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(23694172);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs._499Code.GDOpcionesObjects2 */
{for(var i = 0, len = gdjs._499Code.GDOpcionesObjects2.length ;i < len;++i) {
    gdjs._499Code.GDOpcionesObjects2[i].setAnimationFrame(1);
}
}{for(var i = 0, len = gdjs._499Code.GDOpcionesObjects2.length ;i < len;++i) {
    gdjs._499Code.GDOpcionesObjects2[i].getBehavior("Tween").addObjectScaleTween("Thumb2", 1.1, 1.1, "linear", 100, false, true);
}
}{for(var i = 0, len = gdjs._499Code.GDOpcionesObjects2.length ;i < len;++i) {
    gdjs._499Code.GDOpcionesObjects2[i].activateBehavior("SineMovement", true);
}
}}

}


};gdjs._499Code.eventsList9 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Opciones"), gdjs._499Code.GDOpcionesObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._499Code.GDOpcionesObjects3.length;i<l;++i) {
    if ( !(gdjs._499Code.GDOpcionesObjects3[i].getAnimation() == 2) ) {
        isConditionTrue_0 = true;
        gdjs._499Code.GDOpcionesObjects3[k] = gdjs._499Code.GDOpcionesObjects3[i];
        ++k;
    }
}
gdjs._499Code.GDOpcionesObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(23696380);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs._499Code.GDOpcionesObjects3 */
{for(var i = 0, len = gdjs._499Code.GDOpcionesObjects3.length ;i < len;++i) {
    gdjs._499Code.GDOpcionesObjects3[i].setY(660);
}
}{for(var i = 0, len = gdjs._499Code.GDOpcionesObjects3.length ;i < len;++i) {
    gdjs._499Code.GDOpcionesObjects3[i].activateBehavior("SineMovement", false);
}
}{for(var i = 0, len = gdjs._499Code.GDOpcionesObjects3.length ;i < len;++i) {
    gdjs._499Code.GDOpcionesObjects3[i].setAnimationFrame(0);
}
}{for(var i = 0, len = gdjs._499Code.GDOpcionesObjects3.length ;i < len;++i) {
    gdjs._499Code.GDOpcionesObjects3[i].getBehavior("Tween").addObjectScaleTween("Thumb3", 1, 1, "linear", 1, false, true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Opciones"), gdjs._499Code.GDOpcionesObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._499Code.GDOpcionesObjects2.length;i<l;++i) {
    if ( gdjs._499Code.GDOpcionesObjects2[i].getAnimation() == 2 ) {
        isConditionTrue_0 = true;
        gdjs._499Code.GDOpcionesObjects2[k] = gdjs._499Code.GDOpcionesObjects2[i];
        ++k;
    }
}
gdjs._499Code.GDOpcionesObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(23697444);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs._499Code.GDOpcionesObjects2 */
{for(var i = 0, len = gdjs._499Code.GDOpcionesObjects2.length ;i < len;++i) {
    gdjs._499Code.GDOpcionesObjects2[i].setAnimationFrame(1);
}
}{for(var i = 0, len = gdjs._499Code.GDOpcionesObjects2.length ;i < len;++i) {
    gdjs._499Code.GDOpcionesObjects2[i].getBehavior("Tween").addObjectScaleTween("Thumb2", 1.1, 1.1, "linear", 100, false, true);
}
}{for(var i = 0, len = gdjs._499Code.GDOpcionesObjects2.length ;i < len;++i) {
    gdjs._499Code.GDOpcionesObjects2[i].activateBehavior("SineMovement", true);
}
}}

}


};gdjs._499Code.eventsList10 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Opciones"), gdjs._499Code.GDOpcionesObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._499Code.GDOpcionesObjects3.length;i<l;++i) {
    if ( !(gdjs._499Code.GDOpcionesObjects3[i].getAnimation() == 1) ) {
        isConditionTrue_0 = true;
        gdjs._499Code.GDOpcionesObjects3[k] = gdjs._499Code.GDOpcionesObjects3[i];
        ++k;
    }
}
gdjs._499Code.GDOpcionesObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(23699988);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs._499Code.GDOpcionesObjects3 */
{for(var i = 0, len = gdjs._499Code.GDOpcionesObjects3.length ;i < len;++i) {
    gdjs._499Code.GDOpcionesObjects3[i].setY(660);
}
}{for(var i = 0, len = gdjs._499Code.GDOpcionesObjects3.length ;i < len;++i) {
    gdjs._499Code.GDOpcionesObjects3[i].activateBehavior("SineMovement", false);
}
}{for(var i = 0, len = gdjs._499Code.GDOpcionesObjects3.length ;i < len;++i) {
    gdjs._499Code.GDOpcionesObjects3[i].setAnimationFrame(0);
}
}{for(var i = 0, len = gdjs._499Code.GDOpcionesObjects3.length ;i < len;++i) {
    gdjs._499Code.GDOpcionesObjects3[i].getBehavior("Tween").addObjectScaleTween("Thumb3", 1, 1, "linear", 1, false, true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Opciones"), gdjs._499Code.GDOpcionesObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._499Code.GDOpcionesObjects2.length;i<l;++i) {
    if ( gdjs._499Code.GDOpcionesObjects2[i].getAnimation() == 1 ) {
        isConditionTrue_0 = true;
        gdjs._499Code.GDOpcionesObjects2[k] = gdjs._499Code.GDOpcionesObjects2[i];
        ++k;
    }
}
gdjs._499Code.GDOpcionesObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(23701028);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs._499Code.GDOpcionesObjects2 */
{for(var i = 0, len = gdjs._499Code.GDOpcionesObjects2.length ;i < len;++i) {
    gdjs._499Code.GDOpcionesObjects2[i].setAnimationFrame(1);
}
}{for(var i = 0, len = gdjs._499Code.GDOpcionesObjects2.length ;i < len;++i) {
    gdjs._499Code.GDOpcionesObjects2[i].getBehavior("Tween").addObjectScaleTween("Thumb2", 1.1, 1.1, "linear", 100, false, true);
}
}{for(var i = 0, len = gdjs._499Code.GDOpcionesObjects2.length ;i < len;++i) {
    gdjs._499Code.GDOpcionesObjects2[i].activateBehavior("SineMovement", true);
}
}}

}


};gdjs._499Code.eventsList11 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Opciones"), gdjs._499Code.GDOpcionesObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._499Code.GDOpcionesObjects2.length;i<l;++i) {
    if ( !(gdjs._499Code.GDOpcionesObjects2[i].getAnimation() == 0) ) {
        isConditionTrue_0 = true;
        gdjs._499Code.GDOpcionesObjects2[k] = gdjs._499Code.GDOpcionesObjects2[i];
        ++k;
    }
}
gdjs._499Code.GDOpcionesObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(23703572);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs._499Code.GDOpcionesObjects2 */
{for(var i = 0, len = gdjs._499Code.GDOpcionesObjects2.length ;i < len;++i) {
    gdjs._499Code.GDOpcionesObjects2[i].setY(660);
}
}{for(var i = 0, len = gdjs._499Code.GDOpcionesObjects2.length ;i < len;++i) {
    gdjs._499Code.GDOpcionesObjects2[i].activateBehavior("SineMovement", false);
}
}{for(var i = 0, len = gdjs._499Code.GDOpcionesObjects2.length ;i < len;++i) {
    gdjs._499Code.GDOpcionesObjects2[i].setAnimationFrame(0);
}
}{for(var i = 0, len = gdjs._499Code.GDOpcionesObjects2.length ;i < len;++i) {
    gdjs._499Code.GDOpcionesObjects2[i].getBehavior("Tween").addObjectScaleTween("Thumb3", 1, 1, "linear", 1, false, true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Opciones"), gdjs._499Code.GDOpcionesObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._499Code.GDOpcionesObjects1.length;i<l;++i) {
    if ( gdjs._499Code.GDOpcionesObjects1[i].getAnimation() == 0 ) {
        isConditionTrue_0 = true;
        gdjs._499Code.GDOpcionesObjects1[k] = gdjs._499Code.GDOpcionesObjects1[i];
        ++k;
    }
}
gdjs._499Code.GDOpcionesObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(23705380);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs._499Code.GDOpcionesObjects1 */
{for(var i = 0, len = gdjs._499Code.GDOpcionesObjects1.length ;i < len;++i) {
    gdjs._499Code.GDOpcionesObjects1[i].setAnimationFrame(1);
}
}{for(var i = 0, len = gdjs._499Code.GDOpcionesObjects1.length ;i < len;++i) {
    gdjs._499Code.GDOpcionesObjects1[i].getBehavior("Tween").addObjectScaleTween("Thumb2", 1.1, 1.1, "linear", 100, false, true);
}
}{for(var i = 0, len = gdjs._499Code.GDOpcionesObjects1.length ;i < len;++i) {
    gdjs._499Code.GDOpcionesObjects1[i].activateBehavior("SineMovement", true);
}
}}

}


};gdjs._499Code.eventsList12 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Siguiente"), gdjs._499Code.GDSiguienteObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._499Code.GDSiguienteObjects2.length;i<l;++i) {
    if ( gdjs._499Code.GDSiguienteObjects2[i].getOpacity() == 150 ) {
        isConditionTrue_0 = true;
        gdjs._499Code.GDSiguienteObjects2[k] = gdjs._499Code.GDSiguienteObjects2[i];
        ++k;
    }
}
gdjs._499Code.GDSiguienteObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(23687340);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs._499Code.GDSiguienteObjects2 */
{for(var i = 0, len = gdjs._499Code.GDSiguienteObjects2.length ;i < len;++i) {
    gdjs._499Code.GDSiguienteObjects2[i].setOpacity(255);
}
}{for(var i = 0, len = gdjs._499Code.GDSiguienteObjects2.length ;i < len;++i) {
    gdjs._499Code.GDSiguienteObjects2[i].setAnimation(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("SliderEdad"), gdjs._499Code.GDSliderEdadObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs._499Code.GDSliderEdadObjects2.length === 0 ) ? 0 :gdjs._499Code.GDSliderEdadObjects2[0].getBehavior("DraggableSliderControl").Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) == 10);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("FrequencyNumber"), gdjs._499Code.GDFrequencyNumberObjects2);
{for(var i = 0, len = gdjs._499Code.GDFrequencyNumberObjects2.length ;i < len;++i) {
    gdjs._499Code.GDFrequencyNumberObjects2[i].setString("Siempre");
}
}
{ //Subevents
gdjs._499Code.eventsList7(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("SliderEdad"), gdjs._499Code.GDSliderEdadObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs._499Code.GDSliderEdadObjects2.length === 0 ) ? 0 :gdjs._499Code.GDSliderEdadObjects2[0].getBehavior("DraggableSliderControl").Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) == 8);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("FrequencyNumber"), gdjs._499Code.GDFrequencyNumberObjects2);
{for(var i = 0, len = gdjs._499Code.GDFrequencyNumberObjects2.length ;i < len;++i) {
    gdjs._499Code.GDFrequencyNumberObjects2[i].setString("Casi siempre");
}
}
{ //Subevents
gdjs._499Code.eventsList8(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("SliderEdad"), gdjs._499Code.GDSliderEdadObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs._499Code.GDSliderEdadObjects2.length === 0 ) ? 0 :gdjs._499Code.GDSliderEdadObjects2[0].getBehavior("DraggableSliderControl").Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) == 6);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("FrequencyNumber"), gdjs._499Code.GDFrequencyNumberObjects2);
{for(var i = 0, len = gdjs._499Code.GDFrequencyNumberObjects2.length ;i < len;++i) {
    gdjs._499Code.GDFrequencyNumberObjects2[i].setString("Algunas veces");
}
}
{ //Subevents
gdjs._499Code.eventsList9(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("SliderEdad"), gdjs._499Code.GDSliderEdadObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs._499Code.GDSliderEdadObjects2.length === 0 ) ? 0 :gdjs._499Code.GDSliderEdadObjects2[0].getBehavior("DraggableSliderControl").Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) == 4);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("FrequencyNumber"), gdjs._499Code.GDFrequencyNumberObjects2);
{for(var i = 0, len = gdjs._499Code.GDFrequencyNumberObjects2.length ;i < len;++i) {
    gdjs._499Code.GDFrequencyNumberObjects2[i].setString("Casi nunca");
}
}
{ //Subevents
gdjs._499Code.eventsList10(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("SliderEdad"), gdjs._499Code.GDSliderEdadObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs._499Code.GDSliderEdadObjects1.length === 0 ) ? 0 :gdjs._499Code.GDSliderEdadObjects1[0].getBehavior("DraggableSliderControl").Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) == 2);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("FrequencyNumber"), gdjs._499Code.GDFrequencyNumberObjects1);
{for(var i = 0, len = gdjs._499Code.GDFrequencyNumberObjects1.length ;i < len;++i) {
    gdjs._499Code.GDFrequencyNumberObjects1[i].setString("Nunca");
}
}
{ //Subevents
gdjs._499Code.eventsList11(runtimeScene);} //End of subevents
}

}


};gdjs._499Code.eventsList13 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Opciones"), gdjs._499Code.GDOpcionesObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._499Code.GDOpcionesObjects1.length;i<l;++i) {
    if ( !(gdjs._499Code.GDOpcionesObjects1[i].behaviorActivated("SineMovement")) ) {
        isConditionTrue_0 = true;
        gdjs._499Code.GDOpcionesObjects1[k] = gdjs._499Code.GDOpcionesObjects1[i];
        ++k;
    }
}
gdjs._499Code.GDOpcionesObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs._499Code.GDOpcionesObjects1 */
{for(var i = 0, len = gdjs._499Code.GDOpcionesObjects1.length ;i < len;++i) {
    gdjs._499Code.GDOpcionesObjects1[i].getBehavior("Tween").addObjectScaleTween("Thumb4", 1, 1, "linear", 1, false, true);
}
}{for(var i = 0, len = gdjs._499Code.GDOpcionesObjects1.length ;i < len;++i) {
    gdjs._499Code.GDOpcionesObjects1[i].setY(660);
}
}}

}


};gdjs._499Code.mapOfGDgdjs_9546_9595499Code_9546GDOpcionesObjects1Objects = Hashtable.newFrom({"Opciones": gdjs._499Code.GDOpcionesObjects1});
gdjs._499Code.eventsList14 = function(runtimeScene) {

{

gdjs.copyArray(gdjs._499Code.GDOpcionesObjects1, gdjs._499Code.GDOpcionesObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._499Code.GDOpcionesObjects2.length;i<l;++i) {
    if ( gdjs._499Code.GDOpcionesObjects2[i].getAnimation() == 0 ) {
        isConditionTrue_0 = true;
        gdjs._499Code.GDOpcionesObjects2[k] = gdjs._499Code.GDOpcionesObjects2[i];
        ++k;
    }
}
gdjs._499Code.GDOpcionesObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("SliderEdad"), gdjs._499Code.GDSliderEdadObjects2);
{for(var i = 0, len = gdjs._499Code.GDSliderEdadObjects2.length ;i < len;++i) {
    gdjs._499Code.GDSliderEdadObjects2[i].getBehavior("DraggableSliderControl").SetValue(2, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(gdjs._499Code.GDOpcionesObjects1, gdjs._499Code.GDOpcionesObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._499Code.GDOpcionesObjects2.length;i<l;++i) {
    if ( gdjs._499Code.GDOpcionesObjects2[i].getAnimation() == 1 ) {
        isConditionTrue_0 = true;
        gdjs._499Code.GDOpcionesObjects2[k] = gdjs._499Code.GDOpcionesObjects2[i];
        ++k;
    }
}
gdjs._499Code.GDOpcionesObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("SliderEdad"), gdjs._499Code.GDSliderEdadObjects2);
{for(var i = 0, len = gdjs._499Code.GDSliderEdadObjects2.length ;i < len;++i) {
    gdjs._499Code.GDSliderEdadObjects2[i].getBehavior("DraggableSliderControl").SetValue(4, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(gdjs._499Code.GDOpcionesObjects1, gdjs._499Code.GDOpcionesObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._499Code.GDOpcionesObjects2.length;i<l;++i) {
    if ( gdjs._499Code.GDOpcionesObjects2[i].getAnimation() == 2 ) {
        isConditionTrue_0 = true;
        gdjs._499Code.GDOpcionesObjects2[k] = gdjs._499Code.GDOpcionesObjects2[i];
        ++k;
    }
}
gdjs._499Code.GDOpcionesObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("SliderEdad"), gdjs._499Code.GDSliderEdadObjects2);
{for(var i = 0, len = gdjs._499Code.GDSliderEdadObjects2.length ;i < len;++i) {
    gdjs._499Code.GDSliderEdadObjects2[i].getBehavior("DraggableSliderControl").SetValue(6, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(gdjs._499Code.GDOpcionesObjects1, gdjs._499Code.GDOpcionesObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._499Code.GDOpcionesObjects2.length;i<l;++i) {
    if ( gdjs._499Code.GDOpcionesObjects2[i].getAnimation() == 3 ) {
        isConditionTrue_0 = true;
        gdjs._499Code.GDOpcionesObjects2[k] = gdjs._499Code.GDOpcionesObjects2[i];
        ++k;
    }
}
gdjs._499Code.GDOpcionesObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("SliderEdad"), gdjs._499Code.GDSliderEdadObjects2);
{for(var i = 0, len = gdjs._499Code.GDSliderEdadObjects2.length ;i < len;++i) {
    gdjs._499Code.GDSliderEdadObjects2[i].getBehavior("DraggableSliderControl").SetValue(8, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

/* Reuse gdjs._499Code.GDOpcionesObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._499Code.GDOpcionesObjects1.length;i<l;++i) {
    if ( gdjs._499Code.GDOpcionesObjects1[i].getAnimation() == 4 ) {
        isConditionTrue_0 = true;
        gdjs._499Code.GDOpcionesObjects1[k] = gdjs._499Code.GDOpcionesObjects1[i];
        ++k;
    }
}
gdjs._499Code.GDOpcionesObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("SliderEdad"), gdjs._499Code.GDSliderEdadObjects1);
{for(var i = 0, len = gdjs._499Code.GDSliderEdadObjects1.length ;i < len;++i) {
    gdjs._499Code.GDSliderEdadObjects1[i].getBehavior("DraggableSliderControl").SetValue(10, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};gdjs._499Code.mapOfGDgdjs_9546_9595499Code_9546GDSiguienteObjects1Objects = Hashtable.newFrom({"Siguiente": gdjs._499Code.GDSiguienteObjects1});
gdjs._499Code.eventsList15 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BarraVerdiClaroVerdiOscuro"), gdjs._499Code.GDBarraVerdiClaroVerdiOscuroObjects1);
gdjs.copyArray(runtimeScene.getObjects("IMG_Pregunta"), gdjs._499Code.GDIMG_9595PreguntaObjects1);
gdjs.copyArray(runtimeScene.getObjects("Opciones"), gdjs._499Code.GDOpcionesObjects1);
gdjs.copyArray(runtimeScene.getObjects("Siguiente"), gdjs._499Code.GDSiguienteObjects1);
gdjs.copyArray(runtimeScene.getObjects("SliderEdad"), gdjs._499Code.GDSliderEdadObjects1);
gdjs.copyArray(runtimeScene.getObjects("Thumb"), gdjs._499Code.GDThumbObjects1);
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("Enabled"), false);
}{for(var i = 0, len = gdjs._499Code.GDSiguienteObjects1.length ;i < len;++i) {
    gdjs._499Code.GDSiguienteObjects1[i].getBehavior("Tween").addObjectScaleTween("as", 0.75, 0.75, "linear", 1, false, true);
}
}{for(var i = 0, len = gdjs._499Code.GDSiguienteObjects1.length ;i < len;++i) {
    gdjs._499Code.GDSiguienteObjects1[i].setAnimation(0);
}
}{for(var i = 0, len = gdjs._499Code.GDSiguienteObjects1.length ;i < len;++i) {
    gdjs._499Code.GDSiguienteObjects1[i].setOpacity(150);
}
}{for(var i = 0, len = gdjs._499Code.GDBarraVerdiClaroVerdiOscuroObjects1.length ;i < len;++i) {
    gdjs._499Code.GDBarraVerdiClaroVerdiOscuroObjects1[i].getBehavior("DraggableSliderControl").SetValue(21, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs._499Code.GDSliderEdadObjects1.length ;i < len;++i) {
    gdjs._499Code.GDSliderEdadObjects1[i].getBehavior("DraggableSliderControl").SetValue(6, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs._499Code.GDThumbObjects1.length ;i < len;++i) {
    gdjs._499Code.GDThumbObjects1[i].getBehavior("Tween").addObjectScaleTween("Thumb", 0.6, 0.6, "linear", 1, false, true);
}
}{for(var i = 0, len = gdjs._499Code.GDIMG_9595PreguntaObjects1.length ;i < len;++i) {
    gdjs._499Code.GDIMG_9595PreguntaObjects1[i].getBehavior("Tween").addObjectScaleTween("Thumb", 0.5, 0.5, "linear", 1, false, true);
}
}{for(var i = 0, len = gdjs._499Code.GDOpcionesObjects1.length ;i < len;++i) {
    gdjs._499Code.GDOpcionesObjects1[i].pauseAnimation();
}
}{for(var i = 0, len = gdjs._499Code.GDThumbObjects1.length ;i < len;++i) {
    gdjs._499Code.GDThumbObjects1[i].setAnimationFrame(0);
}
}{for(var i = 0, len = gdjs._499Code.GDOpcionesObjects1.length ;i < len;++i) {
    gdjs._499Code.GDOpcionesObjects1[i].activateBehavior("SineMovement", false);
}
}
{ //Subevents
gdjs._499Code.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Opciones"), gdjs._499Code.GDOpcionesObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().get("Enabled"), false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._499Code.mapOfGDgdjs_9546_9595499Code_9546GDOpcionesObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(23665164);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("Enabled"), true);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("SliderEdad"), gdjs._499Code.GDSliderEdadObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._499Code.GDSliderEdadObjects1.length;i<l;++i) {
    if ( gdjs._499Code.GDSliderEdadObjects1[i].getBehavior("DraggableSliderControl").IsBeingDragged((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs._499Code.GDSliderEdadObjects1[k] = gdjs._499Code.GDSliderEdadObjects1[i];
        ++k;
    }
}
gdjs._499Code.GDSliderEdadObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs._499Code.eventsList6(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().get("Enabled"), true);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs._499Code.eventsList12(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs._499Code.GDNewTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("SliderEdad"), gdjs._499Code.GDSliderEdadObjects1);
gdjs.copyArray(runtimeScene.getObjects("Thumb"), gdjs._499Code.GDThumbObjects1);
{for(var i = 0, len = gdjs._499Code.GDNewTextObjects1.length ;i < len;++i) {
    gdjs._499Code.GDNewTextObjects1[i].setString(gdjs.evtTools.common.toString((( gdjs._499Code.GDSliderEdadObjects1.length === 0 ) ? 0 :gdjs._499Code.GDSliderEdadObjects1[0].getBehavior("DraggableSliderControl").Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)))));
}
}{for(var i = 0, len = gdjs._499Code.GDThumbObjects1.length ;i < len;++i) {
    gdjs._499Code.GDThumbObjects1[i].setX(155 + (( gdjs._499Code.GDSliderEdadObjects1.length === 0 ) ? 0 :gdjs._499Code.GDSliderEdadObjects1[0].getBehavior("DraggableSliderControl")._getThumbOffset()));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("SliderEdad"), gdjs._499Code.GDSliderEdadObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._499Code.GDSliderEdadObjects1.length;i<l;++i) {
    if ( !(gdjs._499Code.GDSliderEdadObjects1[i].getBehavior("DraggableSliderControl").IsBeingDragged((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        isConditionTrue_0 = true;
        gdjs._499Code.GDSliderEdadObjects1[k] = gdjs._499Code.GDSliderEdadObjects1[i];
        ++k;
    }
}
gdjs._499Code.GDSliderEdadObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(23706668);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Thumb"), gdjs._499Code.GDThumbObjects1);
{for(var i = 0, len = gdjs._499Code.GDThumbObjects1.length ;i < len;++i) {
    gdjs._499Code.GDThumbObjects1[i].getBehavior("Tween").addObjectScaleTween("Thumb2", 0.6, 0.6, "linear", 50, false, true);
}
}
{ //Subevents
gdjs._499Code.eventsList13(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Opciones"), gdjs._499Code.GDOpcionesObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._499Code.mapOfGDgdjs_9546_9595499Code_9546GDOpcionesObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(23709556);
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs._499Code.eventsList14(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Siguiente"), gdjs._499Code.GDSiguienteObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._499Code.mapOfGDgdjs_9546_9595499Code_9546GDSiguienteObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._499Code.GDSiguienteObjects1.length;i<l;++i) {
    if ( gdjs._499Code.GDSiguienteObjects1[i].getOpacity() == 255 ) {
        isConditionTrue_0 = true;
        gdjs._499Code.GDSiguienteObjects1[k] = gdjs._499Code.GDSiguienteObjects1[i];
        ++k;
    }
}
gdjs._499Code.GDSiguienteObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(23713724);
}
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("FrequencyNumber"), gdjs._499Code.GDFrequencyNumberObjects1);
{runtimeScene.getGame().getVariables().get("User").getChild("TeAdaptadasALosCambios").setString((( gdjs._499Code.GDFrequencyNumberObjects1.length === 0 ) ? "" :gdjs._499Code.GDFrequencyNumberObjects1[0].getString()));
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "20", false);
}}

}


};

gdjs._499Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._499Code.GDFrequencyNumberObjects1.length = 0;
gdjs._499Code.GDFrequencyNumberObjects2.length = 0;
gdjs._499Code.GDFrequencyNumberObjects3.length = 0;
gdjs._499Code.GDFrequencyNumberObjects4.length = 0;
gdjs._499Code.GDFondoObjects1.length = 0;
gdjs._499Code.GDFondoObjects2.length = 0;
gdjs._499Code.GDFondoObjects3.length = 0;
gdjs._499Code.GDFondoObjects4.length = 0;
gdjs._499Code.GDSliderEdadObjects1.length = 0;
gdjs._499Code.GDSliderEdadObjects2.length = 0;
gdjs._499Code.GDSliderEdadObjects3.length = 0;
gdjs._499Code.GDSliderEdadObjects4.length = 0;
gdjs._499Code.GDBarraVerdiClaroVerdiOscuroObjects1.length = 0;
gdjs._499Code.GDBarraVerdiClaroVerdiOscuroObjects2.length = 0;
gdjs._499Code.GDBarraVerdiClaroVerdiOscuroObjects3.length = 0;
gdjs._499Code.GDBarraVerdiClaroVerdiOscuroObjects4.length = 0;
gdjs._499Code.GDIMG_9595PreguntaObjects1.length = 0;
gdjs._499Code.GDIMG_9595PreguntaObjects2.length = 0;
gdjs._499Code.GDIMG_9595PreguntaObjects3.length = 0;
gdjs._499Code.GDIMG_9595PreguntaObjects4.length = 0;
gdjs._499Code.GDOpcionesObjects1.length = 0;
gdjs._499Code.GDOpcionesObjects2.length = 0;
gdjs._499Code.GDOpcionesObjects3.length = 0;
gdjs._499Code.GDOpcionesObjects4.length = 0;
gdjs._499Code.GDSiguienteObjects1.length = 0;
gdjs._499Code.GDSiguienteObjects2.length = 0;
gdjs._499Code.GDSiguienteObjects3.length = 0;
gdjs._499Code.GDSiguienteObjects4.length = 0;
gdjs._499Code.GDNewTextObjects1.length = 0;
gdjs._499Code.GDNewTextObjects2.length = 0;
gdjs._499Code.GDNewTextObjects3.length = 0;
gdjs._499Code.GDNewTextObjects4.length = 0;
gdjs._499Code.GDThumbObjects1.length = 0;
gdjs._499Code.GDThumbObjects2.length = 0;
gdjs._499Code.GDThumbObjects3.length = 0;
gdjs._499Code.GDThumbObjects4.length = 0;

gdjs._499Code.eventsList15(runtimeScene);
gdjs._499Code.GDFrequencyNumberObjects1.length = 0;
gdjs._499Code.GDFrequencyNumberObjects2.length = 0;
gdjs._499Code.GDFrequencyNumberObjects3.length = 0;
gdjs._499Code.GDFrequencyNumberObjects4.length = 0;
gdjs._499Code.GDFondoObjects1.length = 0;
gdjs._499Code.GDFondoObjects2.length = 0;
gdjs._499Code.GDFondoObjects3.length = 0;
gdjs._499Code.GDFondoObjects4.length = 0;
gdjs._499Code.GDSliderEdadObjects1.length = 0;
gdjs._499Code.GDSliderEdadObjects2.length = 0;
gdjs._499Code.GDSliderEdadObjects3.length = 0;
gdjs._499Code.GDSliderEdadObjects4.length = 0;
gdjs._499Code.GDBarraVerdiClaroVerdiOscuroObjects1.length = 0;
gdjs._499Code.GDBarraVerdiClaroVerdiOscuroObjects2.length = 0;
gdjs._499Code.GDBarraVerdiClaroVerdiOscuroObjects3.length = 0;
gdjs._499Code.GDBarraVerdiClaroVerdiOscuroObjects4.length = 0;
gdjs._499Code.GDIMG_9595PreguntaObjects1.length = 0;
gdjs._499Code.GDIMG_9595PreguntaObjects2.length = 0;
gdjs._499Code.GDIMG_9595PreguntaObjects3.length = 0;
gdjs._499Code.GDIMG_9595PreguntaObjects4.length = 0;
gdjs._499Code.GDOpcionesObjects1.length = 0;
gdjs._499Code.GDOpcionesObjects2.length = 0;
gdjs._499Code.GDOpcionesObjects3.length = 0;
gdjs._499Code.GDOpcionesObjects4.length = 0;
gdjs._499Code.GDSiguienteObjects1.length = 0;
gdjs._499Code.GDSiguienteObjects2.length = 0;
gdjs._499Code.GDSiguienteObjects3.length = 0;
gdjs._499Code.GDSiguienteObjects4.length = 0;
gdjs._499Code.GDNewTextObjects1.length = 0;
gdjs._499Code.GDNewTextObjects2.length = 0;
gdjs._499Code.GDNewTextObjects3.length = 0;
gdjs._499Code.GDNewTextObjects4.length = 0;
gdjs._499Code.GDThumbObjects1.length = 0;
gdjs._499Code.GDThumbObjects2.length = 0;
gdjs._499Code.GDThumbObjects3.length = 0;
gdjs._499Code.GDThumbObjects4.length = 0;


return;

}

gdjs['_499Code'] = gdjs._499Code;
