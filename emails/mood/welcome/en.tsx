import {
    Body,
    Container,
    Head,
    Heading,
    Html,
    Img,
    Preview,
    Markdown, Font, Button, Text, Section, Row, Column, Hr
} from "@react-email/components";
import * as React from "react";
import {Tailwind} from "@react-email/tailwind";
import {MailHead} from "../../../components/mail-head";
import {FooterEn} from "../../../components/footer-en";

const text= {
    heading: 'Welcome to Moodivation!',
    description: `
Your Moodivation account has been created by your company.

Login with the following information You can do it!`,
    button: 'Go to Moodivation',
    email: 'Login email: **&&email&&**',
    password: 'Temporary password: **&&password&&**',
}

const {heading, description, button, email, password} = text;


export const En = () => (
    <Html>
        <Tailwind >

            <Head>
                <MailHead/>
            </Head>

            <Preview>{heading}</Preview>


            <Body className='bg-gray-50'>
                <Container className='px-5 sm:px-10 mx-auto bg-white py-8 max-w-3xl rounded-lg'>
                    <Img src={'https://app.moodivation.net/mail/moodivation.png'} alt="Modivation"
                         className='w-[240px]'/>

                    <Hr className='my-5 border-0' />

                    <Heading className='sm:text-2xl text-lg font-semibold sm:mt-20 sm:mb-12 '>{heading}</Heading>


                    <Markdown
                        markdownCustomStyles={{
                            p: {
                                color: "#212529",
                                fontSize: "14px",
                                lineHeight: "1.5",
                            },
                        }}
                    >
                        {description}
                    </Markdown>

                    <Hr className='mt-1 border-0' />

                    <Section className='bg-gray-50 rounded px-4 w-fit' align='left'>
                        <Markdown
                            markdownCustomStyles={{
                                p: {
                                    color: "#212529",
                                    fontSize: "14px",
                                },

                            }}
                        >
                            {`
                                
${email}
                            
${password}
                            `}
                        </Markdown>

                    </Section>

                    <Hr className='my-5 border-0' />

                    <Button href="%%link%%" className='bg-[#92B6B1] text-white px-6 py-4 rounded-md min-w-fit'>
                        {button}
                    </Button>


                    <FooterEn/>
                </Container>
            </Body>
        </Tailwind>
    </Html>
);

export default En;

