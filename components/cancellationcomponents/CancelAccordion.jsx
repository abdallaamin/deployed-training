import { Accordion } from '@mantine/core';

function CancelAccordion({ cancellationReason }) {
    return (
        <div >
        <Accordion variant="filled" radius="md" defaultValue="customization">
            <Accordion.Item value="customization">
                    <Accordion.Control style={{ 
                    fontSize: '20px',
                    color:'#333',
                    fontStyle: 'normal',
                    fontWeight: '400',
                    lineHeight: '28px',
                    }}>Cancellation Reason</Accordion.Control>
                <Accordion.Panel style={{
                    color: '#000',
                    fontSize: '20px',
                    fontStyle: 'normal',
                    fontWeight: '400',
                    lineHeight: '28px',
                    }}>{cancellationReason}</Accordion.Panel>
            </Accordion.Item>
        </Accordion>
        </div>
    );
}

export default CancelAccordion ; 