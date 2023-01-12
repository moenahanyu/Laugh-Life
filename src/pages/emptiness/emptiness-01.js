import React from "react"
import {Helmet} from 'react-helmet'

  


export default () => (

    <>
        <Helmet>
        <title>emptiness page</title>
        <meta name="robots" content="noindex,nofollow"/>
        </Helmet>

        <script
        key={`gatsby-plugin-cushion`}
        dangerouslySetInnerHTML={{
            __html: `!function(t,e){s=t.createElement(e),s.async=!0,s.src="https://cdn.monkey-ads.com/js/cushion.js",t.getElementsByTagName("body")[0].appendChild(s)}(document,"script")`,
        }}
        />

    </>


)