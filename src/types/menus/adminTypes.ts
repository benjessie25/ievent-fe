
// Type pour les éléments du menu
import type React from 'react'

interface MenuItem {
  label: string;
  href: string;
  icon?: React.ReactNode;
  suffix?: React.ReactNode;
  target?: string;
}

// Type pour un sous-menu
interface SubMenu {
  label: string;
  icon?: React.ReactNode;
  suffix?: React.ReactNode;
  items: MenuItem[];
}

// Type pour les sections de menu (regroupant des sous-menus ou des éléments simples)
interface MenuSection {
  label?: string;
  items: Array<MenuItem | SubMenu>;
}

// Exemple de type général pour un menu
export interface MenuType {
  sections: MenuSection[];
}



