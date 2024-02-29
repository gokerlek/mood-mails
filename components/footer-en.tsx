import * as React from "react";
import {Markdown} from "@react-email/components";

const     footer=`If the link is not working or you cannot access your account, you can reach us at [help@mooodvation.net](mailto:help@mooodvation.net?subject=&body=)`

export const FooterEn = () => (
    <Markdown
        markdownContainerStyles={{
            marginTop: "30px",
            display: "flex",
            justifyContent: "center",

        }}
        markdownCustomStyles={{
            p: {
                color: "#6C757D",
                fontSize: "10px",
                fontStyle: "italic",
                lineHeight: "1.5",
            },
            link: {
                color: "#9F86C0",
                textDecoration: "underline",
            },
        }}
    >
        {footer}
    </Markdown>
)
