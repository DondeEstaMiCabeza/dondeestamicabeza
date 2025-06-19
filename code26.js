gdjs.RecoDataCode = {};
gdjs.RecoDataCode.localVariables = [];
gdjs.RecoDataCode.GDBGObjects1= [];
gdjs.RecoDataCode.GDBGObjects2= [];
gdjs.RecoDataCode.GDElementosEscalablesObjects1= [];
gdjs.RecoDataCode.GDElementosEscalablesObjects2= [];
gdjs.RecoDataCode.GDWhereIsMyHeadObjects1= [];
gdjs.RecoDataCode.GDWhereIsMyHeadObjects2= [];


gdjs.RecoDataCode.asyncCallback13133852 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.RecoDataCode.localVariables);
{gdjs.evtTools.firebaseTools.firestore.addDocument("respuestas", runtimeScene.getScene().getVariables().get("User"), runtimeScene.getScene().getVariables().get("Estado"));
}gdjs.RecoDataCode.localVariables.length = 0;
}
gdjs.RecoDataCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.RecoDataCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.RecoDataCode.asyncCallback13133852(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.RecoDataCode.asyncCallback26467668 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.RecoDataCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("BG"), gdjs.RecoDataCode.GDBGObjects2);
gdjs.copyArray(asyncObjectsList.getObjects("ElementosEscalables"), gdjs.RecoDataCode.GDElementosEscalablesObjects2);

