import {
    Body,
    Container,
    Head,
    Heading,
    Html,
    Img,
    Link,
    Preview,
    Text,
} from "@react-email/components";
import * as React from "react";

interface RequestProps {
    loginCode?: string;
}

const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "";

export const Request = ({
                         loginCode,
                     }: RequestProps) => (
    <Html>
        <Head />
        <Preview>Log in with this magic link</Preview>
        <Body >
            <Container >
                <Heading >Login</Heading>

                <Link
                    href="https://notion.so"
                    target="_blank"

                >
                    Click here to log in with this magic link
                </Link>

                <Text >
                    Or, copy and paste this temporary login code:
                </Text>
                <code >{loginCode}</code>
                <Text

                >
                    If you didn&apos;t try to login, you can safely ignore this email.
                </Text>
                <Text

                >
                    Hint: You can set a permanent password in Settings & members → My
                    account.
                </Text>
                <Img
                    src={`${baseUrl}/static/notion-logo.png`}
                    width="32"
                    height="32"
                    alt="Notion's Logo"
                />
                <Text>
                    <Link
                        href="https://notion.so"
                        target="_blank"

                    >
                        Notion.so
                    </Link>
                    , the all-in-one-workspace
                    <br />
                    for your notes, tasks, wikis, and databases.
                </Text>
            </Container>
        </Body>
    </Html>
);

Request.PreviewProps = {
    loginCode: "sparo-ndigo-amurt-secan",
} as RequestProps;

export default Request;
