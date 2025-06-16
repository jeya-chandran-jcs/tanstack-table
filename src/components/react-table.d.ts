
// import type { CustomTableMeta } from "../types";
import "@tanstack/react-table";

declare module "@tanstack/react-table" { 
     interface TableMeta {
    onDelete: (row: DataApi) => void;
    onEdit: (row: DataApi) => void;
  }
  }

