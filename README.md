# all-in-one-input-component

The `all-in-one-input-component` is a versatile and customizable React input component designed for developers looking for a single, integrated solution for various types of inputs including text, password, and other form elements. Featuring built-in validation, optional icons, prefix/suffix elements, and much more, this component is ideal for rapidly building consistent form interfaces in your React applications.

## Features

- **Customizable**: Easy to customize appearance and behavior through props.
- **Built-in Validation**: Supports error and success states to provide immediate feedback.
- **Icon Support**: Integrates easily with React icons for enhanced user interaction.
- **Character Limit**: Includes an optional character limit functionality for text inputs.
- **Password Visibility Toggle**: Allows users to toggle password visibility on input fields.

## Installation

To install the component in your project, run the following command:

```bash
npm install all-in-one-input-component
```

## all-in-one-input-component rendered with Input tag

```jsx
import React from "react";
import { Input } from "all-in-one-input-component";
import { FaEnvelope } from "react-icons/fa";
import "../App.css";

const Form = () => {
  return (
    <>
      <Input
        type="email"
        label="Email"
        variant="normal"
        icon={<FaEnvelope />}
        autoComplete="email"
        characterLimit={10}
        placeholder="Enter your Email"
        id="email"
        onChange={(e) => console.log(e.target.value)}
        helpText="Click the eye icon to show/hide your password"
        status="default"
      />

      <Input
        type="password"
        label="Password"
        id="password"
        variant="rounded"
        autoComplete="password"
        placeholder="Enter you password"
        status="error"
        error="please enter valid password"
      />

      <Input prefix="￥" suffix="RMB" />

      <Input
        type="text"
        label="Country"
        id="country"
        variant="outlined"
        defaultValue="India"
        status="disabled"
      />

      <Input
        type="text"
        label="Address"
        id="addresss"
        variant="underlined"
        placeholder="Input with clear icon"
        allowClear
        status="hover"
      />
    </>
  );
};

export default Form;
```

## Output

![Description of the image](https://demo-things.s3.ap-south-1.amazonaws.com/test.png)


## Props

The table below lists the props available for the `all-in-one-input-component`:

| Prop            | Type       | Default     | Description                                       |
|-----------------|------------|-------------|---------------------------------------------------|
| `type`          | string     | `"text"`    | The type of the input (e.g., "text", "password"). |
| `label`         | string     | `undefined` | Label text for the input field.                   |
| `placeholder`   | string     | `""`        | Placeholder text for the input field.             |
| `defaultValue`  | string     | `""`        | Initial value of the input.                       |
| `helpText`      | string     | `undefined` | Help text for the input field.                    |
| `id`            | string     | -           | Required. ID for the input field.                 |
| `onChange`      | function   | `undefined` | Callback function when the value changes.         |
| `icon`          | node       | `undefined` | Icon displayed within the input.                  |
| `prefix`        | node       | `undefined` | Element displayed before the input content.       |
| `suffix`        | node       | `undefined` | Element displayed after the input content.        |
| `allowClear`    | boolean    | `false`     | If true, shows a clear button when the input has a value. |
| `autoComplete`  | string     | `undefined` | Standard HTML autoComplete attribute.             |
| `characterLimit`| number     | `null`      | Maximum number of characters allowed.             |
| `status`        | string     | `"default"` | Visual status of the input (e.g., "error", "success"). |
| `variant`       | string     | `"normal"`  | Style variant of the input container.             |
| `error`         | string     | `""`        | Error message to display.                         |

