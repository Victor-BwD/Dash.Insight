import { Link as ChakraLink, Icon, Text, LinkProps as ChakraLinksProps } from "@chakra-ui/react";
import React, { ElementType } from "react";
import Link from 'next/link';
import { ActiveLink } from "../ActiveLink";


interface NavLinkProps extends ChakraLinksProps {
    icon: ElementType;
    children: string;
    href: string;
}

export function NavLink({icon, children, href, ...rest }: NavLinkProps){
    return (
        <ActiveLink href={href} passHref>
        <ChakraLink display="flex" align="center" {...rest}>
            <Icon as={icon} fontSize="20" />
            <Text ml="4" fontWeight="medium">{children}</Text>
        </ChakraLink>
        </ActiveLink>
        
    );
}