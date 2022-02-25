import { Icon, Stack, Text } from "@chakra-ui/react";

const ItemSidebar = ({ icon, title }) => {
  return (
    <Stack
      _hover={{ backgroundColor: "gray.100" }}
      direction="row"
      alignItems="center"
      spacing="3"
      p={2}
    >
      <Icon as={icon} />
      <Text fontSize="xl">{title}</Text>
    </Stack>
  );
};

export default ItemSidebar;
