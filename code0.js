gdjs._49Code = {};
gdjs._49Code.localVariables = [];
gdjs._49Code.GDFondinObjects1= [];
gdjs._49Code.GDFondinObjects2= [];
gdjs._49Code.GDFondinObjects3= [];
gdjs._49Code.GDFondinObjects4= [];
gdjs._49Code.GDFondinObjects5= [];
gdjs._49Code.GDFondinObjects6= [];
gdjs._49Code.GDDondeMiCabezaObjects1= [];
gdjs._49Code.GDDondeMiCabezaObjects2= [];
gdjs._49Code.GDDondeMiCabezaObjects3= [];
gdjs._49Code.GDDondeMiCabezaObjects4= [];
gdjs._49Code.GDDondeMiCabezaObjects5= [];
gdjs._49Code.GDDondeMiCabezaObjects6= [];
gdjs._49Code.GDTextinObjects1= [];
gdjs._49Code.GDTextinObjects2= [];
gdjs._49Code.GDTextinObjects3= [];
gdjs._49Code.GDTextinObjects4= [];
gdjs._49Code.GDTextinObjects5= [];
gdjs._49Code.GDTextinObjects6= [];
gdjs._49Code.GDConfetiObjects1= [];
gdjs._49Code.GDConfetiObjects2= [];
gdjs._49Code.GDConfetiObjects3= [];
gdjs._49Code.GDConfetiObjects4= [];
gdjs._49Code.GDConfetiObjects5= [];
gdjs._49Code.GDConfetiObjects6= [];
gdjs._49Code.GDCapa3Objects1= [];
gdjs._49Code.GDCapa3Objects2= [];
gdjs._49Code.GDCapa3Objects3= [];
gdjs._49Code.GDCapa3Objects4= [];
gdjs._49Code.GDCapa3Objects5= [];
gdjs._49Code.GDCapa3Objects6= [];
gdjs._49Code.GDCapa3AltObjects1= [];
gdjs._49Code.GDCapa3AltObjects2= [];
gdjs._49Code.GDCapa3AltObjects3= [];
gdjs._49Code.GDCapa3AltObjects4= [];
gdjs._49Code.GDCapa3AltObjects5= [];
gdjs._49Code.GDCapa3AltObjects6= [];


gdjs._49Code.asyncCallback24016692 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs._49Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Textin"), gdjs._49Code.GDTextinObjects6);

{for(var i = 0, len = gdjs._49Code.GDTextinObjects6.length ;i < len;++i) {
    gdjs._49Code.GDTextinObjects6[i].getBehavior("Tween").addObjectOpacityTween("Thumb", 255, "linear", 600, false);
}
}gdjs._49Code.localVariables.length = 0;
}
gdjs._49Code.eventsList0 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs._49Code.localVariables);
for (const obj of gdjs._49Code.GDTextinObjects5) asyncObjectsList.addObject("Textin", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.4), (runtimeScene) => (gdjs._49Code.asyncCallback24016692(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs._49Code.eventsList1 = function(runtimeScene, asyncObjectsList) {

{

gdjs.copyArray(runtimeScene.getObjects("Textin"), gdjs._49Code.GDTextinObjects5);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._49Code.GDTextinObjects5.length;i<l;++i) {
    if ( gdjs._49Code.GDTextinObjects5[i].getAnimation() == 1 ) {
        isConditionTrue_0 = true;
        gdjs._49Code.GDTextinObjects5[k] = gdjs._49Code.GDTextinObjects5[i];
        ++k;
    }
}
gdjs._49Code.GDTextinObjects5.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs._49Code.eventsList0(runtimeScene, asyncObjectsList);} //End of subevents
}

}


};gdjs._49Code.asyncCallback24015636 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs._49Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Capa3Alt"), gdjs._49Code.GDCapa3AltObjects5);

