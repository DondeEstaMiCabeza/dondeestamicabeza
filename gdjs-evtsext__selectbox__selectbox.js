
gdjs.evtsExt__SelectBox__SelectBox = gdjs.evtsExt__SelectBox__SelectBox || {};

/**
 * Object generated from SelectBox
 */
gdjs.evtsExt__SelectBox__SelectBox.SelectBox = class SelectBox extends gdjs.CustomRuntimeObject2D {
  constructor(parentInstanceContainer, objectData) {
    super(parentInstanceContainer, objectData);
    this._parentInstanceContainer = parentInstanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._objectData = {};
    
    this._objectData.Options = objectData.content.Options !== undefined ? objectData.content.Options : "[\"option 1\", \"option 2\"]";
    this._objectData.isOpen = false;
    this._objectData.wasChanged = false;
    this._objectData.selectedValue = "";
    this._objectData.Draw_Background = objectData.content.Draw_Background !== undefined ? objectData.content.Draw_Background : true;
    this._objectData.Border_padding = objectData.content.Border_padding !== undefined ? objectData.content.Border_padding : Number("5") || 0;
    

    // It calls the onCreated super implementation at the end.
    this.onCreated();
  }

  // Hot-reload:
  updateFromObjectData(oldObjectData, newObjectData) {
    super.updateFromObjectData(oldObjectData, newObjectData);
    if (oldObjectData.content.Options !== newObjectData.content.Options)
      this._objectData.Options = newObjectData.content.Options;
    if (oldObjectData.content.isOpen !== newObjectData.content.isOpen)
      this._objectData.isOpen = newObjectData.content.isOpen;
    if (oldObjectData.content.wasChanged !== newObjectData.content.wasChanged)
      this._objectData.wasChanged = newObjectData.content.wasChanged;
    if (oldObjectData.content.selectedValue !== newObjectData.content.selectedValue)
      this._objectData.selectedValue = newObjectData.content.selectedValue;
    if (oldObjectData.content.Draw_Background !== newObjectData.content.Draw_Background)
      this._objectData.Draw_Background = newObjectData.content.Draw_Background;
    if (oldObjectData.content.Border_padding !== newObjectData.content.Border_padding)
      this._objectData.Border_padding = newObjectData.content.Border_padding;

    this.onHotReloading(this._parentInstanceContainer);
    return true;
  }

  // Properties:
  
  _getOptions() {
    return this._objectData.Options !== undefined ? this._objectData.Options : "[\"option 1\", \"option 2\"]";
  }
  _setOptions(newValue) {
    this._objectData.Options = newValue;
  }
  _getisOpen() {
    return this._objectData.isOpen !== undefined ? this._objectData.isOpen : false;
  }
  _setisOpen(newValue) {
    this._objectData.isOpen = newValue;
  }
  _toggleisOpen() {
    this._setisOpen(!this._getisOpen());
  }
  _getwasChanged() {
    return this._objectData.wasChanged !== undefined ? this._objectData.wasChanged : false;
  }
  _setwasChanged(newValue) {
    this._objectData.wasChanged = newValue;
  }
  _togglewasChanged() {
    this._setwasChanged(!this._getwasChanged());
  }
  _getselectedValue() {
    return this._objectData.selectedValue !== undefined ? this._objectData.selectedValue : "";
  }
  _setselectedValue(newValue) {
    this._objectData.selectedValue = newValue;
  }
  _getDraw_Background() {
    return this._objectData.Draw_Background !== undefined ? this._objectData.Draw_Background : true;
  }
  _setDraw_Background(newValue) {
    this._objectData.Draw_Background = newValue;
  }
  _toggleDraw_Background() {
    this._setDraw_Background(!this._getDraw_Background());
  }
  _getBorder_padding() {
    return this._objectData.Border_padding !== undefined ? this._objectData.Border_padding : Number("5") || 0;
  }
  _setBorder_padding(newValue) {
    this._objectData.Border_padding = newValue;
  }

  

  
}

// Methods:
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.onCreatedContext = {};
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.onCreatedContext.GDObjectObjects1= [];
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.onCreatedContext.GDObjectObjects2= [];
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.onCreatedContext.GDSelectBoxObjects1= [];
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.onCreatedContext.GDSelectBoxObjects2= [];
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.onCreatedContext.GDSelectOptionObjects1= [];
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.onCreatedContext.GDSelectOptionObjects2= [];
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.onCreatedContext.GDBgShapePainterObjects1= [];
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.onCreatedContext.GDBgShapePainterObjects2= [];


gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.onCreatedContext.mapOfGDgdjs_9546evtsExt_9595_9595SelectBox_9595_9595SelectBox_9546SelectBox_9546prototype_9546onCreatedContext_9546GDBgShapePainterObjects1Objects = Hashtable.newFrom({"BgShapePainter": gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.onCreatedContext.GDBgShapePainterObjects1});
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.onCreatedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.onCreatedContext.GDObjectObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("SelectBox"), gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.onCreatedContext.GDSelectBoxObjects1);
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.onCreatedContext.GDBgShapePainterObjects1.length = 0;

