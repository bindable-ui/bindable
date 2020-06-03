/*
    https://developer.mozilla.org/en-US/docs/Web/Events
*/

export interface IResourceEvents {
    error?(...args: any[]): void;
    abort?(...args: any[]): void;
    load?(...args: any[]): void;
    beforeunload?(...args: any[]): void;
}

export interface INetworkEvents {
    online?(...args: any[]): void;
    offline?(...args: any[]): void;
}

export interface IFocusEvents {
    focus?(...args: any[]): void;
    blur?(...args: any[]): void;
    focusin?(...args: any[]): void;
    focusout?(...args: any[]): void;
}

export interface IWebSocketEvents {
    open?(...args: any[]): void;
    message?(...args: any[]): void;
    error?(...args: any[]): void;
    close?(...args: any[]): void;
}

export interface ISessionHistoryEvents {
    pagehide?(...args: any[]): void;
    pageshow?(...args: any[]): void;
    popstate?(...args: any[]): void;
}

export interface ICSSAnimationEvents {
    animationstart?(...args: any[]): void;
    animationcancel?(...args: any[]): void;
    animationend?(...args: any[]): void;
    animationiteration?(...args: any[]): void;
}

export interface ICSSTransitionEvents {
    transitionstart?(...args: any[]): void;
    transitioncancel?(...args: any[]): void;
    transitionend?(...args: any[]): void;
    transitionrun?(...args: any[]): void;
}

export interface IFormEvents {
    reset?(...args: any[]): void;
    submit?(...args: any[]): void;
}

export interface IPrintingEvents {
    beforeprint?(...args: any[]): void;
    afterprint?(...args: any[]): void;
}

export interface ITextCompositionEvents {
    compositionstart?(...args: any[]): void;
    compositionupdate?(...args: any[]): void;
    compositionend?(...args: any[]): void;
}

export interface IViewEvents {
    fullscreenchange?(...args: any[]): void;
    fullscreenerror?(...args: any[]): void;
    resize?(...args: any[]): void;
    scroll?(...args: any[]): void;
}

export interface IClipboardEvents {
    cut?(...args: any[]): void;
    copy?(...args: any[]): void;
    paste?(...args: any[]): void;
}

export interface IKeyboardEvents {
    keydown?(...args: any[]): void;
    keypress?(...args: any[]): void;
    keyup?(...args: any[]): void;
}

export interface IMouseEvents {
    auxclick?(...args: any[]): void;
    click?(...args: any[]): void;
    contextmenu?(...args: any[]): void;
    dblclick?(...args: any[]): void;
    mousedown?(...args: any[]): void;
    mouseenter?(...args: any[]): void;
    mouseleave?(...args: any[]): void;
    mousemove?(...args: any[]): void;
    mouseover?(...args: any[]): void;
    mouseout?(...args: any[]): void;
    mouseup?(...args: any[]): void;
    pointerlockchange?(...args: any[]): void;
    pointerlockerror?(...args: any[]): void;
    select?(...args: any[]): void;
    wheel?(...args: any[]): void;
}

export interface IDragAndDropEvents {
    drag?(...args: any[]): void;
    dragend?(...args: any[]): void;
    dragenter?(...args: any[]): void;
    dragstart?(...args: any[]): void;
    dragleave?(...args: any[]): void;
    dragover?(...args: any[]): void;
    drop?(...args: any[]): void;
}

export interface IFormEventListener extends IFocusEvents, IKeyboardEvents {}