{for(var i = 0, len = gdjs._49Code.GDCapa3AltObjects5.length ;i < len;++i) {
    gdjs._49Code.GDCapa3AltObjects5[i].getBehavior("Tween").addObjectScaleTween("Thumb", 1, 1, "elastic", 1200, false, true);
}
}
{ //Subevents
gdjs._49Code.eventsList1(runtimeScene, asyncObjectsList);} //End of subevents
gdjs._49Code.localVariables.length = 0;
}
gdjs._49Code.eventsList2 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs._49Code.localVariables);
/* Don't save Capa3Alt as it will be provided by the parent asyncObjectsList. */
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs._49Code.asyncCallback24015636(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs._49Code.asyncCallback24013276 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs._49Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Capa3"), gdjs._49Code.GDCapa3Objects4);

{for(var i = 0, len = gdjs._49Code.GDCapa3Objects4.length ;i < len;++i) {
    gdjs._49Code.GDCapa3Objects4[i].getBehavior("Tween").addObjectScaleTween("Thumb", 1, 1, "elastic", 1200, false, true);
}
}
{ //Subevents
gdjs._49Code.eventsList2(runtimeScene, asyncObjectsList);} //End of subevents
gdjs._49Code.localVariables.length = 0;
}
gdjs._49Code.eventsList3 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs._49Code.localVariables);
/* Don't save Capa3 as it will be provided by the parent asyncObjectsList. */
/* Don't save Capa3Alt as it will be provided by the parent asyncObjectsList. */
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs._49Code.asyncCallback24013276(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs._49Code.asyncCallback24014324 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs._49Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Confeti"), gdjs._49Code.GDConfetiObjects3);

{for(var i = 0, len = gdjs._49Code.GDConfetiObjects3.length ;i < len;++i) {
    gdjs._49Code.GDConfetiObjects3[i].getBehavior("Tween").addObjectScaleTween("Thumb", 1, 1, "elastic", 1200, false, true);
}
}
{ //Subevents
gdjs._49Code.eventsList3(runtimeScene, asyncObjectsList);} //End of subevents
gdjs._49Code.localVariables.length = 0;
}
gdjs._49Code.eventsList4 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs._49Code.localVariables);
/* Don't save Capa3 as it will be provided by the parent asyncObjectsList. */
/* Don't save Capa3Alt as it will be provided by the parent asyncObjectsList. */
/* Don't save Confeti as it will be provided by the parent asyncObjectsList. */
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs._49Code.asyncCallback24014324(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs._49Code.asyncCallback24013348 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs._49Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("DondeMiCabeza"), gdjs._49Code.GDDondeMiCabezaObjects2);

