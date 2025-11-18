"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { 
  Globe, 
  Megaphone, 
  Shield, 
  Headphones,
  Sparkles,
  Check,
  ArrowRight,
  Calendar,
  Download,
  Search,
  Lightbulb,
  Rocket,
  TrendingUp,
  Target,
  Users,
  Zap,
  Code,
  Monitor,
  Smartphone,
  DollarSign,
  Clock,
  Award,
  Linkedin,
  Instagram,
  FileText,
  Database,
  BarChart3,
  Settings,
  Mail,
  Lock
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const categories = [
  { id: "web-mobile", label: "Web & Mobile Solutions", icon: Monitor, color: "from-blue-500 to-cyan-500" },
  { id: "marketing", label: "AI Marketing & Advertising", icon: Megaphone, color: "from-purple-500 to-pink-500" },
  { id: "crm", label: "CRM & Automation", icon: Target, color: "from-orange-500 to-red-500" },
  { id: "security", label: "Security & Support", icon: Shield, color: "from-green-500 to-emerald-500" },
];

const services = [
  // Web & Mobile Solutions
  {
    id: "website-hosting",
    category: "web-mobile",
    title: "AI-Based Website Building & Hosting",
    shortDescription: "Transform your online presence with our AI-powered website development and premium hosting solution.",
    description: "We create responsive, SEO-optimized websites with integrated AI chatbots, personalization features, and lightning-fast performance on enterprise-grade servers.",
    detailedDescription: "Our AI website building service combines cutting-edge artificial intelligence with professional web design to create stunning, functional websites that convert visitors into customers. Each website includes advanced AI features like intelligent chatbots, personalized user experiences, and automated content optimization.",
    features: [
      "AI-Powered Design & Content Generation",
      "Enterprise Server Hosting",
      "Mobile-First Responsive Design",
      "Advanced SEO Optimization",
      "24/7 Uptime Monitoring",
      "SSL Security Certificate",
      "CDN Integration",
      "Performance Analytics"
    ],
    process: {
      tools: "AI Website Builder Platform, Premium Hosting Infrastructure, SSL Certificates, CDN Services, Analytics Tools",
      timeline: "2-4 weeks development + ongoing hosting",
      support: "24/7 technical support, monthly performance reports, security updates, backup management"
    },
    futureGrowth: "Scale to e-commerce functionality, multi-language support, advanced AI features, custom integrations, enterprise hosting solutions, and white-label options for agencies.",
    industryStandard: "$67,600–$169,000",
    deliverables: [
      "Custom AI-Powered Website",
      "Domain & SSL Setup",
      "Hosting Configuration",
      "Performance Optimization",
      "SEO Foundation",
      "Analytics Integration"
    ],
    supportItems: [
      "24/7 priority support channel",
      "Dedicated account manager",
      "Weekly progress updates",
      "Direct access to technical team",
      "30-day post-launch support",
      "Training and onboarding sessions"
    ],
    color: "from-blue-500 to-cyan-500",
    icon: Globe
  },
  {
    id: "mobile-app",
    category: "web-mobile",
    title: "AI-Based Mobile Application Development",
    shortDescription: "Launch your business into the mobile-first world with our AI-enhanced cross-platform mobile applications.",
    description: "Built for iOS and Android with intelligent features like AI recommendations, predictive analytics, and seamless user experiences.",
    detailedDescription: "Our mobile app development leverages AI to create intuitive, engaging applications that adapt to user behavior. From concept to app store deployment, we handle everything including AI-powered features, performance optimization, and ongoing maintenance.",
    features: [
      "Cross-Platform Development (iOS & Android)",
      "AI-Enhanced User Experience",
      "Intelligent Recommendations Engine",
      "Real-time Analytics Integration",
      "Push Notification System",
      "App Store Optimization",
      "Performance Monitoring",
      "User Behavior Analytics"
    ],
    process: {
      tools: "React Native/Flutter Framework, AI/ML Libraries, Cloud Backend Services, Analytics Platforms, App Store Developer Accounts",
      timeline: "8-12 weeks development + 2 weeks app store approval",
      support: "Post-launch support, bug fixes, performance monitoring, feature updates, app store management"
    },
    futureGrowth: "Add advanced AI features, IoT integration, enterprise security, custom APIs, white-label solutions, and multi-platform expansion including web and desktop versions.",
    industryStandard: "$101,400–$253,500",
    deliverables: [
      "Native Mobile Application",
      "App Store Submission",
      "User Documentation",
      "Analytics Dashboard",
      "Performance Monitoring",
      "Maintenance Plan"
    ],
    supportItems: [
      "24/7 priority support channel",
      "Dedicated account manager",
      "Weekly progress updates",
      "Direct access to technical team",
      "30-day post-launch support",
      "Training and onboarding sessions"
    ],
    color: "from-purple-500 to-pink-500",
    icon: Smartphone
  },
  // AI Marketing & Advertising
  {
    id: "linkedin-advertising",
    category: "marketing",
    title: "AI-Driven LinkedIn Advertising",
    shortDescription: "Maximize your LinkedIn ROI with our AI-powered advertising campaigns.",
    description: "Our intelligent targeting and optimization algorithms ensure your ads reach the right professionals at the right time, delivering superior conversion rates.",
    detailedDescription: "Our LinkedIn advertising service uses advanced AI algorithms to analyze audience behavior, optimize ad performance in real-time, and maximize your return on investment. We handle everything from campaign strategy to performance analysis.",
    features: [
      "AI Audience Targeting & Segmentation",
      "Real-time Campaign Optimization",
      "Advanced A/B Testing",
      "Conversion Tracking & Analytics",
      "ROI Performance Monitoring",
      "Creative Optimization",
      "Bid Management",
      "Competitor Analysis"
    ],
    process: {
      tools: "LinkedIn Campaign Manager, AI Analytics Platforms, Creative Design Tools, Performance Tracking Software, Audience Research Tools",
      timeline: "1 week setup + ongoing monthly management",
      support: "Dedicated account manager, weekly check-ins, monthly strategy calls, real-time performance monitoring"
    },
    futureGrowth: "Expand to multi-platform campaigns, advanced retargeting, lead scoring integration, CRM synchronization, and enterprise-level reporting with custom dashboards.",
    industryStandard: "$8,450–$16,900/mo",
    deliverables: [
      "Campaign Strategy & Setup",
      "Ad Creative Development",
      "Weekly Performance Reports",
      "Monthly Optimization Analysis",
      "ROI Tracking Dashboard",
      "Audience Insights"
    ],
    supportItems: [
      "24/7 priority support channel",
      "Dedicated account manager",
      "Weekly progress updates",
      "Direct access to technical team",
      "30-day post-launch support",
      "Training and onboarding sessions"
    ],
    color: "from-blue-600 to-blue-800",
    icon: Linkedin
  },
  {
    id: "linkedin-revamp",
    category: "marketing",
    title: "LinkedIn Revamp & AI Content Strategy",
    shortDescription: "Transform your LinkedIn presence with our comprehensive profile optimization and AI-generated content strategy.",
    description: "Get 20 high-quality, engaging posts monthly that establish you as an industry thought leader.",
    detailedDescription: "Our LinkedIn transformation service combines professional profile optimization with AI-powered content creation to build your personal brand and generate quality leads. Each post is crafted to engage your target audience and drive meaningful connections.",
    features: [
      "Complete Profile Optimization",
      "AI Content Generation (20 posts/month)",
      "Strategic Posting Schedule",
      "Engagement Strategy Development",
      "Brand Voice Consistency",
      "Hashtag Research & Optimization",
      "Connection Strategy",
      "Performance Analytics"
    ],
    process: {
      tools: "AI Content Generation Tools, Social Media Management Platform, Analytics Software, Design Tools, Scheduling Platforms",
      timeline: "1 week profile optimization + ongoing monthly content",
      support: "Monthly strategy sessions, content approval process, performance reviews, engagement monitoring"
    },
    futureGrowth: "Add video content creation, LinkedIn newsletter management, advanced lead generation, personal branding workshops, and multi-executive management for teams.",
    industryStandard: "$5,070–$10,140",
    deliverables: [
      "Optimized LinkedIn Profile",
      "Monthly Content Calendar",
      "20 Custom Posts per Month",
      "Engagement Reports",
      "Growth Analytics",
      "Strategy Recommendations"
    ],
    supportItems: [
      "24/7 priority support channel",
      "Dedicated account manager",
      "Weekly progress updates",
      "Direct access to technical team",
      "30-day post-launch support",
      "Training and onboarding sessions"
    ],
    color: "from-blue-500 to-cyan-500",
    icon: Linkedin
  },
  {
    id: "linkedin-targeting",
    category: "marketing",
    title: "AI-Based LinkedIn Targeting & Lead Segmentation",
    shortDescription: "Discover and connect with your ideal prospects using our AI-powered lead identification and segmentation system.",
    description: "Our precision targeting ensures you focus your efforts on the highest-value opportunities.",
    detailedDescription: "Our advanced AI system analyzes millions of LinkedIn profiles to identify your perfect prospects, scores leads based on conversion probability, and creates detailed segmentation for personalized outreach campaigns.",
    features: [
      "AI Lead Scoring & Ranking",
      "Advanced Prospect Research",
      "Behavioral Segmentation Analysis",
      "Contact Database Management",
      "Targeting Optimization",
      "Intent Signal Detection",
      "Competitive Intelligence",
      "Pipeline Integration"
    ],
    process: {
      tools: "AI Lead Scoring Platforms, LinkedIn Sales Navigator, CRM Integration Tools, Data Analytics Software, Prospect Research Tools",
      timeline: "2 weeks initial setup + ongoing monthly updates",
      support: "Monthly database updates, quarterly strategy reviews, lead quality monitoring, segmentation refinement"
    },
    futureGrowth: "Integrate with marketing automation, add predictive analytics, expand to multi-platform prospecting, implement account-based marketing, and custom API integrations.",
    industryStandard: "$3,380–$8,450",
    deliverables: [
      "Qualified Lead Database",
      "Segmentation Reports",
      "Targeting Strategy Guide",
      "Monthly Lead Updates",
      "Performance Analytics",
      "Optimization Recommendations"
    ],
    supportItems: [
      "24/7 priority support channel",
      "Dedicated account manager",
      "Weekly progress updates",
      "Direct access to technical team",
      "30-day post-launch support",
      "Training and onboarding sessions"
    ],
    color: "from-purple-500 to-pink-500",
    icon: Target
  },
  {
    id: "cold-calling",
    category: "marketing",
    title: "AI-Assisted Cold Calling & Prospect Prioritization",
    shortDescription: "Revolutionize your cold calling success with AI-powered prospect prioritization and optimized call scripts.",
    description: "Our system ranks prospects by conversion probability and provides data-driven talking points.",
    detailedDescription: "Our AI calling system analyzes prospect data to prioritize your outreach efforts, creates personalized call scripts, and tracks performance to continuously improve your conversion rates. Perfect for scaling your sales efforts efficiently.",
    features: [
      "AI Prospect Scoring & Prioritization",
      "Dynamic Call Script Generation",
      "Performance Tracking & Analytics",
      "Follow-up Automation",
      "Conversion Rate Optimization",
      "Call Recording Analysis",
      "Success Pattern Recognition",
      "Territory Management"
    ],
    process: {
      tools: "AI Calling Platforms, CRM Integration, Call Recording Software, Analytics Tools, Script Optimization Systems",
      timeline: "1 week setup + ongoing monthly optimization",
      support: "Weekly performance reviews, script optimization, training sessions, call coaching, success analysis"
    },
    futureGrowth: "Add voice AI assistants, predictive dialing systems, advanced analytics, team management tools, and integration with enterprise sales platforms.",
    industryStandard: "$1,690–$5,070",
    deliverables: [
      "Prioritized Prospect Lists",
      "Custom Call Scripts",
      "Performance Analytics",
      "Training Materials",
      "Follow-up Sequences",
      "Success Reports"
    ],
    supportItems: [
      "24/7 priority support channel",
      "Dedicated account manager",
      "Weekly progress updates",
      "Direct access to technical team",
      "30-day post-launch support",
      "Training and onboarding sessions"
    ],
    color: "from-orange-500 to-red-500",
    icon: Headphones
  },
  {
    id: "social-advertising",
    category: "marketing",
    title: "AI-Based Instagram & Facebook Advertising",
    shortDescription: "Dominate social media advertising with our AI-optimized campaigns across Instagram and Facebook.",
    description: "Our intelligent creative optimization and bidding strategies maximize engagement and conversions.",
    detailedDescription: "Our social media advertising service leverages AI to create, test, and optimize ad campaigns that resonate with your target audience. From creative development to budget optimization, we handle every aspect of your social media advertising.",
    features: [
      "Multi-Platform Campaign Management",
      "AI Creative Optimization",
      "Advanced Audience Targeting",
      "Dynamic Budget Allocation",
      "Real-time Performance Analytics",
      "Conversion Tracking",
      "Retargeting Campaigns",
      "Creative A/B Testing"
    ],
    process: {
      tools: "Facebook Ads Manager, AI Creative Tools, Analytics Platforms, Design Software, Performance Tracking Tools",
      timeline: "1 week setup + ongoing monthly management",
      support: "Weekly performance reviews, creative optimization, audience refinement, budget management, strategy consultations"
    },
    futureGrowth: "Expand to additional platforms (TikTok, YouTube), add video advertising, implement advanced retargeting, integrate with e-commerce platforms, and enterprise-level reporting.",
    industryStandard: "$2,535–$5,070/mo",
    deliverables: [
      "Campaign Strategy & Setup",
      "Creative Ad Development",
      "Audience Research",
      "Monthly Performance Reports",
      "Optimization Recommendations",
      "ROI Analysis"
    ],
    supportItems: [
      "24/7 priority support channel",
      "Dedicated account manager",
      "Weekly progress updates",
      "Direct access to technical team",
      "30-day post-launch support",
      "Training and onboarding sessions"
    ],
    color: "from-pink-500 to-purple-500",
    icon: Instagram
  },
  {
    id: "content-creation",
    category: "marketing",
    title: "AI-Powered Content Creation & Marketing",
    shortDescription: "Scale your content marketing with our AI-driven content creation service.",
    description: "Get 10 high-quality pieces monthly, optimized for SEO and distributed across multiple channels for maximum impact.",
    detailedDescription: "Our content marketing service combines AI efficiency with human creativity to produce engaging, SEO-optimized content that drives traffic and conversions. Each piece is tailored to your brand voice and audience preferences.",
    features: [
      "AI Content Generation (10 pieces/month)",
      "SEO Optimization & Research",
      "Multi-Channel Distribution Strategy",
      "Performance Analytics & Tracking",
      "Brand Voice Consistency",
      "Content Calendar Planning",
      "Engagement Monitoring",
      "Conversion Optimization"
    ],
    process: {
      tools: "AI Writing Platforms, SEO Tools, Content Management Systems, Analytics Software, Distribution Platforms",
      timeline: "Ongoing monthly content creation and distribution",
      support: "Monthly strategy sessions, content approval process, performance reviews, SEO optimization, distribution management"
    },
    futureGrowth: "Add video content creation, podcast production, interactive content, advanced SEO strategies, influencer collaborations, and enterprise content management systems.",
    industryStandard: "$3,380–$8,450/mo",
    deliverables: [
      "Monthly Content Calendar",
      "Blog Posts & Articles",
      "Social Media Content",
      "Email Newsletter Content",
      "Performance Reports",
      "SEO Analysis"
    ],
    supportItems: [
      "24/7 priority support channel",
      "Dedicated account manager",
      "Weekly progress updates",
      "Direct access to technical team",
      "30-day post-launch support",
      "Training and onboarding sessions"
    ],
    color: "from-green-500 to-emerald-500",
    icon: FileText
  },
  // CRM & Automation
  {
    id: "crm-building",
    category: "crm",
    title: "AI-Powered CRM Building & Integration",
    shortDescription: "Build a custom CRM system powered by AI analytics and seamlessly integrated with your existing tools.",
    description: "Streamline your sales process with intelligent automation and predictive insights.",
    detailedDescription: "Our custom CRM development service creates a tailored customer relationship management system that grows with your business. Featuring AI-powered analytics, automated workflows, and seamless integrations with your favorite tools.",
    features: [
      "Custom CRM Development",
      "AI Analytics & Insights",
      "Third-party Tool Integrations",
      "Mobile Access & Apps",
      "Data Migration Services",
      "Workflow Automation",
      "Reporting Dashboards",
      "User Training & Support"
    ],
    process: {
      tools: "Custom Development Platforms, Database Systems, Integration APIs, Mobile Development Tools, Analytics Platforms",
      timeline: "6-8 weeks development + 2 weeks testing and training",
      support: "Ongoing technical support, system updates, user training, performance monitoring, feature enhancements"
    },
    futureGrowth: "Add advanced AI features, enterprise security, multi-location support, custom reporting, API development, and white-label solutions for resellers.",
    industryStandard: "$33,800–$84,500",
    deliverables: [
      "Custom CRM System",
      "Integration Setup",
      "Data Migration",
      "User Training Program",
      "Documentation Package",
      "Support Plan"
    ],
    supportItems: [
      "24/7 priority support channel",
      "Dedicated account manager",
      "Weekly progress updates",
      "Direct access to technical team",
      "30-day post-launch support",
      "Training and onboarding sessions"
    ],
    color: "from-blue-500 to-cyan-500",
    icon: Database
  },
  {
    id: "crm-analytics",
    category: "crm",
    title: "CRM Performance Tracking & Analytics",
    shortDescription: "Transform your CRM data into actionable insights with our comprehensive performance tracking and analytics dashboard.",
    description: "Monitor KPIs, track funnel performance, and optimize your sales process.",
    detailedDescription: "Our CRM analytics service provides deep insights into your sales performance, customer behavior, and business growth opportunities. Real-time dashboards and automated reports keep you informed and help you make data-driven decisions.",
    features: [
      "Real-time Performance Dashboards",
      "Advanced Analytics & Reporting",
      "Custom KPI Tracking",
      "Sales Funnel Analysis",
      "Data Visualization Tools",
      "Automated Report Generation",
      "Predictive Analytics",
      "Performance Benchmarking"
    ],
    process: {
      tools: "Analytics Platforms, Data Visualization Tools, Reporting Software, Dashboard Builders, Integration APIs",
      timeline: "2 weeks setup + ongoing monthly reporting",
      support: "Monthly performance reviews, dashboard updates, training sessions, optimization consultations, technical support"
    },
    futureGrowth: "Add predictive modeling, advanced AI insights, custom integrations, enterprise reporting, real-time alerts, and executive dashboard solutions.",
    industryStandard: "$8,450–$16,900",
    deliverables: [
      "Analytics Dashboard Setup",
      "Custom Reports",
      "Performance Insights",
      "Monthly Analysis",
      "Optimization Recommendations",
      "Training Materials"
    ],
    supportItems: [
      "24/7 priority support channel",
      "Dedicated account manager",
      "Weekly progress updates",
      "Direct access to technical team",
      "30-day post-launch support",
      "Training and onboarding sessions"
    ],
    color: "from-purple-500 to-pink-500",
    icon: BarChart3
  },
  {
    id: "custom-crm",
    category: "crm",
    title: "Custom Brand-Tailored CRM Creation",
    shortDescription: "Get a fully branded CRM solution designed specifically for your business processes and brand identity.",
    description: "Complete customization with workflows, fields, and features that match your unique needs.",
    detailedDescription: "Our brand-tailored CRM service creates a completely customized customer relationship management system that reflects your brand and supports your specific business processes. Every aspect is designed around your workflow and requirements.",
    features: [
      "Complete Brand Customization",
      "Custom Workflow Design",
      "Tailored Field Configuration",
      "Role-based Access Control",
      "Custom API Development",
      "Brand-specific Reporting",
      "Personalized User Interface",
      "Integration Architecture"
    ],
    process: {
      tools: "Custom Development Frameworks, Brand Design Tools, Database Systems, API Development Platforms, Testing Environments",
      timeline: "8-10 weeks development + 2 weeks brand integration and testing",
      support: "Dedicated support team, regular updates, brand consistency monitoring, feature enhancements, user training"
    },
    futureGrowth: "Expand to multi-brand support, franchise management, enterprise features, advanced customization, API marketplace, and white-label licensing opportunities.",
    industryStandard: "$50,700–$101,400",
    deliverables: [
      "Fully Branded CRM Platform",
      "Custom Workflow Setup",
      "Brand Integration Package",
      "User Training Program",
      "Documentation Suite",
      "Ongoing Support Plan"
    ],
    supportItems: [
      "24/7 priority support channel",
      "Dedicated account manager",
      "Weekly progress updates",
      "Direct access to technical team",
      "30-day post-launch support",
      "Training and onboarding sessions"
    ],
    color: "from-orange-500 to-red-500",
    icon: Settings
  },
  {
    id: "lead-generation",
    category: "crm",
    title: "AI-Based Lead Generation & Management",
    shortDescription: "Automate your lead generation and nurturing process with our AI-powered system.",
    description: "Intelligent lead scoring, automated nurturing campaigns, and seamless pipeline management.",
    detailedDescription: "Our AI lead generation service identifies, qualifies, and nurtures prospects automatically. Using machine learning algorithms, we score leads, personalize outreach, and optimize your conversion funnel for maximum results.",
    features: [
      "AI Lead Scoring & Qualification",
      "Automated Lead Nurturing",
      "Intelligent Pipeline Management",
      "Conversion Rate Optimization",
      "Multi-channel Lead Capture",
      "Behavioral Tracking",
      "Personalized Outreach",
      "Performance Analytics"
    ],
    process: {
      tools: "AI Lead Generation Platforms, Marketing Automation Tools, CRM Integration, Analytics Software, Email Marketing Systems",
      timeline: "2 weeks setup + ongoing monthly optimization",
      support: "Monthly performance reviews, campaign optimization, lead quality monitoring, system updates, strategy consultations"
    },
    futureGrowth: "Add advanced AI features, multi-channel integration, enterprise lead scoring, custom API development, and integration with sales acceleration platforms.",
    industryStandard: "$3,380–$6,760/mo",
    deliverables: [
      "Lead Generation System Setup",
      "Nurturing Campaign Creation",
      "Pipeline Configuration",
      "Monthly Performance Reports",
      "Lead Quality Analysis",
      "Optimization Recommendations"
    ],
    supportItems: [
      "24/7 priority support channel",
      "Dedicated account manager",
      "Weekly progress updates",
      "Direct access to technical team",
      "30-day post-launch support",
      "Training and onboarding sessions"
    ],
    color: "from-green-500 to-emerald-500",
    icon: Users
  },
  {
    id: "funnel-tracking",
    category: "crm",
    title: "Funnel Tracking & AI-Driven Insights",
    shortDescription: "Optimize your sales funnel with real-time tracking and AI-powered insights.",
    description: "Identify bottlenecks, improve conversion rates, and maximize revenue with data-driven recommendations.",
    detailedDescription: "Our funnel analytics service provides comprehensive tracking and analysis of your sales process. AI algorithms identify optimization opportunities, predict customer behavior, and recommend improvements to boost conversions.",
    features: [
      "Real-time Funnel Analytics",
      "AI-Powered Insights & Recommendations",
      "Conversion Rate Optimization",
      "A/B Testing Framework",
      "Performance Monitoring",
      "Bottleneck Identification",
      "Revenue Attribution",
      "Predictive Analytics"
    ],
    process: {
      tools: "Analytics Platforms, Funnel Tracking Tools, A/B Testing Software, Data Visualization Tools, Integration APIs",
      timeline: "1 week setup + ongoing monthly analysis",
      support: "Monthly optimization reviews, performance monitoring, testing coordination, insights delivery, strategy consultations"
    },
    futureGrowth: "Add advanced predictive modeling, customer journey mapping, enterprise analytics, custom integrations, and real-time optimization algorithms.",
    industryStandard: "$1,690–$4,225/mo",
    deliverables: [
      "Funnel Tracking Setup",
      "Analytics Dashboard",
      "Monthly Optimization Reports",
      "Performance Insights",
      "Improvement Recommendations",
      "A/B Testing Results"
    ],
    supportItems: [
      "24/7 priority support channel",
      "Dedicated account manager",
      "Weekly progress updates",
      "Direct access to technical team",
      "30-day post-launch support",
      "Training and onboarding sessions"
    ],
    color: "from-blue-600 to-purple-600",
    icon: TrendingUp
  },
  {
    id: "marketing-automation",
    category: "crm",
    title: "Complete Marketing Automation",
    shortDescription: "Implement end-to-end marketing automation that works with or without existing systems.",
    description: "Streamline your entire marketing workflow from lead capture to customer retention.",
    detailedDescription: "Our comprehensive marketing automation service creates seamless workflows that nurture leads, engage customers, and drive conversions automatically. Whether you have existing systems or need to start from scratch, we build automation that scales.",
    features: [
      "End-to-end Workflow Automation",
      "Email Marketing Campaigns",
      "Lead Nurturing Sequences",
      "Customer Journey Mapping",
      "Multi-channel Campaign Management",
      "Behavioral Trigger Setup",
      "Performance Tracking",
      "Integration Management"
    ],
    process: {
      tools: "Marketing Automation Platforms, Email Marketing Tools, CRM Integration, Analytics Software, Workflow Builders",
      timeline: "3-4 weeks setup + ongoing monthly management",
      support: "Dedicated automation specialist, monthly optimization, performance monitoring, workflow updates, strategy consultations"
    },
    futureGrowth: "Add advanced AI personalization, omnichannel automation, enterprise integrations, custom development, and marketing operations consulting.",
    industryStandard: "$16,900–$42,250",
    deliverables: [
      "Automation Strategy & Setup",
      "Workflow Design & Implementation",
      "Campaign Templates",
      "Performance Monitoring Dashboard",
      "Monthly Optimization Reports",
      "Training & Support"
    ],
    supportItems: [
      "24/7 priority support channel",
      "Dedicated account manager",
      "Weekly progress updates",
      "Direct access to technical team",
      "30-day post-launch support",
      "Training and onboarding sessions"
    ],
    color: "from-pink-500 to-red-500",
    icon: Zap
  },
  // Security & Support
  {
    id: "email-domain",
    category: "security",
    title: "Custom Email Domain Setup",
    shortDescription: "Establish professional credibility with a custom email domain configuration.",
    description: "Includes security features, spam protection, and seamless integration across all your devices.",
    detailedDescription: "Our email domain service provides professional email addresses that match your brand, complete with enterprise-level security, mobile synchronization, and reliable hosting. Perfect for building trust with clients and partners.",
    features: [
      "Professional Domain Configuration",
      "Enterprise Email Security",
      "Advanced Spam Protection",
      "Mobile Device Synchronization",
      "Backup & Recovery Solutions",
      "Email Encryption",
      "Calendar Integration",
      "Contact Management"
    ],
    process: {
      tools: "Domain Registration, Email Hosting Platform, Security Tools, Mobile Sync Software, Backup Solutions",
      timeline: "1-2 weeks setup + ongoing annual maintenance",
      support: "Email support, setup assistance, security monitoring, backup management, mobile configuration help"
    },
    futureGrowth: "Add enterprise email features, advanced security, team collaboration tools, email marketing integration, and multi-domain management.",
    industryStandard: "$169–$507",
    deliverables: [
      "Custom Email Domain Setup",
      "Security Configuration",
      "User Account Creation",
      "Mobile Setup Guide",
      "Backup System",
      "Support Documentation"
    ],
    supportItems: [
      "24/7 priority support channel",
      "Dedicated account manager",
      "Weekly progress updates",
      "Direct access to technical team",
      "30-day post-launch support",
      "Training and onboarding sessions"
    ],
    color: "from-blue-500 to-cyan-500",
    icon: Mail
  },
  {
    id: "cybersecurity",
    category: "security",
    title: "Cybersecurity & Data Protection",
    shortDescription: "Protect your business with comprehensive cybersecurity solutions including security audits, firewall setup, data encryption, and ongoing threat monitoring.",
    description: "Complete protection for your digital assets.",
    detailedDescription: "Our cybersecurity service provides complete protection for your digital assets. From initial security assessments to ongoing monitoring, we ensure your business data and systems are protected against evolving cyber threats.",
    features: [
      "Comprehensive Security Audits",
      "Advanced Data Encryption",
      "Firewall Configuration & Management",
      "Threat Monitoring & Detection",
      "Compliance Support",
      "Incident Response Planning",
      "Employee Security Training",
      "Regular Security Updates"
    ],
    process: {
      tools: "Security Assessment Tools, Firewall Systems, Encryption Software, Monitoring Platforms, Compliance Tools",
      timeline: "2-3 weeks initial setup + ongoing monthly monitoring",
      support: "24/7 security monitoring, incident response, regular updates, security consultations, compliance assistance"
    },
    futureGrowth: "Add enterprise security features, advanced threat intelligence, compliance management, security operations center (SOC) services, and custom security solutions.",
    industryStandard: "$8,450–$25,350",
    deliverables: [
      "Security Assessment Report",
      "Protection System Setup",
      "Monitoring Dashboard",
      "Monthly Security Reports",
      "Incident Response Plan",
      "Training Materials"
    ],
    supportItems: [
      "24/7 priority support channel",
      "Dedicated account manager",
      "Weekly progress updates",
      "Direct access to technical team",
      "30-day post-launch support",
      "Training and onboarding sessions"
    ],
    color: "from-red-500 to-orange-500",
    icon: Lock
  }
];

