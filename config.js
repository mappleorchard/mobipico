window.emuConfig = {
  global: {
    name: 'MobiPICO'
  },
  extensions: { //map extension to engine and loading method
    '.p8': {engine: 'pico8', loadAs: 'data'},
    '.p8.png': {engine: 'pico8', loadAs: 'url'},
    '.png': {engine: 'pico8', loadAs: 'url'}
  },
  engines: { //engine feature definitions
    pico8: {
      screen: {
        width: 128,
        height: 128
      },
      keys: {
        Left: '4',
        Right: '6',
        Up: '2',
        Down: '8',
        Action1: '0', //O
        Action2: '*',     //X
        Pause: 'Call',
        SwapActionBtns: '#',
        SwitchGame: 'SoftLeft'
            // Feature-phone / KaiOS fallbacks (common alternate mappings)
            // Map numeric keypad 2/8/4/6 to arrows if device doesn't produce Arrow keys.
  //  if (kc === 50 /* '2' */) return 'up';
    //if (kc === 56 /* '8' */) return 'down';
  //  if (kc === 52 /* '4' */) return 'left';
   // if (kc === 54 /* '6' */) return 'right';
      }
    }
  }
}
