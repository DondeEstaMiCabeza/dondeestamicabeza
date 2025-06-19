gdjs.NoRecoDataCode = {};
gdjs.NoRecoDataCode.localVariables = [];
gdjs.NoRecoDataCode.GDElementosEscalablesObjects1= [];
gdjs.NoRecoDataCode.GDElementosEscalablesObjects2= [];
gdjs.NoRecoDataCode.GDElementosEscalablesObjects3= [];
gdjs.NoRecoDataCode.GDElementosEscalablesObjects4= [];
gdjs.NoRecoDataCode.GDWhereIsMyHeadLogoObjects1= [];
gdjs.NoRecoDataCode.GDWhereIsMyHeadLogoObjects2= [];
gdjs.NoRecoDataCode.GDWhereIsMyHeadLogoObjects3= [];
gdjs.NoRecoDataCode.GDWhereIsMyHeadLogoObjects4= [];


gdjs.NoRecoDataCode.asyncCallback26763932 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.NoRecoDataCode.localVariables);
{gdjs.evtTools.firebaseTools.firestore.addDocument("respuestas", runtimeScene.getScene().getVariables().get("User"), runtimeScene.getScene().getVariables().get("Estado"));
}gdjs.NoRecoDataCode.localVariables.length = 0;
}
gdjs.NoRecoDataCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.NoRecoDataCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.NoRecoDataCode.asyncCallback26763932(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.NoRecoDataCode.asyncCallback26779564 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.NoRecoDataCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("ElementosEscalables"), gdjs.NoRecoDataCode.GDElementosEscalablesObjects4);

