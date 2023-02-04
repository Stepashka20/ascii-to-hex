import { Card, Box, Text, Badge, Button, Group, Textarea } from '@mantine/core';
import { IconCopy,IconLetterCase } from '@tabler/icons-react';

function CardConvertor ({title,icon}) {

    return (
        <Card shadow="sm" p="lg" radius="md" withBorder w={400} m={16}>
            <Card.Section withBorder inheritPadding py="xs" mb={16}>
                <Text size="lg" color="white" variant='gradient' ta="center" weight="bold" gradient={{from: '#076585', to: '#fff', deg: 45}} style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    {icon}{title}
                </Text>
            </Card.Section>
            <Textarea
                autosize={true}
                minRows={4}
                maxRows={8}
            />
            <div style={{display: 'flex', justifyContent: 'space-between', gap: 12}}>
                <Button color="blue"fullWidth  mt="md" radius="md">
                    Convert
                </Button>
                <Button variant="default"  color="blue" mt="md" radius="md">
                    <IconCopy />
                </Button>
            </div>
            
        </Card>
    )
}

export default CardConvertor