{gdjs.evtTools.network.jsonToObjectVariableStructure((( gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.onCreatedContext.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.onCreatedContext.GDObjectObjects1[0]._getOptions()), (gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.onCreatedContext.GDSelectBoxObjects1.length !== 0 ? gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.onCreatedContext.GDSelectBoxObjects1[0] : null), ((gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.onCreatedContext.GDSelectBoxObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.onCreatedContext.GDSelectBoxObjects1[0].getVariables()).get("options"));
}{for(var i = 0, len = gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.onCreatedContext.GDSelectBoxObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.onCreatedContext.GDSelectBoxObjects1[i].returnVariable(gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.onCreatedContext.GDSelectBoxObjects1[i].getVariables().get("value")).setString((gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.onCreatedContext.GDSelectBoxObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Text")).getText()));
}
}{for(var i = 0, len = gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.onCreatedContext.GDSelectBoxObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.onCreatedContext.GDSelectBoxObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Text")).setText(gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.onCreatedContext.GDSelectBoxObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Text")).getText() + (" ▼"));
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.onCreatedContext.mapOfGDgdjs_9546evtsExt_9595_9595SelectBox_9595_9595SelectBox_9546SelectBox_9546prototype_9546onCreatedContext_9546GDBgShapePainterObjects1Objects, (( gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.onCreatedContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.onCreatedContext.GDObjectObjects1[0].getX()), (( gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.onCreatedContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.onCreatedContext.GDObjectObjects1[0].getY()), (( gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.onCreatedContext.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.onCreatedContext.GDObjectObjects1[0].getLayer()));
}{for(var i = 0, len = gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.onCreatedContext.GDBgShapePainterObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.onCreatedContext.GDBgShapePainterObjects1[i].setZOrder((( gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.onCreatedContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.onCreatedContext.GDObjectObjects1[0].getZOrder()));
}
}{for(var i = 0, len = gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.onCreatedContext.GDSelectBoxObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.onCreatedContext.GDSelectBoxObjects1[i].setZOrder((( gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.onCreatedContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.onCreatedContext.GDObjectObjects1[0].getZOrder()) + 1);
}
}{for(var i = 0, len = gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.onCreatedContext.GDSelectBoxObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.onCreatedContext.GDSelectBoxObjects1[i].hide();
}
}}

}


};

gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.onCreated = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDSelectBoxObjectsList = [...runtimeScene.getObjects("SelectBox")];
var GDSelectBoxObjects = Hashtable.newFrom({"SelectBox": thisGDSelectBoxObjectsList});
var thisGDSelectOptionObjectsList = [...runtimeScene.getObjects("SelectOption")];
var GDSelectOptionObjects = Hashtable.newFrom({"SelectOption": thisGDSelectOptionObjectsList});
var thisGDBgShapePainterObjectsList = [...runtimeScene.getObjects("BgShapePainter")];
var GDBgShapePainterObjects = Hashtable.newFrom({"BgShapePainter": thisGDBgShapePainterObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "SelectBox": GDSelectBoxObjects
, "SelectOption": GDSelectOptionObjects
, "BgShapePainter": GDBgShapePainterObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "SelectBox": thisGDSelectBoxObjectsList
, "SelectOption": thisGDSelectOptionObjectsList
, "BgShapePainter": thisGDBgShapePainterObjectsList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("SelectBox"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("SelectBox"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.onCreatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.onCreatedContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.onCreatedContext.GDSelectBoxObjects1.length = 0;
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.onCreatedContext.GDSelectBoxObjects2.length = 0;
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.onCreatedContext.GDSelectOptionObjects1.length = 0;
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.onCreatedContext.GDSelectOptionObjects2.length = 0;
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.onCreatedContext.GDBgShapePainterObjects1.length = 0;
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.onCreatedContext.GDBgShapePainterObjects2.length = 0;

gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.onCreatedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.onCreatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.onCreatedContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.onCreatedContext.GDSelectBoxObjects1.length = 0;
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.onCreatedContext.GDSelectBoxObjects2.length = 0;
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.onCreatedContext.GDSelectOptionObjects1.length = 0;
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.onCreatedContext.GDSelectOptionObjects2.length = 0;
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.onCreatedContext.GDBgShapePainterObjects1.length = 0;
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.onCreatedContext.GDBgShapePainterObjects2.length = 0;

gdjs.CustomRuntimeObject.prototype.onCreated.call(this);

return;
}
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext = {};
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDObjectObjects2= [];
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDObjectObjects3= [];
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDObjectObjects4= [];
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDObjectObjects5= [];
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDSelectBoxObjects1= [];
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDSelectBoxObjects2= [];
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDSelectBoxObjects3= [];
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDSelectBoxObjects4= [];
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDSelectBoxObjects5= [];
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDSelectOptionObjects1= [];
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDSelectOptionObjects2= [];
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDSelectOptionObjects3= [];
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDSelectOptionObjects4= [];
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDSelectOptionObjects5= [];
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDBgShapePainterObjects1= [];
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDBgShapePainterObjects2= [];
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDBgShapePainterObjects3= [];
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDBgShapePainterObjects4= [];
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDBgShapePainterObjects5= [];


gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.mapOfGDgdjs_9546evtsExt_9595_9595SelectBox_9595_9595SelectBox_9546SelectBox_9546prototype_9546doStepPostEventsContext_9546GDSelectOptionObjects3Objects = Hashtable.newFrom({"SelectOption": gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDSelectOptionObjects3});
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDSelectBoxObjects3, gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDSelectBoxObjects4);

gdjs.copyArray(gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDSelectOptionObjects3, gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDSelectOptionObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDSelectOptionObjects4.length === 0 ) ? 0 :gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDSelectOptionObjects4[0].getWidth()) > ((gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDSelectBoxObjects4.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDSelectBoxObjects4[0].getVariables()).get("maxWidth").getAsNumber());
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDSelectBoxObjects4 */
/* Reuse gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDSelectOptionObjects4 */
{for(var i = 0, len = gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDSelectBoxObjects4.length ;i < len;++i) {
    gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDSelectBoxObjects4[i].returnVariable(gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDSelectBoxObjects4[i].getVariables().get("maxWidth")).setNumber((( gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDSelectOptionObjects4.length === 0 ) ? 0 :gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDSelectOptionObjects4[0].getWidth()));
}
}}

}


};gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


const valueIteratorReference3 = runtimeScene.getScene().getVariables().get("option");
const iterableReference3 = eventsFunctionContext.localVariables[0].getFromIndex(0);
if(!iterableReference3.isPrimitive()) {
for(
    const iteratorKey3 in 
    iterableReference3.getType() === "structure"
      ? iterableReference3.getAllChildren()
      : iterableReference3.getType() === "array"
        ? iterableReference3.getAllChildrenArray()
        : []
) {
    const structureChildVariable3 = iterableReference3.getChild(iteratorKey3)
    valueIteratorReference3.castTo(structureChildVariable3.getType())
    if(structureChildVariable3.isPrimitive()) {
        valueIteratorReference3.setValue(structureChildVariable3.getValue());
    } else if (structureChildVariable3.getType() === "structure") {
        // Structures are passed by reference like JS objects
        valueIteratorReference3.replaceChildren(structureChildVariable3.getAllChildren());
    } else if (structureChildVariable3.getType() === "array") {
        // Arrays are passed by reference like JS objects
        valueIteratorReference3.replaceChildrenArray(structureChildVariable3.getAllChildrenArray());
    } else console.warn("Cannot identify type: ", type);
gdjs.copyArray(gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDObjectObjects1, gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDObjectObjects3);

gdjs.copyArray(gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDSelectBoxObjects1, gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDSelectBoxObjects3);

gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDSelectOptionObjects3.length = 0;


let isConditionTrue_0 = false;
if (true)
{
{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.mapOfGDgdjs_9546evtsExt_9595_9595SelectBox_9595_9595SelectBox_9546SelectBox_9546prototype_9546doStepPostEventsContext_9546GDSelectOptionObjects3Objects, (( gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDSelectBoxObjects3.length === 0 ) ? 0 :gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDSelectBoxObjects3[0].getX()), (( gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDSelectBoxObjects3.length === 0 ) ? 0 :gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDSelectBoxObjects3[0].getY()) + (( gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDSelectBoxObjects3.length === 0 ) ? 0 :gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDSelectBoxObjects3[0].getHeight()) * (eventsFunctionContext.localVariables[0].getFromIndex(1).getAsNumber() + 1), "");
}{for(var i = 0, len = gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDSelectOptionObjects3.length ;i < len;++i) {
    gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDSelectOptionObjects3[i].setZOrder((( gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDObjectObjects3[0].getZOrder()) + 1);
}
}{for(var i = 0, len = gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDSelectOptionObjects3.length ;i < len;++i) {
    gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDSelectOptionObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Text")).setText(eventsFunctionContext.localVariables[0].getFromIndex(0).getChild(eventsFunctionContext.localVariables[0].getFromIndex(1).getAsNumber()).getAsString());
}
}{for(var i = 0, len = gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDSelectOptionObjects3.length ;i < len;++i) {
    gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDSelectOptionObjects3[i].returnVariable(gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDSelectOptionObjects3[i].getVariables().get("value")).setString(eventsFunctionContext.localVariables[0].getFromIndex(0).getChild(eventsFunctionContext.localVariables[0].getFromIndex(1).getAsNumber()).getAsString());
}
}{for(var i = 0, len = gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDSelectOptionObjects3.length ;i < len;++i) {
    gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDSelectOptionObjects3[i].setPosition((( gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDSelectBoxObjects3.length === 0 ) ? 0 :gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDSelectBoxObjects3[0].getX()),(( gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDSelectBoxObjects3.length === 0 ) ? 0 :gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDSelectBoxObjects3[0].getY()) + ((gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDSelectOptionObjects3[i].getHeight()) * (eventsFunctionContext.localVariables[0].getFromIndex(1).getAsNumber() + 1)));
}
}{for(var i = 0, len = gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDSelectBoxObjects3.length ;i < len;++i) {
    gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDSelectBoxObjects3[i].returnVariable(gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDSelectBoxObjects3[i].getVariables().get("maxHeight")).add((( gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDSelectOptionObjects3.length === 0 ) ? 0 :gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDSelectOptionObjects3[0].getHeight()));
}
}{eventsFunctionContext.localVariables[0].getFromIndex(1).add(1);
}
{ //Subevents: 
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.eventsList0(runtimeScene, eventsFunctionContext);} //Subevents end.
}
}
}

}


