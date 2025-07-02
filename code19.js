gdjs._496Code = {};
gdjs._496Code.localVariables = [];
gdjs._496Code.GDFrequencyNumberObjects1= [];
gdjs._496Code.GDFrequencyNumberObjects2= [];
gdjs._496Code.GDFrequencyNumberObjects3= [];
gdjs._496Code.GDFrequencyNumberObjects4= [];
gdjs._496Code.GDFondoObjects1= [];
gdjs._496Code.GDFondoObjects2= [];
gdjs._496Code.GDFondoObjects3= [];
gdjs._496Code.GDFondoObjects4= [];
gdjs._496Code.GDBarraVerdiClaroVerdiOscuroObjects1= [];
gdjs._496Code.GDBarraVerdiClaroVerdiOscuroObjects2= [];
gdjs._496Code.GDBarraVerdiClaroVerdiOscuroObjects3= [];
gdjs._496Code.GDBarraVerdiClaroVerdiOscuroObjects4= [];
gdjs._496Code.GDSliderEdadObjects1= [];
gdjs._496Code.GDSliderEdadObjects2= [];
gdjs._496Code.GDSliderEdadObjects3= [];
gdjs._496Code.GDSliderEdadObjects4= [];
gdjs._496Code.GDSiguienteObjects1= [];
gdjs._496Code.GDSiguienteObjects2= [];
gdjs._496Code.GDSiguienteObjects3= [];
gdjs._496Code.GDSiguienteObjects4= [];
gdjs._496Code.GDIMG_9595PreguntaObjects1= [];
gdjs._496Code.GDIMG_9595PreguntaObjects2= [];
gdjs._496Code.GDIMG_9595PreguntaObjects3= [];
gdjs._496Code.GDIMG_9595PreguntaObjects4= [];
gdjs._496Code.GDOpcionesObjects1= [];
gdjs._496Code.GDOpcionesObjects2= [];
gdjs._496Code.GDOpcionesObjects3= [];
gdjs._496Code.GDOpcionesObjects4= [];
gdjs._496Code.GDNewTextObjects1= [];
gdjs._496Code.GDNewTextObjects2= [];
gdjs._496Code.GDNewTextObjects3= [];
gdjs._496Code.GDNewTextObjects4= [];
gdjs._496Code.GDThumbObjects1= [];
gdjs._496Code.GDThumbObjects2= [];
gdjs._496Code.GDThumbObjects3= [];
gdjs._496Code.GDThumbObjects4= [];


gdjs._496Code.asyncCallback21265716 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs._496Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("IMG_Pregunta"), gdjs._496Code.GDIMG_9595PreguntaObjects2);

