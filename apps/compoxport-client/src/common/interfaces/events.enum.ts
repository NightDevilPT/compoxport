export enum EventHandler {
  // Mouse Events
  CLICK = 'onclick',
  DBL_CLICK = 'ondblclick',
  MOUSE_DOWN = 'onmousedown',
  MOUSE_UP = 'onmouseup',
  MOUSE_MOVE = 'onmousemove',
  MOUSE_ENTER = 'onmouseenter',
  MOUSE_LEAVE = 'onmouseleave',
  CONTEXT_MENU = 'oncontextmenu',

  // Keyboard Events
  KEY_DOWN = 'onkeydown',
  KEY_UP = 'onkeyup',
  KEY_PRESS = 'onkeypress',

  // Focus Events
  FOCUS = 'onfocus',
  BLUR = 'onblur',

  // Form Events
  CHANGE = 'onchange',
  INPUT = 'oninput',
  SUBMIT = 'onsubmit',
  RESET = 'onreset',

  // Touch Events
  TOUCH_START = 'ontouchstart',
  TOUCH_END = 'ontouchend',
  TOUCH_MOVE = 'ontouchmove',
  TOUCH_CANCEL = 'ontouchcancel',

  // Drag Events
  DRAG = 'ondrag',
  DRAG_START = 'ondragstart',
  DRAG_END = 'ondragend',
  DRAG_ENTER = 'ondragenter',
  DRAG_LEAVE = 'ondragleave',
  DRAG_OVER = 'ondragover',
  DROP = 'ondrop',

  // Media Events
  PLAY = 'onplay',
  PAUSE = 'onpause',
  ENDED = 'onended',
  VOLUME_CHANGE = 'onvolumechange',
  SEEKED = 'onseeked',

  // Window Events
  LOAD = 'onload',
  RESIZE = 'onresize',
  SCROLL = 'onscroll',

  // Miscellaneous Events
  COPY = 'oncopy',
  CUT = 'oncut',
  PASTE = 'onpaste',
  ERROR = 'onerror',
}