{for(var i = 0, len = gdjs.RecoDataCode.GDElementosEscalablesObjects2.length ;i < len;++i) {
    gdjs.RecoDataCode.GDElementosEscalablesObjects2[i].getBehavior("Tween").addObjectScaleTween("Thumb", 1, 1, "swingFromTo", 400, false, true);
}
}{for(var i = 0, len = gdjs.RecoDataCode.GDBGObjects2.length ;i < len;++i) {
    gdjs.RecoDataCode.GDBGObjects2[i].getBehavior("Tween").addObjectScaleTween("Thumb", 1, 1, "elastic", 1200, false, true);
}
}gdjs.RecoDataCode.localVariables.length = 0;
}
gdjs.RecoDataCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.RecoDataCode.localVariables);
for (const obj of gdjs.RecoDataCode.GDElementosEscalablesObjects1) asyncObjectsList.addObject("ElementosEscalables", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.2), (runtimeScene) => (gdjs.RecoDataCode.asyncCallback26467668(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.RecoDataCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{

{ //Subevents
gdjs.RecoDataCode.eventsList1(runtimeScene);} //End of subevents
}

}


};gdjs.RecoDataCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12487524);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ElementosEscalables"), gdjs.RecoDataCode.GDElementosEscalablesObjects1);
{for(var i = 0, len = gdjs.RecoDataCode.GDElementosEscalablesObjects1.length ;i < len;++i) {
    gdjs.RecoDataCode.GDElementosEscalablesObjects1[i].getBehavior("Tween").addObjectOpacityTween("Thumb2", 255, "linear", 200, false);
}
}
{ //Subevents
gdjs.RecoDataCode.eventsList2(runtimeScene);} //End of subevents
}

}


};gdjs.RecoDataCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13368708);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BG"), gdjs.RecoDataCode.GDBGObjects1);
gdjs.copyArray(runtimeScene.getObjects("ElementosEscalables"), gdjs.RecoDataCode.GDElementosEscalablesObjects1);
{runtimeScene.getScene().getVariables().get("User").getChild("Donde_Vives").setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("User").getChild("Donde_Vives")));
}{runtimeScene.getScene().getVariables().get("User").getChild("Edad").setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("User").getChild("Edad")));
}{runtimeScene.getScene().getVariables().get("User").getChild("Raza").setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("User").getChild("Raza")));
}{runtimeScene.getScene().getVariables().get("User").getChild("Generos").setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("User").getChild("Generos")));
}{runtimeScene.getScene().getVariables().get("User").getChild("ActividadActual").setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("User").getChild("ActividadActual")));
}{runtimeScene.getScene().getVariables().get("User").getChild("QueTeGustariaHacer").setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("User").getChild("QueTeGustariaHacer")));
}{runtimeScene.getScene().getVariables().get("User").getChild("ConQueTeDiviertes").setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("User").getChild("ConQueTeDiviertes")));
}{runtimeScene.getScene().getVariables().get("User").getChild("TeHazSentidoAlegreYDeBuenHumor").setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("User").getChild("TeHazSentidoAlegreYDeBuenHumor")));
}{runtimeScene.getScene().getVariables().get("User").getChild("TeHazSentidoTranquilxYRelajadx").setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("User").getChild("TeHazSentidoTranquilxYRelajadx")));
}{runtimeScene.getScene().getVariables().get("User").getChild("TeHazSentidoActivxYEnergicx").setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("User").getChild("TeHazSentidoActivxYEnergicx")));
}{runtimeScene.getScene().getVariables().get("User").getChild("TeHazDespertadoFrescxYDescansadx").setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("User").getChild("TeHazDespertadoFrescxYDescansadx")));
}{runtimeScene.getScene().getVariables().get("User").getChild("TuVidaCotiadianaHaEstadoLlenaDeCosasQueMeInteresen").setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("User").getChild("TuVidaCotiadianaHaEstadoLlenaDeCosasQueMeInteresen")));
}{runtimeScene.getScene().getVariables().get("User").getChild("FrecuenciaLograrObjetivos").setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("User").getChild("FrecuenciaLograrObjetivos")));
}{runtimeScene.getScene().getVariables().get("User").getChild("TuEn10Años").setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("User").getChild("TuEn10Años")));
}{runtimeScene.getScene().getVariables().get("User").getChild("CuandoVeoAlguienEnProblemas").setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("User").getChild("CuandoVeoAlguienEnProblemas")));
}{runtimeScene.getScene().getVariables().get("User").getChild("PanaInfluencer").setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("User").getChild("PanaInfluencer")));
}{runtimeScene.getScene().getVariables().get("User").getChild("CualidadesDelInfluencer").setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("User").getChild("CualidadesDelInfluencer")));
}{runtimeScene.getScene().getVariables().get("User").getChild("CuandoEstasDiscutiendo").setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("User").getChild("CuandoEstasDiscutiendo")));
}{runtimeScene.getScene().getVariables().get("User").getChild("DondeTeSientesMejor").setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("User").getChild("DondeTeSientesMejor")));
}{runtimeScene.getScene().getVariables().get("User").getChild("SiTePasaAlgoBuenoAQuienLeCuentasPrimero").setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("User").getChild("SiTePasaAlgoBuenoAQuienLeCuentasPrimero")));
}{runtimeScene.getScene().getVariables().get("User").getChild("YSiTePasaAlgoMalo").setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("User").getChild("YSiTePasaAlgoMalo")));
}{runtimeScene.getScene().getVariables().get("User").getChild("FrecuenciaPedirConsejo").setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("User").getChild("FrecuenciaPedirConsejo")));
}{runtimeScene.getScene().getVariables().get("User").getChild("CuandoMeEnfrentoALosProblemas").setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("User").getChild("CuandoMeEnfrentoALosProblemas")));
}{runtimeScene.getScene().getVariables().get("User").getChild("QueEsLoPeorDeTuTrabajoOEstudio").setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("User").getChild("QueEsLoPeorDeTuTrabajoOEstudio")));
}{runtimeScene.getScene().getVariables().get("User").getChild("TeAdaptadasALosCambios").setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("User").getChild("TeAdaptadasALosCambios")));
}{runtimeScene.getScene().getVariables().get("User").getChild("DespuesDeLaTormentaMeSiento").setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("User").getChild("DespuesDeLaTormentaMeSiento")));
}{runtimeScene.getScene().getVariables().get("User").getChild("QueTeMantieneConVida").setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("User").getChild("QueTeMantieneConVida")));
}{for(var i = 0, len = gdjs.RecoDataCode.GDBGObjects1.length ;i < len;++i) {
    gdjs.RecoDataCode.GDBGObjects1[i].getBehavior("Tween").addObjectScaleTween("Thumb", 0.5, 0.5, "linear", 1, false, true);
}
}{for(var i = 0, len = gdjs.RecoDataCode.GDElementosEscalablesObjects1.length ;i < len;++i) {
    gdjs.RecoDataCode.GDElementosEscalablesObjects1[i].getBehavior("Tween").addObjectScaleTween("Thumb", 0.5, 0.5, "linear", 1, false, true);
}
}{for(var i = 0, len = gdjs.RecoDataCode.GDElementosEscalablesObjects1.length ;i < len;++i) {
    gdjs.RecoDataCode.GDElementosEscalablesObjects1[i].setOpacity(0);
}
}
{ //Subevents
gdjs.RecoDataCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("Estado")) == "ok";
if (isConditionTrue_0) {

{ //Subevents
gdjs.RecoDataCode.eventsList3(runtimeScene);} //End of subevents
}

}


};

gdjs.RecoDataCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.RecoDataCode.GDBGObjects1.length = 0;
gdjs.RecoDataCode.GDBGObjects2.length = 0;
gdjs.RecoDataCode.GDElementosEscalablesObjects1.length = 0;
gdjs.RecoDataCode.GDElementosEscalablesObjects2.length = 0;
gdjs.RecoDataCode.GDWhereIsMyHeadObjects1.length = 0;
gdjs.RecoDataCode.GDWhereIsMyHeadObjects2.length = 0;

gdjs.RecoDataCode.eventsList4(runtimeScene);
gdjs.RecoDataCode.GDBGObjects1.length = 0;
gdjs.RecoDataCode.GDBGObjects2.length = 0;
gdjs.RecoDataCode.GDElementosEscalablesObjects1.length = 0;
gdjs.RecoDataCode.GDElementosEscalablesObjects2.length = 0;
gdjs.RecoDataCode.GDWhereIsMyHeadObjects1.length = 0;
gdjs.RecoDataCode.GDWhereIsMyHeadObjects2.length = 0;


return;

}

gdjs['RecoDataCode'] = gdjs.RecoDataCode;
