![alt tag](https://raw.githubusercontent.com/ealush/butter-toast/master/assets/butterbot.png)

# Butter Toast
Plug & Play toast notification system for react applications.

```npm install butter-toast```

[Live Demo](ealush.github.io/butter-toast)

## What does it do:
* Display your toast notifications on the page
* Automatically calculate the height of each toast and stack them up.
* Add transition when each enters or leaves the screen
* Lets you set the position for the tray (top-left, top-center, top-right, bottom-right, bottom-center, bottom-left).
* Allow having multiple-independant trays of toast notifications on the same page. Notifications may appear in one, or all.
* Set sticky notifications that will stay forever
* Set notifications that will be dismissed on click
* Provide an API for dismissing a toast from the outside
* Set a custom duration for each toast notification
* Stay if hovered, leave after hover and toast duration end

![alt tag](https://raw.githubusercontent.com/ealush/butter-toast/master/assets/screenshot.png)

## What it does not do
* Provdie styling:
    Other than what's actually needed to stick the tray to the corners of the screen and transition the toasts, Butter Toast does not provide any styling whatsoever, understanding that each consumer might expect it to look differently.
* Provide Toast HTML:
    The only HTML provided with Butter Toast is the markup for the tray itself. The structure of each toast is completely up to the consumer.

## TODO - prioritized
* [x] _done_ Add theming support for easy styling
* [x] _done_ Prevent remounting if already exists
* [x] _done_ Allow unmounting from DOM on demand

![alt tag](https://raw.githubusercontent.com/ealush/butter-toast/master/assets/screenshot1.png)

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
* **name**: allows simple namespacing. A way to make toasts appear in a specific tray. Irrelevant if you only have one active tray. Also, it adds a css class of the same name, which makes styling easier.
* **theme** As already noted, Butter Toast does not provide any styling options other than what's needed to stick the tray to the corners of the screen. You may, however pass a `theme` prop that will be added as a class name to the tray, which will help you style it.
When adding a theme, the class name added to the tray will be prefixed with `bt-theme-`, so, if your theme is: `lady-bug`, the class added to the tray will be: `bt-theme-lady-bug`.

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
* **sticky**
    * **Description**: Allows showing a toast in a specific tray (or trays). Provides simple namespacing. If none is provide, the toast will appear in all trays.
    * **Required**: NO
    * **Type**: String
* **toastTimeout**
    * **Description**: How many ms should the toast appear for if not dismissed
    * **Required**: NO
    * **Type**: number
    * **Default**: `3000`