{for(var i = 0, len = gdjs._496Code.GDIMG_9595PreguntaObjects2.length ;i < len;++i) {
    gdjs._496Code.GDIMG_9595PreguntaObjects2[i].getBehavior("Tween").addObjectScaleTween("Thumb", 1, 1, "swingFromTo", 400, false, true);
}
}gdjs._496Code.localVariables.length = 0;
}
gdjs._496Code.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs._496Code.localVariables);
for (const obj of gdjs._496Code.GDIMG_9595PreguntaObjects1) asyncObjectsList.addObject("IMG_Pregunta", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.2), (runtimeScene) => (gdjs._496Code.asyncCallback21265716(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs._496Code.mapOfGDgdjs_9546_9595496Code_9546GDOpcionesObjects1Objects = Hashtable.newFrom({"Opciones": gdjs._496Code.GDOpcionesObjects1});
gdjs._496Code.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Opciones"), gdjs._496Code.GDOpcionesObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._496Code.GDOpcionesObjects3.length;i<l;++i) {
    if ( !(gdjs._496Code.GDOpcionesObjects3[i].getAnimation() == 4) ) {
        isConditionTrue_0 = true;
        gdjs._496Code.GDOpcionesObjects3[k] = gdjs._496Code.GDOpcionesObjects3[i];
        ++k;
    }
}
gdjs._496Code.GDOpcionesObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(21271020);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs._496Code.GDOpcionesObjects3 */
{for(var i = 0, len = gdjs._496Code.GDOpcionesObjects3.length ;i < len;++i) {
    gdjs._496Code.GDOpcionesObjects3[i].setY(660);
}
}{for(var i = 0, len = gdjs._496Code.GDOpcionesObjects3.length ;i < len;++i) {
    gdjs._496Code.GDOpcionesObjects3[i].activateBehavior("SineMovement", false);
}
}{for(var i = 0, len = gdjs._496Code.GDOpcionesObjects3.length ;i < len;++i) {
    gdjs._496Code.GDOpcionesObjects3[i].setAnimationFrame(0);
}
}{for(var i = 0, len = gdjs._496Code.GDOpcionesObjects3.length ;i < len;++i) {
    gdjs._496Code.GDOpcionesObjects3[i].getBehavior("Tween").addObjectScaleTween("Thumb3", 1, 1, "linear", 1, false, true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Opciones"), gdjs._496Code.GDOpcionesObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._496Code.GDOpcionesObjects2.length;i<l;++i) {
    if ( gdjs._496Code.GDOpcionesObjects2[i].getAnimation() == 4 ) {
        isConditionTrue_0 = true;
        gdjs._496Code.GDOpcionesObjects2[k] = gdjs._496Code.GDOpcionesObjects2[i];
        ++k;
    }
}
gdjs._496Code.GDOpcionesObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(21272828);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs._496Code.GDOpcionesObjects2 */
{for(var i = 0, len = gdjs._496Code.GDOpcionesObjects2.length ;i < len;++i) {
    gdjs._496Code.GDOpcionesObjects2[i].setAnimationFrame(1);
}
}{for(var i = 0, len = gdjs._496Code.GDOpcionesObjects2.length ;i < len;++i) {
    gdjs._496Code.GDOpcionesObjects2[i].getBehavior("Tween").addObjectScaleTween("Thumb2", 1.1, 1.1, "linear", 100, false, true);
}
}{for(var i = 0, len = gdjs._496Code.GDOpcionesObjects2.length ;i < len;++i) {
    gdjs._496Code.GDOpcionesObjects2[i].activateBehavior("SineMovement", true);
}
}}

}


};gdjs._496Code.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Opciones"), gdjs._496Code.GDOpcionesObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._496Code.GDOpcionesObjects3.length;i<l;++i) {
    if ( !(gdjs._496Code.GDOpcionesObjects3[i].getAnimation() == 3) ) {
        isConditionTrue_0 = true;
        gdjs._496Code.GDOpcionesObjects3[k] = gdjs._496Code.GDOpcionesObjects3[i];
        ++k;
    }
}
gdjs._496Code.GDOpcionesObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(21274948);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs._496Code.GDOpcionesObjects3 */
{for(var i = 0, len = gdjs._496Code.GDOpcionesObjects3.length ;i < len;++i) {
    gdjs._496Code.GDOpcionesObjects3[i].setY(660);
}
}{for(var i = 0, len = gdjs._496Code.GDOpcionesObjects3.length ;i < len;++i) {
    gdjs._496Code.GDOpcionesObjects3[i].activateBehavior("SineMovement", false);
}
}{for(var i = 0, len = gdjs._496Code.GDOpcionesObjects3.length ;i < len;++i) {
    gdjs._496Code.GDOpcionesObjects3[i].setAnimationFrame(0);
}
}{for(var i = 0, len = gdjs._496Code.GDOpcionesObjects3.length ;i < len;++i) {
    gdjs._496Code.GDOpcionesObjects3[i].getBehavior("Tween").addObjectScaleTween("Thumb3", 1, 1, "linear", 1, false, true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Opciones"), gdjs._496Code.GDOpcionesObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._496Code.GDOpcionesObjects2.length;i<l;++i) {
    if ( gdjs._496Code.GDOpcionesObjects2[i].getAnimation() == 3 ) {
        isConditionTrue_0 = true;
        gdjs._496Code.GDOpcionesObjects2[k] = gdjs._496Code.GDOpcionesObjects2[i];
        ++k;
    }
}
gdjs._496Code.GDOpcionesObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(21274620);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs._496Code.GDOpcionesObjects2 */
{for(var i = 0, len = gdjs._496Code.GDOpcionesObjects2.length ;i < len;++i) {
    gdjs._496Code.GDOpcionesObjects2[i].setAnimationFrame(1);
}
}{for(var i = 0, len = gdjs._496Code.GDOpcionesObjects2.length ;i < len;++i) {
    gdjs._496Code.GDOpcionesObjects2[i].getBehavior("Tween").addObjectScaleTween("Thumb2", 1.1, 1.1, "linear", 100, false, true);
}
}{for(var i = 0, len = gdjs._496Code.GDOpcionesObjects2.length ;i < len;++i) {
    gdjs._496Code.GDOpcionesObjects2[i].activateBehavior("SineMovement", true);
}
}}

}


};gdjs._496Code.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Opciones"), gdjs._496Code.GDOpcionesObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._496Code.GDOpcionesObjects3.length;i<l;++i) {
    if ( !(gdjs._496Code.GDOpcionesObjects3[i].getAnimation() == 2) ) {
        isConditionTrue_0 = true;
        gdjs._496Code.GDOpcionesObjects3[k] = gdjs._496Code.GDOpcionesObjects3[i];
        ++k;
    }
}
gdjs._496Code.GDOpcionesObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(21278300);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs._496Code.GDOpcionesObjects3 */
{for(var i = 0, len = gdjs._496Code.GDOpcionesObjects3.length ;i < len;++i) {
    gdjs._496Code.GDOpcionesObjects3[i].setY(660);
}
}{for(var i = 0, len = gdjs._496Code.GDOpcionesObjects3.length ;i < len;++i) {
    gdjs._496Code.GDOpcionesObjects3[i].activateBehavior("SineMovement", false);
}
}{for(var i = 0, len = gdjs._496Code.GDOpcionesObjects3.length ;i < len;++i) {
    gdjs._496Code.GDOpcionesObjects3[i].setAnimationFrame(0);
}
}{for(var i = 0, len = gdjs._496Code.GDOpcionesObjects3.length ;i < len;++i) {
    gdjs._496Code.GDOpcionesObjects3[i].getBehavior("Tween").addObjectScaleTween("Thumb3", 1, 1, "linear", 1, false, true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Opciones"), gdjs._496Code.GDOpcionesObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._496Code.GDOpcionesObjects2.length;i<l;++i) {
    if ( gdjs._496Code.GDOpcionesObjects2[i].getAnimation() == 2 ) {
        isConditionTrue_0 = true;
        gdjs._496Code.GDOpcionesObjects2[k] = gdjs._496Code.GDOpcionesObjects2[i];
        ++k;
    }
}
gdjs._496Code.GDOpcionesObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(21279700);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs._496Code.GDOpcionesObjects2 */
{for(var i = 0, len = gdjs._496Code.GDOpcionesObjects2.length ;i < len;++i) {
    gdjs._496Code.GDOpcionesObjects2[i].setAnimationFrame(1);
}
}{for(var i = 0, len = gdjs._496Code.GDOpcionesObjects2.length ;i < len;++i) {
    gdjs._496Code.GDOpcionesObjects2[i].getBehavior("Tween").addObjectScaleTween("Thumb2", 1.1, 1.1, "linear", 100, false, true);
}
}{for(var i = 0, len = gdjs._496Code.GDOpcionesObjects2.length ;i < len;++i) {
    gdjs._496Code.GDOpcionesObjects2[i].activateBehavior("SineMovement", true);
}
}}

}


};gdjs._496Code.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Opciones"), gdjs._496Code.GDOpcionesObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._496Code.GDOpcionesObjects3.length;i<l;++i) {
    if ( !(gdjs._496Code.GDOpcionesObjects3[i].getAnimation() == 1) ) {
        isConditionTrue_0 = true;
        gdjs._496Code.GDOpcionesObjects3[k] = gdjs._496Code.GDOpcionesObjects3[i];
        ++k;
    }
}
gdjs._496Code.GDOpcionesObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(21281884);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs._496Code.GDOpcionesObjects3 */
{for(var i = 0, len = gdjs._496Code.GDOpcionesObjects3.length ;i < len;++i) {
    gdjs._496Code.GDOpcionesObjects3[i].setY(660);
}
}{for(var i = 0, len = gdjs._496Code.GDOpcionesObjects3.length ;i < len;++i) {
    gdjs._496Code.GDOpcionesObjects3[i].activateBehavior("SineMovement", false);
}
}{for(var i = 0, len = gdjs._496Code.GDOpcionesObjects3.length ;i < len;++i) {
    gdjs._496Code.GDOpcionesObjects3[i].setAnimationFrame(0);
}
}{for(var i = 0, len = gdjs._496Code.GDOpcionesObjects3.length ;i < len;++i) {
    gdjs._496Code.GDOpcionesObjects3[i].getBehavior("Tween").addObjectScaleTween("Thumb3", 1, 1, "linear", 1, false, true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Opciones"), gdjs._496Code.GDOpcionesObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._496Code.GDOpcionesObjects2.length;i<l;++i) {
    if ( gdjs._496Code.GDOpcionesObjects2[i].getAnimation() == 1 ) {
        isConditionTrue_0 = true;
        gdjs._496Code.GDOpcionesObjects2[k] = gdjs._496Code.GDOpcionesObjects2[i];
        ++k;
    }
}
gdjs._496Code.GDOpcionesObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(21283692);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs._496Code.GDOpcionesObjects2 */
{for(var i = 0, len = gdjs._496Code.GDOpcionesObjects2.length ;i < len;++i) {
    gdjs._496Code.GDOpcionesObjects2[i].setAnimationFrame(1);
}
}{for(var i = 0, len = gdjs._496Code.GDOpcionesObjects2.length ;i < len;++i) {
    gdjs._496Code.GDOpcionesObjects2[i].getBehavior("Tween").addObjectScaleTween("Thumb2", 1.1, 1.1, "linear", 100, false, true);
}
}{for(var i = 0, len = gdjs._496Code.GDOpcionesObjects2.length ;i < len;++i) {
    gdjs._496Code.GDOpcionesObjects2[i].activateBehavior("SineMovement", true);
}
}}

}


};gdjs._496Code.eventsList5 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Opciones"), gdjs._496Code.GDOpcionesObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._496Code.GDOpcionesObjects3.length;i<l;++i) {
    if ( !(gdjs._496Code.GDOpcionesObjects3[i].getAnimation() == 0) ) {
        isConditionTrue_0 = true;
        gdjs._496Code.GDOpcionesObjects3[k] = gdjs._496Code.GDOpcionesObjects3[i];
        ++k;
    }
}
gdjs._496Code.GDOpcionesObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(21285612);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs._496Code.GDOpcionesObjects3 */
{for(var i = 0, len = gdjs._496Code.GDOpcionesObjects3.length ;i < len;++i) {
    gdjs._496Code.GDOpcionesObjects3[i].setY(660);
}
}{for(var i = 0, len = gdjs._496Code.GDOpcionesObjects3.length ;i < len;++i) {
    gdjs._496Code.GDOpcionesObjects3[i].activateBehavior("SineMovement", false);
}
}{for(var i = 0, len = gdjs._496Code.GDOpcionesObjects3.length ;i < len;++i) {
    gdjs._496Code.GDOpcionesObjects3[i].setAnimationFrame(0);
}
}{for(var i = 0, len = gdjs._496Code.GDOpcionesObjects3.length ;i < len;++i) {
    gdjs._496Code.GDOpcionesObjects3[i].getBehavior("Tween").addObjectScaleTween("Thumb3", 1, 1, "linear", 1, false, true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Opciones"), gdjs._496Code.GDOpcionesObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._496Code.GDOpcionesObjects2.length;i<l;++i) {
    if ( gdjs._496Code.GDOpcionesObjects2[i].getAnimation() == 0 ) {
        isConditionTrue_0 = true;
        gdjs._496Code.GDOpcionesObjects2[k] = gdjs._496Code.GDOpcionesObjects2[i];
        ++k;
    }
}
gdjs._496Code.GDOpcionesObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(21286364);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs._496Code.GDOpcionesObjects2 */
{for(var i = 0, len = gdjs._496Code.GDOpcionesObjects2.length ;i < len;++i) {
    gdjs._496Code.GDOpcionesObjects2[i].setAnimationFrame(1);
}
}{for(var i = 0, len = gdjs._496Code.GDOpcionesObjects2.length ;i < len;++i) {
    gdjs._496Code.GDOpcionesObjects2[i].getBehavior("Tween").addObjectScaleTween("Thumb2", 1.1, 1.1, "linear", 100, false, true);
}
}{for(var i = 0, len = gdjs._496Code.GDOpcionesObjects2.length ;i < len;++i) {
    gdjs._496Code.GDOpcionesObjects2[i].activateBehavior("SineMovement", true);
}
}}

}


};gdjs._496Code.eventsList6 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Siguiente"), gdjs._496Code.GDSiguienteObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._496Code.GDSiguienteObjects2.length;i<l;++i) {
    if ( gdjs._496Code.GDSiguienteObjects2[i].getOpacity() == 150 ) {
        isConditionTrue_0 = true;
        gdjs._496Code.GDSiguienteObjects2[k] = gdjs._496Code.GDSiguienteObjects2[i];
        ++k;
    }
}
gdjs._496Code.GDSiguienteObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(21268868);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs._496Code.GDSiguienteObjects2 */
{for(var i = 0, len = gdjs._496Code.GDSiguienteObjects2.length ;i < len;++i) {
    gdjs._496Code.GDSiguienteObjects2[i].setOpacity(255);
}
}{for(var i = 0, len = gdjs._496Code.GDSiguienteObjects2.length ;i < len;++i) {
    gdjs._496Code.GDSiguienteObjects2[i].getBehavior("Tween").addObjectScaleTween("as", 0.8, 0.8, "bouncePast", 100, false, true);
}
}{for(var i = 0, len = gdjs._496Code.GDSiguienteObjects2.length ;i < len;++i) {
    gdjs._496Code.GDSiguienteObjects2[i].setAnimation(1);
}
}}

}


