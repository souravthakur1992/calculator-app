import styled from 'styled-components';
import {CSSProperties} from "react";

const DropDownInput = styled.select<CSSProperties & {
    placeholderColor?: string;
}>`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  margin: ${({margin}) => margin};
  padding: ${({padding}) => padding || '16px'};
  line-height: ${({lineHeight}) => lineHeight};
  height: ${({height}) => height || '56px'};
  width: ${({width}) => width || '100%'};
  border: ${({border}) => border || '1px solid #e8e8e8'};
  box-sizing: border-box;
  border-radius: ${({borderRadius}) => borderRadius || '4px'};
  background-color: ${({backgroundColor}) => backgroundColor || '#ffffff'};
  font-size: ${({fontSize}) => fontSize || '16px'};
  font-family: 'Roboto';
  font-weight: 400;
  line-height: 24px;
  box-shadow: 0px 4px 4px rgba(51, 51, 51, 0.04), 0px 4px 16px rgba(51, 51, 51, 0.08);
  background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeD0iMTJweCIgeT0iMHB4IiB3aWR0aD0iMjRweCIgaGVpZ2h0PSIzcHgiIHZpZXdCb3g9IjAgMCA2IDMiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDYgMyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PHBvbHlnb24gcG9pbnRzPSI1Ljk5MiwwIDIuOTkyLDMgLTAuMDA4LDAgIi8+PC9zdmc+");
  background-repeat: no-repeat;
  background-position: right;

  > option {
    margin: ${({margin}) => margin};
    padding: ${({padding}) => padding || '16px'};
    list-style: none;
    font-family: 'Roboto';
    font-weight: 400;
    line-height: 24px;
    box-shadow: 0px 4px 4px rgba(51, 51, 51, 0.04), 0px 4px 16px rgba(51, 51, 51, 0.08);

    &:hover {
      background-color: rgb(110, 65, 226);
      color: white;
    }
  }

  :focus {
    outline: none;
  }

  ::placeholder {
    color: ${({placeholderColor}) => placeholderColor};
  }
`

export default DropDownInput;