gdjs._490Code = {};
gdjs._490Code.localVariables = [];
gdjs._490Code.GDRespuestaEntryObjects1= [];
gdjs._490Code.GDRespuestaEntryObjects2= [];
gdjs._490Code.GDRespuestaEntryObjects3= [];
gdjs._490Code.GDRespuesta2EntryObjects1= [];
gdjs._490Code.GDRespuesta2EntryObjects2= [];
gdjs._490Code.GDRespuesta2EntryObjects3= [];
gdjs._490Code.GDRespuesta3EntryObjects1= [];
gdjs._490Code.GDRespuesta3EntryObjects2= [];
gdjs._490Code.GDRespuesta3EntryObjects3= [];
gdjs._490Code.GDIMG_9595PreguntaObjects1= [];
gdjs._490Code.GDIMG_9595PreguntaObjects2= [];
gdjs._490Code.GDIMG_9595PreguntaObjects3= [];
gdjs._490Code.GDSiguienteObjects1= [];
gdjs._490Code.GDSiguienteObjects2= [];
gdjs._490Code.GDSiguienteObjects3= [];
gdjs._490Code.GDFondoObjects1= [];
gdjs._490Code.GDFondoObjects2= [];
gdjs._490Code.GDFondoObjects3= [];
gdjs._490Code.GDFonditoPrObjects1= [];
gdjs._490Code.GDFonditoPrObjects2= [];
gdjs._490Code.GDFonditoPrObjects3= [];
gdjs._490Code.GDBarraMoradaAzulObjects1= [];
gdjs._490Code.GDBarraMoradaAzulObjects2= [];
gdjs._490Code.GDBarraMoradaAzulObjects3= [];


gdjs._490Code.asyncCallback20943452 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs._490Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("RespuestaEntry"), gdjs._490Code.GDRespuestaEntryObjects3);

