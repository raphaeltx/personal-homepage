"use client";

import { useState, useCallback } from "react";
import { DEVELOPER_INFO } from "@/app/constants/developerData";
import SkillSection from "./SkillSection";

/**
 * Section keys for the Skills component.
 */
type SectionKey =
  | "roles"
  | "languages"
  | "frameworks"
  | "runtime"
  | "versionControl"
  | "ides"
  | "testing"
  | "devops";

/**
 * Skills component displays various skill sections.
 * @returns JSX.Element representing the Skills component.
 */
export default function Skills() {
  const [collapsed, setCollapsed] = useState<Record<SectionKey, boolean>>({
    roles: true,
    languages: false,
    frameworks: false,
    runtime: false,
    versionControl: false,
    ides: false,
    testing: false,
    devops: false,
  });

  const toggleSection = useCallback((section: SectionKey) => {
    setCollapsed((prev) => ({ ...prev, [section]: !prev[section] }));
  }, []);

  const sections = [
    {
      key: "roles" as SectionKey,
      title: "roles",
      items: DEVELOPER_INFO.roles,
      color: "green" as const,
    },
    {
      key: "languages" as SectionKey,
      title: "languages",
      items: DEVELOPER_INFO.stack.languages,
      color: "cyan" as const,
    },
    {
      key: "frameworks" as SectionKey,
      title: "frameworks",
      items: DEVELOPER_INFO.stack.frameworks,
      color: "yellow" as const,
    },
    {
      key: "runtime" as SectionKey,
      title: "runtime",
      items: DEVELOPER_INFO.stack.runtime,
      color: "blue" as const,
    },
    {
      key: "versionControl" as SectionKey,
      title: "version control",
      items: DEVELOPER_INFO.stack.versionControl,
      color: "purple" as const,
    },
    {
      key: "ides" as SectionKey,
      title: "ides",
      items: DEVELOPER_INFO.stack.ides,
      color: "green" as const,
    },
    {
      key: "testing" as SectionKey,
      title: "testing",
      items: DEVELOPER_INFO.stack.testing,
      color: "cyan" as const,
    },
    {
      key: "devops" as SectionKey,
      title: "devops & cloud",
      items: DEVELOPER_INFO.stack.devops,
      color: "yellow" as const,
    },
  ];

  return (
    <section id="skills" className="mb-4 mt-4 space-y-3">
      {sections.map((section) => (
        <SkillSection
          key={section.key}
          title={section.title}
          items={section.items}
          color={section.color}
          isCollapsed={collapsed[section.key]}
          onToggle={() => toggleSection(section.key)}
        />
      ))}
    </section>
  );
}
