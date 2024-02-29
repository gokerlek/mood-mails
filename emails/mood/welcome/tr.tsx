import {
    Body,
    Container,
    Head,
    Heading,
    Html,
    Img,
    Preview,
    Markdown, Font, Button, Hr, Section,
} from "@react-email/components";
import * as React from "react";
import {Tailwind} from "@react-email/tailwind";
import {MailHead} from "../../../components/mail-head";
import {FooterTr} from "../../../components/footer-tr";

const text= {
    heading: 'Moodivation’a Hoş Geldin!',
    description: `Şirketin tarafından Moodivation hesabın oluşturuldu. Aşağıdaki bilgilerinle giriş yapabilirsin!`,
    email: 'Giriş Mailin: **&&email&&**',
    password: 'Geçici Şifren: **&&password&&**',
    button: 'Moodivation’a Git',
}

const {heading, description, email, password, button} = text;

export const Tr  = () => (
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


                    <FooterTr/>

                </Container>
            </Body>
        </Tailwind>
    </Html>
);

export default Tr;
