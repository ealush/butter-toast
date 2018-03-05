![alt tag](https://raw.githubusercontent.com/ealush/butter-toast/master/assets/butterbot.png)

# Butter Toast
[![Greenkeeper badge](https://badges.greenkeeper.io/ealush/butter-toast.svg)](https://greenkeeper.io/) [![bitHound Overall Score](https://www.bithound.io/github/ealush/butter-toast/badges/score.svg)](https://www.bithound.io/github/ealush/butter-toast)

Plug & Play toast notification system for react applications.

```npm install butter-toast```

[Live Demo](https://ealush.github.io/butter-toast)

![alt tag](https://raw.githubusercontent.com/ealush/butter-toast/master/assets/rec5.gif)

## What it does:
* Displays your toast notifications on the page.
* Automatically calculates the height of each toast and stacks them up.
* Adds transition when each enters or leaves the screen.
* Lets you set the position for the tray (top-left, top-center, top-right, bottom-right, bottom-center, bottom-left).
* Lets you create full JSX toasts, have them look anyway **you** want.
* Allows having multiple-independant trays of toast notifications on the same page. Notifications may appear in one, or all.
* Sets sticky notifications that will stay forever.
* Sets notifications that will be dismissed on click.
* Provides an API for dismissing a toast from outside.
* Sets a custom duration for each toast notification.
* Stays if hovered, leaves after hover and toast duration end.
* Creates the notifications under a different DOM node than your react application, and directly under body, to prevent the notifications being hidden behind an element with a higher [stacking context](https://developer.mozilla.org/en/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context). (and it can also be overriden).

![alt tag](https://raw.githubusercontent.com/ealush/butter-toast/master/assets/rec4.gif)

## What it does not do
* ButterToast does not assume anything on its intended usage.
* ButterToast does not provide built in by default (but they are supplied)
* ButterToast does not spread butter over your real toast

![alt tag](https://raw.githubusercontent.com/ealush/butter-toast/master/assets/rec3.gif)


# Usage

```js
import React, { Component } from 'react';
import ButterToast from 'butter-toast';

class MyComponent extends Component {

    constructor() {
        super();

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        ButterToast.raise({
            content: ({toastId, dismiss}) => (
                <div>
                    here is the content of the toast. it can literally be anything you want
                </div>
            ),
            toastTimeout: 5000 // default: 3000 ms
        })
    }

    render() {
        <div>
            <a href="#!" onClick={this.handleClick}>Click me to pop a toast</a>
            <ButterToast trayPosition="bottom-left"/>
        </div>
    }
}
```

## ButterToast Tray

The ButterToast Tray is simply the elements to which toasts get appended. Rendering `<ButterToast/>` creates a tray and appends it to the `body`.

| Prop Name | `trayPosition`
|-----------|-
| Required | No
| Type | `String`
| Default | `bottom-right`
| Description| where should the toasts stack up (or down) from.
| Possible Values | `top-left`, `top-center`, `top-right`, `bottom-right`, `bottom-center`, `bottom-left`
| Notes| Added as class names to the tray.


| Prop Name | `toastMargin`
|-----------|-
| Required | No
| Type | `Number`
| Default | 5
| Description| how much distance (in px) should toasts take from each other


| Prop Name | `renderInContext`
|-----------|-
| Required | No
| Type | `Boolean`
| Default | `bottom-right`
| Description|  By default the tray is rendered as a direct descendant of the body element. renderInContext allows the tray to be rendered as a direct descendant of the element in which you declare it, giving you the ability to easily position it relative to that element.


| Prop Name | `name`
|-----------|-
| Required | No
| Type | `String`
| Default | `''`
| Description| allows simple namespacing. A way to make toasts appear in a specific tray. Irrelevant if you only have one active tray. Also, it adds a css class of the same name, which makes styling easier.
| Notes| Added as a class name to the tray.


| Prop Name | `pauseOnHover`
|-----------|-
| Required | No
| Type | `Boolean`
| Default | `false`
| Description| Changes the default behavior when hovering. By default, when hovering over a toast, even though it doesn't dismiss - it will keep counting down to its dismissal, meaning that if its timeout ended, it will dismiss on mouse-out. Setting `pauseOnHover` to true, will pause the countdown for as long as the toast is being hovered - meaning that the timeout cannot end while hovering.


| Prop Name | `theme`
|-----------|-
| Required | No
| Type | `String`
| Default | `''`
| Description| Adds a theme class name to the tray, so you can style it and its content the way you want.
| Notes| When adding a theme, the class name added to the tray will be prefixed with `bt-theme-`, so, if your theme is: `lady-bug`, the class added to the tray will be: `bt-theme-lady-bug`.


![alt tag](https://raw.githubusercontent.com/ealush/butter-toast/master/assets/rec1.gif)

## Raising a toast:
To trigger a new toast notification, you need to call the static method `raise` that's on the ButterToast object.

```js
ButterToast.raise({
    content: <MyComponent/>,
    onClick: (e) => console.log(e),
    sticky: true,
    dismissOnClick: true,
    name: 'someCoolName',
});
```

`ButterToast.raise` accepts an options object with the following options:


| Prop Name | `content`
|-----------|-
| Required | Yes
| Type | React component or a function returning a react component.
| Description| The actual content of a specific toast.
| Notes | If passed as a function, the following params are being passed to it: toastId (`number`) and dismiss (`function`) call this function to dismiss the toast. So basically:
```js
content: ({toastId, dismiss}) => (
    <MyComponent dismiss={dismiss}/>
);
```

| Prop Name | `onClick`
|-----------|-
| Required | No
| Type | `Function`
| Description| Adds an onClick handler to the toast. Clicking anywhere on the toast (except any child with a `btn-dismiss` class) will perform the action and dismiss the toast.


| Prop Name | `dismissOnClick`
|-----------|-
| Required | No
| Type | `Boolean`
| Default | `false`
| Description| If true, attaches a click event listener on the whole toast. clicking the toast will dismiss it.


| Prop Name | `sticky`
|-----------|-
| Required | No
| Type | `Boolean`
| Default | `false`
| Description| If true, the toast will not go away, unless `dismiss` is triggered.


| Prop Name | `name`
|-----------|-
| Required | No
| Type | `String`
| Default | `''`
| Description| Allows showing a toast in a specific tray (or trays). Provides simple namespacing. If none is provide, the toast will appear in all trays.


| Prop Name | `toastTimeout`
|-----------|-
| Required | No
| Type | `Number`
| Default | `3000`
| Description| How many ms should the toast appear for if not manually dismissed


![alt tag](https://raw.githubusercontent.com/ealush/butter-toast/master/assets/rec0.gif)

# Universal / Server side rendered apps
ButterToast uses webpack's `style-loader` which injects CSS into JS module and depends on `window` object - thus server-side rendering would raise an error.
To bypass that you can consume the universal build, which outputs the style to CSS file instead JS:
```
import ButterToast from 'butter-toast/dist/universal/index.js';
import 'butter-toast/dist/universal/style.css';
```

# Using the built in styles AKA CinnamonSugar
By default, ButterToast toasts appear style-less and make no assumption on the intended look and feel. To allow easy ButterToast integration, it also comes bundelet with `CinnamonSugar`, which you can sprinkle over your toast and make it look awesome.

Cinnamon sugar is a companion style-pack for Butter-Toast. While Butter Toast provides a smooth toast stacking interface, Cinnamon-sugar is intended to be used as a styling library, fully compatible with Butter-Toast.

## Usage
To use Cinnamon-Sugar you need to import it alongside Butter-Toast, and add your custom config whenever you want to show a toast.

```js
import React, { Component } from 'react';
import ButterToast, { CinnamonSugar } from 'butter-toast';

class ShowOff extends Component {

    handleClick() {
        // in this example, I am using a `fresh` toast
        // since it has all the possible options
        const toast = CinnamonSugar.fresh({
            theme: 'lite',
            image: 'http://lorempixel.com/150/150/people',
            title: 'Amazing!', // you can also add jsx code here!
            message: 'Just showing off here...', // you can also add jsx code here!
            icon: 'bath' // literally any font awesome 4.7 icon
            // you may also add here regular butter-toast options, such as toastTimeout,
            // name, sticky, etc..
        });

        ButterToast.raise(toast)
    }

    render() {
        <span>
            <a href="#!" onClick={this.handleClick.bind(this)}>Click me to pop a toast</a>
            <ButterToast trayPosition="bottom-right"/>
        </span>
    }
}

export default ShowOff;
```

## What did I just see?
So basically, the `ButterToast.raise` function accepts a toast-object with all the data required for emitting it. Cinnamon-Sugar is an object which contains functions that return ready to use toast objects.

Since cinnamonSugar builds a valid toast-object, you may pass it any butter-toast configuration you would normally pass to the raise function, and it would be added to the toast object. Your cinnamonSugar call may look like this:

```js
const toast = CinnamonSugar.slim({
    theme: 'dark',
    message: 'Just showing off here...',
    toastTimeout: 6000, // normal butter-toast option
    dismissOnClick: true // normal butter-toast option
};
```

There are four kinds of toasts, `crisp`, `crunch`, `fresh` and `slim`. Each has its own possible options, and its own themes:

## Kinds
There are currently four different kinds of styles:

### Crisp
Bright, clean looking toast notification, featuring an icon on the left (optional) and a close button on the right. Appears with a satisfying animation, and has hover effects both for the close button and for the whole tost itself.
![alt tag](https://raw.githubusercontent.com/ealush/butter-toast/master/assets/rec0.gif)

#### Options
|Name|Description
|-|-
| message | Optional | Either a string or jsx/react component
| title | Either a string or jsx/react component
| icon | Any of font-awesome 4.7 icon names
| noClose | Any of font-awesome 4.7 icon names
| theme | Any of the supported themes

 #### supported themes
The following themes are supported by default. Choosing one will paint the icon accordingly.
* success (green)
* error (red)
* info (blue)
* danger (orange)
* golden
* dark
* default // no need to specify. light grey


### Crunch
Plain, colored toast notifications. With an icon on the left, and an optional close button on the top right. The icon appears with a sliding animation.
![alt tag](https://raw.githubusercontent.com/ealush/butter-toast/master/assets/rec3.gif)

#### Options
|Name|Description
|-|-
| message | Optional | Either a string or jsx/react component
| title | Either a string or jsx/react component
| icon | Any of font-awesome 4.7 icon names
| noClose | Any of font-awesome 4.7 icon names
| theme | Any of the supported themes

 #### supported themes
The following themes are supported by default. Others may be added using custom CSS.
* grey
* red
* blue
* purple
* orange
* green


### Fresh
Toast notifications that allow adding an image, an icon and a close button. Good especially for social media or live notification for messages.

![alt tag](https://raw.githubusercontent.com/ealush/butter-toast/master/assets/rec4.gif)

#### Options
|Name|Description
|-|-
| message | Optional | Either a string or jsx/react component
| title | Either a string or jsx/react component
| icon | Any of font-awesome 4.7 icon names
| image | image url
| noClose | Any of font-awesome 4.7 icon names
| theme | Any of the supported themes

#### supported themes
The following themes are supported by default. Others may be added using custom CSS.
* lite
* dark
![alt tag](https://raw.githubusercontent.com/ealush/butter-toast/master/assets/rec5.gif)

### Slim
 Thin, simple toast notifications. Goot for status updates, and action confirmations.

![alt tag](https://raw.githubusercontent.com/ealush/butter-toast/master/assets/rec1.gif)


#### Options
|Name|Description
|-|-
| message | Either a string or jsx/react component
| theme | Any of the supported themes

 #### supported themes
The following themes are supported by default. Others may be added using custom CSS.
* lite
* dark


## Underwater
Butter-toast underwater logic specifications that users should be aware of:

* **onMouseEnter**:
Defaulf behaviour: When hovering mouse above toast the timeout timer is not stopped, though toast will not be dismissed as long as mouse hovers the toast.
If `pauseOnHover` prop is set to true, toast timeout _is_ paused.
* **onMouseLeave**:
Default behaviour: After the mouse leaves toast area, the toast respect the timer and gets dismissed after its timeout. If the timeout was reached before mouse left toast area the toast is dismissed instantly.
If `pauseOnHover` prop is set to true, toast timeout timer _continues_ where it left off and times out normally.