{for(var i = 0, len = gdjs._490Code.GDRespuestaEntryObjects3.length ;i < len;++i) {
    gdjs._490Code.GDRespuestaEntryObjects3[i].getBehavior("Tween").addObjectOpacityTween("Thumb", 255, "linear", 400, false);
}
}gdjs._490Code.localVariables.length = 0;
}
gdjs._490Code.eventsList0 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs._490Code.localVariables);
/* Don't save RespuestaEntry as it will be provided by the parent asyncObjectsList. */
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.2), (runtimeScene) => (gdjs._490Code.asyncCallback20943452(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs._490Code.asyncCallback20943300 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs._490Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("FonditoPr"), gdjs._490Code.GDFonditoPrObjects2);

gdjs.copyArray(asyncObjectsList.getObjects("IMG_Pregunta"), gdjs._490Code.GDIMG_9595PreguntaObjects2);

{for(var i = 0, len = gdjs._490Code.GDIMG_9595PreguntaObjects2.length ;i < len;++i) {
    gdjs._490Code.GDIMG_9595PreguntaObjects2[i].getBehavior("Tween").addObjectScaleTween("Thumb", 1, 1, "swingFromTo", 400, false, true);
}
}{for(var i = 0, len = gdjs._490Code.GDFonditoPrObjects2.length ;i < len;++i) {
    gdjs._490Code.GDFonditoPrObjects2[i].getBehavior("Tween").addObjectScaleTween("Thumb", 1, 1, "swingFromTo", 400, false, true);
}
}
{ //Subevents
gdjs._490Code.eventsList0(runtimeScene, asyncObjectsList);} //End of subevents
gdjs._490Code.localVariables.length = 0;
}
gdjs._490Code.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs._490Code.localVariables);
for (const obj of gdjs._490Code.GDFonditoPrObjects1) asyncObjectsList.addObject("FonditoPr", obj);
for (const obj of gdjs._490Code.GDIMG_9595PreguntaObjects1) asyncObjectsList.addObject("IMG_Pregunta", obj);
for (const obj of gdjs._490Code.GDRespuestaEntryObjects1) asyncObjectsList.addObject("RespuestaEntry", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.2), (runtimeScene) => (gdjs._490Code.asyncCallback20943300(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs._490Code.mapOfGDgdjs_9546_9595490Code_9546GDSiguienteObjects1Objects = Hashtable.newFrom({"Siguiente": gdjs._490Code.GDSiguienteObjects1});
gdjs._490Code.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BarraMoradaAzul"), gdjs._490Code.GDBarraMoradaAzulObjects1);
gdjs.copyArray(runtimeScene.getObjects("FonditoPr"), gdjs._490Code.GDFonditoPrObjects1);
gdjs.copyArray(runtimeScene.getObjects("IMG_Pregunta"), gdjs._490Code.GDIMG_9595PreguntaObjects1);
gdjs.copyArray(runtimeScene.getObjects("RespuestaEntry"), gdjs._490Code.GDRespuestaEntryObjects1);
{for(var i = 0, len = gdjs._490Code.GDRespuestaEntryObjects1.length ;i < len;++i) {
    gdjs._490Code.GDRespuestaEntryObjects1[i].setOpacity(0);
}
}{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(0);
}{for(var i = 0, len = gdjs._490Code.GDBarraMoradaAzulObjects1.length ;i < len;++i) {
    gdjs._490Code.GDBarraMoradaAzulObjects1[i].getBehavior("DraggableSliderControl").SetValue(12, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs._490Code.GDIMG_9595PreguntaObjects1.length ;i < len;++i) {
    gdjs._490Code.GDIMG_9595PreguntaObjects1[i].getBehavior("Tween").addObjectScaleTween("Thumb", 0.5, 0.5, "linear", 1, false, true);
}
}{for(var i = 0, len = gdjs._490Code.GDFonditoPrObjects1.length ;i < len;++i) {
    gdjs._490Code.GDFonditoPrObjects1[i].getBehavior("Tween").addObjectScaleTween("Thumb", 0.5, 0.5, "linear", 1, false, true);
}
}
{ //Subevents
gdjs._490Code.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("RespuestaEntry"), gdjs._490Code.GDRespuestaEntryObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._490Code.GDRespuestaEntryObjects1.length;i<l;++i) {
    if ( gdjs._490Code.GDRespuestaEntryObjects1[i].getText() != "" ) {
        isConditionTrue_0 = true;
        gdjs._490Code.GDRespuestaEntryObjects1[k] = gdjs._490Code.GDRespuestaEntryObjects1[i];
        ++k;
    }
}
gdjs._490Code.GDRespuestaEntryObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(20945308);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("RespuestaEntry"), gdjs._490Code.GDRespuestaEntryObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._490Code.GDRespuestaEntryObjects1.length;i<l;++i) {
    if ( gdjs._490Code.GDRespuestaEntryObjects1[i].getText() == "" ) {
        isConditionTrue_0 = true;
        gdjs._490Code.GDRespuestaEntryObjects1[k] = gdjs._490Code.GDRespuestaEntryObjects1[i];
        ++k;
    }
}
gdjs._490Code.GDRespuestaEntryObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(20945924);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Siguiente"), gdjs._490Code.GDSiguienteObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._490Code.mapOfGDgdjs_9546_9595490Code_9546GDSiguienteObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._490Code.GDSiguienteObjects1.length;i<l;++i) {
    if ( gdjs._490Code.GDSiguienteObjects1[i].getOpacity() == 255 ) {
        isConditionTrue_0 = true;
        gdjs._490Code.GDSiguienteObjects1[k] = gdjs._490Code.GDSiguienteObjects1[i];
        ++k;
    }
}
gdjs._490Code.GDSiguienteObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(20947412);
}
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("RespuestaEntry"), gdjs._490Code.GDRespuestaEntryObjects1);
{runtimeScene.getGame().getVariables().get("User").getChild("PanaInfluencer").setString((( gdjs._490Code.GDRespuestaEntryObjects1.length === 0 ) ? "" :gdjs._490Code.GDRespuestaEntryObjects1[0].getText()));
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "11", false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 0;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(20948388);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Siguiente"), gdjs._490Code.GDSiguienteObjects1);
{for(var i = 0, len = gdjs._490Code.GDSiguienteObjects1.length ;i < len;++i) {
    gdjs._490Code.GDSiguienteObjects1[i].setAnimation(0);
}
}{for(var i = 0, len = gdjs._490Code.GDSiguienteObjects1.length ;i < len;++i) {
    gdjs._490Code.GDSiguienteObjects1[i].getBehavior("Tween").addObjectScaleTween("as", 0.75, 0.75, "linear", 100, false, true);
}
}{for(var i = 0, len = gdjs._490Code.GDSiguienteObjects1.length ;i < len;++i) {
    gdjs._490Code.GDSiguienteObjects1[i].setOpacity(150);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 1;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(20949900);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Siguiente"), gdjs._490Code.GDSiguienteObjects1);
{for(var i = 0, len = gdjs._490Code.GDSiguienteObjects1.length ;i < len;++i) {
    gdjs._490Code.GDSiguienteObjects1[i].getBehavior("Tween").addObjectScaleTween("as", 0.8, 0.8, "bouncePast", 100, false, true);
}
}{for(var i = 0, len = gdjs._490Code.GDSiguienteObjects1.length ;i < len;++i) {
    gdjs._490Code.GDSiguienteObjects1[i].setOpacity(255);
}
}{for(var i = 0, len = gdjs._490Code.GDSiguienteObjects1.length ;i < len;++i) {
    gdjs._490Code.GDSiguienteObjects1[i].setAnimation(1);
}
}}

}


};

