window.LoadEngine = function(engineCfg, titleElem, canvasElem, gameData, gameTitle, gameFile) {
  // 0x1 left, 0x2 right, 0x4 up, 0x8 down, 0x10 O, 0x20 X, 0x40 menu
  var emuKeys = engineCfg.keys
  var keyRow = [emuKeys.Left, emuKeys.Right, emuKeys.Up, emuKeys.Down, emuKeys.Action1, emuKeys.Action2, emuKeys.Pause]
  var invOX = false
  var calcKeyMask = function() {
    var i=0, mask = {}, l = keyRow.length
    for(;i<l;i++) mask[keyRow[i]] = 1<<i
    if(invOX) {
      mask[keyRow[4]] = 32
      mask[keyRow[5]] = 16
    }
    return mask
  }
  var keyMask = calcKeyMask()
  gameTitle = gameTitle.split('/').pop()
  titleElem.textContent = gameTitle
  //init pico8 engine
  window.Module = {}
  window.Module.canvas = canvasElem
  window.Module.doNotCaptureKeyboard = true
  window.pico8_buttons = [0,0,0,0,0,0,0,0]
  window.iii = 0
  window.ciii = 0
  window._cdpos = 0
  window._cartname = [gameTitle]
  if(gameData === null) { //using internal loader of the engine
    window.Module['arguments'] = [gameFile]
  }
  else {
    window._cartdat = gameData
    window.codo_command = 6
  }
  //load the engine script
  var s = document.createElement('script')
  s.src = window.engineRootDir + '/pico8-engine.js'
  document.body.appendChild(s)
  //setup keypad
  window.addEventListener('keydown', function(e) {
    if(e.key === 'MicrophoneToggle') e.preventDefault() //midkey longpress must not call the assistant
    else if(e.key === emuKeys.SwapActionBtns) { //invert the O and X keys for some games
      e.preventDefault()
      if(window.confirm('Swap action buttons?')) {
        invOX = !invOX
        keyMask = calcKeyMask()
      }
    }
    else if(e.key === emuKeys.SwitchGame) {
      e.preventDefault()
      if(window.confirm('Choose another game?')) window.location.reload(true)
    }
    else if(e.key === 'End' || e.key === 'Back' || e.key === 'Backspace') { //handle exit
      e.preventDefault()
      if(window.confirm('Close the emulator?')) window.close()
    }
    else if(e.key in keyMask) {
      e.preventDefault()
      e.stopPropagation()
      e.stopImmediatePropagation()
      window.pico8_buttons[0] |= keyMask[e.key]
    }
  })
  window.addEventListener('keyup', function(e) {
    if(e.key in keyMask) {
      e.preventDefault()
      e.stopPropagation()
      e.stopImmediatePropagation()
      window.pico8_buttons[0] &= ~keyMask[e.key]
    }
  })

}
