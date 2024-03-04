import {
    Body,
    Container,
    Head,
    Heading,
    Html,
    Img,
    Preview,
    Markdown, Text, Button,
} from "@react-email/components";
import * as React from "react";
import {Tailwind} from "@react-email/tailwind";
import {MailHead} from "../../../components/mail-head";
import {FooterTr} from "../../../components/footer-tr";
import {AnonymousTr} from "../../../components/anonymous-tr";

export const text = {
    heading: 'Yeni bir anketin var!',
    info: `%%surveyname%% yayında!`,
    button: 'Ankete Başla',
    survey_description: '%%surveyndecription%%',
    description: `**%100 Anonim** olarak katılacağın bu ankete sadece birkaç dakikanı ayırman yeterli!`,
}

const {heading, info,survey_description, description, button} = text;

export const Tr=() => (
    <Html>
        <Tailwind >

            <Head>
                <MailHead/>
            </Head>

            <Preview>{heading}</Preview>


            <Body className='bg-gray-50'>
                <Container className='px-5 sm:px-10 mx-auto bg-white py-8 max-w-3xl rounded-lg'>
                    <Img src={'https://app.moodivation.net/mail/moodivation.png'}   alt="Modivation" className='w-[240px]' />

                    <Heading className='sm:text-2xl text-lg font-semibold sm:mt-20 mt-12 sm:mb-12 mb-6 text-gray-800'>{heading}</Heading>

                    <Text>
                        {info}
                    </Text>

                    <AnonymousTr />

                    <Text>
                        {survey_description}
                    </Text>

                    <Markdown
                        markdownCustomStyles={{
                            p: {
                                color: "#212529",
                                fontSize: "14px",
                                marginTop: "24px",
                                lineHeight: "1.5",
                            },
                        }}
                    >
                        {description}
                    </Markdown>

                    <Button href="%%link%%" className='bg-[#92B6B1] text-white px-6 py-4 rounded-md mt-6'>{button}</Button>

                    <FooterTr/>
                </Container>
            </Body>
        </Tailwind>
    </Html>
);

export default Tr;

