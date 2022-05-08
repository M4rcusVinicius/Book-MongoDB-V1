import { useState, FormEvent } from 'react';
import { Flex, Image, Button, Text } from '@chakra-ui/core'
import Input from '../../components/Input'
import axios from 'axios';

export default function Home() {
  const [RA, setRA] = useState('');
  const [password, setPassword] = useState('');

  function handleRegister(event: FormEvent) {
    event.preventDefault();

    axios.post('/api/register', { RA, password });
  }

  return (
    <Flex
      as="main"
      height="100vh"
      justifyContent="center"
      alignItems="center"
    >
      <Flex
        as="form"
        onSubmit={handleRegister}
        backgroundColor="gray.700"
        borderRadius="md"
        flexDir="column"
        alignItems="stretch"
        padding={8}
        marginTop={4}
        width="100%" 
        maxW="400px"
      >
        <Text textAlign="center" fontSize="sm" color="gray.400" marginBottom={2}>
          Assine a newsletter da Rocketseat e receba os melhores conteúdos sobre programação!
        </Text>

        <Input
          placeholder="RA"
          marginTop={2}
          value={RA}
          onChange={e => setRA(e.target.value)}
        />

        <Input
          placeholder="Password"
          marginTop={2}
          value={password}
          onChange={e => setPassword(e.target.value)}
        />

        <Button
          type="submit"
          backgroundColor="purple.500"
          height="50px"
          borderRadius="sm"
          marginTop={6}
          _hover={{ backgroundColor: 'purple.600' }}
        >
          Registrar
        </Button>
      </Flex>
    </Flex>
  )
}
