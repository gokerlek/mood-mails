import * as React from "react";
import {Font, Head} from "@react-email/components";

export const MailHead = () => (
        <Font
            fontFamily='Poppins'
            fallbackFontFamily='sans-serif'
            webFont={{
                url: 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap',
                format: 'woff2'
            }}
            fontStyle='normal'
            fontWeight={400}

        />
)
