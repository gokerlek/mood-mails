import * as React from "react";
import {Column, Img, Markdown, Row, Section} from "@react-email/components";
import {FC} from "react";

export const anonymous =
     `
**%%surveyname%%**
    
Bu ankete %%username%% olarak katılacaksın.
    `;

export const NonAnonymousTr:FC = () => {
    return(
        <Section className='bg-gray-50 rounded px-2 py-1 my-6' align='left'>
            <Row>
                <Column className='w-5'>
                    <Img src='https://app.moodivation.net/mail/person.png' alt='Anonym' className=' w-10 mr-2'  />

                </Column>
                <Column>
                    <Markdown
                        markdownCustomStyles={{
                            p: {
                                color: "#212529",
                                fontSize: "14px",
                                margin: "8px",
                            },
                            bold: {
                                fontSize: "18px",
                                lineHeight: "1.5",
                            }
                        }}
                    >
                        {anonymous}
                    </Markdown>
                </Column>
            </Row>
        </Section>
    )
}
