'use client'

import React, { memo, useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import './services-scroll.css'

export type ServiceVisualType =
  | 'ai'
  | 'code'
  | 'devices'
  | 'lifecycle'
  | 'team'
  | 'delivery'
  | 'erp'
  | 'sap'

export type ServiceItem = {
  number: string
  label: string
  title: string
  shortTitle?: string
  description: string
  href: string
  cta: string
  visual: ServiceVisualType
}

export type ServicesScrollProps = {
  /** Main section kicker tag */
  capabilitiesKicker?: string
  /** Main section heading title (string or ReactNode) */
  capabilitiesTitle?: React.ReactNode
  /** Main section description note */
  capabilitiesNote?: string
  /** Label above the core grid */
  coreLabel?: string
  /** Core services array */
  coreServices?: ServiceItem[]
  /** Enterprise section kicker tag */
  enterpriseKicker?: string
  /** Enterprise heading title (string or ReactNode) */
  enterpriseTitle?: React.ReactNode
  /** Enterprise section description */
  enterpriseDescription?: string
  /** Enterprise services array */
  enterpriseServices?: ServiceItem[]
  /** Custom click handler for service links */
  onServiceClick?: (service: ServiceItem, event: React.MouseEvent) => void
  /** Custom Link component (defaults to Next.js <Link>) */
  linkComponent?: React.ComponentType<{
    href: string
    className?: string
    children: React.ReactNode
    onClick?: (e: React.MouseEvent) => void
  }>
  /** Custom visual renderer if users want to supply custom graphics */
  renderVisual?: (type: ServiceVisualType) => React.ReactNode
  /** Optional container class name */
  className?: string
  /** Optional section ID */
  id?: string
}

const defaultCoreServices: ServiceItem[] = [
  {
    number: '01',
    label: '01 / AI',
    title: 'AI Engineering & Solutions',
    shortTitle: 'AI Engineering',
    description: 'Design, build, and deploy AI systems that drive automation, intelligence, and business growth.',
    href: '/ai-engineering',
    cta: 'Explore AI Engineering',
    visual: 'ai',
  },
  {
    number: '02',
    label: '02 / SOFTWARE',
    title: 'Custom Software Development',
    shortTitle: 'Custom Software',
    description: 'Tailor-made software built for performance, scalability, and long-term success.',
    href: '/services',
    cta: 'Explore',
    visual: 'code',
  },
  {
    number: '03',
    label: '03 / DIGITAL',
    title: 'Web & App Development',
    shortTitle: 'Web & App',
    description: 'Modern, fast, and secure web & mobile applications using cutting-edge frameworks.',
    href: '/services',
    cta: 'Explore',
    visual: 'devices',
  },
  {
    number: '04',
    label: '04 / PRODUCT',
    title: 'Product Engineering & MVPs',
    shortTitle: 'Product Engineering',
    description: 'From idea to MVP to enterprise-grade product.',
    href: '/services',
    cta: 'Explore',
    visual: 'lifecycle',
  },
  {
    number: '05',
    label: '05 / TALENT',
    title: 'Tech Talent On Demand',
    shortTitle: 'Tech Talent',
    description: 'Hire skilled developers and AI engineers instantly for your projects.',
    href: '/tech-talent',
    cta: 'Build your team',
    visual: 'team',
  },
  {
    number: '06',
    label: '06 / DELIVERY',
    title: 'End-to-End Delivery',
    shortTitle: 'End-to-End Delivery',
    description: 'Complete lifecycle support from strategy to scale.',
    href: '/end-to-end',
    cta: 'Explore',
    visual: 'delivery',
  },
]

const defaultEnterpriseServices: ServiceItem[] = [
  {
    number: '07',
    label: '07 / ERP',
    title: 'ERP Solutions',
    shortTitle: 'ERP Solutions',
    description: 'Build scalable ERP systems to streamline enterprise operations.',
    href: '/services/erp',
    cta: 'Explore ERP',
    visual: 'erp',
  },
  {
    number: '08',
    label: '08 / SAP',
    title: 'SAP Consulting',
    shortTitle: 'SAP Consulting',
    description: 'Connect your enterprise systems with intelligent SAP solutions.',
    href: '/services/sap-consulting',
    cta: 'Explore SAP',
    visual: 'sap',
  },
]

export const AiVisual = memo(function AiVisual() {
  return (
    <div className="ai-visual" aria-hidden="true">
      <span className="ai-word">A I</span>
      <span className="ai-node n1" />
      <span className="ai-node n2" />
      <span className="ai-node n3" />
      <span className="ai-node n4" />
      <i className="ai-line l1" />
      <i className="ai-line l2" />
      <i className="ai-line l3" />
      <i className="ai-line l4" />
    </div>
  )
})

export const CodeVisual = memo(function CodeVisual() {
  return (
    <div className="code-visual" aria-hidden="true">
      <span className="hacker-cursor" />
      <div className="code-stream">
        <span className="code-line l1">
          <span className="kw">async function</span> <b className="fn">buildProduct</b>() {'{'}
        </span>
        <span className="code-line l2">
          <i>const mvp = await deploy()</i>
        </span>
        <span className="code-line l3">
          <i>return scale(mvp)</i>
        </span>
        <span className="code-line l4">
          <span>{'}'}</span>
        </span>
      </div>
    </div>
  )
})

export const DevicesVisual = memo(function DevicesVisual() {
  return (
    <div className="devices-visual" aria-hidden="true">
      <div className="browser">
        <div className="browser-header">
          <div className="browser-dots">
            <span />
            <span />
            <span />
          </div>
          <div className="url-bar" />
        </div>
        <div className="browser-body">
          <div className="ui-skeleton-hero" />
          <div className="ui-skeleton-row">
            <div className="ui-skeleton-box" />
            <div className="ui-skeleton-box" />
          </div>
        </div>
      </div>
      <i className="device-connector-line" />
      <div className="phone">
        <div className="phone-notch" />
        <div className="phone-screen">
          <div className="phone-app-bar" />
          <div className="phone-app-card" />
          <div className="phone-app-line" />
        </div>
      </div>
    </div>
  )
})

export const FlowVisual = memo(function FlowVisual({ type }: { type: 'lifecycle' | 'delivery' | string }) {
  return (
    <div className="flow-visual" aria-hidden="true">
      <span>{type === 'lifecycle' ? 'IDEA' : 'STRATEGY'}</span>
      <i />
      <span>{type === 'lifecycle' ? 'MVP' : 'BUILD'}</span>
      <i />
      <span>SCALE</span>
    </div>
  )
})

export const TeamVisual = memo(function TeamVisual() {
  return (
    <div className="team-visual" aria-hidden="true">
      <div className="team-node top">
        <span>AI</span>
      </div>
      <div className="team-node left">
        <span>DEV</span>
      </div>
      <div className="team-node right">
        <span>ENG</span>
      </div>
      <i className="team-line l1" />
      <i className="team-line l2" />
      <i className="team-line l3" />
      <span className="team-center-dot" />
    </div>
  )
})

export const ErpVisual = memo(function ErpVisual() {
  return (
    <div className="enterprise-visual" aria-hidden="true">
      <span>FINANCE</span>
      <i />
      <span>OPERATIONS</span>
      <i />
      <span>SUPPLY CHAIN</span>
      <i />
      <span>ANALYTICS</span>
    </div>
  )
})

export const SapVisual = memo(function SapVisual() {
  return (
    <div className="sap-visual" aria-hidden="true">
      <div className="sap-logo-badge">SAP</div>
      <i className="pulse-line" />
      <div className="sap-node"><span>DATA</span></div>
      <i className="pulse-line" />
      <div className="sap-node"><span>SYSTEMS</span></div>
    </div>
  )
})

const VISUAL_COMPONENTS: Record<string, React.ComponentType<{ type: ServiceVisualType }>> = {
  ai: AiVisual,
  code: CodeVisual,
  devices: DevicesVisual,
  lifecycle: FlowVisual,
  delivery: FlowVisual,
  team: TeamVisual,
  erp: ErpVisual,
  sap: SapVisual,
}

const DefaultVisual = memo(function DefaultVisual({ type }: { type: ServiceVisualType }) {
  const Component = VISUAL_COMPONENTS[type] || SapVisual
  return <Component type={type} />
})

const DefaultLink = ({
  href,
  className,
  children,
  onClick,
}: {
  href: string
  className?: string
  children: React.ReactNode
  onClick?: (e: React.MouseEvent) => void
}) => (
  <Link href={href} className={className} onClick={onClick}>
    {children}
  </Link>
)

const ServiceCard = memo(function ServiceCard({
  service,
  featured = false,
  index,
  renderVisual,
  LinkComp,
  onServiceClick,
}: {
  service: ServiceItem
  featured?: boolean
  index: number
  renderVisual?: (type: ServiceVisualType) => React.ReactNode
  LinkComp: React.ComponentType<{
    href: string
    className?: string
    children: React.ReactNode
    onClick?: (e: React.MouseEvent) => void
  }>
  onServiceClick?: (service: ServiceItem, event: React.MouseEvent) => void
}) {
  const handleClick = (e: React.MouseEvent) => {
    if (onServiceClick) {
      onServiceClick(service, e)
    }
  }

  return (
    <article
      className={`capability-card ${featured ? 'capability-featured' : ''} reveal-card`}
      style={{ '--reveal-delay': `${index * 70}ms` } as React.CSSProperties}
    >
      <div className="capability-card-top">
        <span className="service-label">{service.label}</span>
        <span className="service-number">{service.number}</span>
      </div>
      <div className="capability-visual">
        {renderVisual ? renderVisual(service.visual) : <DefaultVisual type={service.visual} />}
      </div>
      <div className="capability-copy">
        <h3>{service.title}</h3>
        <p>{service.description}</p>
        <LinkComp href={service.href} onClick={handleClick}>
          {service.cta} <span aria-hidden="true">→</span>
        </LinkComp>
      </div>
    </article>
  )
})











export function ServicesScroll({
  capabilitiesKicker = 'Capabilities',
  capabilitiesTitle = (
    <>
      Technology built<br />
      <em>around your business.</em>
    </>
  ),
  capabilitiesNote = 'From AI engineering and digital products to enterprise systems and technical teams, we help businesses design, build, and scale technology that delivers.',
  coreLabel = 'Core technology',
  coreServices = defaultCoreServices,
  enterpriseKicker = 'Enterprise systems',
  enterpriseTitle = (
    <>
      Enterprise technology, <em>connected.</em>
    </>
  ),
  enterpriseDescription = 'Modernize critical business operations with scalable ERP platforms and intelligent SAP solutions.',
  enterpriseServices = defaultEnterpriseServices,
  onServiceClick,
  linkComponent: CustomLink,
  renderVisual,
  className = '',
  id = 'services',
}: ServicesScrollProps) {
  const [revealed, setRevealed] = useState(false)
  const [introRevealed, setIntroRevealed] = useState(false)
  const [enterpriseRevealed, setEnterpriseRevealed] = useState(false)

  const sectionRef = useRef<HTMLElement>(null)
  const introRef = useRef<HTMLDivElement>(null)
  const enterpriseRef = useRef<HTMLDivElement>(null)
  const LinkComp = CustomLink || DefaultLink

  useEffect(() => {
    const node = sectionRef.current
    if (node) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          setRevealed(entry.isIntersecting)
        },
        { threshold: 0.05 }
      )
      observer.observe(node)
    }

    const introNode = introRef.current
    if (introNode) {
      const introObserver = new IntersectionObserver(
        ([entry]) => {
          setIntroRevealed(entry.isIntersecting)
        },
        { threshold: 0.15 }
      )
      introObserver.observe(introNode)
    }

    const enterpriseNode = enterpriseRef.current
    if (enterpriseNode) {
      const entObserver = new IntersectionObserver(
        ([entry]) => {
          setEnterpriseRevealed(entry.isIntersecting)
        },
        { threshold: 0.15 }
      )
      entObserver.observe(enterpriseNode)
    }
  }, [])

  const allServices = [...coreServices, ...enterpriseServices]

  return (
    <section
      ref={sectionRef}
      className={`services-section ${revealed ? 'services-revealed' : ''} ${className}`.trim()}
      id={id}
      aria-labelledby={`${id}-heading`}
    >
      <div ref={introRef} className={`services-intro ${introRevealed ? 'intro-revealed' : ''}`}>
        <div>
          <p className="section-kicker reveal-text">{capabilitiesKicker}</p>
          <h2 id={`${id}-heading`} className="reveal-text">{capabilitiesTitle}</h2>
        </div>
        <p className="services-note reveal-text">{capabilitiesNote}</p>
      </div>

      {coreLabel && <p className="capability-group-label reveal-text">{coreLabel}</p>}
      <div className="capabilities-grid">
        {coreServices[0] && (
          <ServiceCard
            service={coreServices[0]}
            featured
            index={0}
            renderVisual={renderVisual}
            LinkComp={LinkComp}
            onServiceClick={onServiceClick}
          />
        )}
        {coreServices.length > 1 && (
          <div className="capability-stack">
            {coreServices[1] && (
              <ServiceCard
                service={coreServices[1]}
                index={1}
                renderVisual={renderVisual}
                LinkComp={LinkComp}
                onServiceClick={onServiceClick}
              />
            )}
            {coreServices[2] && (
              <ServiceCard
                service={coreServices[2]}
                index={2}
                renderVisual={renderVisual}
                LinkComp={LinkComp}
                onServiceClick={onServiceClick}
              />
            )}
          </div>
        )}
        {coreServices.length > 3 && (
          <div className="capability-stack">
            {coreServices[3] && (
              <ServiceCard
                service={coreServices[3]}
                index={3}
                renderVisual={renderVisual}
                LinkComp={LinkComp}
                onServiceClick={onServiceClick}
              />
            )}
            {coreServices[4] && (
              <ServiceCard
                service={coreServices[4]}
                index={4}
                renderVisual={renderVisual}
                LinkComp={LinkComp}
                onServiceClick={onServiceClick}
              />
            )}
          </div>
        )}
        {coreServices[5] && (
          <ServiceCard
            service={coreServices[5]}
            index={5}
            renderVisual={renderVisual}
            LinkComp={LinkComp}
            onServiceClick={onServiceClick}
          />
        )}
      </div>

      {(enterpriseTitle || enterpriseServices.length > 0) && (
        <>
          <div ref={enterpriseRef} className={`enterprise-heading ${enterpriseRevealed ? 'enterprise-revealed' : ''}`}>
            <div>
              {enterpriseKicker && <p className="section-kicker reveal-text">{enterpriseKicker}</p>}
              {enterpriseTitle && <h2 className="reveal-text">{enterpriseTitle}</h2>}
            </div>
            {enterpriseDescription && <p className="reveal-text">{enterpriseDescription}</p>}
          </div>

          <div className="enterprise-grid">
            {enterpriseServices.map((service, index) => (
              <ServiceCard
                key={service.number || service.title}
                service={service}
                index={index + coreServices.length}
                renderVisual={renderVisual}
                LinkComp={LinkComp}
                onServiceClick={onServiceClick}
              />
            ))}
          </div>
        </>
      )}

      {allServices.length > 0 && (
        <nav className="capability-index" aria-label="Capability index">
          {allServices.map((service) => (
            <LinkComp
              key={service.number || service.title}
              href={service.href}
              onClick={(e) => onServiceClick && onServiceClick(service, e)}
            >
              <span>{service.number}</span>{' '}
              {service.shortTitle ||
                service.title
                  .replace(' & Solutions', '')
                  .replace(' Development', '')
                  .replace(' On Demand', '')}
            </LinkComp>
          ))}
        </nav>
      )}
    </section>
  )
}
