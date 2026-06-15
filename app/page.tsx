"use client";

/* __next_internal_client_entry_do_not_use__ default auto */ import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import PageContainer from "@/components/PageContainer";
import Section from "@/components/Section";
import Button from "@/components/Button";
import Card from "@/components/Card";
import MetricsCard from "@/components/MetricsCard";
import ComparisonTable from "@/components/ComparisonTable";
import ArchitectureLayerCard from "@/components/ArchitectureLayerCard";
import CliCommandCard from "@/components/CliCommandCard";
import McpToolCard from "@/components/McpToolCard";
import IntegrationCloudItem from "@/components/IntegrationCloudItem";
import IntegrationGroupCard from "@/components/IntegrationGroupCard";
import HowItWorksSection from "@/components/HowItWorksSection";
import HeroSection from "@/components/HeroSection";
import metricsData from "@/data/homepage-metrics.json";
import supportedTools from "@/data/supported-tools.json";
import { siteConfig } from "@/lib/site-config";
export default function Home() {
    const comparisonBefore = [
        {
            label: "Guesses Laravel conventions"
        },
        {
            label: "Relies on broad framework memory"
        },
        {
            label: "Misses architecture decisions"
        },
        {
            label: "Needs long manual prompts"
        }
    ];
    const comparisonAfter = [
        {
            label: "Loads Laravel-specific guidance"
        },
        {
            label: "Uses focused retrieval"
        },
        {
            label: "Follows skills, rules, and checklists"
        },
        {
            label: "Works with MCP-compatible tools"
        }
    ];
    const architectureLayers = [
        {
            number: 1,
            title: "Operating layer",
            items: [
                "Skills, rules, agents",
                "Command references",
                "Harness configs"
            ]
        },
        {
            number: 2,
            title: "Intelligence layer",
            items: [
                "Domains, knowledge units",
                "Indexes, routing maps",
                "Dependency graph"
            ]
        },
        {
            number: 3,
            title: "Retrieval layer",
            items: [
                "CLI retrieval, search",
                "Inspect, graph context",
                "MCP tools"
            ]
        }
    ];
    const cliCommands = [
        {
            command: "npm install --save-dev laraskills",
            label: "Install Laraskills"
        },
        {
            command: 'npx laraskills retrieve "Optimize an N+1 query" --mode compact',
            label: "Retrieve context"
        },
        {
            command: 'npx laraskills search "Policies versus Gates"',
            label: "Search knowledge"
        },
        {
            command: "npx laraskills get security-identity-engineering/authentication/sanctum-spa-authentication",
            label: "Inspect knowledge unit"
        },
        {
            command: "npx laraskills validate",
            label: "Validate knowledge graph"
        },
        {
            command: "npx laraskills doctor",
            label: "System diagnostics"
        }
    ];
    /* TODO: verify these MCP tool names match the real Laraskills MCP server exports before production launch */ const mcpTools = [
        {
            name: "retrieve_context_bundle",
            description: "Return the smallest useful Laraskills context bundle for a Laravel engineering task."
        },
        {
            name: "search_ecc",
            description: "Search the Laraskills knowledge unit catalog with ranked results."
        },
        {
            name: "get_knowledge_unit",
            description: "Inspect a single canonical knowledge unit by ID with bounded content."
        },
        {
            name: "get_graph_context",
            description: "Return prerequisites and related topics for a knowledge unit."
        },
        {
            name: "validate_ecc",
            description: "Validate the structural integrity of the Laraskills intelligence layer."
        }
    ];
    return /*#__PURE__*/ _jsxs(_Fragment, {
        children: [
            /*#__PURE__*/ _jsx("script", {
                type: "application/ld+json",
                dangerouslySetInnerHTML: {
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "WebSite",
                        name: "Laraskills",
                        url: siteConfig.url,
                        description: siteConfig.description
                    })
                }
            }),
            /*#__PURE__*/ _jsx(HeroSection, {}),
            false && /*#__PURE__*/ _jsxs("section", {
                className: "relative flex min-h-[calc(100dvh-3.5rem)] flex-col justify-center overflow-hidden py-8 md:py-10 lg:py-14",
                children: [
                    /*#__PURE__*/ _jsxs("div", {
                        "aria-hidden": true,
                        className: "pointer-events-none absolute inset-0 select-none",
                        children: [
                            /*#__PURE__*/ _jsx("div", {
                                className: "absolute -top-40 left-1/2 -translate-x-1/2 h-[800px] w-[1000px] opacity-20",
                                style: {
                                    background: "radial-gradient(ellipse at center, var(--color-brand) 0%, transparent 70%)"
                                }
                            }),
                            /*#__PURE__*/ _jsx("div", {
                                className: "absolute -bottom-40 right-0 h-[600px] w-[600px] opacity-10",
                                style: {
                                    background: "radial-gradient(ellipse at center, var(--color-accent) 0%, transparent 70%)"
                                }
                            }),
                            /*#__PURE__*/ _jsxs("svg", {
                                className: "absolute right-[-10%] top-1/2 -translate-y-1/2 h-[500px] w-[500px] lg:h-[600px] lg:w-[600px] opacity-[0.12]",
                                viewBox: "0 0 400 400",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: [
                                    /*#__PURE__*/ _jsxs("g", {
                                        className: "origin-center",
                                        style: {
                                            animation: "dash-draw 2s ease-out forwards"
                                        },
                                        children: [
                                            /*#__PURE__*/ _jsx("line", {
                                                x1: "200",
                                                y1: "200",
                                                x2: "80",
                                                y2: "100",
                                                stroke: "currentColor",
                                                className: "text-brand",
                                                strokeWidth: "0.5",
                                                strokeDasharray: "4 4",
                                                opacity: "0.4"
                                            }),
                                            /*#__PURE__*/ _jsx("line", {
                                                x1: "200",
                                                y1: "200",
                                                x2: "320",
                                                y2: "80",
                                                stroke: "currentColor",
                                                className: "text-brand",
                                                strokeWidth: "0.5",
                                                strokeDasharray: "4 4",
                                                opacity: "0.4"
                                            }),
                                            /*#__PURE__*/ _jsx("line", {
                                                x1: "200",
                                                y1: "200",
                                                x2: "340",
                                                y2: "240",
                                                stroke: "currentColor",
                                                className: "text-accent",
                                                strokeWidth: "0.5",
                                                strokeDasharray: "4 4",
                                                opacity: "0.3"
                                            }),
                                            /*#__PURE__*/ _jsx("line", {
                                                x1: "200",
                                                y1: "200",
                                                x2: "280",
                                                y2: "340",
                                                stroke: "currentColor",
                                                className: "text-brand",
                                                strokeWidth: "0.5",
                                                strokeDasharray: "4 4",
                                                opacity: "0.4"
                                            }),
                                            /*#__PURE__*/ _jsx("line", {
                                                x1: "200",
                                                y1: "200",
                                                x2: "100",
                                                y2: "310",
                                                stroke: "currentColor",
                                                className: "text-accent",
                                                strokeWidth: "0.5",
                                                strokeDasharray: "4 4",
                                                opacity: "0.3"
                                            }),
                                            /*#__PURE__*/ _jsx("line", {
                                                x1: "200",
                                                y1: "200",
                                                x2: "60",
                                                y2: "210",
                                                stroke: "currentColor",
                                                className: "text-brand",
                                                strokeWidth: "0.5",
                                                strokeDasharray: "4 4",
                                                opacity: "0.4"
                                            }),
                                            /*#__PURE__*/ _jsx("line", {
                                                x1: "80",
                                                y1: "100",
                                                x2: "320",
                                                y2: "80",
                                                stroke: "currentColor",
                                                className: "text-accent",
                                                strokeWidth: "0.3",
                                                strokeDasharray: "3 6",
                                                opacity: "0.2"
                                            }),
                                            /*#__PURE__*/ _jsx("line", {
                                                x1: "100",
                                                y1: "310",
                                                x2: "280",
                                                y2: "340",
                                                stroke: "currentColor",
                                                className: "text-accent",
                                                strokeWidth: "0.3",
                                                strokeDasharray: "3 6",
                                                opacity: "0.2"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ _jsx("g", {
                                        children: [
                                            [
                                                80,
                                                100,
                                                "text-brand"
                                            ],
                                            [
                                                320,
                                                80,
                                                "text-brand"
                                            ],
                                            [
                                                340,
                                                240,
                                                "text-accent"
                                            ],
                                            [
                                                280,
                                                340,
                                                "text-brand"
                                            ],
                                            [
                                                100,
                                                310,
                                                "text-accent"
                                            ],
                                            [
                                                60,
                                                210,
                                                "text-brand"
                                            ]
                                        ].map(([cx, cy, color], i)=>/*#__PURE__*/ _jsxs("g", {
                                                children: [
                                                    /*#__PURE__*/ _jsx("circle", {
                                                        cx: cx,
                                                        cy: cy,
                                                        r: "6",
                                                        fill: "currentColor",
                                                        className: `${color} opacity-[0.15]`,
                                                        style: {
                                                            animation: `node-pulse ${3 + i * 0.5}s ease-in-out infinite`,
                                                            animationDelay: `${i * 0.3}s`
                                                        }
                                                    }),
                                                    /*#__PURE__*/ _jsx("circle", {
                                                        cx: cx,
                                                        cy: cy,
                                                        r: "3",
                                                        fill: "currentColor",
                                                        className: `${color} opacity-[0.3]`,
                                                        style: {
                                                            animation: `node-pulse ${3 + i * 0.5}s ease-in-out infinite`,
                                                            animationDelay: `${i * 0.3}s`
                                                        }
                                                    })
                                                ]
                                            }, i))
                                    }),
                                    /*#__PURE__*/ _jsx("circle", {
                                        cx: "200",
                                        cy: "200",
                                        r: "20",
                                        fill: "currentColor",
                                        className: "text-brand",
                                        opacity: "0.06",
                                        style: {
                                            animation: "node-pulse 3s ease-in-out infinite"
                                        }
                                    }),
                                    /*#__PURE__*/ _jsx("circle", {
                                        cx: "200",
                                        cy: "200",
                                        r: "10",
                                        fill: "currentColor",
                                        className: "text-brand",
                                        opacity: "0.12",
                                        style: {
                                            animation: "node-pulse 3s ease-in-out infinite"
                                        }
                                    }),
                                    /*#__PURE__*/ _jsx("circle", {
                                        cx: "200",
                                        cy: "200",
                                        r: "5",
                                        fill: "currentColor",
                                        className: "text-brand",
                                        opacity: "0.25",
                                        style: {
                                            animation: "node-pulse 3s ease-in-out infinite"
                                        }
                                    })
                                ]
                            }),
                            [
                                [
                                    12,
                                    25
                                ],
                                [
                                    85,
                                    20
                                ],
                                [
                                    75,
                                    75
                                ],
                                [
                                    20,
                                    80
                                ],
                                [
                                    50,
                                    12
                                ],
                                [
                                    88,
                                    50
                                ],
                                [
                                    30,
                                    55
                                ],
                                [
                                    65,
                                    88
                                ]
                            ].map(([left, top], i)=>/*#__PURE__*/ _jsx("div", {
                                    className: "absolute h-1 w-1 rounded-full",
                                    style: {
                                        left: `${left}%`,
                                        top: `${top}%`,
                                        backgroundColor: i % 2 === 0 ? "var(--color-brand)" : "var(--color-accent)",
                                        opacity: 0.1,
                                        animation: `float ${5 + i % 3 * 2}s ease-in-out infinite`,
                                        animationDelay: `${i % 4 * 0.8}s`
                                    }
                                }, i))
                        ]
                    }),
                    /*#__PURE__*/ _jsx(PageContainer, {
                        children: /*#__PURE__*/ _jsxs("div", {
                            className: "grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12 items-center",
                            children: [
                                /*#__PURE__*/ _jsxs("div", {
                                    className: "flex flex-col items-center text-center lg:items-start lg:text-left",
                                    children: [
                                        /*#__PURE__*/ _jsxs("span", {
                                            className: "mb-4 inline-flex items-center gap-2 rounded-full border border-brand/15 bg-brand-subtle px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-brand",
                                            children: [
                                                /*#__PURE__*/ _jsx("span", {
                                                    className: "h-1.5 w-1.5 rounded-full bg-brand animate-pulse"
                                                }),
                                                "Laraskills"
                                            ]
                                        }),
                                        /*#__PURE__*/ _jsxs("h1", {
                                            className: "font-display text-4xl font-semibold tracking-tight leading-[1.12] sm:text-5xl",
                                            children: [
                                                "Laravel engineering context for",
                                                " ",
                                                /*#__PURE__*/ _jsx("span", {
                                                    className: "text-brand",
                                                    children: "AI coding agents"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ _jsx("p", {
                                            className: "mt-4 max-w-lg text-base leading-relaxed text-text-muted sm:text-lg",
                                            children: "Laraskills equips OpenCode, Claude Code, Cursor, Codex, Copilot, and other coding agents with Laravel-specific skills, rules, retrieval workflows, and MCP support so they can work with deeper context and fewer guesses."
                                        }),
                                        /*#__PURE__*/ _jsxs("div", {
                                            className: "mt-6 flex flex-wrap items-center gap-3",
                                            children: [
                                                /*#__PURE__*/ _jsx(Button, {
                                                    size: "lg",
                                                    href: "https://github.com/elmochilyas/laraskills",
                                                    children: "Install Laraskills"
                                                }),
                                                /*#__PURE__*/ _jsx(Button, {
                                                    variant: "secondary",
                                                    size: "lg",
                                                    href: "https://github.com/elmochilyas/laraskills",
                                                    children: "View GitHub"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ _jsxs("div", {
                                            className: "mt-6 flex flex-wrap items-center justify-center gap-2 lg:justify-start",
                                            children: [
                                                /*#__PURE__*/ _jsxs("span", {
                                                    className: "inline-flex items-center gap-1.5 rounded-md border border-border/60 bg-bg-card/80 px-3 py-1.5 text-xs text-text-muted transition-all duration-200 hover:border-accent/30",
                                                    children: [
                                                        /*#__PURE__*/ _jsx("svg", {
                                                            className: "h-3.5 w-3.5 text-accent shrink-0",
                                                            fill: "none",
                                                            viewBox: "0 0 24 24",
                                                            stroke: "currentColor",
                                                            strokeWidth: 2,
                                                            children: /*#__PURE__*/ _jsx("path", {
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round",
                                                                d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                            })
                                                        }),
                                                        "202 tests passed"
                                                    ]
                                                }),
                                                /*#__PURE__*/ _jsxs("span", {
                                                    className: "inline-flex items-center gap-1.5 rounded-md border border-border/60 bg-bg-card/80 px-3 py-1.5 text-xs text-text-muted transition-all duration-200 hover:border-brand/30",
                                                    children: [
                                                        /*#__PURE__*/ _jsx("svg", {
                                                            className: "h-3.5 w-3.5 text-brand shrink-0",
                                                            fill: "none",
                                                            viewBox: "0 0 24 24",
                                                            stroke: "currentColor",
                                                            strokeWidth: 2,
                                                            children: /*#__PURE__*/ _jsx("path", {
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round",
                                                                d: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                                                            })
                                                        }),
                                                        "2,321 knowledge units"
                                                    ]
                                                }),
                                                /*#__PURE__*/ _jsxs("span", {
                                                    className: "inline-flex items-center gap-1.5 rounded-md border border-border/60 bg-bg-card/80 px-3 py-1.5 text-xs text-text-muted transition-all duration-200 hover:border-blue-400/30",
                                                    children: [
                                                        /*#__PURE__*/ _jsx("svg", {
                                                            className: "h-3.5 w-3.5 text-blue-400 shrink-0",
                                                            fill: "none",
                                                            viewBox: "0 0 24 24",
                                                            stroke: "currentColor",
                                                            strokeWidth: 2,
                                                            children: /*#__PURE__*/ _jsx("path", {
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round",
                                                                d: "M13 10V3L4 14h7v7l9-11h-7z"
                                                            })
                                                        }),
                                                        "MCP ready"
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ _jsx("div", {
                                    className: "flex justify-center lg:justify-end",
                                    children: /*#__PURE__*/ _jsxs("div", {
                                        className: "relative w-full max-w-md",
                                        children: [
                                            /*#__PURE__*/ _jsx("div", {
                                                "aria-hidden": true,
                                                className: "absolute -inset-6 rounded-2xl opacity-20 blur-3xl",
                                                style: {
                                                    background: "radial-gradient(ellipse at center, var(--color-brand) 0%, transparent 70%)"
                                                }
                                            }),
                                            /*#__PURE__*/ _jsxs("div", {
                                                className: "animate-glow-pulse relative rounded-xl border border-border/60 bg-bg-card shadow-lg overflow-hidden",
                                                children: [
                                                    /*#__PURE__*/ _jsxs("div", {
                                                        className: "flex items-center justify-between border-b border-border/80 px-4 py-2.5 bg-bg-alt/60",
                                                        children: [
                                                            /*#__PURE__*/ _jsxs("div", {
                                                                className: "flex items-center gap-2",
                                                                children: [
                                                                    /*#__PURE__*/ _jsx("span", {
                                                                        className: "h-3 w-3 rounded-full bg-red-500/80"
                                                                    }),
                                                                    /*#__PURE__*/ _jsx("span", {
                                                                        className: "h-3 w-3 rounded-full bg-yellow-500/80"
                                                                    }),
                                                                    /*#__PURE__*/ _jsx("span", {
                                                                        className: "h-3 w-3 rounded-full bg-green-500/80"
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ _jsx("span", {
                                                                className: "font-mono text-[11px] text-text-dim select-none",
                                                                children: "bash"
                                                            }),
                                                            /*#__PURE__*/ _jsx("div", {
                                                                className: "w-12"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ _jsxs("div", {
                                                        className: "p-4 font-mono text-sm leading-relaxed space-y-2",
                                                        children: [
                                                            /*#__PURE__*/ _jsxs("div", {
                                                                className: "flex items-start gap-2.5",
                                                                children: [
                                                                    /*#__PURE__*/ _jsx("span", {
                                                                        className: "text-accent/70 shrink-0 select-none",
                                                                        children: "$"
                                                                    }),
                                                                    /*#__PURE__*/ _jsx("span", {
                                                                        className: "text-text-muted",
                                                                        children: "npm install --save-dev laraskills"
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ _jsxs("div", {
                                                                className: "flex items-start gap-2.5",
                                                                children: [
                                                                    /*#__PURE__*/ _jsx("span", {
                                                                        className: "text-accent/70 shrink-0 select-none",
                                                                        children: "$"
                                                                    }),
                                                                    /*#__PURE__*/ _jsxs("span", {
                                                                        children: [
                                                                            /*#__PURE__*/ _jsx("span", {
                                                                                className: "text-text-muted",
                                                                                children: "laraskills retrieve "
                                                                            }),
                                                                            /*#__PURE__*/ _jsx("span", {
                                                                                className: "text-orange-300/90",
                                                                                children: '"Optimize N+1 query"'
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ _jsxs("div", {
                                                                className: "flex items-start gap-2.5",
                                                                children: [
                                                                    /*#__PURE__*/ _jsx("span", {
                                                                        className: "text-accent shrink-0 select-none",
                                                                        children: "✓"
                                                                    }),
                                                                    /*#__PURE__*/ _jsx("span", {
                                                                        className: "text-accent/90",
                                                                        children: "Found Laravel-specific context"
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ _jsxs("div", {
                                                                className: "flex items-start gap-2.5",
                                                                children: [
                                                                    /*#__PURE__*/ _jsx("span", {
                                                                        className: "text-accent shrink-0 select-none",
                                                                        children: "✓"
                                                                    }),
                                                                    /*#__PURE__*/ _jsx("span", {
                                                                        className: "text-accent/90",
                                                                        children: "Context ready for your AI agent"
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ _jsxs("div", {
                                                                className: "flex items-center gap-2.5 pt-0.5",
                                                                children: [
                                                                    /*#__PURE__*/ _jsx("span", {
                                                                        className: "text-accent/70 shrink-0 select-none",
                                                                        children: "$"
                                                                    }),
                                                                    /*#__PURE__*/ _jsx("span", {
                                                                        className: "inline-block h-4 w-2 bg-text-muted/60 animate-terminal-blink"
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ _jsx(HowItWorksSection, {}),
            false && /*#__PURE__*/ _jsx(Section, {
                variant: "alt",
                children: /*#__PURE__*/ _jsxs(PageContainer, {
                    children: [
                        /*#__PURE__*/ _jsxs("div", {
                            className: "mb-10 text-center",
                            children: [
                                /*#__PURE__*/ _jsx("span", {
                                    className: "section-eyebrow",
                                    children: "How it works"
                                }),
                                /*#__PURE__*/ _jsx("h2", {
                                    className: "section-title",
                                    children: "How Laraskills powers your coding agent"
                                }),
                                /*#__PURE__*/ _jsx("p", {
                                    className: "section-lead mx-auto",
                                    children: "From a Laravel task to validated skills, rules, examples, and better AI-generated code."
                                })
                            ]
                        }),
                        /*#__PURE__*/ _jsxs("div", {
                            className: "relative overflow-hidden",
                            children: [
                                /*#__PURE__*/ _jsxs("div", {
                                    "aria-hidden": true,
                                    className: "pointer-events-none absolute inset-0 overflow-hidden",
                                    children: [
                                        /*#__PURE__*/ _jsx("div", {
                                            className: "absolute inset-0 opacity-[0.018]",
                                            style: {
                                                backgroundImage: `url("data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h32v32H0z' fill='none'/%3E%3Cpath d='M32 0v32' stroke='%23e63946' stroke-width='0.5' fill='none' opacity='0.3'/%3E%3Cpath d='M0 32h32' stroke='%23e63946' stroke-width='0.5' fill='none' opacity='0.3'/%3E%3C/svg%3E")`,
                                                backgroundSize: "32px 32px"
                                            }
                                        }),
                                        /*#__PURE__*/ _jsx("div", {
                                            className: "absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[800px] opacity-[0.08]",
                                            style: {
                                                background: "radial-gradient(ellipse at center, var(--color-brand) 0%, transparent 70%)"
                                            }
                                        }),
                                        /*#__PURE__*/ _jsx("div", {
                                            className: "absolute top-1/3 right-0 -translate-y-1/2 h-[400px] w-[500px] opacity-[0.04]",
                                            style: {
                                                background: "radial-gradient(ellipse at center, var(--color-accent) 0%, transparent 70%)"
                                            }
                                        }),
                                        [
                                            [
                                                8,
                                                25
                                            ],
                                            [
                                                92,
                                                20
                                            ],
                                            [
                                                15,
                                                75
                                            ],
                                            [
                                                85,
                                                80
                                            ],
                                            [
                                                40,
                                                10
                                            ],
                                            [
                                                60,
                                                88
                                            ],
                                            [
                                                20,
                                                50
                                            ],
                                            [
                                                80,
                                                55
                                            ],
                                            [
                                                50,
                                                15
                                            ],
                                            [
                                                70,
                                                70
                                            ]
                                        ].map(([left, top], i)=>/*#__PURE__*/ _jsx("div", {
                                                className: "absolute h-[3px] w-[3px] rounded-full",
                                                style: {
                                                    left: `${left}%`,
                                                    top: `${top}%`,
                                                    backgroundColor: i % 2 === 0 ? "var(--color-brand)" : "var(--color-accent)",
                                                    opacity: 0.08,
                                                    animation: `float ${6 + i % 3 * 2}s ease-in-out infinite`,
                                                    animationDelay: `${i % 5 * 0.7}s`
                                                }
                                            }, i))
                                    ]
                                }),
                                /*#__PURE__*/ _jsxs("div", {
                                    className: "hidden lg:block",
                                    children: [
                                        /*#__PURE__*/ _jsx("div", {
                                            "aria-hidden": true,
                                            className: "pointer-events-none absolute top-1/2 left-[5%] right-[5%] h-px translate-y-[-0.5rem]",
                                            children: /*#__PURE__*/ _jsx("div", {
                                                className: "h-full w-full",
                                                style: {
                                                    background: "linear-gradient(90deg, transparent 0%, rgba(230,57,70,0.08) 15%, rgba(230,57,70,0.12) 50%, rgba(45,212,191,0.08) 85%, transparent 100%)"
                                                }
                                            })
                                        }),
                                        /*#__PURE__*/ _jsxs("div", {
                                            className: "flex items-stretch justify-center",
                                            children: [
                                                /*#__PURE__*/ _jsxs("div", {
                                                    className: "flex w-[22%] shrink-0 flex-col justify-center gap-5",
                                                    children: [
                                                        /*#__PURE__*/ _jsx("div", {
                                                            className: "text-center mb-1",
                                                            children: /*#__PURE__*/ _jsx("span", {
                                                                className: "inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-text-dim",
                                                                children: "Input"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ _jsxs("div", {
                                                            className: "group card p-5 transition-all duration-300 hover:border-brand/25 relative",
                                                            children: [
                                                                /*#__PURE__*/ _jsx("div", {
                                                                    className: "absolute top-0 left-0 right-0 h-px",
                                                                    style: {
                                                                        background: "linear-gradient(90deg, transparent, rgba(230,57,70,0.15), transparent)"
                                                                    }
                                                                }),
                                                                /*#__PURE__*/ _jsxs("div", {
                                                                    className: "flex items-start gap-3",
                                                                    children: [
                                                                        /*#__PURE__*/ _jsx("div", {
                                                                            className: "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-subtle text-brand transition-transform duration-300 group-hover:scale-110",
                                                                            children: /*#__PURE__*/ _jsxs("svg", {
                                                                                className: "h-[18px] w-[18px]",
                                                                                fill: "none",
                                                                                viewBox: "0 0 24 24",
                                                                                stroke: "currentColor",
                                                                                strokeWidth: 1.5,
                                                                                strokeLinecap: "round",
                                                                                strokeLinejoin: "round",
                                                                                children: [
                                                                                    /*#__PURE__*/ _jsx("path", {
                                                                                        d: "M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"
                                                                                    }),
                                                                                    /*#__PURE__*/ _jsx("path", {
                                                                                        d: "M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"
                                                                                    })
                                                                                ]
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ _jsxs("div", {
                                                                            className: "min-w-0",
                                                                            children: [
                                                                                /*#__PURE__*/ _jsx("h3", {
                                                                                    className: "font-display text-sm font-semibold text-text",
                                                                                    children: "Developer task"
                                                                                }),
                                                                                /*#__PURE__*/ _jsx("p", {
                                                                                    className: "mt-0.5 text-xs text-text-muted/80 leading-relaxed",
                                                                                    children: '"Build a secure Laravel API with policies and validation"'
                                                                                })
                                                                            ]
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ _jsxs("div", {
                                                            className: "group card p-5 transition-all duration-300 hover:border-brand/25 relative",
                                                            children: [
                                                                /*#__PURE__*/ _jsx("div", {
                                                                    className: "absolute top-0 left-0 right-0 h-px",
                                                                    style: {
                                                                        background: "linear-gradient(90deg, transparent, rgba(230,57,70,0.15), transparent)"
                                                                    }
                                                                }),
                                                                /*#__PURE__*/ _jsxs("div", {
                                                                    className: "flex items-start gap-3",
                                                                    children: [
                                                                        /*#__PURE__*/ _jsx("div", {
                                                                            className: "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-subtle text-brand transition-transform duration-300 group-hover:scale-110",
                                                                            children: /*#__PURE__*/ _jsxs("svg", {
                                                                                className: "h-[18px] w-[18px]",
                                                                                fill: "none",
                                                                                viewBox: "0 0 24 24",
                                                                                stroke: "currentColor",
                                                                                strokeWidth: 1.5,
                                                                                strokeLinecap: "round",
                                                                                strokeLinejoin: "round",
                                                                                children: [
                                                                                    /*#__PURE__*/ _jsx("polyline", {
                                                                                        points: "4 17 10 11 4 5"
                                                                                    }),
                                                                                    /*#__PURE__*/ _jsx("line", {
                                                                                        x1: "12",
                                                                                        y1: "19",
                                                                                        x2: "20",
                                                                                        y2: "19"
                                                                                    })
                                                                                ]
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ _jsxs("div", {
                                                                            className: "min-w-0",
                                                                            children: [
                                                                                /*#__PURE__*/ _jsx("h3", {
                                                                                    className: "font-display text-sm font-semibold text-text",
                                                                                    children: "AI coding agent"
                                                                                }),
                                                                                /*#__PURE__*/ _jsx("div", {
                                                                                    className: "mt-1.5 flex flex-wrap gap-1.5",
                                                                                    children: [
                                                                                        "OpenCode",
                                                                                        "Codex",
                                                                                        "Cursor",
                                                                                        "Claude Code",
                                                                                        "Copilot"
                                                                                    ].map((name)=>/*#__PURE__*/ _jsx("span", {
                                                                                            className: "inline-block rounded-md border border-border/50 bg-bg/70 px-1.5 py-0.5 text-[10px] font-medium text-text-muted/80 transition-colors hover:border-brand/25 hover:text-brand/70",
                                                                                            children: name
                                                                                        }, name))
                                                                                })
                                                                            ]
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ _jsx("div", {
                                                    className: "flex w-[2%] shrink-0 items-center justify-center",
                                                    children: /*#__PURE__*/ _jsx("div", {
                                                        className: "flex items-center",
                                                        children: /*#__PURE__*/ _jsxs("svg", {
                                                            className: "h-6 w-6 text-brand/30",
                                                            viewBox: "0 0 24 16",
                                                            fill: "none",
                                                            stroke: "currentColor",
                                                            strokeWidth: "1.5",
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            children: [
                                                                /*#__PURE__*/ _jsx("line", {
                                                                    x1: "0",
                                                                    y1: "8",
                                                                    x2: "17",
                                                                    y2: "8",
                                                                    strokeDasharray: "2.5 2.5"
                                                                }),
                                                                /*#__PURE__*/ _jsx("path", {
                                                                    d: "M15 3l5 5-5 5"
                                                                })
                                                            ]
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ _jsxs("div", {
                                                    className: "w-[44%] shrink-0",
                                                    children: [
                                                        /*#__PURE__*/ _jsx("div", {
                                                            className: "text-center mb-3",
                                                            children: /*#__PURE__*/ _jsxs("span", {
                                                                className: "inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-text-dim",
                                                                children: [
                                                                    /*#__PURE__*/ _jsx("svg", {
                                                                        className: "h-3 w-3 text-brand/40",
                                                                        fill: "none",
                                                                        viewBox: "0 0 24 24",
                                                                        stroke: "currentColor",
                                                                        strokeWidth: 2,
                                                                        children: /*#__PURE__*/ _jsx("path", {
                                                                            strokeLinecap: "round",
                                                                            strokeLinejoin: "round",
                                                                            d: "M13 10V3L4 14h7v7l9-11h-7z"
                                                                        })
                                                                    }),
                                                                    "Context Engine",
                                                                    /*#__PURE__*/ _jsx("svg", {
                                                                        className: "h-3 w-3 text-accent/40",
                                                                        fill: "none",
                                                                        viewBox: "0 0 24 24",
                                                                        stroke: "currentColor",
                                                                        strokeWidth: 2,
                                                                        children: /*#__PURE__*/ _jsx("path", {
                                                                            strokeLinecap: "round",
                                                                            strokeLinejoin: "round",
                                                                            d: "M13 10V3L4 14h7v7l9-11h-7z"
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        }),
                                                        /*#__PURE__*/ _jsxs("div", {
                                                            className: "animate-glow-pulse relative rounded-2xl border border-border/50 bg-bg-card/90 p-5 shadow-lg shadow-brand/5 backdrop-blur-sm transition-all duration-500 hover:border-brand/30",
                                                            children: [
                                                                /*#__PURE__*/ _jsx("div", {
                                                                    "aria-hidden": true,
                                                                    className: "pointer-events-none absolute inset-0 rounded-2xl opacity-[0.08]",
                                                                    style: {
                                                                        background: "radial-gradient(ellipse at 50% 30%, rgba(230,57,70,0.15) 0%, transparent 70%)"
                                                                    }
                                                                }),
                                                                /*#__PURE__*/ _jsxs("div", {
                                                                    className: "relative mb-3 flex items-center gap-2.5",
                                                                    children: [
                                                                        /*#__PURE__*/ _jsx("div", {
                                                                            className: "flex h-8 w-8 items-center justify-center rounded-lg bg-brand text-white shadow-sm shadow-brand/20",
                                                                            children: /*#__PURE__*/ _jsx("svg", {
                                                                                className: "h-4 w-4",
                                                                                fill: "none",
                                                                                viewBox: "0 0 24 24",
                                                                                stroke: "currentColor",
                                                                                strokeWidth: 2,
                                                                                children: /*#__PURE__*/ _jsx("path", {
                                                                                    strokeLinecap: "round",
                                                                                    strokeLinejoin: "round",
                                                                                    d: "M13 10V3L4 14h7v7l9-11h-7z"
                                                                                })
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ _jsxs("div", {
                                                                            children: [
                                                                                /*#__PURE__*/ _jsx("h3", {
                                                                                    className: "font-display text-base font-semibold text-text",
                                                                                    children: "Laraskills Engine"
                                                                                }),
                                                                                /*#__PURE__*/ _jsx("p", {
                                                                                    className: "text-xs text-text-muted/60",
                                                                                    children: "Retrieves Laravel-specific context before your agent writes code."
                                                                                })
                                                                            ]
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ _jsxs("div", {
                                                                    className: "relative mb-3 overflow-hidden rounded-lg border border-border/20 bg-black/60",
                                                                    children: [
                                                                        /*#__PURE__*/ _jsxs("div", {
                                                                            className: "flex items-center justify-between border-b border-border/30 px-3 py-1.5",
                                                                            children: [
                                                                                /*#__PURE__*/ _jsxs("div", {
                                                                                    className: "flex items-center gap-1.5",
                                                                                    children: [
                                                                                        /*#__PURE__*/ _jsx("span", {
                                                                                            className: "h-2 w-2 rounded-full bg-red-500/60"
                                                                                        }),
                                                                                        /*#__PURE__*/ _jsx("span", {
                                                                                            className: "h-2 w-2 rounded-full bg-yellow-500/60"
                                                                                        }),
                                                                                        /*#__PURE__*/ _jsx("span", {
                                                                                            className: "h-2 w-2 rounded-full bg-green-500/60"
                                                                                        })
                                                                                    ]
                                                                                }),
                                                                                /*#__PURE__*/ _jsx("span", {
                                                                                    className: "font-mono text-[10px] font-medium text-text-dim/50 select-none",
                                                                                    children: "laraskills@retrieve"
                                                                                }),
                                                                                /*#__PURE__*/ _jsx("div", {
                                                                                    className: "w-8"
                                                                                })
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ _jsxs("div", {
                                                                            className: "p-3 font-mono text-xs leading-relaxed space-y-1",
                                                                            children: [
                                                                                /*#__PURE__*/ _jsxs("div", {
                                                                                    className: "flex items-start gap-2",
                                                                                    children: [
                                                                                        /*#__PURE__*/ _jsx("span", {
                                                                                            className: "text-accent/70 shrink-0 select-none",
                                                                                            children: "$"
                                                                                        }),
                                                                                        /*#__PURE__*/ _jsx("span", {
                                                                                            className: "text-text-muted",
                                                                                            children: "laraskills retrieve "
                                                                                        }),
                                                                                        /*#__PURE__*/ _jsx("span", {
                                                                                            className: "text-orange-300/70",
                                                                                            children: '"secure Laravel API"'
                                                                                        })
                                                                                    ]
                                                                                }),
                                                                                /*#__PURE__*/ _jsxs("div", {
                                                                                    className: "flex items-start gap-2",
                                                                                    children: [
                                                                                        /*#__PURE__*/ _jsx("span", {
                                                                                            className: "text-accent shrink-0 select-none",
                                                                                            children: "✓"
                                                                                        }),
                                                                                        /*#__PURE__*/ _jsxs("span", {
                                                                                            className: "text-accent/80",
                                                                                            children: [
                                                                                                "matched ",
                                                                                                /*#__PURE__*/ _jsx("span", {
                                                                                                    className: "text-text-muted",
                                                                                                    children: "4"
                                                                                                }),
                                                                                                " Laravel skills"
                                                                                            ]
                                                                                        })
                                                                                    ]
                                                                                }),
                                                                                /*#__PURE__*/ _jsxs("div", {
                                                                                    className: "flex items-start gap-2",
                                                                                    children: [
                                                                                        /*#__PURE__*/ _jsx("span", {
                                                                                            className: "text-accent shrink-0 select-none",
                                                                                            children: "✓"
                                                                                        }),
                                                                                        /*#__PURE__*/ _jsxs("span", {
                                                                                            className: "text-accent/80",
                                                                                            children: [
                                                                                                "applied ",
                                                                                                /*#__PURE__*/ _jsx("span", {
                                                                                                    className: "text-text-muted",
                                                                                                    children: "12"
                                                                                                }),
                                                                                                " framework rules"
                                                                                            ]
                                                                                        })
                                                                                    ]
                                                                                }),
                                                                                /*#__PURE__*/ _jsxs("div", {
                                                                                    className: "flex items-start gap-2",
                                                                                    children: [
                                                                                        /*#__PURE__*/ _jsx("span", {
                                                                                            className: "text-accent shrink-0 select-none",
                                                                                            children: "✓"
                                                                                        }),
                                                                                        /*#__PURE__*/ _jsxs("span", {
                                                                                            className: "text-accent/80",
                                                                                            children: [
                                                                                                "loaded ",
                                                                                                /*#__PURE__*/ _jsx("span", {
                                                                                                    className: "text-text-muted",
                                                                                                    children: "8"
                                                                                                }),
                                                                                                " code examples"
                                                                                            ]
                                                                                        })
                                                                                    ]
                                                                                }),
                                                                                /*#__PURE__*/ _jsxs("div", {
                                                                                    className: "flex items-start gap-2",
                                                                                    children: [
                                                                                        /*#__PURE__*/ _jsx("span", {
                                                                                            className: "text-accent shrink-0 select-none",
                                                                                            children: "✓"
                                                                                        }),
                                                                                        /*#__PURE__*/ _jsxs("span", {
                                                                                            className: "text-accent/80",
                                                                                            children: [
                                                                                                "checked ",
                                                                                                /*#__PURE__*/ _jsx("span", {
                                                                                                    className: "text-text-muted",
                                                                                                    children: "6"
                                                                                                }),
                                                                                                " dependency constraints"
                                                                                            ]
                                                                                        })
                                                                                    ]
                                                                                }),
                                                                                /*#__PURE__*/ _jsxs("div", {
                                                                                    className: "flex items-start gap-2 border-t border-border/20 pt-1 mt-1",
                                                                                    children: [
                                                                                        /*#__PURE__*/ _jsx("span", {
                                                                                            className: "text-accent shrink-0 select-none",
                                                                                            children: "✓"
                                                                                        }),
                                                                                        /*#__PURE__*/ _jsx("span", {
                                                                                            className: "text-accent/90 font-semibold",
                                                                                            children: "context ready — 2.4s"
                                                                                        })
                                                                                    ]
                                                                                }),
                                                                                /*#__PURE__*/ _jsxs("div", {
                                                                                    className: "flex items-center gap-2",
                                                                                    children: [
                                                                                        /*#__PURE__*/ _jsx("span", {
                                                                                            className: "text-text-dim/50 shrink-0 select-none",
                                                                                            children: "$"
                                                                                        }),
                                                                                        /*#__PURE__*/ _jsx("span", {
                                                                                            className: "inline-block h-3.5 w-1.5 bg-brand/60 animate-terminal-blink"
                                                                                        })
                                                                                    ]
                                                                                })
                                                                            ]
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ _jsx("div", {
                                                                    className: "relative mb-3 flex flex-wrap gap-2",
                                                                    children: [
                                                                        {
                                                                            label: "CLI",
                                                                            color: "border-blue-400/20 text-blue-300/70"
                                                                        },
                                                                        {
                                                                            label: "MCP",
                                                                            color: "border-purple-400/20 text-purple-300/70"
                                                                        },
                                                                        {
                                                                            label: "Retrieval",
                                                                            color: "border-accent/20 text-accent/70"
                                                                        },
                                                                        {
                                                                            label: "Validation",
                                                                            color: "border-amber-400/20 text-amber-300/70"
                                                                        }
                                                                    ].map((badge)=>/*#__PURE__*/ _jsxs("span", {
                                                                            className: `inline-flex items-center gap-1 rounded-md border ${badge.color} bg-bg/50 px-2 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wider transition-all hover:scale-105`,
                                                                            children: [
                                                                                /*#__PURE__*/ _jsx("span", {
                                                                                    className: "h-1.5 w-1.5 rounded-full bg-current opacity-50"
                                                                                }),
                                                                                badge.label
                                                                            ]
                                                                        }, badge.label))
                                                                }),
                                                                /*#__PURE__*/ _jsxs("div", {
                                                                    className: "relative border-t border-border/15 pt-3",
                                                                    children: [
                                                                        /*#__PURE__*/ _jsxs("div", {
                                                                            className: "mb-2 flex items-center gap-2",
                                                                            children: [
                                                                                /*#__PURE__*/ _jsx("span", {
                                                                                    className: "font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-text-dim/40",
                                                                                    children: "Knowledge base"
                                                                                }),
                                                                                /*#__PURE__*/ _jsx("div", {
                                                                                    className: "flex-1 h-px bg-border/20"
                                                                                })
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ _jsx("div", {
                                                                            className: "flex flex-wrap gap-1.5",
                                                                            children: [
                                                                                "Skills",
                                                                                "Rules",
                                                                                "Examples",
                                                                                "Dependencies",
                                                                                "Best practices"
                                                                            ].map((mod)=>/*#__PURE__*/ _jsx("span", {
                                                                                    className: "inline-block rounded-md border border-border/20 bg-bg/60 px-2.5 py-1 text-[11px] font-medium text-text-muted/70 transition-all duration-200 hover:border-brand/20 hover:text-brand/60 hover:bg-brand/[0.04]",
                                                                                    children: mod
                                                                                }, mod))
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ _jsx("div", {
                                                    className: "flex w-[2%] shrink-0 items-center justify-center",
                                                    children: /*#__PURE__*/ _jsx("div", {
                                                        className: "flex items-center",
                                                        children: /*#__PURE__*/ _jsxs("svg", {
                                                            className: "h-6 w-6 text-brand/30",
                                                            viewBox: "0 0 24 16",
                                                            fill: "none",
                                                            stroke: "currentColor",
                                                            strokeWidth: "1.5",
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            children: [
                                                                /*#__PURE__*/ _jsx("line", {
                                                                    x1: "0",
                                                                    y1: "8",
                                                                    x2: "17",
                                                                    y2: "8",
                                                                    strokeDasharray: "2.5 2.5"
                                                                }),
                                                                /*#__PURE__*/ _jsx("path", {
                                                                    d: "M15 3l5 5-5 5"
                                                                })
                                                            ]
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ _jsxs("div", {
                                                    className: "flex w-[30%] shrink-0 flex-col justify-center",
                                                    children: [
                                                        /*#__PURE__*/ _jsx("div", {
                                                            className: "text-center mb-1",
                                                            children: /*#__PURE__*/ _jsx("span", {
                                                                className: "inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-text-dim",
                                                                children: "Output"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ _jsxs("div", {
                                                            className: "group card-featured p-5 transition-all duration-300",
                                                            children: [
                                                                /*#__PURE__*/ _jsxs("div", {
                                                                    className: "flex items-center gap-3 mb-3",
                                                                    children: [
                                                                        /*#__PURE__*/ _jsx("div", {
                                                                            className: "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand text-white shadow-sm shadow-brand/20 transition-transform duration-300 group-hover:scale-110",
                                                                            children: /*#__PURE__*/ _jsxs("svg", {
                                                                                className: "h-[18px] w-[18px]",
                                                                                fill: "none",
                                                                                viewBox: "0 0 24 24",
                                                                                stroke: "currentColor",
                                                                                strokeWidth: 1.5,
                                                                                strokeLinecap: "round",
                                                                                strokeLinejoin: "round",
                                                                                children: [
                                                                                    /*#__PURE__*/ _jsx("path", {
                                                                                        d: "M22 11.08V12a10 10 0 11-5.93-9.14"
                                                                                    }),
                                                                                    /*#__PURE__*/ _jsx("polyline", {
                                                                                        points: "22 4 12 14.01 9 11.01"
                                                                                    })
                                                                                ]
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ _jsxs("div", {
                                                                            className: "min-w-0",
                                                                            children: [
                                                                                /*#__PURE__*/ _jsx("h3", {
                                                                                    className: "font-display text-sm font-semibold text-text",
                                                                                    children: "Better Laravel output"
                                                                                }),
                                                                                /*#__PURE__*/ _jsx("p", {
                                                                                    className: "mt-0.5 text-xs text-text-muted/80",
                                                                                    children: "Framework-aware code with fewer guesses."
                                                                                })
                                                                            ]
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ _jsxs("div", {
                                                                    className: "flex flex-wrap gap-1.5 mb-3",
                                                                    children: [
                                                                        /*#__PURE__*/ _jsxs("span", {
                                                                            className: "inline-flex items-center gap-1 rounded-md border border-accent/20 bg-accent/[0.06] px-2 py-0.5 font-mono text-[9px] font-semibold uppercase tracking-wider text-accent/80",
                                                                            children: [
                                                                                /*#__PURE__*/ _jsx("span", {
                                                                                    className: "h-1.5 w-1.5 rounded-full bg-accent/60"
                                                                                }),
                                                                                "Context-aware"
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ _jsxs("span", {
                                                                            className: "inline-flex items-center gap-1 rounded-md border border-brand/15 bg-brand-subtle px-2 py-0.5 font-mono text-[9px] font-semibold uppercase tracking-wider text-brand/80",
                                                                            children: [
                                                                                /*#__PURE__*/ _jsx("span", {
                                                                                    className: "h-1.5 w-1.5 rounded-full bg-brand/60"
                                                                                }),
                                                                                "Rule-guided"
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ _jsxs("span", {
                                                                            className: "inline-flex items-center gap-1 rounded-md border border-blue-400/15 bg-blue-400/[0.06] px-2 py-0.5 font-mono text-[9px] font-semibold uppercase tracking-wider text-blue-300/80",
                                                                            children: [
                                                                                /*#__PURE__*/ _jsx("span", {
                                                                                    className: "h-1.5 w-1.5 rounded-full bg-blue-400/60"
                                                                                }),
                                                                                "Dependency-aware"
                                                                            ]
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ _jsxs("div", {
                                                                    className: "rounded-lg border border-border/40 bg-black/50 overflow-hidden",
                                                                    children: [
                                                                        /*#__PURE__*/ _jsxs("div", {
                                                                            className: "flex items-center justify-between border-b border-border/25 px-3 py-1.5",
                                                                            children: [
                                                                                /*#__PURE__*/ _jsx("span", {
                                                                                    className: "font-mono text-[10px] text-text-dim/40 select-none truncate",
                                                                                    children: "routes/web.php"
                                                                                }),
                                                                                /*#__PURE__*/ _jsx("div", {
                                                                                    className: "flex items-center gap-1",
                                                                                    children: /*#__PURE__*/ _jsx("span", {
                                                                                        className: "h-2 w-2 rounded-full bg-accent/40"
                                                                                    })
                                                                                })
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ _jsx("pre", {
                                                                            className: "p-3 font-mono text-[11px] leading-relaxed whitespace-pre-wrap break-all overflow-hidden max-w-full",
                                                                            children: /*#__PURE__*/ _jsxs("code", {
                                                                                children: [
                                                                                    /*#__PURE__*/ _jsx("span", {
                                                                                        className: "text-purple-300/70",
                                                                                        children: "Route"
                                                                                    }),
                                                                                    /*#__PURE__*/ _jsx("span", {
                                                                                        className: "text-text-muted/60",
                                                                                        children: "::"
                                                                                    }),
                                                                                    /*#__PURE__*/ _jsx("span", {
                                                                                        className: "text-blue-300/70",
                                                                                        children: "middleware"
                                                                                    }),
                                                                                    /*#__PURE__*/ _jsx("span", {
                                                                                        className: "text-text-muted/60",
                                                                                        children: "(["
                                                                                    }),
                                                                                    /*#__PURE__*/ _jsx("span", {
                                                                                        className: "text-orange-300/60",
                                                                                        children: "'auth'"
                                                                                    }),
                                                                                    /*#__PURE__*/ _jsx("span", {
                                                                                        className: "text-text-muted/60",
                                                                                        children: ", "
                                                                                    }),
                                                                                    /*#__PURE__*/ _jsx("span", {
                                                                                        className: "text-orange-300/60",
                                                                                        children: "'verified'"
                                                                                    }),
                                                                                    /*#__PURE__*/ _jsx("span", {
                                                                                        className: "text-text-muted/60",
                                                                                        children: "])"
                                                                                    }),
                                                                                    "\n",
                                                                                    /*#__PURE__*/ _jsx("span", {
                                                                                        className: "text-text-muted/40",
                                                                                        children: "    "
                                                                                    }),
                                                                                    /*#__PURE__*/ _jsx("span", {
                                                                                        className: "text-text-muted/60",
                                                                                        children: "->"
                                                                                    }),
                                                                                    /*#__PURE__*/ _jsx("span", {
                                                                                        className: "text-blue-300/70",
                                                                                        children: "get"
                                                                                    }),
                                                                                    /*#__PURE__*/ _jsx("span", {
                                                                                        className: "text-text-muted/60",
                                                                                        children: "("
                                                                                    }),
                                                                                    /*#__PURE__*/ _jsx("span", {
                                                                                        className: "text-orange-300/60",
                                                                                        children: `'/users/{user}'`
                                                                                    }),
                                                                                    /*#__PURE__*/ _jsx("span", {
                                                                                        className: "text-text-muted/60",
                                                                                        children: ", ["
                                                                                    }),
                                                                                    /*#__PURE__*/ _jsx("span", {
                                                                                        className: "text-yellow-300/60",
                                                                                        children: "UserController"
                                                                                    }),
                                                                                    /*#__PURE__*/ _jsx("span", {
                                                                                        className: "text-text-muted/60",
                                                                                        children: "::"
                                                                                    }),
                                                                                    /*#__PURE__*/ _jsx("span", {
                                                                                        className: "text-blue-300/70",
                                                                                        children: "class"
                                                                                    }),
                                                                                    /*#__PURE__*/ _jsx("span", {
                                                                                        className: "text-text-muted/60",
                                                                                        children: ", "
                                                                                    }),
                                                                                    /*#__PURE__*/ _jsx("span", {
                                                                                        className: "text-orange-300/60",
                                                                                        children: "'show'"
                                                                                    }),
                                                                                    /*#__PURE__*/ _jsx("span", {
                                                                                        className: "text-text-muted/60",
                                                                                        children: "]);"
                                                                                    })
                                                                                ]
                                                                            })
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ _jsx("div", {
                                                                    className: "mt-3 space-y-1.5",
                                                                    children: [
                                                                        "Follows Laravel conventions",
                                                                        "Uses project-aware context",
                                                                        "Applies best practices",
                                                                        "Reduces hallucinations"
                                                                    ].map((check)=>/*#__PURE__*/ _jsxs("div", {
                                                                            className: "flex items-center gap-2 text-xs text-text-muted",
                                                                            children: [
                                                                                /*#__PURE__*/ _jsx("svg", {
                                                                                    className: "h-3.5 w-3.5 shrink-0 text-accent",
                                                                                    fill: "none",
                                                                                    viewBox: "0 0 24 24",
                                                                                    stroke: "currentColor",
                                                                                    strokeWidth: 2.5,
                                                                                    children: /*#__PURE__*/ _jsx("path", {
                                                                                        strokeLinecap: "round",
                                                                                        strokeLinejoin: "round",
                                                                                        d: "M5 13l4 4L19 7"
                                                                                    })
                                                                                }),
                                                                                /*#__PURE__*/ _jsx("span", {
                                                                                    children: check
                                                                                })
                                                                            ]
                                                                        }, check))
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ _jsxs("div", {
                                    className: "flex flex-col items-center gap-5 lg:hidden",
                                    children: [
                                        /*#__PURE__*/ _jsx("span", {
                                            className: "inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-text-dim",
                                            children: "Input"
                                        }),
                                        /*#__PURE__*/ _jsxs("div", {
                                            className: "w-full max-w-sm group card p-5 transition-all duration-300 hover:border-brand/25 relative",
                                            children: [
                                                /*#__PURE__*/ _jsx("div", {
                                                    className: "absolute top-0 left-0 right-0 h-px",
                                                    style: {
                                                        background: "linear-gradient(90deg, transparent, rgba(230,57,70,0.15), transparent)"
                                                    }
                                                }),
                                                /*#__PURE__*/ _jsxs("div", {
                                                    className: "flex items-start gap-3",
                                                    children: [
                                                        /*#__PURE__*/ _jsx("div", {
                                                            className: "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-subtle text-brand transition-transform duration-300 group-hover:scale-110",
                                                            children: /*#__PURE__*/ _jsxs("svg", {
                                                                className: "h-[18px] w-[18px]",
                                                                fill: "none",
                                                                viewBox: "0 0 24 24",
                                                                stroke: "currentColor",
                                                                strokeWidth: 1.5,
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round",
                                                                children: [
                                                                    /*#__PURE__*/ _jsx("path", {
                                                                        d: "M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"
                                                                    }),
                                                                    /*#__PURE__*/ _jsx("path", {
                                                                        d: "M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"
                                                                    })
                                                                ]
                                                            })
                                                        }),
                                                        /*#__PURE__*/ _jsxs("div", {
                                                            children: [
                                                                /*#__PURE__*/ _jsx("h3", {
                                                                    className: "font-display text-sm font-semibold text-text",
                                                                    children: "Developer task"
                                                                }),
                                                                /*#__PURE__*/ _jsx("p", {
                                                                    className: "mt-0.5 text-xs text-text-muted/80 leading-relaxed",
                                                                    children: '"Build a secure Laravel API with policies and validation"'
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ _jsx("svg", {
                                            className: "h-5 w-5 text-brand/25 shrink-0",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "1.5",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            children: /*#__PURE__*/ _jsx("path", {
                                                d: "M12 5v14M5 12l7 7 7-7"
                                            })
                                        }),
                                        /*#__PURE__*/ _jsxs("div", {
                                            className: "w-full max-w-sm group card p-5 transition-all duration-300 hover:border-brand/25 relative",
                                            children: [
                                                /*#__PURE__*/ _jsx("div", {
                                                    className: "absolute top-0 left-0 right-0 h-px",
                                                    style: {
                                                        background: "linear-gradient(90deg, transparent, rgba(230,57,70,0.15), transparent)"
                                                    }
                                                }),
                                                /*#__PURE__*/ _jsxs("div", {
                                                    className: "flex items-start gap-3",
                                                    children: [
                                                        /*#__PURE__*/ _jsx("div", {
                                                            className: "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-subtle text-brand transition-transform duration-300 group-hover:scale-110",
                                                            children: /*#__PURE__*/ _jsxs("svg", {
                                                                className: "h-[18px] w-[18px]",
                                                                fill: "none",
                                                                viewBox: "0 0 24 24",
                                                                stroke: "currentColor",
                                                                strokeWidth: 1.5,
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round",
                                                                children: [
                                                                    /*#__PURE__*/ _jsx("polyline", {
                                                                        points: "4 17 10 11 4 5"
                                                                    }),
                                                                    /*#__PURE__*/ _jsx("line", {
                                                                        x1: "12",
                                                                        y1: "19",
                                                                        x2: "20",
                                                                        y2: "19"
                                                                    })
                                                                ]
                                                            })
                                                        }),
                                                        /*#__PURE__*/ _jsxs("div", {
                                                            children: [
                                                                /*#__PURE__*/ _jsx("h3", {
                                                                    className: "font-display text-sm font-semibold text-text",
                                                                    children: "AI coding agent"
                                                                }),
                                                                /*#__PURE__*/ _jsx("div", {
                                                                    className: "mt-1.5 flex flex-wrap gap-1.5",
                                                                    children: [
                                                                        "OpenCode",
                                                                        "Codex",
                                                                        "Cursor",
                                                                        "Claude Code",
                                                                        "Copilot"
                                                                    ].map((name)=>/*#__PURE__*/ _jsx("span", {
                                                                            className: "inline-block rounded-md border border-border/50 bg-bg/70 px-1.5 py-0.5 text-[10px] font-medium text-text-muted/80",
                                                                            children: name
                                                                        }, name))
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ _jsx("svg", {
                                            className: "h-5 w-5 text-brand/25 shrink-0",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "1.5",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            children: /*#__PURE__*/ _jsx("path", {
                                                d: "M12 5v14M5 12l7 7 7-7"
                                            })
                                        }),
                                        /*#__PURE__*/ _jsxs("span", {
                                            className: "inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-text-dim",
                                            children: [
                                                /*#__PURE__*/ _jsx("svg", {
                                                    className: "h-3 w-3 text-brand/40",
                                                    fill: "none",
                                                    viewBox: "0 0 24 24",
                                                    stroke: "currentColor",
                                                    strokeWidth: 2,
                                                    children: /*#__PURE__*/ _jsx("path", {
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        d: "M13 10V3L4 14h7v7l9-11h-7z"
                                                    })
                                                }),
                                                "Context Engine"
                                            ]
                                        }),
                                        /*#__PURE__*/ _jsxs("div", {
                                            className: "w-full max-w-sm animate-glow-pulse relative rounded-2xl border border-border/50 bg-bg-card/90 p-5 shadow-lg shadow-brand/5 backdrop-blur-sm",
                                            children: [
                                                /*#__PURE__*/ _jsx("div", {
                                                    "aria-hidden": true,
                                                    className: "pointer-events-none absolute inset-0 rounded-2xl opacity-[0.08]",
                                                    style: {
                                                        background: "radial-gradient(ellipse at 50% 30%, rgba(230,57,70,0.15) 0%, transparent 70%)"
                                                    }
                                                }),
                                                /*#__PURE__*/ _jsxs("div", {
                                                    className: "relative mb-3 flex items-center gap-2.5",
                                                    children: [
                                                        /*#__PURE__*/ _jsx("div", {
                                                            className: "flex h-8 w-8 items-center justify-center rounded-lg bg-brand text-white shadow-sm shadow-brand/20",
                                                            children: /*#__PURE__*/ _jsx("svg", {
                                                                className: "h-4 w-4",
                                                                fill: "none",
                                                                viewBox: "0 0 24 24",
                                                                stroke: "currentColor",
                                                                strokeWidth: 2,
                                                                children: /*#__PURE__*/ _jsx("path", {
                                                                    strokeLinecap: "round",
                                                                    strokeLinejoin: "round",
                                                                    d: "M13 10V3L4 14h7v7l9-11h-7z"
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ _jsxs("div", {
                                                            children: [
                                                                /*#__PURE__*/ _jsx("h3", {
                                                                    className: "font-display text-base font-semibold text-text",
                                                                    children: "Laraskills Engine"
                                                                }),
                                                                /*#__PURE__*/ _jsx("p", {
                                                                    className: "text-xs text-text-muted/60",
                                                                    children: "Retrieves Laravel-specific context before your agent writes code."
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ _jsxs("div", {
                                                    className: "relative mb-3 overflow-hidden rounded-lg border border-border/20 bg-black/60",
                                                    children: [
                                                        /*#__PURE__*/ _jsxs("div", {
                                                            className: "flex items-center justify-between border-b border-border/30 px-3 py-1.5",
                                                            children: [
                                                                /*#__PURE__*/ _jsxs("div", {
                                                                    className: "flex items-center gap-1.5",
                                                                    children: [
                                                                        /*#__PURE__*/ _jsx("span", {
                                                                            className: "h-2 w-2 rounded-full bg-red-500/60"
                                                                        }),
                                                                        /*#__PURE__*/ _jsx("span", {
                                                                            className: "h-2 w-2 rounded-full bg-yellow-500/60"
                                                                        }),
                                                                        /*#__PURE__*/ _jsx("span", {
                                                                            className: "h-2 w-2 rounded-full bg-green-500/60"
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ _jsx("span", {
                                                                    className: "font-mono text-[10px] font-medium text-text-dim/50 select-none",
                                                                    children: "laraskills@retrieve"
                                                                }),
                                                                /*#__PURE__*/ _jsx("div", {
                                                                    className: "w-8"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ _jsxs("div", {
                                                            className: "p-3 font-mono text-xs leading-relaxed space-y-1",
                                                            children: [
                                                                /*#__PURE__*/ _jsxs("div", {
                                                                    className: "flex items-start gap-2",
                                                                    children: [
                                                                        /*#__PURE__*/ _jsx("span", {
                                                                            className: "text-accent/70 shrink-0 select-none",
                                                                            children: "$"
                                                                        }),
                                                                        /*#__PURE__*/ _jsx("span", {
                                                                            className: "text-text-muted",
                                                                            children: "laraskills retrieve "
                                                                        }),
                                                                        /*#__PURE__*/ _jsx("span", {
                                                                            className: "text-orange-300/70",
                                                                            children: '"secure Laravel API"'
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ _jsxs("div", {
                                                                    className: "flex items-start gap-2",
                                                                    children: [
                                                                        /*#__PURE__*/ _jsx("span", {
                                                                            className: "text-accent shrink-0 select-none",
                                                                            children: "✓"
                                                                        }),
                                                                        /*#__PURE__*/ _jsxs("span", {
                                                                            className: "text-accent/80",
                                                                            children: [
                                                                                "matched ",
                                                                                /*#__PURE__*/ _jsx("span", {
                                                                                    className: "text-text-muted",
                                                                                    children: "4"
                                                                                }),
                                                                                " Laravel skills"
                                                                            ]
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ _jsxs("div", {
                                                                    className: "flex items-start gap-2",
                                                                    children: [
                                                                        /*#__PURE__*/ _jsx("span", {
                                                                            className: "text-accent shrink-0 select-none",
                                                                            children: "✓"
                                                                        }),
                                                                        /*#__PURE__*/ _jsxs("span", {
                                                                            className: "text-accent/80",
                                                                            children: [
                                                                                "applied ",
                                                                                /*#__PURE__*/ _jsx("span", {
                                                                                    className: "text-text-muted",
                                                                                    children: "12"
                                                                                }),
                                                                                " framework rules"
                                                                            ]
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ _jsxs("div", {
                                                                    className: "flex items-start gap-2",
                                                                    children: [
                                                                        /*#__PURE__*/ _jsx("span", {
                                                                            className: "text-accent shrink-0 select-none",
                                                                            children: "✓"
                                                                        }),
                                                                        /*#__PURE__*/ _jsxs("span", {
                                                                            className: "text-accent/80",
                                                                            children: [
                                                                                "loaded ",
                                                                                /*#__PURE__*/ _jsx("span", {
                                                                                    className: "text-text-muted",
                                                                                    children: "8"
                                                                                }),
                                                                                " code examples"
                                                                            ]
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ _jsxs("div", {
                                                                    className: "flex items-start gap-2",
                                                                    children: [
                                                                        /*#__PURE__*/ _jsx("span", {
                                                                            className: "text-accent shrink-0 select-none",
                                                                            children: "✓"
                                                                        }),
                                                                        /*#__PURE__*/ _jsxs("span", {
                                                                            className: "text-accent/80",
                                                                            children: [
                                                                                "checked ",
                                                                                /*#__PURE__*/ _jsx("span", {
                                                                                    className: "text-text-muted",
                                                                                    children: "6"
                                                                                }),
                                                                                " dependency constraints"
                                                                            ]
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ _jsxs("div", {
                                                                    className: "flex items-start gap-2 border-t border-border/20 pt-1 mt-1",
                                                                    children: [
                                                                        /*#__PURE__*/ _jsx("span", {
                                                                            className: "text-accent shrink-0 select-none",
                                                                            children: "✓"
                                                                        }),
                                                                        /*#__PURE__*/ _jsx("span", {
                                                                            className: "text-accent/90 font-semibold",
                                                                            children: "context ready — 2.4s"
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ _jsxs("div", {
                                                                    className: "flex items-center gap-2",
                                                                    children: [
                                                                        /*#__PURE__*/ _jsx("span", {
                                                                            className: "text-text-dim/50 shrink-0 select-none",
                                                                            children: "$"
                                                                        }),
                                                                        /*#__PURE__*/ _jsx("span", {
                                                                            className: "inline-block h-3.5 w-1.5 bg-brand/60 animate-terminal-blink"
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ _jsx("div", {
                                                    className: "relative mb-3 flex flex-wrap gap-2",
                                                    children: [
                                                        {
                                                            label: "CLI",
                                                            color: "border-blue-400/20 text-blue-300/70"
                                                        },
                                                        {
                                                            label: "MCP",
                                                            color: "border-purple-400/20 text-purple-300/70"
                                                        },
                                                        {
                                                            label: "Retrieval",
                                                            color: "border-accent/20 text-accent/70"
                                                        },
                                                        {
                                                            label: "Validation",
                                                            color: "border-amber-400/20 text-amber-300/70"
                                                        }
                                                    ].map((badge)=>/*#__PURE__*/ _jsxs("span", {
                                                            className: `inline-flex items-center gap-1 rounded-md border ${badge.color} bg-bg/50 px-2 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wider`,
                                                            children: [
                                                                /*#__PURE__*/ _jsx("span", {
                                                                    className: "h-1.5 w-1.5 rounded-full bg-current opacity-50"
                                                                }),
                                                                badge.label
                                                            ]
                                                        }, badge.label))
                                                }),
                                                /*#__PURE__*/ _jsxs("div", {
                                                    className: "relative border-t border-border/15 pt-3",
                                                    children: [
                                                        /*#__PURE__*/ _jsxs("div", {
                                                            className: "mb-2 flex items-center gap-2",
                                                            children: [
                                                                /*#__PURE__*/ _jsx("span", {
                                                                    className: "font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-text-dim/40",
                                                                    children: "Knowledge base"
                                                                }),
                                                                /*#__PURE__*/ _jsx("div", {
                                                                    className: "flex-1 h-px bg-border/20"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ _jsx("div", {
                                                            className: "flex flex-wrap gap-1.5",
                                                            children: [
                                                                "Skills",
                                                                "Rules",
                                                                "Examples",
                                                                "Dependencies",
                                                                "Best practices"
                                                            ].map((mod)=>/*#__PURE__*/ _jsx("span", {
                                                                    className: "inline-block rounded-md border border-border/20 bg-bg/60 px-2.5 py-1 text-[11px] font-medium text-text-muted/70 transition-all duration-200 hover:border-brand/20 hover:text-brand/60 hover:bg-brand/[0.04]",
                                                                    children: mod
                                                                }, mod))
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ _jsx("svg", {
                                            className: "h-5 w-5 text-brand/25 shrink-0",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "1.5",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            children: /*#__PURE__*/ _jsx("path", {
                                                d: "M12 5v14M5 12l7 7 7-7"
                                            })
                                        }),
                                        /*#__PURE__*/ _jsx("span", {
                                            className: "inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-text-dim",
                                            children: "Output"
                                        }),
                                        /*#__PURE__*/ _jsxs("div", {
                                            className: "w-full max-w-sm group card-featured p-5 transition-all duration-300",
                                            children: [
                                                /*#__PURE__*/ _jsxs("div", {
                                                    className: "flex items-center gap-3 mb-3",
                                                    children: [
                                                        /*#__PURE__*/ _jsx("div", {
                                                            className: "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand text-white shadow-sm shadow-brand/20 transition-transform duration-300 group-hover:scale-110",
                                                            children: /*#__PURE__*/ _jsxs("svg", {
                                                                className: "h-[18px] w-[18px]",
                                                                fill: "none",
                                                                viewBox: "0 0 24 24",
                                                                stroke: "currentColor",
                                                                strokeWidth: 1.5,
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round",
                                                                children: [
                                                                    /*#__PURE__*/ _jsx("path", {
                                                                        d: "M22 11.08V12a10 10 0 11-5.93-9.14"
                                                                    }),
                                                                    /*#__PURE__*/ _jsx("polyline", {
                                                                        points: "22 4 12 14.01 9 11.01"
                                                                    })
                                                                ]
                                                            })
                                                        }),
                                                        /*#__PURE__*/ _jsxs("div", {
                                                            children: [
                                                                /*#__PURE__*/ _jsx("h3", {
                                                                    className: "font-display text-sm font-semibold text-text",
                                                                    children: "Better Laravel output"
                                                                }),
                                                                /*#__PURE__*/ _jsx("p", {
                                                                    className: "mt-0.5 text-xs text-text-muted/80",
                                                                    children: "Framework-aware code with fewer guesses."
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ _jsxs("div", {
                                                    className: "flex flex-wrap gap-1.5 mb-3",
                                                    children: [
                                                        /*#__PURE__*/ _jsxs("span", {
                                                            className: "inline-flex items-center gap-1 rounded-md border border-accent/20 bg-accent/[0.06] px-2 py-0.5 font-mono text-[9px] font-semibold uppercase tracking-wider text-accent/80",
                                                            children: [
                                                                /*#__PURE__*/ _jsx("span", {
                                                                    className: "h-1.5 w-1.5 rounded-full bg-accent/60"
                                                                }),
                                                                "Context-aware"
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ _jsxs("span", {
                                                            className: "inline-flex items-center gap-1 rounded-md border border-brand/15 bg-brand-subtle px-2 py-0.5 font-mono text-[9px] font-semibold uppercase tracking-wider text-brand/80",
                                                            children: [
                                                                /*#__PURE__*/ _jsx("span", {
                                                                    className: "h-1.5 w-1.5 rounded-full bg-brand/60"
                                                                }),
                                                                "Rule-guided"
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ _jsxs("span", {
                                                            className: "inline-flex items-center gap-1 rounded-md border border-blue-400/15 bg-blue-400/[0.06] px-2 py-0.5 font-mono text-[9px] font-semibold uppercase tracking-wider text-blue-300/80",
                                                            children: [
                                                                /*#__PURE__*/ _jsx("span", {
                                                                    className: "h-1.5 w-1.5 rounded-full bg-blue-400/60"
                                                                }),
                                                                "Dependency-aware"
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ _jsxs("div", {
                                                    className: "rounded-lg border border-border/40 bg-black/50 overflow-hidden",
                                                    children: [
                                                        /*#__PURE__*/ _jsxs("div", {
                                                            className: "flex items-center justify-between border-b border-border/25 px-3 py-1.5",
                                                            children: [
                                                                /*#__PURE__*/ _jsx("span", {
                                                                    className: "font-mono text-[10px] text-text-dim/40 select-none truncate",
                                                                    children: "routes/web.php"
                                                                }),
                                                                /*#__PURE__*/ _jsx("div", {
                                                                    className: "flex items-center gap-1",
                                                                    children: /*#__PURE__*/ _jsx("span", {
                                                                        className: "h-2 w-2 rounded-full bg-accent/40"
                                                                    })
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ _jsx("pre", {
                                                            className: "p-3 font-mono text-[11px] leading-relaxed whitespace-pre-wrap break-all overflow-hidden max-w-full",
                                                            children: /*#__PURE__*/ _jsxs("code", {
                                                                children: [
                                                                    /*#__PURE__*/ _jsx("span", {
                                                                        className: "text-purple-300/70",
                                                                        children: "Route"
                                                                    }),
                                                                    /*#__PURE__*/ _jsx("span", {
                                                                        className: "text-text-muted/60",
                                                                        children: "::"
                                                                    }),
                                                                    /*#__PURE__*/ _jsx("span", {
                                                                        className: "text-blue-300/70",
                                                                        children: "middleware"
                                                                    }),
                                                                    /*#__PURE__*/ _jsx("span", {
                                                                        className: "text-text-muted/60",
                                                                        children: "(["
                                                                    }),
                                                                    /*#__PURE__*/ _jsx("span", {
                                                                        className: "text-orange-300/60",
                                                                        children: "'auth'"
                                                                    }),
                                                                    /*#__PURE__*/ _jsx("span", {
                                                                        className: "text-text-muted/60",
                                                                        children: ", "
                                                                    }),
                                                                    /*#__PURE__*/ _jsx("span", {
                                                                        className: "text-orange-300/60",
                                                                        children: "'verified'"
                                                                    }),
                                                                    /*#__PURE__*/ _jsx("span", {
                                                                        className: "text-text-muted/60",
                                                                        children: "])"
                                                                    }),
                                                                    "\n",
                                                                    /*#__PURE__*/ _jsx("span", {
                                                                        className: "text-text-muted/40",
                                                                        children: "    "
                                                                    }),
                                                                    /*#__PURE__*/ _jsx("span", {
                                                                        className: "text-text-muted/60",
                                                                        children: "->"
                                                                    }),
                                                                    /*#__PURE__*/ _jsx("span", {
                                                                        className: "text-blue-300/70",
                                                                        children: "get"
                                                                    }),
                                                                    /*#__PURE__*/ _jsx("span", {
                                                                        className: "text-text-muted/60",
                                                                        children: "("
                                                                    }),
                                                                    /*#__PURE__*/ _jsx("span", {
                                                                        className: "text-orange-300/60",
                                                                        children: `'/users/{user}'`
                                                                    }),
                                                                    /*#__PURE__*/ _jsx("span", {
                                                                        className: "text-text-muted/60",
                                                                        children: ", ["
                                                                    }),
                                                                    /*#__PURE__*/ _jsx("span", {
                                                                        className: "text-yellow-300/60",
                                                                        children: "UserController"
                                                                    }),
                                                                    /*#__PURE__*/ _jsx("span", {
                                                                        className: "text-text-muted/60",
                                                                        children: "::"
                                                                    }),
                                                                    /*#__PURE__*/ _jsx("span", {
                                                                        className: "text-blue-300/70",
                                                                        children: "class"
                                                                    }),
                                                                    /*#__PURE__*/ _jsx("span", {
                                                                        className: "text-text-muted/60",
                                                                        children: ", "
                                                                    }),
                                                                    /*#__PURE__*/ _jsx("span", {
                                                                        className: "text-orange-300/60",
                                                                        children: "'show'"
                                                                    }),
                                                                    /*#__PURE__*/ _jsx("span", {
                                                                        className: "text-text-muted/60",
                                                                        children: "]);"
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ _jsx("div", {
                                                    className: "mt-3 space-y-1.5",
                                                    children: [
                                                        "Follows Laravel conventions",
                                                        "Uses project-aware context",
                                                        "Applies best practices",
                                                        "Reduces hallucinations"
                                                    ].map((check)=>/*#__PURE__*/ _jsxs("div", {
                                                            className: "flex items-center gap-2 text-xs text-text-muted",
                                                            children: [
                                                                /*#__PURE__*/ _jsx("svg", {
                                                                    className: "h-3.5 w-3.5 shrink-0 text-accent",
                                                                    fill: "none",
                                                                    viewBox: "0 0 24 24",
                                                                    stroke: "currentColor",
                                                                    strokeWidth: 2.5,
                                                                    children: /*#__PURE__*/ _jsx("path", {
                                                                        strokeLinecap: "round",
                                                                        strokeLinejoin: "round",
                                                                        d: "M5 13l4 4L19 7"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ _jsx("span", {
                                                                    children: check
                                                                })
                                                            ]
                                                        }, check))
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ _jsx(Section, {
                variant: "alt",
                children: /*#__PURE__*/ _jsxs(PageContainer, {
                    children: [
                        /*#__PURE__*/ _jsxs("div", {
                            className: "mb-12 text-center",
                            children: [
                                /*#__PURE__*/ _jsx("span", {
                                    className: "section-eyebrow",
                                    children: "Scale"
                                }),
                                /*#__PURE__*/ _jsx("h2", {
                                    className: "section-title",
                                    children: "By the numbers"
                                }),
                                /*#__PURE__*/ _jsx("p", {
                                    className: "section-lead mx-auto",
                                    children: "The Laraskills knowledge system today"
                                })
                            ]
                        }),
                        /*#__PURE__*/ _jsx("div", {
                            className: "grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4",
                            children: metricsData.metrics.map((metric, index)=>/*#__PURE__*/ _jsx(MetricsCard, {
                                    value: metric.value,
                                    label: metric.label
                                }, index))
                        })
                    ]
                })
            }),
            /*#__PURE__*/ _jsx(Section, {
                variant: "surface",
                children: /*#__PURE__*/ _jsxs(PageContainer, {
                    children: [
                        /*#__PURE__*/ _jsxs("div", {
                            className: "mb-12 text-center",
                            children: [
                                /*#__PURE__*/ _jsx("span", {
                                    className: "section-eyebrow",
                                    children: "Before & after"
                                }),
                                /*#__PURE__*/ _jsx("h2", {
                                    className: "section-title",
                                    children: "Generic coding agent vs Laraskills"
                                }),
                                /*#__PURE__*/ _jsx("p", {
                                    className: "section-lead mx-auto",
                                    children: "Why Laravel developers get better results with Laraskills"
                                })
                            ]
                        }),
                        /*#__PURE__*/ _jsx(ComparisonTable, {
                            beforeTitle: "Generic coding agent",
                            beforeItems: comparisonBefore,
                            afterTitle: "Agent with Laraskills",
                            afterItems: comparisonAfter
                        })
                    ]
                })
            }),
            /*#__PURE__*/ _jsx(Section, {
                variant: "alt",
                children: /*#__PURE__*/ _jsxs(PageContainer, {
                    children: [
                        /*#__PURE__*/ _jsxs("div", {
                            className: "mb-12 text-center",
                            children: [
                                /*#__PURE__*/ _jsx("span", {
                                    className: "section-eyebrow",
                                    children: "Structure"
                                }),
                                /*#__PURE__*/ _jsx("h2", {
                                    className: "section-title",
                                    children: "Three-layer architecture"
                                }),
                                /*#__PURE__*/ _jsx("p", {
                                    className: "section-lead mx-auto",
                                    children: "How Laraskills structures its engineering knowledge"
                                })
                            ]
                        }),
                        /*#__PURE__*/ _jsx("div", {
                            className: "grid grid-cols-1 gap-6 lg:grid-cols-3",
                            children: architectureLayers.map((layer)=>/*#__PURE__*/ _jsx(ArchitectureLayerCard, {
                                    number: layer.number,
                                    title: layer.title,
                                    items: layer.items
                                }, layer.number))
                        })
                    ]
                })
            }),
            /*#__PURE__*/ _jsx(Section, {
                variant: "surface",
                children: /*#__PURE__*/ _jsxs(PageContainer, {
                    children: [
                        /*#__PURE__*/ _jsxs("div", {
                            className: "mb-12 text-center",
                            children: [
                                /*#__PURE__*/ _jsx("span", {
                                    className: "section-eyebrow",
                                    children: "Terminal"
                                }),
                                /*#__PURE__*/ _jsx("h2", {
                                    className: "section-title",
                                    children: "CLI at your fingertips"
                                }),
                                /*#__PURE__*/ _jsx("p", {
                                    className: "section-lead mx-auto",
                                    children: "Real commands to install, retrieve, search, inspect, and diagnose — all from your terminal"
                                })
                            ]
                        }),
                        /*#__PURE__*/ _jsx("div", {
                            className: "grid grid-cols-1 gap-4 lg:grid-cols-2",
                            children: cliCommands.map((cmd, index)=>/*#__PURE__*/ _jsx(CliCommandCard, {
                                    command: cmd.command,
                                    label: cmd.label
                                }, index))
                        })
                    ]
                })
            }),
            /*#__PURE__*/ _jsx(Section, {
                variant: "alt",
                children: /*#__PURE__*/ _jsxs(PageContainer, {
                    children: [
                        /*#__PURE__*/ _jsxs("div", {
                            className: "mb-12 text-center",
                            children: [
                                /*#__PURE__*/ _jsx("span", {
                                    className: "section-eyebrow",
                                    children: "Protocol"
                                }),
                                /*#__PURE__*/ _jsx("h2", {
                                    className: "section-title",
                                    children: "MCP tools for coding agents"
                                }),
                                /*#__PURE__*/ _jsx("p", {
                                    className: "section-lead mx-auto",
                                    children: "Laraskills exposes read-only, deterministic, local-retrieval MCP tools for compatible coding agents"
                                })
                            ]
                        }),
                        /*#__PURE__*/ _jsx("div", {
                            className: "grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3",
                            children: mcpTools.map((tool, index)=>/*#__PURE__*/ _jsx(McpToolCard, {
                                    name: tool.name,
                                    description: tool.description
                                }, index))
                        })
                    ]
                })
            }),
            /*#__PURE__*/ _jsx(Section, {
                variant: "surface",
                children: /*#__PURE__*/ _jsxs(PageContainer, {
                    children: [
                        /*#__PURE__*/ _jsxs("div", {
                            className: "mb-12 text-center",
                            children: [
                                /*#__PURE__*/ _jsx("span", {
                                    className: "section-eyebrow",
                                    children: "Ecosystem"
                                }),
                                /*#__PURE__*/ _jsx("h2", {
                                    className: "section-title",
                                    children: "Works with your Laravel AI stack"
                                }),
                                /*#__PURE__*/ _jsx("p", {
                                    className: "section-lead mx-auto",
                                    children: "Use Laraskills with the coding agents, editors, and assistants already in your workflow."
                                })
                            ]
                        }),
                        /*#__PURE__*/ _jsx("div", {
                            className: "mb-14 flex flex-wrap justify-center gap-3",
                            children: supportedTools.allTools.map((tool, i)=>/*#__PURE__*/ _jsx(IntegrationCloudItem, {
                                    name: tool.name,
                                    icon: tool.icon
                                }, i))
                        }),
                        /*#__PURE__*/ _jsx("div", {
                            className: "grid grid-cols-1 gap-4 lg:grid-cols-3",
                            children: supportedTools.groups.map((group)=>/*#__PURE__*/ _jsx(IntegrationGroupCard, {
                                    title: group.title,
                                    description: group.description,
                                    tools: group.tools
                                }, group.id))
                        }),
                        /*#__PURE__*/ _jsx("p", {
                            className: "mt-10 text-center text-[11px] text-text-dim/50",
                            children: "Tool names and logos are trademarks of their respective owners."
                        })
                    ]
                })
            }),
            /*#__PURE__*/ _jsx(Section, {
                variant: "elevated",
                children: /*#__PURE__*/ _jsxs(PageContainer, {
                    children: [
                        /*#__PURE__*/ _jsxs("div", {
                            className: "mb-12 text-center",
                            children: [
                                /*#__PURE__*/ _jsx("span", {
                                    className: "section-eyebrow",
                                    children: "Evidence"
                                }),
                                /*#__PURE__*/ _jsx("h2", {
                                    className: "section-title",
                                    children: "Research & evidence"
                                }),
                                /*#__PURE__*/ _jsx("p", {
                                    className: "section-lead mx-auto",
                                    children: "In an attribution study, Laraskills was tested against baseline coding agents across multiple Laravel implementation scenarios. The results are measured and reproducible."
                                })
                            ]
                        }),
                        /*#__PURE__*/ _jsxs("div", {
                            className: "grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4",
                            children: [
                                /*#__PURE__*/ _jsxs("div", {
                                    className: "card flex flex-col items-center p-6 text-center group",
                                    children: [
                                        /*#__PURE__*/ _jsx("span", {
                                            className: "font-display text-3xl font-semibold tracking-tight text-brand sm:text-4xl transition-transform duration-300 group-hover:scale-105",
                                            children: "9"
                                        }),
                                        /*#__PURE__*/ _jsx("span", {
                                            className: "mt-1.5 text-sm text-text-muted",
                                            children: "Isolated OpenCode runs"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ _jsxs("div", {
                                    className: "card flex flex-col items-center p-6 text-center group",
                                    children: [
                                        /*#__PURE__*/ _jsx("span", {
                                            className: "font-display text-3xl font-semibold tracking-tight text-brand sm:text-4xl transition-transform duration-300 group-hover:scale-105",
                                            children: "3"
                                        }),
                                        /*#__PURE__*/ _jsx("span", {
                                            className: "mt-1.5 text-sm text-text-muted",
                                            children: "Laravel implementation scenarios"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ _jsxs("div", {
                                    className: "card flex flex-col items-center p-6 text-center group",
                                    children: [
                                        /*#__PURE__*/ _jsx("span", {
                                            className: "font-display text-3xl font-semibold tracking-tight text-brand sm:text-4xl transition-transform duration-300 group-hover:scale-105",
                                            children: "100%"
                                        }),
                                        /*#__PURE__*/ _jsx("span", {
                                            className: "mt-1.5 text-sm text-text-muted",
                                            children: "Test & Pint pass rate"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ _jsxs("div", {
                                    className: "card flex flex-col items-center p-6 text-center group",
                                    children: [
                                        /*#__PURE__*/ _jsx("span", {
                                            className: "font-display text-3xl font-semibold tracking-tight text-brand sm:text-4xl transition-transform duration-300 group-hover:scale-105",
                                            children: "2/3"
                                        }),
                                        /*#__PURE__*/ _jsx("span", {
                                            className: "mt-1.5 text-sm text-text-muted",
                                            children: "Required-context mode won"
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ _jsxs("div", {
                            className: "mt-8 text-center",
                            children: [
                                /*#__PURE__*/ _jsx("p", {
                                    className: "mb-4 text-sm text-text-muted",
                                    children: "These results are from a controlled study and do not claim Laraskills always outperforms baseline agents. Performance depends on task complexity, agent choice, and configuration."
                                }),
                                /*#__PURE__*/ _jsx(Button, {
                                    variant: "secondary",
                                    href: "/research",
                                    children: "Read the research"
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ _jsx(Section, {
                variant: "elevated",
                children: /*#__PURE__*/ _jsx(PageContainer, {
                    children: /*#__PURE__*/ _jsxs("div", {
                        className: "mx-auto max-w-2xl text-center",
                        children: [
                            /*#__PURE__*/ _jsx("h2", {
                                className: "section-title",
                                children: "Ready to ship better Laravel code?"
                            }),
                            /*#__PURE__*/ _jsx("p", {
                                className: "section-lead mx-auto",
                                children: "Install Laraskills and give your coding agent Laravel-specific context in seconds."
                            }),
                            /*#__PURE__*/ _jsxs(Card, {
                                featured: true,
                                className: "mt-8 text-left",
                                children: [
                                    /*#__PURE__*/ _jsxs("div", {
                                        className: "flex items-center justify-between border-b border-border pb-3 mb-3",
                                        children: [
                                            /*#__PURE__*/ _jsx("span", {
                                                className: "font-mono text-xs font-medium text-text-muted uppercase tracking-wider",
                                                children: "Terminal"
                                            }),
                                            /*#__PURE__*/ _jsxs("div", {
                                                className: "flex items-center gap-1.5",
                                                children: [
                                                    /*#__PURE__*/ _jsx("span", {
                                                        className: "h-2.5 w-2.5 rounded-full bg-red-500"
                                                    }),
                                                    /*#__PURE__*/ _jsx("span", {
                                                        className: "h-2.5 w-2.5 rounded-full bg-yellow-500"
                                                    }),
                                                    /*#__PURE__*/ _jsx("span", {
                                                        className: "h-2.5 w-2.5 rounded-full bg-green-500"
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ _jsx("pre", {
                                        className: "overflow-x-auto font-mono text-sm",
                                        children: /*#__PURE__*/ _jsxs("code", {
                                            className: "text-text-muted",
                                            children: [
                                                /*#__PURE__*/ _jsx("span", {
                                                    className: "text-accent",
                                                    children: "$"
                                                }),
                                                " npm install --save-dev laraskills"
                                            ]
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ _jsxs("div", {
                                className: "mt-8 flex flex-wrap items-center justify-center gap-4",
                                children: [
                                    /*#__PURE__*/ _jsx(Button, {
                                        size: "lg",
                                        href: "https://github.com/elmochilyas/laraskills",
                                        children: "Install Laraskills"
                                    }),
                                    /*#__PURE__*/ _jsx(Button, {
                                        variant: "secondary",
                                        size: "lg",
                                        href: "https://github.com/elmochilyas/laraskills",
                                        children: "View GitHub"
                                    })
                                ]
                            })
                        ]
                    })
                })
            })
        ]
    });
}