gdjs.copyArray(runtimeScene.getObjects("WhereIsMyHeadLogo"), gdjs.NoRecoDataCode.GDWhereIsMyHeadLogoObjects4);
{for(var i = 0, len = gdjs.NoRecoDataCode.GDElementosEscalablesObjects4.length ;i < len;++i) {
    gdjs.NoRecoDataCode.GDElementosEscalablesObjects4[i].getBehavior("Tween").addObjectScaleTween("Thumb", 1, 1, "swingFromTo", 400, false, true);
}
}{for(var i = 0, len = gdjs.NoRecoDataCode.GDWhereIsMyHeadLogoObjects4.length ;i < len;++i) {
    gdjs.NoRecoDataCode.GDWhereIsMyHeadLogoObjects4[i].getBehavior("Tween").addObjectScaleTween("Thumb", 1, 1, "elastic", 1200, false, true);
}
}gdjs.NoRecoDataCode.localVariables.length = 0;
}
gdjs.NoRecoDataCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.NoRecoDataCode.localVariables);
for (const obj of gdjs.NoRecoDataCode.GDElementosEscalablesObjects2) asyncObjectsList.addObject("ElementosEscalables", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.2), (runtimeScene) => (gdjs.NoRecoDataCode.asyncCallback26779564(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.NoRecoDataCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{

{ //Subevents
gdjs.NoRecoDataCode.eventsList1(runtimeScene);} //End of subevents
}

}


{



}


};gdjs.NoRecoDataCode.mapOfGDgdjs_9546NoRecoDataCode_9546GDElementosEscalablesObjects2Objects = Hashtable.newFrom({"ElementosEscalables": gdjs.NoRecoDataCode.GDElementosEscalablesObjects2});
gdjs.NoRecoDataCode.mapOfGDgdjs_9546NoRecoDataCode_9546GDElementosEscalablesObjects2Objects = Hashtable.newFrom({"ElementosEscalables": gdjs.NoRecoDataCode.GDElementosEscalablesObjects2});
gdjs.NoRecoDataCode.mapOfGDgdjs_9546NoRecoDataCode_9546GDElementosEscalablesObjects1Objects = Hashtable.newFrom({"ElementosEscalables": gdjs.NoRecoDataCode.GDElementosEscalablesObjects1});
gdjs.NoRecoDataCode.asyncCallback26787068 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.NoRecoDataCode.localVariables);
{gdjs.evtsExt__URLTools__Redirect.func(runtimeScene, "https://sticker.ly/s/PX10AD", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}gdjs.NoRecoDataCode.localVariables.length = 0;
}
gdjs.NoRecoDataCode.eventsList3 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.NoRecoDataCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(10), (runtimeScene) => (gdjs.NoRecoDataCode.asyncCallback26787068(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.NoRecoDataCode.asyncCallback26786700 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.NoRecoDataCode.localVariables);
{gdjs.evtTools.window.openURL("https://sticker.ly/s/PX10AD", runtimeScene);
}
{ //Subevents
gdjs.NoRecoDataCode.eventsList3(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.NoRecoDataCode.localVariables.length = 0;
}
gdjs.NoRecoDataCode.eventsList4 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.NoRecoDataCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.NoRecoDataCode.asyncCallback26786700(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.NoRecoDataCode.asyncCallback26788356 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.NoRecoDataCode.localVariables);
{gdjs.evtsExt__URLTools__Redirect.func(runtimeScene, "https://dondeestamicabeza.github.io/wallpapers/index.html", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}gdjs.NoRecoDataCode.localVariables.length = 0;
}
gdjs.NoRecoDataCode.eventsList5 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.NoRecoDataCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(10), (runtimeScene) => (gdjs.NoRecoDataCode.asyncCallback26788356(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.NoRecoDataCode.asyncCallback26788060 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.NoRecoDataCode.localVariables);
{gdjs.evtTools.window.openURL("https://dondeestamicabeza.github.io/wallpapers/index.html", runtimeScene);
}
{ //Subevents
gdjs.NoRecoDataCode.eventsList5(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.NoRecoDataCode.localVariables.length = 0;
}
gdjs.NoRecoDataCode.eventsList6 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.NoRecoDataCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.NoRecoDataCode.asyncCallback26788060(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.NoRecoDataCode.eventsList7 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.NoRecoDataCode.GDElementosEscalablesObjects1, gdjs.NoRecoDataCode.GDElementosEscalablesObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.NoRecoDataCode.GDElementosEscalablesObjects2.length;i<l;++i) {
    if ( gdjs.NoRecoDataCode.GDElementosEscalablesObjects2[i].getVariableNumber(gdjs.NoRecoDataCode.GDElementosEscalablesObjects2[i].getVariables().getFromIndex(0)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.NoRecoDataCode.GDElementosEscalablesObjects2[k] = gdjs.NoRecoDataCode.GDElementosEscalablesObjects2[i];
        ++k;
    }
}
gdjs.NoRecoDataCode.GDElementosEscalablesObjects2.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.NoRecoDataCode.eventsList4(runtimeScene);} //End of subevents
}

}


{

/* Reuse gdjs.NoRecoDataCode.GDElementosEscalablesObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.NoRecoDataCode.GDElementosEscalablesObjects1.length;i<l;++i) {
    if ( gdjs.NoRecoDataCode.GDElementosEscalablesObjects1[i].getVariableNumber(gdjs.NoRecoDataCode.GDElementosEscalablesObjects1[i].getVariables().getFromIndex(0)) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.NoRecoDataCode.GDElementosEscalablesObjects1[k] = gdjs.NoRecoDataCode.GDElementosEscalablesObjects1[i];
        ++k;
    }
}
gdjs.NoRecoDataCode.GDElementosEscalablesObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.NoRecoDataCode.eventsList6(runtimeScene);} //End of subevents
}

}


};gdjs.NoRecoDataCode.eventsList8 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.NoRecoDataCode.GDElementosEscalablesObjects1, gdjs.NoRecoDataCode.GDElementosEscalablesObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.NoRecoDataCode.GDElementosEscalablesObjects2.length;i<l;++i) {
    if ( gdjs.NoRecoDataCode.GDElementosEscalablesObjects2[i].getScaleY() == 1 ) {
        isConditionTrue_0 = true;
        gdjs.NoRecoDataCode.GDElementosEscalablesObjects2[k] = gdjs.NoRecoDataCode.GDElementosEscalablesObjects2[i];
        ++k;
    }
}
gdjs.NoRecoDataCode.GDElementosEscalablesObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.NoRecoDataCode.mapOfGDgdjs_9546NoRecoDataCode_9546GDElementosEscalablesObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(26783172);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.NoRecoDataCode.GDElementosEscalablesObjects2 */
{for(var i = 0, len = gdjs.NoRecoDataCode.GDElementosEscalablesObjects2.length ;i < len;++i) {
    gdjs.NoRecoDataCode.GDElementosEscalablesObjects2[i].getBehavior("Tween").addObjectScaleTween("On", 1.3, 1.3, "swingFromTo", 300, false, true);
}
}}

}


{

gdjs.copyArray(gdjs.NoRecoDataCode.GDElementosEscalablesObjects1, gdjs.NoRecoDataCode.GDElementosEscalablesObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.NoRecoDataCode.GDElementosEscalablesObjects2.length;i<l;++i) {
    if ( gdjs.NoRecoDataCode.GDElementosEscalablesObjects2[i].getScaleY() == 1.3 ) {
        isConditionTrue_0 = true;
        gdjs.NoRecoDataCode.GDElementosEscalablesObjects2[k] = gdjs.NoRecoDataCode.GDElementosEscalablesObjects2[i];
        ++k;
    }
}
gdjs.NoRecoDataCode.GDElementosEscalablesObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.NoRecoDataCode.mapOfGDgdjs_9546NoRecoDataCode_9546GDElementosEscalablesObjects2Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(26783604);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.NoRecoDataCode.GDElementosEscalablesObjects2 */
{for(var i = 0, len = gdjs.NoRecoDataCode.GDElementosEscalablesObjects2.length ;i < len;++i) {
    gdjs.NoRecoDataCode.GDElementosEscalablesObjects2[i].getBehavior("Tween").addObjectScaleTween("Of", 1, 1, "linear", 100, false, true);
}
}}

}