const processSteps = [
  {
    number: "01",
    title: "Discovery & Analysis",
    description: "We start by understanding your business goals, challenges, and current situation through comprehensive analysis.",
    icon: Search,
    color: "from-blue-500 to-cyan-500"
  },
  {
    number: "02",
    title: "Strategy Development",
    description: "Based on our findings, we create a customized strategy that aligns with your objectives and budget.",
    icon: Lightbulb,
    color: "from-purple-500 to-pink-500"
  },
  {
    number: "03",
    title: "Implementation",
    description: "Our expert team executes the strategy with precision, keeping you informed throughout the process.",
    icon: Rocket,
    color: "from-orange-500 to-red-500"
  },
  {
    number: "04",
    title: "Optimization & Growth",
    description: "We continuously monitor, analyze, and optimize performance to ensure maximum ROI and sustainable growth.",
    icon: TrendingUp,
    color: "from-green-500 to-emerald-500"
  }
];

const whyChooseFeatures = [
  { icon: Sparkles, title: "Innovation", description: "Cutting-edge AI solutions", color: "from-blue-500 to-cyan-500" },
  { icon: DollarSign, title: "Cost Savings", description: "Up to 57% below industry rates", color: "from-green-500 to-emerald-500" },
  { icon: Clock, title: "Fast Delivery", description: "Rapid implementation timelines", color: "from-orange-500 to-red-500" },
  { icon: Headphones, title: "Expert Support", description: "Dedicated ongoing assistance", color: "from-purple-500 to-pink-500" }
];

