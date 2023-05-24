import React, { useEffect } from "react";
import { isAndroid, isIOS } from "react-device-detect";

import { Urls } from "../../constants/urls";

const RedirectTimeZo = () => {
    useEffect(() => {
        if (isIOS) {
            window.location.replace(Urls.TimeZo.AppleStoreUrl)
        } else if (isAndroid) {
            window.location.replace(Urls.TimeZo.GoogleStoreUrl)
        } else {
            window.location.replace(Urls.TimeZo.WebsiteUrl)
        }
    }, []);

    return <div/>;
};

export default RedirectTimeZo;
