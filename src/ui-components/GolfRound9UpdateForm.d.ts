/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GolfRound9 } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type GolfRound9UpdateFormInputValues = {
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
export declare type GolfRound9UpdateFormValidationValues = {
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
export declare type GolfRound9UpdateFormOverridesProps = {
    GolfRound9UpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
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
export declare type GolfRound9UpdateFormProps = React.PropsWithChildren<{
    overrides?: GolfRound9UpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    golfRound9?: GolfRound9;
    onSubmit?: (fields: GolfRound9UpdateFormInputValues) => GolfRound9UpdateFormInputValues;
    onSuccess?: (fields: GolfRound9UpdateFormInputValues) => void;
    onError?: (fields: GolfRound9UpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: GolfRound9UpdateFormInputValues) => GolfRound9UpdateFormInputValues;
    onValidate?: GolfRound9UpdateFormValidationValues;
} & React.CSSProperties>;
export default function GolfRound9UpdateForm(props: GolfRound9UpdateFormProps): React.ReactElement;
