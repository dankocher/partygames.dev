import React, { useEffect } from "react";

const RedirectNeverEver = () => {
  useEffect(() => {
    // if (isIOS) {
    //   window.location.replace(Urls.NeverEver.AppleStoreUrl);
    // } else if (isAndroid) {
    //   window.location.replace(Urls.NeverEver.GoogleStoreUrl);
    // } else {
    // window.location.replace(Urls.NeverEver.WebsiteUrl);
    // }

    /// Because NeverEver on Metamodern Store - 20 November 2024
    window.location.replace("https://metamodern.dev/");
  }, []);

  return <div/>;
};

export default RedirectNeverEver;
