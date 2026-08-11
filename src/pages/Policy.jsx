import SEO from '../components/SEO.jsx'
import SectionHeading from '../components/ui/SectionHeading.jsx'
import ScrollReveal from '../components/ui/ScrollReveal.jsx'

export default function Policy() {
  return (
    <section className="container-custom pt-16 pb-24 md:pt-24 md:pb-32">
      <SEO
        title="Software Development & Licensing Policy"
        description="General software development and licensing policy for web and mobile app projects."
        path="/policy"
      />
      <SectionHeading
        eyebrow="Legal"
        title="Software Development & Licensing Policy"
        description="General terms that apply to the software development services offered on this portfolio."
      />

      <div className="max-w-3xl mx-auto space-y-12">
        <ScrollReveal>
          <p className="text-text-muted text-base leading-relaxed">
            This policy outlines the general principles I follow when
            designing, developing, and delivering software for clients,
            including web applications and mobile applications. It is
            intended to give prospective and current clients a clear,
            general understanding of how project scope, intellectual
            property, and licensing are typically approached. This policy
            applies broadly across projects and does not describe the terms
            of any specific engagement. Where a signed project agreement,
            proposal, statement of work, or contract exists between me and a
            client, the terms of that specific written agreement take
            precedence over this general policy in all cases.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="glass rounded-2xl p-6 md:p-8">
            <h2 className="text-xl md:text-2xl font-semibold tracking-tight mb-4">
              1. Scope
            </h2>
            <p className="text-text-muted text-sm md:text-base leading-relaxed">
              This policy applies generally to software development services
              I provide, including but not limited to custom web
              applications, mobile applications, backend systems, and
              related technical work. It is written as a general reference
              and does not itself constitute a contract or legal agreement.
              Specific project details — including deliverables, timelines,
              pricing, ownership terms, and licensing conditions — are
              defined separately in a written agreement for each individual
              project. In the event of any conflict between this policy and
              a signed project agreement, the signed agreement governs.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="glass rounded-2xl p-6 md:p-8">
            <h2 className="text-xl md:text-2xl font-semibold tracking-tight mb-4">
              2. Intellectual Property &amp; Ownership
            </h2>
            <p className="text-text-muted text-sm md:text-base leading-relaxed">
              Ownership of intellectual property, including source code,
              designs, and related project materials, is determined by the
              specific written agreement for each project and can vary from
              project to project. This policy does not, by itself, grant,
              transfer, reserve, or retain any copyright or ownership rights
              to either party. Any pre-existing tools, libraries, frameworks,
              or proprietary code that I bring into a project remain subject
              to their own applicable licenses, and their use in a project
              does not automatically transfer ownership of those underlying
              components. Clients are encouraged to review the ownership and
              licensing terms in their individual project agreement, as
              those terms are the ones that apply.
            </p>
          </div>
        </ScrollReveal>

        <div>
          <ScrollReveal>
            <h2 className="text-xl md:text-2xl font-semibold tracking-tight mb-2">
              3. Development &amp; Licensing Models
            </h2>
            <p className="text-text-muted text-sm md:text-base leading-relaxed mb-6">
              Projects can be structured under different licensing
              approaches depending on the client's needs. None of the
              following models apply automatically — the specific model
              used for a given project, and its exact terms, are determined
              by the written project agreement.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <ScrollReveal delay={0.1}>
              <div className="glass rounded-2xl p-6 h-full flex flex-col">
                <span className="text-xs font-medium text-primary-light tracking-widest mb-3">
                  A
                </span>
                <h3 className="text-lg font-semibold mb-3">
                  Standard Development License
                </h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  Under this model, the client receives the completed
                  software along with the agreed rights to use it for the
                  intended business or project purpose, as defined in the
                  project agreement. Unless the agreement states otherwise,
                  general-purpose reusable development techniques,
                  components, frameworks, libraries, and other pre-existing
                  technology used in building the software are not
                  automatically transferred to the client.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="glass rounded-2xl p-6 h-full flex flex-col">
                <span className="text-xs font-medium text-primary-light tracking-widest mb-3">
                  B
                </span>
                <h3 className="text-lg font-semibold mb-3">
                  Source Code License
                </h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  Under this model, the client may receive the project's
                  source code along with specified rights to use, modify,
                  maintain, or deploy it, as set out in the agreed license
                  terms. Receiving the source code does not, by itself, mean
                  that copyright ownership of that code has been
                  transferred — the scope of the license is defined
                  separately in the project agreement.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="glass rounded-2xl p-6 h-full flex flex-col">
                <span className="text-xs font-medium text-primary-light tracking-widest mb-3">
                  C
                </span>
                <h3 className="text-lg font-semibold mb-3">
                  Exclusive Ownership / Assignment
                </h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  A client may negotiate an exclusive transfer or assignment
                  of specified intellectual property rights related to a
                  project. This must be explicitly agreed to in writing, and
                  may involve an additional fee, since exclusivity can
                  restrict my ability to reuse or commercialize certain
                  project-specific work in the future.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>

        <ScrollReveal>
          <div className="glass rounded-2xl p-6 md:p-8">
            <h2 className="text-xl md:text-2xl font-semibold tracking-tight mb-4">
              4. Reusable Technology &amp; Development Knowledge
            </h2>
            <p className="text-text-muted text-sm md:text-base leading-relaxed mb-4">
              In the course of delivering client projects, I develop and
              apply general-purpose programming techniques, development
              patterns, architecture concepts, generic utilities, reusable
              components, non-client-specific code, framework knowledge,
              development workflows, and technical know-how. This general
              knowledge and reusable technology is not tied to any single
              client or project, and I may continue to use, refine, and
              apply it across future projects and for other clients.
            </p>
            <p className="text-text-muted text-sm md:text-base leading-relaxed">
              This does not extend to, and never grants permission to
              disclose or reuse, any client confidential information,
              private credentials, customer or personal data, proprietary
              business information, client-owned branding or assets,
              project-specific confidential materials, or any intellectual
              property that the client specifically owns under the relevant
              project agreement. General development knowledge and reusable
              technology are treated as distinct from, and are never used as
              a basis to access or repurpose, a client's confidential or
              proprietary information.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="glass rounded-2xl p-6 md:p-8">
            <h2 className="text-xl md:text-2xl font-semibold tracking-tight mb-4">
              5. Third-Party Software &amp; Services
            </h2>
            <p className="text-text-muted text-sm md:text-base leading-relaxed mb-4">
              Many projects rely on third-party technology and services,
              which may include open-source libraries and frameworks, APIs
              and SDKs, cloud hosting providers, cloud storage and media
              services, payment gateways, authentication providers, email
              and messaging services, maps and location services, analytics
              and monitoring services, databases, and other infrastructure
              providers. These third-party products and services remain
              subject to their own respective licenses, terms of service,
              pricing, availability, and usage restrictions, and I do not
              own them.
            </p>
            <p className="text-text-muted text-sm md:text-base leading-relaxed mb-4">
              I cannot transfer ownership of any third-party software,
              service, or intellectual property that I do not own. Where a
              project depends on paid third-party services, any recurring
              costs associated with them — such as hosting, storage, or API
              usage fees — may be paid directly by the client or included as
              part of a project or maintenance agreement, where explicitly
              agreed in writing.
            </p>
            <p className="text-text-muted text-sm md:text-base leading-relaxed">
              Changes to third-party services — including outages, pricing
              changes, API changes, policy updates, or discontinuation of a
              service — are outside of my control and may affect the
              functioning of an application. Addressing such changes may
              require additional work, which may be subject to a separate
              agreement depending on the scope involved.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="glass rounded-2xl p-6 md:p-8">
            <h2 className="text-xl md:text-2xl font-semibold tracking-tight mb-4">
              6. Client Content, Data &amp; Assets
            </h2>
            <p className="text-text-muted text-sm md:text-base leading-relaxed mb-4">
              Clients remain responsible for the materials they provide for
              use in a project, including logos and branding, images and
              videos, text and other content, product information,
              customer or user data, documents, trademarks, and other
              business information. The client is responsible for ensuring
              they hold the necessary rights, permissions, and lawful basis
              to provide these materials and to have them used within the
              application being developed.
            </p>
            <p className="text-text-muted text-sm md:text-base leading-relaxed mb-4">
              I will not knowingly use client-provided confidential
              information or personal data for any purpose unrelated to
              delivering the agreed project.
            </p>
            <p className="text-text-muted text-sm md:text-base leading-relaxed">
              For clarity, a project generally involves three distinct
              categories of material: client-provided content and data
              (such as branding, text, images, or user data supplied by the
              client), developer-created software (the code, architecture,
              and technical implementation built during the project), and
              third-party technology (external services, libraries, or
              infrastructure that remain subject to their own licenses).
              Each category is treated separately, and ownership or usage
              rights for each are addressed according to this policy and
              the applicable project agreement.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}