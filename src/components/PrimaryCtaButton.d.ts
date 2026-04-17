import React from "react";
import { ButtonProps } from "@chakra-ui/react";
export interface PrimaryCtaButtonProps extends ButtonProps {
    children?: React.ReactNode;
}
export declare function PrimaryCtaButton({ children, ...rest }: PrimaryCtaButtonProps): import("react/jsx-runtime").JSX.Element;
