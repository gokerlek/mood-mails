import {
    Body,
    Container,
    Head,
    Heading,
    Html,
    Img,
    Preview,
    Markdown, Hr, } from "@react-email/components";
import * as React from "react";
import {Tailwind} from "@react-email/tailwind";
import {MailHead} from "../../../../components/mail-head";
import {FooterTr} from "../../../../components/footer-tr";

const text= {
    heading: 'Moodivation’a Hoş Geldin!',
    description: `
Moodivation, şirketlerin çalışanlarına kolayca anket gönderebilmesi ve sonuçları tamamen anonim olarak grup bazlı görüntülemesini sağlayan yeni nesil bir teknoloji platformudur.

Moodivation’dan gelecek kısa anketlere anonim yanıtlar verecek ve düşüncelerini isimsiz bir şekilde paylaşmış olacaksın. Bu yanıtlarla; gelişim alanlarını saptayacak, çok daha verimli bir öğrenme ortamı tasarlayacak çözüm yolları için rehberlik sistemi kurmaya ve daha kaliteli bir iş ortamı sağlayabilmek için yol haritası elde etmeye olanak sağlayacağız.

Değişimi başlatman için birkaç dakikanı ayırman yeterli!`,
}

const {heading, description} = text;

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

                    <FooterTr/>

                </Container>
            </Body>
        </Tailwind>
    </Html>
);

export default Tr;
