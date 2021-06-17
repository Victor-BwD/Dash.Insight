import { Text } from '@chakra-ui/react';

export function Logo() {
    return (
        <Text fontSize="3xl" fontWeight="bold" letterSpacing="tight" w="64">
                Dash<Text as="span" color="red.500">.</Text>Insight<Text as="span" ml="1" color="red.500">!</Text>
                
            </Text>
    );
}