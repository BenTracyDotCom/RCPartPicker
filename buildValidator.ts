const buildValidator = (components: {type: String, data: {engines?: number, voltage?: string, protocol?: string, capacity?: string}}[]) => {
  const conflicts = {
    powerConcerns: [],
    protocolConcerns: [],
  }

  let powerConcerns = components.filter(component => !!component.data.voltage)



  let protocolConcerns =  components.filter(component => !!component.data.protocol)
  const possibleProtocols = ('crsf');



  if(conflicts.powerConcerns.length === 0 && conflicts.protocolConcerns.length === 0){
    return true
  } else {
    return conflicts
  }

}

export default buildValidator