{

gdjs.copyArray(gdjs._496Code.GDSliderEdadObjects1, gdjs._496Code.GDSliderEdadObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs._496Code.GDSliderEdadObjects2.length === 0 ) ? 0 :gdjs._496Code.GDSliderEdadObjects2[0].getBehavior("DraggableSliderControl").Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) == 10);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("FrequencyNumber"), gdjs._496Code.GDFrequencyNumberObjects2);
{for(var i = 0, len = gdjs._496Code.GDFrequencyNumberObjects2.length ;i < len;++i) {
    gdjs._496Code.GDFrequencyNumberObjects2[i].setString("Siempre");
}
}
{ //Subevents
gdjs._496Code.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs._496Code.GDSliderEdadObjects1, gdjs._496Code.GDSliderEdadObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs._496Code.GDSliderEdadObjects2.length === 0 ) ? 0 :gdjs._496Code.GDSliderEdadObjects2[0].getBehavior("DraggableSliderControl").Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) == 8);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("FrequencyNumber"), gdjs._496Code.GDFrequencyNumberObjects2);
{for(var i = 0, len = gdjs._496Code.GDFrequencyNumberObjects2.length ;i < len;++i) {
    gdjs._496Code.GDFrequencyNumberObjects2[i].setString("Casi siempre");
}
}
{ //Subevents
gdjs._496Code.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs._496Code.GDSliderEdadObjects1, gdjs._496Code.GDSliderEdadObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs._496Code.GDSliderEdadObjects2.length === 0 ) ? 0 :gdjs._496Code.GDSliderEdadObjects2[0].getBehavior("DraggableSliderControl").Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) == 6);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("FrequencyNumber"), gdjs._496Code.GDFrequencyNumberObjects2);
{for(var i = 0, len = gdjs._496Code.GDFrequencyNumberObjects2.length ;i < len;++i) {
    gdjs._496Code.GDFrequencyNumberObjects2[i].setString("Algunas veces");
}
}
{ //Subevents
gdjs._496Code.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs._496Code.GDSliderEdadObjects1, gdjs._496Code.GDSliderEdadObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs._496Code.GDSliderEdadObjects2.length === 0 ) ? 0 :gdjs._496Code.GDSliderEdadObjects2[0].getBehavior("DraggableSliderControl").Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) == 4);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("FrequencyNumber"), gdjs._496Code.GDFrequencyNumberObjects2);
{for(var i = 0, len = gdjs._496Code.GDFrequencyNumberObjects2.length ;i < len;++i) {
    gdjs._496Code.GDFrequencyNumberObjects2[i].setString("Casi nunca");
}
}
{ //Subevents
gdjs._496Code.eventsList4(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs._496Code.GDSliderEdadObjects1, gdjs._496Code.GDSliderEdadObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs._496Code.GDSliderEdadObjects2.length === 0 ) ? 0 :gdjs._496Code.GDSliderEdadObjects2[0].getBehavior("DraggableSliderControl").Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) == 2);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("FrequencyNumber"), gdjs._496Code.GDFrequencyNumberObjects2);
{for(var i = 0, len = gdjs._496Code.GDFrequencyNumberObjects2.length ;i < len;++i) {
    gdjs._496Code.GDFrequencyNumberObjects2[i].setString("Nunca");
}
}
{ //Subevents
gdjs._496Code.eventsList5(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(21288412);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Thumb"), gdjs._496Code.GDThumbObjects1);
{for(var i = 0, len = gdjs._496Code.GDThumbObjects1.length ;i < len;++i) {
    gdjs._496Code.GDThumbObjects1[i].getBehavior("Tween").addObjectScaleTween("Thumb", 0.8, 0.8, "linear", 50, false, true);
}
}}

}


};gdjs._496Code.eventsList7 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Opciones"), gdjs._496Code.GDOpcionesObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._496Code.GDOpcionesObjects3.length;i<l;++i) {
    if ( !(gdjs._496Code.GDOpcionesObjects3[i].getAnimation() == 4) ) {
        isConditionTrue_0 = true;
        gdjs._496Code.GDOpcionesObjects3[k] = gdjs._496Code.GDOpcionesObjects3[i];
        ++k;
    }
}
gdjs._496Code.GDOpcionesObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(21291492);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs._496Code.GDOpcionesObjects3 */
{for(var i = 0, len = gdjs._496Code.GDOpcionesObjects3.length ;i < len;++i) {
    gdjs._496Code.GDOpcionesObjects3[i].setY(660);
}
}{for(var i = 0, len = gdjs._496Code.GDOpcionesObjects3.length ;i < len;++i) {
    gdjs._496Code.GDOpcionesObjects3[i].activateBehavior("SineMovement", false);
}
}{for(var i = 0, len = gdjs._496Code.GDOpcionesObjects3.length ;i < len;++i) {
    gdjs._496Code.GDOpcionesObjects3[i].setAnimationFrame(0);
}
}{for(var i = 0, len = gdjs._496Code.GDOpcionesObjects3.length ;i < len;++i) {
    gdjs._496Code.GDOpcionesObjects3[i].getBehavior("Tween").addObjectScaleTween("Thumb3", 1, 1, "linear", 1, false, true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Opciones"), gdjs._496Code.GDOpcionesObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._496Code.GDOpcionesObjects2.length;i<l;++i) {
    if ( gdjs._496Code.GDOpcionesObjects2[i].getAnimation() == 4 ) {
        isConditionTrue_0 = true;
        gdjs._496Code.GDOpcionesObjects2[k] = gdjs._496Code.GDOpcionesObjects2[i];
        ++k;
    }
}
gdjs._496Code.GDOpcionesObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(21292892);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs._496Code.GDOpcionesObjects2 */
{for(var i = 0, len = gdjs._496Code.GDOpcionesObjects2.length ;i < len;++i) {
    gdjs._496Code.GDOpcionesObjects2[i].setAnimationFrame(1);
}
}{for(var i = 0, len = gdjs._496Code.GDOpcionesObjects2.length ;i < len;++i) {
    gdjs._496Code.GDOpcionesObjects2[i].getBehavior("Tween").addObjectScaleTween("Thumb2", 1.1, 1.1, "linear", 100, false, true);
}
}{for(var i = 0, len = gdjs._496Code.GDOpcionesObjects2.length ;i < len;++i) {
    gdjs._496Code.GDOpcionesObjects2[i].activateBehavior("SineMovement", true);
}
}}

}


};gdjs._496Code.eventsList8 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Opciones"), gdjs._496Code.GDOpcionesObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._496Code.GDOpcionesObjects3.length;i<l;++i) {
    if ( !(gdjs._496Code.GDOpcionesObjects3[i].getAnimation() == 3) ) {
        isConditionTrue_0 = true;
        gdjs._496Code.GDOpcionesObjects3[k] = gdjs._496Code.GDOpcionesObjects3[i];
        ++k;
    }
}
gdjs._496Code.GDOpcionesObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(21295108);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs._496Code.GDOpcionesObjects3 */
{for(var i = 0, len = gdjs._496Code.GDOpcionesObjects3.length ;i < len;++i) {
    gdjs._496Code.GDOpcionesObjects3[i].setY(660);
}
}{for(var i = 0, len = gdjs._496Code.GDOpcionesObjects3.length ;i < len;++i) {
    gdjs._496Code.GDOpcionesObjects3[i].activateBehavior("SineMovement", false);
}
}{for(var i = 0, len = gdjs._496Code.GDOpcionesObjects3.length ;i < len;++i) {
    gdjs._496Code.GDOpcionesObjects3[i].setAnimationFrame(0);
}
}{for(var i = 0, len = gdjs._496Code.GDOpcionesObjects3.length ;i < len;++i) {
    gdjs._496Code.GDOpcionesObjects3[i].getBehavior("Tween").addObjectScaleTween("Thumb3", 1, 1, "linear", 1, false, true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Opciones"), gdjs._496Code.GDOpcionesObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._496Code.GDOpcionesObjects2.length;i<l;++i) {
    if ( gdjs._496Code.GDOpcionesObjects2[i].getAnimation() == 3 ) {
        isConditionTrue_0 = true;
        gdjs._496Code.GDOpcionesObjects2[k] = gdjs._496Code.GDOpcionesObjects2[i];
        ++k;
    }
}
gdjs._496Code.GDOpcionesObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(21296516);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs._496Code.GDOpcionesObjects2 */
{for(var i = 0, len = gdjs._496Code.GDOpcionesObjects2.length ;i < len;++i) {
    gdjs._496Code.GDOpcionesObjects2[i].setAnimationFrame(1);
}
}{for(var i = 0, len = gdjs._496Code.GDOpcionesObjects2.length ;i < len;++i) {
    gdjs._496Code.GDOpcionesObjects2[i].getBehavior("Tween").addObjectScaleTween("Thumb2", 1.1, 1.1, "linear", 100, false, true);
}
}{for(var i = 0, len = gdjs._496Code.GDOpcionesObjects2.length ;i < len;++i) {
    gdjs._496Code.GDOpcionesObjects2[i].activateBehavior("SineMovement", true);
}
}}

}


};gdjs._496Code.eventsList9 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Opciones"), gdjs._496Code.GDOpcionesObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._496Code.GDOpcionesObjects3.length;i<l;++i) {
    if ( !(gdjs._496Code.GDOpcionesObjects3[i].getAnimation() == 2) ) {
        isConditionTrue_0 = true;
        gdjs._496Code.GDOpcionesObjects3[k] = gdjs._496Code.GDOpcionesObjects3[i];
        ++k;
    }
}
gdjs._496Code.GDOpcionesObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(21298724);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs._496Code.GDOpcionesObjects3 */
{for(var i = 0, len = gdjs._496Code.GDOpcionesObjects3.length ;i < len;++i) {
    gdjs._496Code.GDOpcionesObjects3[i].setY(660);
}
}{for(var i = 0, len = gdjs._496Code.GDOpcionesObjects3.length ;i < len;++i) {
    gdjs._496Code.GDOpcionesObjects3[i].activateBehavior("SineMovement", false);
}
}{for(var i = 0, len = gdjs._496Code.GDOpcionesObjects3.length ;i < len;++i) {
    gdjs._496Code.GDOpcionesObjects3[i].setAnimationFrame(0);
}
}{for(var i = 0, len = gdjs._496Code.GDOpcionesObjects3.length ;i < len;++i) {
    gdjs._496Code.GDOpcionesObjects3[i].getBehavior("Tween").addObjectScaleTween("Thumb3", 1, 1, "linear", 1, false, true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Opciones"), gdjs._496Code.GDOpcionesObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._496Code.GDOpcionesObjects2.length;i<l;++i) {
    if ( gdjs._496Code.GDOpcionesObjects2[i].getAnimation() == 2 ) {
        isConditionTrue_0 = true;
        gdjs._496Code.GDOpcionesObjects2[k] = gdjs._496Code.GDOpcionesObjects2[i];
        ++k;
    }
}
gdjs._496Code.GDOpcionesObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(21299788);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs._496Code.GDOpcionesObjects2 */
{for(var i = 0, len = gdjs._496Code.GDOpcionesObjects2.length ;i < len;++i) {
    gdjs._496Code.GDOpcionesObjects2[i].setAnimationFrame(1);
}
}{for(var i = 0, len = gdjs._496Code.GDOpcionesObjects2.length ;i < len;++i) {
    gdjs._496Code.GDOpcionesObjects2[i].getBehavior("Tween").addObjectScaleTween("Thumb2", 1.1, 1.1, "linear", 100, false, true);
}
}{for(var i = 0, len = gdjs._496Code.GDOpcionesObjects2.length ;i < len;++i) {
    gdjs._496Code.GDOpcionesObjects2[i].activateBehavior("SineMovement", true);
}
}}

}


};gdjs._496Code.eventsList10 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Opciones"), gdjs._496Code.GDOpcionesObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._496Code.GDOpcionesObjects3.length;i<l;++i) {
    if ( !(gdjs._496Code.GDOpcionesObjects3[i].getAnimation() == 1) ) {
        isConditionTrue_0 = true;
        gdjs._496Code.GDOpcionesObjects3[k] = gdjs._496Code.GDOpcionesObjects3[i];
        ++k;
    }
}
gdjs._496Code.GDOpcionesObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(21302332);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs._496Code.GDOpcionesObjects3 */
{for(var i = 0, len = gdjs._496Code.GDOpcionesObjects3.length ;i < len;++i) {
    gdjs._496Code.GDOpcionesObjects3[i].setY(660);
}
}{for(var i = 0, len = gdjs._496Code.GDOpcionesObjects3.length ;i < len;++i) {
    gdjs._496Code.GDOpcionesObjects3[i].activateBehavior("SineMovement", false);
}
}{for(var i = 0, len = gdjs._496Code.GDOpcionesObjects3.length ;i < len;++i) {
    gdjs._496Code.GDOpcionesObjects3[i].setAnimationFrame(0);
}
}{for(var i = 0, len = gdjs._496Code.GDOpcionesObjects3.length ;i < len;++i) {
    gdjs._496Code.GDOpcionesObjects3[i].getBehavior("Tween").addObjectScaleTween("Thumb3", 1, 1, "linear", 1, false, true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Opciones"), gdjs._496Code.GDOpcionesObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._496Code.GDOpcionesObjects2.length;i<l;++i) {
    if ( gdjs._496Code.GDOpcionesObjects2[i].getAnimation() == 1 ) {
        isConditionTrue_0 = true;
        gdjs._496Code.GDOpcionesObjects2[k] = gdjs._496Code.GDOpcionesObjects2[i];
        ++k;
    }
}
gdjs._496Code.GDOpcionesObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(21303372);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs._496Code.GDOpcionesObjects2 */
{for(var i = 0, len = gdjs._496Code.GDOpcionesObjects2.length ;i < len;++i) {
    gdjs._496Code.GDOpcionesObjects2[i].setAnimationFrame(1);
}
}{for(var i = 0, len = gdjs._496Code.GDOpcionesObjects2.length ;i < len;++i) {
    gdjs._496Code.GDOpcionesObjects2[i].getBehavior("Tween").addObjectScaleTween("Thumb2", 1.1, 1.1, "linear", 100, false, true);
}
}{for(var i = 0, len = gdjs._496Code.GDOpcionesObjects2.length ;i < len;++i) {
    gdjs._496Code.GDOpcionesObjects2[i].activateBehavior("SineMovement", true);
}
}}

}


};gdjs._496Code.eventsList11 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Opciones"), gdjs._496Code.GDOpcionesObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._496Code.GDOpcionesObjects2.length;i<l;++i) {
    if ( !(gdjs._496Code.GDOpcionesObjects2[i].getAnimation() == 0) ) {
        isConditionTrue_0 = true;
        gdjs._496Code.GDOpcionesObjects2[k] = gdjs._496Code.GDOpcionesObjects2[i];
        ++k;
    }
}
gdjs._496Code.GDOpcionesObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(21305916);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs._496Code.GDOpcionesObjects2 */
{for(var i = 0, len = gdjs._496Code.GDOpcionesObjects2.length ;i < len;++i) {
    gdjs._496Code.GDOpcionesObjects2[i].setY(660);
}
}{for(var i = 0, len = gdjs._496Code.GDOpcionesObjects2.length ;i < len;++i) {
    gdjs._496Code.GDOpcionesObjects2[i].activateBehavior("SineMovement", false);
}
}{for(var i = 0, len = gdjs._496Code.GDOpcionesObjects2.length ;i < len;++i) {
    gdjs._496Code.GDOpcionesObjects2[i].setAnimationFrame(0);
}
}{for(var i = 0, len = gdjs._496Code.GDOpcionesObjects2.length ;i < len;++i) {
    gdjs._496Code.GDOpcionesObjects2[i].getBehavior("Tween").addObjectScaleTween("Thumb3", 1, 1, "linear", 1, false, true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Opciones"), gdjs._496Code.GDOpcionesObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._496Code.GDOpcionesObjects1.length;i<l;++i) {
    if ( gdjs._496Code.GDOpcionesObjects1[i].getAnimation() == 0 ) {
        isConditionTrue_0 = true;
        gdjs._496Code.GDOpcionesObjects1[k] = gdjs._496Code.GDOpcionesObjects1[i];
        ++k;
    }
}
gdjs._496Code.GDOpcionesObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(21307724);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs._496Code.GDOpcionesObjects1 */
{for(var i = 0, len = gdjs._496Code.GDOpcionesObjects1.length ;i < len;++i) {
    gdjs._496Code.GDOpcionesObjects1[i].setAnimationFrame(1);
}
}{for(var i = 0, len = gdjs._496Code.GDOpcionesObjects1.length ;i < len;++i) {
    gdjs._496Code.GDOpcionesObjects1[i].getBehavior("Tween").addObjectScaleTween("Thumb2", 1.1, 1.1, "linear", 100, false, true);
}
}{for(var i = 0, len = gdjs._496Code.GDOpcionesObjects1.length ;i < len;++i) {
    gdjs._496Code.GDOpcionesObjects1[i].activateBehavior("SineMovement", true);
}
}}

}


};gdjs._496Code.eventsList12 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Siguiente"), gdjs._496Code.GDSiguienteObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._496Code.GDSiguienteObjects2.length;i<l;++i) {
    if ( gdjs._496Code.GDSiguienteObjects2[i].getOpacity() == 150 ) {
        isConditionTrue_0 = true;
        gdjs._496Code.GDSiguienteObjects2[k] = gdjs._496Code.GDSiguienteObjects2[i];
        ++k;
    }
}
gdjs._496Code.GDSiguienteObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(21289684);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs._496Code.GDSiguienteObjects2 */
{for(var i = 0, len = gdjs._496Code.GDSiguienteObjects2.length ;i < len;++i) {
    gdjs._496Code.GDSiguienteObjects2[i].setOpacity(255);
}
}{for(var i = 0, len = gdjs._496Code.GDSiguienteObjects2.length ;i < len;++i) {
    gdjs._496Code.GDSiguienteObjects2[i].setAnimation(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("SliderEdad"), gdjs._496Code.GDSliderEdadObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs._496Code.GDSliderEdadObjects2.length === 0 ) ? 0 :gdjs._496Code.GDSliderEdadObjects2[0].getBehavior("DraggableSliderControl").Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) == 10);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("FrequencyNumber"), gdjs._496Code.GDFrequencyNumberObjects2);
{for(var i = 0, len = gdjs._496Code.GDFrequencyNumberObjects2.length ;i < len;++i) {
    gdjs._496Code.GDFrequencyNumberObjects2[i].setString("Siempre");
}
}
{ //Subevents
gdjs._496Code.eventsList7(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("SliderEdad"), gdjs._496Code.GDSliderEdadObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs._496Code.GDSliderEdadObjects2.length === 0 ) ? 0 :gdjs._496Code.GDSliderEdadObjects2[0].getBehavior("DraggableSliderControl").Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) == 8);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("FrequencyNumber"), gdjs._496Code.GDFrequencyNumberObjects2);
{for(var i = 0, len = gdjs._496Code.GDFrequencyNumberObjects2.length ;i < len;++i) {
    gdjs._496Code.GDFrequencyNumberObjects2[i].setString("Casi siempre");
}
}
{ //Subevents
gdjs._496Code.eventsList8(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("SliderEdad"), gdjs._496Code.GDSliderEdadObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs._496Code.GDSliderEdadObjects2.length === 0 ) ? 0 :gdjs._496Code.GDSliderEdadObjects2[0].getBehavior("DraggableSliderControl").Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) == 6);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("FrequencyNumber"), gdjs._496Code.GDFrequencyNumberObjects2);
{for(var i = 0, len = gdjs._496Code.GDFrequencyNumberObjects2.length ;i < len;++i) {
    gdjs._496Code.GDFrequencyNumberObjects2[i].setString("Algunas veces");
}
}
{ //Subevents
gdjs._496Code.eventsList9(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("SliderEdad"), gdjs._496Code.GDSliderEdadObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs._496Code.GDSliderEdadObjects2.length === 0 ) ? 0 :gdjs._496Code.GDSliderEdadObjects2[0].getBehavior("DraggableSliderControl").Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) == 4);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("FrequencyNumber"), gdjs._496Code.GDFrequencyNumberObjects2);
{for(var i = 0, len = gdjs._496Code.GDFrequencyNumberObjects2.length ;i < len;++i) {
    gdjs._496Code.GDFrequencyNumberObjects2[i].setString("Casi nunca");
}
}
{ //Subevents
gdjs._496Code.eventsList10(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("SliderEdad"), gdjs._496Code.GDSliderEdadObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs._496Code.GDSliderEdadObjects1.length === 0 ) ? 0 :gdjs._496Code.GDSliderEdadObjects1[0].getBehavior("DraggableSliderControl").Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) == 2);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("FrequencyNumber"), gdjs._496Code.GDFrequencyNumberObjects1);
{for(var i = 0, len = gdjs._496Code.GDFrequencyNumberObjects1.length ;i < len;++i) {
    gdjs._496Code.GDFrequencyNumberObjects1[i].setString("Nunca");
}
}
{ //Subevents
gdjs._496Code.eventsList11(runtimeScene);} //End of subevents
}

}


};gdjs._496Code.eventsList13 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Opciones"), gdjs._496Code.GDOpcionesObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._496Code.GDOpcionesObjects1.length;i<l;++i) {
    if ( !(gdjs._496Code.GDOpcionesObjects1[i].behaviorActivated("SineMovement")) ) {
        isConditionTrue_0 = true;
        gdjs._496Code.GDOpcionesObjects1[k] = gdjs._496Code.GDOpcionesObjects1[i];
        ++k;
    }
}
gdjs._496Code.GDOpcionesObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs._496Code.GDOpcionesObjects1 */
{for(var i = 0, len = gdjs._496Code.GDOpcionesObjects1.length ;i < len;++i) {
    gdjs._496Code.GDOpcionesObjects1[i].getBehavior("Tween").addObjectScaleTween("Thumb4", 1, 1, "linear", 1, false, true);
}
}{for(var i = 0, len = gdjs._496Code.GDOpcionesObjects1.length ;i < len;++i) {
    gdjs._496Code.GDOpcionesObjects1[i].setY(660);
}
}}

}


};gdjs._496Code.mapOfGDgdjs_9546_9595496Code_9546GDOpcionesObjects1Objects = Hashtable.newFrom({"Opciones": gdjs._496Code.GDOpcionesObjects1});
gdjs._496Code.eventsList14 = function(runtimeScene) {

{

gdjs.copyArray(gdjs._496Code.GDOpcionesObjects1, gdjs._496Code.GDOpcionesObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._496Code.GDOpcionesObjects2.length;i<l;++i) {
    if ( gdjs._496Code.GDOpcionesObjects2[i].getAnimation() == 0 ) {
        isConditionTrue_0 = true;
        gdjs._496Code.GDOpcionesObjects2[k] = gdjs._496Code.GDOpcionesObjects2[i];
        ++k;
    }
}
gdjs._496Code.GDOpcionesObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("SliderEdad"), gdjs._496Code.GDSliderEdadObjects2);
{for(var i = 0, len = gdjs._496Code.GDSliderEdadObjects2.length ;i < len;++i) {
    gdjs._496Code.GDSliderEdadObjects2[i].getBehavior("DraggableSliderControl").SetValue(2, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(gdjs._496Code.GDOpcionesObjects1, gdjs._496Code.GDOpcionesObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._496Code.GDOpcionesObjects2.length;i<l;++i) {
    if ( gdjs._496Code.GDOpcionesObjects2[i].getAnimation() == 1 ) {
        isConditionTrue_0 = true;
        gdjs._496Code.GDOpcionesObjects2[k] = gdjs._496Code.GDOpcionesObjects2[i];
        ++k;
    }
}
gdjs._496Code.GDOpcionesObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("SliderEdad"), gdjs._496Code.GDSliderEdadObjects2);
{for(var i = 0, len = gdjs._496Code.GDSliderEdadObjects2.length ;i < len;++i) {
    gdjs._496Code.GDSliderEdadObjects2[i].getBehavior("DraggableSliderControl").SetValue(4, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(gdjs._496Code.GDOpcionesObjects1, gdjs._496Code.GDOpcionesObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._496Code.GDOpcionesObjects2.length;i<l;++i) {
    if ( gdjs._496Code.GDOpcionesObjects2[i].getAnimation() == 2 ) {
        isConditionTrue_0 = true;
        gdjs._496Code.GDOpcionesObjects2[k] = gdjs._496Code.GDOpcionesObjects2[i];
        ++k;
    }
}
gdjs._496Code.GDOpcionesObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("SliderEdad"), gdjs._496Code.GDSliderEdadObjects2);
{for(var i = 0, len = gdjs._496Code.GDSliderEdadObjects2.length ;i < len;++i) {
    gdjs._496Code.GDSliderEdadObjects2[i].getBehavior("DraggableSliderControl").SetValue(6, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(gdjs._496Code.GDOpcionesObjects1, gdjs._496Code.GDOpcionesObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._496Code.GDOpcionesObjects2.length;i<l;++i) {
    if ( gdjs._496Code.GDOpcionesObjects2[i].getAnimation() == 3 ) {
        isConditionTrue_0 = true;
        gdjs._496Code.GDOpcionesObjects2[k] = gdjs._496Code.GDOpcionesObjects2[i];
        ++k;
    }
}
gdjs._496Code.GDOpcionesObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("SliderEdad"), gdjs._496Code.GDSliderEdadObjects2);
{for(var i = 0, len = gdjs._496Code.GDSliderEdadObjects2.length ;i < len;++i) {
    gdjs._496Code.GDSliderEdadObjects2[i].getBehavior("DraggableSliderControl").SetValue(8, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

/* Reuse gdjs._496Code.GDOpcionesObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._496Code.GDOpcionesObjects1.length;i<l;++i) {
    if ( gdjs._496Code.GDOpcionesObjects1[i].getAnimation() == 4 ) {
        isConditionTrue_0 = true;
        gdjs._496Code.GDOpcionesObjects1[k] = gdjs._496Code.GDOpcionesObjects1[i];
        ++k;
    }
}
gdjs._496Code.GDOpcionesObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("SliderEdad"), gdjs._496Code.GDSliderEdadObjects1);
{for(var i = 0, len = gdjs._496Code.GDSliderEdadObjects1.length ;i < len;++i) {
    gdjs._496Code.GDSliderEdadObjects1[i].getBehavior("DraggableSliderControl").SetValue(10, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};gdjs._496Code.mapOfGDgdjs_9546_9595496Code_9546GDSiguienteObjects1Objects = Hashtable.newFrom({"Siguiente": gdjs._496Code.GDSiguienteObjects1});
gdjs._496Code.eventsList15 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BarraVerdiClaroVerdiOscuro"), gdjs._496Code.GDBarraVerdiClaroVerdiOscuroObjects1);
gdjs.copyArray(runtimeScene.getObjects("IMG_Pregunta"), gdjs._496Code.GDIMG_9595PreguntaObjects1);
gdjs.copyArray(runtimeScene.getObjects("Opciones"), gdjs._496Code.GDOpcionesObjects1);
gdjs.copyArray(runtimeScene.getObjects("Siguiente"), gdjs._496Code.GDSiguienteObjects1);
gdjs.copyArray(runtimeScene.getObjects("SliderEdad"), gdjs._496Code.GDSliderEdadObjects1);
gdjs.copyArray(runtimeScene.getObjects("Thumb"), gdjs._496Code.GDThumbObjects1);
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("Enabled"), false);
}{for(var i = 0, len = gdjs._496Code.GDSiguienteObjects1.length ;i < len;++i) {
    gdjs._496Code.GDSiguienteObjects1[i].getBehavior("Tween").addObjectScaleTween("as", 0.75, 0.75, "linear", 1, false, true);
}
}{for(var i = 0, len = gdjs._496Code.GDSiguienteObjects1.length ;i < len;++i) {
    gdjs._496Code.GDSiguienteObjects1[i].setAnimation(0);
}
}{for(var i = 0, len = gdjs._496Code.GDSiguienteObjects1.length ;i < len;++i) {
    gdjs._496Code.GDSiguienteObjects1[i].setOpacity(150);
}
}{for(var i = 0, len = gdjs._496Code.GDBarraVerdiClaroVerdiOscuroObjects1.length ;i < len;++i) {
    gdjs._496Code.GDBarraVerdiClaroVerdiOscuroObjects1[i].getBehavior("DraggableSliderControl").SetValue(18, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs._496Code.GDSliderEdadObjects1.length ;i < len;++i) {
    gdjs._496Code.GDSliderEdadObjects1[i].getBehavior("DraggableSliderControl").SetValue(6, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs._496Code.GDThumbObjects1.length ;i < len;++i) {
    gdjs._496Code.GDThumbObjects1[i].getBehavior("Tween").addObjectScaleTween("Thumb", 0.6, 0.6, "linear", 1, false, true);
}
}{for(var i = 0, len = gdjs._496Code.GDIMG_9595PreguntaObjects1.length ;i < len;++i) {
    gdjs._496Code.GDIMG_9595PreguntaObjects1[i].getBehavior("Tween").addObjectScaleTween("Thumb", 0.5, 0.5, "linear", 1, false, true);
}
}{for(var i = 0, len = gdjs._496Code.GDOpcionesObjects1.length ;i < len;++i) {
    gdjs._496Code.GDOpcionesObjects1[i].pauseAnimation();
}
}{for(var i = 0, len = gdjs._496Code.GDThumbObjects1.length ;i < len;++i) {
    gdjs._496Code.GDThumbObjects1[i].setAnimationFrame(0);
}
}{for(var i = 0, len = gdjs._496Code.GDOpcionesObjects1.length ;i < len;++i) {
    gdjs._496Code.GDOpcionesObjects1[i].activateBehavior("SineMovement", false);
}
}
{ //Subevents
gdjs._496Code.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Opciones"), gdjs._496Code.GDOpcionesObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().get("Enabled"), false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._496Code.mapOfGDgdjs_9546_9595496Code_9546GDOpcionesObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(21267508);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("Enabled"), true);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("SliderEdad"), gdjs._496Code.GDSliderEdadObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._496Code.GDSliderEdadObjects1.length;i<l;++i) {
    if ( gdjs._496Code.GDSliderEdadObjects1[i].getBehavior("DraggableSliderControl").IsBeingDragged((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs._496Code.GDSliderEdadObjects1[k] = gdjs._496Code.GDSliderEdadObjects1[i];
        ++k;
    }
}
gdjs._496Code.GDSliderEdadObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs._496Code.eventsList6(runtimeScene);} //End of subevents
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
gdjs._496Code.eventsList12(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs._496Code.GDNewTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("SliderEdad"), gdjs._496Code.GDSliderEdadObjects1);
gdjs.copyArray(runtimeScene.getObjects("Thumb"), gdjs._496Code.GDThumbObjects1);
{for(var i = 0, len = gdjs._496Code.GDNewTextObjects1.length ;i < len;++i) {
    gdjs._496Code.GDNewTextObjects1[i].setString(gdjs.evtTools.common.toString((( gdjs._496Code.GDSliderEdadObjects1.length === 0 ) ? 0 :gdjs._496Code.GDSliderEdadObjects1[0].getBehavior("DraggableSliderControl").Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)))));
}
}{for(var i = 0, len = gdjs._496Code.GDThumbObjects1.length ;i < len;++i) {
    gdjs._496Code.GDThumbObjects1[i].setX(155 + (( gdjs._496Code.GDSliderEdadObjects1.length === 0 ) ? 0 :gdjs._496Code.GDSliderEdadObjects1[0].getBehavior("DraggableSliderControl")._getThumbOffset()));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("SliderEdad"), gdjs._496Code.GDSliderEdadObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._496Code.GDSliderEdadObjects1.length;i<l;++i) {
    if ( !(gdjs._496Code.GDSliderEdadObjects1[i].getBehavior("DraggableSliderControl").IsBeingDragged((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        isConditionTrue_0 = true;
        gdjs._496Code.GDSliderEdadObjects1[k] = gdjs._496Code.GDSliderEdadObjects1[i];
        ++k;
    }
}
gdjs._496Code.GDSliderEdadObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(21309012);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Thumb"), gdjs._496Code.GDThumbObjects1);
{for(var i = 0, len = gdjs._496Code.GDThumbObjects1.length ;i < len;++i) {
    gdjs._496Code.GDThumbObjects1[i].getBehavior("Tween").addObjectScaleTween("Thumb2", 0.6, 0.6, "linear", 50, false, true);
}
}
{ //Subevents
gdjs._496Code.eventsList13(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Opciones"), gdjs._496Code.GDOpcionesObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._496Code.mapOfGDgdjs_9546_9595496Code_9546GDOpcionesObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(21311900);
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs._496Code.eventsList14(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Siguiente"), gdjs._496Code.GDSiguienteObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._496Code.mapOfGDgdjs_9546_9595496Code_9546GDSiguienteObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._496Code.GDSiguienteObjects1.length;i<l;++i) {
    if ( gdjs._496Code.GDSiguienteObjects1[i].getOpacity() == 255 ) {
        isConditionTrue_0 = true;
        gdjs._496Code.GDSiguienteObjects1[k] = gdjs._496Code.GDSiguienteObjects1[i];
        ++k;
    }
}
gdjs._496Code.GDSiguienteObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(21316068);
}
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("FrequencyNumber"), gdjs._496Code.GDFrequencyNumberObjects1);
{runtimeScene.getGame().getVariables().get("User").getChild("FrecuenciaPedirConsejo").setString((( gdjs._496Code.GDFrequencyNumberObjects1.length === 0 ) ? "" :gdjs._496Code.GDFrequencyNumberObjects1[0].getString()));
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "17", false);
}}

}


};

gdjs._496Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._496Code.GDFrequencyNumberObjects1.length = 0;
gdjs._496Code.GDFrequencyNumberObjects2.length = 0;
gdjs._496Code.GDFrequencyNumberObjects3.length = 0;
gdjs._496Code.GDFrequencyNumberObjects4.length = 0;
gdjs._496Code.GDFondoObjects1.length = 0;
gdjs._496Code.GDFondoObjects2.length = 0;
gdjs._496Code.GDFondoObjects3.length = 0;
gdjs._496Code.GDFondoObjects4.length = 0;
gdjs._496Code.GDBarraVerdiClaroVerdiOscuroObjects1.length = 0;
gdjs._496Code.GDBarraVerdiClaroVerdiOscuroObjects2.length = 0;
gdjs._496Code.GDBarraVerdiClaroVerdiOscuroObjects3.length = 0;
gdjs._496Code.GDBarraVerdiClaroVerdiOscuroObjects4.length = 0;
gdjs._496Code.GDSliderEdadObjects1.length = 0;
gdjs._496Code.GDSliderEdadObjects2.length = 0;
gdjs._496Code.GDSliderEdadObjects3.length = 0;
gdjs._496Code.GDSliderEdadObjects4.length = 0;
gdjs._496Code.GDSiguienteObjects1.length = 0;
gdjs._496Code.GDSiguienteObjects2.length = 0;
gdjs._496Code.GDSiguienteObjects3.length = 0;
gdjs._496Code.GDSiguienteObjects4.length = 0;
gdjs._496Code.GDIMG_9595PreguntaObjects1.length = 0;
gdjs._496Code.GDIMG_9595PreguntaObjects2.length = 0;
gdjs._496Code.GDIMG_9595PreguntaObjects3.length = 0;
gdjs._496Code.GDIMG_9595PreguntaObjects4.length = 0;
gdjs._496Code.GDOpcionesObjects1.length = 0;
gdjs._496Code.GDOpcionesObjects2.length = 0;
gdjs._496Code.GDOpcionesObjects3.length = 0;
gdjs._496Code.GDOpcionesObjects4.length = 0;
gdjs._496Code.GDNewTextObjects1.length = 0;
gdjs._496Code.GDNewTextObjects2.length = 0;
gdjs._496Code.GDNewTextObjects3.length = 0;
gdjs._496Code.GDNewTextObjects4.length = 0;
gdjs._496Code.GDThumbObjects1.length = 0;
gdjs._496Code.GDThumbObjects2.length = 0;
gdjs._496Code.GDThumbObjects3.length = 0;
gdjs._496Code.GDThumbObjects4.length = 0;

gdjs._496Code.eventsList15(runtimeScene);
gdjs._496Code.GDFrequencyNumberObjects1.length = 0;
gdjs._496Code.GDFrequencyNumberObjects2.length = 0;
gdjs._496Code.GDFrequencyNumberObjects3.length = 0;
gdjs._496Code.GDFrequencyNumberObjects4.length = 0;
gdjs._496Code.GDFondoObjects1.length = 0;
gdjs._496Code.GDFondoObjects2.length = 0;
gdjs._496Code.GDFondoObjects3.length = 0;
gdjs._496Code.GDFondoObjects4.length = 0;
gdjs._496Code.GDBarraVerdiClaroVerdiOscuroObjects1.length = 0;
gdjs._496Code.GDBarraVerdiClaroVerdiOscuroObjects2.length = 0;
gdjs._496Code.GDBarraVerdiClaroVerdiOscuroObjects3.length = 0;
gdjs._496Code.GDBarraVerdiClaroVerdiOscuroObjects4.length = 0;
gdjs._496Code.GDSliderEdadObjects1.length = 0;
gdjs._496Code.GDSliderEdadObjects2.length = 0;
gdjs._496Code.GDSliderEdadObjects3.length = 0;
gdjs._496Code.GDSliderEdadObjects4.length = 0;
gdjs._496Code.GDSiguienteObjects1.length = 0;
gdjs._496Code.GDSiguienteObjects2.length = 0;
gdjs._496Code.GDSiguienteObjects3.length = 0;
gdjs._496Code.GDSiguienteObjects4.length = 0;
gdjs._496Code.GDIMG_9595PreguntaObjects1.length = 0;
gdjs._496Code.GDIMG_9595PreguntaObjects2.length = 0;
gdjs._496Code.GDIMG_9595PreguntaObjects3.length = 0;
gdjs._496Code.GDIMG_9595PreguntaObjects4.length = 0;
gdjs._496Code.GDOpcionesObjects1.length = 0;
gdjs._496Code.GDOpcionesObjects2.length = 0;
gdjs._496Code.GDOpcionesObjects3.length = 0;
gdjs._496Code.GDOpcionesObjects4.length = 0;
gdjs._496Code.GDNewTextObjects1.length = 0;
gdjs._496Code.GDNewTextObjects2.length = 0;
gdjs._496Code.GDNewTextObjects3.length = 0;
gdjs._496Code.GDNewTextObjects4.length = 0;
gdjs._496Code.GDThumbObjects1.length = 0;
gdjs._496Code.GDThumbObjects2.length = 0;
gdjs._496Code.GDThumbObjects3.length = 0;
gdjs._496Code.GDThumbObjects4.length = 0;


return;

}

gdjs['_496Code'] = gdjs._496Code;