gdjs._490Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._490Code.GDRespuestaEntryObjects1.length = 0;
gdjs._490Code.GDRespuestaEntryObjects2.length = 0;
gdjs._490Code.GDRespuestaEntryObjects3.length = 0;
gdjs._490Code.GDRespuesta2EntryObjects1.length = 0;
gdjs._490Code.GDRespuesta2EntryObjects2.length = 0;
gdjs._490Code.GDRespuesta2EntryObjects3.length = 0;
gdjs._490Code.GDRespuesta3EntryObjects1.length = 0;
gdjs._490Code.GDRespuesta3EntryObjects2.length = 0;
gdjs._490Code.GDRespuesta3EntryObjects3.length = 0;
gdjs._490Code.GDIMG_9595PreguntaObjects1.length = 0;
gdjs._490Code.GDIMG_9595PreguntaObjects2.length = 0;
gdjs._490Code.GDIMG_9595PreguntaObjects3.length = 0;
gdjs._490Code.GDSiguienteObjects1.length = 0;
gdjs._490Code.GDSiguienteObjects2.length = 0;
gdjs._490Code.GDSiguienteObjects3.length = 0;
gdjs._490Code.GDFondoObjects1.length = 0;
gdjs._490Code.GDFondoObjects2.length = 0;
gdjs._490Code.GDFondoObjects3.length = 0;
gdjs._490Code.GDFonditoPrObjects1.length = 0;
gdjs._490Code.GDFonditoPrObjects2.length = 0;
gdjs._490Code.GDFonditoPrObjects3.length = 0;
gdjs._490Code.GDBarraMoradaAzulObjects1.length = 0;
gdjs._490Code.GDBarraMoradaAzulObjects2.length = 0;
gdjs._490Code.GDBarraMoradaAzulObjects3.length = 0;

gdjs._490Code.eventsList2(runtimeScene);
gdjs._490Code.GDRespuestaEntryObjects1.length = 0;
gdjs._490Code.GDRespuestaEntryObjects2.length = 0;
gdjs._490Code.GDRespuestaEntryObjects3.length = 0;
gdjs._490Code.GDRespuesta2EntryObjects1.length = 0;
gdjs._490Code.GDRespuesta2EntryObjects2.length = 0;
gdjs._490Code.GDRespuesta2EntryObjects3.length = 0;
gdjs._490Code.GDRespuesta3EntryObjects1.length = 0;
gdjs._490Code.GDRespuesta3EntryObjects2.length = 0;
gdjs._490Code.GDRespuesta3EntryObjects3.length = 0;
gdjs._490Code.GDIMG_9595PreguntaObjects1.length = 0;
gdjs._490Code.GDIMG_9595PreguntaObjects2.length = 0;
gdjs._490Code.GDIMG_9595PreguntaObjects3.length = 0;
gdjs._490Code.GDSiguienteObjects1.length = 0;
gdjs._490Code.GDSiguienteObjects2.length = 0;
gdjs._490Code.GDSiguienteObjects3.length = 0;
gdjs._490Code.GDFondoObjects1.length = 0;
gdjs._490Code.GDFondoObjects2.length = 0;
gdjs._490Code.GDFondoObjects3.length = 0;
gdjs._490Code.GDFonditoPrObjects1.length = 0;
gdjs._490Code.GDFonditoPrObjects2.length = 0;
gdjs._490Code.GDFonditoPrObjects3.length = 0;
gdjs._490Code.GDBarraMoradaAzulObjects1.length = 0;
gdjs._490Code.GDBarraMoradaAzulObjects2.length = 0;
gdjs._490Code.GDBarraMoradaAzulObjects3.length = 0;


return;

}

gdjs['_490Code'] = gdjs._490Code;