{for(var i = 0, len = gdjs._49Code.GDDondeMiCabezaObjects2.length ;i < len;++i) {
    gdjs._49Code.GDDondeMiCabezaObjects2[i].getBehavior("Tween").addObjectScaleTween("Thumb", 1, 1, "elastic", 1200, false, true);
}
}
{ //Subevents
gdjs._49Code.eventsList4(runtimeScene, asyncObjectsList);} //End of subevents
gdjs._49Code.localVariables.length = 0;
}
gdjs._49Code.eventsList5 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs._49Code.localVariables);
for (const obj of gdjs._49Code.GDCapa3Objects1) asyncObjectsList.addObject("Capa3", obj);
for (const obj of gdjs._49Code.GDCapa3AltObjects1) asyncObjectsList.addObject("Capa3Alt", obj);
for (const obj of gdjs._49Code.GDConfetiObjects1) asyncObjectsList.addObject("Confeti", obj);
for (const obj of gdjs._49Code.GDDondeMiCabezaObjects1) asyncObjectsList.addObject("DondeMiCabeza", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.2), (runtimeScene) => (gdjs._49Code.asyncCallback24013348(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs._49Code.eventsList6 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Textin"), gdjs._49Code.GDTextinObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._49Code.GDTextinObjects2.length;i<l;++i) {
    if ( gdjs._49Code.GDTextinObjects2[i].getAnimation() == 1 ) {
        isConditionTrue_0 = true;
        gdjs._49Code.GDTextinObjects2[k] = gdjs._49Code.GDTextinObjects2[i];
        ++k;
    }
}
gdjs._49Code.GDTextinObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs._49Code.GDTextinObjects2 */
{for(var i = 0, len = gdjs._49Code.GDTextinObjects2.length ;i < len;++i) {
    gdjs._49Code.GDTextinObjects2[i].setOpacity(0);
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Capa3"), gdjs._49Code.GDCapa3Objects1);
gdjs.copyArray(runtimeScene.getObjects("Capa3Alt"), gdjs._49Code.GDCapa3AltObjects1);
gdjs.copyArray(runtimeScene.getObjects("Confeti"), gdjs._49Code.GDConfetiObjects1);
gdjs.copyArray(runtimeScene.getObjects("DondeMiCabeza"), gdjs._49Code.GDDondeMiCabezaObjects1);
gdjs.copyArray(runtimeScene.getObjects("Fondin"), gdjs._49Code.GDFondinObjects1);
{for(var i = 0, len = gdjs._49Code.GDFondinObjects1.length ;i < len;++i) {
    gdjs._49Code.GDFondinObjects1[i].setColor("252;249;235");
}
}{for(var i = 0, len = gdjs._49Code.GDDondeMiCabezaObjects1.length ;i < len;++i) {
    gdjs._49Code.GDDondeMiCabezaObjects1[i].getBehavior("Tween").addObjectScaleTween("Thumb", 0.4, 0.4, "linear", 1, false, true);
}
}{for(var i = 0, len = gdjs._49Code.GDConfetiObjects1.length ;i < len;++i) {
    gdjs._49Code.GDConfetiObjects1[i].getBehavior("Tween").addObjectScaleTween("Thumb", 0.4, 0.4, "linear", 1, false, true);
}
}{for(var i = 0, len = gdjs._49Code.GDCapa3Objects1.length ;i < len;++i) {
    gdjs._49Code.GDCapa3Objects1[i].getBehavior("Tween").addObjectScaleTween("Thumb", 0.001, 0.001, "linear", 1, false, true);
}
}{for(var i = 0, len = gdjs._49Code.GDCapa3AltObjects1.length ;i < len;++i) {
    gdjs._49Code.GDCapa3AltObjects1[i].getBehavior("Tween").addObjectScaleTween("Thumb", 0.001, 0.001, "linear", 1, false, true);
}
}
{ //Subevents
gdjs._49Code.eventsList5(runtimeScene);} //End of subevents
}

}


};gdjs._49Code.eventsList7 = function(runtimeScene, asyncObjectsList) {

{

gdjs.copyArray(runtimeScene.getObjects("DondeMiCabeza"), gdjs._49Code.GDDondeMiCabezaObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._49Code.GDDondeMiCabezaObjects2.length;i<l;++i) {
    if ( gdjs._49Code.GDDondeMiCabezaObjects2[i].getOpacity() == 255 ) {
        isConditionTrue_0 = true;
        gdjs._49Code.GDDondeMiCabezaObjects2[k] = gdjs._49Code.GDDondeMiCabezaObjects2[i];
        ++k;
    }
}
gdjs._49Code.GDDondeMiCabezaObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Capa3"), gdjs._49Code.GDCapa3Objects2);
gdjs.copyArray(runtimeScene.getObjects("Capa3Alt"), gdjs._49Code.GDCapa3AltObjects2);
gdjs.copyArray(runtimeScene.getObjects("Confeti"), gdjs._49Code.GDConfetiObjects2);
/* Reuse gdjs._49Code.GDDondeMiCabezaObjects2 */
gdjs.copyArray(runtimeScene.getObjects("Fondin"), gdjs._49Code.GDFondinObjects2);
gdjs.copyArray(runtimeScene.getObjects("Textin"), gdjs._49Code.GDTextinObjects2);
{for(var i = 0, len = gdjs._49Code.GDDondeMiCabezaObjects2.length ;i < len;++i) {
    gdjs._49Code.GDDondeMiCabezaObjects2[i].getBehavior("Tween").addObjectOpacityTween("Thumb", 0, "linear", 600, false);
}
for(var i = 0, len = gdjs._49Code.GDTextinObjects2.length ;i < len;++i) {
    gdjs._49Code.GDTextinObjects2[i].getBehavior("Tween").addObjectOpacityTween("Thumb", 0, "linear", 600, false);
}
for(var i = 0, len = gdjs._49Code.GDConfetiObjects2.length ;i < len;++i) {
    gdjs._49Code.GDConfetiObjects2[i].getBehavior("Tween").addObjectOpacityTween("Thumb", 0, "linear", 600, false);
}
for(var i = 0, len = gdjs._49Code.GDCapa3Objects2.length ;i < len;++i) {
    gdjs._49Code.GDCapa3Objects2[i].getBehavior("Tween").addObjectOpacityTween("Thumb", 0, "linear", 600, false);
}
for(var i = 0, len = gdjs._49Code.GDCapa3AltObjects2.length ;i < len;++i) {
    gdjs._49Code.GDCapa3AltObjects2[i].getBehavior("Tween").addObjectOpacityTween("Thumb", 0, "linear", 600, false);
}
}{for(var i = 0, len = gdjs._49Code.GDFondinObjects2.length ;i < len;++i) {
    gdjs._49Code.GDFondinObjects2[i].getBehavior("Tween").addObjectColorTween("BgColor", "255;255;0", "linear", 800, false, true);
}
}}

}


};gdjs._49Code.asyncCallback24019540 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs._49Code.localVariables);

