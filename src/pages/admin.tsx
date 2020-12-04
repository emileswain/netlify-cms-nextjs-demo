
import React, {useEffect, useLayoutEffect} from "react";
import config from '../cms/cms-config'

const AdminPage = () => {

    useEffect(() => {
        (async () => {

            const CMS = (await import('netlify-cms-app')).default ;
            if (location.hostname === "localhost" || location.hostname === "127.0.0.1")
                 config.local_backend = true;

            CMS.init({config});
        })();
    }, []);

    return <div />;
}
export default AdminPage;