import { ButtonHTMLAttributes, InputHTMLAttributes } from 'react';
import { FormSelectProps as SelectProps } from 'react-bootstrap';
import { LinkProps } from 'react-router-dom';

export interface FormButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  isLoading: boolean;
}

export interface ErrorMessageProps {
  field: string;
}

export interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

export interface FormLinkProps extends LinkProps {
  to: string;
  text: string;
  variant?: 'left' | 'center' | 'right';
}

export interface FormSelectProps extends SelectProps {
  name: string;
}
