import { Flex, useBreakpointValue } from '@chakra-ui/react'
import React from 'react';
import { Logo } from './Logo';
import { NotificationsNav } from './NotificationNav';
import { Profile } from './Profile';
import { SearchBox } from './SearchBox';


export function Header(){
    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true,

    })

    return (
        <Flex w="100%" as="header" maxWidth={1480} h="20" mx="auto" mt="4" px="6" align="center" >
            <Logo />
           {isWideVersion && <SearchBox />}
            
            <Flex alignItems="center" ml="auto">
                <NotificationsNav />
                <Profile showProfileData={isWideVersion} />
            </Flex>

            
        </Flex>
    );
}