import {Markdown} from "@react-email/components";
import * as React from "react";

const footer=`Link çalışmıyorsa ya da hesabına erişim sağlayamıyorsan [help@mooodvation.net](mailto:help@mooodvation.net?subject=&body=) mailinden bize ulaşabilirsin.`

export const FooterTr = () => (
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