{ //Subevents
gdjs._49Code.eventsList7(runtimeScene, asyncObjectsList);} //End of subevents
gdjs._49Code.localVariables.length = 0;
}
gdjs._49Code.eventsList8 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs._49Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(6), (runtimeScene) => (gdjs._49Code.asyncCallback24019540(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs._49Code.eventsList9 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(23996044);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs._49Code.eventsList6(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("DondeMiCabeza"), gdjs._49Code.GDDondeMiCabezaObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._49Code.GDDondeMiCabezaObjects1.length;i<l;++i) {
    if ( gdjs._49Code.GDDondeMiCabezaObjects1[i].getScaleX() == 1 ) {
        isConditionTrue_0 = true;
        gdjs._49Code.GDDondeMiCabezaObjects1[k] = gdjs._49Code.GDDondeMiCabezaObjects1[i];
        ++k;
    }
}
gdjs._49Code.GDDondeMiCabezaObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(24018028);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Capa3"), gdjs._49Code.GDCapa3Objects1);
gdjs.copyArray(runtimeScene.getObjects("Capa3Alt"), gdjs._49Code.GDCapa3AltObjects1);
gdjs.copyArray(runtimeScene.getObjects("Confeti"), gdjs._49Code.GDConfetiObjects1);
/* Reuse gdjs._49Code.GDDondeMiCabezaObjects1 */
gdjs.copyArray(runtimeScene.getObjects("Fondin"), gdjs._49Code.GDFondinObjects1);
gdjs.copyArray(runtimeScene.getObjects("Textin"), gdjs._49Code.GDTextinObjects1);
{for(var i = 0, len = gdjs._49Code.GDDondeMiCabezaObjects1.length ;i < len;++i) {
    gdjs._49Code.GDDondeMiCabezaObjects1[i].getBehavior("Tween").addObjectOpacityTween("Thumb", 0, "linear", 600, false);
}
for(var i = 0, len = gdjs._49Code.GDTextinObjects1.length ;i < len;++i) {
    gdjs._49Code.GDTextinObjects1[i].getBehavior("Tween").addObjectOpacityTween("Thumb", 0, "linear", 600, false);
}
for(var i = 0, len = gdjs._49Code.GDConfetiObjects1.length ;i < len;++i) {
    gdjs._49Code.GDConfetiObjects1[i].getBehavior("Tween").addObjectOpacityTween("Thumb", 0, "linear", 600, false);
}
for(var i = 0, len = gdjs._49Code.GDCapa3Objects1.length ;i < len;++i) {
    gdjs._49Code.GDCapa3Objects1[i].getBehavior("Tween").addObjectOpacityTween("Thumb", 0, "linear", 600, false);
}
for(var i = 0, len = gdjs._49Code.GDCapa3AltObjects1.length ;i < len;++i) {
    gdjs._49Code.GDCapa3AltObjects1[i].getBehavior("Tween").addObjectOpacityTween("Thumb", 0, "linear", 600, false);
}
}{for(var i = 0, len = gdjs._49Code.GDFondinObjects1.length ;i < len;++i) {
    gdjs._49Code.GDFondinObjects1[i].getBehavior("Tween").addObjectColorTween("BgColor", "255;255;0", "linear", 800, false, true);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(24019380);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs._49Code.eventsList8(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("DondeMiCabeza"), gdjs._49Code.GDDondeMiCabezaObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._49Code.GDDondeMiCabezaObjects1.length;i<l;++i) {
    if ( gdjs._49Code.GDDondeMiCabezaObjects1[i].getOpacity() == 0 ) {
        isConditionTrue_0 = true;
        gdjs._49Code.GDDondeMiCabezaObjects1[k] = gdjs._49Code.GDDondeMiCabezaObjects1[i];
        ++k;
    }
}
gdjs._49Code.GDDondeMiCabezaObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(24021676);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "2", false);
}{gdjs.evtTools.window.setFullScreen(runtimeScene, true, true);
}}

}


};

