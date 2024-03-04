import {
    Body,
    Container,
    Head,
    Heading,
    Hr,
    Html,
    Img,
    Markdown,
    Preview,
    Section,
    Text
} from "@react-email/components";
import {Tailwind} from "@react-email/tailwind";
import {MailHead} from "../../../components/mail-head";
import * as React from "react";
import {FooterTr} from "../../../components/footer-tr";

const text= {
    heading: 'Şifre Yenileme Talebi',
    description: 'Şifrenizi aşağıdaki kod ile yenileyebilirsiniz:',
    code: '**%%code%%**',
}

const {heading,  code, description,} = text;


export const Tr = () => (
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

                    <Text className='mb-1'>
                        {description}
                    </Text>

                    <Section className='bg-gray-50 rounded px-4 w-fit' align='left'>
                        <Markdown
                            markdownCustomStyles={{
                                p: {
                                    color: "#212529",
                                    fontSize: "18px",
                                },

                            }}
                        >
                            {`
                                
${code}
                            
                            `}
                        </Markdown>

                    </Section>
                    <Hr className='mt-1 border-0' />


                    <FooterTr/>
                </Container>
            </Body>
        </Tailwind>
    </Html>
);

export default Tr;
