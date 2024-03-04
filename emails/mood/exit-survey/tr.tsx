import {Body, Button, Container, Head, Heading, Html, Img,  Preview, Text} from "@react-email/components";
import {Tailwind} from "@react-email/tailwind";
import {MailHead} from "../../../components/mail-head";
import {NonAnonymousTr} from "../../../components/non-anonymous-tr";
import {FooterTr} from "../../../components/footer-tr";
import * as React from "react";

export const text = {
    heading: 'İşten Çıkış Anketin Hazır!',
    info: "İşten Çıkış Anketine Katılımını Bekliyoruz",
    button: 'Ankete Başla',
    survey_description: '%%surveydescription%%',
}

const {heading, info,survey_description,  button} = text;

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

                    <NonAnonymousTr />

                    <Text>
                        {survey_description}
                    </Text>


                    <Button href="%%link%%" className='bg-[#92B6B1] text-white px-6 py-4 rounded-md mt-6'>{button}</Button>

                    <FooterTr/>
                </Container>
            </Body>
        </Tailwind>
    </Html>
);

export default Tr;