gdjs._49Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._49Code.GDFondinObjects1.length = 0;
gdjs._49Code.GDFondinObjects2.length = 0;
gdjs._49Code.GDFondinObjects3.length = 0;
gdjs._49Code.GDFondinObjects4.length = 0;
gdjs._49Code.GDFondinObjects5.length = 0;
gdjs._49Code.GDFondinObjects6.length = 0;
gdjs._49Code.GDDondeMiCabezaObjects1.length = 0;
gdjs._49Code.GDDondeMiCabezaObjects2.length = 0;
gdjs._49Code.GDDondeMiCabezaObjects3.length = 0;
gdjs._49Code.GDDondeMiCabezaObjects4.length = 0;
gdjs._49Code.GDDondeMiCabezaObjects5.length = 0;
gdjs._49Code.GDDondeMiCabezaObjects6.length = 0;
gdjs._49Code.GDTextinObjects1.length = 0;
gdjs._49Code.GDTextinObjects2.length = 0;
gdjs._49Code.GDTextinObjects3.length = 0;
gdjs._49Code.GDTextinObjects4.length = 0;
gdjs._49Code.GDTextinObjects5.length = 0;
gdjs._49Code.GDTextinObjects6.length = 0;
gdjs._49Code.GDConfetiObjects1.length = 0;
gdjs._49Code.GDConfetiObjects2.length = 0;
gdjs._49Code.GDConfetiObjects3.length = 0;
gdjs._49Code.GDConfetiObjects4.length = 0;
gdjs._49Code.GDConfetiObjects5.length = 0;
gdjs._49Code.GDConfetiObjects6.length = 0;
gdjs._49Code.GDCapa3Objects1.length = 0;
gdjs._49Code.GDCapa3Objects2.length = 0;
gdjs._49Code.GDCapa3Objects3.length = 0;
gdjs._49Code.GDCapa3Objects4.length = 0;
gdjs._49Code.GDCapa3Objects5.length = 0;
gdjs._49Code.GDCapa3Objects6.length = 0;
gdjs._49Code.GDCapa3AltObjects1.length = 0;
gdjs._49Code.GDCapa3AltObjects2.length = 0;
gdjs._49Code.GDCapa3AltObjects3.length = 0;
gdjs._49Code.GDCapa3AltObjects4.length = 0;
gdjs._49Code.GDCapa3AltObjects5.length = 0;
gdjs._49Code.GDCapa3AltObjects6.length = 0;

gdjs._49Code.eventsList9(runtimeScene);
gdjs._49Code.GDFondinObjects1.length = 0;
gdjs._49Code.GDFondinObjects2.length = 0;
gdjs._49Code.GDFondinObjects3.length = 0;
gdjs._49Code.GDFondinObjects4.length = 0;
gdjs._49Code.GDFondinObjects5.length = 0;
gdjs._49Code.GDFondinObjects6.length = 0;
gdjs._49Code.GDDondeMiCabezaObjects1.length = 0;
gdjs._49Code.GDDondeMiCabezaObjects2.length = 0;
gdjs._49Code.GDDondeMiCabezaObjects3.length = 0;
gdjs._49Code.GDDondeMiCabezaObjects4.length = 0;
gdjs._49Code.GDDondeMiCabezaObjects5.length = 0;
gdjs._49Code.GDDondeMiCabezaObjects6.length = 0;
gdjs._49Code.GDTextinObjects1.length = 0;
gdjs._49Code.GDTextinObjects2.length = 0;
gdjs._49Code.GDTextinObjects3.length = 0;
gdjs._49Code.GDTextinObjects4.length = 0;
gdjs._49Code.GDTextinObjects5.length = 0;
gdjs._49Code.GDTextinObjects6.length = 0;
gdjs._49Code.GDConfetiObjects1.length = 0;
gdjs._49Code.GDConfetiObjects2.length = 0;
gdjs._49Code.GDConfetiObjects3.length = 0;
gdjs._49Code.GDConfetiObjects4.length = 0;
gdjs._49Code.GDConfetiObjects5.length = 0;
gdjs._49Code.GDConfetiObjects6.length = 0;
gdjs._49Code.GDCapa3Objects1.length = 0;
gdjs._49Code.GDCapa3Objects2.length = 0;
gdjs._49Code.GDCapa3Objects3.length = 0;
gdjs._49Code.GDCapa3Objects4.length = 0;
gdjs._49Code.GDCapa3Objects5.length = 0;
gdjs._49Code.GDCapa3Objects6.length = 0;
gdjs._49Code.GDCapa3AltObjects1.length = 0;
gdjs._49Code.GDCapa3AltObjects2.length = 0;
gdjs._49Code.GDCapa3AltObjects3.length = 0;
gdjs._49Code.GDCapa3AltObjects4.length = 0;
gdjs._49Code.GDCapa3AltObjects5.length = 0;
gdjs._49Code.GDCapa3AltObjects6.length = 0;


return;

}

gdjs['_49Code'] = gdjs._49Code;
