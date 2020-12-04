
import React, {useEffect, useLayoutEffect} from "react";
import config from '../cms/cms-config'

const AdminPage = () => {

    // use of import ('netlify-cms-app') has been the only way to get Nextjs to gen the admin page
    // without throwing window undefined error.
    //
    // I also don't know how to properly type the config file.
    useEffect(() => {
        (async () => {

            const CMS = (await import('netlify-cms-app')).default ;

            // i'm using local netlify cms server for testing.
            if (location.hostname === "localhost" || location.hostname === "127.0.0.1")
                 config.local_backend = true;

            // how to type this.
            // @ts-ignore
            CMS.init({config});
        })();
    }, []);

    return <div />;
}
export default AdminPage;