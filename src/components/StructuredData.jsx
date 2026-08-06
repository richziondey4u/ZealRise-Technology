import { useEffect } from "react";

const SITE_URL = "https://yourdomain.com";
const PERSON_NAME = "Your Name";
const JOB_TITLE = "Full Stack Engineer";

export default function StructuredData({ pageTitle, path = "/" }) {
  useEffect(() => {
    const scriptId = "structured-data-script";
    let script = document.getElementById(scriptId);
    if (!script) {
      script = document.createElement("script");
      script.id = scriptId;
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }

    const data = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Person",
          name: PERSON_NAME,
          jobTitle: JOB_TITLE,
          url: SITE_URL,
          sameAs: [
            "https://github.com/yourusername",
            "https://linkedin.com/in/yourusername",
            "https://twitter.com/yourusername",
          ],
        },
        {
          "@type": "WebSite",
          name: "ZealRise-Technology",
          url: SITE_URL,
        },
        {
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: SITE_URL,
            },
            ...(path !== "/"
              ? [
                  {
                    "@type": "ListItem",
                    position: 2,
                    name: pageTitle,
                    item: `${SITE_URL}${path}`,
                  },
                ]
              : []),
          ],
        },
      ],
    };

    script.textContent = JSON.stringify(data);

    return () => {
      // leave script in place between route changes; content is updated on next mount
    };
  }, [pageTitle, path]);

  return null;
}