{


let isConditionTrue_0 = false;
{
}

}


};gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.mapOfGDgdjs_9546evtsExt_9595_9595SelectBox_9595_9595SelectBox_9546SelectBox_9546prototype_9546doStepPostEventsContext_9546GDSelectOptionObjects1Objects = Hashtable.newFrom({"SelectOption": gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDSelectOptionObjects1});
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
/* Reuse gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDObjectObjects1 */
gdjs.copyArray(eventsFunctionContext.getObjects("SelectBox"), gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDSelectBoxObjects1);
/* Reuse gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDSelectOptionObjects1 */
{for(var i = 0, len = gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDSelectBoxObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDSelectBoxObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Text")).setText(((gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDSelectOptionObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDSelectOptionObjects1[0].getVariables()).get("value").getAsString() + " ▼");
}
}{for(var i = 0, len = gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDObjectObjects1[i]._setselectedValue(((gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDSelectOptionObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDSelectOptionObjects1[0].getVariables()).get("value").getAsString());
}
}{for(var i = 0, len = gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDObjectObjects1[i]._setwasChanged(true);
}
}}

}


};gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.eventsList3 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtsExt__SwipeGesture__DistanceY.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDObjectObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDObjectObjects1.length = k;
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.eventsList2(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.mapOfGDgdjs_9546evtsExt_9595_9595SelectBox_9595_9595SelectBox_9546SelectBox_9546prototype_9546doStepPostEventsContext_9546GDSelectOptionObjects1Objects = Hashtable.newFrom({"SelectOption": gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDSelectOptionObjects1});
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.eventsList4 = function(runtimeScene, eventsFunctionContext) {

{

/* Reuse gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDObjectObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDObjectObjects1[i]._getisOpen() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDBgShapePainterObjects1 */
/* Reuse gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDObjectObjects1 */
/* Reuse gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDSelectBoxObjects1 */
{for(var i = 0, len = gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDBgShapePainterObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDBgShapePainterObjects1[i].drawRectangle((( gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDSelectBoxObjects1.length === 0 ) ? 0 :gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDSelectBoxObjects1[0].getX()) - (( gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDObjectObjects1[0]._getBorder_padding()), (( gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDSelectBoxObjects1.length === 0 ) ? 0 :gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDSelectBoxObjects1[0].getY()) + (( gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDSelectBoxObjects1.length === 0 ) ? 0 :gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDSelectBoxObjects1[0].getHeight()), (( gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDSelectBoxObjects1.length === 0 ) ? 0 :gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDSelectBoxObjects1[0].getX()) + ((gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDSelectBoxObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDSelectBoxObjects1[0].getVariables()).get("maxWidth").getAsNumber() + 25 + (( gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDObjectObjects1[0]._getBorder_padding()), (( gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDSelectBoxObjects1.length === 0 ) ? 0 :gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDSelectBoxObjects1[0].getY()) + (( gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDSelectBoxObjects1.length === 0 ) ? 0 :gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDSelectBoxObjects1[0].getHeight()) + ((gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDSelectBoxObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDSelectBoxObjects1[0].getVariables()).get("maxHeight").getAsNumber());
}
}}

}


};gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.eventsList5 = function(runtimeScene, eventsFunctionContext) {

{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDObjectObjects1);

{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
variables._declare("options", variable);
}
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("index", variable);
}
eventsFunctionContext.localVariables.push(variables);
}
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDObjectObjects1[i]._getisOpen()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(14719268);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDObjectObjects1 */
gdjs.copyArray(eventsFunctionContext.getObjects("SelectBox"), gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDSelectBoxObjects1);
{gdjs.evtTools.network.jsonToVariableStructure(gdjs.evtTools.network.objectVariableStructureToJSON((gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDSelectBoxObjects1.length !== 0 ? gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDSelectBoxObjects1[0] : null), ((gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDSelectBoxObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDSelectBoxObjects1[0].getVariables()).get("options")), eventsFunctionContext.localVariables[0].getFromIndex(0));
}{for(var i = 0, len = gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDObjectObjects1[i]._setisOpen(true);
}
}{for(var i = 0, len = gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDSelectBoxObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDSelectBoxObjects1[i].returnVariable(gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDSelectBoxObjects1[i].getVariables().get("maxWidth")).setNumber(0);
}
}{for(var i = 0, len = gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDSelectBoxObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDSelectBoxObjects1[i].returnVariable(gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDSelectBoxObjects1[i].getVariables().get("maxHeight")).setNumber(0);
}
}
{ //Subevents
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}
eventsFunctionContext.localVariables.pop();

}


{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("SelectOption"), gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDSelectOptionObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.mapOfGDgdjs_9546evtsExt_9595_9595SelectBox_9595_9595SelectBox_9546SelectBox_9546prototype_9546doStepPostEventsContext_9546GDSelectOptionObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDSelectOptionObjects1 */
{for(var i = 0, len = gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDSelectOptionObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDSelectOptionObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Text")).setText("▶ " + gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDSelectOptionObjects1[i].getVariables().get("value").getAsString());
}
}
{ //Subevents
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.eventsList3(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("SelectOption"), gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDSelectOptionObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.mapOfGDgdjs_9546evtsExt_9595_9595SelectBox_9595_9595SelectBox_9546SelectBox_9546prototype_9546doStepPostEventsContext_9546GDSelectOptionObjects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDSelectOptionObjects1 */
{for(var i = 0, len = gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDSelectOptionObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDSelectOptionObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Text")).setText(gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDSelectOptionObjects1[i].getVariables().get("value").getAsString());
}
}}

}


{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDObjectObjects1[i]._getDraw_Background() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("BgShapePainter"), gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDBgShapePainterObjects1);
/* Reuse gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDObjectObjects1 */
gdjs.copyArray(eventsFunctionContext.getObjects("SelectBox"), gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDSelectBoxObjects1);
{for(var i = 0, len = gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDBgShapePainterObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDBgShapePainterObjects1[i].drawRectangle((( gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDSelectBoxObjects1.length === 0 ) ? 0 :gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDSelectBoxObjects1[0].getX()) - (( gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDObjectObjects1[0]._getBorder_padding()), (( gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDSelectBoxObjects1.length === 0 ) ? 0 :gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDSelectBoxObjects1[0].getY()), (( gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDSelectBoxObjects1.length === 0 ) ? 0 :gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDSelectBoxObjects1[0].getX()) + (( gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDSelectBoxObjects1.length === 0 ) ? 0 :gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDSelectBoxObjects1[0].getWidth()) + (( gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDObjectObjects1[0]._getBorder_padding()), (( gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDSelectBoxObjects1.length === 0 ) ? 0 :gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDSelectBoxObjects1[0].getY()) + (( gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDSelectBoxObjects1.length === 0 ) ? 0 :gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDSelectBoxObjects1[0].getHeight()));
}
}
{ //Subevents
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.eventsList4(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEvents = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDSelectBoxObjectsList = [...runtimeScene.getObjects("SelectBox")];
var GDSelectBoxObjects = Hashtable.newFrom({"SelectBox": thisGDSelectBoxObjectsList});
var thisGDSelectOptionObjectsList = [...runtimeScene.getObjects("SelectOption")];
var GDSelectOptionObjects = Hashtable.newFrom({"SelectOption": thisGDSelectOptionObjectsList});
var thisGDBgShapePainterObjectsList = [...runtimeScene.getObjects("BgShapePainter")];
var GDBgShapePainterObjects = Hashtable.newFrom({"BgShapePainter": thisGDBgShapePainterObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "SelectBox": GDSelectBoxObjects
, "SelectOption": GDSelectOptionObjects
, "BgShapePainter": GDBgShapePainterObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "SelectBox": thisGDSelectBoxObjectsList
, "SelectOption": thisGDSelectOptionObjectsList
, "BgShapePainter": thisGDBgShapePainterObjectsList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("SelectBox"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("SelectBox"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDObjectObjects4.length = 0;
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDObjectObjects5.length = 0;
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDSelectBoxObjects1.length = 0;
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDSelectBoxObjects2.length = 0;
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDSelectBoxObjects3.length = 0;
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDSelectBoxObjects4.length = 0;
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDSelectBoxObjects5.length = 0;
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDSelectOptionObjects1.length = 0;
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDSelectOptionObjects2.length = 0;
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDSelectOptionObjects3.length = 0;
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDSelectOptionObjects4.length = 0;
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDSelectOptionObjects5.length = 0;
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDBgShapePainterObjects1.length = 0;
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDBgShapePainterObjects2.length = 0;
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDBgShapePainterObjects3.length = 0;
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDBgShapePainterObjects4.length = 0;
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDBgShapePainterObjects5.length = 0;

gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.eventsList5(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDObjectObjects4.length = 0;
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDObjectObjects5.length = 0;
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDSelectBoxObjects1.length = 0;
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDSelectBoxObjects2.length = 0;
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDSelectBoxObjects3.length = 0;
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDSelectBoxObjects4.length = 0;
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDSelectBoxObjects5.length = 0;
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDSelectOptionObjects1.length = 0;
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDSelectOptionObjects2.length = 0;
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDSelectOptionObjects3.length = 0;
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDSelectOptionObjects4.length = 0;
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDSelectOptionObjects5.length = 0;
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDBgShapePainterObjects1.length = 0;
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDBgShapePainterObjects2.length = 0;
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDBgShapePainterObjects3.length = 0;
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDBgShapePainterObjects4.length = 0;
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPostEventsContext.GDBgShapePainterObjects5.length = 0;


return;
}
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.setSelectedValueContext = {};
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.setSelectedValueContext.GDObjectObjects1= [];
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.setSelectedValueContext.GDObjectObjects2= [];
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.setSelectedValueContext.GDSelectBoxObjects1= [];
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.setSelectedValueContext.GDSelectBoxObjects2= [];
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.setSelectedValueContext.GDSelectOptionObjects1= [];
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.setSelectedValueContext.GDSelectOptionObjects2= [];
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.setSelectedValueContext.GDBgShapePainterObjects1= [];
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.setSelectedValueContext.GDBgShapePainterObjects2= [];


gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.setSelectedValueContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.setSelectedValueContext.GDObjectObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("SelectBox"), gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.setSelectedValueContext.GDSelectBoxObjects1);
{for(var i = 0, len = gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.setSelectedValueContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.setSelectedValueContext.GDObjectObjects1[i]._setselectedValue(eventsFunctionContext.getArgument("value"));
}
}{for(var i = 0, len = gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.setSelectedValueContext.GDSelectBoxObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.setSelectedValueContext.GDSelectBoxObjects1[i].returnVariable(gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.setSelectedValueContext.GDSelectBoxObjects1[i].getVariables().get("value")).setString(eventsFunctionContext.getArgument("value"));
}
}{for(var i = 0, len = gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.setSelectedValueContext.GDSelectBoxObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.setSelectedValueContext.GDSelectBoxObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Text")).setText(eventsFunctionContext.getArgument("value") + " ▼");
}
}}

}


};

gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.setSelectedValue = function(value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDSelectBoxObjectsList = [...runtimeScene.getObjects("SelectBox")];
var GDSelectBoxObjects = Hashtable.newFrom({"SelectBox": thisGDSelectBoxObjectsList});
var thisGDSelectOptionObjectsList = [...runtimeScene.getObjects("SelectOption")];
var GDSelectOptionObjects = Hashtable.newFrom({"SelectOption": thisGDSelectOptionObjectsList});
var thisGDBgShapePainterObjectsList = [...runtimeScene.getObjects("BgShapePainter")];
var GDBgShapePainterObjects = Hashtable.newFrom({"BgShapePainter": thisGDBgShapePainterObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "SelectBox": GDSelectBoxObjects
, "SelectOption": GDSelectOptionObjects
, "BgShapePainter": GDBgShapePainterObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "SelectBox": thisGDSelectBoxObjectsList
, "SelectOption": thisGDSelectOptionObjectsList
, "BgShapePainter": thisGDBgShapePainterObjectsList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("SelectBox"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("SelectBox"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "value") return value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.setSelectedValueContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.setSelectedValueContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.setSelectedValueContext.GDSelectBoxObjects1.length = 0;
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.setSelectedValueContext.GDSelectBoxObjects2.length = 0;
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.setSelectedValueContext.GDSelectOptionObjects1.length = 0;
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.setSelectedValueContext.GDSelectOptionObjects2.length = 0;
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.setSelectedValueContext.GDBgShapePainterObjects1.length = 0;
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.setSelectedValueContext.GDBgShapePainterObjects2.length = 0;

gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.setSelectedValueContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.setSelectedValueContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.setSelectedValueContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.setSelectedValueContext.GDSelectBoxObjects1.length = 0;
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.setSelectedValueContext.GDSelectBoxObjects2.length = 0;
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.setSelectedValueContext.GDSelectOptionObjects1.length = 0;
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.setSelectedValueContext.GDSelectOptionObjects2.length = 0;
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.setSelectedValueContext.GDBgShapePainterObjects1.length = 0;
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.setSelectedValueContext.GDBgShapePainterObjects2.length = 0;


return;
}
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.getSelectedValueContext = {};
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.getSelectedValueContext.GDObjectObjects1= [];
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.getSelectedValueContext.GDObjectObjects2= [];
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.getSelectedValueContext.GDSelectBoxObjects1= [];
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.getSelectedValueContext.GDSelectBoxObjects2= [];
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.getSelectedValueContext.GDSelectOptionObjects1= [];
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.getSelectedValueContext.GDSelectOptionObjects2= [];
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.getSelectedValueContext.GDBgShapePainterObjects1= [];
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.getSelectedValueContext.GDBgShapePainterObjects2= [];


gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.getSelectedValueContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.getSelectedValueContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.getSelectedValueContext.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.getSelectedValueContext.GDObjectObjects1[0]._getselectedValue()); }}}

}


};

gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.getSelectedValue = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDSelectBoxObjectsList = [...runtimeScene.getObjects("SelectBox")];
var GDSelectBoxObjects = Hashtable.newFrom({"SelectBox": thisGDSelectBoxObjectsList});
var thisGDSelectOptionObjectsList = [...runtimeScene.getObjects("SelectOption")];
var GDSelectOptionObjects = Hashtable.newFrom({"SelectOption": thisGDSelectOptionObjectsList});
var thisGDBgShapePainterObjectsList = [...runtimeScene.getObjects("BgShapePainter")];
var GDBgShapePainterObjects = Hashtable.newFrom({"BgShapePainter": thisGDBgShapePainterObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "SelectBox": GDSelectBoxObjects
, "SelectOption": GDSelectOptionObjects
, "BgShapePainter": GDBgShapePainterObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "SelectBox": thisGDSelectBoxObjectsList
, "SelectOption": thisGDSelectOptionObjectsList
, "BgShapePainter": thisGDBgShapePainterObjectsList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("SelectBox"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("SelectBox"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.getSelectedValueContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.getSelectedValueContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.getSelectedValueContext.GDSelectBoxObjects1.length = 0;
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.getSelectedValueContext.GDSelectBoxObjects2.length = 0;
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.getSelectedValueContext.GDSelectOptionObjects1.length = 0;
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.getSelectedValueContext.GDSelectOptionObjects2.length = 0;
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.getSelectedValueContext.GDBgShapePainterObjects1.length = 0;
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.getSelectedValueContext.GDBgShapePainterObjects2.length = 0;

gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.getSelectedValueContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.getSelectedValueContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.getSelectedValueContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.getSelectedValueContext.GDSelectBoxObjects1.length = 0;
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.getSelectedValueContext.GDSelectBoxObjects2.length = 0;
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.getSelectedValueContext.GDSelectOptionObjects1.length = 0;
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.getSelectedValueContext.GDSelectOptionObjects2.length = 0;
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.getSelectedValueContext.GDBgShapePainterObjects1.length = 0;
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.getSelectedValueContext.GDBgShapePainterObjects2.length = 0;


return "" + eventsFunctionContext.returnValue;
}
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.isSelectedValueContext = {};
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.isSelectedValueContext.GDObjectObjects1= [];
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.isSelectedValueContext.GDObjectObjects2= [];
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.isSelectedValueContext.GDSelectBoxObjects1= [];
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.isSelectedValueContext.GDSelectBoxObjects2= [];
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.isSelectedValueContext.GDSelectOptionObjects1= [];
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.isSelectedValueContext.GDSelectOptionObjects2= [];
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.isSelectedValueContext.GDBgShapePainterObjects1= [];
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.isSelectedValueContext.GDBgShapePainterObjects2= [];


gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.isSelectedValueContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.isSelectedValueContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("value") : "") == (( gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.isSelectedValueContext.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.isSelectedValueContext.GDObjectObjects1[0]._getselectedValue()));
}
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.isSelectedValue = function(value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDSelectBoxObjectsList = [...runtimeScene.getObjects("SelectBox")];
var GDSelectBoxObjects = Hashtable.newFrom({"SelectBox": thisGDSelectBoxObjectsList});
var thisGDSelectOptionObjectsList = [...runtimeScene.getObjects("SelectOption")];
var GDSelectOptionObjects = Hashtable.newFrom({"SelectOption": thisGDSelectOptionObjectsList});
var thisGDBgShapePainterObjectsList = [...runtimeScene.getObjects("BgShapePainter")];
var GDBgShapePainterObjects = Hashtable.newFrom({"BgShapePainter": thisGDBgShapePainterObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "SelectBox": GDSelectBoxObjects
, "SelectOption": GDSelectOptionObjects
, "BgShapePainter": GDBgShapePainterObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "SelectBox": thisGDSelectBoxObjectsList
, "SelectOption": thisGDSelectOptionObjectsList
, "BgShapePainter": thisGDBgShapePainterObjectsList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("SelectBox"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("SelectBox"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "value") return value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.isSelectedValueContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.isSelectedValueContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.isSelectedValueContext.GDSelectBoxObjects1.length = 0;
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.isSelectedValueContext.GDSelectBoxObjects2.length = 0;
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.isSelectedValueContext.GDSelectOptionObjects1.length = 0;
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.isSelectedValueContext.GDSelectOptionObjects2.length = 0;
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.isSelectedValueContext.GDBgShapePainterObjects1.length = 0;
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.isSelectedValueContext.GDBgShapePainterObjects2.length = 0;

gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.isSelectedValueContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.isSelectedValueContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.isSelectedValueContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.isSelectedValueContext.GDSelectBoxObjects1.length = 0;
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.isSelectedValueContext.GDSelectBoxObjects2.length = 0;
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.isSelectedValueContext.GDSelectOptionObjects1.length = 0;
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.isSelectedValueContext.GDSelectOptionObjects2.length = 0;
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.isSelectedValueContext.GDBgShapePainterObjects1.length = 0;
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.isSelectedValueContext.GDBgShapePainterObjects2.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.addOptionContext = {};
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.addOptionContext.GDObjectObjects1= [];
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.addOptionContext.GDObjectObjects2= [];
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.addOptionContext.GDSelectBoxObjects1= [];
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.addOptionContext.GDSelectBoxObjects2= [];
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.addOptionContext.GDSelectOptionObjects1= [];
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.addOptionContext.GDSelectOptionObjects2= [];
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.addOptionContext.GDBgShapePainterObjects1= [];
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.addOptionContext.GDBgShapePainterObjects2= [];


gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.addOptionContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("SelectBox"), gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.addOptionContext.GDSelectBoxObjects1);
{for(var i = 0, len = gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.addOptionContext.GDSelectBoxObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.addOptionContext.GDSelectBoxObjects1[i].valuePush(gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.addOptionContext.GDSelectBoxObjects1[i].getVariables().get("options"), eventsFunctionContext.getArgument("optionText"));
}
}}

}


};

gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.addOption = function(optionText, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDSelectBoxObjectsList = [...runtimeScene.getObjects("SelectBox")];
var GDSelectBoxObjects = Hashtable.newFrom({"SelectBox": thisGDSelectBoxObjectsList});
var thisGDSelectOptionObjectsList = [...runtimeScene.getObjects("SelectOption")];
var GDSelectOptionObjects = Hashtable.newFrom({"SelectOption": thisGDSelectOptionObjectsList});
var thisGDBgShapePainterObjectsList = [...runtimeScene.getObjects("BgShapePainter")];
var GDBgShapePainterObjects = Hashtable.newFrom({"BgShapePainter": thisGDBgShapePainterObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "SelectBox": GDSelectBoxObjects
, "SelectOption": GDSelectOptionObjects
, "BgShapePainter": GDBgShapePainterObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "SelectBox": thisGDSelectBoxObjectsList
, "SelectOption": thisGDSelectOptionObjectsList
, "BgShapePainter": thisGDBgShapePainterObjectsList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("SelectBox"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("SelectBox"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "optionText") return optionText;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.addOptionContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.addOptionContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.addOptionContext.GDSelectBoxObjects1.length = 0;
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.addOptionContext.GDSelectBoxObjects2.length = 0;
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.addOptionContext.GDSelectOptionObjects1.length = 0;
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.addOptionContext.GDSelectOptionObjects2.length = 0;
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.addOptionContext.GDBgShapePainterObjects1.length = 0;
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.addOptionContext.GDBgShapePainterObjects2.length = 0;

gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.addOptionContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.addOptionContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.addOptionContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.addOptionContext.GDSelectBoxObjects1.length = 0;
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.addOptionContext.GDSelectBoxObjects2.length = 0;
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.addOptionContext.GDSelectOptionObjects1.length = 0;
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.addOptionContext.GDSelectOptionObjects2.length = 0;
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.addOptionContext.GDBgShapePainterObjects1.length = 0;
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.addOptionContext.GDBgShapePainterObjects2.length = 0;


return;
}
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.removeOptionContext = {};
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.removeOptionContext.GDObjectObjects1= [];
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.removeOptionContext.GDObjectObjects2= [];
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.removeOptionContext.GDSelectBoxObjects1= [];
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.removeOptionContext.GDSelectBoxObjects2= [];
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.removeOptionContext.GDSelectOptionObjects1= [];
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.removeOptionContext.GDSelectOptionObjects2= [];
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.removeOptionContext.GDBgShapePainterObjects1= [];
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.removeOptionContext.GDBgShapePainterObjects2= [];


gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.removeOptionContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("SelectBox"), gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.removeOptionContext.GDSelectBoxObjects1);
{for(var i = 0, len = gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.removeOptionContext.GDSelectBoxObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.removeOptionContext.GDSelectBoxObjects1[i].variableRemoveAt(gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.removeOptionContext.GDSelectBoxObjects1[i].getVariables().get("options"), eventsFunctionContext.getArgument("index"));
}
}}

}


};

gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.removeOption = function(index, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDSelectBoxObjectsList = [...runtimeScene.getObjects("SelectBox")];
var GDSelectBoxObjects = Hashtable.newFrom({"SelectBox": thisGDSelectBoxObjectsList});
var thisGDSelectOptionObjectsList = [...runtimeScene.getObjects("SelectOption")];
var GDSelectOptionObjects = Hashtable.newFrom({"SelectOption": thisGDSelectOptionObjectsList});
var thisGDBgShapePainterObjectsList = [...runtimeScene.getObjects("BgShapePainter")];
var GDBgShapePainterObjects = Hashtable.newFrom({"BgShapePainter": thisGDBgShapePainterObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "SelectBox": GDSelectBoxObjects
, "SelectOption": GDSelectOptionObjects
, "BgShapePainter": GDBgShapePainterObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "SelectBox": thisGDSelectBoxObjectsList
, "SelectOption": thisGDSelectOptionObjectsList
, "BgShapePainter": thisGDBgShapePainterObjectsList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("SelectBox"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("SelectBox"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "index") return index;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.removeOptionContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.removeOptionContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.removeOptionContext.GDSelectBoxObjects1.length = 0;
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.removeOptionContext.GDSelectBoxObjects2.length = 0;
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.removeOptionContext.GDSelectOptionObjects1.length = 0;
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.removeOptionContext.GDSelectOptionObjects2.length = 0;
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.removeOptionContext.GDBgShapePainterObjects1.length = 0;
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.removeOptionContext.GDBgShapePainterObjects2.length = 0;

gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.removeOptionContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.removeOptionContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.removeOptionContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.removeOptionContext.GDSelectBoxObjects1.length = 0;
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.removeOptionContext.GDSelectBoxObjects2.length = 0;
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.removeOptionContext.GDSelectOptionObjects1.length = 0;
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.removeOptionContext.GDSelectOptionObjects2.length = 0;
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.removeOptionContext.GDBgShapePainterObjects1.length = 0;
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.removeOptionContext.GDBgShapePainterObjects2.length = 0;


return;
}
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.clearOptionsContext = {};
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.clearOptionsContext.GDObjectObjects1= [];
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.clearOptionsContext.GDObjectObjects2= [];
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.clearOptionsContext.GDSelectBoxObjects1= [];
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.clearOptionsContext.GDSelectBoxObjects2= [];
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.clearOptionsContext.GDSelectOptionObjects1= [];
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.clearOptionsContext.GDSelectOptionObjects2= [];
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.clearOptionsContext.GDBgShapePainterObjects1= [];
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.clearOptionsContext.GDBgShapePainterObjects2= [];


gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.clearOptionsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("SelectBox"), gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.clearOptionsContext.GDSelectBoxObjects1);
{gdjs.evtTools.network.jsonToObjectVariableStructure("[]", (gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.clearOptionsContext.GDSelectBoxObjects1.length !== 0 ? gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.clearOptionsContext.GDSelectBoxObjects1[0] : null), ((gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.clearOptionsContext.GDSelectBoxObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.clearOptionsContext.GDSelectBoxObjects1[0].getVariables()).get("options"));
}}

}


};

gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.clearOptions = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDSelectBoxObjectsList = [...runtimeScene.getObjects("SelectBox")];
var GDSelectBoxObjects = Hashtable.newFrom({"SelectBox": thisGDSelectBoxObjectsList});
var thisGDSelectOptionObjectsList = [...runtimeScene.getObjects("SelectOption")];
var GDSelectOptionObjects = Hashtable.newFrom({"SelectOption": thisGDSelectOptionObjectsList});
var thisGDBgShapePainterObjectsList = [...runtimeScene.getObjects("BgShapePainter")];
var GDBgShapePainterObjects = Hashtable.newFrom({"BgShapePainter": thisGDBgShapePainterObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "SelectBox": GDSelectBoxObjects
, "SelectOption": GDSelectOptionObjects
, "BgShapePainter": GDBgShapePainterObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "SelectBox": thisGDSelectBoxObjectsList
, "SelectOption": thisGDSelectOptionObjectsList
, "BgShapePainter": thisGDBgShapePainterObjectsList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("SelectBox"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("SelectBox"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.clearOptionsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.clearOptionsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.clearOptionsContext.GDSelectBoxObjects1.length = 0;
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.clearOptionsContext.GDSelectBoxObjects2.length = 0;
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.clearOptionsContext.GDSelectOptionObjects1.length = 0;
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.clearOptionsContext.GDSelectOptionObjects2.length = 0;
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.clearOptionsContext.GDBgShapePainterObjects1.length = 0;
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.clearOptionsContext.GDBgShapePainterObjects2.length = 0;

gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.clearOptionsContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.clearOptionsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.clearOptionsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.clearOptionsContext.GDSelectBoxObjects1.length = 0;
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.clearOptionsContext.GDSelectBoxObjects2.length = 0;
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.clearOptionsContext.GDSelectOptionObjects1.length = 0;
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.clearOptionsContext.GDSelectOptionObjects2.length = 0;
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.clearOptionsContext.GDBgShapePainterObjects1.length = 0;
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.clearOptionsContext.GDBgShapePainterObjects2.length = 0;


return;
}
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.wasChangedContext = {};
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.wasChangedContext.GDObjectObjects1= [];
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.wasChangedContext.GDObjectObjects2= [];
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.wasChangedContext.GDSelectBoxObjects1= [];
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.wasChangedContext.GDSelectBoxObjects2= [];
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.wasChangedContext.GDSelectOptionObjects1= [];
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.wasChangedContext.GDSelectOptionObjects2= [];
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.wasChangedContext.GDBgShapePainterObjects1= [];
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.wasChangedContext.GDBgShapePainterObjects2= [];


gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.wasChangedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.wasChangedContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.wasChangedContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.wasChangedContext.GDObjectObjects1[i]._getwasChanged() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.wasChangedContext.GDObjectObjects1[k] = gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.wasChangedContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.wasChangedContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.wasChangedContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.wasChangedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.wasChangedContext.GDObjectObjects1[i]._setwasChanged(false);
}
}{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.wasChanged = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDSelectBoxObjectsList = [...runtimeScene.getObjects("SelectBox")];
var GDSelectBoxObjects = Hashtable.newFrom({"SelectBox": thisGDSelectBoxObjectsList});
var thisGDSelectOptionObjectsList = [...runtimeScene.getObjects("SelectOption")];
var GDSelectOptionObjects = Hashtable.newFrom({"SelectOption": thisGDSelectOptionObjectsList});
var thisGDBgShapePainterObjectsList = [...runtimeScene.getObjects("BgShapePainter")];
var GDBgShapePainterObjects = Hashtable.newFrom({"BgShapePainter": thisGDBgShapePainterObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "SelectBox": GDSelectBoxObjects
, "SelectOption": GDSelectOptionObjects
, "BgShapePainter": GDBgShapePainterObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "SelectBox": thisGDSelectBoxObjectsList
, "SelectOption": thisGDSelectOptionObjectsList
, "BgShapePainter": thisGDBgShapePainterObjectsList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("SelectBox"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("SelectBox"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.wasChangedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.wasChangedContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.wasChangedContext.GDSelectBoxObjects1.length = 0;
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.wasChangedContext.GDSelectBoxObjects2.length = 0;
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.wasChangedContext.GDSelectOptionObjects1.length = 0;
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.wasChangedContext.GDSelectOptionObjects2.length = 0;
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.wasChangedContext.GDBgShapePainterObjects1.length = 0;
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.wasChangedContext.GDBgShapePainterObjects2.length = 0;

gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.wasChangedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.wasChangedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.wasChangedContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.wasChangedContext.GDSelectBoxObjects1.length = 0;
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.wasChangedContext.GDSelectBoxObjects2.length = 0;
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.wasChangedContext.GDSelectOptionObjects1.length = 0;
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.wasChangedContext.GDSelectOptionObjects2.length = 0;
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.wasChangedContext.GDBgShapePainterObjects1.length = 0;
gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.wasChangedContext.GDBgShapePainterObjects2.length = 0;


return !!eventsFunctionContext.returnValue;
}

gdjs.evtsExt__SelectBox__SelectBox.SelectBox.prototype.doStepPreEvents = function() {
  this._onceTriggers.startNewFrame();
};


gdjs.registerObject("SelectBox::SelectBox", gdjs.evtsExt__SelectBox__SelectBox.SelectBox);
