/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type EnterRoundInputValues = {
    Field0?: string;
};
export declare type EnterRoundValidationValues = {
    Field0?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type EnterRoundOverridesProps = {
    EnterRoundGrid?: PrimitiveOverrideProps<GridProps>;
    Field0?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type EnterRoundProps = React.PropsWithChildren<{
    overrides?: EnterRoundOverridesProps | undefined | null;
} & {
    onSubmit: (fields: EnterRoundInputValues) => void;
    onChange?: (fields: EnterRoundInputValues) => EnterRoundInputValues;
    onValidate?: EnterRoundValidationValues;
} & React.CSSProperties>;
export default function EnterRound(props: EnterRoundProps): React.ReactElement;
