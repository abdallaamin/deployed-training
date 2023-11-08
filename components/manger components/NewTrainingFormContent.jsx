import React from 'react'
import { Select } from '@mantine/core';
import ExpandMoreSharpIcon from '@mui/icons-material/ExpandMoreSharp';
import { Textarea } from '@mantine/core';
import { Radio, Group } from '@mantine/core';
import { Input } from '@mantine/core';

const NewTrainingFormContent = () => {
    return (
        <div>
            <Select

                label="Choose Center"
                placeholder="Center Name"
                required
                searchable
                nothingFound="No options"
                data={['option1', 'option2', 'option3', 'option4']}
                rightSection={<ExpandMoreSharpIcon />}
            />
            <Select
                rightSection={<ExpandMoreSharpIcon />}
                label="Choose Group Service Line Lead Name"
                placeholder="GSL Lead Name"
                required
                searchable
                nothingFound="No options"
                data={['option1', 'option2', 'option3', 'option4']}
            />

            <Textarea
                placeholder="Training Name"
                label="Training Name"
                withAsterisk
                required
                size="md"
            />

            <Textarea
                label="Training Content Outline(Including any relevant Urls)"
                placeholder="URL"
                withAsterisk
                required
                size="md"
            />

            <Radio.Group
                name="Certification"
                label="Any Certification Required ? "
                withAsterisk
            >
                <Group mt="xs">
                    <Radio value="Yes" label="Yes" color="red" />
                    <Radio value="No" label="No" color="red" />
                </Group>
            </Radio.Group>

            <Radio.Group
                name="Labs"
                label="Any Labs Required ? "
                withAsterisk
            >
                <Group mt="xs">
                    <Radio value="Yes" label="Yes" color="red" />
                    <Radio value="No" label="No" color="red" />
                </Group>
            </Radio.Group>


            <Input.Wrapper
                id="no-participants"
                withAsterisk
                label="Number of Participants"
            >
                <Input id="no-participants" placeholder="Num. of participants" />
            </Input.Wrapper>

            <Input.Wrapper
                id="no-training"
                withAsterisk
                label="Proposed Training Days"
            >
                <Input id="no-training" placeholder="Num. of Days" />
            </Input.Wrapper>


            <Radio.Group
                name="Priority"
                label="Priority "
                withAsterisk
            >
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '10px' }}>
                    <Radio value="P1" label="P1-Critical to have /Business Impacting" color="red" />
                    <Radio value="P2" label="P2-Important to have " color="red" />
                </div>
            </Radio.Group>


            <Select
                rightSection={<ExpandMoreSharpIcon />}
                label="Proficiency Level"
                placeholder="L1"
                searchable
                required
                nothingFound="No options"
                data={['L1', 'L2', 'L3', 'L4']}
            />

            <Select
                rightSection={<ExpandMoreSharpIcon />}
                label="Skills Categories"
                placeholder="Skills Categories"
                searchable
                required
                nothingFound="No options"
                data={['L1', 'L2', 'L3', 'L4']}
            />

            <Radio.Group
                name="TrainingType"
                label="Training Type"
                withAsterisk
            >
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '10px' }}>
                    <Radio value="Upskilling" label="Upskilling-Developing Additional skills to enhance performance/knwledge in current role" color="red" />
                    <Radio value="Reskilling" label="Reskilling-Developing new skills to perfoem a different job potentially in a new domain" color="red" />
                </div>
            </Radio.Group>

            <Textarea
                label="Business Justification- Please Include the anticipated impact/return on investments relevant "
                placeholder="Business Justification"
                withAsterisk
                required
                size="md"
            />

            <Radio.Group
                name="deliverytype"
                label="Proposed External Delivery Type"
                withAsterisk
            >
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '10px' }}>
                    <Radio value="Udacity" label="Udacity Platform License" color="red" />
                    <Radio value="Coursera" label="Coursera Platform License" color="red" />
                    <Radio value="PluralSight" label="PluralSight  Platform License" color="red" />
                    <Radio value="SPEEXX" label="SPEEXX Platform License" color="red" />
                    <Radio value="Vendors/Suppliers" label="Vendors / Suppliers" color="red" />
                </div>
            </Radio.Group>

            <Radio.Group
                name="quarter"
                label="Preferred Quarter"
                withAsterisk
            >
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '10px' }}>
                    <Radio value="Q1" label="Q1 (April 23 to June 23)" color="red" />
                    <Radio value="Q2" label="Q2 (July 23 to September 23)" color="red" />
                    <Radio value="Q3" label="Q3 (October 23 to December 23)" color="red" />
                    <Radio value="Q4" label="Q4 (January 23 to March 23)" color="red" />
                </div>
            </Radio.Group>

        </div>
    )
}

export default NewTrainingFormContent