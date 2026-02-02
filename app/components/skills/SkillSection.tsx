type ColorVariant = "green" | "cyan" | "yellow" | "blue" | "purple";

/**
 * Props for the SkillSection component.
 */
interface SkillSectionProps {
  title: string;
  items: string[];
  color: ColorVariant;
  isCollapsed: boolean;
  onToggle: () => void;
  onSelectItem?: (item: string) => void;
}

/**
 * Get color classes based on the color variant and selection state.
 * @param color The color variant.
 * @returns An object containing header and item classes.
 */
const getColorClasses = (color: ColorVariant) => {
  const colors = {
    green: {
      header: "text-green-400 hover:text-green-300",
      item: "text-green-300 hover:text-green-400 hover:bg-green-500/10",
      selected: "bg-green-500/20 text-green-400",
    },
    cyan: {
      header: "text-cyan-400 hover:text-cyan-300",
      item: "text-cyan-300 hover:text-cyan-400 hover:bg-cyan-500/10",
      selected: "bg-cyan-500/20 text-cyan-400",
    },
    yellow: {
      header: "text-yellow-400 hover:text-yellow-300",
      item: "text-yellow-300 hover:text-yellow-400 hover:bg-yellow-500/10",
      selected: "bg-yellow-500/20 text-yellow-400",
    },
    blue: {
      header: "text-blue-400 hover:text-blue-300",
      item: "text-blue-300 hover:text-blue-400 hover:bg-blue-500/10",
      selected: "bg-blue-500/20 text-blue-400",
    },
    purple: {
      header: "text-purple-400 hover:text-purple-300",
      item: "text-purple-300 hover:text-purple-400 hover:bg-purple-500/10",
      selected: "bg-purple-500/20 text-purple-400",
    },
  };

  return {
    header: colors[color].header,
    item: colors[color].item,
  };
};

/**
 * SkillSection component displays a collapsible section of skills.
 * @param props The props for the SkillSection component.
 * @returns JSX.Element representing the SkillSection.
 */
export function SkillSection({
  title,
  items,
  color,
  isCollapsed,
  onToggle,
}: SkillSectionProps) {
  return (
    <div className="space-y-1">
      {/* Header */}
      <button
        onClick={onToggle}
        className={`flex items-center gap-2 transition-colors w-full cursor-pointer ${getColorClasses(color).header}`}
      >
        <span className="text-gray-600">{!isCollapsed ? "▸" : "▾"}</span>
        <span className="font-semibold">{title}</span>
        <span className="text-gray-600 text-sm">({items.length})</span>
      </button>

      {/* Items */}
      {isCollapsed && (
        <div className="pl-6">
          {items.map((item) => {
            const classes = getColorClasses(color);

            return (
              <div
                key={item}
                className={`block w-fit px-3 py-0.5 ${classes.item} rounded transition-all duration-200`}
              >
                {item}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
