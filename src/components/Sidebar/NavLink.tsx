import { Link as ChakraLink, Icon, Text, LinkProps as ChakraLinksProps } from "@chakra-ui/react";
import React, { ElementType } from "react";
import Link from 'next/link';


interface NavLinkProps extends ChakraLinksProps {
    icon: ElementType;
    children: string;
    href: string;
}

export function NavLink({icon, children, ...rest }: NavLinkProps){
    return (
        
        <ChakraLink display="flex" align="center" {...rest}>
            <Icon as={icon} fontSize="20" />
            <Text ml="4" fontWeight="medium">{children}</Text>
        </ChakraLink>
        
    );
}