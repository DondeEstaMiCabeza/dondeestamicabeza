gdjs._54_462Code = {};
gdjs._54_462Code.localVariables = [];
gdjs._54_462Code.GDFrequencyNumberObjects1= [];
gdjs._54_462Code.GDFrequencyNumberObjects2= [];
gdjs._54_462Code.GDFrequencyNumberObjects3= [];
gdjs._54_462Code.GDFrequencyNumberObjects4= [];
gdjs._54_462Code.GDBarraRojoBlancoObjects1= [];
gdjs._54_462Code.GDBarraRojoBlancoObjects2= [];
gdjs._54_462Code.GDBarraRojoBlancoObjects3= [];
gdjs._54_462Code.GDBarraRojoBlancoObjects4= [];
gdjs._54_462Code.GDSliderEdadObjects1= [];
gdjs._54_462Code.GDSliderEdadObjects2= [];
gdjs._54_462Code.GDSliderEdadObjects3= [];
gdjs._54_462Code.GDSliderEdadObjects4= [];
gdjs._54_462Code.GDSiguienteObjects1= [];
gdjs._54_462Code.GDSiguienteObjects2= [];
gdjs._54_462Code.GDSiguienteObjects3= [];
gdjs._54_462Code.GDSiguienteObjects4= [];
gdjs._54_462Code.GDIMG_9595PreguntaObjects1= [];
gdjs._54_462Code.GDIMG_9595PreguntaObjects2= [];
gdjs._54_462Code.GDIMG_9595PreguntaObjects3= [];
gdjs._54_462Code.GDIMG_9595PreguntaObjects4= [];
gdjs._54_462Code.GDOpcionesObjects1= [];
gdjs._54_462Code.GDOpcionesObjects2= [];
gdjs._54_462Code.GDOpcionesObjects3= [];
gdjs._54_462Code.GDOpcionesObjects4= [];
gdjs._54_462Code.GDNewTextObjects1= [];
gdjs._54_462Code.GDNewTextObjects2= [];
gdjs._54_462Code.GDNewTextObjects3= [];
gdjs._54_462Code.GDNewTextObjects4= [];
gdjs._54_462Code.GDThumbObjects1= [];
gdjs._54_462Code.GDThumbObjects2= [];
gdjs._54_462Code.GDThumbObjects3= [];
gdjs._54_462Code.GDThumbObjects4= [];
gdjs._54_462Code.GDFondoObjects1= [];
gdjs._54_462Code.GDFondoObjects2= [];
gdjs._54_462Code.GDFondoObjects3= [];
gdjs._54_462Code.GDFondoObjects4= [];


gdjs._54_462Code.asyncCallback22467844 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs._54_462Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("IMG_Pregunta"), gdjs._54_462Code.GDIMG_9595PreguntaObjects2);

