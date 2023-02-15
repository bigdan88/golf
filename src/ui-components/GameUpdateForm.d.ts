/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Game } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type GameUpdateFormInputValues = {
    date?: string;
    got_cancelled?: boolean;
};
export declare type GameUpdateFormValidationValues = {
    date?: ValidationFunction<string>;
    got_cancelled?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type GameUpdateFormOverridesProps = {
    GameUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    date?: PrimitiveOverrideProps<TextFieldProps>;
    got_cancelled?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type GameUpdateFormProps = React.PropsWithChildren<{
    overrides?: GameUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    game?: Game;
    onSubmit?: (fields: GameUpdateFormInputValues) => GameUpdateFormInputValues;
    onSuccess?: (fields: GameUpdateFormInputValues) => void;
    onError?: (fields: GameUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: GameUpdateFormInputValues) => GameUpdateFormInputValues;
    onValidate?: GameUpdateFormValidationValues;
} & React.CSSProperties>;
export default function GameUpdateForm(props: GameUpdateFormProps): React.ReactElement;
