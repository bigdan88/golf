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
export declare type GolfRound9CreateFormInputValues = {
    date?: string;
    hole1?: string;
    hole2?: string;
    hole3?: string;
    hole4?: string;
    hole5?: string;
    hole6?: string;
    hole7?: string;
    hole8?: string;
    hole9?: string;
};
export declare type GolfRound9CreateFormValidationValues = {
    date?: ValidationFunction<string>;
    hole1?: ValidationFunction<string>;
    hole2?: ValidationFunction<string>;
    hole3?: ValidationFunction<string>;
    hole4?: ValidationFunction<string>;
    hole5?: ValidationFunction<string>;
    hole6?: ValidationFunction<string>;
    hole7?: ValidationFunction<string>;
    hole8?: ValidationFunction<string>;
    hole9?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type GolfRound9CreateFormOverridesProps = {
    GolfRound9CreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    date?: PrimitiveOverrideProps<TextFieldProps>;
    hole1?: PrimitiveOverrideProps<TextFieldProps>;
    hole2?: PrimitiveOverrideProps<TextFieldProps>;
    hole3?: PrimitiveOverrideProps<TextFieldProps>;
    hole4?: PrimitiveOverrideProps<TextFieldProps>;
    hole5?: PrimitiveOverrideProps<TextFieldProps>;
    hole6?: PrimitiveOverrideProps<TextFieldProps>;
    hole7?: PrimitiveOverrideProps<TextFieldProps>;
    hole8?: PrimitiveOverrideProps<TextFieldProps>;
    hole9?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type GolfRound9CreateFormProps = React.PropsWithChildren<{
    overrides?: GolfRound9CreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: GolfRound9CreateFormInputValues) => GolfRound9CreateFormInputValues;
    onSuccess?: (fields: GolfRound9CreateFormInputValues) => void;
    onError?: (fields: GolfRound9CreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: GolfRound9CreateFormInputValues) => GolfRound9CreateFormInputValues;
    onValidate?: GolfRound9CreateFormValidationValues;
} & React.CSSProperties>;
export default function GolfRound9CreateForm(props: GolfRound9CreateFormProps): React.ReactElement;