{for(var i = 0, len = gdjs._54_462Code.GDIMG_9595PreguntaObjects2.length ;i < len;++i) {
    gdjs._54_462Code.GDIMG_9595PreguntaObjects2[i].getBehavior("Tween").addObjectScaleTween("Thumb", 1, 1, "swingFromTo", 400, false, true);
}
}gdjs._54_462Code.localVariables.length = 0;
}
gdjs._54_462Code.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs._54_462Code.localVariables);
for (const obj of gdjs._54_462Code.GDIMG_9595PreguntaObjects1) asyncObjectsList.addObject("IMG_Pregunta", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.2), (runtimeScene) => (gdjs._54_462Code.asyncCallback22467844(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs._54_462Code.mapOfGDgdjs_9546_959554_9595462Code_9546GDOpcionesObjects1Objects = Hashtable.newFrom({"Opciones": gdjs._54_462Code.GDOpcionesObjects1});
gdjs._54_462Code.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Opciones"), gdjs._54_462Code.GDOpcionesObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._54_462Code.GDOpcionesObjects3.length;i<l;++i) {
    if ( !(gdjs._54_462Code.GDOpcionesObjects3[i].getAnimation() == 5) ) {
        isConditionTrue_0 = true;
        gdjs._54_462Code.GDOpcionesObjects3[k] = gdjs._54_462Code.GDOpcionesObjects3[i];
        ++k;
    }
}
gdjs._54_462Code.GDOpcionesObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(22474636);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs._54_462Code.GDOpcionesObjects3 */
{for(var i = 0, len = gdjs._54_462Code.GDOpcionesObjects3.length ;i < len;++i) {
    gdjs._54_462Code.GDOpcionesObjects3[i].setY(660);
}
}{for(var i = 0, len = gdjs._54_462Code.GDOpcionesObjects3.length ;i < len;++i) {
    gdjs._54_462Code.GDOpcionesObjects3[i].activateBehavior("SineMovement", false);
}
}{for(var i = 0, len = gdjs._54_462Code.GDOpcionesObjects3.length ;i < len;++i) {
    gdjs._54_462Code.GDOpcionesObjects3[i].setAnimationFrame(0);
}
}{for(var i = 0, len = gdjs._54_462Code.GDOpcionesObjects3.length ;i < len;++i) {
    gdjs._54_462Code.GDOpcionesObjects3[i].getBehavior("Tween").addObjectScaleTween("Thumb3", 1, 1, "linear", 1, false, true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Opciones"), gdjs._54_462Code.GDOpcionesObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._54_462Code.GDOpcionesObjects2.length;i<l;++i) {
    if ( gdjs._54_462Code.GDOpcionesObjects2[i].getAnimation() == 5 ) {
        isConditionTrue_0 = true;
        gdjs._54_462Code.GDOpcionesObjects2[k] = gdjs._54_462Code.GDOpcionesObjects2[i];
        ++k;
    }
}
gdjs._54_462Code.GDOpcionesObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(22476124);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs._54_462Code.GDOpcionesObjects2 */
{for(var i = 0, len = gdjs._54_462Code.GDOpcionesObjects2.length ;i < len;++i) {
    gdjs._54_462Code.GDOpcionesObjects2[i].setAnimationFrame(1);
}
}{for(var i = 0, len = gdjs._54_462Code.GDOpcionesObjects2.length ;i < len;++i) {
    gdjs._54_462Code.GDOpcionesObjects2[i].getBehavior("Tween").addObjectScaleTween("Thumb2", 1.1, 1.1, "linear", 100, false, true);
}
}{for(var i = 0, len = gdjs._54_462Code.GDOpcionesObjects2.length ;i < len;++i) {
    gdjs._54_462Code.GDOpcionesObjects2[i].activateBehavior("SineMovement", true);
}
}}

}


};gdjs._54_462Code.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Opciones"), gdjs._54_462Code.GDOpcionesObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._54_462Code.GDOpcionesObjects3.length;i<l;++i) {
    if ( !(gdjs._54_462Code.GDOpcionesObjects3[i].getAnimation() == 4) ) {
        isConditionTrue_0 = true;
        gdjs._54_462Code.GDOpcionesObjects3[k] = gdjs._54_462Code.GDOpcionesObjects3[i];
        ++k;
    }
}
gdjs._54_462Code.GDOpcionesObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(22478028);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs._54_462Code.GDOpcionesObjects3 */
{for(var i = 0, len = gdjs._54_462Code.GDOpcionesObjects3.length ;i < len;++i) {
    gdjs._54_462Code.GDOpcionesObjects3[i].setY(660);
}
}{for(var i = 0, len = gdjs._54_462Code.GDOpcionesObjects3.length ;i < len;++i) {
    gdjs._54_462Code.GDOpcionesObjects3[i].activateBehavior("SineMovement", false);
}
}{for(var i = 0, len = gdjs._54_462Code.GDOpcionesObjects3.length ;i < len;++i) {
    gdjs._54_462Code.GDOpcionesObjects3[i].setAnimationFrame(0);
}
}{for(var i = 0, len = gdjs._54_462Code.GDOpcionesObjects3.length ;i < len;++i) {
    gdjs._54_462Code.GDOpcionesObjects3[i].getBehavior("Tween").addObjectScaleTween("Thumb3", 1, 1, "linear", 1, false, true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Opciones"), gdjs._54_462Code.GDOpcionesObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._54_462Code.GDOpcionesObjects2.length;i<l;++i) {
    if ( gdjs._54_462Code.GDOpcionesObjects2[i].getAnimation() == 4 ) {
        isConditionTrue_0 = true;
        gdjs._54_462Code.GDOpcionesObjects2[k] = gdjs._54_462Code.GDOpcionesObjects2[i];
        ++k;
    }
}
gdjs._54_462Code.GDOpcionesObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(22479092);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs._54_462Code.GDOpcionesObjects2 */
{for(var i = 0, len = gdjs._54_462Code.GDOpcionesObjects2.length ;i < len;++i) {
    gdjs._54_462Code.GDOpcionesObjects2[i].setAnimationFrame(1);
}
}{for(var i = 0, len = gdjs._54_462Code.GDOpcionesObjects2.length ;i < len;++i) {
    gdjs._54_462Code.GDOpcionesObjects2[i].getBehavior("Tween").addObjectScaleTween("Thumb2", 1.1, 1.1, "linear", 100, false, true);
}
}{for(var i = 0, len = gdjs._54_462Code.GDOpcionesObjects2.length ;i < len;++i) {
    gdjs._54_462Code.GDOpcionesObjects2[i].activateBehavior("SineMovement", true);
}
}}

}


};gdjs._54_462Code.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Opciones"), gdjs._54_462Code.GDOpcionesObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._54_462Code.GDOpcionesObjects3.length;i<l;++i) {
    if ( !(gdjs._54_462Code.GDOpcionesObjects3[i].getAnimation() == 3) ) {
        isConditionTrue_0 = true;
        gdjs._54_462Code.GDOpcionesObjects3[k] = gdjs._54_462Code.GDOpcionesObjects3[i];
        ++k;
    }
}
gdjs._54_462Code.GDOpcionesObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(22481716);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs._54_462Code.GDOpcionesObjects3 */
{for(var i = 0, len = gdjs._54_462Code.GDOpcionesObjects3.length ;i < len;++i) {
    gdjs._54_462Code.GDOpcionesObjects3[i].setY(660);
}
}{for(var i = 0, len = gdjs._54_462Code.GDOpcionesObjects3.length ;i < len;++i) {
    gdjs._54_462Code.GDOpcionesObjects3[i].activateBehavior("SineMovement", false);
}
}{for(var i = 0, len = gdjs._54_462Code.GDOpcionesObjects3.length ;i < len;++i) {
    gdjs._54_462Code.GDOpcionesObjects3[i].setAnimationFrame(0);
}
}{for(var i = 0, len = gdjs._54_462Code.GDOpcionesObjects3.length ;i < len;++i) {
    gdjs._54_462Code.GDOpcionesObjects3[i].getBehavior("Tween").addObjectScaleTween("Thumb3", 1, 1, "linear", 1, false, true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Opciones"), gdjs._54_462Code.GDOpcionesObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._54_462Code.GDOpcionesObjects2.length;i<l;++i) {
    if ( gdjs._54_462Code.GDOpcionesObjects2[i].getAnimation() == 3 ) {
        isConditionTrue_0 = true;
        gdjs._54_462Code.GDOpcionesObjects2[k] = gdjs._54_462Code.GDOpcionesObjects2[i];
        ++k;
    }
}
gdjs._54_462Code.GDOpcionesObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(22482780);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs._54_462Code.GDOpcionesObjects2 */
{for(var i = 0, len = gdjs._54_462Code.GDOpcionesObjects2.length ;i < len;++i) {
    gdjs._54_462Code.GDOpcionesObjects2[i].setAnimationFrame(1);
}
}{for(var i = 0, len = gdjs._54_462Code.GDOpcionesObjects2.length ;i < len;++i) {
    gdjs._54_462Code.GDOpcionesObjects2[i].getBehavior("Tween").addObjectScaleTween("Thumb2", 1.1, 1.1, "linear", 100, false, true);
}
}{for(var i = 0, len = gdjs._54_462Code.GDOpcionesObjects2.length ;i < len;++i) {
    gdjs._54_462Code.GDOpcionesObjects2[i].activateBehavior("SineMovement", true);
}
}}

}


};gdjs._54_462Code.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Opciones"), gdjs._54_462Code.GDOpcionesObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._54_462Code.GDOpcionesObjects3.length;i<l;++i) {
    if ( !(gdjs._54_462Code.GDOpcionesObjects3[i].getAnimation() == 2) ) {
        isConditionTrue_0 = true;
        gdjs._54_462Code.GDOpcionesObjects3[k] = gdjs._54_462Code.GDOpcionesObjects3[i];
        ++k;
    }
}
gdjs._54_462Code.GDOpcionesObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(22485372);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs._54_462Code.GDOpcionesObjects3 */
{for(var i = 0, len = gdjs._54_462Code.GDOpcionesObjects3.length ;i < len;++i) {
    gdjs._54_462Code.GDOpcionesObjects3[i].setY(660);
}
}{for(var i = 0, len = gdjs._54_462Code.GDOpcionesObjects3.length ;i < len;++i) {
    gdjs._54_462Code.GDOpcionesObjects3[i].activateBehavior("SineMovement", false);
}
}{for(var i = 0, len = gdjs._54_462Code.GDOpcionesObjects3.length ;i < len;++i) {
    gdjs._54_462Code.GDOpcionesObjects3[i].setAnimationFrame(0);
}
}{for(var i = 0, len = gdjs._54_462Code.GDOpcionesObjects3.length ;i < len;++i) {
    gdjs._54_462Code.GDOpcionesObjects3[i].getBehavior("Tween").addObjectScaleTween("Thumb3", 1, 1, "linear", 1, false, true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Opciones"), gdjs._54_462Code.GDOpcionesObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._54_462Code.GDOpcionesObjects2.length;i<l;++i) {
    if ( gdjs._54_462Code.GDOpcionesObjects2[i].getAnimation() == 2 ) {
        isConditionTrue_0 = true;
        gdjs._54_462Code.GDOpcionesObjects2[k] = gdjs._54_462Code.GDOpcionesObjects2[i];
        ++k;
    }
}
gdjs._54_462Code.GDOpcionesObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(22487100);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs._54_462Code.GDOpcionesObjects2 */
{for(var i = 0, len = gdjs._54_462Code.GDOpcionesObjects2.length ;i < len;++i) {
    gdjs._54_462Code.GDOpcionesObjects2[i].setAnimationFrame(1);
}
}{for(var i = 0, len = gdjs._54_462Code.GDOpcionesObjects2.length ;i < len;++i) {
    gdjs._54_462Code.GDOpcionesObjects2[i].getBehavior("Tween").addObjectScaleTween("Thumb2", 1.1, 1.1, "linear", 100, false, true);
}
}{for(var i = 0, len = gdjs._54_462Code.GDOpcionesObjects2.length ;i < len;++i) {
    gdjs._54_462Code.GDOpcionesObjects2[i].activateBehavior("SineMovement", true);
}
}}

}


};gdjs._54_462Code.eventsList5 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Opciones"), gdjs._54_462Code.GDOpcionesObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._54_462Code.GDOpcionesObjects3.length;i<l;++i) {
    if ( !(gdjs._54_462Code.GDOpcionesObjects3[i].getAnimation() == 1) ) {
        isConditionTrue_0 = true;
        gdjs._54_462Code.GDOpcionesObjects3[k] = gdjs._54_462Code.GDOpcionesObjects3[i];
        ++k;
    }
}
gdjs._54_462Code.GDOpcionesObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(22489100);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs._54_462Code.GDOpcionesObjects3 */
{for(var i = 0, len = gdjs._54_462Code.GDOpcionesObjects3.length ;i < len;++i) {
    gdjs._54_462Code.GDOpcionesObjects3[i].setY(660);
}
}{for(var i = 0, len = gdjs._54_462Code.GDOpcionesObjects3.length ;i < len;++i) {
    gdjs._54_462Code.GDOpcionesObjects3[i].activateBehavior("SineMovement", false);
}
}{for(var i = 0, len = gdjs._54_462Code.GDOpcionesObjects3.length ;i < len;++i) {
    gdjs._54_462Code.GDOpcionesObjects3[i].setAnimationFrame(0);
}
}{for(var i = 0, len = gdjs._54_462Code.GDOpcionesObjects3.length ;i < len;++i) {
    gdjs._54_462Code.GDOpcionesObjects3[i].getBehavior("Tween").addObjectScaleTween("Thumb3", 1, 1, "linear", 1, false, true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Opciones"), gdjs._54_462Code.GDOpcionesObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._54_462Code.GDOpcionesObjects2.length;i<l;++i) {
    if ( gdjs._54_462Code.GDOpcionesObjects2[i].getAnimation() == 1 ) {
        isConditionTrue_0 = true;
        gdjs._54_462Code.GDOpcionesObjects2[k] = gdjs._54_462Code.GDOpcionesObjects2[i];
        ++k;
    }
}
gdjs._54_462Code.GDOpcionesObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(22490044);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs._54_462Code.GDOpcionesObjects2 */
{for(var i = 0, len = gdjs._54_462Code.GDOpcionesObjects2.length ;i < len;++i) {
    gdjs._54_462Code.GDOpcionesObjects2[i].setAnimationFrame(1);
}
}{for(var i = 0, len = gdjs._54_462Code.GDOpcionesObjects2.length ;i < len;++i) {
    gdjs._54_462Code.GDOpcionesObjects2[i].getBehavior("Tween").addObjectScaleTween("Thumb2", 1.1, 1.1, "linear", 100, false, true);
}
}{for(var i = 0, len = gdjs._54_462Code.GDOpcionesObjects2.length ;i < len;++i) {
    gdjs._54_462Code.GDOpcionesObjects2[i].activateBehavior("SineMovement", true);
}
}}

}


};gdjs._54_462Code.eventsList6 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Opciones"), gdjs._54_462Code.GDOpcionesObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._54_462Code.GDOpcionesObjects3.length;i<l;++i) {
    if ( !(gdjs._54_462Code.GDOpcionesObjects3[i].getAnimation() == 0) ) {
        isConditionTrue_0 = true;
        gdjs._54_462Code.GDOpcionesObjects3[k] = gdjs._54_462Code.GDOpcionesObjects3[i];
        ++k;
    }
}
gdjs._54_462Code.GDOpcionesObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(22492660);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs._54_462Code.GDOpcionesObjects3 */
{for(var i = 0, len = gdjs._54_462Code.GDOpcionesObjects3.length ;i < len;++i) {
    gdjs._54_462Code.GDOpcionesObjects3[i].setY(660);
}
}{for(var i = 0, len = gdjs._54_462Code.GDOpcionesObjects3.length ;i < len;++i) {
    gdjs._54_462Code.GDOpcionesObjects3[i].activateBehavior("SineMovement", false);
}
}{for(var i = 0, len = gdjs._54_462Code.GDOpcionesObjects3.length ;i < len;++i) {
    gdjs._54_462Code.GDOpcionesObjects3[i].setAnimationFrame(0);
}
}{for(var i = 0, len = gdjs._54_462Code.GDOpcionesObjects3.length ;i < len;++i) {
    gdjs._54_462Code.GDOpcionesObjects3[i].getBehavior("Tween").addObjectScaleTween("Thumb3", 1, 1, "linear", 1, false, true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Opciones"), gdjs._54_462Code.GDOpcionesObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._54_462Code.GDOpcionesObjects2.length;i<l;++i) {
    if ( gdjs._54_462Code.GDOpcionesObjects2[i].getAnimation() == 0 ) {
        isConditionTrue_0 = true;
        gdjs._54_462Code.GDOpcionesObjects2[k] = gdjs._54_462Code.GDOpcionesObjects2[i];
        ++k;
    }
}
gdjs._54_462Code.GDOpcionesObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(22493724);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs._54_462Code.GDOpcionesObjects2 */
{for(var i = 0, len = gdjs._54_462Code.GDOpcionesObjects2.length ;i < len;++i) {
    gdjs._54_462Code.GDOpcionesObjects2[i].setAnimationFrame(1);
}
}{for(var i = 0, len = gdjs._54_462Code.GDOpcionesObjects2.length ;i < len;++i) {
    gdjs._54_462Code.GDOpcionesObjects2[i].getBehavior("Tween").addObjectScaleTween("Thumb2", 1.1, 1.1, "linear", 100, false, true);
}
}{for(var i = 0, len = gdjs._54_462Code.GDOpcionesObjects2.length ;i < len;++i) {
    gdjs._54_462Code.GDOpcionesObjects2[i].activateBehavior("SineMovement", true);
}
}}

}


};gdjs._54_462Code.eventsList7 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Siguiente"), gdjs._54_462Code.GDSiguienteObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._54_462Code.GDSiguienteObjects2.length;i<l;++i) {
    if ( gdjs._54_462Code.GDSiguienteObjects2[i].getOpacity() == 150 ) {
        isConditionTrue_0 = true;
        gdjs._54_462Code.GDSiguienteObjects2[k] = gdjs._54_462Code.GDSiguienteObjects2[i];
        ++k;
    }
}
gdjs._54_462Code.GDSiguienteObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(22472316);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs._54_462Code.GDSiguienteObjects2 */
{for(var i = 0, len = gdjs._54_462Code.GDSiguienteObjects2.length ;i < len;++i) {
    gdjs._54_462Code.GDSiguienteObjects2[i].setOpacity(255);
}
}{for(var i = 0, len = gdjs._54_462Code.GDSiguienteObjects2.length ;i < len;++i) {
    gdjs._54_462Code.GDSiguienteObjects2[i].getBehavior("Tween").addObjectScaleTween("as", 0.8, 0.8, "bouncePast", 100, false, true);
}
}{for(var i = 0, len = gdjs._54_462Code.GDSiguienteObjects2.length ;i < len;++i) {
    gdjs._54_462Code.GDSiguienteObjects2[i].setAnimation(1);
}
}}

}