{

/* Reuse gdjs.NoRecoDataCode.GDElementosEscalablesObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.NoRecoDataCode.mapOfGDgdjs_9546NoRecoDataCode_9546GDElementosEscalablesObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.NoRecoDataCode.GDElementosEscalablesObjects1.length;i<l;++i) {
    if ( gdjs.NoRecoDataCode.GDElementosEscalablesObjects1[i].getScaleY() >= 1 ) {
        isConditionTrue_0 = true;
        gdjs.NoRecoDataCode.GDElementosEscalablesObjects1[k] = gdjs.NoRecoDataCode.GDElementosEscalablesObjects1[i];
        ++k;
    }
}
gdjs.NoRecoDataCode.GDElementosEscalablesObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(26785884);
}
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.NoRecoDataCode.eventsList7(runtimeScene);} //End of subevents
}

}


};gdjs.NoRecoDataCode.eventsList9 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(26779036);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ElementosEscalables"), gdjs.NoRecoDataCode.GDElementosEscalablesObjects2);
{for(var i = 0, len = gdjs.NoRecoDataCode.GDElementosEscalablesObjects2.length ;i < len;++i) {
    gdjs.NoRecoDataCode.GDElementosEscalablesObjects2[i].getBehavior("Tween").addObjectOpacityTween("Thumb2", 255, "linear", 200, false);
}
}
{ //Subevents
gdjs.NoRecoDataCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ElementosEscalables"), gdjs.NoRecoDataCode.GDElementosEscalablesObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.NoRecoDataCode.GDElementosEscalablesObjects1.length;i<l;++i) {
    if ( gdjs.NoRecoDataCode.GDElementosEscalablesObjects1[i].getAnimation() == 2 ) {
        isConditionTrue_0 = true;
        gdjs.NoRecoDataCode.GDElementosEscalablesObjects1[k] = gdjs.NoRecoDataCode.GDElementosEscalablesObjects1[i];
        ++k;
    }
}
gdjs.NoRecoDataCode.GDElementosEscalablesObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.NoRecoDataCode.eventsList8(runtimeScene);} //End of subevents
}

}


};gdjs.NoRecoDataCode.eventsList10 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(26764260);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ElementosEscalables"), gdjs.NoRecoDataCode.GDElementosEscalablesObjects1);
gdjs.copyArray(runtimeScene.getObjects("WhereIsMyHeadLogo"), gdjs.NoRecoDataCode.GDWhereIsMyHeadLogoObjects1);
{runtimeScene.getScene().getVariables().get("User").getChild("Donde_Vives").setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("User").getChild("Donde_Vives")));
}{runtimeScene.getScene().getVariables().get("User").getChild("Edad").setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("User").getChild("Edad")));
}{runtimeScene.getScene().getVariables().get("User").getChild("Raza").setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("User").getChild("Raza")));
}{runtimeScene.getScene().getVariables().get("User").getChild("Generos").setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("User").getChild("Generos")));
}{runtimeScene.getScene().getVariables().get("User").getChild("ActividadActual").setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("User").getChild("ActividadActual")));
}{runtimeScene.getScene().getVariables().get("User").getChild("ComoTeDiviertes").setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("User").getChild("ComoTeDiviertes")));
}{runtimeScene.getScene().getVariables().get("User").getChild("TeHaDolidoLaCabeza").setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("User").getChild("TeHaDolidoLaCabeza")));
}{runtimeScene.getScene().getVariables().get("User").getChild("TienesMenosHambre").setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("User").getChild("TienesMenosHambre")));
}{runtimeScene.getScene().getVariables().get("User").getChild("PuedesDormirBien").setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("User").getChild("PuedesDormirBien")));
}{runtimeScene.getScene().getVariables().get("User").getChild("TeHasAsustado").setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("User").getChild("TeHasAsustado")));
}{runtimeScene.getScene().getVariables().get("User").getChild("FrecuenciaPedirConsejo").setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("User").getChild("FrecuenciaPedirConsejo")));
}{runtimeScene.getScene().getVariables().get("User").getChild("IdentificasLaMayorParteDelTiempo").setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("User").getChild("IdentificasLaMayorParteDelTiempo")));
}{runtimeScene.getScene().getVariables().get("User").getChild("TuEn10Años").setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("User").getChild("TuEn10Años")));
}{runtimeScene.getScene().getVariables().get("User").getChild("Funeral_QueDiriaTuProfe_Jefe").setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("User").getChild("Funeral_QueDiriaTuProfe_Jefe")));
}{runtimeScene.getScene().getVariables().get("User").getChild("Funeral_QueDiriaTuMama").setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("User").getChild("Funeral_QueDiriaTuMama")));
}{runtimeScene.getScene().getVariables().get("User").getChild("Funeral_QueDiriaTuPapa").setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("User").getChild("Funeral_QueDiriaTuPapa")));
}{runtimeScene.getScene().getVariables().get("User").getChild("Funeral_QueDiriaTusAmigos").setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("User").getChild("Funeral_QueDiriaTusAmigos")));
}{runtimeScene.getScene().getVariables().get("User").getChild("Funeral_QueDiriaTuAmorcito").setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("User").getChild("Funeral_QueDiriaTuAmorcito")));
}{runtimeScene.getScene().getVariables().get("User").getChild("CuandoVeoAlguienEnProblemas").setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("User").getChild("CuandoVeoAlguienEnProblemas")));
}{runtimeScene.getScene().getVariables().get("User").getChild("PanaInfluencer1").setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("User").getChild("PanaInfluencer1")));
}{runtimeScene.getScene().getVariables().get("User").getChild("PanaInfluencer2").setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("User").getChild("PanaInfluencer2")));
}{runtimeScene.getScene().getVariables().get("User").getChild("PanaInfluencer3").setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("User").getChild("PanaInfluencer3")));
}{runtimeScene.getScene().getVariables().get("User").getChild("CuandoEstasDiscutiendo").setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("User").getChild("CuandoEstasDiscutiendo")));
}{runtimeScene.getScene().getVariables().get("User").getChild("DondeTeSientesMejor").setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("User").getChild("DondeTeSientesMejor")));
}{runtimeScene.getScene().getVariables().get("User").getChild("SiTePasaAlgoBuenoAQuienLeCuentasPrimero").setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("User").getChild("SiTePasaAlgoBuenoAQuienLeCuentasPrimero")));
}{runtimeScene.getScene().getVariables().get("User").getChild("YSiTePasaAlgoMalo").setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("User").getChild("YSiTePasaAlgoMalo")));
}{runtimeScene.getScene().getVariables().get("User").getChild("EnElEstudio_TrabajoEres").setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("User").getChild("EnElEstudio_TrabajoEres")));
}{runtimeScene.getScene().getVariables().get("User").getChild("EnTuCasaEres").setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("User").getChild("EnTuCasaEres")));
}{runtimeScene.getScene().getVariables().get("User").getChild("CuandoMeEnfrentoALosProblemas").setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("User").getChild("CuandoMeEnfrentoALosProblemas")));
}{runtimeScene.getScene().getVariables().get("User").getChild("TeCuestaTomarDesicionesSimples").setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("User").getChild("TeCuestaTomarDesicionesSimples")));
}{runtimeScene.getScene().getVariables().get("User").getChild("QueHacesParaResolverProblemasEnElColegio_Trabajo").setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("User").getChild("QueHacesParaResolverProblemasEnElColegio_Trabajo")));
}{runtimeScene.getScene().getVariables().get("User").getChild("CuandoTienesLiosEnCasa").setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("User").getChild("CuandoTienesLiosEnCasa")));
}{runtimeScene.getScene().getVariables().get("User").getChild("EnLosProblemasConPanas").setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("User").getChild("EnLosProblemasConPanas")));
}{runtimeScene.getScene().getVariables().get("User").getChild("LoPeorDeDondeEstudias_Trabajas").setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("User").getChild("LoPeorDeDondeEstudias_Trabajas")));
}{runtimeScene.getScene().getVariables().get("User").getChild("MayorProblemaDeCasa").setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("User").getChild("MayorProblemaDeCasa")));
}{runtimeScene.getScene().getVariables().get("User").getChild("QueTeEstorbaAlEstarConPanas").setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("User").getChild("QueTeEstorbaAlEstarConPanas")));
}{runtimeScene.getScene().getVariables().get("User").getChild("QueHacesParaSentirteBien").setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("User").getChild("QueHacesParaSentirteBien")));
}{runtimeScene.getScene().getVariables().get("User").getChild("QueTeMantieneConVida").setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("User").getChild("QueTeMantieneConVida")));
}{runtimeScene.getScene().getVariables().get("User").getChild("TeAdaptadasALosCambios").setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("User").getChild("TeAdaptadasALosCambios")));
}{runtimeScene.getScene().getVariables().get("User").getChild("SecretoParaEnfrentarProblemas").setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("User").getChild("SecretoParaEnfrentarProblemas")));
}{runtimeScene.getScene().getVariables().get("User").getChild("DespuesDeLaTormentaMeSiento").setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("User").getChild("DespuesDeLaTormentaMeSiento")));
}{runtimeScene.getScene().getVariables().get("User").getChild("EsDificilDisfrutarActividadesDiarias").setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("User").getChild("EsDificilDisfrutarActividadesDiarias")));
}{runtimeScene.getScene().getVariables().get("User").getChild("TeHasSentidoInutil").setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("User").getChild("TeHasSentidoInutil")));
}{runtimeScene.getScene().getVariables().get("User").getChild("LograrObjetivosAPesarObstaculos").setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("User").getChild("LograrObjetivosAPesarObstaculos")));
}{for(var i = 0, len = gdjs.NoRecoDataCode.GDWhereIsMyHeadLogoObjects1.length ;i < len;++i) {
    gdjs.NoRecoDataCode.GDWhereIsMyHeadLogoObjects1[i].getBehavior("Tween").addObjectScaleTween("Thumb", 0.5, 0.5, "linear", 1, false, true);
}
}{for(var i = 0, len = gdjs.NoRecoDataCode.GDElementosEscalablesObjects1.length ;i < len;++i) {
    gdjs.NoRecoDataCode.GDElementosEscalablesObjects1[i].getBehavior("Tween").addObjectScaleTween("Thumb", 0.5, 0.5, "linear", 1, false, true);
}
}{for(var i = 0, len = gdjs.NoRecoDataCode.GDElementosEscalablesObjects1.length ;i < len;++i) {
    gdjs.NoRecoDataCode.GDElementosEscalablesObjects1[i].setOpacity(0);
}
}
{ //Subevents
gdjs.NoRecoDataCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("Estado")) == "ok";
if (isConditionTrue_0) {

{ //Subevents
gdjs.NoRecoDataCode.eventsList9(runtimeScene);} //End of subevents
}

}


};

gdjs.NoRecoDataCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.NoRecoDataCode.GDElementosEscalablesObjects1.length = 0;
gdjs.NoRecoDataCode.GDElementosEscalablesObjects2.length = 0;
gdjs.NoRecoDataCode.GDElementosEscalablesObjects3.length = 0;
gdjs.NoRecoDataCode.GDElementosEscalablesObjects4.length = 0;
gdjs.NoRecoDataCode.GDWhereIsMyHeadLogoObjects1.length = 0;
gdjs.NoRecoDataCode.GDWhereIsMyHeadLogoObjects2.length = 0;
gdjs.NoRecoDataCode.GDWhereIsMyHeadLogoObjects3.length = 0;
gdjs.NoRecoDataCode.GDWhereIsMyHeadLogoObjects4.length = 0;

gdjs.NoRecoDataCode.eventsList10(runtimeScene);
gdjs.NoRecoDataCode.GDElementosEscalablesObjects1.length = 0;
gdjs.NoRecoDataCode.GDElementosEscalablesObjects2.length = 0;
gdjs.NoRecoDataCode.GDElementosEscalablesObjects3.length = 0;
gdjs.NoRecoDataCode.GDElementosEscalablesObjects4.length = 0;
gdjs.NoRecoDataCode.GDWhereIsMyHeadLogoObjects1.length = 0;
gdjs.NoRecoDataCode.GDWhereIsMyHeadLogoObjects2.length = 0;
gdjs.NoRecoDataCode.GDWhereIsMyHeadLogoObjects3.length = 0;
gdjs.NoRecoDataCode.GDWhereIsMyHeadLogoObjects4.length = 0;


return;

}

gdjs['NoRecoDataCode'] = gdjs.NoRecoDataCode;
