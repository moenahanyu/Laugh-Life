import React from "react"
import {Helmet} from 'react-helmet'

  


export default () => (

    <>
        <Helmet>
        <title>emptiness page</title>
        <meta name="robots" content="noindex,nofollow"/>
        <meta name="google-site-verification" content="8P5EWhgEP263lAPbER_2K_NOyE2S9IJLeWzJW-Zux_E" />
        </Helmet>

        <script
        key={`gatsby-plugin-cushion`}
        dangerouslySetInnerHTML={{
            __html: `!function(t,e){s=t.createElement(e),s.async=!0,s.src="https://cdn.monkey-ads.com/js/cushion.js",t.getElementsByTagName("body")[0].appendChild(s)}(document,"script")`,
        }}
        />

    </>


)