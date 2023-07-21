import { HtmlHTMLAttributes, ReactNode } from 'react';
import { IconType } from 'react-icons';

export type NavBarRootProps = HtmlHTMLAttributes<HTMLDivElement>;

export interface NavBarHeaderProps {
  children?: ReactNode;
}

export interface NavBarLinkProps {
  label: string;
  path: string;
  icon?: IconType;
}

export interface NavBarUserProps {
  userName: string;
}

export interface MenuOption {
  label: string;
  path: string;
}
