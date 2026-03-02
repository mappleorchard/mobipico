window.emuConfig = {
  global: {
    name: 'MobiPICO'
  },
  extensions: { //map extension to engine and loading method
    '.p8': {engine: 'pico8', loadAs: 'data'},
    '.p8.png': {engine: 'pico8', loadAs: 'url'}
  },
  engines: { //engine feature definitions
    pico8: {
      screen: {
        width: 128,
        height: 128
      },
      keys: {
        Left: 'ArrowLeft',
        Right: 'ArrowRight',
        Up: 'ArrowUp',
        Down: 'ArrowDown',
        Action1: 'Enter', //O
        Action2: '*',     //X
        Pause: 'Call',
        SwapActionBtns: '#',
        SwitchGame: 'SoftLeft'
      }
    }
  }
}
