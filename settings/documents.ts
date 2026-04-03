import { Paths } from "@/lib/pageroutes"

export const Documents: Paths[] = [
    {
        heading: "Getting Started",
        title: "Introduction",
        href: "/introduction",
        items: [
            {
                title: "What is Weevio Cloud?",
                href: "/what-is-weevio",
                cardMeta: {
                    subtitle: "Platform Overview",
                    description: "Learn about the platform's capabilities and features."
                }
            },
            {
                title: "Quick Start Guide",
                href: "/quick-start",
                cardMeta: {
                    subtitle: "Quick Setup",
                    description: "Get up and running with Weevio Cloud in minutes."
                }
            }
        ],
    },
    {
        spacer: true,
    },
    {
        heading: "Core Platform",
        title: "Weevio Store",
        href: "/store",
        items: [
            {
                title: "Orders",
                href: "/orders",
                cardMeta: {
                    description: "Browse, search, and manage all customer orders with advanced filtering and sorting tools."
                },
                items: [
                    {
                        title: "Order Table",
                        href: "/order-table",
                        cardMeta: {
                            description: "Browse, search, and filter all orders with a powerful data table interface. Sort by date, customer, status, total, and more."
                        }
                    },
                    {
                        title: "Order View Overview",
                        href: "/order-view-overview",
                        cardMeta: {
                            description: "View comprehensive order details including customer info, line items, totals, payments, and shipping information all in one place."
                        }
                    },
                    {
                        title: "Line Items",
                        href: "/line-items",
                        cardMeta: {
                            description: "Add, edit, and remove products from orders. Adjust quantities, pricing, and discounts with real-time inventory validation."
                        }
                    },
                    {
                        title: "Customer Management",
                        href: "/customer-management",
                        cardMeta: {
                            description: "View and update customer information, including contact details, shipping addresses, and order history."
                        }
                    },
                ],
            },
            {
                title: "Pending SROs V2",
                href: "/pending-sros-v2",
                cardMeta: {
                    description: "Receive repair devices with barcode scanning, automatic SRO creation, customer verification, and equipment tag printing."
                }
            },
            /*
            {
                title: "Service Repair Orders",
                href: "/sros",
            },
            {
                title: "Customer Management",
                href: "/customers",
            },
            {
                title: "Inventory",
                href: "/inventory",
            },
            */
        ],
    },
    {
        spacer: true,
    },
    {
        heading: "Integrations",
        title: "Integrations",
        href: "/integrations",
        cardMeta: {
            description: "Weevio Cloud integrates with PIMS, Shopify, GSX, and more."
        },
        items: [
            {
                title: "Shopify Integration",
                href: "/shopify",
                cardMeta: {
                    description: "Powerful Shopify integration with real-time inventory, intelligent shipping estimates, personalized recommendations, and seamless PIMS synchronization."
                },
                items: [
                    {
                        title: "Widget",
                        href: "/widget",
                        cardMeta: {
                            description: "Enhance your Shopify product pages with real-time inventory, shipping estimates, and intelligent recommendations."
                        },
                        items: [
                            {
                                title: "Installation",
                                href: "/installation",
                                cardMeta: {
                                    description: "Step-by-step guide to installing the Weevio Shopify Widget in your store."
                                },
                                items: [
                                    {
                                        title: "Prerequisites",
                                        href: "/prerequisites",
                                        cardMeta: {
                                            description: "Requirements and Shopify Custom App setup needed before installation."
                                        }
                                    },
                                    {
                                        title: "Configuration",
                                        href: "/configuration",
                                        cardMeta: {
                                            description: "Configure your store in Weevio Cloud and add the widget to your Shopify theme."
                                        }
                                    },
                                ],
                            },
                            {
                                title: "Features",
                                href: "/features",
                                cardMeta: {
                                    description: "Explore the powerful features available in the Weevio Shopify Widget."
                                },
                                items: [
                                    {
                                        title: "Improved Variant Selection",
                                        href: "/variant-selection",
                                        cardMeta: {
                                            description: "Enhanced card-based variant selector with price differences and invalid combination prevention."
                                        }
                                    },
                                    {
                                        title: "Shipping Estimates",
                                        href: "/shipping-estimates",
                                        cardMeta: {
                                            description: "Display accurate delivery estimates and real-time stock availability."
                                        }
                                    },
                                    {
                                        title: "In-Stock Recommendations",
                                        href: "/recommendations",
                                        cardMeta: {
                                            description: "Suggest alternative products when items are out of stock."
                                        }
                                    },
                                    {
                                        title: "Cross-Sell",
                                        href: "/cross-sell",
                                        cardMeta: {
                                            description: "Show complementary products after add-to-cart to increase average order value."
                                        },
                                        items: [
                                            {
                                                title: "Product Visibility Rules",
                                                href: "/visibility-rules",
                                                cardMeta: {
                                                    description: "Control which customers see specific cross-sell products using tag-based filtering."
                                                },
                                                items: [
                                                    {
                                                        title: "Tag Reference",
                                                        href: "/tag-reference",
                                                        cardMeta: {
                                                            description: "Complete tag format documentation, evaluation logic, and validation rules."
                                                        }
                                                    },
                                                    {
                                                        title: "Setup Guide",
                                                        href: "/setup",
                                                        cardMeta: {
                                                            description: "Step-by-step instructions for tagging products and customers in Shopify."
                                                        }
                                                    },
                                                    {
                                                        title: "Examples",
                                                        href: "/examples",
                                                        cardMeta: {
                                                            description: "Real-world use cases with detailed product and customer tag configurations."
                                                        }
                                                    },
                                                    {
                                                        title: "Troubleshooting",
                                                        href: "/troubleshooting",
                                                        cardMeta: {
                                                            description: "Debug visibility issues, common problems, and solutions."
                                                        }
                                                    },
                                                ]
                                            },
                                        ]
                                    },
                                    {
                                        title: "B2B Pricing",
                                        href: "/b2b-pricing",
                                        cardMeta: {
                                            description: "Display negotiated wholesale pricing for logged-in business customers."
                                        }
                                    },
                                    {
                                        title: "Multi-Source Inventory",
                                        href: "/multi-source-inventory",
                                        cardMeta: {
                                            description: "Aggregate stock from Shopify, Ingram Micro, and TD SYNNEX for accurate availability."
                                        }
                                    },
                                    {
                                        title: "Vendor Shipping Notifications",
                                        href: "/shipping-notifications",
                                        cardMeta: {
                                            description: "Automatically email customers their tracking numbers when drop-ship orders ship from Ingram Micro or TD Synnex."
                                        }
                                    },
                                    {
                                        title: "PunchOut Commerce",
                                        href: "/punchout",
                                        cardMeta: {
                                            description: "Integrate with SAP Ariba, Coupa, and other procurement systems."
                                        }
                                    },
                                    {
                                        title: "Multi-Location Store Pickup",
                                        href: "/store-pickup",
                                        cardMeta: {
                                            description: "Let customers view pickup availability across all store locations and select their preferred pickup store."
                                        }
                                    },
                                ],
                            },
                            {
                                title: "Configuration",
                                href: "/configuration",
                                cardMeta: {
                                    description: "Learn how to configure and customize the widget for your store."
                                },
                                items: [
                                    {
                                        title: "Basic Setup",
                                        href: "/basic-setup",
                                        cardMeta: {
                                            description: "Quick start guide for basic widget configuration."
                                        }
                                    },
                                    {
                                        title: "Advanced Configuration",
                                        href: "/advanced",
                                        cardMeta: {
                                            description: "Advanced customization options and performance optimization techniques."
                                        }
                                    },
                                    {
                                        title: "Configuration Examples",
                                        href: "/examples",
                                        cardMeta: {
                                            description: "Pre-built configurations for common business scenarios."
                                        }
                                    },
                                ],
                            },
                            {
                                title: "Troubleshooting",
                                href: "/troubleshooting",
                                cardMeta: {
                                    description: "Solutions to common issues and problems with the widget."
                                }
                            },
                        ],
                    },
                    {
                        title: "PIMS Sync",
                        href: "/pims-sync",
                        cardMeta: {
                            description: "Automatic background synchronization of products, inventory, and orders between PIMS and Shopify."
                        },
                        items: [
                            {
                                title: "Inventory Sync",
                                href: "/inventory-sync",
                                cardMeta: {
                                    description: "Continuous one-way product and inventory synchronization from PIMS to Shopify."
                                }
                            },
                            {
                                title: "Order Sync",
                                href: "/order-sync",
                                cardMeta: {
                                    description: "Automatic creation of PIMS orders from Shopify checkout events."
                                }
                            },
                            {
                                title: "Improved Order Reliability",
                                href: "/order-reliability",
                                cardMeta: {
                                    description: "Automatic PIMS health verification prevents order loss during server outages."
                                }
                            }
                        ]
                    }
                ],
            },
        ],
    },
    {
        title: "Customer Portal",
        href: "/customer-portal",
        items: [
            {
                title: "SRO Approval Workflow",
                href: "/sro-approval",
                cardMeta: {
                    description: "Let customers approve or decline repair orders directly from the Customer Portal, with optional payment integration."
                }
            },
            {
                title: "Payments",
                href: "/payments",
                cardMeta: {
                    description: "Pay invoices, quotes, and repair deposits online using ACH bank transfer or credit/debit card."
                }
            },
            {
                title: "Repair Status Tracking",
                href: "/repair-status-tracking",
                cardMeta: {
                    description: "Let customers track their repair progress via a unique link or QR code — no login required."
                }
            },
            {
                title: "E-Signature & Terms of Service",
                href: "/e-signature",
                cardMeta: {
                    description: "Customers sign digitally and agree to your terms of service before submitting a bulk repair request."
                }
            },
        ],
    },
    /*
      {
        title: "Appointment Scheduler",
        href: "/appointment-scheduler",
        items: [
          {
            title: "Setup & Configuration",
            href: "/setup",
          },
          {
            title: "GSX Integration",
            href: "/gsx-integration",
          },
          {
            title: "Website Embedding",
            href: "/embedding",
          },
          {
            title: "Email Notifications",
            href: "/notifications",
          },
        ],
      },
      {
        spacer: true,
      },
      {
        heading: "Integrations",
        title: "GSX Integration",
        href: "/gsx",
        items: [
          {
            title: "Setup & Authentication",
            href: "/setup",
          },
          {
            title: "Automated Email Workflows",
            href: "/email-workflows",
          },
          {
            title: "Appointment Sync",
            href: "/appointment-sync",
          },
          {
            title: "Troubleshooting",
            href: "/troubleshooting",
          },
        ],
      },
      {
        title: "Shopify Integration",
        href: "/shopify",
        items: [
          {
            title: "Overview",
            href: "/overview",
          },
          {
            title: "Inventory Sync",
            href: "/inventory-sync",
          },
          {
            title: "Order Sync",
            href: "/order-sync",
          },
          {
            title: "Variant Selector Widget",
            href: "/variant-selector",
          },
          {
            title: "Cross-Sell Widget",
            href: "/cross-sell",
          },
          {
            title: "API Reference",
            href: "/api",
          },
        ],
      },
      {
        spacer: true,
      },
      {
        title: "API Reference",
        href: "/api",
        items: [
          {
            title: "Authentication",
            href: "/authentication",
          },
          {
            title: "Endpoints",
            href: "/endpoints",
          },
          {
            title: "Webhooks",
            href: "/webhooks",
          },
          {
            title: "Rate Limits",
            href: "/rate-limits",
          },
        ],
      },
      {
        spacer: true,
      },
    {
        heading: "Support",
        title: "Help & Support",
        href: "/support",
        items: [
            {
                title: "FAQs",
                href: "/faqs",
            },
            {
                title: "Troubleshooting",
                href: "/troubleshooting",
            },
            {
                title: "Contact Support",
                href: "/contact",
            },
            {
                title: "Release Notes",
                href: "/release-notes",
            },
        ],
    },
    */
]
