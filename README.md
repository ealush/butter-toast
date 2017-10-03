![alt tag](https://raw.githubusercontent.com/ealush/butter-toast/master/assets/butterbot.png)

# Butter Toast
[![Greenkeeper badge](https://badges.greenkeeper.io/ealush/butter-toast.svg)](https://greenkeeper.io/) [![bitHound Overall Score](https://www.bithound.io/github/ealush/butter-toast/badges/score.svg)](https://www.bithound.io/github/ealush/butter-toast)

Plug & Play toast notification system for react applications.

-- toast styles are added using: [Cinnamon-Sugar](https://github.com/ealush/cinnamon-sugar);

```npm install butter-toast```

[Live Demo](https://ealush.github.io/butter-toast)

![alt tag](https://raw.githubusercontent.com/ealush/butter-toast/master/assets/rec5.gif)

## What does:
* Display your toast notifications on the page
* Automatically calculate the height of each toast and stack them up.
* Add transition when each enters or leaves the screen
* Let you set the position for the tray (top-left, top-center, top-right, bottom-right, bottom-center, bottom-left).
* Let you create full JSX toasts, have them look anyway you want
* Allow having multiple-independant trays of toast notifications on the same page. Notifications may appear in one, or all.
* Set sticky notifications that will stay forever
* Set notifications that will be dismissed on click
* Provide an API for dismissing a toast from the outside
* Set a custom duration for each toast notification
* Stay if hovered, leave after hover and toast duration end
* Create the notifications under a different DOM node than your react application, and directly under body, to prevent the notifications being hidden behind an element with a higher [stacking context](https://developer.mozilla.org/en/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context). (and it can also be overriden).

![alt tag](https://raw.githubusercontent.com/ealush/butter-toast/master/assets/rec4.gif)

## What it does not do
* Provdie styling:
    Other than what's actually needed to stick the tray to the corners of the screen and transition the toasts, Butter Toast does not provide any styling whatsoever, understanding that each consumer might expect it to look differently.
    **Note**: A companion package exists just for that: [Cinnamon-Sugar](https://github.com/ealush/cinnamon-sugar);
* Spread butter over your real toast

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

## ButterToast tray props
* **trayPosition**: where should the toasts stack up (or down) from. Possible
    * top-left
    * top-center
    * top-right
    * bottom-right
    * bottom-center
    * bottom-left

    All these are added as class names to the tray.
* **toastMargin**: how much distance (in px) should toasts take from each other
* **renderInContext**: `boolean` | optional. By default the tray is rendered as a direct descendant of the body element. renderInContext allows the tray to be rendered as a direct descendant of the element in which you declare it, giving you the ability to easily position it relative to that element.
* **name**: allows simple namespacing. A way to make toasts appear in a specific tray. Irrelevant if you only have one active tray. Also, it adds a css class of the same name, which makes styling easier.
* **theme** As already noted, Butter Toast does not provide any styling options other than what's needed to stick the tray to the corners of the screen. You may, however pass a `theme` prop that will be added as a class name to the tray, which will help you style it.
When adding a theme, the class name added to the tray will be prefixed with `bt-theme-`, so, if your theme is: `lady-bug`, the class added to the tray will be: `bt-theme-lady-bug`.

![alt tag](https://raw.githubusercontent.com/ealush/butter-toast/master/assets/rec1.gif)

## Options when 'raising' a toast
To trigger a new toast notification, you need to call the static method `raise` that's on the ButterToast object.
It accepts an options object with the following options:

* **content**
    * **Description**: The actual content of a specific toast.
    * **Required**: YES
    * **Type**: React Component, or a function returning a react component.
    If passed as a function, the following params are being passed to it:
        * toastId | `number`
        * dismiss | `function` | call this function to dismiss the toast
* **onClick**
    * **Description**: Adds an onClick handler to the toast. Clicking anywhere on the toast (except any child with a `btn-dismiss` class) will perform the action and dismiss the toast.
    * **Required**: NO
    * **Type**: Function
    * **Default**: `undefined`
* **dismissOnClick**
    * **Description**:  If true, attaches a click event listener on the whole toast. clicking the toast will dismiss it.
    * **Required**: NO
    * **Type**: Boolean
    * **Default**: `false`
* **sticky**
    * **Description**:  If true, the toast will not go away, unless dismiss is triggered.
    * **Required**: NO
    * **Type**: Boolean
    * **Default**: `false`
* **name**
    * **Description**: Allows showing a toast in a specific tray (or trays). Provides simple namespacing. If none is provide, the toast will appear in all trays.
    * **Required**: NO
    * **Type**: String
* **toastTimeout**
    * **Description**: How many ms should the toast appear for if not dismissed
    * **Required**: NO
    * **Type**: number
    * **Default**: `3000`

![alt tag](https://raw.githubusercontent.com/ealush/butter-toast/master/assets/rec0.gif)

## Underwater
Butter-toast underwater logic specifications that user should know:
* **onMouseEnter**: When hovering mouse above toast the timeout timer is stopped.
* **onMouseLeave**: After mouse leaves toast area the timer continues where it left and timeouts normally.