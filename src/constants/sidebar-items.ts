import { Icons } from "@/components/ui/icons";

import type { SvgIconProps } from "@mui/material";

interface MenuItem {
  icon: (props: SvgIconProps) => React.ReactElement;
  active?: boolean;
  label: string;
}

export const menuItems: MenuItem[] = [
  { icon: Icons.dashboard, label: "Dashboard" },
  { icon: Icons.options, label: "Options" },
  { icon: Icons.group63, active: true, label: "Filters" },
  { icon: Icons.shield, label: "Network" },
  { icon: Icons.setting, label: "Setting" },
  { icon: Icons.mask, label: "Mask" },
];
