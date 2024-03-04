import {
    Body,
    Container,
    Head,
    Heading,
    Html,
    Img,
    Preview,
    Markdown,  Hr
} from "@react-email/components";
import * as React from "react";
import {Tailwind} from "@react-email/tailwind";
import {MailHead} from "../../../../components/mail-head";
import {FooterEn} from "../../../../components/footer-en";

const text= {
    heading: 'Welcome to Moodivation!',
    description: `
Moodivation is a new generation technology platform that enables companies to easily send surveys to their employees and view the results anonymously on a group basis.

With Moodivation, you will respond anonymously to short surveys and share your thoughts anonymously. Through these answers, we can establish a guidance system for solutions that will identify development areas, design a more efficient learning environment, and provide a roadmap to improve work environments.

It only takes a few minutes to start the change!`,

}

const {heading, description} = text;


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

                    <FooterEn/>
                </Container>
            </Body>
        </Tailwind>
    </Html>
);

export default En;

