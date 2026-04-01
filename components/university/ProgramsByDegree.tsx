"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChevronRightIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { ProgramSummary } from "@/types/university";

interface ProgramsByDegreeProps {
  programs: ProgramSummary[];
  universitySlug: string;
}

const DEGREE_TABS = [
  { key: "bachelor" as const, label: "本科专业", badge: "本科" },
  { key: "master" as const, label: "硕士专业", badge: "硕士" },
  { key: "phd" as const, label: "博士专业", badge: "博士" },
];

type SortKey = "name" | "duration" | "tuition";
type SortDir = "asc" | "desc";

interface ColWidths {
  name: number;
  degree: number;
  field: number;
  duration: number;
  tuition: number;
  actions: number;
}

const INITIAL_WIDTHS: ColWidths = {
  name: 280,
  degree: 160,
  field: 160,
  duration: 80,
  tuition: 120,
  actions: 100,
};

function SortIndicator({ colKey, sortKey, sortDir }: { colKey: SortKey; sortKey: SortKey | null; sortDir: SortDir }) {
  if (sortKey !== colKey) {
    return <span className="ml-1 opacity-30 text-xs">⇅</span>;
  }
  return <span className="ml-1 text-blue-600 text-xs">{sortDir === "asc" ? "↑" : "↓"}</span>;
}