// Floating animation component
const FloatingElement = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  return (
    <motion.div
      animate={{
        y: [0, -20, 0],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
        delay: delay,
      }}
    >
      {children}
    </motion.div>
  );
};

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState("web-mobile");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const heroRef = useRef(null);
  const portfolioRef = useRef(null);
  const processRef = useRef(null);
  const whyChooseRef = useRef(null);
  const ctaRef = useRef(null);
  
  const heroInView = useInView(heroRef, { once: true, margin: "-100px" });
  const portfolioInView = useInView(portfolioRef, { once: true, margin: "-100px" });
  const processInView = useInView(processRef, { once: true, margin: "-100px" });
  const whyChooseInView = useInView(whyChooseRef, { once: true, margin: "-100px" });
  const ctaInView = useInView(ctaRef, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  
  const heroY = useTransform(smoothProgress, [0, 0.2], [0, 100]);
  const heroOpacity = useTransform(smoothProgress, [0, 0.2], [1, 0]);
  const heroScale = useTransform(smoothProgress, [0, 0.2], [1, 0.8]);

  const filteredServices = services.filter(s => s.category === activeCategory);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <main className="min-h-screen bg-white overflow-hidden">
      <Header />
      
      {/* Animated cursor follower */}
      <motion.div
        className="fixed w-6 h-6 rounded-full bg-blue-500/20 pointer-events-none z-50 mix-blend-multiply"
        animate={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      />
      
      {/* Hero Section with 3D parallax */}
      <section ref={heroRef} className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 pt-32 pb-20">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [360, 180, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"
          />
        </div>

        <motion.div 
          style={{ y: heroY, opacity: heroOpacity, scale: heroScale }}
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 50 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.2 }}
            >
              Our{" "}
              <motion.span
                className="inline-block"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 5, repeat: Infinity }}
                style={{
                  backgroundImage: "linear-gradient(90deg, #fff, #a78bfa, #fff)",
                  backgroundSize: "200% 100%",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Services
              </motion.span>
            </motion.h1>
            <motion.p 
              className="text-xl sm:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.4 }}
            >
              Comprehensive marketing and IT solutions designed to accelerate your business growth and digital transformation journey.
            </motion.p>
          </motion.div>
        </motion.div>
      </section>

      {/* AI-Powered Service Portfolio Section */}
      <section ref={portfolioRef} className="py-20 bg-gradient-to-b from-gray-50 to-white relative">
        {/* Floating decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <FloatingElement delay={0}>
            <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/10 rounded-full blur-xl" />
          </FloatingElement>
          <FloatingElement delay={1}>
            <div className="absolute top-40 right-20 w-32 h-32 bg-purple-500/10 rounded-full blur-xl" />
          </FloatingElement>
          <FloatingElement delay={2}>
            <div className="absolute bottom-40 left-1/4 w-24 h-24 bg-pink-500/10 rounded-full blur-xl" />
          </FloatingElement>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={portfolioInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <motion.h2 
              className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4"
              whileInView={{ scale: [0.9, 1] }}
              transition={{ duration: 0.5 }}
            >
              AI-Powered Service Portfolio
            </motion.h2>
            <motion.p 
              className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto mb-8"
              initial={{ opacity: 0 }}
              animate={portfolioInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Discover our comprehensive range of AI-driven services designed to transform your business operations and accelerate growth with significant savings compared to industry standard rates.
            </motion.p>
          </motion.div>

          {/* Category Tabs with 3D effect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={portfolioInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3 mb-16"
          >
            {categories.map((category, idx) => (
              <motion.button
                key={category.id}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                  z: 50,
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(category.id)}
                initial={{ opacity: 0, y: 20 }}
                animate={portfolioInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + idx * 0.1 }}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-all transform-gpu ${
                  activeCategory === category.id 
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-500/50" 
                    : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200 hover:shadow-md"
                }`}
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                <category.icon className="w-4 h-4" />
                {category.label}
              </motion.button>
            ))}
          </motion.div>

          {/* Service Cards with enhanced 3D animations */}
          <div className="space-y-8">
            {filteredServices.map((service, idx) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50, rotateX: -10 }}
                animate={portfolioInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ 
                  y: -10,
                  rotateX: 2,
                  rotateY: 2,
                  scale: 1.01,
                  transition: { duration: 0.3 }
                }}
                className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all transform-gpu"
                style={{
                  transformStyle: "preserve-3d",
                  perspective: "1000px",
                }}
              >
                <div className="grid lg:grid-cols-3 gap-8 p-8 lg:p-10">
                  {/* Left Column - Main Info */}
                  <div className="lg:col-span-2 space-y-6">
                    <motion.div 
                      className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} shadow-lg`}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <service.icon className="w-8 h-8 text-white" />
                    </motion.div>
                    
                    <div>
                      <h3 className="text-3xl font-bold text-gray-900 mb-3">
                        {service.title}
                      </h3>
                      <p className="text-lg text-gray-600 mb-4">
                        {service.description}
                      </p>
                    </div>

                    <motion.div 
                      className="bg-gray-50 rounded-2xl p-6"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h4 className="text-xl font-bold text-gray-900 mb-3">Detailed Service Description</h4>
                      <p className="text-gray-600 leading-relaxed">{service.detailedDescription}</p>
                    </motion.div>

                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-4">Key Features & Capabilities</h4>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {service.features.map((feature, featureIdx) => (
                          <motion.div 
                            key={feature} 
                            className="flex items-start gap-2"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: featureIdx * 0.05 }}
                            whileHover={{ x: 5 }}
                          >
                            <Check className="w-5 h-5 mt-0.5 flex-shrink-0 text-green-500" />
                            <span className="text-gray-700">{feature}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    <motion.div 
                      className="bg-blue-50 rounded-2xl p-6 space-y-4"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h4 className="text-xl font-bold text-gray-900">Process & Execution Details</h4>
                      <div className="space-y-3">
                        <div>
                          <span className="font-semibold text-gray-900">Software & Tools Required:</span>
                          <p className="text-gray-600">{service.process.tools}</p>
                        </div>
                        <div>
                          <span className="font-semibold text-gray-900">Timeline & Implementation:</span>
                          <p className="text-gray-600">{service.process.timeline}</p>
                        </div>
                        <div>
                          <span className="font-semibold text-gray-900">Ongoing Support & Follow-up:</span>
                          <p className="text-gray-600">{service.process.support}</p>
                        </div>
                      </div>
                    </motion.div>

                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-3">Future Growth & Upscale Solutions</h4>
                      <p className="text-gray-600">{service.futureGrowth}</p>
                    </div>
                  </div>

                  {/* Right Column - Pricing & CTA */}
                  <div className="space-y-6">
                    <motion.div 
                      className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-6 border border-gray-200 sticky top-24"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="text-center mb-6">
                        <p className="text-sm text-gray-600 mb-1">Industry Standard:</p>
                        <motion.p 
                          className="text-2xl font-bold text-gray-400 line-through mb-2"
                          whileHover={{ scale: 1.1 }}
                        >
                          {service.industryStandard}
                        </motion.p>
                        <motion.div 
                          className="inline-block bg-green-500 text-white px-4 py-2 rounded-full font-bold text-sm"
                          animate={{
                            scale: [1, 1.05, 1],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                          }}
                        >
                          Best Value
                        </motion.div>
                      </div>

                      <div className="mb-6 pb-6 border-b border-gray-200">
                        <p className="text-sm font-semibold text-gray-700 mb-2">Timeline:</p>
                        <p className="text-gray-600 text-sm">{service.process.timeline}</p>
                      </div>

                      <div className="mb-6">
                        <h5 className="font-bold text-gray-900 mb-3">Dedicated Support Included</h5>
                        <ul className="space-y-2 text-sm text-gray-600">
                          {service.supportItems.map((item, itemIdx) => (
                            <motion.li 
                              key={item} 
                              className="flex items-start gap-2"
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: itemIdx * 0.05 }}
                            >
                              <span className="text-blue-500 mt-1">•</span>
                              {item}
                            </motion.li>
                          ))}
                        </ul>
                      </div>

                      <div className="mb-6">
                        <h5 className="font-bold text-gray-900 mb-3">What You Receive:</h5>
                        <ul className="space-y-2 text-sm text-gray-600">
                          {service.deliverables.map((item, itemIdx) => (
                            <motion.li 
                              key={item} 
                              className="flex items-start gap-2"
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: itemIdx * 0.05 }}
                            >
                              <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                              {item}
                            </motion.li>
                          ))}
                        </ul>
                      </div>

                      <div className="space-y-3">
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                          <Button className={`w-full bg-gradient-to-r ${service.color} text-white rounded-xl py-6 font-semibold hover:shadow-lg transition-all text-base`}>
                            Get Detailed Quote
                          </Button>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                          <Button variant="outline" className="w-full border-2 border-blue-600 text-blue-600 rounded-xl py-6 font-semibold hover:bg-blue-50 text-base">
                            Schedule Consultation
                          </Button>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                          <Button variant="ghost" className="w-full text-gray-700 rounded-xl py-6 font-semibold hover:bg-gray-100 text-base">
                            <Download className="w-4 h-4 mr-2" />
                            Download Service Brochure
                          </Button>
                        </motion.div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What Are You Looking For Section */}
      <section ref={whyChooseRef} className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/50 to-pink-50/50" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={whyChooseInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              What Are You Looking For?
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto">
              Our AI-powered services can be customized and combined to create the perfect solution for your unique business needs. Save significantly compared to industry standard rates while getting premium quality and dedicated support.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {whyChooseFeatures.map((feature, idx) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30, rotateY: -20 }}
                animate={whyChooseInView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ 
                  y: -12, 
                  scale: 1.05,
                  rotateY: 5,
                  transition: { duration: 0.3 }
                }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all text-center border border-gray-100 transform-gpu"
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                <motion.div 
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mx-auto mb-4 shadow-lg`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={whyChooseInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl px-10 py-6 text-lg font-semibold shadow-lg">
                Schedule Free Consultation
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="lg" variant="outline" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 rounded-xl px-10 py-6 text-lg font-semibold">
                Request Custom Package Quote
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section ref={processRef} className="py-20 bg-gray-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={processInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Our Proven Process
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a systematic approach to ensure every project delivers exceptional results and exceeds your expectations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, idx) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 50, rotateX: -20 }}
                animate={processInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                whileHover={{ 
                  y: -12, 
                  scale: 1.05,
                  rotateX: 5,
                  rotateY: 5,
                  transition: { duration: 0.3 }
                }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all text-center border border-gray-100 transform-gpu"
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                <motion.div 
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} shadow-lg mb-4`}
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <span className="text-2xl font-bold text-white">{step.number}</span>
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with 3D effects */}
      <section ref={ctaRef} className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [0, -90, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={ctaInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-lg text-white/90 mb-8">
                Schedule a free consultation to discuss your project and learn how we can help you achieve your business goals.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 rounded-xl px-8 py-6 text-lg font-semibold shadow-lg">
                    Schedule Free Consultation
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button size="lg" variant="outline" className="border-2 border-white text-blue-600 bg-white hover:bg-gray-50 rounded-xl px-8 py-6 text-lg font-semibold">
                    View Our Portfolio
                  </Button>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50, rotateY: -20 }}
              animate={ctaInView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
              transition={{ duration: 0.8 }}
              whileHover={{ 
                scale: 1.02,
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
              className="bg-white rounded-3xl p-8 shadow-2xl transform-gpu"
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Transform Your Business Today</h3>
              <p className="text-gray-600 mb-6">
                Join hundreds of successful businesses that have accelerated their growth with PropelusAI's expert services.
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  "Free initial consultation and strategy session",
                  "Customized solutions for your specific needs",
                  "Ongoing support and optimization",
                  "Transparent pricing with no hidden fees"
                ].map((item, idx) => (
                  <motion.li 
                    key={item}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                  >
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </motion.li>
                ))}
              </ul>
              <div className="flex gap-3 mb-6">
                <motion.div className="flex-1" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-xl py-6 font-semibold">
                    Get Free Quote
                  </Button>
                </motion.div>
                <motion.div className="flex-1" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button variant="outline" className="w-full border-2 border-blue-600 text-blue-600 hover:bg-blue-50 rounded-xl py-6 font-semibold">
                    Call Us Now
                  </Button>
                </motion.div>
              </div>
              <div className="text-center pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-600 mb-2">Business transformation and growth</p>
                <div className="flex items-center justify-center gap-2">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  >
                    <Award className="w-8 h-8 text-green-500" />
                  </motion.div>
                  <div>
                    <motion.p 
                      className="text-4xl font-bold text-gray-900"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.5, type: "spring" }}
                    >
                      98%
                    </motion.p>
                    <p className="text-sm text-gray-600">Success Rate</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}