/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type PlayerCreateFormInputValues = {
    first_name?: string;
    middle_name?: string;
    last_name?: string;
    suffix?: string;
    email?: string;
    phone?: string;
    handicap?: number;
    password?: string;
    is_admin?: boolean;
    bio?: string;
    picture?: string;
    has_confirmed?: boolean;
    plays_mondays?: boolean;
    subs_mondays?: boolean;
    plays_wednesdays?: boolean;
    subs_wednesdays?: boolean;
};
export declare type PlayerCreateFormValidationValues = {
    first_name?: ValidationFunction<string>;
    middle_name?: ValidationFunction<string>;
    last_name?: ValidationFunction<string>;
    suffix?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    phone?: ValidationFunction<string>;
    handicap?: ValidationFunction<number>;
    password?: ValidationFunction<string>;
    is_admin?: ValidationFunction<boolean>;
    bio?: ValidationFunction<string>;
    picture?: ValidationFunction<string>;
    has_confirmed?: ValidationFunction<boolean>;
    plays_mondays?: ValidationFunction<boolean>;
    subs_mondays?: ValidationFunction<boolean>;
    plays_wednesdays?: ValidationFunction<boolean>;
    subs_wednesdays?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PlayerCreateFormOverridesProps = {
    PlayerCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    first_name?: PrimitiveOverrideProps<TextFieldProps>;
    middle_name?: PrimitiveOverrideProps<TextFieldProps>;
    last_name?: PrimitiveOverrideProps<TextFieldProps>;
    suffix?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    phone?: PrimitiveOverrideProps<TextFieldProps>;
    handicap?: PrimitiveOverrideProps<TextFieldProps>;
    password?: PrimitiveOverrideProps<TextFieldProps>;
    is_admin?: PrimitiveOverrideProps<SwitchFieldProps>;
    bio?: PrimitiveOverrideProps<TextFieldProps>;
    picture?: PrimitiveOverrideProps<TextFieldProps>;
    has_confirmed?: PrimitiveOverrideProps<SwitchFieldProps>;
    plays_mondays?: PrimitiveOverrideProps<SwitchFieldProps>;
    subs_mondays?: PrimitiveOverrideProps<SwitchFieldProps>;
    plays_wednesdays?: PrimitiveOverrideProps<SwitchFieldProps>;
    subs_wednesdays?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type PlayerCreateFormProps = React.PropsWithChildren<{
    overrides?: PlayerCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: PlayerCreateFormInputValues) => PlayerCreateFormInputValues;
    onSuccess?: (fields: PlayerCreateFormInputValues) => void;
    onError?: (fields: PlayerCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PlayerCreateFormInputValues) => PlayerCreateFormInputValues;
    onValidate?: PlayerCreateFormValidationValues;
} & React.CSSProperties>;
export default function PlayerCreateForm(props: PlayerCreateFormProps): React.ReactElement;