export default function ProgramsByDegree({ programs, universitySlug }: ProgramsByDegreeProps) {
  const router = useRouter();
  const grouped = {
    bachelor: programs.filter((p) => p.degree_level === "bachelor"),
    master: programs.filter((p) => p.degree_level === "master"),
    phd: programs.filter((p) => p.degree_level === "phd"),
  };

  const defaultTab = DEGREE_TABS.reduce((best, tab) =>
    grouped[tab.key].length > grouped[best.key].length ? tab : best
  ).key;

  const [activeTab, setActiveTab] = useState<"bachelor" | "master" | "phd">(defaultTab);

  // Sort state
  const [sortKey, setSortKey] = useState<SortKey | null>(null);
  const [sortDir, setSortDir] = useState<SortDir>("asc");

  // Column width state
  const [colWidths, setColWidths] = useState<ColWidths>(INITIAL_WIDTHS);

  // Drag state refs (not in state to avoid re-renders during drag)
  const dragColRef = useRef<keyof ColWidths | null>(null);
  const dragStartXRef = useRef<number>(0);
  const dragStartWidthRef = useRef<number>(0);

  const handleSortClick = (key: SortKey) => {
    if (sortKey === key) {
      setSortDir((d) => (d === "asc" ? "desc" : "asc"));
    } else {
      setSortKey(key);
      setSortDir("asc");
    }
  };

  const getSortedPrograms = (list: ProgramSummary[]) => {
    if (!sortKey) return list;
    return [...list].sort((a, b) => {
      let cmp = 0;
      if (sortKey === "name") {
        cmp = a.name_zh.localeCompare(b.name_zh, "zh-CN");
      } else if (sortKey === "duration") {
        cmp = a.duration_years - b.duration_years;
      } else if (sortKey === "tuition") {
        // null last
        if (a.tuition_international_myr === null && b.tuition_international_myr === null) cmp = 0;
        else if (a.tuition_international_myr === null) cmp = 1;
        else if (b.tuition_international_myr === null) cmp = -1;
        else cmp = a.tuition_international_myr - b.tuition_international_myr;
      }
      return sortDir === "asc" ? cmp : -cmp;
    });
  };

  const activePrograms = getSortedPrograms(grouped[activeTab]);

  // Drag handlers
  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!dragColRef.current) return;
    const dx = e.clientX - dragStartXRef.current;
    const newWidth = Math.max(60, dragStartWidthRef.current + dx);
    setColWidths((prev) => ({ ...prev, [dragColRef.current!]: newWidth }));
  }, []);

  const handleMouseUp = useCallback(() => {
    dragColRef.current = null;
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
    document.body.style.cursor = "";
    document.body.style.userSelect = "";
  }, [handleMouseMove]);

  const startDrag = useCallback(
    (e: React.MouseEvent, col: keyof ColWidths) => {
      e.preventDefault();
      dragColRef.current = col;
      dragStartXRef.current = e.clientX;
      dragStartWidthRef.current = colWidths[col];
      document.body.style.cursor = "col-resize";
      document.body.style.userSelect = "none";
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    },
    [colWidths, handleMouseMove, handleMouseUp]
  );

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [handleMouseMove, handleMouseUp]);

  const thStyle = (col: keyof ColWidths): React.CSSProperties => ({
    position: "relative",
    width: colWidths[col],
    minWidth: colWidths[col],
    maxWidth: colWidths[col],
  });

  const dragHandleStyle: React.CSSProperties = {
    position: "absolute",
    right: 0,
    top: "20%",
    height: "60%",
    width: 3,
    cursor: "col-resize",
    zIndex: 1,
    borderRadius: 2,
    backgroundColor: "rgba(156,163,175,0.5)", // gray-400 at 50%
    transition: "background-color 0.15s",
  };

  return (
    <div className="space-y-4">
      {/* Degree Level Tabs */}
      <div className="flex gap-2 overflow-x-auto pb-1">
        {DEGREE_TABS.map((tab) => {
          const count = grouped[tab.key].length;
          return (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors whitespace-nowrap ${
                activeTab === tab.key
                  ? "bg-blue-600 text-white shadow-sm"
                  : "bg-white text-gray-600 border border-gray-200 hover:bg-gray-50"
              }`}
            >
              {tab.label}
              <span
                className={`text-xs px-1.5 py-0.5 rounded-full ${
                  activeTab === tab.key
                    ? "bg-white/20 text-white"
                    : "bg-gray-100 text-gray-500"
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Programs Table */}
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
        {activePrograms.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="text-sm" style={{ tableLayout: "fixed", width: Object.values(colWidths).reduce((a, b) => a + b, 0) }}>
              <colgroup>
                <col style={{ width: colWidths.name }} />
                <col style={{ width: colWidths.degree }} />
                <col style={{ width: colWidths.field }} />
                <col style={{ width: colWidths.duration }} />
                <col style={{ width: colWidths.tuition }} />
                <col style={{ width: colWidths.actions }} />
              </colgroup>
              <thead>
                <tr className="bg-gray-50 text-left text-gray-600">
                  {/* 专业名称 — sortable */}
                  <th
                    className="px-5 py-3 font-medium select-none"
                    style={thStyle("name")}
                  >
                    <button
                      type="button"
                      onClick={() => handleSortClick("name")}
                      className="flex items-center hover:text-blue-600 transition-colors"
                    >
                      专业名称
                      <SortIndicator colKey="name" sortKey={sortKey} sortDir={sortDir} />
                    </button>
                    <DragHandle onMouseDown={(e) => startDrag(e, "name")} style={dragHandleStyle} />
                  </th>

                  {/* 学位 — not sortable, resizable */}
                  <th
                    className="px-5 py-3 font-medium hidden sm:table-cell select-none"
                    style={thStyle("degree")}
                  >
                    学位
                    <DragHandle onMouseDown={(e) => startDrag(e, "degree")} style={dragHandleStyle} />
                  </th>

                  {/* 领域 / 学院 — not sortable, resizable */}
                  <th
                    className="px-5 py-3 font-medium hidden md:table-cell select-none"
                    style={thStyle("field")}
                  >
                    领域 / 学院
                    <DragHandle onMouseDown={(e) => startDrag(e, "field")} style={dragHandleStyle} />
                  </th>

                  {/* 学制 — sortable */}
                  <th
                    className="px-5 py-3 font-medium select-none"
                    style={thStyle("duration")}
                  >
                    <button
                      type="button"
                      onClick={() => handleSortClick("duration")}
                      className="flex items-center hover:text-blue-600 transition-colors"
                    >
                      学制
                      <SortIndicator colKey="duration" sortKey={sortKey} sortDir={sortDir} />
                    </button>
                    <DragHandle onMouseDown={(e) => startDrag(e, "duration")} style={dragHandleStyle} />
                  </th>

                  {/* 费用 — sortable */}
                  <th
                    className="px-5 py-3 font-medium select-none"
                    style={thStyle("tuition")}
                  >
                    <button
                      type="button"
                      onClick={() => handleSortClick("tuition")}
                      className="flex items-center hover:text-blue-600 transition-colors"
                    >
                      费用
                      <SortIndicator colKey="tuition" sortKey={sortKey} sortDir={sortDir} />
                    </button>
                    <DragHandle onMouseDown={(e) => startDrag(e, "tuition")} style={dragHandleStyle} />
                  </th>

                  {/* 操作 — not sortable, resizable */}
                  <th
                    className="px-5 py-3 font-medium text-right select-none"
                    style={thStyle("actions")}
                  >
                    操作
                    <DragHandle onMouseDown={(e) => startDrag(e, "actions")} style={dragHandleStyle} />
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {activePrograms.map((prog) => {
                  const href = `/universities/${universitySlug}/programs/${prog.slug}`;
                  return (
                  <tr
                    key={prog.id}
                    className="hover:bg-blue-50/50 transition-colors group cursor-pointer"
                    onClick={() => router.push(href)}
                  >
                    <td className="px-5 py-4 overflow-hidden">
                      <div className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors truncate">{prog.name_zh}</div>
                      <div className="text-xs text-gray-400 mt-0.5 truncate">{prog.name_en}</div>
                    </td>
                    <td className="px-5 py-4 hidden sm:table-cell overflow-hidden">
                      <Badge className="bg-gray-100 text-gray-600 border-0 text-xs">
                        {prog.name_en.split("(")[0]?.trim() ?? prog.name_en}
                      </Badge>
                    </td>
                    <td className="px-5 py-4 text-gray-600 hidden md:table-cell overflow-hidden truncate">
                      {prog.faculty_zh ?? prog.field_category}
                    </td>
                    <td className="px-5 py-4 text-gray-700 whitespace-nowrap overflow-hidden">{prog.duration_years} 年</td>
                    <td className="px-5 py-4 text-gray-700 whitespace-nowrap overflow-hidden">
                      {prog.tuition_international_myr ? `RM ${prog.tuition_international_myr.toLocaleString()}` : "—"}
                    </td>
                    <td className="px-5 py-4 text-right overflow-hidden">
                      <span className="inline-flex items-center gap-1 text-blue-600 group-hover:text-blue-700 font-medium text-sm transition-colors">
                        查看详情
                        <ChevronRightIcon className="size-4" />
                      </span>
                    </td>
                  </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-center py-12 text-gray-400">
            暂无{DEGREE_TABS.find((t) => t.key === activeTab)?.label ?? ""}数据
          </p>
        )}
      </div>
    </div>
  );
}

// Drag handle sub-component
function DragHandle({
  onMouseDown,
  style,
}: {
  onMouseDown: (e: React.MouseEvent) => void;
  style: React.CSSProperties;
}) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      style={{ ...style, backgroundColor: hovered ? "#3b82f6" : "rgba(156,163,175,0.5)" }}
      onMouseDown={onMouseDown}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    />
  );
}
