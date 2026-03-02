# MobiPICO: a straightforward PICO-8 emulator port for KaiOS

This is a (fully unofficial, of course) port of [PICO-8](https://www.lexaloffle.com/pico-8.php) fantasy console Web player/emulator, currently using the 0.2.4 engine version from the official website.
It supports both plain `.p8` and `.p8.png` cart file loading (single carts only).

Since the official PICO-8 engine itself is closed-source and obfuscated, there can't be any guarantee about full compatibility or sufficient performance on any KaiOS phone model.

## Usage and configuration

Start the app and pick a game file using the system `pick` activity by pressing D-Pad center or Call key. That's it!

You can adjust the controls by modifying the `config.js` file, in the `emuConfig.engines.pico8.keys` object. Available keys are:

- D-pad directions (`Left`, `Right`, `Up`, `Down`),
- `Action1` ('O' in PICO-8),
- `Action2` ('X' in PICO-8),
- `Pause` (Menu in PICO-8),
- `SwapActionBtns` (the key to swap `Action1` and `Action2` buttons for some games),
- `SwitchGame` (return to the game picker without closing the emulator).

## Credits

The PICO-8 engine itself (`pico8-engine.js` file) and the PICO-8 icons are created by Lexaloffle Games and are proprietary but free for personal non-commercial use.

All other parts of this project are created by Luxferre and released into public domain (see `UNLICENSE`).