{

gdjs.copyArray(gdjs._54_462Code.GDSliderEdadObjects1, gdjs._54_462Code.GDSliderEdadObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs._54_462Code.GDSliderEdadObjects2.length === 0 ) ? 0 :gdjs._54_462Code.GDSliderEdadObjects2[0].getBehavior("DraggableSliderControl").Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) == 6);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("FrequencyNumber"), gdjs._54_462Code.GDFrequencyNumberObjects2);
{for(var i = 0, len = gdjs._54_462Code.GDFrequencyNumberObjects2.length ;i < len;++i) {
    gdjs._54_462Code.GDFrequencyNumberObjects2[i].setString("Nunca");
}
}
{ //Subevents
gdjs._54_462Code.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs._54_462Code.GDSliderEdadObjects1, gdjs._54_462Code.GDSliderEdadObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs._54_462Code.GDSliderEdadObjects2.length === 0 ) ? 0 :gdjs._54_462Code.GDSliderEdadObjects2[0].getBehavior("DraggableSliderControl").Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) == 5);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("FrequencyNumber"), gdjs._54_462Code.GDFrequencyNumberObjects2);
{for(var i = 0, len = gdjs._54_462Code.GDFrequencyNumberObjects2.length ;i < len;++i) {
    gdjs._54_462Code.GDFrequencyNumberObjects2[i].setString("De vez en cuando");
}
}
{ //Subevents
gdjs._54_462Code.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs._54_462Code.GDSliderEdadObjects1, gdjs._54_462Code.GDSliderEdadObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs._54_462Code.GDSliderEdadObjects2.length === 0 ) ? 0 :gdjs._54_462Code.GDSliderEdadObjects2[0].getBehavior("DraggableSliderControl").Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) == 4);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("FrequencyNumber"), gdjs._54_462Code.GDFrequencyNumberObjects2);
{for(var i = 0, len = gdjs._54_462Code.GDFrequencyNumberObjects2.length ;i < len;++i) {
    gdjs._54_462Code.GDFrequencyNumberObjects2[i].setString("Menos de la mitad del tiempo");
}
}
{ //Subevents
gdjs._54_462Code.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs._54_462Code.GDSliderEdadObjects1, gdjs._54_462Code.GDSliderEdadObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs._54_462Code.GDSliderEdadObjects2.length === 0 ) ? 0 :gdjs._54_462Code.GDSliderEdadObjects2[0].getBehavior("DraggableSliderControl").Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) == 3);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("FrequencyNumber"), gdjs._54_462Code.GDFrequencyNumberObjects2);
{for(var i = 0, len = gdjs._54_462Code.GDFrequencyNumberObjects2.length ;i < len;++i) {
    gdjs._54_462Code.GDFrequencyNumberObjects2[i].setString("Más de la mitad del tiempo");
}
}
{ //Subevents
gdjs._54_462Code.eventsList4(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs._54_462Code.GDSliderEdadObjects1, gdjs._54_462Code.GDSliderEdadObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs._54_462Code.GDSliderEdadObjects2.length === 0 ) ? 0 :gdjs._54_462Code.GDSliderEdadObjects2[0].getBehavior("DraggableSliderControl").Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) == 2);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("FrequencyNumber"), gdjs._54_462Code.GDFrequencyNumberObjects2);
{for(var i = 0, len = gdjs._54_462Code.GDFrequencyNumberObjects2.length ;i < len;++i) {
    gdjs._54_462Code.GDFrequencyNumberObjects2[i].setString("La mayor parte del tiempo");
}
}
{ //Subevents
gdjs._54_462Code.eventsList5(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs._54_462Code.GDSliderEdadObjects1, gdjs._54_462Code.GDSliderEdadObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs._54_462Code.GDSliderEdadObjects2.length === 0 ) ? 0 :gdjs._54_462Code.GDSliderEdadObjects2[0].getBehavior("DraggableSliderControl").Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) == 1);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("FrequencyNumber"), gdjs._54_462Code.GDFrequencyNumberObjects2);
{for(var i = 0, len = gdjs._54_462Code.GDFrequencyNumberObjects2.length ;i < len;++i) {
    gdjs._54_462Code.GDFrequencyNumberObjects2[i].setString("Todo el tiempo");
}
}
{ //Subevents
gdjs._54_462Code.eventsList6(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(22495492);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Thumb"), gdjs._54_462Code.GDThumbObjects1);
{for(var i = 0, len = gdjs._54_462Code.GDThumbObjects1.length ;i < len;++i) {
    gdjs._54_462Code.GDThumbObjects1[i].getBehavior("Tween").addObjectScaleTween("Thumb", 0.8, 0.8, "linear", 50, false, true);
}
}}

}


};gdjs._54_462Code.eventsList8 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Opciones"), gdjs._54_462Code.GDOpcionesObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._54_462Code.GDOpcionesObjects3.length;i<l;++i) {
    if ( !(gdjs._54_462Code.GDOpcionesObjects3[i].getAnimation() == 5) ) {
        isConditionTrue_0 = true;
        gdjs._54_462Code.GDOpcionesObjects3[k] = gdjs._54_462Code.GDOpcionesObjects3[i];
        ++k;
    }
}
gdjs._54_462Code.GDOpcionesObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(22498572);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs._54_462Code.GDOpcionesObjects3 */
{for(var i = 0, len = gdjs._54_462Code.GDOpcionesObjects3.length ;i < len;++i) {
    gdjs._54_462Code.GDOpcionesObjects3[i].setY(660);
}
}{for(var i = 0, len = gdjs._54_462Code.GDOpcionesObjects3.length ;i < len;++i) {
    gdjs._54_462Code.GDOpcionesObjects3[i].activateBehavior("SineMovement", false);
}
}{for(var i = 0, len = gdjs._54_462Code.GDOpcionesObjects3.length ;i < len;++i) {
    gdjs._54_462Code.GDOpcionesObjects3[i].setAnimationFrame(0);
}
}{for(var i = 0, len = gdjs._54_462Code.GDOpcionesObjects3.length ;i < len;++i) {
    gdjs._54_462Code.GDOpcionesObjects3[i].getBehavior("Tween").addObjectScaleTween("Thumb3", 1, 1, "linear", 1, false, true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Opciones"), gdjs._54_462Code.GDOpcionesObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._54_462Code.GDOpcionesObjects2.length;i<l;++i) {
    if ( gdjs._54_462Code.GDOpcionesObjects2[i].getAnimation() == 5 ) {
        isConditionTrue_0 = true;
        gdjs._54_462Code.GDOpcionesObjects2[k] = gdjs._54_462Code.GDOpcionesObjects2[i];
        ++k;
    }
}
gdjs._54_462Code.GDOpcionesObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(22499388);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs._54_462Code.GDOpcionesObjects2 */
{for(var i = 0, len = gdjs._54_462Code.GDOpcionesObjects2.length ;i < len;++i) {
    gdjs._54_462Code.GDOpcionesObjects2[i].setAnimationFrame(1);
}
}{for(var i = 0, len = gdjs._54_462Code.GDOpcionesObjects2.length ;i < len;++i) {
    gdjs._54_462Code.GDOpcionesObjects2[i].getBehavior("Tween").addObjectScaleTween("Thumb2", 1.1, 1.1, "linear", 100, false, true);
}
}{for(var i = 0, len = gdjs._54_462Code.GDOpcionesObjects2.length ;i < len;++i) {
    gdjs._54_462Code.GDOpcionesObjects2[i].activateBehavior("SineMovement", true);
}
}}

}


};gdjs._54_462Code.eventsList9 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Opciones"), gdjs._54_462Code.GDOpcionesObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._54_462Code.GDOpcionesObjects3.length;i<l;++i) {
    if ( !(gdjs._54_462Code.GDOpcionesObjects3[i].getAnimation() == 4) ) {
        isConditionTrue_0 = true;
        gdjs._54_462Code.GDOpcionesObjects3[k] = gdjs._54_462Code.GDOpcionesObjects3[i];
        ++k;
    }
}
gdjs._54_462Code.GDOpcionesObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(22502500);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs._54_462Code.GDOpcionesObjects3 */
{for(var i = 0, len = gdjs._54_462Code.GDOpcionesObjects3.length ;i < len;++i) {
    gdjs._54_462Code.GDOpcionesObjects3[i].setY(660);
}
}{for(var i = 0, len = gdjs._54_462Code.GDOpcionesObjects3.length ;i < len;++i) {
    gdjs._54_462Code.GDOpcionesObjects3[i].activateBehavior("SineMovement", false);
}
}{for(var i = 0, len = gdjs._54_462Code.GDOpcionesObjects3.length ;i < len;++i) {
    gdjs._54_462Code.GDOpcionesObjects3[i].setAnimationFrame(0);
}
}{for(var i = 0, len = gdjs._54_462Code.GDOpcionesObjects3.length ;i < len;++i) {
    gdjs._54_462Code.GDOpcionesObjects3[i].getBehavior("Tween").addObjectScaleTween("Thumb3", 1, 1, "linear", 1, false, true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Opciones"), gdjs._54_462Code.GDOpcionesObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._54_462Code.GDOpcionesObjects2.length;i<l;++i) {
    if ( gdjs._54_462Code.GDOpcionesObjects2[i].getAnimation() == 4 ) {
        isConditionTrue_0 = true;
        gdjs._54_462Code.GDOpcionesObjects2[k] = gdjs._54_462Code.GDOpcionesObjects2[i];
        ++k;
    }
}
gdjs._54_462Code.GDOpcionesObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(22502956);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs._54_462Code.GDOpcionesObjects2 */
{for(var i = 0, len = gdjs._54_462Code.GDOpcionesObjects2.length ;i < len;++i) {
    gdjs._54_462Code.GDOpcionesObjects2[i].setAnimationFrame(1);
}
}{for(var i = 0, len = gdjs._54_462Code.GDOpcionesObjects2.length ;i < len;++i) {
    gdjs._54_462Code.GDOpcionesObjects2[i].getBehavior("Tween").addObjectScaleTween("Thumb2", 1.1, 1.1, "linear", 100, false, true);
}
}{for(var i = 0, len = gdjs._54_462Code.GDOpcionesObjects2.length ;i < len;++i) {
    gdjs._54_462Code.GDOpcionesObjects2[i].activateBehavior("SineMovement", true);
}
}}

}


};gdjs._54_462Code.eventsList10 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Opciones"), gdjs._54_462Code.GDOpcionesObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._54_462Code.GDOpcionesObjects3.length;i<l;++i) {
    if ( !(gdjs._54_462Code.GDOpcionesObjects3[i].getAnimation() == 3) ) {
        isConditionTrue_0 = true;
        gdjs._54_462Code.GDOpcionesObjects3[k] = gdjs._54_462Code.GDOpcionesObjects3[i];
        ++k;
    }
}
gdjs._54_462Code.GDOpcionesObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(22505836);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs._54_462Code.GDOpcionesObjects3 */
{for(var i = 0, len = gdjs._54_462Code.GDOpcionesObjects3.length ;i < len;++i) {
    gdjs._54_462Code.GDOpcionesObjects3[i].setY(660);
}
}{for(var i = 0, len = gdjs._54_462Code.GDOpcionesObjects3.length ;i < len;++i) {
    gdjs._54_462Code.GDOpcionesObjects3[i].activateBehavior("SineMovement", false);
}
}{for(var i = 0, len = gdjs._54_462Code.GDOpcionesObjects3.length ;i < len;++i) {
    gdjs._54_462Code.GDOpcionesObjects3[i].setAnimationFrame(0);
}
}{for(var i = 0, len = gdjs._54_462Code.GDOpcionesObjects3.length ;i < len;++i) {
    gdjs._54_462Code.GDOpcionesObjects3[i].getBehavior("Tween").addObjectScaleTween("Thumb3", 1, 1, "linear", 1, false, true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Opciones"), gdjs._54_462Code.GDOpcionesObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._54_462Code.GDOpcionesObjects2.length;i<l;++i) {
    if ( gdjs._54_462Code.GDOpcionesObjects2[i].getAnimation() == 3 ) {
        isConditionTrue_0 = true;
        gdjs._54_462Code.GDOpcionesObjects2[k] = gdjs._54_462Code.GDOpcionesObjects2[i];
        ++k;
    }
}
gdjs._54_462Code.GDOpcionesObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(22506900);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs._54_462Code.GDOpcionesObjects2 */
{for(var i = 0, len = gdjs._54_462Code.GDOpcionesObjects2.length ;i < len;++i) {
    gdjs._54_462Code.GDOpcionesObjects2[i].setAnimationFrame(1);
}
}{for(var i = 0, len = gdjs._54_462Code.GDOpcionesObjects2.length ;i < len;++i) {
    gdjs._54_462Code.GDOpcionesObjects2[i].getBehavior("Tween").addObjectScaleTween("Thumb2", 1.1, 1.1, "linear", 100, false, true);
}
}{for(var i = 0, len = gdjs._54_462Code.GDOpcionesObjects2.length ;i < len;++i) {
    gdjs._54_462Code.GDOpcionesObjects2[i].activateBehavior("SineMovement", true);
}
}}

}


};gdjs._54_462Code.eventsList11 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Opciones"), gdjs._54_462Code.GDOpcionesObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._54_462Code.GDOpcionesObjects3.length;i<l;++i) {
    if ( !(gdjs._54_462Code.GDOpcionesObjects3[i].getAnimation() == 2) ) {
        isConditionTrue_0 = true;
        gdjs._54_462Code.GDOpcionesObjects3[k] = gdjs._54_462Code.GDOpcionesObjects3[i];
        ++k;
    }
}
gdjs._54_462Code.GDOpcionesObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(22509476);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs._54_462Code.GDOpcionesObjects3 */
{for(var i = 0, len = gdjs._54_462Code.GDOpcionesObjects3.length ;i < len;++i) {
    gdjs._54_462Code.GDOpcionesObjects3[i].setY(660);
}
}{for(var i = 0, len = gdjs._54_462Code.GDOpcionesObjects3.length ;i < len;++i) {
    gdjs._54_462Code.GDOpcionesObjects3[i].activateBehavior("SineMovement", false);
}
}{for(var i = 0, len = gdjs._54_462Code.GDOpcionesObjects3.length ;i < len;++i) {
    gdjs._54_462Code.GDOpcionesObjects3[i].setAnimationFrame(0);
}
}{for(var i = 0, len = gdjs._54_462Code.GDOpcionesObjects3.length ;i < len;++i) {
    gdjs._54_462Code.GDOpcionesObjects3[i].getBehavior("Tween").addObjectScaleTween("Thumb3", 1, 1, "linear", 1, false, true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Opciones"), gdjs._54_462Code.GDOpcionesObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._54_462Code.GDOpcionesObjects2.length;i<l;++i) {
    if ( gdjs._54_462Code.GDOpcionesObjects2[i].getAnimation() == 2 ) {
        isConditionTrue_0 = true;
        gdjs._54_462Code.GDOpcionesObjects2[k] = gdjs._54_462Code.GDOpcionesObjects2[i];
        ++k;
    }
}
gdjs._54_462Code.GDOpcionesObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(22510540);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs._54_462Code.GDOpcionesObjects2 */
{for(var i = 0, len = gdjs._54_462Code.GDOpcionesObjects2.length ;i < len;++i) {
    gdjs._54_462Code.GDOpcionesObjects2[i].setAnimationFrame(1);
}
}{for(var i = 0, len = gdjs._54_462Code.GDOpcionesObjects2.length ;i < len;++i) {
    gdjs._54_462Code.GDOpcionesObjects2[i].getBehavior("Tween").addObjectScaleTween("Thumb2", 1.1, 1.1, "linear", 100, false, true);
}
}{for(var i = 0, len = gdjs._54_462Code.GDOpcionesObjects2.length ;i < len;++i) {
    gdjs._54_462Code.GDOpcionesObjects2[i].activateBehavior("SineMovement", true);
}
}}

}


};gdjs._54_462Code.eventsList12 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Opciones"), gdjs._54_462Code.GDOpcionesObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._54_462Code.GDOpcionesObjects3.length;i<l;++i) {
    if ( !(gdjs._54_462Code.GDOpcionesObjects3[i].getAnimation() == 1) ) {
        isConditionTrue_0 = true;
        gdjs._54_462Code.GDOpcionesObjects3[k] = gdjs._54_462Code.GDOpcionesObjects3[i];
        ++k;
    }
}
gdjs._54_462Code.GDOpcionesObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(22513388);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs._54_462Code.GDOpcionesObjects3 */
{for(var i = 0, len = gdjs._54_462Code.GDOpcionesObjects3.length ;i < len;++i) {
    gdjs._54_462Code.GDOpcionesObjects3[i].setY(660);
}
}{for(var i = 0, len = gdjs._54_462Code.GDOpcionesObjects3.length ;i < len;++i) {
    gdjs._54_462Code.GDOpcionesObjects3[i].activateBehavior("SineMovement", false);
}
}{for(var i = 0, len = gdjs._54_462Code.GDOpcionesObjects3.length ;i < len;++i) {
    gdjs._54_462Code.GDOpcionesObjects3[i].setAnimationFrame(0);
}
}{for(var i = 0, len = gdjs._54_462Code.GDOpcionesObjects3.length ;i < len;++i) {
    gdjs._54_462Code.GDOpcionesObjects3[i].getBehavior("Tween").addObjectScaleTween("Thumb3", 1, 1, "linear", 1, false, true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Opciones"), gdjs._54_462Code.GDOpcionesObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._54_462Code.GDOpcionesObjects2.length;i<l;++i) {
    if ( gdjs._54_462Code.GDOpcionesObjects2[i].getAnimation() == 1 ) {
        isConditionTrue_0 = true;
        gdjs._54_462Code.GDOpcionesObjects2[k] = gdjs._54_462Code.GDOpcionesObjects2[i];
        ++k;
    }
}
gdjs._54_462Code.GDOpcionesObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(22513932);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs._54_462Code.GDOpcionesObjects2 */
{for(var i = 0, len = gdjs._54_462Code.GDOpcionesObjects2.length ;i < len;++i) {
    gdjs._54_462Code.GDOpcionesObjects2[i].setAnimationFrame(1);
}
}{for(var i = 0, len = gdjs._54_462Code.GDOpcionesObjects2.length ;i < len;++i) {
    gdjs._54_462Code.GDOpcionesObjects2[i].getBehavior("Tween").addObjectScaleTween("Thumb2", 1.1, 1.1, "linear", 100, false, true);
}
}{for(var i = 0, len = gdjs._54_462Code.GDOpcionesObjects2.length ;i < len;++i) {
    gdjs._54_462Code.GDOpcionesObjects2[i].activateBehavior("SineMovement", true);
}
}}

}


};gdjs._54_462Code.eventsList13 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Opciones"), gdjs._54_462Code.GDOpcionesObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._54_462Code.GDOpcionesObjects2.length;i<l;++i) {
    if ( !(gdjs._54_462Code.GDOpcionesObjects2[i].getAnimation() == 0) ) {
        isConditionTrue_0 = true;
        gdjs._54_462Code.GDOpcionesObjects2[k] = gdjs._54_462Code.GDOpcionesObjects2[i];
        ++k;
    }
}
gdjs._54_462Code.GDOpcionesObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(22516788);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs._54_462Code.GDOpcionesObjects2 */
{for(var i = 0, len = gdjs._54_462Code.GDOpcionesObjects2.length ;i < len;++i) {
    gdjs._54_462Code.GDOpcionesObjects2[i].setY(660);
}
}{for(var i = 0, len = gdjs._54_462Code.GDOpcionesObjects2.length ;i < len;++i) {
    gdjs._54_462Code.GDOpcionesObjects2[i].activateBehavior("SineMovement", false);
}
}{for(var i = 0, len = gdjs._54_462Code.GDOpcionesObjects2.length ;i < len;++i) {
    gdjs._54_462Code.GDOpcionesObjects2[i].setAnimationFrame(0);
}
}{for(var i = 0, len = gdjs._54_462Code.GDOpcionesObjects2.length ;i < len;++i) {
    gdjs._54_462Code.GDOpcionesObjects2[i].getBehavior("Tween").addObjectScaleTween("Thumb3", 1, 1, "linear", 1, false, true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Opciones"), gdjs._54_462Code.GDOpcionesObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._54_462Code.GDOpcionesObjects1.length;i<l;++i) {
    if ( gdjs._54_462Code.GDOpcionesObjects1[i].getAnimation() == 0 ) {
        isConditionTrue_0 = true;
        gdjs._54_462Code.GDOpcionesObjects1[k] = gdjs._54_462Code.GDOpcionesObjects1[i];
        ++k;
    }
}
gdjs._54_462Code.GDOpcionesObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(22518516);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs._54_462Code.GDOpcionesObjects1 */
{for(var i = 0, len = gdjs._54_462Code.GDOpcionesObjects1.length ;i < len;++i) {
    gdjs._54_462Code.GDOpcionesObjects1[i].setAnimationFrame(1);
}
}{for(var i = 0, len = gdjs._54_462Code.GDOpcionesObjects1.length ;i < len;++i) {
    gdjs._54_462Code.GDOpcionesObjects1[i].getBehavior("Tween").addObjectScaleTween("Thumb2", 1.1, 1.1, "linear", 100, false, true);
}
}{for(var i = 0, len = gdjs._54_462Code.GDOpcionesObjects1.length ;i < len;++i) {
    gdjs._54_462Code.GDOpcionesObjects1[i].activateBehavior("SineMovement", true);
}
}}

}


};gdjs._54_462Code.eventsList14 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Siguiente"), gdjs._54_462Code.GDSiguienteObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._54_462Code.GDSiguienteObjects2.length;i<l;++i) {
    if ( gdjs._54_462Code.GDSiguienteObjects2[i].getOpacity() == 150 ) {
        isConditionTrue_0 = true;
        gdjs._54_462Code.GDSiguienteObjects2[k] = gdjs._54_462Code.GDSiguienteObjects2[i];
        ++k;
    }
}
gdjs._54_462Code.GDSiguienteObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(22497068);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs._54_462Code.GDSiguienteObjects2 */
{for(var i = 0, len = gdjs._54_462Code.GDSiguienteObjects2.length ;i < len;++i) {
    gdjs._54_462Code.GDSiguienteObjects2[i].setOpacity(255);
}
}{for(var i = 0, len = gdjs._54_462Code.GDSiguienteObjects2.length ;i < len;++i) {
    gdjs._54_462Code.GDSiguienteObjects2[i].setAnimation(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("SliderEdad"), gdjs._54_462Code.GDSliderEdadObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs._54_462Code.GDSliderEdadObjects2.length === 0 ) ? 0 :gdjs._54_462Code.GDSliderEdadObjects2[0].getBehavior("DraggableSliderControl").Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) == 6);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("FrequencyNumber"), gdjs._54_462Code.GDFrequencyNumberObjects2);
{for(var i = 0, len = gdjs._54_462Code.GDFrequencyNumberObjects2.length ;i < len;++i) {
    gdjs._54_462Code.GDFrequencyNumberObjects2[i].setString("Nunca");
}
}
{ //Subevents
gdjs._54_462Code.eventsList8(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("SliderEdad"), gdjs._54_462Code.GDSliderEdadObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs._54_462Code.GDSliderEdadObjects2.length === 0 ) ? 0 :gdjs._54_462Code.GDSliderEdadObjects2[0].getBehavior("DraggableSliderControl").Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) == 5);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("FrequencyNumber"), gdjs._54_462Code.GDFrequencyNumberObjects2);
{for(var i = 0, len = gdjs._54_462Code.GDFrequencyNumberObjects2.length ;i < len;++i) {
    gdjs._54_462Code.GDFrequencyNumberObjects2[i].setString("De vez en cuando");
}
}
{ //Subevents
gdjs._54_462Code.eventsList9(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("SliderEdad"), gdjs._54_462Code.GDSliderEdadObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs._54_462Code.GDSliderEdadObjects2.length === 0 ) ? 0 :gdjs._54_462Code.GDSliderEdadObjects2[0].getBehavior("DraggableSliderControl").Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) == 4);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("FrequencyNumber"), gdjs._54_462Code.GDFrequencyNumberObjects2);
{for(var i = 0, len = gdjs._54_462Code.GDFrequencyNumberObjects2.length ;i < len;++i) {
    gdjs._54_462Code.GDFrequencyNumberObjects2[i].setString("Menos de la mitad del tiempo");
}
}
{ //Subevents
gdjs._54_462Code.eventsList10(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("SliderEdad"), gdjs._54_462Code.GDSliderEdadObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs._54_462Code.GDSliderEdadObjects2.length === 0 ) ? 0 :gdjs._54_462Code.GDSliderEdadObjects2[0].getBehavior("DraggableSliderControl").Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) == 3);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("FrequencyNumber"), gdjs._54_462Code.GDFrequencyNumberObjects2);
{for(var i = 0, len = gdjs._54_462Code.GDFrequencyNumberObjects2.length ;i < len;++i) {
    gdjs._54_462Code.GDFrequencyNumberObjects2[i].setString("Más de la mitad del tiempo");
}
}
{ //Subevents
gdjs._54_462Code.eventsList11(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("SliderEdad"), gdjs._54_462Code.GDSliderEdadObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs._54_462Code.GDSliderEdadObjects2.length === 0 ) ? 0 :gdjs._54_462Code.GDSliderEdadObjects2[0].getBehavior("DraggableSliderControl").Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) == 2);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("FrequencyNumber"), gdjs._54_462Code.GDFrequencyNumberObjects2);
{for(var i = 0, len = gdjs._54_462Code.GDFrequencyNumberObjects2.length ;i < len;++i) {
    gdjs._54_462Code.GDFrequencyNumberObjects2[i].setString("La mayor parte del tiempo");
}
}
{ //Subevents
gdjs._54_462Code.eventsList12(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("SliderEdad"), gdjs._54_462Code.GDSliderEdadObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs._54_462Code.GDSliderEdadObjects1.length === 0 ) ? 0 :gdjs._54_462Code.GDSliderEdadObjects1[0].getBehavior("DraggableSliderControl").Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) == 1);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("FrequencyNumber"), gdjs._54_462Code.GDFrequencyNumberObjects1);
{for(var i = 0, len = gdjs._54_462Code.GDFrequencyNumberObjects1.length ;i < len;++i) {
    gdjs._54_462Code.GDFrequencyNumberObjects1[i].setString("Todo el tiempo");
}
}
{ //Subevents
gdjs._54_462Code.eventsList13(runtimeScene);} //End of subevents
}

}


};gdjs._54_462Code.eventsList15 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Opciones"), gdjs._54_462Code.GDOpcionesObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._54_462Code.GDOpcionesObjects1.length;i<l;++i) {
    if ( !(gdjs._54_462Code.GDOpcionesObjects1[i].behaviorActivated("SineMovement")) ) {
        isConditionTrue_0 = true;
        gdjs._54_462Code.GDOpcionesObjects1[k] = gdjs._54_462Code.GDOpcionesObjects1[i];
        ++k;
    }
}
gdjs._54_462Code.GDOpcionesObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs._54_462Code.GDOpcionesObjects1 */
{for(var i = 0, len = gdjs._54_462Code.GDOpcionesObjects1.length ;i < len;++i) {
    gdjs._54_462Code.GDOpcionesObjects1[i].getBehavior("Tween").addObjectScaleTween("Thumb4", 1, 1, "linear", 1, false, true);
}
}{for(var i = 0, len = gdjs._54_462Code.GDOpcionesObjects1.length ;i < len;++i) {
    gdjs._54_462Code.GDOpcionesObjects1[i].setY(660);
}
}}

}


};gdjs._54_462Code.mapOfGDgdjs_9546_959554_9595462Code_9546GDOpcionesObjects1Objects = Hashtable.newFrom({"Opciones": gdjs._54_462Code.GDOpcionesObjects1});
gdjs._54_462Code.eventsList16 = function(runtimeScene) {

{

gdjs.copyArray(gdjs._54_462Code.GDOpcionesObjects1, gdjs._54_462Code.GDOpcionesObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._54_462Code.GDOpcionesObjects2.length;i<l;++i) {
    if ( gdjs._54_462Code.GDOpcionesObjects2[i].getAnimation() == 0 ) {
        isConditionTrue_0 = true;
        gdjs._54_462Code.GDOpcionesObjects2[k] = gdjs._54_462Code.GDOpcionesObjects2[i];
        ++k;
    }
}
gdjs._54_462Code.GDOpcionesObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("SliderEdad"), gdjs._54_462Code.GDSliderEdadObjects2);
{for(var i = 0, len = gdjs._54_462Code.GDSliderEdadObjects2.length ;i < len;++i) {
    gdjs._54_462Code.GDSliderEdadObjects2[i].getBehavior("DraggableSliderControl").SetValue(1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(gdjs._54_462Code.GDOpcionesObjects1, gdjs._54_462Code.GDOpcionesObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._54_462Code.GDOpcionesObjects2.length;i<l;++i) {
    if ( gdjs._54_462Code.GDOpcionesObjects2[i].getAnimation() == 1 ) {
        isConditionTrue_0 = true;
        gdjs._54_462Code.GDOpcionesObjects2[k] = gdjs._54_462Code.GDOpcionesObjects2[i];
        ++k;
    }
}
gdjs._54_462Code.GDOpcionesObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("SliderEdad"), gdjs._54_462Code.GDSliderEdadObjects2);
{for(var i = 0, len = gdjs._54_462Code.GDSliderEdadObjects2.length ;i < len;++i) {
    gdjs._54_462Code.GDSliderEdadObjects2[i].getBehavior("DraggableSliderControl").SetValue(2, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(gdjs._54_462Code.GDOpcionesObjects1, gdjs._54_462Code.GDOpcionesObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._54_462Code.GDOpcionesObjects2.length;i<l;++i) {
    if ( gdjs._54_462Code.GDOpcionesObjects2[i].getAnimation() == 2 ) {
        isConditionTrue_0 = true;
        gdjs._54_462Code.GDOpcionesObjects2[k] = gdjs._54_462Code.GDOpcionesObjects2[i];
        ++k;
    }
}
gdjs._54_462Code.GDOpcionesObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("SliderEdad"), gdjs._54_462Code.GDSliderEdadObjects2);
{for(var i = 0, len = gdjs._54_462Code.GDSliderEdadObjects2.length ;i < len;++i) {
    gdjs._54_462Code.GDSliderEdadObjects2[i].getBehavior("DraggableSliderControl").SetValue(3, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(gdjs._54_462Code.GDOpcionesObjects1, gdjs._54_462Code.GDOpcionesObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._54_462Code.GDOpcionesObjects2.length;i<l;++i) {
    if ( gdjs._54_462Code.GDOpcionesObjects2[i].getAnimation() == 3 ) {
        isConditionTrue_0 = true;
        gdjs._54_462Code.GDOpcionesObjects2[k] = gdjs._54_462Code.GDOpcionesObjects2[i];
        ++k;
    }
}
gdjs._54_462Code.GDOpcionesObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("SliderEdad"), gdjs._54_462Code.GDSliderEdadObjects2);
{for(var i = 0, len = gdjs._54_462Code.GDSliderEdadObjects2.length ;i < len;++i) {
    gdjs._54_462Code.GDSliderEdadObjects2[i].getBehavior("DraggableSliderControl").SetValue(4, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(gdjs._54_462Code.GDOpcionesObjects1, gdjs._54_462Code.GDOpcionesObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._54_462Code.GDOpcionesObjects2.length;i<l;++i) {
    if ( gdjs._54_462Code.GDOpcionesObjects2[i].getAnimation() == 4 ) {
        isConditionTrue_0 = true;
        gdjs._54_462Code.GDOpcionesObjects2[k] = gdjs._54_462Code.GDOpcionesObjects2[i];
        ++k;
    }
}
gdjs._54_462Code.GDOpcionesObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("SliderEdad"), gdjs._54_462Code.GDSliderEdadObjects2);
{for(var i = 0, len = gdjs._54_462Code.GDSliderEdadObjects2.length ;i < len;++i) {
    gdjs._54_462Code.GDSliderEdadObjects2[i].getBehavior("DraggableSliderControl").SetValue(5, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

/* Reuse gdjs._54_462Code.GDOpcionesObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._54_462Code.GDOpcionesObjects1.length;i<l;++i) {
    if ( gdjs._54_462Code.GDOpcionesObjects1[i].getAnimation() == 5 ) {
        isConditionTrue_0 = true;
        gdjs._54_462Code.GDOpcionesObjects1[k] = gdjs._54_462Code.GDOpcionesObjects1[i];
        ++k;
    }
}
gdjs._54_462Code.GDOpcionesObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("SliderEdad"), gdjs._54_462Code.GDSliderEdadObjects1);
{for(var i = 0, len = gdjs._54_462Code.GDSliderEdadObjects1.length ;i < len;++i) {
    gdjs._54_462Code.GDSliderEdadObjects1[i].getBehavior("DraggableSliderControl").SetValue(6, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};gdjs._54_462Code.mapOfGDgdjs_9546_959554_9595462Code_9546GDSiguienteObjects1Objects = Hashtable.newFrom({"Siguiente": gdjs._54_462Code.GDSiguienteObjects1});
gdjs._54_462Code.eventsList17 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BarraRojoBlanco"), gdjs._54_462Code.GDBarraRojoBlancoObjects1);
gdjs.copyArray(runtimeScene.getObjects("IMG_Pregunta"), gdjs._54_462Code.GDIMG_9595PreguntaObjects1);
gdjs.copyArray(runtimeScene.getObjects("Opciones"), gdjs._54_462Code.GDOpcionesObjects1);
gdjs.copyArray(runtimeScene.getObjects("Siguiente"), gdjs._54_462Code.GDSiguienteObjects1);
gdjs.copyArray(runtimeScene.getObjects("SliderEdad"), gdjs._54_462Code.GDSliderEdadObjects1);
gdjs.copyArray(runtimeScene.getObjects("Thumb"), gdjs._54_462Code.GDThumbObjects1);
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("Enabled"), false);
}{for(var i = 0, len = gdjs._54_462Code.GDSiguienteObjects1.length ;i < len;++i) {
    gdjs._54_462Code.GDSiguienteObjects1[i].getBehavior("Tween").addObjectScaleTween("as", 0.75, 0.75, "linear", 1, false, true);
}
}{for(var i = 0, len = gdjs._54_462Code.GDSiguienteObjects1.length ;i < len;++i) {
    gdjs._54_462Code.GDSiguienteObjects1[i].setAnimation(0);
}
}{for(var i = 0, len = gdjs._54_462Code.GDSiguienteObjects1.length ;i < len;++i) {
    gdjs._54_462Code.GDSiguienteObjects1[i].setOpacity(150);
}
}{for(var i = 0, len = gdjs._54_462Code.GDBarraRojoBlancoObjects1.length ;i < len;++i) {
    gdjs._54_462Code.GDBarraRojoBlancoObjects1[i].getBehavior("DraggableSliderControl").SetValue(8, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs._54_462Code.GDSliderEdadObjects1.length ;i < len;++i) {
    gdjs._54_462Code.GDSliderEdadObjects1[i].getBehavior("DraggableSliderControl").SetValue(3, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs._54_462Code.GDThumbObjects1.length ;i < len;++i) {
    gdjs._54_462Code.GDThumbObjects1[i].getBehavior("Tween").addObjectScaleTween("Thumb", 0.6, 0.6, "linear", 1, false, true);
}
}{for(var i = 0, len = gdjs._54_462Code.GDIMG_9595PreguntaObjects1.length ;i < len;++i) {
    gdjs._54_462Code.GDIMG_9595PreguntaObjects1[i].getBehavior("Tween").addObjectScaleTween("Thumb", 0.5, 0.5, "linear", 1, false, true);
}
}{for(var i = 0, len = gdjs._54_462Code.GDOpcionesObjects1.length ;i < len;++i) {
    gdjs._54_462Code.GDOpcionesObjects1[i].pauseAnimation();
}
}{for(var i = 0, len = gdjs._54_462Code.GDThumbObjects1.length ;i < len;++i) {
    gdjs._54_462Code.GDThumbObjects1[i].setAnimationFrame(0);
}
}{for(var i = 0, len = gdjs._54_462Code.GDOpcionesObjects1.length ;i < len;++i) {
    gdjs._54_462Code.GDOpcionesObjects1[i].activateBehavior("SineMovement", false);
}
}
{ //Subevents
gdjs._54_462Code.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Opciones"), gdjs._54_462Code.GDOpcionesObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().get("Enabled"), false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._54_462Code.mapOfGDgdjs_9546_959554_9595462Code_9546GDOpcionesObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(22471108);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("Enabled"), true);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("SliderEdad"), gdjs._54_462Code.GDSliderEdadObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._54_462Code.GDSliderEdadObjects1.length;i<l;++i) {
    if ( gdjs._54_462Code.GDSliderEdadObjects1[i].getBehavior("DraggableSliderControl").IsBeingDragged((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs._54_462Code.GDSliderEdadObjects1[k] = gdjs._54_462Code.GDSliderEdadObjects1[i];
        ++k;
    }
}
gdjs._54_462Code.GDSliderEdadObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs._54_462Code.eventsList7(runtimeScene);} //End of subevents
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
gdjs._54_462Code.eventsList14(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs._54_462Code.GDNewTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("SliderEdad"), gdjs._54_462Code.GDSliderEdadObjects1);
gdjs.copyArray(runtimeScene.getObjects("Thumb"), gdjs._54_462Code.GDThumbObjects1);
{for(var i = 0, len = gdjs._54_462Code.GDNewTextObjects1.length ;i < len;++i) {
    gdjs._54_462Code.GDNewTextObjects1[i].setString(gdjs.evtTools.common.toString((( gdjs._54_462Code.GDSliderEdadObjects1.length === 0 ) ? 0 :gdjs._54_462Code.GDSliderEdadObjects1[0].getBehavior("DraggableSliderControl").Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)))));
}
}{for(var i = 0, len = gdjs._54_462Code.GDThumbObjects1.length ;i < len;++i) {
    gdjs._54_462Code.GDThumbObjects1[i].setX(100 + (( gdjs._54_462Code.GDSliderEdadObjects1.length === 0 ) ? 0 :gdjs._54_462Code.GDSliderEdadObjects1[0].getBehavior("DraggableSliderControl")._getThumbOffset()));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("SliderEdad"), gdjs._54_462Code.GDSliderEdadObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._54_462Code.GDSliderEdadObjects1.length;i<l;++i) {
    if ( !(gdjs._54_462Code.GDSliderEdadObjects1[i].getBehavior("DraggableSliderControl").IsBeingDragged((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        isConditionTrue_0 = true;
        gdjs._54_462Code.GDSliderEdadObjects1[k] = gdjs._54_462Code.GDSliderEdadObjects1[i];
        ++k;
    }
}
gdjs._54_462Code.GDSliderEdadObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(22519804);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Thumb"), gdjs._54_462Code.GDThumbObjects1);
{for(var i = 0, len = gdjs._54_462Code.GDThumbObjects1.length ;i < len;++i) {
    gdjs._54_462Code.GDThumbObjects1[i].getBehavior("Tween").addObjectScaleTween("Thumb2", 0.6, 0.6, "linear", 50, false, true);
}
}
{ //Subevents
gdjs._54_462Code.eventsList15(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Opciones"), gdjs._54_462Code.GDOpcionesObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._54_462Code.mapOfGDgdjs_9546_959554_9595462Code_9546GDOpcionesObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(22522692);
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs._54_462Code.eventsList16(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Siguiente"), gdjs._54_462Code.GDSiguienteObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._54_462Code.mapOfGDgdjs_9546_959554_9595462Code_9546GDSiguienteObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._54_462Code.GDSiguienteObjects1.length;i<l;++i) {
    if ( gdjs._54_462Code.GDSiguienteObjects1[i].getOpacity() == 255 ) {
        isConditionTrue_0 = true;
        gdjs._54_462Code.GDSiguienteObjects1[k] = gdjs._54_462Code.GDSiguienteObjects1[i];
        ++k;
    }
}
gdjs._54_462Code.GDSiguienteObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(22526924);
}
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("FrequencyNumber"), gdjs._54_462Code.GDFrequencyNumberObjects1);
{runtimeScene.getGame().getVariables().get("User").getChild("TeHazSentidoTranquilxYRelajadx").setString((( gdjs._54_462Code.GDFrequencyNumberObjects1.length === 0 ) ? "" :gdjs._54_462Code.GDFrequencyNumberObjects1[0].getString()));
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "6.3", false);
}}

}


};

gdjs._54_462Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._54_462Code.GDFrequencyNumberObjects1.length = 0;
gdjs._54_462Code.GDFrequencyNumberObjects2.length = 0;
gdjs._54_462Code.GDFrequencyNumberObjects3.length = 0;
gdjs._54_462Code.GDFrequencyNumberObjects4.length = 0;
gdjs._54_462Code.GDBarraRojoBlancoObjects1.length = 0;
gdjs._54_462Code.GDBarraRojoBlancoObjects2.length = 0;
gdjs._54_462Code.GDBarraRojoBlancoObjects3.length = 0;
gdjs._54_462Code.GDBarraRojoBlancoObjects4.length = 0;
gdjs._54_462Code.GDSliderEdadObjects1.length = 0;
gdjs._54_462Code.GDSliderEdadObjects2.length = 0;
gdjs._54_462Code.GDSliderEdadObjects3.length = 0;
gdjs._54_462Code.GDSliderEdadObjects4.length = 0;
gdjs._54_462Code.GDSiguienteObjects1.length = 0;
gdjs._54_462Code.GDSiguienteObjects2.length = 0;
gdjs._54_462Code.GDSiguienteObjects3.length = 0;
gdjs._54_462Code.GDSiguienteObjects4.length = 0;
gdjs._54_462Code.GDIMG_9595PreguntaObjects1.length = 0;
gdjs._54_462Code.GDIMG_9595PreguntaObjects2.length = 0;
gdjs._54_462Code.GDIMG_9595PreguntaObjects3.length = 0;
gdjs._54_462Code.GDIMG_9595PreguntaObjects4.length = 0;
gdjs._54_462Code.GDOpcionesObjects1.length = 0;
gdjs._54_462Code.GDOpcionesObjects2.length = 0;
gdjs._54_462Code.GDOpcionesObjects3.length = 0;
gdjs._54_462Code.GDOpcionesObjects4.length = 0;
gdjs._54_462Code.GDNewTextObjects1.length = 0;
gdjs._54_462Code.GDNewTextObjects2.length = 0;
gdjs._54_462Code.GDNewTextObjects3.length = 0;
gdjs._54_462Code.GDNewTextObjects4.length = 0;
gdjs._54_462Code.GDThumbObjects1.length = 0;
gdjs._54_462Code.GDThumbObjects2.length = 0;
gdjs._54_462Code.GDThumbObjects3.length = 0;
gdjs._54_462Code.GDThumbObjects4.length = 0;
gdjs._54_462Code.GDFondoObjects1.length = 0;
gdjs._54_462Code.GDFondoObjects2.length = 0;
gdjs._54_462Code.GDFondoObjects3.length = 0;
gdjs._54_462Code.GDFondoObjects4.length = 0;

gdjs._54_462Code.eventsList17(runtimeScene);
gdjs._54_462Code.GDFrequencyNumberObjects1.length = 0;
gdjs._54_462Code.GDFrequencyNumberObjects2.length = 0;
gdjs._54_462Code.GDFrequencyNumberObjects3.length = 0;
gdjs._54_462Code.GDFrequencyNumberObjects4.length = 0;
gdjs._54_462Code.GDBarraRojoBlancoObjects1.length = 0;
gdjs._54_462Code.GDBarraRojoBlancoObjects2.length = 0;
gdjs._54_462Code.GDBarraRojoBlancoObjects3.length = 0;
gdjs._54_462Code.GDBarraRojoBlancoObjects4.length = 0;
gdjs._54_462Code.GDSliderEdadObjects1.length = 0;
gdjs._54_462Code.GDSliderEdadObjects2.length = 0;
gdjs._54_462Code.GDSliderEdadObjects3.length = 0;
gdjs._54_462Code.GDSliderEdadObjects4.length = 0;
gdjs._54_462Code.GDSiguienteObjects1.length = 0;
gdjs._54_462Code.GDSiguienteObjects2.length = 0;
gdjs._54_462Code.GDSiguienteObjects3.length = 0;
gdjs._54_462Code.GDSiguienteObjects4.length = 0;
gdjs._54_462Code.GDIMG_9595PreguntaObjects1.length = 0;
gdjs._54_462Code.GDIMG_9595PreguntaObjects2.length = 0;
gdjs._54_462Code.GDIMG_9595PreguntaObjects3.length = 0;
gdjs._54_462Code.GDIMG_9595PreguntaObjects4.length = 0;
gdjs._54_462Code.GDOpcionesObjects1.length = 0;
gdjs._54_462Code.GDOpcionesObjects2.length = 0;
gdjs._54_462Code.GDOpcionesObjects3.length = 0;
gdjs._54_462Code.GDOpcionesObjects4.length = 0;
gdjs._54_462Code.GDNewTextObjects1.length = 0;
gdjs._54_462Code.GDNewTextObjects2.length = 0;
gdjs._54_462Code.GDNewTextObjects3.length = 0;
gdjs._54_462Code.GDNewTextObjects4.length = 0;
gdjs._54_462Code.GDThumbObjects1.length = 0;
gdjs._54_462Code.GDThumbObjects2.length = 0;
gdjs._54_462Code.GDThumbObjects3.length = 0;
gdjs._54_462Code.GDThumbObjects4.length = 0;
gdjs._54_462Code.GDFondoObjects1.length = 0;
gdjs._54_462Code.GDFondoObjects2.length = 0;
gdjs._54_462Code.GDFondoObjects3.length = 0;
gdjs._54_462Code.GDFondoObjects4.length = 0;


return;

}

gdjs['_54_462Code'] = gdjs._54_462Code;
