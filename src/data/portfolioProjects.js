const portfolioProjects = [
  {
    slug: 'safesystem-data-management',
    title: 'SafeSystem Data Management',
    category: 'Data Engineering',
    icon: '🗄️',
    description:
      'An enterprise-grade data management platform built to handle sensitive records with strict access control, audit trails, and data integrity guarantees across distributed systems.',
    longDescription:
      'SafeSystem Data Management was designed to meet the demands of organisations that handle sensitive or regulated data. The platform provides a centralised layer for defining data ownership, enforcing role-based access policies, and capturing a full audit trail of every read and write operation. Built with reliability and compliance in mind, it integrates cleanly with existing infrastructure and scales horizontally as data volumes grow.',
    tags: ['Data Management', 'Security', 'Access Control', 'Audit', 'Enterprise'],
    highlights: [
      'Role-based access control with fine-grained permission scopes',
      'Immutable audit trail for every data operation',
      'Data integrity checks and automated consistency validation',
      'Horizontal scaling support for high-volume environments',
      'Compliance-ready design aligned with data protection standards',
    ],
    liveUrl: null,
  },
  {
    slug: 'database-marketing-leads',
    title: 'Database Marketing Leads',
    category: 'Marketing Tech',
    icon: '📊',
    description:
      'A structured database system for capturing, segmenting, and managing marketing leads — enabling targeted campaigns, lead scoring, and full pipeline visibility.',
    longDescription:
      'Database Marketing Leads centralises all lead data into a single, well-structured system designed for marketing and sales teams. It supports lead ingestion from multiple sources, automatic deduplication, and tag-based segmentation for precise audience targeting. Built-in scoring logic helps prioritise the hottest leads, while pipeline views give teams real-time visibility into conversion progress from first touch to closed deal.',
    tags: ['Database', 'Marketing', 'Lead Management', 'Segmentation', 'CRM'],
    highlights: [
      'Multi-source lead ingestion with automatic deduplication',
      'Tag-based segmentation for targeted campaign delivery',
      'Configurable lead scoring to prioritise high-value contacts',
      'Pipeline tracking from first touch to conversion',
      'Exportable reports for campaign performance analysis',
    ],
    liveUrl: null,
  },
];

export default portfolioProjects;
