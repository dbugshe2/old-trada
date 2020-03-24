import React from "react";
import { TextInput } from "react-native-paper";
import { COLORS, SIZES } from "../../utils/theme";

const Input = props => {
  /*
   *
   * Props
   * mode
   * Type: 'flat' | 'outlined'
   * Default value: 'flat'
   * Mode of the TextInput.
   *
   * flat - flat input with an underline.
   * outlined - input with an outline.
   * In outlined mode, the background color of the label is derived from colors.background in theme or the backgroundColor style. This component render TextInputOutlined or TextInputFlat based on that props
   *
   * disabled
   * Type: boolean
   * Default value: false
   * If true, user won't be able to interact with the component.
   *
   * label
   * Type: string
   * The text to use for the floating label.
   *
   * placeholder
   * Type: string
   * Placeholder for the input.
   *
   * error
   * Type: boolean
   * Default value: false
   * Whether to style the TextInput with error style.
   *
   * onChangeText
   * Type: Function
   * Callback that is called when the text input's text changes. Changed text is passed as an argument to the callback handler.
   *
   * selectionColor
   * Type: string
   * Selection color of the input
   *
   * underlineColor
   * Type: string
   * Underline color of the input.
   *
   * dense
   * Type: boolean
   * Default value: false
   * Sets min height with densed layout. For TextInput in flat mode height is 64dp or in dense layout - 52dp with label or 40dp without label. For TextInput in outlined mode height is 56dp or in dense layout - 40dp regardless of label. When you apply heigh prop in style the dense prop affects only paddingVertical inside TextInput
   *
   * multiline
   * Type: boolean
   * Default value: false
   * Whether the input can have multiple lines.
   *
   * numberOfLines
   * Type: number
   * The number of lines to show in the input (Android only).
   *
   * onFocus
   * Type: (args: any) => void
   * Callback that is called when the text input is focused.
   *
   * onBlur
   * Type: (args: any) => void
   * Callback that is called when the text input is blurred.
   *
   * render
   * Type: (props: RenderProps) => React.ReactNode
   * Default value: (props: RenderProps) => <NativeTextInput {...props} />
   * Callback to render a custom input component such as react-native-text-input-mask instead of the default TextInput component from react-native.
   *
   * Example:
   *
   * <TextInput
   *   label="Phone number"
   *   render={props =>
   *     <TextInputMask
   *       {...props}
   *       mask="+[00] [000] [000] [000]"
   *     />
   *   }
   * />
   * value
   * Type: string
   * Value of the text input.
   *
   * style
   * Type: any
   * Pass fontSize prop to modify the font size inside TextInput.
   * Pass height prop to set TextInput height. When height is passed, dense prop will affect only input's paddingVertical. Pass paddingHorizontal to modify horizontal padding.
   * This can be used to get MD Guidelines v1 TextInput look.
   *
   * theme
   * Type: Theme
   * editable
   * Default value: true
   * ...TextInput props
   * Methods
   * These methods can be accessed on the ref of the component, e.g. textInputRef.isFocused(...args).
   *
   * isFocused
   * Returns true if the input is currently focused, false otherwise.
   *
   * clear
   * Removes all text from the TextInput.
   *
   * focus
   * Focuses the input.
   *
   * blur
   * Removes focus from the input.
   */

  return (
    <TextInput
      theme={{
        roudness: 4,
        colors: {
          primary: COLORS.primary,
          surface: COLORS.background,
          background: COLORS.background,
          disabled: COLORS.muted,
          text: COLORS.gray
        }
      }}
      style={{marginVertical: SIZES.base}}
      mode="outlined"
      {...props}
    />
  );
};

export default Input;
