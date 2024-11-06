// /types/password.ts
import { TextFieldProps } from "..";

export enum PASSWORD_LENGTH {
  MIN_8 = 8,
  MIN_10 = 10,
  MIN_12 = 12,
}

export enum PASSWORD_REQUIREMENT_KEYS {
  MINIMUM_8_CHARACTERS = "minimum_8_characters",
  MINIMUM_10_CHARACTERS = "minimum_10_characters",
  MINIMUM_12_CHARACTERS = "minimum_12_characters",
  ONE_UPPERCASE_CHARACTER = "one_uppercase_character",
  ONE_LOWERCASE_CHARACTER = "one_lowercase_character",
  ONE_NUMBER = "one_number",
  ONE_SPECIAL_CHARACTER = "one_special_character",
}

type FieldValidator = {
  label: string;
  validator: (password: string) => boolean;
};

export type RequirementsConfig = Record<PASSWORD_REQUIREMENT_KEYS, FieldValidator>;

export type PasswordRequirementProps = {
  completed: boolean;
  label: string;
  index: number;
  error?: boolean;
};

export interface PasswordFieldProps extends TextFieldProps {
  enablePreview?: boolean;
  passwordValue?: string;
  passwordLength?: number;
  passwordRequirementLabels?: {
    [key in PASSWORD_REQUIREMENT_KEYS]: string;
  };
  showPasswordRequirements?: boolean;
}

export const PASSWORD_REQUIREMENTS = (passwordLength: number) => {
  const requirements = {
    ...(passwordLength === PASSWORD_LENGTH.MIN_8 && {
      [PASSWORD_REQUIREMENT_KEYS.MINIMUM_8_CHARACTERS]: {
        validator: (password: string) => /^.{8,}$/.test(password),
      },
    }),
    ...(passwordLength === PASSWORD_LENGTH.MIN_10 && {
      [PASSWORD_REQUIREMENT_KEYS.MINIMUM_10_CHARACTERS]: {
        validator: (password: string) => /^.{10,}$/.test(password),
      },
    }),
    ...(passwordLength === PASSWORD_LENGTH.MIN_12 && {
      [PASSWORD_REQUIREMENT_KEYS.MINIMUM_12_CHARACTERS]: {
        validator: (password: string) => /^.{12,}$/.test(password),
      },
    }),
    [PASSWORD_REQUIREMENT_KEYS.ONE_UPPERCASE_CHARACTER]: {
      validator: (password: string) => /[A-Z]/.test(password),
    },
    [PASSWORD_REQUIREMENT_KEYS.ONE_LOWERCASE_CHARACTER]: {
      validator: (password: string) => /[a-z]/.test(password),
    },
    [PASSWORD_REQUIREMENT_KEYS.ONE_NUMBER]: {
      validator: (password: string) => /\d/.test(password),
    },
    [PASSWORD_REQUIREMENT_KEYS.ONE_SPECIAL_CHARACTER]: {
      validator: (password: string) => /[^\w\s]/.test(password),
    },
  };
  return requirements;
};
