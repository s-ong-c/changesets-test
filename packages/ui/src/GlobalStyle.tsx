import { css, Global } from '@emotion/react'
export const GlobalStyle = () => (
  <Global
    styles={[
      css`
        /** TODO CDN */
        @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css');
        :root {
          --font-family: 'Pretendard', -apple-system, BlinkMacSystemFont,
            'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans',
            'Droid Sans', 'Helvetica Neue', sans-serif;
        }
        html,
        body {
          font-family: var(--font-family) !important;
          text-rendering: optimizeLegibility;
          -webkit-font-smoothing: antialiased;
          font-size: 1rem;

          /** ios safari fixed bottom 대응 */
          height: 100%;
          overflow-x: hidden;
          overflow-y: scroll;
          -webkit-overflow-scrolling: touch;
        }

        div,
        article,
        section {
          box-sizing: border-box;
        }

        body,
        div,
        span,
        applet,
        object,
        iframe,
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        p,
        blockquote,
        pre,
        a,
        abbr,
        acronym,
        address,
        big,
        cite,
        code,
        del,
        dfn,
        em,
        img,
        ins,
        kbd,
        q,
        s,
        samp,
        small,
        strike,
        strong,
        sub,
        sup,
        tt,
        var,
        b,
        u,
        i,
        center,
        dl,
        dt,
        dd,
        ol,
        ul,
        li,
        fieldset,
        form,
        label,
        legend,
        table,
        caption,
        tbody,
        tfoot,
        thead,
        tr,
        th,
        td,
        article,
        aside,
        canvas,
        details,
        embed,
        figure,
        figcaption,
        footer,
        header,
        hgroup,
        menu,
        nav,
        output,
        ruby,
        section,
        summary,
        time,
        mark,
        video {
          padding: 0;
          border: 0;
          font-size: 1rem;
          font: inherit;
          vertical-align: baseline;
        }

        label,
        input,
        button,
        a {
          -webkit-tap-highlight-color: transparent;
        }

        /* HTML5 display-role reset for older browsers */
        article,
        details,
        figcaption,
        figure,
        footer,
        header,
        hgroup,
        menu,
        nav,
        section {
          display: block;
        }

        body {
          line-height: 1;
        }

        ol,
        ul {
          list-style: none;
        }

        blockquote,
        q {
          quotes: none;
        }

        blockquote:before,
        blockquote:after,
        q:before,
        q:after {
          content: '';
          content: none;
        }

        table {
          border-collapse: collapse;
          border-spacing: 0;
        }

        string {
          font-weight: 600 !important;
        }
      `,
    ]}
  />
)
